import Link from 'next/link'
import PricingCards from '@/components/pricing-cards'
import ROICalculator from '@/components/roi-calculator'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing | Sprout & Vine',
  description: 'Simple, fair pricing for Canadian childcare. Seeds (free), Sprout ($69/mo), Vine ($149/mo per location). 14-day free trial, no credit card required.',
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">
      {children}
    </p>
  )
}

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
      <path d="M3 8l3.5 3.5 7-7" stroke="#6EB76F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Dash() {
  return <span className="text-dark-text/20 text-sm font-light select-none">–</span>
}

const tableRows = [
  { feature: 'Business planning tools',      seeds: true,  sprout: true,  vine: true  },
  { feature: 'Licensing checklists by province', seeds: true, sprout: true, vine: true },
  { feature: 'CWELCC readiness guide',       seeds: true,  sprout: true,  vine: true  },
  { feature: 'Resource library',             seeds: true,  sprout: true,  vine: true  },
  { feature: 'Community access',             seeds: true,  sprout: true,  vine: true  },
  { feature: 'Attendance tracking',          seeds: false, sprout: true,  vine: true  },
  { feature: 'Daily reports',                seeds: false, sprout: true,  vine: true  },
  { feature: 'Parent messaging',             seeds: false, sprout: true,  vine: true  },
  { feature: 'The Vine parent app',          seeds: false, sprout: true,  vine: true  },
  { feature: 'Billing & invoicing',          seeds: false, sprout: true,  vine: true  },
  { feature: 'CWELCC subsidy tracking',      seeds: false, sprout: true,  vine: true  },
  { feature: 'Smart Pickup Authorization',   seeds: false, sprout: true,  vine: true  },
  { feature: 'Enrollment & waitlist',        seeds: false, sprout: true,  vine: true  },
  { feature: 'Bilingual (EN/FR)',            seeds: false, sprout: true,  vine: true  },
  { feature: 'Unlimited staff accounts',     seeds: false, sprout: true,  vine: true  },
  { feature: 'Email support',               seeds: false, sprout: true,  vine: true  },
  { feature: 'Multi-location dashboard',    seeds: false, sprout: false, vine: true  },
  { feature: 'Cross-location reporting',    seeds: false, sprout: false, vine: true  },
  { feature: 'Priority support',            seeds: false, sprout: false, vine: true  },
  { feature: 'Dedicated onboarding',        seeds: false, sprout: false, vine: true  },
  { feature: 'API access',                  seeds: false, sprout: false, vine: true  },
]

