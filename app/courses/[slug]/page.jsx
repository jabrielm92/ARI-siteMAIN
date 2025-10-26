"use client";

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Users, Clock, CheckCircle2 } from 'lucide-react';
import { coursesData } from '@/lib/courses-data';
import JsonLd from '@/components/jsonld';

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
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <head>
        <JsonLd data={productJsonLd} />
      </head>

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
              <div className="mb-6">
                <Button asChild className="w-full md:w-auto" size="lg">
                  <Link href={`/checkout/${course.id}`}>Proceed to Checkout</Link>
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
            <Card>
              <CardHeader>
                <CardTitle>About This Course</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{course.description}</p>
              </CardContent>
            </Card>
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>What You'll Build</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {course.whatYoullBuild?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardContent className="p-6">
                <div className="mb-6">
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
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
