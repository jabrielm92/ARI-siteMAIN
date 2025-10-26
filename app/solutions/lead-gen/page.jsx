"use client";

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  CheckCircle2, 
  Calendar, 
  Mail, 
  TrendingUp,
  Target,
  Shield,
  BarChart3,
  Zap,
  Star
} from 'lucide-react';
import JsonLd from '@/components/jsonld';
import { servicesData } from '@/lib/courses-data';

export default function LeadGenPage() {
  const service = servicesData.find((s) => s.slug === 'lead-gen');

  // ROI Calculator State
  const [costPerLead, setCostPerLead] = useState(150);
  const [adSpend, setAdSpend] = useState(5000);
  const [leadToClose, setLeadToClose] = useState(10);
  const [customerValue, setCustomerValue] = useState(2000);
  
  // Calculate metrics
  const currentLeads = Math.floor(adSpend / costPerLead);
  const additionalLeads = Math.floor(currentLeads * 0.35); // ARI brings 35% more leads
  const totalLeads = currentLeads + additionalLeads;
  
  const ariCostPerLead = costPerLead * 0.65; // 35% lower cost
  const ariLeads = Math.floor(adSpend / ariCostPerLead);
  
  const currentCloseRate = leadToClose / 100;
  const ariCloseRate = currentCloseRate * 1.3; // 30% better close rate
  
  const currentRevenue = currentLeads * currentCloseRate * customerValue;
  const ariRevenue = ariLeads * ariCloseRate * customerValue;
  const additionalRevenue = ariRevenue - currentRevenue;
  const roiIncrease = ((additionalRevenue / adSpend) * 100).toFixed(0);

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service?.name || 'ARI Lead Gen Consulting',
    provider: { '@type': 'Organization', name: 'ARI Solutions Inc' },
    areaServed: 'US',
    serviceType: service?.shortName || 'Lead Gen',
    description: service?.description || 'AI-powered lead generation system',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: service?.pricing?.setup || 997,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/solutions/lead-gen`,
      availability: 'https://schema.org/InStock'
    }
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What makes ARI Lead Gen different from other lead generation services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide exclusive leads (not shared), AI optimization for better conversion, measurable outcomes with transparent dashboards, and compliance-first approach with TCPA and DNC logs.'
        }
      },
      {
        '@type': 'Question',
        name: 'How quickly can I see results?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our 30-day pilot program delivers measurable results within the first month, with weekly reporting and optimization.'
        }
      },
      {
        '@type': 'Question',
        name: 'What industries do you serve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We specialize in Enterprise Connectivity, MSPs & IT Services, Healthcare Clinics, Professional Services, Security & Compliance, and B2B SaaS.'
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <head>
        <JsonLd data={serviceJsonLd} />
        <JsonLd data={faqJsonLd} />
      </head>

      {/* Hero */}
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

      {/* What Makes Us Different */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Makes Us Different?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <Target className="w-10 h-10 text-teal-500 mb-3" />
                <h3 className="font-semibold text-lg mb-2">Exclusive Leads</h3>
                <p className="text-sm text-muted-foreground">
                  No shared marketplaces. Every lead is exclusive to you, with full consent logs and contact details.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Zap className="w-10 h-10 text-teal-500 mb-3" />
                <h3 className="font-semibold text-lg mb-2">AI-Optimized</h3>
                <p className="text-sm text-muted-foreground">
                  We use AI to optimize ad copy, landing variants, lead scoring, and outreach sequencing for maximum conversion.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <BarChart3 className="w-10 h-10 text-teal-500 mb-3" />
                <h3 className="font-semibold text-lg mb-2">Measurable Outcomes</h3>
                <p className="text-sm text-muted-foreground">
                  Track speed-to-lead, conversion rates, and ROI. Weekly reporting with transparent dashboards.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Shield className="w-10 h-10 text-teal-500 mb-3" />
                <h3 className="font-semibold text-lg mb-2">Compliance First</h3>
                <p className="text-sm text-muted-foreground">
                  TCPA, DNC, and consent logs ensure your sales team can safely use every lead we deliver.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-4">ROI Calculator</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">See Your Potential ROI</h2>
              <p className="text-muted-foreground">
                Calculate how much more revenue you could generate with ARI Solutions bringing you more high-quality leads
              </p>
            </div>

            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="costPerLead">Current Cost Per Lead ($)</Label>
                    <Input
                      id="costPerLead"
                      type="number"
                      value={costPerLead}
                      onChange={(e) => setCostPerLead(Number(e.target.value))}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="adSpend">Current Ad Spend / mo ($)</Label>
                    <Input
                      id="adSpend"
                      type="number"
                      value={adSpend}
                      onChange={(e) => setAdSpend(Number(e.target.value))}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="leadToClose">Current Lead-to-Close Rate (%)</Label>
                    <Input
                      id="leadToClose"
                      type="number"
                      value={leadToClose}
                      onChange={(e) => setLeadToClose(Number(e.target.value))}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="customerValue">Average Customer Value ($)</Label>
                    <Input
                      id="customerValue"
                      type="number"
                      value={customerValue}
                      onChange={(e) => setCustomerValue(Number(e.target.value))}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="bg-teal-500/10 border border-teal-500/20 p-4 rounded-lg">
                  <p className="text-sm text-center text-muted-foreground mb-4">
                    We bring more qualified leads at 35% lower cost with 30% better close rates
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-background p-4 rounded-lg">
                      <div className="text-xs text-muted-foreground mb-1">Current Leads Per Month</div>
                      <div className="text-2xl font-bold">{currentLeads}</div>
                    </div>
                    <div className="bg-background p-4 rounded-lg">
                      <div className="text-xs text-muted-foreground mb-1">Additional Leads ARI Will Bring</div>
                      <div className="text-2xl font-bold text-teal-600">+{additionalLeads}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-teal-500/20 to-teal-600/20 p-6 rounded-lg text-center">
                  <div className="text-sm text-muted-foreground mb-2">Additional Monthly Revenue</div>
                  <div className="text-4xl font-bold text-teal-600 mb-2">
                    ${additionalRevenue.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {roiIncrease}% ROI increase on your current ad spend
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Deliver</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Flexible service options to match your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-lg">Pilot Campaign</CardTitle>
                <CardDescription>30-Day Pilot Campaign</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">Test our system risk-free with a refundable retainer</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span>Dedicated landing pages + address/serviceability checks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span>Paid search + programmatic SEO + trigger lists</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span>Call tracking + OTP forms + SMS missed-call workflow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span>CRM integration (HubSpot/Salesforce/Sheets) + consent logs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span>Weekly performance reports and optimization</span>
                  </li>
                </ul>
                <div className="pt-4 border-t">
                  <p className="font-semibold text-sm">Refundable Retainer: $300–$500</p>
                  <p className="text-xs text-muted-foreground mt-1">depending on territory size</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    If we fail to meet agreed targets in 30 days, full refund.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ongoing Supply</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>Continuous lead delivery with weekly billing and invalid lead replacements.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">AI Scoring</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>Behavioral + firmographic ranking with smart lead assignment by intent and fit.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Book-and-Handoff</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>Pre-qualified prospects with calendar booking included and reminder sequences.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground">
              Our lead gen systems work best for high-LTV B2B services
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'Enterprise Connectivity', desc: 'ISPs, carrier sales, business internet' },
              { title: 'MSPs & IT Services', desc: 'Managed services, cloud migration' },
              { title: 'Healthcare Clinics', desc: 'Multi-location practices, med-spas' },
              { title: 'Professional Services', desc: 'Legal, accounting, consulting' },
              { title: 'Security & Compliance', desc: 'Cybersecurity, compliance audits' },
              { title: 'B2B SaaS', desc: 'Software sales, procurement' }
            ].map((industry, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="text-lg">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{industry.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Models */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Pricing Models</h2>
            <p className="text-xl text-muted-foreground">
              Choose the pricing structure that fits your cash flow
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <Badge className="w-fit mb-2">Best for Testing</Badge>
                <CardTitle>Pilot + PPL</CardTitle>
                <CardDescription>Low-risk entry point</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-3xl font-bold">$300-500</div>
                  <div className="text-sm text-muted-foreground">Refundable retainer</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">$60-$350</div>
                  <div className="text-sm text-muted-foreground">Per qualified lead</div>
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

            <Card className="border-4 border-teal-500 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-teal-500">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle>Pay Per Show</CardTitle>
                <CardDescription>Only pay for kept appointments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-3xl font-bold">60% Deposit</div>
                  <div className="text-sm text-muted-foreground">Reserve capacity</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">$120-$450</div>
                  <div className="text-sm text-muted-foreground">Per kept appointment</div>
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

            <Card className="border-2">
              <CardHeader>
                <Badge className="w-fit mb-2">Enterprise</Badge>
                <CardTitle>Hybrid / Subscription</CardTitle>
                <CardDescription>Best for volume</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-3xl font-bold">$1.5k-$3k</div>
                  <div className="text-sm text-muted-foreground">Monthly base fee</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">$35-$120</div>
                  <div className="text-sm text-muted-foreground">Reduced per lead</div>
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

      {/* Powered by AI & Modern Tech */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powered by AI & Modern Tech</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>AI Use Cases</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-1">Ad Copy Generation</h4>
                  <p className="text-sm text-muted-foreground">Rapid hypothesis creation and A/B testing</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Lead Scoring</h4>
                  <p className="text-sm text-muted-foreground">Behavioral + firmographic ranking</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Auto Routing</h4>
                  <p className="text-sm text-muted-foreground">Smart lead assignment by intent and fit</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Quality Detection</h4>
                  <p className="text-sm text-muted-foreground">NLP checks for junk/bot responses</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Compliance & Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-1">TCPA Compliance</h4>
                  <p className="text-sm text-muted-foreground">Consent logs, DNC hygiene, STOP opt-out</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Data Security</h4>
                  <p className="text-sm text-muted-foreground">TLS, RBAC, audit logs, encryption at rest</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Data Retention</h4>
                  <p className="text-sm text-muted-foreground">18 months configurable, DPA templates</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Transparent Tracking</h4>
                  <p className="text-sm text-muted-foreground">IP, timestamp, user agent, consent checkbox</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <div className="bg-gradient-to-r from-teal-500/10 to-teal-600/10 p-6 border-b">
                <Badge className="mb-2">Case Study</Badge>
                <h3 className="text-2xl font-bold">Tech Solutions Inc. — B2B SaaS</h3>
              </div>
              <CardContent className="p-6 space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-primary fill-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="text-lg italic mb-3">
                      "Our sales team went from feast or famine to a consistent pipeline. Game changer for our business."
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-3xl font-bold text-teal-600 mb-1">127</div>
                    <div className="text-xs text-muted-foreground">Qualified Leads (90 days)</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-3xl font-bold text-teal-600 mb-1">8.5%</div>
                    <div className="text-xs text-muted-foreground">Conversion Rate</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-3xl font-bold text-teal-600 mb-1">412%</div>
                    <div className="text-xs text-muted-foreground">ROI</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-3xl font-bold text-teal-600 mb-1">&lt;4 hrs</div>
                    <div className="text-xs text-muted-foreground">Speed to Lead</div>
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
          <p className="text-sm mt-4 opacity-75">Typical response time: Within 24 hours</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
