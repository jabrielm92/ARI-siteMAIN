"use client";

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Phone, MessageCircle, Calendar, DollarSign, Users, BarChart, Mail, Clock, Zap, ArrowRight, Star } from 'lucide-react';
import JsonLd from '@/components/jsonld';

export default function AIReceptionistPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-teal-500/20 text-teal-300 border-teal-500/30">
              AI-Powered Communication
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Virtual Receptionist
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Answer Every Call, Book Every Lead
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
              Never miss another call. Our AI Virtual Receptionist answers calls 24/7, qualifies leads, provides quotes, and books appointments—all with natural, human-like conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600" asChild>
                <a href="https://calendly.com/arisolutionsinc/30min" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Demo
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-gray-100 hover:bg-gray-800" asChild>
                <a href="mailto:arisolutionsinc@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-red-500/10 border border-red-500/20 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">The Problem with Traditional Receptionists</h2>
              <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Miss 30-40% of calls during busy hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>$35,000-45,000/year per receptionist</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Sick days, breaks, and vacations</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>After-hours calls go to voicemail</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Inconsistent call quality and messaging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Limited to handling one call at a time</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The AI Solution</h2>
              <p className="text-xl text-muted-foreground">
                A virtual receptionist that never misses a call, books appointments intelligently, and costs 80% less
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Your AI Receptionist Can Do</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-teal-500" />
                  </div>
                  <CardTitle>24/7 Call Answering</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Your AI receptionist never sleeps, takes breaks, or calls in sick. Every call is answered professionally, day or night.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4">
                    <MessageCircle className="w-6 h-6 text-teal-500" />
                  </div>
                  <CardTitle>Natural Conversations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Advanced AI understands context, handles objections, and sounds genuinely human. Callers won't know they're talking to AI.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-teal-500" />
                  </div>
                  <CardTitle>Smart Booking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Checks your availability in real-time and books appointments directly into your calendar. Sends confirmations automatically.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4">
                    <DollarSign className="w-6 h-6 text-teal-500" />
                  </div>
                  <CardTitle>Quote Generation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Provides accurate pricing based on your service menu. Can handle complex quotes with multiple options and follow-ups.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-teal-500" />
                  </div>
                  <CardTitle>Lead Qualification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Asks the right questions to qualify leads. Routes hot prospects to your sales team and nurtures cold leads automatically.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4">
                    <BarChart className="w-6 h-6 text-teal-500" />
                  </div>
                  <CardTitle>Call Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Track call volume, conversion rates, common questions, and missed opportunities. Data-driven insights for improvement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Business Impact</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Capture 100% of inbound calls, even during peak hours',
                'Reduce staffing costs by 60-80%',
                'Book appointments while you sleep',
                'Provide instant quotes to interested prospects',
                'Never lose a lead to voicemail again',
                'Scale call handling without hiring',
                'Handle multiple calls simultaneously',
                'Consistent, professional communication every time'
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

      {/* How It Works */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">How It Works</h2>
            <div className="space-y-6">
              {[
                { step: 1, title: 'Discovery & Script Development', desc: 'We learn your business, services, pricing, and common customer questions. Our team develops a custom script.' },
                { step: 2, title: 'AI Training & Voice Selection', desc: 'Train the AI on your specific industry and choose a voice that matches your brand personality.' },
                { step: 3, title: 'Calendar & CRM Integration', desc: 'Connect to your existing tools: Google Calendar, Outlook, HubSpot, or any CRM you use.' },
                { step: 4, title: 'Testing & Refinement', desc: 'We run sample call scenarios, handle edge cases, and refine responses until perfect.' },
                { step: 5, title: 'Launch & Monitor', desc: 'Go live with your AI receptionist. We monitor the first 100 calls and optimize continuously.' },
                { step: 6, title: 'Ongoing Optimization', desc: 'Monthly reviews of call data, script improvements, and new capability additions.' }
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

      {/* Pricing */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Predictable Pricing</h2>
              <p className="text-xl text-muted-foreground">
                80% less expensive than hiring a receptionist
              </p>
            </div>

            <Card className="border-2 border-primary">
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto mb-4">Most Popular</Badge>
                <CardTitle className="text-3xl">AI Receptionist</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-lg font-semibold">Setup & Training</span>
                    <span className="text-2xl font-bold">$797</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-lg font-semibold">Monthly Subscription</span>
                    <span className="text-2xl font-bold">$197/mo</span>
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Includes:</h4>
                  <ul className="space-y-2 text-sm">
                    {[
                      'Custom script development',
                      'AI training on your services',
                      'Voice personality tuning',
                      'Calendar & CRM integration',
                      'Up to 500 calls per month',
                      'Call recording & transcripts',
                      'Real-time analytics dashboard',
                      'Monthly optimization reviews',
                      'Unlimited script updates'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg">
                  <p className="text-sm font-semibold mb-2">Volume Discount:</p>
                  <p className="text-sm">500+ calls/month: Add $0.25 per additional call</p>
                  <p className="text-sm mt-2 text-muted-foreground">Compare to hiring a receptionist: $35K-45K/year + benefits</p>
                </div>

                <p className="text-sm text-muted-foreground text-center">
                  *30-day money-back guarantee if you're not satisfied
                </p>
              </CardContent>
            </Card>
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
                <h3 className="text-2xl font-bold mb-4">Green Valley Landscaping — Home Services</h3>
                <p className="text-lg mb-6 italic">
                  "We were missing 30-40% of calls during busy season. The AI receptionist now handles everything—even gives estimates. Our booking rate doubled."
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-teal-600">95%</div>
                    <div className="text-sm text-muted-foreground">Calls Answered</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-teal-600">+40%</div>
                    <div className="text-sm text-muted-foreground">Booking Increase</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-teal-600">$2,800/mo</div>
                    <div className="text-sm text-muted-foreground">Cost Savings</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: 'Will customers know they are talking to AI?',
                  a: 'Our AI is designed to sound natural and human-like. Most callers do not realize they are speaking with AI. However, we can configure it to disclose if required by your industry.'
                },
                {
                  q: 'What happens if the AI cannot answer a question?',
                  a: 'The AI is trained to recognize when it needs human help. It can transfer calls to your team, take a message, or schedule a callback—whatever you prefer.'
                },
                {
                  q: 'Can it handle complex pricing or custom quotes?',
                  a: 'Yes! We train the AI on your pricing structure and can handle multi-tier pricing, add-ons, and even complex calculations. It can also escalate to your sales team for custom quotes.'
                },
                {
                  q: 'What languages does it support?',
                  a: 'Currently English, Spanish, and French. Additional languages can be added based on your needs.'
                },
                {
                  q: 'How quickly can we get set up?',
                  a: 'Typically 7-14 days from contract signing to go-live, depending on the complexity of your services and call flow.'
                }
              ].map((faq, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-500 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Never Miss a Call Again?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Schedule a demo to hear your AI receptionist in action
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100" asChild>
              <a href="https://calendly.com/arisolutionsinc/30min" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Demo
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <a href="mailto:arisolutionsinc@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Email: arisolutionsinc@gmail.com
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
