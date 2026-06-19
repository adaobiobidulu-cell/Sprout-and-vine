import type { Metadata } from 'next'
import ComingSoon from '@/components/coming-soon'

export const metadata: Metadata = {
  title: 'Help Centre | Sprout & Vine Care',
  description: 'Get help with Sprout & Vine. Guides, tutorials, and answers to common questions.',
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
