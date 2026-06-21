import type { Metadata } from 'next'
import { canonicalOnly } from '@/lib/seo'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sprout & Vine vs. Brightwheel: An Honest Comparison | Sprout & Vine Care',
  description:
    'How does Sprout & Vine compare to Brightwheel? CWELCC tracking, Canadian data residency, bilingual EN/FR, transparent per-centre pricing, and Smart Pickup Authorization. An honest, feature-by-feature look.',
  alternates: canonicalOnly('/compare/brightwheel'),
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-4">
      {children}
    </p>
  )
}

type RowStatus = '✅' | '❌' | '⚠️'

const comparisonRows: {
  feature: string
  sprout: { status: RowStatus; detail: string }
  brightwheel: { status: RowStatus; detail: string }
}[] = [
  {
    feature: 'Built for',
    sprout: { status: '✅', detail: 'Canada 🍁' },
    brightwheel: { status: '⚠️', detail: 'United States' },
  },
  {
    feature: 'CWELCC subsidy tracking',
    sprout: { status: '✅', detail: 'Built in from day one' },
    brightwheel: { status: '❌', detail: 'Not supported' },
  },
  {
    feature: 'Cost-based funding (Jan 2025)',
    sprout: { status: '✅', detail: 'Supported' },
    brightwheel: { status: '❌', detail: 'Not supported' },
  },
  {
    feature: 'Canadian data residency',
    sprout: { status: '✅', detail: 'Data stored in Canada' },
    brightwheel: { status: '❌', detail: 'US data storage' },
  },
  {
    feature: 'Bilingual EN/FR',
    sprout: { status: '✅', detail: 'Full platform and parent app' },
    brightwheel: { status: '❌', detail: 'English only' },
  },
  {
    feature: 'Provincial compliance',
    sprout: { status: '✅', detail: 'Pre-loaded for all provinces' },
    brightwheel: { status: '❌', detail: 'Not available' },
  },
  {
    feature: 'Pricing model',
    sprout: { status: '✅', detail: 'Flat rate per centre, no per-child fees' },
    brightwheel: { status: '⚠️', detail: 'Per child, scales with enrollment' },
  },
  {
    feature: 'Pricing transparency',
    sprout: { status: '✅', detail: 'All tiers published publicly' },
    brightwheel: { status: '⚠️', detail: 'Varies, quote-based' },
  },
  {
    feature: 'Home daycare pricing',
    sprout: { status: '✅', detail: 'From CAD $49/mo (Sprout Home)' },
    brightwheel: { status: '❌', detail: 'Not designed for home daycares' },
  },
  {
    feature: 'Seeds free tier (aspiring operators)',
    sprout: { status: '✅', detail: 'Free forever' },
    brightwheel: { status: '❌', detail: 'Not available' },
  },
  {
    feature: 'Smart Pickup Authorization',
    sprout: { status: '✅', detail: 'Photo-verified with instant alert' },
    brightwheel: { status: '⚠️', detail: 'Basic pickup tracking' },
  },
  {
    feature: 'Enrollment & waitlist',
    sprout: { status: '✅', detail: 'Full inquiry-to-enrolled flow' },
    brightwheel: { status: '⚠️', detail: 'Partial' },
  },
  {
    feature: 'Onboarding',
    sprout: { status: '✅', detail: 'Guided setup and 30-day support' },
    brightwheel: { status: '⚠️', detail: 'Largely self-serve' },
  },
  {
    feature: 'Attendance tracking',
    sprout: { status: '✅', detail: 'Real-time with ratio alerts' },
    brightwheel: { status: '✅', detail: 'Supported' },
  },
  {
    feature: 'Daily reports',
    sprout: { status: '✅', detail: 'Supported' },
    brightwheel: { status: '✅', detail: 'Supported' },
  },
  {
    feature: 'Billing & payments',
    sprout: { status: '✅', detail: 'Supported' },
    brightwheel: { status: '✅', detail: 'Supported' },
  },
  {
    feature: 'Messaging',
    sprout: { status: '✅', detail: 'Supported' },
    brightwheel: { status: '✅', detail: 'Supported' },
  },
]

function StatusBadge({ status }: { status: RowStatus }) {
  const map: Record<RowStatus, { bg: string; text: string }> = {
    '✅': { bg: 'rgba(110,183,111,0.12)', text: '#3a8a3c' },
    '❌': { bg: 'rgba(226,132,95,0.12)', text: '#c0542a' },
    '⚠️': { bg: 'rgba(200,170,80,0.12)', text: '#8a6c10' },
  }
  const style = map[status]
  return (
    <span
      className="inline-block text-[13px] w-6 h-6 flex items-center justify-center rounded-full flex-shrink-0"
      style={{ background: style.bg }}
      aria-hidden="true"
    >
      {status}
    </span>
  )
}

