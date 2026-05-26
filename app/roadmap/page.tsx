import type { Metadata } from 'next'
import ComingSoon from '@/components/coming-soon'

export const metadata: Metadata = {
  title: 'Roadmap | Sprout & Vine',
  description: "See what's coming next to Sprout & Vine.",
}

export default function RoadmapPage() {
  return (
    <ComingSoon
      title="Product roadmap"
      description="See what we're building next. We share our roadmap publicly so you know exactly where we're headed."
      backLabel="View current features"
      backHref="/features"
    />
  )
}
