import { NextResponse } from 'next/server';
import { db as getDB } from '@/lib/firebase';
import { collection, addDoc as addDocWeb, getDoc as getDocWeb, doc as docWeb, updateDoc as updateDocWeb, query, where, getDocs, increment as incrementWeb } from 'firebase/firestore';
import admin from 'firebase-admin';
import { getAdminDB } from '@/lib/firebase-admin';
import { v4 as uuidv4 } from 'uuid';
import { coursesData } from '@/lib/courses-data';
import { generateDownloadToken, verifyDownloadToken } from '@/lib/download-link';
import sgMail from '@sendgrid/mail';

// Lazy init SendGrid
let sgInited = false;
function initSendGrid() {
  if (!sgInited && process.env.SENDGRID_API_KEY) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    sgInited = true;
  }
}

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// Helper DB wrappers (Admin preferred)
function usingAdmin() {
  return !!getAdminDB();
}

async function addOrder(orderData) {
  const adb = getAdminDB();
  if (adb) {
    const ref = await adb.collection('orders').add(orderData);
    return { id: ref.id };
  }
  const docRef = await addDocWeb(collection(getDB(), 'orders'), orderData);
  return { id: docRef.id };
}

async function getOrder(orderId) {
  const adb = getAdminDB();
  if (adb) {
    const snap = await adb.collection('orders').doc(orderId).get();
    return { exists: snap.exists, id: snap.id, data: () => snap.data() };
  }
  const snap = await getDocWeb(docWeb(getDB(), 'orders', orderId));
  return { exists: snap.exists(), id: orderId, data: () => snap.data() };
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

// Handle OPTIONS requests
export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

// PayPal API helper (kept for smart buttons path)
async function paypalRequest(path, method = 'GET', body = null) {
  const auth = Buffer.from(
    `${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`
  ).toString('base64');

  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${auth}`,
    },
  };

  if (body) options.body = JSON.stringify(body);

  const response = await fetch(`${process.env.PAYPAL_API_URL}${path}`, options);
  const data = await response.json();
  return { status: response.status, data };
}

// Send email with download link (SendGrid)
async function sendDownloadEmail(email, orderData, downloadLink) {
  try {
    initSendGrid();
    if (!sgInited) {
      console.error('SendGrid not configured - email not sent');
      return { success: false, error: 'Email service not configured' };
    }

    const fromEmail = process.env.SENDGRID_FROM_EMAIL;
    const fromName = process.env.SENDGRID_FROM_NAME || 'ARI Solutions Inc';

    const msg = {
      to: email,
      from: { email: fromEmail, name: fromName },
      subject: `Your Course Download - ${orderData.courseName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #0a1628; color: #fff; padding: 30px; text-align: center; }
              .content { background: #f9fafb; padding: 30px; }
              .button { display: inline-block; background: #14b8a6; color: #fff; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
              .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
              .info-box { background: #fff; border-left: 4px solid #14b8a6; padding: 15px; margin: 20px 0; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Thank You for Your Purchase!</h1>
              </div>
              <div class="content">
                <h2>Hi there,</h2>
                <p>Your payment has been successfully processed. You now have access to:</p>
                <h3>${orderData.courseName}</h3>
                <div class="info-box">
                  <strong>Order Details:</strong><br>
                  Order ID: ${orderData.orderId}<br>
                  Amount Paid: $${orderData.amount}<br>
                  Date: ${new Date(orderData.createdAt).toLocaleDateString()}
                </div>
                <p><strong>Download Your Course:</strong></p>
                <a href="${downloadLink}" class="button">Download Now</a>
                <p style="font-size: 14px; color: #666;">
                  <strong>Important:</strong><br>
                  • This link may expire in 72 hours<br>
                  • You can download up to 3 times<br>
                  • Keep this email for your records<br>
                  • File size: ${orderData.sizeMb} MB
                </p>
                <p>If you have any questions or issues, reply to this email and we'll help you right away.</p>
                <p>Welcome to the ARI Solutions community!</p>
              </div>
              <div class="footer">
                <p>ARI Solutions Inc - Automation-Ready Income Solutions</p>
                <p>This email was sent because you purchased a course from our website.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    await sgMail.send(msg);
    return { success: true };
  } catch (error) {
    console.error('SendGrid email error:', error?.response?.body || error?.message || error);
    return { success: false, error: error?.message || 'Email send failed' };
  }
}

export async function GET(request) {
  const url = new URL(request.url);
  const path = url.pathname.replace('/api', '');

  try {
    // GET /api/courses
    if (path === '/courses') {
      return NextResponse.json({ success: true, courses: coursesData }, { headers: corsHeaders });
    }

    // GET /api/courses/:slug
    if (path.startsWith('/courses/')) {
      const slug = path.replace('/courses/', '');
      const course = coursesData.find(c => c.slug === slug);
      if (!course) return NextResponse.json({ success: false, error: 'Course not found' }, { status: 404, headers: corsHeaders });
      return NextResponse.json({ success: true, course }, { headers: corsHeaders });
    }

    // GET /api/orders/:orderId
    if (path.startsWith('/orders/')) {
      const orderId = path.replace('/orders/', '');
      const snap = await getOrder(orderId);
      if (!snap.exists) return NextResponse.json({ success: false, error: 'Order not found' }, { status: 404, headers: corsHeaders });
      const orderData = { id: orderId, ...snap.data() };
      let downloadToken = null;
      if (orderData.status === 'completed') {
        const { token } = generateDownloadToken(orderId, orderData.courseId);
        downloadToken = token;
      }
      return NextResponse.json({ success: true, order: orderData, downloadToken }, { headers: corsHeaders });
    }

    // GET /api/download/:token
    if (path.startsWith('/download/')) {
      const token = path.replace('/download/', '');
      const verification = verifyDownloadToken(token);
      if (!verification.valid) return NextResponse.json({ success: false, error: verification.error }, { status: 403, headers: corsHeaders });
      const snap = await getOrder(verification.orderId);
      if (!snap.exists) return NextResponse.json({ success: false, error: 'Order not found' }, { status: 404, headers: corsHeaders });
      const orderData = snap.data();
      const maxAttempts = parseInt(process.env.MAX_DOWNLOAD_ATTEMPTS || '3');
      if ((orderData.downloadAttempts || 0) >= maxAttempts) return NextResponse.json({ success: false, error: 'Maximum download attempts reached' }, { status: 403, headers: corsHeaders });
      await incrementDownloads(verification.orderId);
      const course = coursesData.find(c => c.id === orderData.courseId);
      if (!course?.downloadUrl) return NextResponse.json({ success: false, error: 'Course file not available. Please contact support.' }, { status: 404, headers: corsHeaders });
      return NextResponse.redirect(course.downloadUrl, 302);
    }

    return NextResponse.json({ success: false, error: 'Endpoint not found' }, { status: 404, headers: corsHeaders });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500, headers: corsHeaders });
  }
}

export async function POST(request) {
  const url = new URL(request.url);
  const path = url.pathname.replace('/api', '');

  try {
    const body = await request.json();

    if (path === '/paypal/create-order') {
      const { courseId } = body;
      const course = coursesData.find(c => c.id === courseId);
      if (!course) return NextResponse.json({ success: false, error: 'Course not found' }, { status: 404, headers: corsHeaders });
      const { status, data } = await paypalRequest('/v2/checkout/orders', 'POST', {
        intent: 'CAPTURE',
        purchase_units: [{ reference_id: courseId, description: course.title, amount: { currency_code: 'USD', value: course.price.toFixed(2) } }],
        application_context: { brand_name: 'ARI Solutions Inc', landing_page: 'NO_PREFERENCE', user_action: 'PAY_NOW', return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/${courseId}`, cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/${courseId}` },
      });
      if (status !== 201) return NextResponse.json({ success: false, error: 'Failed to create PayPal order', details: data }, { status: 500, headers: corsHeaders });
      return NextResponse.json({ success: true, orderId: data.id }, { headers: corsHeaders });
    }

    if (path === '/paypal/capture') {
      const { orderId, courseId, email } = body;
      const { status, data } = await paypalRequest(`/v2/checkout/orders/${orderId}/capture`, 'POST');
      if (status !== 201 || data.status !== 'COMPLETED') return NextResponse.json({ success: false, error: 'Payment capture failed', details: data }, { status: 400, headers: corsHeaders });
      const course = coursesData.find(c => c.id === courseId);
      if (!course) return NextResponse.json({ success: false, error: 'Course not found' }, { status: 404, headers: corsHeaders });
      const captureAmount = parseFloat(data.purchase_units[0].payments.captures[0].amount.value);
      const customerEmail = email || data.payer?.email_address || 'customer@example.com';
      const orderData = { orderId: uuidv4(), courseId: course.id, courseName: course.title, courseSlug: course.slug, email: customerEmail, amount: captureAmount, currency: 'USD', status: 'completed', paypalOrderId: orderId, paypalCaptureId: data.purchase_units[0].payments.captures[0].id, payerName: (data.payer?.name?.given_name + ' ' + data.payer?.name?.surname) || 'Customer', sizeMb: course.sizeMb || 0, downloadAttempts: 0, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
      const { id: firestoreOrderId } = await addOrder(orderData);
      const { token } = generateDownloadToken(firestoreOrderId, course.id);
      const downloadLink = `${process.env.NEXT_PUBLIC_BASE_URL}/orders/${firestoreOrderId}?token=${token}`;
      await sendDownloadEmail(customerEmail, { ...orderData, orderId: firestoreOrderId }, downloadLink);
      return NextResponse.json({ success: true, orderId: firestoreOrderId, downloadToken: token }, { headers: corsHeaders });
    }

    if (path === '/paypal/process-hosted-payment') {
      const { transactionId, amount, currency, status, courseId } = body || {};
      if (!transactionId || !status) return NextResponse.json({ success: false, error: 'Missing transaction data' }, { status: 400, headers: corsHeaders });
      if (String(status).toUpperCase() !== 'COMPLETED') return NextResponse.json({ success: false, error: 'Payment was not completed' }, { status: 400, headers: corsHeaders });
      const course = coursesData.find(c => c.id === courseId);
      const amt = parseFloat(amount || '0');
      const orderData = { orderId: uuidv4(), courseId: course?.id || 'unknown', courseName: course?.title || 'Course', courseSlug: course?.slug || 'courses', email: 'customer@example.com', amount: isNaN(amt) ? (course?.price || 0) : amt, currency: currency || 'USD', status: 'completed', paypalOrderId: transactionId, paypalCaptureId: transactionId, payerName: 'PayPal Hosted Buttons', sizeMb: course?.sizeMb || 0, downloadAttempts: 0, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
      try {
        const { id: firestoreOrderId } = await addOrder(orderData);
        const { token } = generateDownloadToken(firestoreOrderId, course?.id);
        return NextResponse.json({ success: true, orderId: firestoreOrderId, downloadToken: token }, { headers: corsHeaders });
      } catch (err) {
        console.error('Hosted payment Firestore error:', err?.message || err);
        return NextResponse.json({ success: true, orderSaved: false, directDownloadUrl: course?.downloadUrl || null }, { headers: corsHeaders });
      }
    }

    if (path === '/orders/lookup') {
      const { email, orderId } = body;
      if (orderId) {
        const snap = await getOrder(orderId);
        if (!snap.exists) return NextResponse.json({ success: false, error: 'Order not found' }, { status: 404, headers: corsHeaders });
        return NextResponse.json({ success: true, order: { id: orderId, ...snap.data() } }, { headers: corsHeaders });
      }
      if (email) {
        // For Admin DB, use query; for Web SDK use existing
        if (usingAdmin()) {
          const adb = getAdminDB();
          const qSnap = await adb.collection('orders').where('email', '==', email).get();
          const orders = qSnap.docs.map(d => ({ id: d.id, ...d.data() }));
          return NextResponse.json({ success: true, orders }, { headers: corsHeaders });
        } else {
          const q = query(collection(getDB(), 'orders'), where('email', '==', email));
          const querySnapshot = await getDocs(q);
          const orders = [];
          querySnapshot.forEach((d) => orders.push({ id: d.id, ...d.data() }));
          return NextResponse.json({ success: true, orders }, { headers: corsHeaders });
        }
      }
      return NextResponse.json({ success: false, error: 'Email or order ID required' }, { status: 400, headers: corsHeaders });
    }

    return NextResponse.json({ success: false, error: 'Endpoint not found' }, { status: 404, headers: corsHeaders });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500, headers: corsHeaders });
  }
}
