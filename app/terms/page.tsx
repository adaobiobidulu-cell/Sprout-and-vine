import type { Metadata } from 'next'
import ComingSoon from '@/components/coming-soon'

export const metadata: Metadata = {
  title: 'Terms of Service | Sprout & Vine',
  description: 'The terms that govern your use of Sprout & Vine.',
}

export default function TermsPage() {
  return (
    <ComingSoon
      title="Terms of Service"
      description="Our Terms of Service are being finalized and will be published here before launch. Questions? Email us at legal@sproutandvine.ca."
      backLabel="Back to home"
      backHref="/"
    />
  )
}
