import Link from 'next/link'
import FadeIn from '@/components/fade-in'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing | Sprout & Vine',
  description: 'Sprout & Vine pricing. Founding members lock in their rate before public launch. Three tiers: Seeds (free), Sprout, and Vine for multi-location operators.',
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
  { feature: 'Business planning tools',         seeds: true,  sprout: true,  vine: true  },
  { feature: 'Licensing checklists by province', seeds: true,  sprout: true,  vine: true  },
  { feature: 'CWELCC readiness guide',          seeds: true,  sprout: true,  vine: true  },
  { feature: 'Resource library',                seeds: true,  sprout: true,  vine: true  },
  { feature: 'Attendance tracking',             seeds: false, sprout: true,  vine: true  },
  { feature: 'Daily reports and parent messaging', seeds: false, sprout: true, vine: true },
  { feature: 'The Vine parent app',             seeds: false, sprout: true,  vine: true  },
  { feature: 'Billing and invoicing',           seeds: false, sprout: true,  vine: true  },
  { feature: 'CWELCC subsidy tracking',         seeds: false, sprout: true,  vine: true  },
  { feature: 'Smart Pickup Authorization',      seeds: false, sprout: true,  vine: true  },
  { feature: 'Enrollment and waitlist',         seeds: false, sprout: true,  vine: true  },
  { feature: 'Bilingual (EN/FR)',               seeds: false, sprout: true,  vine: true  },
  { feature: 'Unlimited staff accounts',        seeds: false, sprout: true,  vine: true  },
  { feature: 'Email support',                   seeds: false, sprout: true,  vine: true  },
  { feature: 'Multi-location dashboard',        seeds: false, sprout: false, vine: true  },
  { feature: 'Cross-location reporting',        seeds: false, sprout: false, vine: true  },
  { feature: 'Priority support',                seeds: false, sprout: false, vine: true  },
  { feature: 'Dedicated onboarding',            seeds: false, sprout: false, vine: true  },
]

