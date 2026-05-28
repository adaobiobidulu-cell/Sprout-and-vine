import Link from 'next/link'

export type ComparisonRow = {
  feature: string
  us: string | boolean
  them: string | boolean
}

export type Testimonial = {
  quote: string
  name: string
  role: string
  centreName?: string
  location?: string
  detail?: string
}

type Props = {
  competitorName: string
  heroHeadline: React.ReactNode
  heroSubtext: string
  keyAngle: string
  rows: ComparisonRow[]
  testimonials: Testimonial[]
  usPrice: string
  themPrice: string
  themPriceNote: string
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">
      {children}
    </p>
  )
}

function CellValue({ value }: { value: string | boolean }) {
  if (value === true) {
    return (
      <div className="flex justify-center">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="10" fill="rgba(110,183,111,0.12)" />
          <path d="M5.5 10l3 3 6-6" stroke="#6EB76F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    )
  }
  if (value === false) {
    return (
      <div className="flex justify-center">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="10" fill="rgba(226,132,95,0.1)" />
          <path d="M7 7l6 6M13 7l-6 6" stroke="#E2845F" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </div>
    )
  }
  return <p className="text-[12px] text-center text-dark-text/60">{value as string}</p>
}

export default function ComparisonPage({
  competitorName,
  heroHeadline,
  heroSubtext,
  keyAngle,
  rows,
  testimonials,
  usPrice,
  themPrice,
  themPriceNote,
}: Props) {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 md:py-28 px-5 md:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>{`Sprout & Vine vs ${competitorName}`}</SectionLabel>
          <h1
            className="font-display font-medium text-forest-green leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(40px, 5.5vw, 68px)' }}
          >
            {heroHeadline}
          </h1>
          <p className="text-[17px] text-dark-text/60 leading-relaxed mb-10 max-w-xl mx-auto">
            {heroSubtext}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/founding" className="bg-forest-green text-white text-[14px] font-medium px-6 py-3.5 rounded-lg hover:bg-[#243d2f] transition-colors">
              Apply to the Founding Operators Program
            </Link>
            <Link href="/pricing" className="text-[14px] font-medium text-forest-green border-2 border-forest-green px-6 py-3.5 rounded-lg hover:bg-forest-green hover:text-white transition-colors">
              See all pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Key angle callout */}
      <section className="bg-white py-12 px-5 md:px-8 border-b border-[rgba(47,74,58,0.07)]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[16px] text-dark-text/65 leading-relaxed italic">
            {keyAngle}
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-cream py-20 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2
            className="font-display font-medium text-forest-green text-center mb-12"
            style={{ fontSize: 'clamp(30px, 4vw, 46px)' }}
          >
            Side by side
          </h2>

          <div className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: '0 4px 32px rgba(47,74,58,0.09)' }}>
            {/* Header */}
            <div className="grid grid-cols-3 border-b border-[rgba(47,74,58,0.1)]">
              <div className="p-5" />
              <div className="p-5 text-center border-l border-[rgba(47,74,58,0.07)] bg-forest-green/5">
                <p className="font-display text-[18px] font-medium text-forest-green">Sprout &amp; Vine</p>
                <p className="text-[11px] text-sage-green font-semibold mt-0.5">Canadian</p>
              </div>
              <div className="p-5 text-center border-l border-[rgba(47,74,58,0.07)]">
                <p className="font-display text-[18px] font-medium text-dark-text/60">{competitorName}</p>
                <p className="text-[11px] text-dark-text/35 mt-0.5">Competitor</p>
              </div>
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <div
                key={row.feature}
                className="grid grid-cols-3 border-b border-[rgba(47,74,58,0.05)]"
                style={{ background: i % 2 === 0 ? 'white' : 'rgba(247,242,232,0.4)' }}
              >
                <div className="p-4 pl-5">
                  <p className="text-[13px] text-dark-text/75">{row.feature}</p>
                </div>
                <div className="p-4 border-l border-[rgba(47,74,58,0.05)] bg-forest-green/[0.02]">
                  <CellValue value={row.us} />
                </div>
                <div className="p-4 border-l border-[rgba(47,74,58,0.05)]">
                  <CellValue value={row.them} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>From Operators Who Switched</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map(t => (
              <div
                key={t.name}
                className="rounded-2xl p-7 flex flex-col gap-4"
                style={{ background: '#F7F2E8', border: '1px solid rgba(47,74,58,0.08)' }}
              >
                <div className="text-amber-400 text-sm tracking-wider">★★★★★</div>
                <p className="text-[15px] text-dark-text/75 leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-[rgba(47,74,58,0.08)] pt-4">
                  <p className="text-[14px] font-semibold text-dark-text">
                    {t.name}
                    {t.role && <span className="font-normal text-dark-text/60">, {t.role}</span>}
                  </p>
                  {t.centreName && (
                    <p className="text-[12px] text-dark-text/55 mt-0.5">{t.centreName}{t.location ? `, ${t.location}` : ''}</p>
                  )}
                  {t.detail && (
                    <p className="text-[11px] text-dark-text/35 mt-0.5">{t.detail}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing comparison */}
      <section className="bg-cream py-20 px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Pricing Comparison</SectionLabel>
          <h2
            className="font-display font-medium text-forest-green mb-10"
            style={{ fontSize: 'clamp(30px, 4vw, 46px)' }}
          >
            Straightforward pricing vs. complexity
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-7 border-2 border-forest-green" style={{ boxShadow: '0 8px 32px rgba(47,74,58,0.12)' }}>
              <p className="text-[11px] font-semibold text-sage-green uppercase tracking-wide mb-3">Sprout &amp; Vine</p>
              <p className="font-display text-[36px] font-medium text-forest-green leading-none mb-2">{usPrice}</p>
              <p className="text-[13px] text-dark-text/50 mb-5">per centre, flat rate. No per-child fees.</p>
              <ul className="space-y-2 text-left">
                {['Seeds tier free forever', 'No credit card required', 'Canadian data residency', 'Cancel anytime'].map(f => (
                  <li key={f} className="flex items-center gap-2 text-[13px] text-dark-text/70">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
                      <path d="M2.5 7l3 3 6-6" stroke="#6EB76F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-7 border border-[rgba(47,74,58,0.1)]">
              <p className="text-[11px] font-semibold text-dark-text/40 uppercase tracking-wide mb-3">{competitorName}</p>
              <p className="font-display text-[36px] font-medium text-dark-text/50 leading-none mb-2">{themPrice}</p>
              <p className="text-[13px] text-dark-text/40 mb-5">{themPriceNote}</p>
              <ul className="space-y-2 text-left">
                {['Per-child pricing model', 'US data storage', 'No CWELCC tracking', 'No Seeds free tier'].map(f => (
                  <li key={f} className="flex items-center gap-2 text-[13px] text-dark-text/45">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
                      <path d="M3 3l8 8M11 3l-8 8" stroke="#E2845F" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-forest-green py-20 px-5 md:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2
            className="font-display font-medium text-cream leading-[1.08] mb-5"
            style={{ fontSize: 'clamp(36px, 4.5vw, 56px)' }}
          >
            Ready to try the Canadian option?
          </h2>
          <p className="text-cream/55 text-[16px] mb-10">
            14-day free trial on Sprout. No credit card required.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-terracotta text-white text-[14px] font-medium px-7 py-3.5 rounded-lg hover:bg-[#d4724e] transition-colors">
              Start free trial
            </Link>
            <Link href="/contact" className="text-cream border-2 border-cream/40 text-[14px] font-medium px-7 py-3.5 rounded-lg hover:border-cream transition-colors">
              Book a demo
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
