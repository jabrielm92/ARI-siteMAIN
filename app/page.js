"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import CourseCard from '@/components/course-card';
import TestimonialCarousel from '@/components/testimonial-carousel';
import { ArrowRight, CheckCircle2, Zap, Target, TrendingUp } from 'lucide-react';
import { coursesData, servicesData, testimonialsData } from '@/lib/courses-data';

export default function App() {
  const featuredCourse = coursesData.find(c => c.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
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
                <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white" asChild>
                  <Link href="/courses">
                    Browse Courses <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-gray-600 text-gray-900 hover:bg-gray-100" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
              <div className="mt-6">
                <Button size="lg" variant="outline" className="border-gray-600 text-gray-900 hover:bg-gray-100" asChild>
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
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
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
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
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
                        Get Started Now <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-500 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Automate Your Income?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join 1,247+ business owners who are generating revenue on autopilot
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100" asChild>
              <Link href="/courses">
                Browse All Courses <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
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
