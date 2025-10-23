"use client";

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last Updated: June 2025</p>

          <Card>
            <CardContent className="p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  We collect information you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Name and email address when you purchase courses or contact us</li>
                  <li>Payment information processed securely through PayPal</li>
                  <li>Course download activity and access logs</li>
                  <li>Communications when you contact us for support</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Process and deliver your course purchases</li>
                  <li>Send order confirmations and download links</li>
                  <li>Provide customer support</li>
                  <li>Send important updates about your purchases</li>
                  <li>Improve our services and courses</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
                <p className="text-muted-foreground">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li><strong>Payment Processors:</strong> PayPal for processing transactions</li>
                  <li><strong>Email Services:</strong> Resend for sending order confirmations</li>
                  <li><strong>Cloud Storage:</strong> Vercel for hosting course files</li>
                  <li><strong>Analytics:</strong> Firebase for order tracking and analytics</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate security measures to protect your personal information. All payment processing is handled securely through PayPal. Course download links are encrypted and expire after 72 hours.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
                <p className="text-muted-foreground mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
                <p className="text-muted-foreground">
                  We use essential cookies to maintain your session and provide core functionality. We do not use tracking cookies for advertising purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Data Retention</h2>
                <p className="text-muted-foreground">
                  We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Order records are kept for 7 years for tax and accounting purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
                <p className="text-muted-foreground">
                  Our services are not intended for children under 18. We do not knowingly collect information from children.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Changes to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions about this Privacy Policy, please contact us at:
                </p>
                <p className="text-muted-foreground mt-4">
                  <strong>Email:</strong> arisolutionsinc@gmail.com<br />
                  <strong>Company:</strong> ARI Solutions Inc (Automation-Ready Income Solutions Inc)
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
