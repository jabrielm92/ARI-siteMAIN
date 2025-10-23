"use client";

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
          <p className="text-muted-foreground mb-8">Last Updated: June 2025</p>

          <Card>
            <CardContent className="p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Digital Course Refunds</h2>
                <p className="text-muted-foreground mb-4">
                  <strong>30-Day Money-Back Guarantee:</strong>
                </p>
                <p className="text-muted-foreground mb-4">
                  We offer a 30-day money-back guarantee on all digital courses. If you're not satisfied with your purchase, you can request a full refund within 30 days of purchase.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>Conditions:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Request must be made within 30 days of purchase date</li>
                  <li>Must provide feedback on why the course didn't meet your needs</li>
                  <li>Refunds are processed within 5-7 business days</li>
                  <li>Original payment method will be credited</li>
                  <li>Access to course materials will be revoked upon refund</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Done-For-You Service Refunds</h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">AI Virtual Receptionist</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>Setup Fee:</strong> Non-refundable once work has begun</li>
                    <li><strong>Monthly Subscription:</strong> Cancel anytime with 30 days notice</li>
                    <li><strong>30-Day Satisfaction Guarantee:</strong> Full refund if not satisfied within first 30 days</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">Appointment Booking Accelerator (ABA)</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>Setup Fee:</strong> Non-refundable once work has begun</li>
                    <li><strong>Monthly Retainer:</strong> Cancel anytime with 30 days notice</li>
                    <li><strong>30-Day Satisfaction Guarantee:</strong> Full refund if system doesn't work as promised</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">Lead Generation Services</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>Pilot Programs:</strong> Refundable retainer if agreed targets not met within 30 days</li>
                    <li><strong>Ongoing Services:</strong> Pay-per-lead or pay-per-show with replacement credits for invalid leads</li>
                    <li><strong>Invalid Leads:</strong> Replaced within 7 days of delivery</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. How to Request a Refund</h2>
                <p className="text-muted-foreground mb-4">
                  To request a refund:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                  <li>Email us at <strong>arisolutionsinc@gmail.com</strong></li>
                  <li>Include your order ID and purchase date</li>
                  <li>Explain briefly why you're requesting a refund</li>
                  <li>We'll respond within 1-2 business days</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. What is NOT Refundable</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Courses purchased more than 30 days ago</li>
                  <li>Setup fees for services where work has already been completed</li>
                  <li>Monthly subscription fees for services already rendered</li>
                  <li>Consultation fees for completed consultations</li>
                  <li>Custom development work that has been delivered</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Partial Refunds</h2>
                <p className="text-muted-foreground">
                  In some cases, partial refunds may be offered at our discretion. This typically applies to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li>Services where some but not all deliverables were completed</li>
                  <li>Cases where technical issues prevented full service delivery</li>
                  <li>Mutual agreement to terminate services early</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Chargebacks</h2>
                <p className="text-muted-foreground">
                  We encourage you to contact us directly for refunds rather than initiating chargebacks. Chargebacks may result in:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li>Immediate account suspension</li>
                  <li>Loss of access to all purchased materials</li>
                  <li>Inability to purchase future products or services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Processing Time</h2>
                <p className="text-muted-foreground">
                  Approved refunds are processed within 5-7 business days. Depending on your payment processor (PayPal, bank, etc.), it may take an additional 3-5 business days for the credit to appear in your account.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Questions</h2>
                <p className="text-muted-foreground">
                  If you have questions about our refund policy or a specific refund request:
                </p>
                <p className="text-muted-foreground mt-4">
                  <strong>Email:</strong> arisolutionsinc@gmail.com<br />
                  <strong>Subject Line:</strong> "Refund Request - [Your Order ID]"<br />
                  <strong>Response Time:</strong> Within 1-2 business days
                </p>
              </section>

              <div className="bg-muted p-6 rounded-lg mt-8">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> This refund policy applies to purchases made through our website. For services purchased through custom contracts, the terms of that specific contract take precedence.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
