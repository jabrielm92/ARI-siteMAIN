"use client";

import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Download, Mail, AlertCircle, Loader2, Clock } from 'lucide-react';

export default function OrderSuccessPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [downloadToken, setDownloadToken] = useState(searchParams.get('token'));
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    fetchOrder();
  }, [params.orderId]);

  const fetchOrder = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/orders/${params.orderId}`);
      const data = await response.json();

      if (!data.success) {
        setError(data.error);
        return;
      }

      setOrder(data.order);
      if (data.downloadToken) {
        setDownloadToken(data.downloadToken);
      }
    } catch (err) {
      setError('Failed to load order details');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!downloadToken) {
      alert('Download token not found. Please check your email for the download link.');
      return;
    }

    // Navigate directly to download URL - browser will follow the redirect to Vercel Blob
    window.location.href = `/api/download/${downloadToken}`;
    
    // Refresh order after a delay to update download count
    setTimeout(() => fetchOrder(), 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4 text-primary" />
          <p className="text-muted-foreground">Loading your order...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <AlertCircle className="w-16 h-16 text-destructive mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-4">Order Not Found</h1>
          <p className="text-muted-foreground mb-8">{error}</p>
          <Button asChild>
            <a href="/courses">Back to Courses</a>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  if (!order) return null;

  const maxAttempts = parseInt(process.env.NEXT_PUBLIC_MAX_DOWNLOAD_ATTEMPTS || '3');
  const remainingDownloads = maxAttempts - (order.downloadAttempts || 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-green-500" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Payment Successful!</h1>
            <p className="text-xl text-muted-foreground">
              Thank you for your purchase. Your course is ready to download.
            </p>
          </div>

          {/* Order Details Card */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Order ID</p>
                  <p className="font-mono text-sm">{order.orderId}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <Badge className="bg-green-500">{order.status}</Badge>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Course</p>
                  <p className="font-semibold">{order.courseName}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Amount Paid</p>
                  <p className="font-semibold">${order.amount}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-sm">{order.email}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Purchase Date</p>
                  <p className="text-sm">{new Date(order.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Download Card */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download Your Course
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-start gap-3 mb-4">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">Check Your Email</p>
                    <p className="text-sm text-muted-foreground">
                      We've sent a confirmation email to <span className="font-semibold">{order.email}</span> with your download link and receipt.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">Download Information</p>
                    <p className="text-sm text-muted-foreground">
                      Your download link expires in 72 hours. You can download up to 3 times.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      <span className="font-semibold">Remaining downloads:</span> {remainingDownloads} of {maxAttempts}
                    </p>
                  </div>
                </div>
              </div>

              {remainingDownloads > 0 ? (
                <Button
                  onClick={handleDownload}
                  disabled={downloading || !downloadToken}
                  className="w-full"
                  size="lg"
                >
                  {downloading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin mr-2" />
                      Downloading...
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5 mr-2" />
                      Download Course Materials
                    </>
                  )}
                </Button>
              ) : (
                <div className="bg-destructive/10 text-destructive p-4 rounded-lg">
                  <p className="font-semibold mb-1">Maximum Downloads Reached</p>
                  <p className="text-sm">
                    You've used all available download attempts. Please contact support if you need assistance.
                  </p>
                </div>
              )}

              <p className="text-xs text-center text-muted-foreground">
                File size: {order.sizeMb || '2.5'} MB (approximate)
              </p>
            </CardContent>
          </Card>

          {/* What's Next Card */}
          <Card>
            <CardHeader>
              <CardTitle>What's Next?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">1</span>
                  </div>
                  <div>
                    <p className="font-semibold">Download the course materials</p>
                    <p className="text-sm text-muted-foreground">
                      Extract the ZIP file to access all videos, templates, and resources
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">2</span>
                  </div>
                  <div>
                    <p className="font-semibold">Start with Module 1</p>
                    <p className="text-sm text-muted-foreground">
                      Follow the curriculum in order for the best learning experience
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">3</span>
                  </div>
                  <div>
                    <p className="font-semibold">Join the community</p>
                    <p className="text-sm text-muted-foreground">
                      Get help, share your progress, and connect with other students
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button asChild variant="outline" className="flex-1">
              <a href="/courses">Browse More Courses</a>
            </Button>
            <Button asChild className="flex-1">
              <a href="/contact">Need Help? Contact Support</a>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
