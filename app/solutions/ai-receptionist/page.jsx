"use client";

import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Calendar, Mail, Star } from 'lucide-react';
import JsonLd from '@/components/jsonld';
import { servicesData } from '@/lib/courses-data';

export default function AIReceptionistPage() {
  const service = servicesData.find((s) => s.slug === 'ai-receptionist');

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <head>
        <JsonLd data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.name,
          provider: { '@type': 'Organization', name: 'ARI Solutions Inc' },
          areaServed: 'US',
          serviceType: service.shortName,
          description: service.description,
          offers: {
            '@type': 'Offer',
            priceCurrency: 'USD',
            price: service?.pricing?.setup || 197,
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/solutions/${service.slug}`,
            availability: 'https://schema.org/InStock'
          }
        }} />
      </head>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-teal-500/20 text-teal-300 border-teal-500/30">AI-Powered Communication</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{service.name}</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">{service.tagline}</p>
            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">{service.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600" asChild>
                <a href="https://calendly.com/arisolutionsinc/30min" target="_blank" rel="noopener noreferrer"> <Calendar className="w-5 h-5 mr-2" /> Schedule Demo </a>
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-black hover:bg-gray-200" asChild>
                <Link href="/contact"> <Mail className="w-5 h-5 mr-2" /> Email Us </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Key Features</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.features?.map((f, i) => (
                  <Card key={i}>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-1">{f.title}</h3>
                      <p className="text-sm text-muted-foreground">{f.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Benefits</h2>
              <div className="space-y-3">
                {service.benefits?.map((b, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 mt-0.5" />
                    <span className="text-muted-foreground">{b}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-lg bg-muted">
                <div className="text-sm text-muted-foreground">Starting at</div>
                <div className="text-3xl font-bold">${service?.pricing?.setup}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Case Study — {service.caseStudy.client}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">{service.caseStudy.quote}</p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {service.caseStudy.metrics.map((m, idx) => (
                    <div key={idx} className="p-4 rounded-lg bg-background border">
                      <div className="text-2xl font-bold">{m.value}</div>
                      <div className="text-sm text-muted-foreground">{m.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-teal-500 to-teal-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to capture every lead?</h2>
          <p className="text-lg opacity-90 mb-6">Book a demo or reach out and we’ll design the right receptionist for your business.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100" asChild>
              <a href="https://calendly.com/arisolutionsinc/30min" target="_blank" rel="noopener noreferrer">Schedule Demo</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
