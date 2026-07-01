import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { MotionConfig } from 'framer-motion'
import './globals.css'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import LanguageBanner from '@/components/language-banner'
import AnnouncementBar from '@/components/announcement-bar'
import MobileStickyCTA from '@/components/mobile-sticky-bar'
import ExitIntent from '@/components/exit-intent'
import ScrollVine from '@/components/scroll-vine'
import { Analytics } from '@vercel/analytics/next'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sproutandvinecare.ca'),
  title: 'Sprout & Vine Care | Childcare Management Built for Canada',
  description:
    'A childcare management platform built around CWELCC from day one. Attendance, billing, photo-verified Smart Pickup Authorization, and bilingual parent communication, designed for Canadian operators.',
  openGraph: {
    type: 'website',
    siteName: 'Sprout & Vine Care',
    title: 'Sprout & Vine Care | Childcare Management Built for Canada',
    description:
      'A childcare management platform built around CWELCC from day one. Attendance, billing, photo-verified Smart Pickup Authorization, and bilingual parent communication, designed for Canadian operators.',
    url: 'https://www.sproutandvinecare.ca',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sprout & Vine Care | Childcare Management Built for Canada',
    description:
      'A childcare management platform built around CWELCC from day one. Attendance, billing, photo-verified Smart Pickup Authorization, and bilingual parent communication.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="min-h-full flex flex-col antialiased">
        <MotionConfig reducedMotion="user" transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}>
          <AnnouncementBar />
          <LanguageBanner />
          <Nav />
          <ScrollVine />
          <main className="flex-1">{children}</main>
          <Footer />
          <MobileStickyCTA />
          <ExitIntent />
        </MotionConfig>
        <Analytics />
      </body>
    </html>
  )
}
