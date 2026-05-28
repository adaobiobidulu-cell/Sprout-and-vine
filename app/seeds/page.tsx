import type { Metadata } from 'next'
import Link from 'next/link'
import EmailCapture from '@/components/email-capture'

export const metadata: Metadata = {
  title: 'Starting a Childcare in Canada? Begin Here. | Sprout & Vine',
  description:
    'The Seeds program gives aspiring childcare operators the tools, checklists, and guides to go from idea to open doors. Free, no credit card required.',
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">
      {children}
    </p>
  )
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
      <circle cx="8" cy="8" r="8" fill="#2F4A3A" fillOpacity="0.1" />
      <path d="M4.5 8l2.5 2.5 4-4.5" stroke="#2F4A3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const homeDaycareRows = [
  { label: 'Where', value: 'Your own home' },
  { label: 'Capacity (Ontario)', value: 'Up to 6 children (under 13)' },
  { label: 'Startup cost', value: '$2,000 to $5,000' },
  { label: 'Time to open', value: '3 to 6 months' },
  { label: 'Who it suits', value: 'Career changers, parents, ECEs wanting flexibility' },
  { label: 'Qualification needed', value: 'First Aid/CPR plus vulnerable sector check (ECE helps)' },
  { label: 'CWELCC funding available', value: 'Up to $7,200 in start-up grants' },
  { label: 'First step', value: 'Connect with a licensed home child care agency' },
]

const centreRows = [
  { label: 'Where', value: 'Dedicated commercial or community space' },
  { label: 'Capacity (Ontario)', value: 'Determined by space and licence' },
  { label: 'Startup cost', value: '$50,000 to $350,000+' },
  { label: 'Time to open', value: '6 to 18 months' },
  { label: 'Who it suits', value: 'Entrepreneurs, ECE professionals, organizations' },
  { label: 'Qualification needed', value: 'Qualified ECE supervisor required' },
  { label: 'CWELCC funding available', value: 'Up to $350,000 per 20 spaces' },
  { label: 'First step', value: 'Contact your local service system manager' },
]

const moreResources = [
  {
    icon: '🎓',
    title: 'ECE Qualifications Guide',
    desc: 'What qualifications you need to work in and operate Canadian childcare, by province.',
    href: '/seeds/qualifications',
    cta: 'Read the qualifications guide',
    comingSoon: false,
  },
  {
    icon: '💰',
    title: 'Startup Funding Guide',
    desc: 'Every grant, subsidy, and financing source available to new childcare operators in Canada.',
    href: '/seeds/funding',
    cta: 'Read the funding guide',
    comingSoon: false,
  },
  {
    icon: '✅',
    title: 'CWELCC Readiness Checklist',
    desc: 'Get CWELCC-ready before you open so you can access funding from day one.',
    href: '/seeds/cwelcc-readiness',
    cta: 'View the checklist',
    comingSoon: false,
  },
  {
    icon: '📊',
    title: 'Business Plan Builder',
    desc: 'An interactive tool to build your childcare business plan step by step.',
    href: '/seeds/business-plan',
    cta: 'Interactive tool coming soon',
    comingSoon: true,
  },
]