export default function BrightwheelComparePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-3">
            <Link href="/compare" className="text-[13px] text-dark-text/50 hover:text-forest-green transition-colors">
              Compare
            </Link>
            <span className="text-[13px] text-dark-text/30 mx-2">/</span>
            <span className="text-[13px] text-dark-text/50">vs. Brightwheel</span>
          </div>
          <SectionLabel>Comparison</SectionLabel>
          <h1
            className="font-display font-medium text-forest-green leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(34px, 5vw, 58px)' }}
          >
            Sprout &amp; Vine vs. Brightwheel:<br />An honest comparison
          </h1>
          <p className="text-[17px] text-dark-text/65 leading-relaxed max-w-2xl">
            Brightwheel is one of the most polished childcare platforms on the market, and for operators in the United States it is a genuinely strong choice. But it was built for American regulations, American subsidy programs, and American data laws. If you run a centre in Canada, that mismatch quietly costs you time and money every month. Here is an honest look at how the two platforms compare.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-white py-14 md:py-20 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="overflow-x-auto -mx-5 md:mx-0">
            <div
              className="min-w-[600px] bg-white overflow-hidden md:rounded-2xl"
              style={{ boxShadow: '0 4px 32px rgba(47,74,58,0.09)', border: '1px solid rgba(47,74,58,0.1)' }}
            >
              {/* Header */}
              <div className="grid grid-cols-3 border-b-2 border-[rgba(47,74,58,0.1)] bg-cream">
                <div className="p-5" />
                <div className="p-5 text-center border-l border-[rgba(47,74,58,0.08)]">
                  <p className="font-display text-[18px] font-medium text-forest-green">Sprout &amp; Vine</p>
                  <p className="text-[11px] text-dark-text/45 mt-0.5">Canadian-built from the ground up</p>
                </div>
                <div className="p-5 text-center border-l border-[rgba(47,74,58,0.08)]">
                  <p className="font-display text-[18px] font-medium text-dark-text/60">Brightwheel</p>
                  <p className="text-[11px] text-dark-text/45 mt-0.5">San Francisco, CA</p>
                </div>
              </div>

              {/* Rows */}
              {comparisonRows.map((row, i) => (
                <div
                  key={row.feature}
                  className="grid grid-cols-3 border-b border-[rgba(47,74,58,0.06)]"
                  style={{ background: i % 2 === 0 ? 'white' : 'rgba(247,242,232,0.4)' }}
                >
                  <div className="p-4 pl-5">
                    <p className="text-[13px] font-semibold text-dark-text/75">{row.feature}</p>
                  </div>
                  <div className="p-4 border-l border-[rgba(47,74,58,0.06)]">
                    <div className="flex items-start gap-2">
                      <StatusBadge status={row.sprout.status} />
                      <p className="text-[13px] text-dark-text/65">{row.sprout.detail}</p>
                    </div>
                  </div>
                  <div className="p-4 border-l border-[rgba(47,74,58,0.06)]">
                    <div className="flex items-start gap-2">
                      <StatusBadge status={row.brightwheel.status} />
                      <p className="text-[13px] text-dark-text/65">{row.brightwheel.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 mt-5 text-[12px] text-dark-text/50">
            <span>✅ Supported</span>
            <span>⚠️ Partial or limited</span>
            <span>❌ Not available</span>
          </div>
        </div>
      </section>

      {/* Context / nuance */}
      <section className="bg-cream py-14 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>A Fair Assessment</SectionLabel>
          <h2
            className="font-display font-medium text-forest-green leading-[1.08] mb-6"
            style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}
          >
            Where Brightwheel is genuinely strong.
          </h2>
          <p className="text-[15px] text-dark-text/65 leading-relaxed mb-5">
            Brightwheel earned its reputation. Its interface is among the most refined in the category, its parent app is a pleasure to use, and its billing and payments tooling is mature and dependable. For a US-based centre that does not need CWELCC tracking, bilingual support, or Canadian data residency, Brightwheel is a capable, well-built platform, and many operators are happy on it.
          </p>
          <p className="text-[15px] text-dark-text/65 leading-relaxed">
            What it was never designed for is the way Canadian childcare actually works in 2025 and 2026: CWELCC cost-based funding, transparent pricing for operators of every size including home daycares, French-language families as first-class users, and data that stays in Canada. Sprout &amp; Vine was built around exactly those realities, not adapted to them after the fact.
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-forest-green py-16 px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">
            Built for Canada. All of Canada.
          </p>
          <h2
            className="font-display font-medium text-cream leading-[1.08] mb-5"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
          >
            Sprout &amp; Vine was built because Canadian operators deserved a platform built around how Canada's childcare system actually works.
          </h2>
          <p className="text-cream/65 text-[15px] leading-relaxed mb-8 max-w-xl mx-auto">
            Not adapted from a US product. Not designed before CWELCC existed. Apply to the Founding Operators Program. The Seeds tier is free forever.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/founding"
              className="inline-block bg-terracotta text-white text-[14px] font-medium px-7 py-3.5 rounded-lg hover:bg-[#d4724e] transition-colors"
            >
              Apply to the Founding Operators Program
            </Link>
            <Link
              href="/pricing"
              className="inline-block text-cream text-[14px] font-medium px-6 py-3.5 rounded-lg border-2 border-cream/35 hover:border-cream/60 transition-colors"
            >
              See our pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
