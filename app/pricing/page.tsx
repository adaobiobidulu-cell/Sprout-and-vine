import Link from 'next/link'
import type { Metadata } from 'next'
import PricingTiersClient from '@/components/pricing-tiers-client'

export const metadata: Metadata = {
  title: 'How Pricing Works | Sprout & Vine Care',
  description:
    'Simple, enrollment-based pricing for Canadian childcare operators. From home daycares at CAD $49/mo to multi-location networks. No hidden fees. No per-child charges. All prices in CAD.',
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">
      {children}
    </p>
  )
}

const faqs = [
  {
    q: 'What happens if my enrollment grows into the next tier?',
    a: "We'll notify you when you consistently exceed your tier's enrollment limit and make the transition simple. You'll never be charged mid-month. Changes take effect on your next billing date.",
  },
  {
    q: 'Do you charge per child or per staff member?',
    a: 'Neither. Sprout & Vine is flat-rate per tier based on enrollment range. No per-child fees, no per-staff fees.',
  },
  {
    q: 'Is there a contract or commitment?',
    a: 'Monthly plans have no minimum commitment. Cancel anytime. Annual plans are billed upfront and save you 2 months.',
  },
  {
    q: 'Does the Vine parent app cost extra?',
    a: 'No. The Vine parent app is included in all paid tiers at no extra charge.',
  },
  {
    q: 'Do you offer discounts for non-profits or Indigenous-operated centres?',
    a: 'Yes. Contact us at hello@sproutandvinecare.ca for non-profit, co-operative, and Indigenous-operated centre pricing.',
  },
  {
    q: 'What is the Founding Operators Program?',
    a: 'Founding members get early access to the platform, permanently discounted pricing locked for life, and direct input on what gets built. Applications are open now.',
  },
  {
    q: 'Do you support home providers?',
    a: 'Yes. The Sprout Home tier is designed specifically for licensed family home daycares with 4 to 8 children. It includes everything you need to run your home daycare professionally.',
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
    a: "Canada-Wide Early Learning and Child Care. Our platform tracks and manages your subsidy eligibility automatically, so you never have to reconcile spreadsheets again.",
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
            style={{ fontSize: 'clamp(38px, 5vw, 60px)' }}
          >
            Enrollment-based pricing.<br />No hidden fees. No per-child charges.
          </h1>
          <p className="text-[16px] text-dark-text/60 leading-relaxed mb-8 max-w-xl mx-auto">
            Pricing that scales with your centre. Whether you're a home daycare with 6 children or a large centre with 80, you pay a flat rate based on your enrollment range. All prices in CAD.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/founding"
              className="inline-block bg-forest-green text-white text-[14px] font-medium px-7 py-3.5 rounded-lg hover:bg-[#243d2f] transition-colors"
            >
              Join the Founding Operators Program
            </Link>
            <Link
              href="/contact"
              className="inline-block text-[14px] font-medium text-dark-text/65 border border-[rgba(47,74,58,0.22)] px-6 py-3.5 rounded-lg hover:border-[rgba(47,74,58,0.45)] transition-colors"
            >
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive: toggle + tier cards + feature matrix */}
      <PricingTiersClient />

      {/* Fair Pricing Guarantee */}
      <section className="bg-white py-16 px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="text-2xl">🍁</span>
            <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold">
              Fair Pricing Guarantee
            </p>
          </div>
          <p className="text-[16px] text-dark-text/65 leading-relaxed max-w-xl mx-auto">
            Pricing scales with your enrollment, so a home daycare with 6 children and a centre with 60 children always pay a fair rate. Tiers are verified at signup and reviewed annually.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-20 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-display font-medium text-forest-green text-center mb-12"
            style={{ fontSize: 'clamp(30px, 4vw, 46px)' }}
          >
            Common questions
          </h2>
          <div className="divide-y divide-[rgba(47,74,58,0.08)]">
            {faqs.map(faq => (
              <div key={faq.q} className="py-6">
                <p className="text-[16px] font-semibold text-dark-text mb-2">{faq.q}</p>
                <p className="text-[15px] text-dark-text/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white py-12 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3">
            {[
              '🍁 Canadian Data Residency',
              '🌐 Fully Bilingual (EN/FR)',
              '🔒 No per-child charges',
              '↩ Cancel anytime',
              '🏠 Built for home daycares too',
            ].map(badge => (
              <span key={badge} className="text-[13px] font-medium text-dark-text/50">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
