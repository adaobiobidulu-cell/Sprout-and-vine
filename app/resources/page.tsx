import type { Metadata } from 'next'
import { altEn } from '@/lib/seo'
import Link from 'next/link'
import FadeIn from '@/components/fade-in'
import EmailCapture from '@/components/email-capture'
import { CWELCC_FIGURES } from '@/lib/cwelcc-calculator'

export const metadata: Metadata = {
  title: 'Resources | Sprout & Vine Care',
  description: 'Free guides and tools for Canadian childcare operators: CWELCC subsidy guide, provincial licensing checklists, and more.',
  alternates: altEn('/resources'),
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">
      {children}
    </p>
  )
}

const cwelccInside = [
  'How CWELCC subsidies are calculated across all provinces',
  'Documentation requirements and common audit triggers',
  'How to reconcile subsidy payments against invoices',
  'What changes when your province renegotiates its agreement',
  'A province-by-province subsidy rate reference (updated 2026)',
]

const checklistInside = [
  'Room-by-room documentation checklist for licensing inspections',
  'Staff qualification and ratio requirements by province',
  'Health, safety, and nutrition policy templates',
  'Emergency plan and incident report templates',
  'What inspectors look for, and common reasons centres fail',
]

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <SectionLabel>Resources</SectionLabel>
            <h1
              className="font-display font-medium text-forest-green leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(40px, 5.5vw, 64px)' }}
            >
              Free tools for Canadian childcare operators.
            </h1>
            <p className="text-[17px] text-dark-text/60 leading-relaxed max-w-2xl">
              Practical guides for the things that take up the most time: CWELCC subsidy management, provincial licensing, and compliance documentation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Resources */}
      <section className="bg-white py-16 md:py-20 px-5 md:px-8">
        <div className="max-w-5xl mx-auto space-y-10">

          {/* CWELCC Calculator — appears once the figures in
              lib/cwelcc-calculator.ts are expert-verified */}
          {CWELCC_FIGURES.verified && (
            <FadeIn>
              <div className="rounded-2xl border border-[rgba(47,74,58,0.12)] overflow-hidden" style={{ boxShadow: '0 4px 24px rgba(47,74,58,0.07)' }}>
                <div className="bg-cream px-8 py-6 flex items-start gap-5 border-b border-[rgba(47,74,58,0.1)]">
                  <div className="text-4xl flex-shrink-0 mt-0.5">🧮</div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.14em] text-sage-green font-semibold mb-1">Free Tool</p>
                    <h2 className="font-display font-medium text-forest-green leading-tight" style={{ fontSize: 'clamp(22px, 3vw, 30px)' }}>
                      CWELCC Calculator for Ontario Operators
                    </h2>
                  </div>
                </div>
                <div className="px-8 py-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                  <p className="text-[15px] text-dark-text/65 leading-relaxed max-w-xl">
                    See the capped parent fee, what it means monthly for your enrolment, and how the funding model works in plain language. Results appear instantly. No email required.
                  </p>
                  <Link
                    href="/tools/cwelcc-calculator"
                    className="flex-shrink-0 text-center bg-forest-green text-white text-[13px] font-medium px-5 py-3 rounded-lg hover:bg-[#243d2f] transition-colors"
                  >
                    Open the calculator →
                  </Link>
                </div>
              </div>
            </FadeIn>
          )}

          {/* CWELCC Guide */}
          <FadeIn>
            <div className="rounded-2xl border border-[rgba(47,74,58,0.12)] overflow-hidden" style={{ boxShadow: '0 4px 24px rgba(47,74,58,0.07)' }}>
              <div className="bg-forest-green px-8 py-6 flex items-start gap-5">
                <div className="text-4xl flex-shrink-0 mt-0.5">🍁</div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-sage-green font-semibold mb-1">Free Guide</p>
                  <h2 className="font-display font-medium text-cream leading-tight" style={{ fontSize: 'clamp(22px, 3vw, 30px)' }}>
                    The Complete CWELCC Guide for Canadian Operators
                  </h2>
                </div>
              </div>
              <div className="px-8 py-7">
                <p className="text-[15px] text-dark-text/65 leading-relaxed mb-7">
                  The Canada-Wide Early Learning &amp; Child Care framework is the biggest shift in Canadian childcare funding in a generation, and the subsidy mechanics vary significantly by province. This guide cuts through the complexity so you can stop guessing and start planning.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-dark-text/40 mb-3">What is inside</p>
                    <ul className="space-y-2.5">
                      {cwelccInside.map(item => (
                        <li key={item} className="flex items-start gap-2.5">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                            <circle cx="8" cy="8" r="8" fill="#2F4A3A" fillOpacity="0.1" />
                            <path d="M4.5 8l2.5 2.5 4-4.5" stroke="#2F4A3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span className="text-[13px] text-dark-text/65 leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-cream rounded-xl p-6 flex flex-col justify-between gap-4">
                    <p className="text-[14px] text-dark-text/70 leading-relaxed">
                      Everything you need to understand CWELCC funding, fee caps, subsidy tracking, and provincial compliance. Free, no sign-up required.
                    </p>
                    <Link
                      href="/resources/cwelcc-guide"
                      className="block w-full text-center bg-forest-green text-white text-[13px] font-medium px-5 py-3 rounded-lg hover:bg-[#243d2f] transition-colors"
                    >
                      Read the CWELCC Guide →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Licensing Checklist */}
          <FadeIn delay={0.05}>
            <div className="rounded-2xl border border-[rgba(47,74,58,0.12)] overflow-hidden" style={{ boxShadow: '0 4px 24px rgba(47,74,58,0.07)' }}>
              <div className="bg-cream px-8 py-6 flex items-start gap-5 border-b border-[rgba(47,74,58,0.1)]">
                <div className="text-4xl flex-shrink-0 mt-0.5">📋</div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-sage-green font-semibold mb-1">Free Checklist</p>
                  <h2 className="font-display font-medium text-forest-green leading-tight" style={{ fontSize: 'clamp(22px, 3vw, 30px)' }}>
                    Provincial Licensing Checklist for New and Existing Centres
                  </h2>
                </div>
              </div>
              <div className="px-8 py-7">
                <p className="text-[15px] text-dark-text/65 leading-relaxed mb-7">
                  Whether you are opening a new centre or preparing for your next inspection, this checklist covers every documentation, staffing, and compliance requirement, broken down by province.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-dark-text/40 mb-3">What is inside</p>
                    <ul className="space-y-2.5">
                      {checklistInside.map(item => (
                        <li key={item} className="flex items-start gap-2.5">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                            <circle cx="8" cy="8" r="8" fill="#2F4A3A" fillOpacity="0.1" />
                            <path d="M4.5 8l2.5 2.5 4-4.5" stroke="#2F4A3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span className="text-[13px] text-dark-text/65 leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-6 flex flex-col justify-between gap-4 border border-[rgba(47,74,58,0.08)]">
                    <p className="text-[14px] text-dark-text/70 leading-relaxed">
                      A complete inspection-ready checklist covering Ontario, BC, Alberta, Manitoba, and Quebec. Free, no sign-up required.
                    </p>
                    <Link
                      href="/resources/licensing-checklist"
                      className="block w-full text-center bg-forest-green text-white text-[13px] font-medium px-5 py-3 rounded-lg hover:bg-[#243d2f] transition-colors"
                    >
                      View the Licensing Checklist →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Help Centre + Coming up */}
      <section className="bg-cream py-16 md:py-20 px-5 md:px-8">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionLabel>Also Available</SectionLabel>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {[
              {
                icon: '💬',
                title: 'Help Centre',
                desc: 'Step-by-step guides and video tutorials for every Sprout & Vine Care feature. Coming soon.',
                href: '/help',
                cta: 'Visit Help Centre',
              },
              {
                icon: '📓',
                title: 'Blog',
                desc: 'Insights on childcare operations, CWELCC funding, and running a thriving Canadian centre.',
                href: '/blog',
                cta: 'Read the Blog',
              },
              {
                icon: '🗺️',
                title: 'Product Roadmap',
                desc: "See what we are building next. We share our roadmap publicly so you know where Sprout & Vine Care is headed.",
                href: '/roadmap',
                cta: 'View Roadmap',
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 border border-[rgba(47,74,58,0.08)] hover:-translate-y-1 transition-transform duration-200 h-full flex flex-col" style={{ boxShadow: '0 2px 12px rgba(47,74,58,0.06)' }}>
                  <span className="text-3xl block mb-4">{item.icon}</span>
                  <h3 className="text-[16px] font-semibold text-dark-text mb-2">{item.title}</h3>
                  <p className="text-[13px] text-dark-text/55 leading-relaxed flex-1 mb-5">{item.desc}</p>
                  <Link href={item.href} className="text-[13px] font-medium text-forest-green hover:underline">
                    {item.cta} →
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-green py-16 px-5 md:px-8">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display font-medium text-cream leading-[1.08] mb-5" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>
              Ready to put all of this into practice?
            </h2>
            <p className="text-cream/65 text-[14px] leading-relaxed mb-6">
              Sprout &amp; Vine Care handles the CWELCC tracking, licensing documentation, and compliance automatically.
            </p>
            <Link
              href="/founding"
              className="inline-block bg-terracotta text-white text-[14px] font-medium px-7 py-3.5 rounded-lg hover:bg-[#d4724e] transition-colors"
            >
              Apply to the Founding Program
            </Link>
          </div>
          <div className="bg-white rounded-2xl p-7">
            <EmailCapture
              heading="New resources, delivered."
              subheading="We publish guides on CWELCC, licensing, and running a Canadian childcare program. Get them as they come out."
              source="resources-page"
            />
          </div>
        </div>
      </section>
    </>
  )
}
