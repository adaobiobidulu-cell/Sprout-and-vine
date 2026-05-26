import type { Metadata } from 'next'
import ComingSoon from '@/components/coming-soon'

export const metadata: Metadata = {
  title: 'Privacy Policy | Sprout & Vine',
  description: 'How Sprout & Vine collects, uses, and protects your data.',
}

export default function PrivacyPage() {
  return (
    <ComingSoon
      title="Privacy Policy"
      description="Our full Privacy Policy is being drafted by legal counsel and will be published here before launch. Questions? Email us at privacy@sproutandvine.ca."
      backLabel="Back to home"
      backHref="/"
    />
  )
}
