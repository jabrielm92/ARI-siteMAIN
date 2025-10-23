import { NextResponse } from 'next/server';
import { db as getDB } from '@/lib/firebase';
import { collection, addDoc, getDoc, doc, updateDoc, query, where, getDocs, increment } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { coursesData } from '@/lib/courses-data';
import { generateDownloadToken, verifyDownloadToken } from '@/lib/download-link';
import { Resend } from 'resend';
import { put } from '@vercel/blob';

// Lazy initialize Resend to avoid build-time errors
let resendClient = null;
function getResendClient() {
  if (!resendClient && process.env.RESEND_API_KEY) {
    resendClient = new Resend(process.env.RESEND_API_KEY);
  }
  return resendClient;
}

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// Handle OPTIONS requests
export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

// PayPal API helper
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

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(`${process.env.PAYPAL_API_URL}${path}`, options);
  const data = await response.json();
  
  return { status: response.status, data };
}

// Send email with download link
async function sendDownloadEmail(email, orderData, downloadLink) {
  try {
    const resend = getResendClient();
    if (!resend) {
      console.error('Resend client not initialized - email not sent');
      return { success: false, error: 'Email service not configured' };
    }
    
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: email,
      subject: `Your Course Download - ${orderData.courseName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
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
                  • This link expires in 72 hours<br>
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
    });

    if (error) {
      console.error('Email send error:', error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Email send exception:', error);
    return { success: false, error: error.message };
  }
}

export async function GET(request) {
  const url = new URL(request.url);
  const path = url.pathname.replace('/api', '');

  try {
    // GET /api/courses - List all courses
    if (path === '/courses') {
      return NextResponse.json({
        success: true,
        courses: coursesData
      }, { headers: corsHeaders });
    }

    // GET /api/courses/:slug - Get course by slug
    if (path.startsWith('/courses/')) {
      const slug = path.replace('/courses/', '');
      const course = coursesData.find(c => c.slug === slug);
      
      if (!course) {
        return NextResponse.json(
          { success: false, error: 'Course not found' },
          { status: 404, headers: corsHeaders }
        );
      }

      return NextResponse.json({
        success: true,
        course
      }, { headers: corsHeaders });
    }

    // GET /api/orders/:orderId - Get order details
    if (path.startsWith('/orders/')) {
      const orderId = path.replace('/orders/', '');
      
      const orderDoc = await getDoc(doc(getDB(), 'orders', orderId));
      
      if (!orderDoc.exists()) {
        return NextResponse.json(
          { success: false, error: 'Order not found' },
          { status: 404, headers: corsHeaders }
        );
      }

      const orderData = { id: orderDoc.id, ...orderDoc.data() };
      
      // Generate download link if order is completed
      let downloadToken = null;
      if (orderData.status === 'completed') {
        const { token } = generateDownloadToken(orderId, orderData.courseId);
        downloadToken = token;
      }

      return NextResponse.json({
        success: true,
        order: orderData,
        downloadToken
      }, { headers: corsHeaders });
    }

    // GET /api/download/:token - Download course file
    if (path.startsWith('/download/')) {
      const token = path.replace('/download/', '');
      
      // Verify token
      const verification = verifyDownloadToken(token);
      
      if (!verification.valid) {
        return NextResponse.json(
          { success: false, error: verification.error },
          { status: 403, headers: corsHeaders }
        );
      }

      // Get order to check download attempts
      const orderDoc = await getDoc(doc(db, 'orders', verification.orderId));
      
      if (!orderDoc.exists()) {
        return NextResponse.json(
          { success: false, error: 'Order not found' },
          { status: 404, headers: corsHeaders }
        );
      }

      const orderData = orderDoc.data();
      const maxAttempts = parseInt(process.env.MAX_DOWNLOAD_ATTEMPTS || '3');
      
      if (orderData.downloadAttempts >= maxAttempts) {
        return NextResponse.json(
          { success: false, error: 'Maximum download attempts reached' },
          { status: 403, headers: corsHeaders }
        );
      }

      // Increment download attempts
      await updateDoc(doc(getDB(), 'orders', verification.orderId), {
        downloadAttempts: increment(1),
        lastDownloadAt: new Date().toISOString()
      });

      // Get course info
      const course = coursesData.find(c => c.id === orderData.courseId);
      
      if (!course) {
        return NextResponse.json(
          { success: false, error: 'Course not found' },
          { status: 404, headers: corsHeaders }
        );
      }

      // For demo, return a JSON file with course info
      // In production, this would redirect to the actual ZIP file from Vercel Blob
      const demoContent = JSON.stringify({
        courseName: course.title,
        message: 'This is a demo download. In production, this would be a ZIP file with course materials.',
        modules: course.modules,
        includes: course.whatsIncluded,
        downloadedAt: new Date().toISOString(),
        orderId: verification.orderId
      }, null, 2);

      return new NextResponse(demoContent, {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
          'Content-Disposition': `attachment; filename="${course.slug}-course-materials.json"`,
        }
      });
    }

    return NextResponse.json(
      { success: false, error: 'Endpoint not found' },
      { status: 404, headers: corsHeaders }
    );

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function POST(request) {
  const url = new URL(request.url);
  const path = url.pathname.replace('/api', '');

  try {
    const body = await request.json();

    // POST /api/paypal/create-order - Create PayPal order
    if (path === '/paypal/create-order') {
      const { courseId } = body;
      
      const course = coursesData.find(c => c.id === courseId);
      
      if (!course) {
        return NextResponse.json(
          { success: false, error: 'Course not found' },
          { status: 404, headers: corsHeaders }
        );
      }

      // Create PayPal order
      const { status, data } = await paypalRequest('/v2/checkout/orders', 'POST', {
        intent: 'CAPTURE',
        purchase_units: [
          {
            reference_id: courseId,
            description: course.title,
            amount: {
              currency_code: 'USD',
              value: course.price.toFixed(2),
            },
          },
        ],
        application_context: {
          brand_name: 'ARI Solutions Inc',
          landing_page: 'NO_PREFERENCE',
          user_action: 'PAY_NOW',
          return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/orders/success`,
          cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/courses/${course.slug}`,
        },
      });

      if (status !== 201) {
        return NextResponse.json(
          { success: false, error: 'Failed to create PayPal order', details: data },
          { status: 500, headers: corsHeaders }
        );
      }

      return NextResponse.json(
        { success: true, orderId: data.id },
        { headers: corsHeaders }
      );
    }

    // POST /api/paypal/capture - Capture PayPal order
    if (path === '/paypal/capture') {
      const { orderId, courseId, email } = body;

      // Capture the order
      const { status, data } = await paypalRequest(
        `/v2/checkout/orders/${orderId}/capture`,
        'POST'
      );

      if (status !== 201 || data.status !== 'COMPLETED') {
        return NextResponse.json(
          { success: false, error: 'Payment capture failed', details: data },
          { status: 400, headers: corsHeaders }
        );
      }

      // Get course info
      const course = coursesData.find(c => c.id === courseId);
      
      if (!course) {
        return NextResponse.json(
          { success: false, error: 'Course not found' },
          { status: 404, headers: corsHeaders }
        );
      }

      // Create order in Firestore
      const captureAmount = parseFloat(data.purchase_units[0].payments.captures[0].amount.value);
      const customerEmail = email || data.payer?.email_address || 'customer@example.com';
      
      const orderData = {
        orderId: uuidv4(),
        courseId: course.id,
        courseName: course.title,
        courseSlug: course.slug,
        email: customerEmail,
        amount: captureAmount,
        currency: 'USD',
        status: 'completed',
        paypalOrderId: orderId,
        paypalCaptureId: data.purchase_units[0].payments.captures[0].id,
        payerName: data.payer?.name?.given_name + ' ' + data.payer?.name?.surname || 'Customer',
        sizeMb: course.sizeMb || 0,
        downloadAttempts: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      const docRef = await addDoc(collection(db, 'orders'), orderData);
      const firestoreOrderId = docRef.id;

      // Generate download token
      const { token } = generateDownloadToken(firestoreOrderId, course.id);
      const downloadLink = `${process.env.NEXT_PUBLIC_BASE_URL}/orders/${firestoreOrderId}?token=${token}`;

      // Send email
      await sendDownloadEmail(customerEmail, {
        ...orderData,
        orderId: firestoreOrderId
      }, downloadLink);

      return NextResponse.json({
        success: true,
        orderId: firestoreOrderId,
        downloadToken: token
      }, { headers: corsHeaders });
    }

    // POST /api/orders/lookup - Look up order by email or order ID
    if (path === '/orders/lookup') {
      const { email, orderId } = body;

      if (orderId) {
        const orderDoc = await getDoc(doc(getDB(), 'orders', orderId));
        
        if (!orderDoc.exists()) {
          return NextResponse.json(
            { success: false, error: 'Order not found' },
            { status: 404, headers: corsHeaders }
          );
        }

        return NextResponse.json({
          success: true,
          order: { id: orderDoc.id, ...orderDoc.data() }
        }, { headers: corsHeaders });
      }

      if (email) {
        const q = query(collection(db, 'orders'), where('email', '==', email));
        const querySnapshot = await getDocs(q);
        
        const orders = [];
        querySnapshot.forEach((doc) => {
          orders.push({ id: doc.id, ...doc.data() });
        });

        return NextResponse.json({
          success: true,
          orders
        }, { headers: corsHeaders });
      }

      return NextResponse.json(
        { success: false, error: 'Email or order ID required' },
        { status: 400, headers: corsHeaders }
      );
    }

    return NextResponse.json(
      { success: false, error: 'Endpoint not found' },
      { status: 404, headers: corsHeaders }
    );

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500, headers: corsHeaders }
    );
  }
}
