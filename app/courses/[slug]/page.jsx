"use client";

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Star, Users, Clock, CheckCircle2, Shield } from 'lucide-react';
import { coursesData } from '@/lib/courses-data';
import JsonLd from '@/components/jsonld';

export default function CourseDetailPage() {
  const params = useParams();
  const course = coursesData.find(c => c.slug === params.slug);
  const [activeTab, setActiveTab] = useState('overview');

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

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: course.title,
    description: course.subtitle,
    image: course.heroImage,
    brand: { '@type': 'Organization', name: 'ARI Solutions Inc' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: course.price,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/courses/${course.slug}`,
      availability: 'https://schema.org/InStock'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: course.rating,
      reviewCount: course.students
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <head>
        <JsonLd data={productJsonLd} />
      </head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-teal-500/20 text-teal-300 border-teal-500/30">{course.category}</Badge>
                {course.featured && (
                  <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">Featured</Badge>
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
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Save ${course.originalPrice - course.price}</Badge>
                  </>
                )}
              </div>
              <div className="flex gap-4">
                <Button size="lg" className="bg-teal-500 hover:bg-teal-600" asChild>
                  <Link href={`/checkout/${course.id}`}>Proceed to Checkout</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/courses">Browse Courses</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-700">
                <img src={course.heroImage} alt={course.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About This Course</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{course.description}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>What You'll Build</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {course.whatYoullBuild?.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {course.prerequisites && course.prerequisites.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Prerequisites</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {course.prerequisites.map((prereq, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-teal-500">•</span>
                            <span>{prereq}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                <Card className="bg-gradient-to-br from-teal-500/10 to-teal-600/10 border-teal-500/20">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                    <p className="text-muted-foreground mb-6">Join {course.students.toLocaleString()}+ students who are already learning</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button size="lg" className="bg-teal-500 hover:bg-teal-600" asChild>
                        <Link href={`/checkout/${course.id}`}>Proceed to Checkout - ${course.price}</Link>
                      </Button>
                      <Button size="lg" variant="outline" asChild>
                        <Link href="/courses">Browse Other Courses</Link>
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4 flex items-center justify-center gap-2">
                      <Shield className="w-4 h-4 text-teal-500" />
                      30-day money-back guarantee
                    </p>
                  </CardContent>
                </Card>

                {course.faqs && course.faqs.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Frequently Asked Questions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        {course.faqs.map((faq, idx) => (
                          <AccordionItem key={idx} value={`item-${idx}`}>
                            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="curriculum" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Course Curriculum</CardTitle>
                    <p className="text-sm text-muted-foreground">Comprehensive modules designed to take you from beginner to expert</p>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {course.modules?.map((module, idx) => (
                        <AccordionItem key={idx} value={`module-${idx}`}>
                          <AccordionTrigger className="text-left">
                            <div className="flex items-center gap-3">
                              <Badge variant="outline">Module {module.number}</Badge>
                              <span>{module.title}</span>
                              <span className="text-sm text-muted-foreground ml-auto mr-4">{module.duration}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 pl-4">
                              {module.lessons?.map((lesson, lessonIdx) => (
                                <li key={lessonIdx} className="flex items-start gap-2 text-muted-foreground">
                                  <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                                  <span>{lesson}</span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Student Reviews</CardTitle>
                    <p className="text-sm text-muted-foreground">See what our students are saying</p>
                  </CardHeader>
                  <CardContent>
                    {course.testimonials && course.testimonials.length > 0 ? (
                      <div className="space-y-6">
                        {course.testimonials.map((testimonial, idx) => (
                          <div key={idx} className="border-b pb-6 last:border-b-0">
                            <div className="flex items-start gap-4">
                              <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <h4 className="font-semibold">{testimonial.name}</h4>
                                  <div className="flex items-center gap-1">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                  </div>
                                </div>
                                <p className="text-sm text-muted-foreground mb-2">{testimonial.role}</p>
                                <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground text-center py-8">No reviews yet. Be the first to review this course!</p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardContent className="p-6 space-y-6">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl font-bold">${course.price}</span>
                    {course.originalPrice && (
                      <span className="text-xl text-muted-foreground line-through">${course.originalPrice}</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">One-time payment. Lifetime access.</p>
                </div>
                
                <Button asChild className="w-full" size="lg">
                  <Link href={`/checkout/${course.id}`}>Proceed to Checkout</Link>
                </Button>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="w-4 h-4 text-teal-500" />
                  <span>30-day money-back guarantee</span>
                </div>

                {course.whatsIncluded && course.whatsIncluded.length > 0 && (
                  <div className="border-t pt-6">
                    <h4 className="font-semibold mb-4">This course includes:</h4>
                    <ul className="space-y-3">
                      {course.whatsIncluded.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
