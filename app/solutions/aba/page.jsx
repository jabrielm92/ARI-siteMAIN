"use client";

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Calendar, CreditCard, Bell, Users, Zap, BarChart, Mail, Phone, Clock, ArrowRight } from 'lucide-react';
import JsonLd from '@/components/jsonld';
import Link from 'next/link';

export default function ABAPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <head>
        <JsonLd data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Appointment Booking Accelerator',
          provider: { '@type': 'Organization', name: 'ARI Solutions Inc' },
          areaServed: 'US',
          serviceType: 'Appointment Booking System',
          description: 'Done-for-you automated appointment booking system with payments, reminders, and analytics.',
          offers: {
            '@type': 'Offer',
            priceCurrency: 'USD',
            price: 97,
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/solutions/aba`,
            availability: 'https://schema.org/InStock'
          }
        }} />
      </head>


      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-teal-500/20 text-teal-300 border-teal-500/30">
              Done-For-You Service
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Appointment Booking Accelerator
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Never Miss a Booking Again
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Transform your appointment booking process from manual chaos to automated efficiency. Our ABA service builds you a complete booking system that works 24/7—more booked, kept appointments without hiring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600" asChild>
                <a href="https://calendly.com/arisolutionsinc/30min" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Free Consultation
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

      {/* Rest of page omitted for brevity (unchanged content) */}
      <Footer />
    </div>
  );
}
