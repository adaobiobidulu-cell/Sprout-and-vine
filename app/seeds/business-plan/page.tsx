import type { Metadata } from 'next'
import Link from 'next/link'
import BusinessPlanBuilder from '@/components/seeds/business-plan-builder'

export const metadata: Metadata = {
  title: 'Childcare Business Plan Builder (2026) | Sprout & Vine Care',
  description:
    'A free interactive tool to build your childcare business plan step by step. Program type, location, qualifications, finances, and staffing. Your progress saves automatically.',
}

export default function BusinessPlanPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-16 md:py-20 px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-3">
            <Link href="/seeds" className="text-[13px] text-dark-text/50 hover:text-forest-green transition-colors">
              Seeds
            </Link>
            <span className="text-[13px] text-dark-text/30 mx-2">/</span>
            <span className="text-[13px] text-dark-text/50">Business Plan Builder</span>
          </div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-4">Free Tool</p>
          <h1
            className="font-display font-medium text-forest-green leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(34px, 5vw, 56px)' }}
          >
            Build your childcare<br />business plan, step by step.
          </h1>
          <p className="text-[16px] text-dark-text/60 leading-relaxed max-w-xl mx-auto">
            Six short sections. Your answers are saved automatically to your browser. At the end, you get a personalised readiness score and a checklist of your actual next steps.
          </p>
        </div>
      </section>

      {/* Builder */}
      <section className="bg-cream pb-20 px-5 md:px-8">
        <BusinessPlanBuilder />
      </section>

      {/* Supporting links */}
      <section className="bg-white py-16 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-6">More resources</p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: '💰', title: 'Startup Funding Guide', desc: 'Every CWELCC grant and provincial subsidy available to new operators.', href: '/seeds/funding' },
              { icon: '🏠', title: 'Home Daycare Guide', desc: 'Step-by-step: agency, licensing, CWELCC, and running your program.', href: '/seeds/home-daycare' },
              { icon: '🏫', title: 'Centre Pathway', desc: 'Location, licensing, capital grants, and opening a licensed centre.', href: '/seeds/childcare-centre' },
            ].map(card => (
              <Link
                key={card.title}
                href={card.href}
                className="block rounded-2xl p-6 border border-[rgba(47,74,58,0.1)] hover:border-forest-green/30 bg-cream transition-colors"
              >
                <div className="text-2xl mb-3">{card.icon}</div>
                <p className="text-[15px] font-semibold text-dark-text mb-1">{card.title}</p>
                <p className="text-[13px] text-dark-text/55 leading-relaxed">{card.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
