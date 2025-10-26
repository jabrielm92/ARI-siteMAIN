"use client";

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Calendar, CreditCard, Bell, Users, Zap, BarChart, Mail, Phone, Clock, ArrowRight } from 'lucide-react';
import JsonLd from '@/components/jsonld';

export default function ABAPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <head>
        <JsonLd data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Appointment Booking Accelerator',
          provider: { '@type': 'Organization', name: 'ARI Solutions Inc' },
          areaServed: 'US',
          serviceType: 'Appointment Booking System',
          description: 'Done-for-you automated appointment booking system with payments, reminders, and analytics.',
          offers: {
            '@type': 'Offer',
            priceCurrency: 'USD',
            price: 97,
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/solutions/aba`,
            availability: 'https://schema.org/InStock'
          }
        }} />
      </head>


      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-teal-500/20 text-teal-300 border-teal-500/30">
              Done-For-You Service
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Appointment Booking Accelerator
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Never Miss a Booking Again
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Transform your appointment booking process from manual chaos to automated efficiency. Our ABA service builds you a complete booking system that works 24/7—more booked, kept appointments without hiring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600" asChild>
                <a href="https://calendly.com/arisolutionsinc/30min" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Free Consultation
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-black hover:bg-gray-200" asChild>
                <a href="mailto:arisolutionsinc@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Included</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A complete, AI-powered appointment booking system built specifically for your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-teal-500" />
                </div>
                <CardTitle>24/7 Automated Booking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Clients can book appointments anytime, anywhere, without your involvement. Real-time availability syncs with your calendar.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-teal-500" />
                </div>
                <CardTitle>Integrated Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Collect deposits or full payment at booking time. Reduce no-shows by 80% with payment commitment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Bell className="w-6 h-6 text-teal-500" />
                </div>
                <CardTitle>Smart Reminders</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Automated email and SMS reminders keep your calendar full and cancellations low. Customizable timing and messaging.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-teal-500" />
                </div>
                <CardTitle>Client Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Built-in CRM tracks client history, preferences, and booking patterns. Know your best customers at a glance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-teal-500" />
                </div>
                <CardTitle>Instant Confirmations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Clients receive immediate confirmation emails with calendar invites they can add to Google, Outlook, or Apple Calendar.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart className="w-6 h-6 text-teal-500" />
                </div>
                <CardTitle>Analytics Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Track booking rates, revenue, peak times, cancellation patterns, and more. Data-driven insights for growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Business Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Save 10+ hours per week on scheduling',
                'Increase bookings by 40% with 24/7 availability',
                'Reduce no-shows by 80% with automated reminders',
                'Professional booking experience that builds trust',
                'Syncs with Google Calendar, Outlook, and more',
                'Mobile-friendly for clients on the go'
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-500 flex-shrink-0 mt-1" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing</h2>
              <p className="text-xl text-muted-foreground">
                Simple, straightforward pricing with no hidden fees
              </p>
            </div>

            <Card className="border-2 border-primary">
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto mb-4">Pilot Program</Badge>
                <CardTitle className="text-3xl">Custom Implementation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-lg font-semibold">Setup Fee</span>
                    <span className="text-2xl font-bold">$497</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-lg font-semibold">Monthly Retainer</span>
                    <span className="text-2xl font-bold">$97/mo</span>
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">What You Get:</h4>
                  <ul className="space-y-2 text-sm">
                    {[
                      'Discovery call to understand your business',
                      'Custom booking page design',
                      'Integration with your calendar and payment processor',
                      'Testing and quality assurance',
                      'Launch and training session',
                      'Ongoing support and optimization',
                      '30-day money-back guarantee'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-sm text-muted-foreground text-center">
                  *Monthly retainer covers hosting, maintenance, updates, and support
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Implementation Process</h2>
            <div className="space-y-6">
              {[
                { step: 1, title: 'Discovery Call', desc: 'We learn about your business, booking needs, and client flow' },
                { step: 2, title: 'Custom Design', desc: 'Design your booking page with your branding and service offerings' },
                { step: 3, title: 'Integration', desc: 'Connect with your calendar, payment processor, and email' },
                { step: 4, title: 'Testing & QA', desc: 'Thorough testing of all booking scenarios and edge cases' },
                { step: 5, title: 'Launch & Training', desc: 'Go live and train your team on the system' },
                { step: 6, title: 'Ongoing Support', desc: 'Monthly optimization and support for continuous improvement' }
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-teal-500/10 to-teal-600/10 border-teal-500/20">
              <CardContent className="p-8">
                <Badge className="mb-4">Case Study</Badge>
                <h3 className="text-2xl font-bold mb-4">Dr. Amanda Rodriguez — Wellness Coaching</h3>
                <p className="text-lg mb-6 italic">
                  "ABA transformed my business. I went from spending 2 hours a day on scheduling to zero. My clients love how easy it is to book."
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-teal-600">12 hrs/week</div>
                    <div className="text-sm text-muted-foreground">Time Saved</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-teal-600">+215%</div>
                    <div className="text-sm text-muted-foreground">Booking Increase</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-teal-600">-85%</div>
                    <div className="text-sm text-muted-foreground">No-Show Reduction</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-500 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Automate Your Bookings?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Schedule a free 30-minute consultation to see how ABA can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100" asChild>
              <a href="https://calendly.com/arisolutionsinc/30min" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Consultation
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <a href="mailto:arisolutionsinc@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Email: arisolutionsinc@gmail.com
              </a>
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-75">
            Or call us directly to discuss your needs
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
