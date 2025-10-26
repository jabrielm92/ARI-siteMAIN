import { NextResponse } from 'next/server';
import { db as getDB } from '@/lib/firebase';
import admin from 'firebase-admin';
import { getAdminDB } from '@/lib/firebase-admin';
import { collection, addDoc as addDocWeb, getDoc as getDocWeb, doc as docWeb, updateDoc as updateDocWeb, increment as incrementWeb, query, where, getDocs } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { coursesData } from '@/lib/courses-data';
import { generateDownloadToken, verifyDownloadToken } from '@/lib/download-link';
import sgMail from '@sendgrid/mail';

let sgInited = false;
function initSendGrid() {
  if (!sgInited && process.env.SENDGRID_API_KEY) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    sgInited = true;
  }
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

function usingAdmin() {
  return !!getAdminDB();
}

async function addOrder(orderData) {
  const adb = getAdminDB();
  if (adb) {
    const ref = await adb.collection('orders').add(orderData);
    return { id: ref.id };
  }
  const ref = await addDocWeb(collection(getDB(), 'orders'), orderData);
  return { id: ref.id };
}

async function getOrder(orderId) {
  const adb = getAdminDB();
  if (adb) {
    const snap = await adb.collection('orders').doc(orderId).get();
    return { exists: snap.exists, id: orderId, data: () => snap.data() };
  }
  const snap = await getDocWeb(docWeb(getDB(), 'orders', orderId));
  return { exists: snap.exists(), id: orderId, data: () => snap.data() };
}

async function updateOrderEmail(orderId, email) {
  const adb = getAdminDB();
  if (adb) {
    await adb.collection('orders').doc(orderId).update({ email, updatedAt: new Date().toISOString() });
    return;
  }
  await updateDocWeb(docWeb(getDB(), 'orders', orderId), { email, updatedAt: new Date().toISOString() });
}

async function incrementDownloads(orderId) {
  const adb = getAdminDB();
  if (adb) {
    await adb.collection('orders').doc(orderId).update({
      downloadAttempts: admin.firestore.FieldValue.increment(1),
      lastDownloadAt: new Date().toISOString(),
    });
    return;
  }
  await updateDocWeb(docWeb(getDB(), 'orders', orderId), {
    downloadAttempts: incrementWeb(1),
    lastDownloadAt: new Date().toISOString(),
  });
}

async function sendDownloadEmail(email, orderData, downloadLink) {
  try {
    initSendGrid();
    if (!process.env.SENDGRID_API_KEY || !process.env.SENDGRID_FROM_EMAIL) {
      console.warn('SendGrid not configured, skipping email');
      return { success: false };
    }
    const fromEmail = process.env.SENDGRID_FROM_EMAIL;
    const fromName = process.env.SENDGRID_FROM_NAME || 'ARI Solutions Inc';
    await sgMail.send({
      to: email,
      from: { email: fromEmail, name: fromName },
      subject: `Your Course Download - ${orderData.courseName}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111">
          <h2>Thank You for Your Purchase!</h2>
          <p>You now have access to <strong>${orderData.courseName}</strong>.</p>
          <p><a href="${downloadLink}" style="display:inline-block;background:#14b8a6;color:#fff;padding:10px 16px;border-radius:6px;text-decoration:none">Download Now</a></p>
          <p style="font-size:13px;color:#555">This link may expire and is limited to a few downloads. Keep this email for your records.</p>
        </div>`
    });
    return { success: true };
  } catch (e) {
    console.error('SendGrid send error:', e?.response?.body || e?.message || e);
    return { success: false, error: e?.message };
  }
}

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const path = url.pathname.replace('/api', '');

    // GET /api/orders/:id
    if (path.startsWith('/orders/')) {
      const id = path.replace('/orders/', '');
      const snap = await getOrder(id);
      if (!snap.exists) return NextResponse.json({ success: false, error: 'Order not found' }, { status: 404, headers: corsHeaders });
      const order = { id, ...snap.data() };
      const { token } = generateDownloadToken(id, order.courseId);
      return NextResponse.json({ success: true, order, downloadToken: token }, { headers: corsHeaders });
    }

    // GET /api/download/:token
    if (path.startsWith('/download/')) {
      const token = path.replace('/download/', '');
      const verification = verifyDownloadToken(token);
      if (!verification.valid) return NextResponse.json({ success: false, error: verification.error }, { status: 403, headers: corsHeaders });
      const snap = await getOrder(verification.orderId);
      if (!snap.exists) return NextResponse.json({ success: false, error: 'Order not found' }, { status: 404, headers: corsHeaders });
      const order = snap.data();
      const maxAttempts = parseInt(process.env.MAX_DOWNLOAD_ATTEMPTS || '3');
      if ((order.downloadAttempts || 0) >= maxAttempts) return NextResponse.json({ success: false, error: 'Maximum download attempts reached' }, { status: 403, headers: corsHeaders });
      await incrementDownloads(verification.orderId);
      const course = coursesData.find(c => c.id === order.courseId);
      if (!course?.downloadUrl) return NextResponse.json({ success: false, error: 'Course file not available' }, { status: 404, headers: corsHeaders });
      return NextResponse.redirect(course.downloadUrl, 302);
    }

    return NextResponse.json({ success: false, error: 'Endpoint not found' }, { status: 404, headers: corsHeaders });
  } catch (e) {
    console.error('GET API error:', e);
    return NextResponse.json({ success: false, error: e.message }, { status: 500, headers: corsHeaders });
  }
}

