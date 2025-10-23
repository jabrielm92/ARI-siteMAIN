"use client";

import { useParams } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import FAQAccordion from '@/components/faq-accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, Users, Clock, CheckCircle2, Download, Video, FileText, MessageCircle, Lock } from 'lucide-react';
import { coursesData } from '@/lib/courses-data';

export default function CourseDetailPage() {
  const params = useParams();
  const course = coursesData.find(c => c.slug === params.slug);

  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
          <p className="text-muted-foreground">The course you're looking for doesn't exist.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-teal-500/20 text-teal-300 border-teal-500/30">
                  {course.category}
                </Badge>
                {course.featured && (
                  <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                    Featured
                  </Badge>
                )}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl text-gray-300 mb-6">{course.subtitle}</p>
              
              <div className="flex items-center gap-6 mb-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{course.rating}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold">${course.price}</span>
                {course.originalPrice && (
                  <>
                    <span className="text-2xl text-gray-400 line-through">${course.originalPrice}</span>
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                      Save ${course.originalPrice - course.price}
                    </Badge>
                  </>
                )}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-700">
                <img
                  src={course.heroImage}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="testimonials">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8 mt-6">
                {/* What You'll Build */}
                <Card>
                  <CardHeader>
                    <CardTitle>What You'll Build</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {course.whatYoullBuild.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Description */}
                <Card>
                  <CardHeader>
                    <CardTitle>About This Course</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{course.description}</p>
                  </CardContent>
                </Card>

                {/* Prerequisites */}
                {course.prerequisites && course.prerequisites.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Prerequisites</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {course.prerequisites.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-muted-foreground">•</span>
                            <span className="text-muted-foreground">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="curriculum" className="space-y-4 mt-6">
                {course.modules.map((module) => (
                  <Card key={module.number}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <Badge className="mb-2">Module {module.number}</Badge>
                          <CardTitle className="text-xl">{module.title}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-2">
                            {module.lessons.length} lessons • {module.duration}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {module.lessons.map((lesson, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                            <Video className="w-4 h-4" />
                            <span>{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="testimonials" className="space-y-6 mt-6">
                {course.testimonials && course.testimonials.length > 0 ? (
                  course.testimonials.map((testimonial, idx) => (
                    <Card key={idx}>
                      <CardContent className="pt-6">
                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                        <div className="flex items-center gap-3">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full"
                          />
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <p className="text-muted-foreground">No reviews yet. Be the first to leave one!</p>
                )}
              </TabsContent>
            </Tabs>

            {/* FAQ Section */}
            {course.faqs && course.faqs.length > 0 && (
              <div className="mt-12">
                <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                <FAQAccordion faqs={course.faqs} />
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl font-bold">${course.price}</span>
                      {course.originalPrice && (
                        <span className="text-xl text-muted-foreground line-through">
                          ${course.originalPrice}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">One-time payment. Lifetime access.</p>
                  </div>

                  {course.comingSoon ? (
                    <div className="space-y-4">
                      <Button disabled className="w-full" size="lg">
                        Coming Soon
                      </Button>
                      <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                        <p className="text-sm font-semibold text-yellow-700 dark:text-yellow-400 mb-1">
                          Course In Development
                        </p>
                        <p className="text-xs text-muted-foreground">
                          This course is currently being created. Sign up for our newsletter to be notified when it launches!
                        </p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <Button asChild className="w-full" size="lg">
                        <Link href={`/checkout/${course.id}`}>
                          Proceed to Checkout
                        </Link>
                      </Button>
                      <p className="text-xs text-center text-muted-foreground mb-6">
                        30-day money-back guarantee
                      </p>
                    </>
                  )}

                  <div className="border-t border-border pt-6">
                    <h3 className="font-semibold mb-4">This course includes:</h3>
                    <div className="space-y-3">
                      {course.whatsIncluded.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
