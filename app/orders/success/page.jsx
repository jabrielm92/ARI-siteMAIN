"use client";
export const dynamic = 'force-dynamic';

import { Suspense, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle2, Download, Mail, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { coursesData } from '@/lib/courses-data';

function OrderSuccessInner() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const [downloadHref, setDownloadHref] = useState(null);
  const [emailForReceipt, setEmailForReceipt] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const tx = searchParams.get('tx');
  const amount = searchParams.get('am') || searchParams.get('amt');
  const status = searchParams.get('st');
  const currency = searchParams.get('cr') || searchParams.get('cc');
  const courseIdParam = searchParams.get('courseId');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('checkoutEmail') || '';
      if (saved) setEmailForReceipt(saved);
    }
  }, []);

  const course = useMemo(() => {
    if (courseIdParam) {
      return coursesData.find(c => c.id === courseIdParam) || null;
    }
    if (amount) {
      const amtNum = parseFloat(amount);
      const found = coursesData.find(c => Number(c.price) === amtNum);
      return found || null;
    }
    return null;
  }, [courseIdParam, amount]);

  useEffect(() => {
    const processOrder = async () => {
      if (!tx || status !== 'COMPLETED') {
        setError('Payment was not completed or transaction ID is missing.');
        setLoading(false);
        return;
      }

      try {
        // Call API to create order and generate download link/token
        const response = await fetch('/api/paypal/process-hosted-payment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            transactionId: tx,
            amount,
            currency,
            status,
            courseId: course?.id,
            buyerEmail: emailForReceipt || undefined,
          })
        });

        const data = await response.json();

        if (data?.success) {
          if (data.orderId) setOrderId(data.orderId);

          if (data.downloadToken) {
            setDownloadHref(`/api/download/${data.downloadToken}`);
          } else if (data.directDownloadUrl) {
            setDownloadHref(data.directDownloadUrl);
          }

          if (emailForReceipt) setEmailSent(true);
        } else {
          setError(data?.error || 'Failed to process order');
        }
      } catch (err) {
        console.error('Hosted payment processing failed', err);
        if (course?.downloadUrl) setDownloadHref(course.downloadUrl);
      } finally {
        setLoading(false);
      }
    };

    processOrder();
  }, [tx, amount, currency, status, course?.id, emailForReceipt]);

  const sendReceipt = async () => {
    if (!orderId || !emailForReceipt) return;
    try {
      const resp = await fetch('/api/orders/send-receipt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId, email: emailForReceipt })
      });
      const d = await resp.json();
      if (d?.success) setEmailSent(true);
    } catch (e) {
      console.error('Send receipt failed', e);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <Loader2 className="w-12 h-12 animate-spin text-teal-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Processing Your Order...</h2>
            <p className="text-muted-foreground">Please wait while we set up your course access.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚠️</span>
              </div>
              <h2 className="text-2xl font-bold mb-2">Order Processing Error</h2>
              <p className="text-muted-foreground mb-6">{error}</p>
              <div className="space-y-3">
                <p className="text-sm">
                  Don't worry! Your payment was successful. Please contact us at{' '}
                  <a href="mailto:arisolutionsinc@gmail.com" className="text-teal-600 hover:underline">
                    arisolutionsinc@gmail.com
                  </a>
                  {' '}with your transaction ID: <strong>{tx}</strong>
                </p>
                <Button asChild>
                  <Link href="/courses">Back to Courses</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Success Message */}
          <Card className="mb-8">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold mb-2">Payment Successful!</h1>
              <p className="text-lg text-muted-foreground mb-4">
                Thank you for your purchase. Your course is ready to download.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg text-sm">
                <Mail className="w-4 h-4 text-blue-600" />
                <span>{emailSent ? 'Receipt sent to your email' : 'You can receive a receipt via email'}</span>
              </div>
            </CardContent>
          </Card>

          {/* Order Details */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Order ID</p>
                  <p className="font-mono font-semibold">{orderId || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Transaction ID</p>
                  <p className="font-mono font-semibold">{tx}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Course</p>
                  <p className="font-semibold">{course?.title || 'Your Course'}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Amount Paid</p>
                  <p className="font-semibold">${amount}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Email capture if missing */}
          {!emailSent && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Send Receipt</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3 flex-col sm:flex-row">
                  <Input type="email" value={emailForReceipt} onChange={(e) => setEmailForReceipt(e.target.value)} placeholder="you@example.com" className="flex-1" />
                  <Button onClick={sendReceipt} disabled={!orderId || !emailForReceipt}>Send</Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">We’ll send your receipt with the download link.</p>
              </CardContent>
            </Card>
          )}

          {/* Download Section */}
          <Card>
            <CardHeader>
              <CardTitle>Download Your Course</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {downloadHref ? (
                <>
                  <div className="flex items-center justify-between p-4 bg-teal-50 dark:bg-teal-950 rounded-lg">
                    <div>
                      <p className="font-semibold">{course?.title || 'Course Materials'}</p>
                      <p className="text-sm text-muted-foreground">
                        Size: {course?.sizeMb || 'N/A'} MB
                      </p>
                    </div>
                    <Button asChild className="bg-teal-500 hover:bg-teal-600">
                      <a href={downloadHref} target="_blank" rel="noopener noreferrer">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </a>
                    </Button>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg text-sm">
                    <p className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                      Important Information:
                    </p>
                    <ul className="space-y-1 text-yellow-700 dark:text-yellow-300">
                      <li>• This link may expire in 72 hours</li>
                      <li>• You can download up to 3 times (tokenized links)</li>
                      <li>• Check your email for a backup copy of this link</li>
                      <li>• Save the file to your device immediately</li>
                    </ul>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">
                    Your download link will be available shortly. Please check your email.
                  </p>
                  <Button asChild variant="outline">
                    <Link href="/courses">Browse More Courses</Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Support */}
          <Card className="mt-8">
            <CardContent className="pt-6 text-center text-sm text-muted-foreground">
              <p className="mb-2">Need help? Contact us:</p>
              <a 
                href="mailto:arisolutionsinc@gmail.com" 
                className="text-teal-600 hover:underline font-semibold"
              >
                arisolutionsinc@gmail.com
              </a>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="w-12 h-12 animate-spin text-teal-500 mx-auto mb-4" />
            <p className="text-muted-foreground">Loading your order...</p>
          </div>
        </div>
      }
    >
      <OrderSuccessInner />
    </Suspense>
  );
}
