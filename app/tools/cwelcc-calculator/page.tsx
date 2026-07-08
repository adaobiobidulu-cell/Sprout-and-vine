import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { canonicalOnly } from '@/lib/seo'
import CwelccCalculator from '@/components/cwelcc-calculator'
import JsonLd from '@/components/json-ld'
import { faqPageSchema } from '@/lib/schema'
import { CWELCC_FIGURES, CALCULATOR_FAQS } from '@/lib/cwelcc-calculator'

export const metadata: Metadata = {
  title: 'CWELCC Calculator for Ontario Operators | Sprout & Vine Care',
  description:
    'A free, honest CWELCC calculator for Ontario childcare operators: see the capped parent fee, what it means monthly, and how the funding model works in plain language. No email required.',
  alternates: canonicalOnly('/tools/cwelcc-calculator'),
}

export default function CwelccCalculatorPage() {
  // The calculator goes live only after Ada confirms the licensing expert
  // has verified every figure in lib/cwelcc-calculator.ts. Until then the
  // route sends people to the guide, which answers the same questions in
  // prose. Flipping CWELCC_FIGURES.verified publishes this page and its
  // links on the next deploy; no other code change is needed.
  if (!CWELCC_FIGURES.verified) {
    redirect('/resources/cwelcc-guide')
  }

  return (
    <>
      {CALCULATOR_FAQS.length > 0 && <JsonLd data={faqPageSchema(CALCULATOR_FAQS)} />}

      {/* Hero */}
      <section className="bg-forest-green py-16 md:py-20 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-4">
            Free Tool
          </p>
          <h1
            className="font-display font-medium text-cream leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(34px, 5vw, 56px)' }}
          >
            What does CWELCC mean for your centre?
          </h1>
          <p className="text-[16px] text-cream/65 leading-relaxed max-w-2xl">
            Enter your enrolment and fees to see the capped parent fee, what it means monthly, and how the funding model actually works. Your results appear right here. No email required.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-cream py-14 md:py-16 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <CwelccCalculator />
        </div>
      </section>

      {/* FAQ — renders only once Ada's validated entries exist */}
      {CALCULATOR_FAQS.length > 0 && (
        <section className="bg-white py-14 md:py-16 px-5 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display font-medium text-forest-green mb-8" style={{ fontSize: 'clamp(26px, 3.5vw, 36px)' }}>
              Common questions
            </h2>
            <div className="space-y-0 divide-y divide-[rgba(47,74,58,0.08)]">
              {CALCULATOR_FAQS.map(faq => (
                <div key={faq.q} className="py-6">
                  <p className="text-[15px] font-semibold text-dark-text mb-2">{faq.q}</p>
                  <p className="text-[14px] text-dark-text/60 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related */}
      <section className="bg-white py-10 px-5 md:px-8 border-t border-[rgba(47,74,58,0.07)]">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 sm:gap-8">
          <Link href="/resources/cwelcc-guide" className="text-[14px] font-medium text-forest-green hover:underline underline-offset-4">
            Read the full CWELCC guide →
          </Link>
          <Link href="/resources/licensing-checklist" className="text-[14px] font-medium text-forest-green hover:underline underline-offset-4">
            Provincial licensing checklist →
          </Link>
        </div>
      </section>
    </>
  )
}