export async function POST(request) {
  try {
    const url = new URL(request.url);
    const path = url.pathname.replace('/api', '');
    const body = await request.json();

    // POST /api/paypal/process-hosted-payment
    if (path === '/paypal/process-hosted-payment') {
      const { transactionId, amount, currency, status, courseId, buyerEmail } = body || {};
      if (!transactionId || !status) return NextResponse.json({ success: false, error: 'Missing transaction data' }, { status: 400, headers: corsHeaders });
      if (String(status).toUpperCase() !== 'COMPLETED') return NextResponse.json({ success: false, error: 'Payment was not completed' }, { status: 400, headers: corsHeaders });

      const course = coursesData.find(c => c.id === courseId);
      const amt = parseFloat(amount || '0');
      const orderData = {
        orderId: uuidv4(),
        courseId: course?.id || 'unknown',
        courseName: course?.title || 'Course',
        courseSlug: course?.slug || 'courses',
        email: buyerEmail || 'customer@example.com',
        amount: isNaN(amt) ? (course?.price || 0) : amt,
        currency: currency || 'USD',
        status: 'completed',
        paypalOrderId: transactionId,
        paypalCaptureId: transactionId,
        payerName: 'PayPal Hosted Buttons',
        sizeMb: course?.sizeMb || 0,
        downloadAttempts: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      try {
        const { id: firestoreOrderId } = await addOrder(orderData);
        const { token } = generateDownloadToken(firestoreOrderId, course?.id);
        const downloadLink = `${process.env.NEXT_PUBLIC_BASE_URL}/api/download/${token}`;
        if (buyerEmail) await sendDownloadEmail(buyerEmail, { ...orderData, orderId: firestoreOrderId }, downloadLink);
        return NextResponse.json({ success: true, orderId: firestoreOrderId, downloadToken: token }, { headers: corsHeaders });
      } catch (err) {
        console.error('Hosted payment Firestore error:', err?.message || err);
        return NextResponse.json({ success: true, orderSaved: false, directDownloadUrl: course?.downloadUrl || null }, { headers: corsHeaders });
      }
    }

    // POST /api/orders/send-receipt { orderId, email }
    if (path === '/orders/send-receipt') {
      const { orderId, email } = body || {};
      if (!orderId || !email) return NextResponse.json({ success: false, error: 'orderId and email required' }, { status: 400, headers: corsHeaders });
      const snap = await getOrder(orderId);
      if (!snap.exists) return NextResponse.json({ success: false, error: 'Order not found' }, { status: 404, headers: corsHeaders });
      const order = { id: orderId, ...snap.data() };
      await updateOrderEmail(orderId, email);
      const { token } = generateDownloadToken(orderId, order.courseId);
      const link = `${process.env.NEXT_PUBLIC_BASE_URL}/api/download/${token}`;
      await sendDownloadEmail(email, { ...order, orderId }, link);
      return NextResponse.json({ success: true }, { headers: corsHeaders });
    }

    return NextResponse.json({ success: false, error: 'Endpoint not found' }, { status: 404, headers: corsHeaders });
  } catch (e) {
    console.error('POST API error:', e);
    return NextResponse.json({ success: false, error: e.message }, { status: 500, headers: corsHeaders });
  }
}