const faqs = [
  {
    q: 'Is there a free trial?',
    a: 'Yes. 14 days on Sprout with no credit card required. Cancel anytime.',
  },
  {
    q: 'Can I switch plans?',
    a: 'Yes. Upgrade or downgrade anytime. Changes take effect at the next billing cycle.',
  },
  {
    q: 'Do you support home providers?',
    a: 'Yes. Licensed family child care homes get Sprout at CAD $39/month.',
  },
  {
    q: 'Is my data stored in Canada?',
    a: 'Yes. Canadian data residency on all plans, always.',
  },
  {
    q: 'Do you support French?',
    a: 'Yes. The platform and the Vine parent app are fully bilingual (EN/FR).',
  },
  {
    q: 'What is CWELCC?',
    a: "Canada-Wide Early Learning & Child Care. Our platform tracks and manages your subsidy eligibility automatically, so you never have to reconcile spreadsheets again.",
  },
]

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 md:py-24 px-5 md:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>Simple, Fair Pricing</SectionLabel>
          <h1
            className="font-display font-medium text-forest-green leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(40px, 5.5vw, 64px)' }}
          >
            No hidden fees. No per-child charges.<br />Just straightforward pricing.
          </h1>
          <p className="text-[16px] text-dark-text/55 leading-relaxed">
            All prices in CAD. 14-day free trial on Sprout. No credit card required.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-cream px-5 md:px-8 pb-24">
        <PricingCards />
      </section>

      {/* Seeds Graduation */}
      <section className="bg-white py-20 px-5 md:px-8">
        <div className="max-w-2xl mx-auto text-center bg-cream rounded-2xl p-10" style={{ boxShadow: '0 4px 24px rgba(47,74,58,0.07)' }}>
          <div className="text-4xl mb-5">🌱</div>
          <h3 className="font-display text-[28px] font-medium text-forest-green mb-3">
            Starting as an aspiring operator?
          </h3>
          <p className="text-[16px] text-dark-text/65 leading-relaxed mb-7">
            Begin with Seeds, free, forever. When you're ready to open, Sprout will be waiting.
          </p>
          <Link
            href="/contact"
            className="inline-block text-[14px] font-medium text-forest-green border-2 border-forest-green px-6 py-3 rounded-lg hover:bg-forest-green hover:text-white transition-colors"
          >
            Start with Seeds, free
          </Link>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-cream py-20 px-5 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2
            className="font-display font-medium text-forest-green leading-[1.08] text-center mb-12"
            style={{ fontSize: 'clamp(32px, 4vw, 50px)' }}
          >
            Compare plans
          </h2>

          <div className="overflow-x-auto -mx-5 md:mx-0">
          <div className="min-w-[580px] bg-white md:rounded-2xl overflow-hidden" style={{ boxShadow: '0 4px 32px rgba(47,74,58,0.09)' }}>
            {/* Table header */}
            <div className="grid grid-cols-4 border-b border-[rgba(47,74,58,0.08)]">
              <div className="p-5" />
              {[
                { name: 'Seeds', sub: 'Free', color: '#2F4A3A' },
                { name: 'Sprout', sub: '$69/mo', color: '#6EB76F' },
                { name: 'Vine', sub: '$149/mo', color: '#E2845F' },
              ].map(col => (
                <div key={col.name} className="p-5 text-center border-l border-[rgba(47,74,58,0.07)]">
                  <p className="font-display text-[20px] font-medium" style={{ color: col.color }}>{col.name}</p>
                  <p className="text-[12px] text-dark-text/40 mt-0.5">{col.sub}</p>
                </div>
              ))}
            </div>

            {/* Rows */}
            {tableRows.map((row, i) => (
              <div
                key={row.feature}
                className="grid grid-cols-4 border-b border-[rgba(47,74,58,0.05)]"
                style={{ background: i % 2 === 0 ? 'white' : 'rgba(247,242,232,0.45)' }}
              >
                <div className="p-4 pl-5">
                  <p className="text-[12px] md:text-[13px] text-dark-text/75">{row.feature}</p>
                </div>
                {[row.seeds, row.sprout, row.vine].map((val, j) => (
                  <div key={j} className="p-4 flex items-center justify-center border-l border-[rgba(47,74,58,0.05)]">
                    {val ? <Check /> : <Dash />}
                  </div>
                ))}
              </div>
            ))}

            {/* Bottom price row */}
            <div className="grid grid-cols-4 border-t-2 border-[rgba(47,74,58,0.12)] bg-cream">
              <div className="p-5" />
              {[
                { label: 'Free', btn: 'Start for free', href: '/contact' },
                { label: 'CAD $69/month', btn: 'Start free trial', href: '/contact' },
                { label: 'CAD $149/location', btn: 'Book a demo', href: '/contact' },
              ].map(col => (
                <div key={col.label} className="p-5 text-center border-l border-[rgba(47,74,58,0.07)]">
                  <p className="text-[13px] font-semibold text-dark-text mb-3">{col.label}</p>
                  <Link
                    href={col.href}
                    className="block text-[13px] font-medium text-forest-green border border-forest-green px-4 py-2 rounded-lg hover:bg-forest-green hover:text-white transition-colors"
                  >
                    {col.btn}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 px-5 md:px-8" style={{ background: '#2F4A3A' }}>
        <ROICalculator />
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-display font-medium text-forest-green text-center mb-12"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
          >
            Common questions
          </h2>
          <div className="space-y-0 divide-y divide-[rgba(47,74,58,0.08)]">
            {faqs.map(faq => (
              <div key={faq.q} className="py-6">
                <p className="text-[16px] font-semibold text-dark-text mb-2">{faq.q}</p>
                <p className="text-[15px] text-dark-text/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-cream py-12 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3">
            {[
              '🔒 SOC 2 Compliant',
              '🍁 Canadian Data Residency',
              '✓ 14-Day Free Trial',
              '💳 No Credit Card Required',
              '↩ Cancel Anytime',
            ].map(badge => (
              <span key={badge} className="text-[13px] font-medium text-dark-text/50">{badge}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
