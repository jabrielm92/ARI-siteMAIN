"use client";

import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { servicesData } from '@/lib/courses-data';

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-teal-500/20 text-teal-300 border-teal-500/30">
            Done-For-You Solutions
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Let Us Build Your
            <br />
            <span className="text-teal-400">Automation System</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Don't have time to learn? Our expert team will build custom automation systems for your business—from appointment booking to lead generation and everything in between.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {servicesData.map((service) => (
              <Card key={service.id} className="group hover:shadow-2xl transition-all overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.heroImage}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-teal-500">
                    {service.shortName}
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl">{service.name}</CardTitle>
                  <CardDescription className="text-lg">{service.tagline}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{service.description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Key Benefits:</h4>
                    <div className="space-y-2">
                      {service.benefits?.slice(0, 3).map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-sm text-muted-foreground">Starting at</span>
                      <span className="text-3xl font-bold">
                        ${typeof service.pricing.setup === 'number' ? service.pricing.setup : service.pricing.starter}
                      </span>
                    </div>
                    
                    <Button asChild className="w-full" size="lg">
                      <Link href={`/solutions/${service.slug}`}>
                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From consultation to launch, we handle everything
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: '1', title: 'Discovery Call', desc: 'We learn about your business and goals' },
              { step: '2', title: 'Custom Strategy', desc: 'We design a tailored automation plan' },
              { step: '3', title: 'Build & Test', desc: 'We build and thoroughly test your system' },
              { step: '4', title: 'Launch & Support', desc: 'We launch and provide ongoing support' }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-foreground">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-500 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book a free 30-minute consultation to discuss your needs
          </p>
          <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100" asChild>
            <Link href="/contact">
              Schedule Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
