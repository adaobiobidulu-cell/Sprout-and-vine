import type { Metadata } from 'next'
import { canonicalOnly } from '@/lib/seo'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Compare Childcare Software | Sprout & Vine Care',
  description:
    'See how Sprout & Vine Care compares to other childcare management platforms. Honest, feature-by-feature comparisons built for Canadian operators.',
  alternates: canonicalOnly('/compare'),
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-4">
      {children}
    </p>
  )
}

const comparisons = [
  {
    competitor: 'Lillio (HiMama)',
    slug: 'lillio',
    description:
      "Canada's most established childcare platform. See how Sprout & Vine Care compares on CWELCC support, pricing transparency, home daycare support, and Smart Pickup Authorization.",
    highlights: [
      'Transparent flat-rate pricing vs. hidden pricing model',
      'Built-in CWELCC and cost-based funding support',
      'Home daycare tier starting at CAD $49/mo',
      'Full bilingual EN/FR across the entire platform',
    ],
    hq: 'Toronto, ON',
  },
  {
    competitor: 'Brightwheel',
    slug: 'brightwheel',
    description:
      'A well-made US childcare platform. See how Sprout & Vine Care compares on Canadian compliance, CWELCC tracking, bilingual support, and data residency.',
    highlights: [
      'Canadian data residency vs. US-based storage',
      'Built-in CWELCC subsidy tracking',
      'Full bilingual EN/FR across the entire platform',
      'Per-centre flat pricing, not per-child',
    ],
    hq: 'San Francisco, CA',
  },
  {
    competitor: 'Procare',
    slug: 'procare',
    description:
      'Enterprise childcare software built for large US chains. See how Sprout & Vine Care compares on setup time, pricing simplicity, and Canadian compliance.',
    highlights: [
      'Same-day setup vs. weeks of implementation',
      'Simple flat-rate pricing vs. complex enterprise licensing',
      'Built-in CWELCC and Canadian subsidy support',
      'Mobile-first design built for busy operators',
    ],
    hq: 'Portland, OR',
  },
]

export default function ComparePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>Comparisons</SectionLabel>
          <h1
            className="font-display font-medium text-forest-green leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
          >
            How does Sprout &amp; Vine Care compare?
          </h1>
          <p className="text-[17px] text-dark-text/65 leading-relaxed max-w-2xl">
            We built Sprout &amp; Vine Care because Canadian operators deserved a platform built around how Canada's childcare system actually works. These comparisons are honest: where others are strong, we say so.
          </p>
        </div>
      </section>

      {/* Comparison cards */}
      <section className="bg-white py-14 md:py-20 px-5 md:px-8">
        <div className="max-w-3xl mx-auto space-y-6">
          {comparisons.map(comp => (
            <div
              key={comp.slug}
              className="bg-cream rounded-2xl p-7 border border-[rgba(47,74,58,0.1)]"
              style={{ boxShadow: '0 4px 20px rgba(47,74,58,0.06)' }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.12em] text-dark-text/40 font-medium mb-1">
                    vs.
                  </p>
                  <h2 className="font-display text-[26px] font-medium text-forest-green">
                    {comp.competitor}
                  </h2>
                  <p className="text-[12px] text-dark-text/45 mt-0.5">Headquartered: {comp.hq}</p>
                </div>
                <Link
                  href={`/compare/${comp.slug}`}
                  className="flex-shrink-0 bg-forest-green text-white text-[13px] font-medium px-5 py-2.5 rounded-lg hover:bg-[#243d2f] transition-colors"
                >
                  See comparison →
                </Link>
              </div>

              <p className="text-[14px] text-dark-text/65 leading-relaxed mb-5">{comp.description}</p>

              <ul className="space-y-2">
                {comp.highlights.map(h => (
                  <li key={h} className="flex items-start gap-2 text-[13px] text-dark-text/65">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="flex-shrink-0 mt-0.5"
                    >
                      <path
                        d="M3 8l3.5 3.5 7-7"
                        stroke="#6EB76F"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-green py-16 px-5 md:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2
            className="font-display font-medium text-cream leading-[1.08] mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}
          >
            Ready to see Sprout &amp; Vine Care for yourself?
          </h2>
          <p className="text-cream/65 text-[15px] leading-relaxed mb-8">
            Apply to the Founding Operators Program and get early access. The Seeds tier is free forever.
          </p>
          <Link
            href="/founding"
            className="inline-block bg-terracotta text-white text-[14px] font-medium px-7 py-3.5 rounded-lg hover:bg-[#d4724e] transition-colors"
          >
            Apply to the Founding Operators Program
          </Link>
        </div>
      </section>
    </>
  )
}
