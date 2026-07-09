import type { Metadata } from 'next'
import Link from 'next/link'
import { canonicalOnly } from '@/lib/seo'
import FadeIn from '@/components/fade-in'
import ProductTour from '@/components/product-tour'

export const metadata: Metadata = {
  title: 'Guided Product Demo | Sprout & Vine Care',
  description:
    'Walk through morning check-in, a two-minute daily report, and Smart Pickup in a guided preview of Sprout & Vine Care. Sample data, no signup required.',
  alternates: canonicalOnly('/demo'),
}

/* Per-scenario status lines (improvement brief 3.2). One shared line for
   now because it is what is literally true today: the platform is in
   development with the founding cohort. If a scenario ships to founding
   operators before the others, split this out per scenario. */
const STATUS_LINE = 'In development with our founding operators.'

const scenarios = [
  { name: 'Morning Check-In', desc: 'Tap a child, mark them arrived, and watch the room count and ratios update.' },
  { name: 'Daily Report', desc: 'Quick-select the day, add a photo, and send it to the family in under two minutes.' },
  { name: 'Smart Pickup', desc: 'See the photo-verified confirmation flow parents rely on at the end of the day.' },
]

export default function DemoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-16 md:py-20 px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn margin="0px">
            <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">
              Guided Demo
            </p>
            <h1
              className="font-display font-medium text-forest-green leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(34px, 5vw, 56px)' }}
            >
              Feel the platform before a call.
            </h1>
            <p className="text-[16px] text-dark-text/60 leading-relaxed max-w-xl mx-auto">
              Three short walkthroughs of the workflows operators use most. No signup, no email, nothing to install. Step through each one at your own pace.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Scenario list */}
      <section className="bg-cream pb-4 px-5 md:px-8">
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          {scenarios.map((s, i) => (
            <FadeIn key={s.name} delay={i * 0.08}>
              <div className="bg-white rounded-xl p-5 border border-[rgba(47,74,58,0.08)] h-full">
                <p className="text-[14px] font-semibold text-dark-text mb-1">{s.name}</p>
                <p className="text-[12.5px] text-dark-text/55 leading-relaxed mb-3">{s.desc}</p>
                <p className="text-[11px] text-dark-text/40">{STATUS_LINE}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* The tour, with a persistent sample-data label */}
      <section className="bg-cream py-12 md:py-16 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-[12px] font-medium text-dark-text/45 bg-white/70 border border-[rgba(47,74,58,0.1)] rounded-full px-4 py-1.5 w-fit mx-auto mb-8">
            Sample data. This is a guided preview of the real product.
          </p>
          <ProductTour />
        </div>
      </section>

      {/* End of demo: two honest paths, no wall */}
      <section className="bg-white py-16 md:py-20 px-5 md:px-8 text-center">
        <div className="max-w-xl mx-auto">
          <h2
            className="font-display font-medium text-forest-green leading-snug mb-4"
            style={{ fontSize: 'clamp(26px, 3.5vw, 36px)' }}
          >
            Like what you walked through?
          </h2>
          <p className="text-[15px] text-dark-text/55 leading-relaxed mb-8">
            Founding operators shape what gets built next. Or just follow along by email while we build.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/founding"
              className="w-full sm:w-auto bg-forest-green text-white text-[14px] font-medium px-7 py-3.5 rounded-lg hover:bg-[#243d2f] transition-colors"
            >
              Join the Founding Operators Program
            </Link>
            <Link
              href="/#updates"
              className="w-full sm:w-auto border-2 border-forest-green text-forest-green text-[14px] font-medium px-7 py-3 rounded-lg hover:bg-forest-green hover:text-white transition-colors"
            >
              Get updates by email
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
