"use client";

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last Updated: June 2025</p>

          <Card>
            <CardContent className="p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using ARI Solutions Inc's website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Services Offered</h2>
                <p className="text-muted-foreground mb-4">
                  ARI Solutions Inc offers:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Digital Courses:</strong> Downloadable educational content on AI and automation</li>
                  <li><strong>Done-For-You Services:</strong> AI implementation services including lead generation, appointment booking systems, and AI virtual receptionists</li>
                  <li><strong>Consulting:</strong> AI strategy and implementation consulting</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Course Purchase and Delivery</h2>
                <p className="text-muted-foreground mb-4">
                  When you purchase a course:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Payment is processed securely through PayPal</li>
                  <li>Upon successful payment, you receive instant access via email</li>
                  <li>Download links are valid for 72 hours with a maximum of 3 downloads</li>
                  <li>All sales are final unless covered by our refund policy</li>
                  <li>You receive a lifetime license to use the course materials for personal business use</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. License and Restrictions</h2>
                <p className="text-muted-foreground mb-4">
                  Course materials are licensed, not sold. You may:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>Use the materials for your personal business purposes</li>
                  <li>Implement the strategies taught with your own clients</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  You may NOT:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Resell, redistribute, or share course materials</li>
                  <li>Claim the materials as your own work</li>
                  <li>Use the materials to create competing products</li>
                  <li>Share download links or credentials with others</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Service Terms</h2>
                <p className="text-muted-foreground mb-4">
                  For done-for-you services:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Services are provided according to the agreed scope of work</li>
                  <li>Setup fees are non-refundable once work has begun</li>
                  <li>Monthly subscriptions can be cancelled with 30 days notice</li>
                  <li>Pilot programs may offer refundable deposits if agreed targets are not met</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. No Guarantees of Results</h2>
                <p className="text-muted-foreground">
                  While we provide high-quality courses and services, results depend on your implementation and effort. We make no guarantees of specific income, revenue, or business outcomes. Case studies and testimonials represent individual results and are not typical.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Refund Policy</h2>
                <p className="text-muted-foreground">
                  Please see our separate Refund Policy for detailed information about refunds and cancellations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Intellectual Property</h2>
                <p className="text-muted-foreground">
                  All content, trademarks, and intellectual property on this site are owned by ARI Solutions Inc. Unauthorized use is prohibited.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  ARI Solutions Inc shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability is limited to the amount you paid for the specific service or course.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">10. Modifications to Service</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify or discontinue services at any time. Course updates are provided free to existing customers when available.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">11. Governing Law</h2>
                <p className="text-muted-foreground">
                  These Terms are governed by the laws of the United States. Any disputes shall be resolved in the appropriate courts.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">12. Contact Information</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms of Service:
                </p>
                <p className="text-muted-foreground mt-4">
                  <strong>Email:</strong> arisolutionsinc@gmail.com<br />
                  <strong>Company:</strong> ARI Solutions Inc
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
