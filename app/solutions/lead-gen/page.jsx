"use client";

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle2, Target, Filter, Mail, Database, TrendingUp, Shield, Calendar, Phone, DollarSign, Users, Zap, BarChart, Lock, AlertCircle } from 'lucide-react';

export default function LeadGenPage() {
  const [activeTab, setActiveTab] = useState('pilot');

  return (
    <div className="min-h-screen bg-background">
      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How quickly can I see leads?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Most pilots start generating leads within 7–14 days depending on targeting and territory.'
              }
            },
            {
              '@type': 'Question',
              name: 'Do you guarantee lead quality?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. We include replacement credits for invalid leads and maintain strict TCPA/DNC compliance.'
              }
            },
            {
              '@type': 'Question',
              name: 'What pricing models are available?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We offer Pilot (refundable retainer), Pay-Per-Lead, and Pay-Per-Show options depending on goals.'
              }
            }
          ]
        }) }}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-teal-500/20 text-teal-300 border-teal-500/30">
              AI-Powered Lead Generation
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ARI Lead Gen Consulting
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Consistent, Qualified Leads on Autopilot
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
              We build AI-assisted, compliance-first lead pipelines that generate <strong>exclusive, high-intent leads and booked appointments</strong> for enterprise connectivity and B2B services—measurable outcomes, transparent logs, and flexible pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600" asChild>
                <a href="https://calendly.com/arisolutionsinc/30min" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Free Consultation
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-black hover:bg-gray-200" asChild>
                <Link href="/contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Makes Us Different</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <Target className="w-10 h-10 text-teal-500 mb-3" />
                  <CardTitle>Exclusive Leads</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No shared marketplaces. Every lead is exclusive to you, with full consent logs and contact details.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Zap className="w-10 h-10 text-teal-500 mb-3" />
                  <CardTitle>AI-Optimized</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We use AI to optimize ad copy, landing variants, lead scoring, and outreach sequencing for maximum conversion.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <BarChart className="w-10 h-10 text-teal-500 mb-3" />
                  <CardTitle>Measurable Outcomes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Track speed-to-lead, conversion rates, and ROI. Weekly reporting with transparent dashboards.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="w-10 h-10 text-teal-500 mb-3" />
                  <CardTitle>Compliance First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    TCPA, DNC, and consent logs ensure your sales team can safely use every lead we deliver.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Deliver</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Flexible service options to match your business needs
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
            {/* Desktop Tabs */}
            <TabsList className="hidden md:grid w-full grid-cols-4">
              <TabsTrigger value="pilot">Pilot Campaign</TabsTrigger>
              <TabsTrigger value="ongoing">Ongoing Supply</TabsTrigger>
              <TabsTrigger value="enrichment">AI Scoring</TabsTrigger>
              <TabsTrigger value="pps">Book-and-Handoff</TabsTrigger>
            </TabsList>

            {/* Mobile Dropdown */}
            <div className="md:hidden mb-6">
              <Select value={activeTab} onValueChange={setActiveTab}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pilot">Pilot Campaign</SelectItem>
                  <SelectItem value="ongoing">Ongoing Supply</SelectItem>
                  <SelectItem value="enrichment">AI Scoring</SelectItem>
                  <SelectItem value="pps">Book-and-Handoff</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <TabsContent value="pilot" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>30-Day Pilot Campaign</CardTitle>
                  <CardDescription>Test our system risk-free with a refundable retainer</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      'Dedicated landing pages + address/serviceability checks',
                      'Paid search + programmatic SEO + trigger lists',
                      'Call tracking + OTP forms + SMS missed-call workflow',
                      'CRM integration (HubSpot/Salesforce/Sheets) + consent logs',
                      'Weekly performance reports and optimization'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm"><strong>Refundable Retainer:</strong> $300–$500 depending on territory size</p>
                    <p className="text-sm mt-2">If we fail to meet agreed targets in 30 days, full refund.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ongoing" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ongoing Lead Supply</CardTitle>
                  <CardDescription>Pay-per-lead or pay-per-show pricing</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      'Continuous lead generation with weekly deliveries',
                      'Quality-checked and validated leads',
                      'Replacement credits for invalid leads (< 10% invalid rate)',
                      'Dashboard access with real-time metrics',
                      'Speed-to-lead under 5 minutes'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-muted p-4 rounded-lg space-y-2">
                    <p className="text-sm"><strong>PPL (Qualified Lead):</strong> $60–$350 depending on vertical</p>
                    <p className="text-sm"><strong>PPS (Kept Appointment):</strong> $120–$450 per show</p>
                    <p className="text-sm mt-2 text-muted-foreground">Billed weekly with invoice CSV</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="enrichment" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Lead Enrichment & AI Scoring</CardTitle>
                  <CardDescription>Prioritize your hottest prospects automatically</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      'Auto-enrich with firmographics and intent signals',
                      'AI model-based lead scoring (behavioral + demographic)',
                      'Route high-intent leads to priority reps',
                      'NLP quality detection to flag junk responses',
                      'Continuous model improvement from conversion data'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pps" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Book-and-Handoff (Pay Per Show)</CardTitle>
                  <CardDescription>We book the appointment, you close the deal</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      'Warm handoffs directly to your calendar',
                      'Pre-qualification questionnaire completed',
                      'SMS and email confirmation to prospect',
                      'Reminder sequence to ensure show-up',
                      'Only pay for kept appointments'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm"><strong>Deposit:</strong> 50–70% upfront for scheduling capacity</p>
                    <p className="text-sm mt-2"><strong>Price per kept appointment:</strong> $120–$450</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Target Verticals */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Industries We Serve</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Our lead gen systems work best for high-LTV B2B services
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Zap, name: 'Enterprise Connectivity', desc: 'ISPs, carrier sales, business internet' },
                { icon: Database, name: 'MSPs & IT Services', desc: 'Managed services, cloud migration' },
                { icon: Users, name: 'Healthcare Clinics', desc: 'Multi-location practices, med-spas' },
                { icon: TrendingUp, name: 'Professional Services', desc: 'Legal, accounting, consulting' },
                { icon: Shield, name: 'Security & Compliance', desc: 'Cybersecurity, compliance audits' },
                { icon: BarChart, name: 'B2B SaaS', desc: 'Software sales, procurement' }
              ].map((vertical, idx) => (
                <Card key={idx} className="text-center">
                  <CardContent className="pt-6">
                    <vertical.icon className="w-10 h-10 text-teal-500 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">{vertical.name}</h3>
                    <p className="text-sm text-muted-foreground">{vertical.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Models */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Pricing Models</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the pricing structure that fits your cash flow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <Badge className="w-fit mb-2">Best for Testing</Badge>
                <CardTitle>Pilot + PPL</CardTitle>
                <CardDescription>Low-risk entry point</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-3xl font-bold mb-1">$300-500</div>
                  <p className="text-sm text-muted-foreground">Refundable retainer</p>
                </div>
                <div className="border-t pt-4">
                  <div className="text-2xl font-bold mb-1">$60-$350</div>
                  <p className="text-sm text-muted-foreground">Per qualified lead</p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span>Full refund if targets not met</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span>Weekly billing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span>Invalid lead replacements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-primary">Most Popular</Badge>
                <CardTitle>Pay Per Show</CardTitle>
                <CardDescription>Only pay for kept appointments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-3xl font-bold mb-1">60% Deposit</div>
                  <p className="text-sm text-muted-foreground">Reserve capacity</p>
                </div>
                <div className="border-t pt-4">
                  <div className="text-2xl font-bold mb-1">$120-$450</div>
                  <p className="text-sm text-muted-foreground">Per kept appointment</p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span>Pre-qualified prospects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span>Calendar booking included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span>Reminder sequences</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Badge className="w-fit mb-2">Enterprise</Badge>
                <CardTitle>Hybrid / Subscription</CardTitle>
                <CardDescription>Best for volume</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-3xl font-bold mb-1">$1.5k-$3k</div>
                  <p className="text-sm text-muted-foreground">Monthly base fee</p>
                </div>
                <div className="border-t pt-4">
                  <div className="text-2xl font-bold mb-1">$35-$120</div>
                  <p className="text-sm text-muted-foreground">Reduced per lead</p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span>Dedicated infrastructure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span>Volume discounts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span>Priority support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack & AI */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Powered by AI & Modern Tech</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>AI Use Cases</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Ad Copy Generation</p>
                      <p className="text-sm text-muted-foreground">Rapid hypothesis creation and A/B testing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Filter className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Lead Scoring</p>
                      <p className="text-sm text-muted-foreground">Behavioral + firmographic ranking</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Auto Routing</p>
                      <p className="text-sm text-muted-foreground">Smart lead assignment by intent and fit</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Quality Detection</p>
                      <p className="text-sm text-muted-foreground">NLP checks for junk/bot responses</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Compliance & Security</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">TCPA Compliance</p>
                      <p className="text-sm text-muted-foreground">Consent logs, DNC hygiene, STOP opt-out</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Data Security</p>
                      <p className="text-sm text-muted-foreground">TLS, RBAC, audit logs, encryption at rest</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Database className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Data Retention</p>
                      <p className="text-sm text-muted-foreground">18 months configurable, DPA templates</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Transparent Tracking</p>
                      <p className="text-sm text-muted-foreground">IP, timestamp, user agent, consent checkbox</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-teal-500/10 to-teal-600/10 border-teal-500/20">
              <CardContent className="p-8">
                <Badge className="mb-4">Case Study</Badge>
                <h3 className="text-2xl font-bold mb-4">Tech Solutions Inc. — B2B SaaS</h3>
                <p className="text-lg mb-6 italic">
                  "Our sales team went from feast or famine to a consistent pipeline. Game changer for our business."
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-teal-600">127</div>
                    <div className="text-sm text-muted-foreground">Qualified Leads (90 days)</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-teal-600">8.5%</div>
                    <div className="text-sm text-muted-foreground">Conversion Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-teal-600">412%</div>
                    <div className="text-sm text-muted-foreground">ROI</div>
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
            Ready to Build Your Lead Pipeline?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Start with a risk-free pilot. Book a 30-minute strategy call to discuss your lead generation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100" asChild>
              <a href="https://calendly.com/arisolutionsinc/30min" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5 mr-2" />
                Book Strategy Call
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
            Typical response time: Within 24 hours
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
