"use client";

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Download, BookOpen, Lightbulb, TrendingUp, Clock, DollarSign, Users, Zap, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-teal-500/20 text-teal-300 border-teal-500/30">
            Free Resources
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Learn AI Business Strategies</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Free guides, frameworks, and insights to help you leverage AI for your business. Yes, you could do all of this yourself—but we'll show you why partnering with experts saves time and money.
          </p>
        </div>
      </section>

      {/* AI Fundamentals */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Lightbulb className="w-8 h-8 text-teal-500" />
              <h2 className="text-3xl font-bold">Understanding AI for Business</h2>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>What is AI-Powered Automation?</CardTitle>
                <CardDescription>The basics every business owner should know</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  AI-powered automation combines artificial intelligence with workflow automation to handle repetitive tasks, make intelligent decisions, and scale your business without proportional cost increases.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">What AI Can Do:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span>Generate marketing copy and content</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span>Qualify and score leads automatically</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span>Answer customer questions 24/7</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span>Book appointments intelligently</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span>Personalize customer experiences</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Common Use Cases:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span>Appointment booking systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span>Lead generation engines</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span>Customer support chatbots</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span>Email marketing automation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span>Social media content creation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold">How to Choose the Right AI Tools</AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-3">
                  <p>Selecting AI tools depends on three factors: your budget, technical skill, and time constraints.</p>
                  <div className="space-y-2">
                    <p><strong>No-Code (Easiest):</strong> Tools like Zapier, Make, Calendly with AI assistants. Best for beginners. Cost: $20-100/mo.</p>
                    <p><strong>Low-Code (Moderate):</strong> Platforms like n8n, Airtable automations, ChatGPT API. Requires some learning. Cost: $50-300/mo.</p>
                    <p><strong>Custom Development (Advanced):</strong> Full control but requires developers. Cost: $2,000-10,000+ one-time.</p>
                  </div>
                  <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg mt-4">
                    <p className="text-sm"><strong>Reality Check:</strong> Most businesses take 40-80 hours to learn and implement their first AI system. That's 1-2 months of part-time work—if nothing goes wrong.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold">DIY AI Implementation: Step-by-Step</AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-3">
                  <p>Here's what you'd need to do to build an AI system yourself:</p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li><strong>Research (10-15 hours):</strong> Learn AI tools, compare platforms, understand limitations</li>
                    <li><strong>Design (8-12 hours):</strong> Map your workflows, create logic diagrams, plan integrations</li>
                    <li><strong>Setup (15-25 hours):</strong> Create accounts, configure tools, connect APIs</li>
                    <li><strong>Build (20-40 hours):</strong> Create automations, write prompts, set up triggers</li>
                    <li><strong>Test (8-15 hours):</strong> Debug issues, handle edge cases, refine responses</li>
                    <li><strong>Deploy (5-10 hours):</strong> Go live, monitor, fix problems</li>
                    <li><strong>Maintain (2-5 hours/week):</strong> Ongoing optimization and updates</li>
                  </ol>
                  <div className="bg-muted p-4 rounded-lg mt-4">
                    <p className="font-semibold mb-2">Total Time Investment: 66-117 hours</p>
                    <p className="text-sm">At $50/hour opportunity cost, that's $3,300-5,850 in your time—plus tool costs and potential mistakes.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold">Common DIY Pitfalls (And How to Avoid Them)</AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-3">
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground">Over-engineering</p>
                        <p className="text-sm">Trying to automate everything at once. Start with one high-impact workflow.</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground">Tool overwhelm</p>
                        <p className="text-sm">Spending weeks comparing tools. Pick one platform and commit for 30 days.</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground">No testing plan</p>
                        <p className="text-sm">Launching without testing edge cases. Always test with 10-20 scenarios first.</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground">Ignoring compliance</p>
                        <p className="text-sm">Not understanding TCPA, GDPR, data retention. This can cost you thousands in fines.</p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Lead Gen Guide */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-8 h-8 text-teal-500" />
              <h2 className="text-3xl font-bold">Building a Lead Generation System</h2>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>The Lead Gen Business Model</CardTitle>
                <CardDescription>How it works and what you need to succeed</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  A lead generation business connects buyers with sellers. You generate qualified leads for businesses and get paid per lead or per appointment. Margins are typically 40-70%.
                </p>

                <div className="bg-muted p-6 rounded-lg space-y-4">
                  <h4 className="font-semibold">Required Skills & Tools:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-sm mb-2">Skills You'll Need:</p>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Paid advertising (Google, Facebook)</li>
                        <li>• Landing page design & CRO</li>
                        <li>• Lead qualification & scoring</li>
                        <li>• CRM management</li>
                        <li>• TCPA compliance knowledge</li>
                        <li>• Client communication</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-2">Tools You'll Need:</p>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Landing page builder ($30-100/mo)</li>
                        <li>• Form & tracking tools ($50-150/mo)</li>
                        <li>• Call tracking (Twilio, $100-300/mo)</li>
                        <li>• CRM software ($50-200/mo)</li>
                        <li>• Ad accounts (Google, Meta)</li>
                        <li>• Analytics & reporting ($50-100/mo)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="border-t pt-4 mt-4">
                    <p className="text-sm"><strong>Monthly Tool Cost:</strong> $280-850/month</p>
                    <p className="text-sm"><strong>Initial Ad Spend:</strong> $1,000-3,000 to test and validate</p>
                    <p className="text-sm"><strong>Learning Curve:</strong> 60-90 days to profitability</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-br from-teal-500/10 to-teal-600/10 border border-teal-500/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Clock className="w-6 h-6 text-teal-500" />
                DIY vs. ARI Lead Gen Consulting
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold mb-3">If You Build It Yourself:</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✗ 60-90 days to first profitable campaign</li>
                    <li>✗ $280-850/mo in tools</li>
                    <li>✗ $1,000-3,000 wasted on ad testing</li>
                    <li>✗ 80-120 hours learning & setup</li>
                    <li>✗ Ongoing 10-15 hours/week management</li>
                    <li>✗ High risk of compliance mistakes</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-3 text-teal-600">With ARI Lead Gen:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span>30-day pilot, refundable retainer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span>We provide all infrastructure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span>Pay only for qualified leads delivered</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span>Zero hours of your time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span>Fully compliant (TCPA, DNC)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span>Exclusive leads, not shared</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Learning Path */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="w-8 h-8 text-teal-500" />
              <h2 className="text-3xl font-bold">Self-Learning Path</h2>
            </div>

            <p className="text-muted-foreground mb-8">
              Our courses teach you everything we know. You'll get the same frameworks, templates, and strategies we use for clients. Here's what you'll invest:
            </p>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>How To Make Money With AI — $197</CardTitle>
                  <CardDescription>Learn to build and sell AI automation systems</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-semibold mb-2">What You Get:</p>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• 9 modules + 14-day sprint guide</li>
                        <li>• All templates & contracts</li>
                        <li>• Tech stack blueprints</li>
                        <li>• Sales scripts & SOPs</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Time Investment:</p>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Learning: 8-12 hours</li>
                        <li>• Implementation: 40-60 hours</li>
                        <li>• First deal: 14-30 days</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Build Your Brand Online With AI — $147</CardTitle>
                  <CardDescription>Master AI-powered social media marketing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-semibold mb-2">What You Get:</p>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• 11 modules with templates</li>
                        <li>• Faceless video system</li>
                        <li>• DM keyword funnel setup</li>
                        <li>• $10/day ad testing framework</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Time Investment:</p>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Learning: 6-10 hours</li>
                        <li>• Setup: 15-20 hours</li>
                        <li>• Content creation: 2-3 hrs/week</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-blue-500/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">The Honest Trade-Off</h3>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  <strong>Courses save you money upfront</strong> ($197-147 vs. $500-3,000 for done-for-you), but require your time and effort. Expect 50-80 hours to implement fully.
                </p>
                <p>
                  <strong>Done-for-you services cost more initially</strong> but save 50-120 hours of your time and deliver results faster. Plus, we handle all the technical complexity and ongoing optimization.
                </p>
                <p className="pt-4 border-t">
                  <strong>Best approach?</strong> Take a course to understand the fundamentals, then hire us for execution. You'll know enough to make smart decisions without doing all the work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-500 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Whether you want to learn or let us handle it, we're here to help you succeed
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100" asChild>
              <a href="/courses">
                <BookOpen className="w-5 h-5 mr-2" />
                Browse Courses
              </a>
            </Button>
            <Button size="lg" className="bg-white text-black hover:bg-gray-100" asChild>
              <a href="/solutions">
                <Users className="w-5 h-5 mr-2" />
                Explore Services
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
