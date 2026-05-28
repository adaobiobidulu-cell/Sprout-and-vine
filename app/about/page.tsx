import type { Metadata } from 'next'
import Link from 'next/link'
import FadeIn from '@/components/fade-in'

export const metadata: Metadata = {
  title: 'About | Sprout & Vine',
  description: 'The story behind Sprout & Vine. Built by Canadian operators for Canadian operators. We are building the infrastructure the childcare sector has needed for a long time.',
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">
      {children}
    </p>
  )
}

const founders = [
  {
    name: 'Ada Obidulu',
    role: 'Co-founder',
    bio: 'I spent years in customer success at software companies before I found the problem I could not stop thinking about. Canadian childcare operators are doing some of the most important work in the country and they are doing it with tools that were never built for them. I am building the platform I wish had existed from the beginning.',
  },
  {
    name: 'Co-founder',
    role: 'Technology',
    bio: 'Building the technical foundation that Canadian childcare operators deserve. Clear, fast, reliable, and built to last.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Our story</SectionLabel>
          <h1
            className="font-display font-medium text-forest-green leading-[1.05] mb-8"
            style={{ fontSize: 'clamp(40px, 5.5vw, 66px)' }}
          >
            We are building the infrastructure Canadian childcare has always needed.
          </h1>
          <p className="text-[17px] text-dark-text/65 leading-relaxed">
            Not another app. Not a tool ported from the US with Canadian compliance bolted on. Something built here, for the people doing this work every day.
          </p>
        </div>
      </section>

      {/* The Gap */}
      <section className="bg-forest-green py-16 md:py-20 px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display italic text-cream/85 leading-relaxed" style={{ fontSize: 'clamp(22px, 3vw, 32px)' }}>
            "The gap is not passion. The gap is information and infrastructure."
          </p>
          <p className="text-[13px] text-cream/45 mt-5 uppercase tracking-[0.12em] font-medium">
            Ada Obidulu, Co-founder
          </p>
        </div>
      </section>

      {/* Founder story */}
      <section className="bg-white py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <SectionLabel>Why we are building this</SectionLabel>
            <h2
              className="font-display font-medium text-forest-green leading-[1.1] mb-10"
              style={{ fontSize: 'clamp(36px, 4vw, 50px)' }}
            >
              I have seen the chaos firsthand.
            </h2>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="space-y-6 text-[17px] text-dark-text/70 leading-relaxed max-w-3xl">
              <p>
                I spent years in customer success across software companies. I thought I understood what it meant to help people adopt technology. Then I started working with childcare operators.
              </p>
              <p>
                What I found was a sector doing essential work with tools that were never designed for them. The software available was either built for US regulations, too expensive for small operations, or so complicated that educators were spending more time navigating the platform than doing their actual job. Canadian operators were duct-taping together spreadsheets, paper sign-in sheets, and apps that did not communicate with each other.
              </p>
              <p>
                The CWELCC program added another layer. Suddenly operators were tracking subsidy rates, reconciling receipts, and managing compliance paperwork that did not exist two years ago. The existing tools had no answer for this. Some of them still do not.
              </p>
              <p>
                I kept asking the same question: why is there no platform built specifically for Canadian childcare? One that understands CWELCC from the ground up, that works in both English and French, that is simple enough for a team of three and powerful enough for an organization with ten locations?
              </p>
              <p>
                The answer was that nobody had built it yet. So we are building it.
              </p>
              <p>
                Sprout and Vine is not a passion project. It is a serious attempt to give Canadian childcare operators the infrastructure they need to run sustainable, high-quality programs. The gap in this sector is not a lack of dedication from the people doing the work. The gap is the tools they have been given to do it.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What we believe */}
      <section className="bg-cream py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="mb-12">
            <h2 className="font-display font-medium text-forest-green leading-[1.1]" style={{ fontSize: 'clamp(34px, 4vw, 48px)' }}>
              What we believe
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Operators deserve real tools',
                desc: 'Not workarounds. Not ported-from-somewhere-else software that almost fits. A platform designed for the actual regulatory environment, the actual workflows, and the actual constraints of running a Canadian childcare centre.',
              },
              {
                title: 'Educators deserve to focus on children',
                desc: 'Every minute an educator spends on paperwork is a minute not spent with a child. We measure our success by how much time we give back to the people in the room.',
              },
              {
                title: 'Families deserve to be informed',
                desc: 'Parents who trust you are more than enrolled families. They are your strongest advocates. The right tools make that trust easy to build and easy to keep.',
              },
              {
                title: 'Canada deserves a Canadian solution',
                desc: 'CWELCC, provincial licensing, bilingual requirements, data residency. These are not edge cases. They are the foundation. We build from that foundation, not on top of something that ignores it.',
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
              <div className="bg-white rounded-2xl p-7 border border-[rgba(47,74,58,0.08)]" style={{ boxShadow: '0 2px 16px rgba(47,74,58,0.06)' }}>
                <h3 className="font-display text-[22px] font-medium text-forest-green mb-3">{item.title}</h3>
                <p className="text-[14px] text-dark-text/65 leading-relaxed">{item.desc}</p>
              </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Company */}
      <section className="bg-white py-16 md:py-20 px-5 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block bg-forest-green/10 text-forest-green text-[11px] font-semibold uppercase tracking-[0.14em] px-4 py-1.5 rounded-full mb-6">
            Proudly Canadian
          </span>
          <h2
            className="font-display font-medium text-forest-green leading-[1.1] mb-6"
            style={{ fontSize: 'clamp(32px, 4vw, 44px)' }}
          >
            Sprout &amp; Vine is operated by Prime Horizon Inc.
          </h2>
          <p className="text-[16px] text-dark-text/60 leading-relaxed mb-10 max-w-xl mx-auto">
            We are a proudly Canadian company. Our data stays in Canada. Our focus stays on Canada. Our team understands the unique regulatory landscape every Canadian operator navigates every day.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              '🍁 Canadian company',
              '🔒 Canadian data residency',
              '🌐 Fully bilingual (EN/FR)',
            ].map(chip => (
              <span
                key={chip}
                className="bg-cream border border-[rgba(47,74,58,0.15)] text-dark-text/70 text-[13px] font-medium px-4 py-2 rounded-full"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-cream py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="mb-12">
            <SectionLabel>The team</SectionLabel>
            <h2 className="font-display font-medium text-forest-green leading-[1.1]" style={{ fontSize: 'clamp(32px, 4vw, 46px)' }}>
              We are a small team doing serious work.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {founders.map((f, i) => (
              <FadeIn key={f.name} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-7 border border-[rgba(47,74,58,0.08)]" style={{ boxShadow: '0 2px 16px rgba(47,74,58,0.06)' }}>
                <p className="text-[18px] font-semibold text-dark-text mb-1">{f.name}</p>
                <p className="text-[13px] text-dark-text/45 mb-4 uppercase tracking-[0.08em] font-medium">{f.role}</p>
                <p className="text-[14px] text-dark-text/65 leading-relaxed">{f.bio}</p>
              </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-green py-20 px-5 md:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2
            className="font-display font-medium text-cream leading-[1.08] mb-5"
            style={{ fontSize: 'clamp(36px, 4.5vw, 52px)' }}
          >
            Build this with us.
          </h2>
          <p className="text-[16px] text-cream/60 mb-10 leading-relaxed">
            The Founding Operators Program is open now. Apply and help shape what Sprout &amp; Vine becomes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/founding"
              className="bg-terracotta text-white text-[14px] font-medium px-8 py-4 rounded-lg hover:bg-[#d4724e] transition-colors"
            >
              Apply to the Founding Program
            </Link>
            <Link
              href="/features"
              className="text-cream text-[14px] font-medium px-8 py-4 rounded-lg border-2 border-cream/40 hover:border-cream/70 transition-colors"
            >
              See the platform
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
