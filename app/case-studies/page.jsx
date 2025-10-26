"use client";

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, Users, Clock, DollarSign, Target, Star, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CaseStudiesPage() {
  const leadGenCases = [
    {
      company: 'Tech Solutions Inc.',
      industry: 'B2B SaaS',
      challenge: 'Inconsistent lead flow causing feast-or-famine sales cycles',
      solution: 'AI-powered lead generation with multi-channel campaigns and lead scoring',
      results: [
        { metric: '127 Qualified Leads', desc: 'In first 90 days', icon: Target },
        { metric: '8.5% Conversion', desc: 'From lead to customer', icon: TrendingUp },
        { metric: '412% ROI', desc: 'Return on investment', icon: DollarSign },
        { metric: '<4 hrs', desc: 'Speed to lead', icon: Clock }
      ],
      testimonial: "Our sales team went from feast or famine to a consistent pipeline. Game changer for our business.",
      author: "Michael Chen",
      role: "VP of Sales",
      timeline: "90 Days",
      investment: "$4,500"
    },
    {
      company: 'ConnectNow Communications',
      industry: 'Enterprise Connectivity',
      challenge: 'Low-quality shared leads with poor conversion rates',
      solution: 'Exclusive lead pipeline with TCPA compliance and territory targeting',
      results: [
        { metric: '89 Exclusive Leads', desc: 'Per month average', icon: Target },
        { metric: '15% Close Rate', desc: 'Lead to contract', icon: TrendingUp },
        { metric: '$47K MRR', desc: 'New monthly revenue', icon: DollarSign },
        { metric: '2.3 min', desc: 'Average speed-to-lead', icon: Clock }
      ],
      testimonial: "The exclusive leads and speed of delivery completely transformed our sales process. We're now closing 3x more deals.",
      author: "Sarah Rodriguez",
      role: "Regional Sales Director",
      timeline: "6 Months",
      investment: "$12,000"
    },
    {
      company: 'MedTech Services',
      industry: 'Healthcare IT',
      challenge: 'High cost-per-lead from traditional advertising',
      solution: 'Hybrid subscription model with AI optimization and intent-based targeting',
      results: [
        { metric: '67% Lower CPL', desc: 'Compared to previous methods', icon: DollarSign },
        { metric: '200+ Leads', desc: 'In 4 months', icon: Target },
        { metric: '22% Qualified Rate', desc: 'High-intent prospects', icon: TrendingUp },
        { metric: '12 New Clients', desc: 'Closed deals', icon: Users }
      ],
      testimonial: "We cut our lead acquisition costs by more than half while dramatically improving lead quality. The AI scoring helps us prioritize the hottest opportunities.",
      author: "David Park",
      role: "Marketing Director",
      timeline: "4 Months",
      investment: "$7,200"
    }
  ];

  const aiReceptionistCases = [
    {
      company: 'Green Valley Landscaping',
      industry: 'Home Services',
      challenge: 'Missing 30-40% of calls during busy season, leading to lost revenue',
      solution: 'AI Virtual Receptionist with quote generation and appointment booking',
      results: [
        { metric: '95% Call Answer', desc: 'No more missed calls', icon: Target },
        { metric: '+40% Bookings', desc: 'Increase in appointments', icon: TrendingUp },
        { metric: '$2,800/mo Saved', desc: 'Staffing cost reduction', icon: DollarSign },
        { metric: '24/7 Coverage', desc: 'Never miss a lead', icon: Clock }
      ],
      testimonial: "We were missing 30-40% of calls during busy season. The AI receptionist now handles everything—even gives estimates. Our booking rate doubled.",
      author: "Tom Martinez",
      role: "Owner",
      timeline: "60 Days",
      investment: "$997"
    },
    {
      company: 'Premier Dental Care',
      industry: 'Healthcare',
      challenge: 'Front desk overwhelmed, long wait times, inconsistent patient experience',
      solution: 'AI receptionist with insurance verification and appointment management',
      results: [
        { metric: '100% Answered', desc: 'All calls handled', icon: Target },
        { metric: '85% Less Wait', desc: 'Patient wait time reduction', icon: Clock },
        { metric: '60 Hrs/mo', desc: 'Staff time freed up', icon: Users },
        { metric: '4.8★ Rating', desc: 'Patient satisfaction', icon: Star }
      ],
      testimonial: "Our front desk staff can now focus on in-person patients while the AI handles all incoming calls perfectly. Patient satisfaction scores went up significantly.",
      author: "Dr. Lisa Chen",
      role: "Practice Owner",
      timeline: "30 Days",
      investment: "$997"
    }
  ];

  const abaCases = [
    {
      company: 'Dr. Amanda Rodriguez Wellness Coaching',
      industry: 'Coaching & Consulting',
      challenge: 'Spending 2 hours daily on scheduling, no-shows, manual calendar management',
      solution: 'Appointment Booking Accelerator with payment collection and automated reminders',
      results: [
        { metric: '12 Hrs/week', desc: 'Time saved on scheduling', icon: Clock },
        { metric: '+215% Bookings', desc: 'Appointment increase', icon: TrendingUp },
        { metric: '85% Fewer No-Shows', desc: 'With automated reminders', icon: CheckCircle2 },
        { metric: '$0 Admin Time', desc: 'Fully automated', icon: DollarSign }
      ],
      testimonial: "ABA transformed my business. I went from spending 2 hours a day on scheduling to zero. My clients love how easy it is to book.",
      author: "Dr. Amanda Rodriguez",
      role: "Wellness Coach",
      timeline: "45 Days",
      investment: "$497"
    },
    {
      company: 'Elite Fitness Studio',
      industry: 'Health & Fitness',
      challenge: 'Class scheduling conflicts, payment collection issues, high no-show rate',
      solution: 'ABA with class capacity management, upfront payment, and waitlist automation',
      results: [
        { metric: '40% More Classes', desc: 'Better capacity utilization', icon: TrendingUp },
        { metric: '92% Show Rate', desc: 'With payment commitment', icon: CheckCircle2 },
        { metric: '$4.5K/mo', desc: 'Additional revenue captured', icon: DollarSign },
        { metric: 'Zero Conflicts', desc: 'Smart scheduling logic', icon: Target }
      ],
      testimonial: "The automated booking system handles everything—payments, reminders, waitlists. We're running at 92% capacity now versus 60% before.",
      author: "Marcus Johnson",
      role: "Studio Owner",
      timeline: "30 Days",
      investment: "$497"
    }
  ];

  const studentSuccess = [
    {
      name: "Jason Torres",
      course: "How To Make Money With AI",
      background: "Former retail manager, no tech background",
      achievement: "Closed first ABA deal on Day 13, now earning $3.2K/mo",
      testimonial: "I followed the 14-day sprint exactly. The templates and daily tasks made it so clear. I closed my first client—a dental office—on day 13. Now I have 4 recurring clients.",
      results: [
        { label: "Time to First Deal", value: "13 Days" },
        { label: "Monthly Revenue", value: "$3,200" },
        { label: "Active Clients", value: "4" },
        { label: "Course ROI", value: "1,600%" }
      ],
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jason"
    },
    {
      name: "Lisa Rahman",
      course: "How To Make Money With AI",
      background: "Freelance marketer looking to scale",
      achievement: "Built agency to $8K MRR in 3 months",
      testimonial: "This course is built by people who actually ship. No fluff. I used the assets library to close 3 clients in my first month, then scaled from there.",
      results: [
        { label: "Time to $5K MRR", value: "45 Days" },
        { label: "Current MRR", value: "$8,000" },
        { label: "Team Size", value: "2 (me + VA)" },
        { label: "Clients", value: "7" }
      ],
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa"
    },
    {
      name: "Maya Patel",
      course: "Build Your Brand Online With AI",
      background: "Wellness coach with zero social media presence",
      achievement: "Grew to 3.2K followers, 40+ DM leads per month",
      testimonial: "I was camera-shy and had no idea how to create content. The faceless video pipeline changed everything. Now I batch-create 6 videos in under an hour every Sunday.",
      results: [
        { label: "Followers (6 weeks)", value: "3,200" },
        { label: "Avg. Monthly Reach", value: "45K" },
        { label: "DM Leads/Month", value: "40+" },
        { label: "Conversion Rate", value: "18%" }
      ],
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maya"
    },
    {
      name: "Chris Anderson",
      course: "Build Your Brand Online With AI",
      background: "E-commerce store owner struggling with ads",
      achievement: "Reduced ad spend 60%, increased sales 140%",
      testimonial: "The $10/day testing framework and DM keyword funnel replaced my entire paid ads strategy. My DMs are now full of qualified leads asking about my products.",
      results: [
        { label: "Ad Spend Reduction", value: "-60%" },
        { label: "Sales Increase", value: "+140%" },
        { label: "Organic Leads/Week", value: "25-30" },
        { label: "ROAS", value: "6.2x" }
      ],
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chris"
    },
    {
      name: "Rachel Kim",
      course: "How To Make Money With AI",
      background: "Corporate employee seeking side income",
      achievement: "Replaced full-time salary in 6 months",
      testimonial: "I started as a side hustle while working my 9-5. By month 6, I was making more from my ABA clients than my day job. Gave my notice last week!",
      results: [
        { label: "Side → Full-Time", value: "6 Months" },
        { label: "Monthly Income", value: "$7,500" },
        { label: "Working Hours", value: "20-25/wk" },
        { label: "Clients", value: "9" }
      ],
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rachel"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-teal-500/20 text-teal-300 border-teal-500/30">
            Real Results
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how businesses and entrepreneurs are using ARI Solutions to generate consistent revenue with AI-powered systems
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="leadgen" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="leadgen" className="text-lg">Lead Gen Clients</TabsTrigger>
              <TabsTrigger value="students" className="text-lg">Course Students</TabsTrigger>
            </TabsList>

            {/* Lead Gen Cases */}
            <TabsContent value="leadgen" className="space-y-12">
              {leadGenCases.map((caseStudy, idx) => (
                <Card key={idx} className="overflow-hidden">
                  <div className="bg-gradient-to-r from-teal-500/10 to-teal-600/10 p-6 border-b">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h2 className="text-2xl font-bold mb-2">{caseStudy.company}</h2>
                        <Badge variant="outline">{caseStudy.industry}</Badge>
                      </div>
                      <div className="flex gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Timeline</p>
                          <p className="font-semibold">{caseStudy.timeline}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Investment</p>
                          <p className="font-semibold">{caseStudy.investment}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6 space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <span className="w-8 h-8 bg-red-500/10 rounded-full flex items-center justify-center text-red-500 text-sm">!</span>
                          Challenge
                        </h3>
                        <p className="text-muted-foreground">{caseStudy.challenge}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-teal-500" />
                          Solution
                        </h3>
                        <p className="text-muted-foreground">{caseStudy.solution}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-6 border-y">
                      {caseStudy.results.map((result, ridx) => {
                        const Icon = result.icon;
                        return (
                          <div key={ridx} className="text-center">
                            <Icon className="w-8 h-8 text-teal-500 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-teal-600 mb-1">{result.metric}</div>
                            <div className="text-xs text-muted-foreground">{result.desc}</div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="bg-muted p-6 rounded-lg">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <Star className="w-6 h-6 text-primary fill-primary" />
                          </div>
                        </div>
                        <div>
                          <p className="text-lg italic mb-3">"{caseStudy.testimonial}"</p>
                          <p className="font-semibold">{caseStudy.author}</p>
                          <p className="text-sm text-muted-foreground">{caseStudy.role}, {caseStudy.company}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* Student Success Stories */}
            <TabsContent value="students" className="space-y-8">
              {studentSuccess.map((student, idx) => (
                <Card key={idx} className="overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 p-6 border-b">
                    <div className="flex items-start gap-4">
                      <img 
                        src={student.avatar} 
                        alt={student.name}
                        className="w-16 h-16 rounded-full"
                      />
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-1">{student.name}</h2>
                        <Badge className="mb-2">{student.course}</Badge>
                        <p className="text-sm text-muted-foreground">{student.background}</p>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6 space-y-6">
                    <div className="bg-teal-500/10 border border-teal-500/20 p-4 rounded-lg">
                      <p className="font-semibold text-teal-700 dark:text-teal-300 mb-1">Achievement:</p>
                      <p className="text-lg font-bold">{student.achievement}</p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      {student.results.map((result, ridx) => (
                        <div key={ridx} className="text-center p-4 bg-muted rounded-lg">
                          <div className="text-2xl font-bold text-primary mb-1">{result.value}</div>
                          <div className="text-xs text-muted-foreground">{result.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="border-l-4 border-primary pl-4 py-2">
                      <p className="italic text-muted-foreground">"{student.testimonial}"</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-500 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Whether you need done-for-you services or want to learn the skills yourself, we're here to help
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100" asChild>
              <a href="/solutions">
                Explore Services <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button size="lg" className="bg-white text-black hover:bg-gray-100" asChild>
              <a href="/courses">
                Browse Courses
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
