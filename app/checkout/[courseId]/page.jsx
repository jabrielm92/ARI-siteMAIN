"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import PayPalButton from '@/components/paypal-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Shield, Lock, ArrowLeft } from 'lucide-react';
import { coursesData } from '@/lib/courses-data';
import Link from 'next/link';
import Script from 'next/script';

export default function CheckoutPage() {
  const params = useParams();
  const [course, setCourse] = useState(null);
  const [paypalReady, setPaypalReady] = useState(false);

  useEffect(() => {
    const foundCourse = coursesData.find(c => c.id === params.courseId);
    setCourse(foundCourse);
  }, [params.courseId]);

  useEffect(() => {
    // Initialize hosted button after SDK loads
    if (paypalReady && course?.id === 'course-001' && typeof window !== 'undefined' && window.paypal?.HostedButtons) {
      try {
        window.paypal.HostedButtons({ hostedButtonId: 'BJCMXAD6THUMN' }).render('#paypal-container-BJCMXAD6THUMN');
      } catch (e) {
        console.error('PayPal HostedButtons render error:', e);
      }
    }
  }, [paypalReady, course?.id]);

  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
          <p className="text-muted-foreground mb-8">The course you're trying to purchase doesn't exist.</p>
          <Button asChild>
            <Link href="/courses">Browse Courses</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Load PayPal Hosted Buttons SDK only for course-001 */}
      {course.id === 'course-001' && (
        <Script
          src="https://www.paypal.com/sdk/js?client-id=BAA34wmSRHhP-8DTw_xDBKVdfalQt8ad14Lt8k0on6OqRLiETM7ae3_4RVnU2VThlBbSd-cweMeBdlk-Hw&components=hosted-buttons&enable-funding=venmo&currency=USD"
          strategy="afterInteractive"
          onLoad={() => setPaypalReady(true)}
        />
      )}

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Button asChild variant="ghost" className="mb-6">
            <Link href={`/courses/${course.slug}`}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Course
            </Link>
          </Button>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Order Summary */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Checkout</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Course Info */}
                  <div className="flex gap-4 p-4 bg-muted rounded-lg">
                    <div className="relative w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                      <img
                        src={course.heroImage}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <Badge className="mb-2">{course.category}</Badge>
                      <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                      <p className="text-sm text-muted-foreground">{course.subtitle}</p>
                    </div>
                  </div>

                  {/* Price Breakdown */}
                  <div className="space-y-3 py-4 border-y">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Course Price</span>
                      <span className="font-semibold">${course.price}</span>
                    </div>
                    {course.originalPrice && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">You Save</span>
                        <span className="font-semibold text-green-600">
                          ${(course.originalPrice - course.price).toFixed(2)}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between text-xl font-bold pt-3 border-t">
                      <span>Total</span>
                      <span>${course.price}</span>
                    </div>
                  </div>

                  {/* Payment Section */}
                  <div>
                    <h3 className="font-semibold mb-4">Complete Your Purchase</h3>

                    {course.id === 'course-001' ? (
                      <div>
                        <div id="paypal-container-BJCMXAD6THUMN" />
                        <p className="text-xs text-muted-foreground mt-3">
                          Secured by PayPal. After payment you will be redirected back to the course to download.
                        </p>
                      </div>
                    ) : (
                      <PayPalButton
                        courseId={course.id}
                        courseSlug={course.slug}
                        amount={course.price}
                      />
                    )}
                  </div>

                  {/* Security Badges */}
                  <div className="flex items-center justify-center gap-6 pt-6 border-t text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      <span>Secure Payment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4" />
                      <span>SSL Encrypted</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* What's Included */}
            <div className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardHeader>
                  <CardTitle>What's Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {course.whatsIncluded?.slice(0, 6).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-lg">
                      <p className="text-sm font-semibold text-green-700 dark:text-green-400 mb-2">
                        30-Day Money-Back Guarantee
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Not satisfied? Get a full refund within 30 days, no questions asked.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-500" />
                      Instant access after payment
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-500" />
                      Lifetime updates
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-500" />
                      Download link via email
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
