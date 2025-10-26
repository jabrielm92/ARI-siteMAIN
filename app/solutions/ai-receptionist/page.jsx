"use client";

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Phone, MessageCircle, Calendar, DollarSign, Users, BarChart, Mail, Clock, Zap, ArrowRight, Star } from 'lucide-react';
import JsonLd from '@/components/jsonld';
import Link from 'next/link';

export default function AIReceptionistPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <head>
        <JsonLd data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'AI Virtual Receptionist',
          provider: { '@type': 'Organization', name: 'ARI Solutions Inc' },
          areaServed: 'US',
          serviceType: 'AI Receptionist',
          description: 'AI-powered receptionist that answers calls 24/7, qualifies leads, provides quotes, and books appointments.',
          offers: {
            '@type': 'Offer',
            priceCurrency: 'USD',
            price: 197,
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/solutions/ai-receptionist`,
            availability: 'https://schema.org/InStock'
          }
        }} />
      </head>


      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-teal-500/20 text-teal-300 border-teal-500/30">
              AI-Powered Communication
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Virtual Receptionist
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Answer Every Call, Book Every Lead
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
              Never miss another call. Our AI Virtual Receptionist answers calls 24/7, qualifies leads, provides quotes, and books appointments—all with natural, human-like conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600" asChild>
                <a href="https://calendly.com/arisolutionsinc/30min" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Demo
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-black hover:bg-gray-200" asChild>
                <Link href="/contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of page unchanged */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-red-500/10 border border-red-500/20 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">The Problem with Traditional Receptionists</h2>
              <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Miss 30-40% of calls during busy hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>$35,000-45,000/year per receptionist</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Sick days, breaks, and vacations</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>After-hours calls go to voicemail</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Inconsistent call quality and messaging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>Limited to handling one call at a time</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The AI Solution</h2>
              <p className="text-xl text-muted-foreground">
                A virtual receptionist that never misses a call, books appointments intelligently, and costs 80% less
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
