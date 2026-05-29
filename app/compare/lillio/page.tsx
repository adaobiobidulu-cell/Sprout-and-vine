import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sprout & Vine vs. Lillio (HiMama): An Honest Comparison | Sprout & Vine',
  description:
    'How does Sprout & Vine compare to Lillio (formerly HiMama)? CWELCC support, pricing transparency, home daycare tiers, bilingual support, and Smart Pickup Authorization. An honest feature-by-feature look.',
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
  lillio: { status: RowStatus; detail: string }
}[] = [
  {
    feature: 'Headquarters',
    sprout: { status: '✅', detail: 'Canada 🍁' },
    lillio: { status: '✅', detail: 'Toronto, ON 🍁' },
  },
  {
    feature: 'Pricing transparency',
    sprout: { status: '✅', detail: 'All tiers published publicly' },
    lillio: { status: '❌', detail: 'Requires a sales call' },
  },
  {
    feature: 'Pricing model',
    sprout: { status: '✅', detail: 'Flat rate by enrollment tier' },
    lillio: { status: '⚠️', detail: 'Hidden, varies by operator' },
  },
  {
    feature: 'Home daycare pricing',
    sprout: { status: '✅', detail: 'From CAD $39/mo (Sprout Home)' },
    lillio: { status: '❌', detail: 'Not designed for home daycares' },
  },
  {
    feature: 'CWELCC subsidy tracking',
    sprout: { status: '✅', detail: 'Built in from day one' },
    lillio: { status: '⚠️', detail: 'Limited support' },
  },
  {
    feature: 'Cost-based funding (Jan 2025)',
    sprout: { status: '✅', detail: 'Supported' },
    lillio: { status: '❌', detail: 'Not supported' },
  },
  {
    feature: 'Bilingual EN/FR',
    sprout: { status: '✅', detail: 'Full platform and parent app' },
    lillio: { status: '⚠️', detail: 'Partial' },
  },
  {
    feature: 'Smart Pickup Authorization',
    sprout: { status: '✅', detail: 'Photo-verified with instant alert' },
    lillio: { status: '❌', detail: 'Not available' },
  },
  {
    feature: 'Android app quality',
    sprout: { status: '✅', detail: 'Full parity with iOS' },
    lillio: { status: '⚠️', detail: 'Consistently rated lower than iOS' },
  },
  {
    feature: 'Onboarding',
    sprout: { status: '✅', detail: 'Guided setup and 30-day support' },
    lillio: { status: '❌', detail: 'Self-serve' },
  },
  {
    feature: 'Support',
    sprout: { status: '✅', detail: 'Email, in-app, human' },
    lillio: { status: '⚠️', detail: 'Slow response, common complaint' },
  },
  {
    feature: 'Provincial compliance',
    sprout: { status: '✅', detail: 'Pre-loaded for all provinces' },
    lillio: { status: '⚠️', detail: 'Ontario-focused' },
  },
  {
    feature: 'Role-based access (6 levels)',
    sprout: { status: '✅', detail: 'Owner, Director, Lead Educator, Educator, Parent, Prospective Parent' },
    lillio: { status: '⚠️', detail: 'Limited role separation' },
  },
  {
    feature: 'Real-time ratio alerts',
    sprout: { status: '✅', detail: 'Live room-by-room ratio monitoring with compliance alerts' },
    lillio: { status: '❌', detail: 'Not available' },
  },
  {
    feature: 'Educator self-service schedule view',
    sprout: { status: '✅', detail: 'Educators see their own schedule and assigned children only' },
    lillio: { status: '❌', detail: 'Not available' },
  },
  {
    feature: 'Parent appointment booking',
    sprout: { status: '✅', detail: 'Parent-educator and director check-ins bookable from the Vine app' },
    lillio: { status: '❌', detail: 'Not available' },
  },
  {
    feature: 'Tour booking (prospective families)',
    sprout: { status: '✅', detail: 'No account required to book a tour' },
    lillio: { status: '❌', detail: 'Not available' },
  },
  {
    feature: 'CWELCC wage enhancement tracking',
    sprout: { status: '✅', detail: 'Automated tracking per RECE staff member with year-end CMSM report' },
    lillio: { status: '❌', detail: 'Not available' },
  },
  {
    feature: 'Payroll integration (Canadian)',
    sprout: { status: '✅', detail: 'Wagepoint (all tiers) and Humi (Vine and above)' },
    lillio: { status: '❌', detail: 'Not available' },
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

export default function LillioComparePage() {
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
            <span className="text-[13px] text-dark-text/50">vs. Lillio</span>
          </div>
          <SectionLabel>Comparison</SectionLabel>
          <h1
            className="font-display font-medium text-forest-green leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(34px, 5vw, 58px)' }}
          >
            Sprout &amp; Vine vs. Lillio (HiMama):<br />An honest comparison
          </h1>
          <p className="text-[17px] text-dark-text/65 leading-relaxed max-w-2xl">
            Lillio (formerly HiMama) is Canada's most established childcare platform, and it has earned that position. But the childcare landscape changed significantly in 2025 with CWELCC cost-based funding, and operators tell us they need tools that actually reflect that reality. Here is an honest look at how the two platforms compare.
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
                  <p className="font-display text-[18px] font-medium text-dark-text/60">Lillio (HiMama)</p>
                  <p className="text-[11px] text-dark-text/45 mt-0.5">Toronto, ON</p>
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
                      <StatusBadge status={row.lillio.status} />
                      <p className="text-[13px] text-dark-text/65">{row.lillio.detail}</p>
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
            Where Lillio is genuinely strong.
          </h2>
          <p className="text-[15px] text-dark-text/65 leading-relaxed mb-5">
            Lillio has been building for Canadian childcare since 2012, and it shows. Their parent engagement features are well-designed, their development documentation tools are mature, and their brand recognition means many parents already know the HiMama name.
          </p>
          <p className="text-[15px] text-dark-text/65 leading-relaxed">
            If you are a larger Ontario centre that has been on HiMama for years, has no Quebec or francophone families, and does not need home daycare-level pricing, Lillio may serve you well. What it is not designed for is the reality of 2025 and 2026: CWELCC cost-based funding, transparent pricing for operators of all sizes, and a platform that works equally well in both official languages from day one.
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
