import type { Metadata } from 'next'
import ComingSoon from '@/components/coming-soon'

export const metadata: Metadata = {
  title: 'Blog | Sprout & Vine',
  description: 'Insights on childcare management, CWELCC funding, and running a thriving Canadian childcare centre.',
}

export default function BlogPage() {
  return (
    <ComingSoon
      title="The Sprout & Vine Blog"
      description="Insights on childcare management, CWELCC funding, and running a thriving Canadian childcare centre. Coming soon."
      backLabel="Back to home"
      backHref="/"
    />
  )
}
