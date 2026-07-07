import type { Metadata } from 'next'
import { altEn } from '@/lib/seo'
import ComingSoon from '@/components/coming-soon'

export const metadata: Metadata = {
  title: 'Security | Sprout & Vine Care',
  description: 'How Sprout & Vine Care keeps your childcare data safe and secure.',
  alternates: altEn('/security'),
}

export default function SecurityPage() {
  return (
    <ComingSoon
      title="Security at Sprout & Vine Care"
      description="We take data security seriously. Our full security overview, including encryption, access controls, and compliance details, is coming soon."
      backLabel="Contact us"
      backHref="/contact"
    />
  )
}
