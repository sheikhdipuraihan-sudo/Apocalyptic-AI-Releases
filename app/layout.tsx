import React from "react"
import type { Metadata } from 'next'
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const instrumentSans = Instrument_Sans({ 
  subsets: ["latin"],
  variable: '--font-instrument'
});

const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"],
  weight: "400",
  variable: '--font-instrument-serif'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://raihan.sites.bd'),
  title: {
    default: 'Apocalyptic AI — Your Offline Survival Guide',
    template: '%s | Apocalyptic AI',
  },
  description: 'Apocalyptic AI is a private, on-device Android survival guide with practical field guidance, preparedness checklists, and tools for when you need them most.',
  keywords: [
    'offline survival guide',
    'Android survival app',
    'preparedness app',
    'emergency checklist',
    'on-device AI',
    'Apocalyptic AI',
  ],
  applicationName: 'Apocalyptic AI',
  authors: [{ name: 'Raihan' }],
  creator: 'Raihan',
  publisher: 'Raihan',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '64x64', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    url: 'https://raihan.sites.bd',
    title: 'Apocalyptic AI — Your Offline Survival Guide',
    description: 'Practical survival guidance and preparedness tools, built into a private Android app that works when connectivity does not.',
    siteName: 'Apocalyptic AI',
    images: [{ url: '/apple-icon.png', width: 180, height: 180, alt: 'Apocalyptic AI app icon' }],
  },
  twitter: {
    card: 'summary',
    title: 'Apocalyptic AI — Your Offline Survival Guide',
    description: 'A private Android survival guide with practical tools for uncertain moments.',
    images: ['/apple-icon.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
