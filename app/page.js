"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import CourseCard from '@/components/course-card';
import TestimonialCarousel from '@/components/testimonial-carousel';
import { ArrowRight, CheckCircle2, Zap, Target, TrendingUp, Calculator, BarChart3, Users, Briefcase, Lock } from 'lucide-react';
import { coursesData, servicesData, testimonialsData } from '@/lib/courses-data';

export default function App() {
  const featuredCourse = coursesData.find(c => c.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20 lg:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-teal-500/20 text-teal-300 border-teal-500/30">
                Automation-Ready Income Solutions
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Leverage AI to Build Income-Generating Systems
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Learn to build AI-powered businesses with our courses, or let us implement AI automations for you. From appointment booking to lead generation—we help you leverage AI to increase revenue without scaling your workload.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white w-full sm:w-auto" asChild>
                  <Link href="/courses">
                    Browse Courses <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-gray-600 text-gray-900 hover:bg-gray-100 w-full sm:w-auto" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
              <div className="mt-4">
                <Button size="lg" variant="outline" className="border-gray-600 text-gray-900 hover:bg-gray-100 w-full sm:w-auto" asChild>
                  <Link href="/solutions">Solutions For You</Link>
                </Button>
              </div>
              
              <div className="flex items-center gap-8 mt-12">
                <div>
                  <div className="text-3xl font-bold text-teal-400">1,247+</div>
                  <div className="text-sm text-gray-400">Students Enrolled</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-400">500+</div>
                  <div className="text-sm text-gray-400">Systems Built</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-400">4.8★</div>
                  <div className="text-sm text-gray-400">Average Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
                  alt="Automation Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 rounded-lg shadow-xl">
                <div className="text-sm font-semibold">Revenue This Month</div>
                <div className="text-2xl font-bold text-teal-600">+$47,200</div>
                <div className="text-xs text-gray-600">↑ 156% from last month</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ARI Solutions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose ARI Solutions?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're not just teaching AI theory—we're delivering practical, AI-powered income systems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <Zap className="w-12 h-12 text-teal-500 mb-4" />
                <CardTitle>Build or Buy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn to build AI-powered systems yourself with our courses, or have our expert team implement them for you.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="w-12 h-12 text-teal-500 mb-4" />
                <CardTitle>Outcome-Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every course and service is designed around one goal: leveraging AI to increase your income while reducing your workload.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-teal-500 mb-4" />
                <CardTitle>Proven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our AI-powered systems have generated over $2M in revenue for our clients and saved thousands of hours through intelligent automation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions Strip */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Done-For-You Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let our team build custom automation systems for your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {servicesData.map((service) => (
              <Card key={service.id} className="group hover:shadow-xl transition-all flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.heroImage}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <Badge className="w-fit mb-2">{service.shortName}</Badge>
                  <CardTitle>{service.name}</CardTitle>
                  <CardDescription className="text-base">{service.tagline}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6 flex-1">{service.description}</p>
                  <Button asChild className="w-full">
                    <Link href={`/solutions/${service.slug}`}>
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Course Section */}
      {featuredCourse && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4">Featured Course</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Learning Today</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our most popular course—go from zero to automated income in 30 days
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative h-64 md:h-auto">
                    <img
                      src={featuredCourse.heroImage}
                      alt={featuredCourse.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <Badge className="w-fit mb-3">Bestseller</Badge>
                    <h3 className="text-2xl font-bold mb-3">{featuredCourse.title}</h3>
                    <p className="text-muted-foreground mb-6">{featuredCourse.subtitle}</p>
                    
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-3xl font-bold">${featuredCourse.price}</span>
                      {featuredCourse.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">
                          ${featuredCourse.originalPrice}
                        </span>
                      )}
                    </div>
                    
                    <Button size="lg" asChild>
                      <Link href={`/courses/${featuredCourse.slug}`}>
                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* AI Opportunity & How We Help Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <Badge className="mb-4">The AI Opportunity</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">You're Still Early</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              AI is transforming business, but most companies haven't automated yet. This is your competitive advantage.
            </p>
          </div>

          {/* Market Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto mb-12 md:mb-16">
            <Card>
              <CardContent className="pt-6 text-center">
                <BarChart3 className="w-10 h-10 md:w-12 md:h-12 text-teal-500 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">$1.8T</div>
                <p className="text-sm text-muted-foreground">Global AI market by 2030</p>
                <p className="text-xs text-muted-foreground mt-2">Source: Grand View Research</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Briefcase className="w-10 h-10 md:w-12 md:h-12 text-teal-500 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">73%</div>
                <p className="text-sm text-muted-foreground">Businesses plan to adopt AI</p>
                <p className="text-xs text-muted-foreground mt-2">Source: McKinsey 2024</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Lock className="w-10 h-10 md:w-12 md:h-12 text-orange-500 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">Only 23%</div>
                <p className="text-sm text-muted-foreground">Have actually integrated AI automation</p>
                <p className="text-xs text-muted-foreground mt-2">The gap is your opportunity</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Users className="w-10 h-10 md:w-12 md:h-12 text-teal-500 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">40%</div>
                <p className="text-sm text-muted-foreground">Productivity increase with AI automation</p>
                <p className="text-xs text-muted-foreground mt-2">Average across industries</p>
              </CardContent>
            </Card>
          </div>

          {/* ROI Calculator CTA */}
          <div className="max-w-4xl mx-auto mb-12 md:mb-16">
            <Card className="bg-gradient-to-r from-teal-500/10 to-teal-600/10 border-teal-500/20">
              <CardContent className="p-6 md:p-8 text-center">
                <Calculator className="w-12 h-12 md:w-16 md:h-16 text-teal-500 mx-auto mb-4" />
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Calculate Your ROI</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  See how much revenue you could generate with AI-powered lead generation
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-teal-500 hover:bg-teal-600">
                      <Calculator className="mr-2 w-4 h-4" />
                      Open ROI Calculator
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Lead Generation ROI Calculator</DialogTitle>
                      <DialogDescription>
                        Calculate how much more revenue you could generate with ARI Solutions
                      </DialogDescription>
                    </DialogHeader>
                    <LeadGenROICalculator />
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>

          {/* How Our Solutions Work Together */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-2xl md:text-4xl font-bold mb-4">How Our Solutions Work Together</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Each solution complements the others to create a complete business automation system
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <Card className="relative">
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-6 h-6 text-teal-500" />
                    Lead Generation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Fill your pipeline with qualified leads through AI-powered campaigns across multiple channels.
                  </p>
                  <p className="text-sm font-semibold text-teal-600">→ Feeds leads to AI Receptionist</p>
                </CardContent>
              </Card>

              <Card className="relative">
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-6 h-6 text-teal-500" />
                    AI Receptionist
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Answer every call 24/7, qualify prospects, provide quotes, and capture appointment requests.
                  </p>
                  <p className="text-sm font-semibold text-teal-600">→ Books into ABA system</p>
                </CardContent>
              </Card>

              <Card className="relative">
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-teal-500" />
                    Booking Accelerator
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Convert appointments to revenue with automated scheduling, reminders, and payment collection.
                  </p>
                  <p className="text-sm font-semibold text-teal-600">→ Closes the loop</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 md:mt-12 text-center">
              <Card className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20">
                <CardContent className="p-6 md:p-8">
                  <h4 className="text-xl md:text-2xl font-bold mb-3">The Complete System</h4>
                  <p className="text-muted-foreground mb-6">
                    When all three work together: <strong>Lead Generation</strong> brings prospects → <strong>AI Receptionist</strong> qualifies and books them → <strong>ABA</strong> converts them to paying customers.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-teal-500 hover:bg-teal-600 w-full sm:w-auto" asChild>
                      <Link href="/solutions">Explore Solutions</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                      <Link href="/contact">Talk to Our Team</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials and CTA sections remain unchanged */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real results from real people who transformed their businesses
            </p>
          </div>
          
          <TestimonialCarousel testimonials={testimonialsData} />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-500 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Automate Your Income?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">Join 1,247+ business owners who are generating revenue on autopilot</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100" asChild>
              <Link href="/courses">Browse All Courses <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// ROI Calculator Component
function LeadGenROICalculator() {
  const [showResults, setShowResults] = useState(false);
  const [inputs, setInputs] = useState({
    costPerLead: '',
    adSpend: '',
    closeRate: '',
    customerValue: '',
    leadsPerMonth: '',
    additionalLeads: '30'
  });

  const handleCalculate = () => {
    setShowResults(true);
  };

  const calculateROI = () => {
    const costPerLead = parseFloat(inputs.costPerLead) || 0;
    const closeRate = parseFloat(inputs.closeRate) || 0;
    const customerValue = parseFloat(inputs.customerValue) || 0;
    const leadsPerMonth = parseFloat(inputs.leadsPerMonth) || 0;
    const currentAdSpend = parseFloat(inputs.adSpend) || 0;
    const additionalLeads = parseFloat(inputs.additionalLeads) || 0;

    const currentConversions = (leadsPerMonth * closeRate) / 100;
    const currentRevenue = currentConversions * customerValue;

    const ariCostPerLead = costPerLead * 0.65;
    const totalLeads = leadsPerMonth + additionalLeads;
    const ariLeadCost = additionalLeads * ariCostPerLead;
    const newAdSpend = currentAdSpend + ariLeadCost;
    
    const improvedCloseRate = closeRate * 1.30;
    const newConversions = (totalLeads * improvedCloseRate) / 100;
    const newRevenue = newConversions * customerValue;
    const newCostPerLead = newAdSpend / totalLeads;

    const additionalMonthlyRevenue = newRevenue - currentRevenue;
    const netAnnualBenefit = (additionalMonthlyRevenue * 12) - (ariLeadCost * 12);

    return {
      current: { leadsPerMonth, conversions: currentConversions, revenue: currentRevenue, costPerLead, adSpend: currentAdSpend, closeRate },
      new: { totalLeads, conversions: newConversions, revenue: newRevenue, costPerLead: newCostPerLead, adSpend: newAdSpend, closeRate: improvedCloseRate },
      improvements: { additionalMonthlyRevenue, additionalLeads, netAnnualBenefit, additionalConversions: newConversions - currentConversions }
    };
  };

  const results = showResults ? calculateROI() : null;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="costPerLead">Current Cost Per Lead ($)</Label>
          <Input
            id="costPerLead"
            type="number"
            placeholder="150"
            value={inputs.costPerLead}
            onChange={(e) => setInputs({...inputs, costPerLead: e.target.value})}
            className="mt-2"
          />
        </div>
        <div>
          <Label htmlFor="adSpend">Current Ad Spend/mo ($)</Label>
          <Input
            id="adSpend"
            type="number"
            placeholder="5000"
            value={inputs.adSpend}
            onChange={(e) => setInputs({...inputs, adSpend: e.target.value})}
            className="mt-2"
          />
        </div>
        <div>
          <Label htmlFor="closeRate">Lead-to-Close Rate (%)</Label>
          <Input
            id="closeRate"
            type="number"
            placeholder="10"
            value={inputs.closeRate}
            onChange={(e) => setInputs({...inputs, closeRate: e.target.value})}
            className="mt-2"
          />
        </div>
        <div>
          <Label htmlFor="customerValue">Avg Customer Value ($)</Label>
          <Input
            id="customerValue"
            type="number"
            placeholder="2000"
            value={inputs.customerValue}
            onChange={(e) => setInputs({...inputs, customerValue: e.target.value})}
            className="mt-2"
          />
        </div>
        <div>
          <Label htmlFor="leadsPerMonth">Current Leads/Month</Label>
          <Input
            id="leadsPerMonth"
            type="number"
            placeholder="50"
            value={inputs.leadsPerMonth}
            onChange={(e) => setInputs({...inputs, leadsPerMonth: e.target.value})}
            className="mt-2"
          />
        </div>
        <div>
          <Label htmlFor="additionalLeads">Additional Leads ARI Brings</Label>
          <Input
            id="additionalLeads"
            type="number"
            placeholder="30"
            value={inputs.additionalLeads}
            onChange={(e) => setInputs({...inputs, additionalLeads: e.target.value})}
            className="mt-2"
          />
        </div>
      </div>

      <Button onClick={handleCalculate} className="w-full bg-teal-500 hover:bg-teal-600">
        <Calculator className="w-4 h-4 mr-2" />
        Calculate ROI
      </Button>

      {showResults && results && (
        <div className="space-y-6 animate-in fade-in">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gray-50 dark:bg-slate-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-red-500" />
                  Current State
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Leads/Month</span>
                  <span className="font-bold">{results.current.leadsPerMonth}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Cost Per Lead</span>
                  <span className="font-bold">${results.current.costPerLead}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Close Rate</span>
                  <span className="font-bold">{results.current.closeRate}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monthly Revenue</span>
                  <span className="font-bold">${results.current.revenue.toLocaleString()}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-teal-50 dark:bg-teal-950 border-teal-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-teal-500" />
                  With ARI Solutions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Leads/Month</span>
                  <span className="font-bold text-teal-600">{results.new.totalLeads} <span className="text-xs">(+{results.improvements.additionalLeads})</span></span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Avg Cost Per Lead</span>
                  <span className="font-bold text-teal-600">${results.new.costPerLead.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Close Rate</span>
                  <span className="font-bold text-teal-600">{results.new.closeRate.toFixed(1)}% <span className="text-xs">(+30%)</span></span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monthly Revenue</span>
                  <span className="font-bold text-teal-600">${results.new.revenue.toLocaleString()}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-teal-500 to-teal-600 text-white">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold mb-2">
                ${results.improvements.netAnnualBenefit.toLocaleString()}
              </div>
              <div className="text-teal-100">Net Annual Benefit</div>
              <p className="text-sm text-teal-100 mt-4">
                +{results.improvements.additionalConversions.toFixed(0)} more customers per month from {results.improvements.additionalLeads} additional leads
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
