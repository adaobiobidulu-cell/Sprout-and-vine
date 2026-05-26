import type { Metadata } from 'next'
import ComingSoon from '@/components/coming-soon'

export const metadata: Metadata = {
  title: 'Changelog | Sprout & Vine',
  description: "See what's new in Sprout & Vine — product updates, improvements, and fixes.",
}

export default function ChangelogPage() {
  return (
    <ComingSoon
      title="What's new"
      description="Product updates, improvements, and fixes — all in one place. Check back soon for our first entries."
      backLabel="See all features"
      backHref="/features"
    />
  )
}
