import ComparisonPage from '@/components/comparison-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sprout & Vine vs Lillio (HiMama) | Canadian Alternative to Lillio',
  description: 'Lillio covers the basics. Sprout & Vine goes further with CWELCC tracking, enrollment management, Smart Pickup Authorization, and bilingual support built for Canada.',
}

const rows = [
  { feature: 'CWELCC subsidy tracking',        us: true,          them: false },
  { feature: 'Enrollment & waitlist management',us: 'Full flow',   them: 'Limited' },
  { feature: 'Smart Pickup Authorization',      us: 'Photo-verified', them: false },
  { feature: 'Seeds free tier (aspiring ops)',  us: true,          them: false },
  { feature: 'Per-centre flat pricing',         us: true,          them: false },
  { feature: 'Bilingual EN/FR (platform)',      us: true,          them: 'Partial' },
  { feature: 'Canadian data residency',         us: true,          them: 'Varies' },
  { feature: 'Multi-location dashboard',        us: 'Vine plan',   them: 'Limited' },
  { feature: 'Daily reports',                   us: true,          them: true },
  { feature: 'Parent messaging',                us: true,          them: true },
  { feature: 'Attendance tracking',             us: true,          them: true },
  { feature: 'Billing & invoicing',             us: true,          them: true },
  { feature: 'Milestone tracking',              us: true,          them: true },
]

const testimonials = [
  {
    quote: "Lillio was great for parent communication but we kept hitting walls. No CWELCC tracking, no real waitlist management. We were still in spreadsheets for half our work.",
    name: 'Priya R.',
    role: 'Director, BC',
  },
  {
    quote: "Switching to Sprout & Vine felt like finally having one tool that does everything. The waitlist and enrollment flow alone saved us hours every week.",
    name: 'James T.',
    role: 'Director, AB',
  },
]

export default function VsLillioPage() {
  return (
    <ComparisonPage
      competitorName="Lillio"
      heroHeadline={
        <>
          Lillio covers the basics.<br />
          Sprout &amp; Vine goes further.
        </>
      }
      heroSubtext="Lillio (formerly HiMama) is a well-known name in Canadian childcare. But well-known doesn't mean complete."
      keyAngle="Lillio does parent communication well. Where it falls short: CWELCC subsidy tracking, full enrollment and waitlist management, Smart Pickup Authorization, and the per-centre pricing model that growing centres need. Sprout & Vine fills every one of those gaps."
      rows={rows}
      testimonials={testimonials}
      usPrice="CAD $69/mo"
      themPrice="Per child"
      themPriceNote="Per-child model means costs grow unpredictably with enrollment."
    />
  )
}