export default function SeedsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Seeds</SectionLabel>
          <h1
            className="font-display font-medium text-forest-green leading-[1.05] mb-4"
            style={{ fontSize: 'clamp(40px, 5.5vw, 68px)' }}
          >
            Every great childcare centre starts with a single question.
          </h1>
          <p className="font-display italic text-terracotta mb-6" style={{ fontSize: 'clamp(22px, 3vw, 32px)' }}>
            Can I actually do this?
          </p>
          <p className="text-[17px] text-dark-text/65 leading-relaxed max-w-2xl mb-10">
            The answer is yes. But the path from idea to open doors is real work. Sprout and Vine's Seeds program gives aspiring operators the tools, checklists, and guides to get there. Free. No credit card. No catches.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/seeds/home-daycare"
              className="bg-forest-green text-white text-[14px] font-medium px-7 py-3.5 rounded-lg hover:bg-[#243d2f] transition-colors"
            >
              I want to open a home daycare
            </Link>
            <Link
              href="/seeds/childcare-centre"
              className="bg-white text-forest-green text-[14px] font-medium px-7 py-3.5 rounded-lg border-2 border-forest-green hover:bg-forest-green hover:text-white transition-colors"
            >
              I want to open a childcare centre
            </Link>
          </div>
        </div>
      </section>

      {/* Path comparison */}
      <section className="bg-white py-16 md:py-20 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>Two Paths</SectionLabel>
            <h2
              className="font-display font-medium text-forest-green leading-[1.08]"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
            >
              Which path is right for you?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Home Daycare card */}
            <div
              className="rounded-2xl overflow-hidden border border-[rgba(47,74,58,0.12)]"
              style={{ boxShadow: '0 4px 24px rgba(47,74,58,0.07)' }}
            >
              <div className="bg-sage-green/15 px-7 py-6 border-b border-[rgba(47,74,58,0.1)]">
                <p className="text-[11px] uppercase tracking-[0.14em] text-sage-green font-semibold mb-2">Path One</p>
                <h3 className="font-display font-medium text-forest-green" style={{ fontSize: 'clamp(24px, 3vw, 32px)' }}>
                  Home Daycare
                </h3>
                <p className="text-[14px] text-dark-text/55 mt-1">Licensed home child care in your own home</p>
              </div>
              <div className="px-7 py-6">
                <dl className="space-y-4 mb-8">
                  {homeDaycareRows.map(row => (
                    <div key={row.label} className="flex flex-col gap-0.5">
                      <dt className="text-[11px] uppercase tracking-[0.1em] font-semibold text-dark-text/40">{row.label}</dt>
                      <dd className="text-[14px] text-dark-text/80">{row.value}</dd>
                    </div>
                  ))}
                </dl>
                <Link
                  href="/seeds/home-daycare"
                  className="block w-full text-center bg-forest-green text-white text-[14px] font-medium px-6 py-3 rounded-lg hover:bg-[#243d2f] transition-colors"
                >
                  Start the home daycare guide
                </Link>
              </div>
            </div>

            {/* Centre card */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: '2px solid #2F4A3A', boxShadow: '0 8px 32px rgba(47,74,58,0.12)' }}
            >
              <div className="bg-forest-green px-7 py-6 border-b border-[rgba(255,255,255,0.1)]">
                <p className="text-[11px] uppercase tracking-[0.14em] text-sage-green font-semibold mb-2">Path Two</p>
                <h3 className="font-display font-medium text-cream" style={{ fontSize: 'clamp(24px, 3vw, 32px)' }}>
                  Childcare Centre
                </h3>
                <p className="text-[14px] text-cream/60 mt-1">Licensed centre in a dedicated space</p>
              </div>
              <div className="px-7 py-6 bg-white">
                <dl className="space-y-4 mb-8">
                  {centreRows.map(row => (
                    <div key={row.label} className="flex flex-col gap-0.5">
                      <dt className="text-[11px] uppercase tracking-[0.1em] font-semibold text-dark-text/40">{row.label}</dt>
                      <dd className="text-[14px] text-dark-text/80">{row.value}</dd>
                    </div>
                  ))}
                </dl>
                <Link
                  href="/seeds/childcare-centre"
                  className="block w-full text-center bg-forest-green text-white text-[14px] font-medium px-6 py-3 rounded-lg hover:bg-[#243d2f] transition-colors"
                >
                  Start the centre guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More resources */}
      <section className="bg-cream py-16 md:py-20 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>More Resources</SectionLabel>
            <h2
              className="font-display font-medium text-forest-green leading-[1.08]"
              style={{ fontSize: 'clamp(30px, 3.5vw, 44px)' }}
            >
              Everything you need to get started.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {moreResources.map(item => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-[rgba(47,74,58,0.08)] flex flex-col"
                style={{ boxShadow: '0 2px 12px rgba(47,74,58,0.06)' }}
              >
                <span className="text-3xl block mb-4">{item.icon}</span>
                <h3 className="text-[15px] font-semibold text-dark-text mb-2">{item.title}</h3>
                <p className="text-[13px] text-dark-text/55 leading-relaxed flex-1 mb-5">{item.desc}</p>
                {item.comingSoon ? (
                  <span className="text-[13px] font-medium text-dark-text/35 italic">{item.cta}</span>
                ) : (
                  <Link href={item.href} className="text-[13px] font-medium text-forest-green hover:underline">
                    {item.cta} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email capture */}
      <section className="bg-forest-green py-16 px-5 md:px-8">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className="font-display font-medium text-cream leading-[1.08] mb-4"
              style={{ fontSize: 'clamp(28px, 3.5vw, 40px)' }}
            >
              Ready to take the first step?
            </h2>
            <p className="text-cream/65 text-[15px] leading-relaxed">
              Join operators across Canada who are using Sprout and Vine to plan, launch, and run their childcare programs.
            </p>
          </div>
          <div className="bg-white/10 rounded-2xl p-7">
            <EmailCapture
              heading="Get the Seeds starter kit"
              subheading="A PDF with licensing checklist, funding guide, and business plan template. Free."
              source="seeds-hub"
            />
          </div>
        </div>
      </section>
    </>
  )
}
