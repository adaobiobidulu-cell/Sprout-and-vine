import ComparisonPage from '@/components/comparison-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sprout & Vine vs Brightwheel | Canadian Alternative to Brightwheel',
  description: 'Brightwheel is built for the US. Sprout & Vine is built for Canada. CWELCC tracking, bilingual EN/FR, Canadian data residency, and per-centre pricing. Compare now.',
}

const rows = [
  { feature: 'CWELCC subsidy tracking',       us: true,      them: false },
  { feature: 'Bilingual EN/FR',               us: true,      them: false },
  { feature: 'Canadian data residency',       us: true,      them: false },
  { feature: 'Provincial compliance tools',   us: true,      them: false },
  { feature: 'Seeds free tier (aspiring ops)',us: true,      them: false },
  { feature: 'Per-centre flat pricing',       us: true,      them: false },
  { feature: 'Smart Pickup Authorization',    us: 'Photo-verified', them: 'Basic' },
  { feature: 'Enrollment & waitlist',         us: 'Full flow', them: 'Partial' },
  { feature: 'Parent app',                    us: 'Vine app', them: 'Strong' },
  { feature: 'Attendance tracking',           us: true,      them: true },
  { feature: 'Daily reports',                 us: true,      them: true },
  { feature: 'Billing & invoicing',           us: true,      them: true },
  { feature: 'Messaging',                     us: true,      them: true },
]

const testimonials = [
  {
    quote: "We were on Brightwheel for two years. It is a solid platform, but every time CWELCC changed something we were doing manual reconciliation. Sprout & Vine just handles it.",
    name: 'Sandra P.',
    role: 'Director',
    centreName: 'Meadowbrook Early Learning',
    location: 'Ottawa, ON',
    detail: 'Licensed since 2016 · 40 children enrolled',
  },
  {
    quote: "The bilingual support alone made the switch worth it for us. Half our families communicate primarily in French. With Brightwheel, they were always second-class users.",
    name: 'Marie-Claude B.',
    role: 'Director',
    centreName: 'Garderie Les Petits Explorateurs',
    location: 'Gatineau, QC',
    detail: 'Licensed since 2020 · 22 children enrolled',
  },
]

export default function VsBrightwheelPage() {
  return (
    <ComparisonPage
      competitorName="Brightwheel"
      heroHeadline={
        <>
          Brightwheel is built for the US.<br />
          Sprout &amp; Vine is built for Canada.
        </>
      }
      heroSubtext="Great platform. Wrong country."
      keyAngle="Brightwheel is a well-made product built for American childcare regulations, American subsidy programs, and American data laws. If you're running a centre in Canada, that mismatch costs you real time and money every month."
      rows={rows}
      testimonials={testimonials}
      usPrice="from CAD $39/mo"
      themPrice="Per child"
      themPriceNote="Pricing scales with enrollment. Costs rise as you grow."
    />
  )
}
