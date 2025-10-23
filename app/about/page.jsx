"use client";

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Target, Heart, Zap, Users, TrendingUp, BookOpen, Calendar, Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-teal-500/20 text-teal-300 border-teal-500/30">
              About ARI Solutions Inc
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Automation-Ready Income Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're on a mission to help businesses and entrepreneurs leverage AI and automation to generate consistent income without scaling their workload.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="w-8 h-8 text-teal-500" />
              <h2 className="text-3xl font-bold">Our Story</h2>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                ARI Solutions Inc was born from a simple observation: <strong>most businesses are leaving money on the table</strong> because they can't handle all their incoming opportunities. Calls go to voicemail. Appointments aren't booked. Leads slip through the cracks.
              </p>
              <p>
                At the same time, AI and automation tools were becoming powerful enough to solve these problems—but too complex for the average business owner to implement. The gap between what AI could do and what businesses could actually use was massive.
              </p>
              <p>
                We started ARI Solutions to bridge that gap. Our team has built <strong>over 500 automation systems</strong> for businesses across industries—from local service providers to enterprise connectivity companies. We've generated over <strong>$2M in revenue</strong> for our clients and saved <strong>thousands of hours</strong> through intelligent automation.
              </p>
              <p>
                But we didn't stop at done-for-you services. We realized many entrepreneurs wanted to <strong>learn these skills themselves</strong>—to build their own AI businesses or automate their own operations. So we created practical, no-fluff courses that teach exactly what we do for clients.
              </p>
              <p className="font-semibold text-foreground">
                Today, ARI Solutions offers the best of both worlds: learn the skills yourself, or let our expert team handle it for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <Target className="w-10 h-10 text-teal-500 mb-3" />
                  <CardTitle>Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Empower businesses and entrepreneurs to leverage AI and automation for predictable, scalable income—whether they build it themselves or partner with us.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Heart className="w-10 h-10 text-teal-500 mb-3" />
                  <CardTitle>Our Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li><strong>Outcomes over hype:</strong> We care about results, not buzzwords</li>
                    <li><strong>Practical first:</strong> Real implementations, not theory</li>
                    <li><strong>Transparency:</strong> Clear pricing, honest timelines</li>
                    <li><strong>Continuous improvement:</strong> Always optimizing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Zap className="w-10 h-10 text-teal-500 mb-3" />
                  <CardTitle>Our Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We build systems that work. No over-engineering. No unnecessary complexity. Just reliable automations that generate income and save time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
              <p className="text-xl text-muted-foreground">
                Three ways to leverage AI for your business
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <Badge className="w-fit mb-3">Done-For-You</Badge>
                  <CardTitle>AI Implementation Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Let our expert team build and manage AI systems for your business
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm"><strong>AI Virtual Receptionist</strong> — Answer calls 24/7, book appointments, provide quotes</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm"><strong>Appointment Booking Accelerator</strong> — Automated scheduling system</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm"><strong>Lead Generation</strong> — Exclusive, AI-optimized lead delivery</span>
                    </div>
                  </div>
                  <Button asChild className="w-full" variant="outline">
                    <a href="/solutions">Explore Services <ArrowRight className="w-4 h-4 ml-2" /></a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <Badge className="w-fit mb-3">Learn & Build</Badge>
                  <CardTitle>AI Business Courses</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Learn to build and sell AI-powered systems yourself
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm"><strong>How To Make Money With AI</strong> — Zero to first deal in 14 days</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm"><strong>Build Your Brand Online</strong> — AI-powered social media growth</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm"><strong>Advanced Lead Gen Mastery</strong> — Coming soon</span>
                    </div>
                  </div>
                  <Button asChild className="w-full" variant="outline">
                    <a href="/courses">Browse Courses <ArrowRight className="w-4 h-4 ml-2" /></a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <Badge className="w-fit mb-3">Consulting</Badge>
                  <CardTitle>AI Strategy & Consulting</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Get expert guidance on AI implementation for your specific business
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm"><strong>AI Opportunity Assessment</strong> — Where can AI help your business?</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm"><strong>Implementation Roadmap</strong> — Step-by-step plan</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm"><strong>ROI Analysis</strong> — Expected costs and returns</span>
                    </div>
                  </div>
                  <Button asChild className="w-full" variant="outline">
                    <a href="/contact">Book Consultation <ArrowRight className="w-4 h-4 ml-2" /></a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="py-20 bg-gradient-to-br from-teal-500/10 to-teal-600/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
              <p className="text-xl text-muted-foreground">
                Real numbers from real implementations
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Automation Systems Built</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">$2M+</div>
                <div className="text-sm text-muted-foreground">Client Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">1,500+</div>
                <div className="text-sm text-muted-foreground">Students Enrolled</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">15K+</div>
                <div className="text-sm text-muted-foreground">Hours Saved for Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Who We Serve</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <Users className="w-8 h-8 text-teal-500 mb-2" />
                  <CardTitle>Businesses & Entrepreneurs</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500">•</span>
                      <span>Local service businesses missing calls and bookings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500">•</span>
                      <span>B2B companies needing consistent lead flow</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500">•</span>
                      <span>Solo entrepreneurs wanting to scale without hiring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500">•</span>
                      <span>Enterprise teams looking to automate operations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="w-8 h-8 text-teal-500 mb-2" />
                  <CardTitle>Aspiring AI Entrepreneurs</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500">•</span>
                      <span>Tech-curious individuals wanting to start an AI business</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500">•</span>
                      <span>Agency owners adding automation services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500">•</span>
                      <span>Freelancers looking for high-margin offerings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500">•</span>
                      <span>Creators wanting to monetize AI skills</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ARI */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose ARI Solutions?</h2>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-teal-500/10 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-teal-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">We're Operators, Not Theorists</h3>
                      <p className="text-muted-foreground">
                        Every system we build, every course we teach, comes from real implementations. We don't teach theory—we teach what actually works because we've done it hundreds of times.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-teal-500/10 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-teal-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Flexible Options</h3>
                      <p className="text-muted-foreground">
                        Want to learn? Take a course. Need it done? Hire us. Not sure? Start with a consultation. We meet you where you are.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-teal-500/10 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-teal-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Results-Driven</h3>
                      <p className="text-muted-foreground">
                        We measure success by outcomes: revenue generated, time saved, leads captured, appointments booked. Everything else is just noise.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-teal-500/10 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-teal-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Transparent & Fair</h3>
                      <p className="text-muted-foreground">
                        Clear pricing. Honest timelines. Refund guarantees. We succeed when you succeed—it's that simple.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
            Whether you want to learn AI skills or have us build your systems, we're here to help you succeed
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100" asChild>
              <a href="https://calendly.com/arisolutionsinc/30min" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Free Consultation
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
