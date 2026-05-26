import type { Metadata } from 'next'
import ComingSoon from '@/components/coming-soon'

export const metadata: Metadata = {
  title: 'Careers | Sprout & Vine',
  description: 'Join the Sprout & Vine team. Help us build better tools for Canadian childcare.',
}

export default function CareersPage() {
  return (
    <ComingSoon
      title="Come grow with us"
      description="We're a small, focused team building tools that genuinely help Canadian childcare centres thrive. We'll post openings here when we're ready to grow."
      backLabel="Learn about us"
      backHref="/about"
    />
  )
}