const faqs = [
  {
    q: 'When will pricing be available?',
    a: 'We are sharing pricing details with Founding Operators during their application call. Public pricing will be announced at launch. Founding members lock in their rate before then.',
  },
  {
    q: 'What is the Founding Operators Program?',
    a: 'Founding members get early access to the platform, permanently discounted pricing locked for life, and direct input on what gets built. Applications are open now.',
  },
  {
    q: 'Do you support home providers?',
    a: 'Yes. Licensed family child care homes are a first-class use case. We have a dedicated tier designed for home providers.',
  },
  {
    q: 'Is my data stored in Canada?',
    a: 'Yes. Canadian data residency on all plans, always.',
  },
  {
    q: 'Do you support French?',
    a: 'Yes. The platform and the Vine parent app are fully bilingual (EN/FR) from the ground up, not translated after the fact.',
  },
  {
    q: 'What is CWELCC?',
    a: 'Canada-Wide Early Learning and Child Care. Our platform tracks and manages your subsidy eligibility automatically, so you never have to reconcile spreadsheets again.',
  },
]

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 md:py-24 px-5 md:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>Pricing</SectionLabel>
          <h1
            className="font-display font-medium text-forest-green leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(40px, 5.5vw, 64px)' }}
          >
            Three tiers. No hidden fees.<br />No per-child charges.
          </h1>
          <p className="text-[16px] text-dark-text/60 leading-relaxed mb-8 max-w-xl mx-auto">
            Pricing details are shared with Founding Operators during their application. Public pricing will be announced at launch. All prices in CAD.
          </p>
          <Link
            href="/founding"
            className="inline-block bg-forest-green text-white text-[14px] font-medium px-7 py-3.5 rounded-lg hover:bg-[#243d2f] transition-colors"
          >
            Join the Founding Operators Program
          </Link>
        </div>
      </section>

      {/* Tier overview */}
      <section className="bg-cream pb-16 px-5 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">

            {/* Seeds */}
            <FadeIn delay={0.05}>
            <div className="bg-white rounded-2xl p-7 border border-[rgba(47,74,58,0.1)]" style={{ boxShadow: '0 4px 24px rgba(47,74,58,0.06)' }}>
              <div className="text-2xl mb-3">🌱</div>
              <h3 className="font-display text-[26px] font-medium text-forest-green mb-1">Seeds</h3>
              <span className="text-[11px] uppercase tracking-wide font-semibold text-dark-text/40 border border-[rgba(47,74,58,0.15)] px-2.5 py-1 rounded-full">
                Free forever
              </span>
              <p className="text-[13px] text-dark-text/55 mt-4 mb-6 leading-relaxed">
                For aspiring operators. Plan your centre, complete licensing checklists, and prepare before day one.
              </p>
              <Link
                href="/founding"
                className="block text-center text-[14px] font-medium text-forest-green border-2 border-forest-green px-5 py-3 rounded-lg hover:bg-forest-green hover:text-white transition-colors"
              >
                Get started free
              </Link>
            </div>
            </FadeIn>

            {/* Sprout */}
            <FadeIn delay={0.1}>
            <div
              className="bg-white rounded-2xl p-7 relative"
              style={{ border: '2px solid #2F4A3A', boxShadow: '0 16px 48px rgba(47,74,58,0.16)' }}
            >
              <div className="text-2xl mb-3">🌿</div>
              <h3 className="font-display text-[26px] font-medium text-forest-green mb-1">Sprout</h3>
              <p className="text-[13px] font-medium text-terracotta mb-4">Founding pricing available</p>
              <p className="text-[13px] text-dark-text/55 mb-6 leading-relaxed">
                For licensed centres and home providers. Attendance, billing, parent communication, Smart Pickup, and more.
              </p>
              <Link
                href="/founding"
                className="block text-center text-[14px] font-medium text-cream bg-forest-green px-5 py-3 rounded-lg hover:bg-[#243d2f] transition-colors"
              >
                Apply for founding access
              </Link>
            </div>
            </FadeIn>

            {/* Vine */}
            <FadeIn delay={0.15}>
            <div className="bg-white rounded-2xl p-7 border border-[rgba(47,74,58,0.1)]" style={{ boxShadow: '0 4px 24px rgba(47,74,58,0.06)' }}>
              <div className="text-2xl mb-3">🍃</div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-display text-[26px] font-medium text-forest-green">Vine</h3>
                <span className="text-[10px] font-semibold text-dark-text/40 border border-[rgba(47,74,58,0.15)] px-2 py-0.5 rounded-full">Multi-location</span>
              </div>
              <p className="text-[13px] font-medium text-terracotta mb-4">Founding pricing available</p>
              <p className="text-[13px] text-dark-text/55 mb-6 leading-relaxed">
                For multi-location organizations. One dashboard. Full visibility across every location.
              </p>
              <Link
                href="/founding"
                className="block text-center text-[14px] font-medium text-forest-green border-2 border-forest-green px-5 py-3 rounded-lg hover:bg-forest-green hover:text-white transition-colors"
              >
                Apply for founding access
              </Link>
            </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-cream py-20 px-5 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2
            className="font-display font-medium text-forest-green leading-[1.08] text-center mb-12"
            style={{ fontSize: 'clamp(32px, 4vw, 50px)' }}
          >
            Compare tiers
          </h2>

          <div className="overflow-x-auto -mx-5 md:mx-0">
          <div className="min-w-[580px] bg-white md:rounded-2xl overflow-hidden" style={{ boxShadow: '0 4px 32px rgba(47,74,58,0.09)' }}>
            <div className="grid grid-cols-4 border-b border-[rgba(47,74,58,0.08)]">
              <div className="p-5" />
              {[
                { name: 'Seeds', sub: 'Free', color: '#2F4A3A' },
                { name: 'Sprout', sub: 'Founding pricing', color: '#6EB76F' },
                { name: 'Vine', sub: 'Founding pricing', color: '#E2845F' },
              ].map(col => (
                <div key={col.name} className="p-5 text-center border-l border-[rgba(47,74,58,0.07)]">
                  <p className="font-display text-[20px] font-medium" style={{ color: col.color }}>{col.name}</p>
                  <p className="text-[11px] text-dark-text/40 mt-0.5">{col.sub}</p>
                </div>
              ))}
            </div>

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

            <div className="grid grid-cols-4 border-t-2 border-[rgba(47,74,58,0.12)] bg-cream">
              <div className="p-5" />
              {[
                { label: 'Free', btn: 'Get started', href: '/founding' },
                { label: 'Apply for access', btn: 'Apply now', href: '/founding' },
                { label: 'Apply for access', btn: 'Apply now', href: '/founding' },
              ].map((col, i) => (
                <div key={i} className="p-5 text-center border-l border-[rgba(47,74,58,0.07)]">
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

      {/* Trust */}
      <section className="bg-cream py-12 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3">
            {[
              '🍁 Canadian Data Residency',
              '🌐 Fully Bilingual (EN/FR)',
              '🔒 No per-child charges',
              '↩ Cancel anytime',
            ].map(badge => (
              <span key={badge} className="text-[13px] font-medium text-dark-text/50">{badge}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
