import type { Metadata } from 'next'
import { altEn } from '@/lib/seo'
import ComingSoon from '@/components/coming-soon'

export const metadata: Metadata = {
  title: 'Help Centre | Sprout & Vine Care',
  description: 'Get help with Sprout & Vine Care. Guides, tutorials, and answers to common questions.',
  alternates: altEn('/help'),
}

export default function HelpPage() {
  return (
    <ComingSoon
      title="Help Centre"
      description="Step-by-step guides, video tutorials, and answers to common questions. Our full Help Centre is on its way."
      backLabel="Contact us"
      backHref="/contact"
    />
  )
}
