import ComparisonPage from '@/components/comparison-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sprout & Vine vs Procare | Canadian Alternative to Procare',
  description: 'Procare is enterprise software designed for large US operations. Sprout & Vine is calm, affordable, Canadian childcare management built for how you actually work.',
}

const rows = [
  { feature: 'CWELCC subsidy tracking',       us: true,            them: false },
  { feature: 'Bilingual EN/FR',               us: true,            them: false },
  { feature: 'Canadian data residency',       us: true,            them: false },
  { feature: 'Setup time',                    us: 'Same day',      them: 'Weeks' },
  { feature: 'Pricing model',                 us: 'Flat per-centre', them: 'Complex licensing' },
  { feature: 'Seeds free tier',               us: true,            them: false },
  { feature: 'Mobile-first design',           us: true,            them: 'Limited' },
  { feature: 'Parent app',                    us: 'Vine app',      them: 'Basic' },
  { feature: 'Smart Pickup Authorization',    us: 'Photo-verified', them: 'Basic' },
  { feature: 'Enrollment & waitlist',         us: 'Full flow',     them: 'Available' },
  { feature: 'Attendance tracking',           us: true,            them: true },
  { feature: 'Billing & invoicing',           us: true,            them: true },
  { feature: 'Multi-location support',        us: 'Vine plan',     them: true },
]

const testimonials = [
  {
    quote: "Procare felt like installing enterprise software just to run my 30-child centre. The training alone took two weeks. Sprout & Vine we were up and running the same afternoon.",
    name: 'Alicia M.',
    role: 'Director',
    centreName: 'Westview Child Care Centre',
    location: 'Hamilton, ON',
    detail: 'Licensed since 2018 · 32 children enrolled',
  },
  {
    quote: "The cost difference was significant, but honestly the simplicity was the bigger win. My staff actually use Sprout & Vine. With Procare, half of them avoided it.",
    name: 'Kofi A.',
    role: 'Director',
    centreName: 'Prairie Learning Centre',
    location: 'Winnipeg, MB',
    detail: 'Licensed since 2021 · 26 children enrolled',
  },
]

export default function VsProcarePage() {
  return (
    <ComparisonPage
      competitorName="Procare"
      heroHeadline={
        <>
          Procare is enterprise software.<br />
          Sprout &amp; Vine is built for how you actually work.
        </>
      }
      heroSubtext="Procare is powerful. It is also complex, expensive, and built for large American operations. Most Canadian centres do not need enterprise software. They need calm, capable tools."
      keyAngle="Procare was built for large US childcare chains. If you are running one to five locations in Canada, you are paying for features you will never use, learning a system that takes weeks to set up, and still doing CWELCC reconciliation in a spreadsheet."
      rows={rows}
      testimonials={testimonials}
      usPrice="from CAD $39/mo"
      themPrice="Custom"
      themPriceNote="Enterprise licensing. Implementation fees. Annual contracts."
    />
  )
}
