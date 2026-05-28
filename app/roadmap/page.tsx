import type { Metadata } from 'next'
import Link from 'next/link'
import FadeIn from '@/components/fade-in'

export const metadata: Metadata = {
  title: 'Roadmap | Sprout & Vine',
  description: "We share our roadmap publicly so you know exactly what we're building and when. No surprises.",
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">
      {children}
    </p>
  )
}

type Status = 'building' | 'next' | 'planned'

const phases: {
  phase: string
  label: string
  status: Status
  eta: string
  description: string
  items: { name: string; note?: string }[]
}[] = [
  {
    phase: 'Phase 1',
    label: 'Building now',
    status: 'building',
    eta: 'Founding cohort access: Q3 2026',
    description: 'The foundation. We are building the core platform with our founding operator cohort, iterating weekly based on their direct feedback.',
    items: [
      { name: 'Attendance tracking and sign-in/sign-out' },
      { name: 'CWELCC subsidy tracking and reporting' },
      { name: 'Daily reports and parent messaging' },
      { name: 'Billing and invoicing' },
      { name: 'Child profile and enrollment management' },
      { name: 'Staff accounts and role management' },
      { name: 'Bilingual platform (EN/FR)' },
      { name: 'Canadian data residency', note: 'All data stored in Canada' },
    ],
  },
  {
    phase: 'Phase 2',
    label: 'Coming next',
    status: 'next',
    eta: 'Q4 2026',
    description: "The parent layer. Everything that makes families feel genuinely connected to their child's day, not just notified.",
    items: [
      { name: 'Smart Pickup Authorization', note: 'Photo-verified, instant parent alert' },
      { name: 'The Vine parent app (iOS)', note: 'Android to follow' },
      { name: 'Family Circle', note: 'Role-based access for co-parents, grandparents, nannies' },
      { name: 'Milestone and development timeline' },
      { name: 'Enrollment and waitlist management' },
      { name: 'Digital enrollment packages with e-signature' },
    ],
  },
  {
    phase: 'Phase 3',
    label: 'Planned',
    status: 'planned',
    eta: '2027',
    description: 'Scale and depth. Everything multi-location operators need, plus integrations that save even more time.',
    items: [
      { name: 'Multi-location dashboard and reporting' },
      { name: 'Cross-location staff management' },
      { name: 'Accounting integrations (QuickBooks, Xero)' },
      { name: 'Provincial licensing ratio tracking', note: 'Pre-loaded for every province' },
      { name: 'API access for custom integrations' },
      { name: 'Auto-generated yearbook', note: 'Annual photo and milestone keepsake' },
      { name: 'Vine parent app (Android)' },
    ],
  },
]

const statusStyles: Record<Status, { dot: string; badge: string; border: string }> = {
  building: {
    dot: 'bg-sage-green animate-pulse',
    badge: 'bg-sage-green/15 text-sage-green',
    border: 'border-sage-green/40',
  },
  next: {
    dot: 'bg-terracotta',
    badge: 'bg-terracotta/10 text-terracotta',
    border: 'border-[rgba(47,74,58,0.15)]',
  },
  planned: {
    dot: 'bg-dark-text/20',
    badge: 'bg-dark-text/8 text-dark-text/45',
    border: 'border-[rgba(47,74,58,0.1)]',
  },
}

export default function RoadmapPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Public roadmap</SectionLabel>
          <h1
            className="font-display font-medium text-forest-green leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(40px, 5vw, 62px)' }}
          >
            We build in public.<br />No surprises.
          </h1>
          <p className="text-[17px] text-dark-text/65 leading-relaxed max-w-xl mx-auto mb-8">
            This is what we are building, in what order, and why. We share this so the operators who use this platform can hold us to it, contribute to it, and plan around it.
          </p>
          <p className="text-[13px] text-dark-text/40 font-medium">
            Last updated: May 2026
          </p>
        </div>
      </section>

      {/* Phases */}
      <section className="bg-white py-12 md:py-16 px-5 md:px-8">
        <div className="max-w-3xl mx-auto space-y-10">
          {phases.map((phase, i) => {
            const s = statusStyles[phase.status]
            return (
              <FadeIn key={phase.phase} delay={i * 0.08}>
              <div className={`rounded-2xl border-2 p-7 ${s.border}`}>
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                  <div>
                    <div className="flex items-center gap-2.5 mb-1">
                      <div className={`w-2 h-2 rounded-full ${s.dot}`} />
                      <span className={`text-[11px] font-semibold uppercase tracking-[0.12em] px-2.5 py-0.5 rounded-full ${s.badge}`}>
                        {phase.label}
                      </span>
                    </div>
                    <h2 className="font-display text-[28px] font-medium text-forest-green">{phase.phase}</h2>
                  </div>
                  <div className="text-right">
                    <span className="text-[12px] font-medium text-dark-text/45 bg-[rgba(47,74,58,0.06)] px-3 py-1.5 rounded-full">
                      {phase.eta}
                    </span>
                  </div>
                </div>

                <p className="text-[15px] text-dark-text/65 leading-relaxed mb-6">
                  {phase.description}
                </p>

                <ul className="space-y-2.5">
                  {phase.items.map(item => (
                    <li key={item.name} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full bg-forest-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1.5 4l2 2 3-3" stroke="#2F4A3A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-[14px] text-dark-text/80 font-medium">{item.name}</span>
                        {item.note && (
                          <span className="text-[12px] text-dark-text/40 ml-2">{item.note}</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              </FadeIn>
            )
          })}
        </div>
      </section>

      {/* Founding operator note */}
      <section className="bg-cream py-16 md:py-20 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-forest-green rounded-2xl p-8 md:p-10">
            <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-4">
              Founding operators
            </p>
            <h2 className="font-display font-medium text-cream leading-[1.08] mb-4" style={{ fontSize: 'clamp(26px, 3.5vw, 36px)' }}>
              Help us decide what gets built in what order.
            </h2>
            <p className="text-[15px] text-cream/65 leading-relaxed mb-7">
              Founding operators have direct input on our roadmap. Monthly calls with our team, feature request priority, and early access as each phase becomes ready. The roadmap above reflects what we have heard so far.
            </p>
            <Link
              href="/founding"
              className="inline-block bg-terracotta text-white text-[14px] font-medium px-7 py-3.5 rounded-lg hover:bg-[#d4724e] transition-colors"
            >
              Apply to the Founding Program
            </Link>
          </div>
        </div>
      </section>

      {/* Changelog note */}
      <section className="bg-white py-12 px-5 md:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[15px] text-dark-text/55 leading-relaxed">
            As features ship, they are logged in our{' '}
            <Link href="/changelog" className="text-forest-green font-medium underline underline-offset-2 hover:text-dark-text transition-colors">
              changelog
            </Link>
            . Following our build in public on the{' '}
            <Link href="/blog" className="text-forest-green font-medium underline underline-offset-2 hover:text-dark-text transition-colors">
              blog
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}
