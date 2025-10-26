import './globals.css'
import JsonLd from '@/components/jsonld'
import { Analytics } from '@vercel/analytics/react'

const siteName = 'ARI Solutions Inc'
const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://arisolutionsinc.vercel.app'
const ogImage = 'https://customer-assets.emergentagent.com/job_growth-nexus-10/artifacts/pmqi82i9_o_1j700is492m1t9b10ef3812h8c.avif'

export const metadata = {
  title: `${siteName} - AI-Powered Business Automation`,
  description: 'Leverage AI to build income-generating systems. Learn with our courses or let us implement AI automations for you.',
  openGraph: {
    title: `${siteName} - AI-Powered Business Automation`,
    description: 'Leverage AI to build income-generating systems. Learn with our courses or let us implement AI automations for you.',
    url: siteUrl,
    siteName,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `${siteName} OG Image`
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} - AI-Powered Business Automation`,
    description: 'Leverage AI to build income-generating systems.',
    images: [ogImage]
  }
}

export default function RootLayout({ children }) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: siteUrl,
    logo: ogImage,
  };

  return (
    <html lang="en">
      <head>
        <JsonLd data={orgJsonLd} />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
