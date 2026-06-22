import type { Metadata } from 'next'
import { altEn } from '@/lib/seo'
import Link from 'next/link'
import FadeIn from '@/components/fade-in'
import FoundingForm from '@/components/founding-form'
import { FOUNDING_SPOTS_TOTAL } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Founding Operators Program | Sprout & Vine Care',
  description: 'Join the Founding Operators Program. Early access, founding pricing locked for life, and a direct voice in what we build. Applications open now.',
  alternates: altEn('/founding'),
}

const benefits = [
  {
    icon: '🔒',
    title: 'Founding pricing, locked for life',
    desc: 'Founding members receive a permanent discount off standard pricing. The rate you join at is the rate you keep, no matter how we grow.',
  },
  {
    icon: '🗺️',
    title: 'Direct input on the roadmap',
    desc: 'You help decide what gets built next. Monthly calls with our founding team, feature request priority, and a direct line to the people building this.',
  },
  {
    icon: '🚀',
    title: 'Early access before public launch',
    desc: 'Founding members get access to the platform before it opens to the public. You will be running on Sprout and Vine while others are still on the waitlist.',
  },
  {
    icon: '🌱',
    title: 'Founding Operator recognition',
    desc: 'Your centre is recognized in the platform and in our communications as a founding member. You helped build this. That matters.',
  },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">
      {children}
    </p>
  )
}

export default function FoundingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta text-[12px] font-semibold px-4 py-2 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
            Applications open now
          </div>
          <div className="inline-flex items-center gap-2 text-[13px] font-medium text-dark-text/60 mb-8">
            <span className="w-2 h-2 rounded-full bg-terracotta/60" />
            {FOUNDING_SPOTS_TOTAL} founding spots available
          </div>
          <h1
            className="font-display font-medium text-forest-green leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}
          >
            The Founding Operators Program
          </h1>
          <p className="text-[17px] text-dark-text/65 leading-relaxed max-w-xl mx-auto">
            We're building Sprout &amp; Vine in public, with the Canadian childcare operators who will use it every day. Founding members get early access, founding pricing, and a real voice in what we build.
          </p>
        </div>
      </section>

      {/* What founders get */}
      <section className="bg-white py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-14">
            <SectionLabel>What you get</SectionLabel>
            <h2 className="font-display font-medium text-forest-green leading-[1.1]" style={{ fontSize: 'clamp(34px, 4vw, 50px)' }}>
              More than early access.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((b, i) => (
              <FadeIn key={b.title} delay={i * 0.08}>
              <div className="bg-cream rounded-2xl p-7 hover:-translate-y-1 transition-transform duration-200">
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3 className="font-display text-[22px] font-medium text-forest-green mb-3">{b.title}</h3>
                <p className="text-[14px] text-dark-text/65 leading-relaxed">{b.desc}</p>
              </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="bg-cream py-16 md:py-20 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="font-display font-medium text-forest-green leading-[1.1] mb-8" style={{ fontSize: 'clamp(32px, 4vw, 46px)' }}>
              Who this program is for
            </h2>
            <div className="space-y-4">
              {[
                'Licensed childcare centres in any Canadian province or territory',
                'Licensed family child care home providers',
                'Aspiring operators planning to open within the next 12 months',
                'Multi-location operators and childcare networks',
              ].map(item => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-forest-green/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#2F4A3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-[15px] text-dark-text/75 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-[14px] text-dark-text/50 leading-relaxed mt-8 pl-8">
              We review every application personally. If you are not sure whether you qualify, apply and tell us about your situation. We would rather hear from you.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Application form */}
      <section className="bg-white py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: context */}
          <FadeIn>
            <h2 className="font-display font-medium text-forest-green leading-[1.08] mb-6" style={{ fontSize: 'clamp(30px, 3.5vw, 42px)' }}>
              Apply today.
            </h2>
            <p className="text-[16px] text-dark-text/65 leading-relaxed mb-8">
              Spots in the Founding Operators Program are limited. Applications are reviewed in the order they are received. We will respond to every applicant within 2 to 3 business days.
            </p>
            <div className="space-y-5">
              {[
                { step: '1', label: 'Submit your application', desc: 'Takes less than 2 minutes.' },
                { step: '2', label: 'We review and respond', desc: 'Within 2 to 3 business days. Every applicant hears back.' },
                { step: '3', label: 'Founding call with our team', desc: 'A short call to learn about your centre and share where we are in the build.' },
                { step: '4', label: 'Early access granted', desc: "You're in. Founding pricing locked. Platform access when ready." },
              ].map(item => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-forest-green/10 flex items-center justify-center flex-shrink-0 text-[13px] font-semibold text-forest-green">
                    {item.step}
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-dark-text">{item.label}</p>
                    <p className="text-[13px] text-dark-text/50 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[13px] text-dark-text/40 mt-8">
              Prefer email? Reach us at{' '}
              <a href="mailto:hello@sproutandvinecare.ca" className="text-forest-green underline underline-offset-2">
                hello@sproutandvinecare.ca
              </a>
            </p>
          </FadeIn>

          {/* Right: form */}
          <div
            className="bg-cream rounded-2xl p-8"
            style={{ boxShadow: '0 4px 32px rgba(47,74,58,0.08)' }}
          >
            <FoundingForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-16 md:py-20 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-medium text-forest-green mb-10" style={{ fontSize: 'clamp(28px, 3.5vw, 40px)' }}>
            Common questions
          </h2>
          <div className="space-y-0 divide-y divide-[rgba(47,74,58,0.08)]">
            {[
              {
                q: 'Is the platform built yet?',
                a: "We're building it now. The Founding Operators Program exists so that the people who understand this work every day can shape what gets built. We'll share our progress openly, and founding members get access as features become ready.",
              },
              {
                q: 'What does founding pricing mean exactly?',
                a: 'Founding members lock in a discounted rate that they keep for as long as they remain on the platform. We will share specific numbers during your founding call once we have reviewed your application.',
              },
              {
                q: 'How many founding spots are available?',
                a: "We're keeping the founding cohort small intentionally. We want to be genuinely responsive to every founding member, and that requires a manageable group to start.",
              },
              {
                q: 'I am not yet open. Can I still apply?',
                a: 'Yes. If you are planning to open a childcare centre within the next 12 months, we would love to hear from you. The Seeds tier of our platform is designed specifically for aspiring operators.',
              },
              {
                q: 'What happens if I do not like the platform?',
                a: 'Nothing is signed. There is no commitment until you choose to move forward. The application is a conversation starter, not a contract.',
              },
            ].map(faq => (
              <div key={faq.q} className="py-6">
                <p className="text-[15px] font-semibold text-dark-text mb-2">{faq.q}</p>
                <p className="text-[14px] text-dark-text/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
