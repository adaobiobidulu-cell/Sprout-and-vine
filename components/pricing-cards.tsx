'use client'

import { useState } from 'react'
import Link from 'next/link'

const seedsFeatures = [
  'Business planning tools',
  'Licensing checklists by province',
  'CWELCC readiness guide',
  'Resource library',
  'Community access',
]

const sproutFeatures = [
  'Everything in Seeds',
  'Unlimited staff accounts',
  'Attendance tracking',
  'Daily reports & parent messaging',
  'The Vine parent app',
  'Billing & invoicing',
  'CWELCC subsidy tracking',
  'Smart Pickup Authorization',
  'Enrollment & waitlist management',
  'Bilingual (EN/FR)',
  'Email support',
]

const vineFeatures = [
  'Everything in Sprout',
  'Multi-location dashboard',
  'Cross-location reporting',
  'Priority support',
  'Dedicated onboarding',
  'Custom branding options',
  'API access',
]

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
      <path d="M2.5 7l3 3 6-6" stroke="#6EB76F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function PricingCards() {
  const [annual, setAnnual] = useState(false)

  return (
    <div>
      {/* Toggle */}
      <div className="flex items-center justify-center gap-4 mb-12">
        <button
          onClick={() => setAnnual(false)}
          className={`text-[14px] font-medium transition-colors ${!annual ? 'text-forest-green' : 'text-dark-text/40'}`}
        >
          Monthly
        </button>
        <button
          onClick={() => setAnnual(!annual)}
          className="relative w-11 h-6 rounded-full transition-colors duration-200"
          style={{ background: annual ? '#2F4A3A' : 'rgba(47,74,58,0.2)' }}
          aria-label="Toggle annual billing"
        >
          <span
            className="absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all duration-200"
            style={{ left: annual ? '24px' : '4px' }}
          />
        </button>
        <button
          onClick={() => setAnnual(true)}
          className={`text-[14px] font-medium transition-colors ${annual ? 'text-forest-green' : 'text-dark-text/40'}`}
        >
          Annual
          <span className="ml-2 text-[11px] font-semibold text-terracotta bg-terracotta/10 px-2 py-0.5 rounded-full">
            save 16%
          </span>
        </button>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

        {/* Seeds */}
        <div className="bg-white rounded-2xl p-7 border border-[rgba(47,74,58,0.1)]" style={{ boxShadow: '0 4px 24px rgba(47,74,58,0.06)' }}>
          <div className="mb-6">
            <div className="text-2xl mb-3">🌱</div>
            <h3 className="font-display text-[28px] font-medium text-forest-green mb-1">Seeds</h3>
            <span className="text-[11px] uppercase tracking-wide font-semibold text-dark-text/40 border border-[rgba(47,74,58,0.15)] px-2.5 py-1 rounded-full">
              Free Forever
            </span>
            <div className="mt-5">
              <span className="font-display text-[40px] font-medium text-forest-green">Free</span>
            </div>
            <p className="text-[13px] text-dark-text/50 mt-1">For aspiring childcare owners</p>
          </div>

          <ul className="space-y-3 mb-7">
            {seedsFeatures.map(f => (
              <li key={f} className="flex items-start gap-2.5">
                <Check />
                <span className="text-[13.5px] text-dark-text/70">{f}</span>
              </li>
            ))}
          </ul>

          <p className="text-[12px] text-dark-text/40 italic mb-5">
            "When you're ready to open, Sprout will be waiting."
          </p>

          <Link
            href="/contact"
            className="block text-center text-[14px] font-medium text-forest-green border-2 border-forest-green px-5 py-3 rounded-lg hover:bg-forest-green hover:text-white transition-colors"
          >
            Start for free
          </Link>
        </div>

        {/* Sprout — featured */}
        <div
          className="bg-white rounded-2xl p-7 relative"
          style={{
            border: '2px solid #2F4A3A',
            boxShadow: '0 16px 48px rgba(47,74,58,0.16)',
          }}
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="bg-forest-green text-cream text-[11px] font-semibold px-4 py-1 rounded-full">
              Most Popular
            </span>
          </div>

          <div className="mb-6">
            <div className="text-2xl mb-3">🌿</div>
            <h3 className="font-display text-[28px] font-medium text-forest-green mb-1">Sprout</h3>
            <div className="mt-5">
              <div className="flex items-baseline gap-1 transition-all duration-300">
                <span className="font-display text-[40px] font-medium text-forest-green">
                  CAD ${annual ? '699' : '69'}
                </span>
                <span className="text-[14px] text-dark-text/50">{annual ? '/year' : '/month'}</span>
              </div>
              {!annual && (
                <p className="text-[12px] text-dark-text/40 mt-0.5">CAD $39/month for licensed home providers</p>
              )}
            </div>
            <div className="mt-2 flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-sage-green" />
              <p className="text-[12px] text-sage-green font-medium">14-day free trial — no credit card required</p>
            </div>
            <p className="text-[13px] text-dark-text/50 mt-1">For licensed centers & home providers</p>
          </div>

          <ul className="space-y-3 mb-7">
            {sproutFeatures.map(f => (
              <li key={f} className="flex items-start gap-2.5">
                <Check />
                <span className="text-[13.5px] text-dark-text/70">{f}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="block text-center text-[14px] font-medium text-cream bg-forest-green px-5 py-3 rounded-lg hover:bg-[#243d2f] transition-colors"
          >
            Start free trial
          </Link>
        </div>

        {/* Vine */}
        <div className="bg-white rounded-2xl p-7 border border-[rgba(47,74,58,0.1)]" style={{ boxShadow: '0 4px 24px rgba(47,74,58,0.06)' }}>
          <div className="mb-6">
            <div className="text-2xl mb-3">🍃</div>
            <h3 className="font-display text-[28px] font-medium text-forest-green mb-1">Vine</h3>
            <span className="text-[11px] uppercase tracking-wide font-semibold text-dark-text/40 border border-[rgba(47,74,58,0.15)] px-2.5 py-1 rounded-full">
              Multi-location
            </span>
            <div className="mt-5">
              <div className="flex items-baseline gap-1 transition-all duration-300">
                <span className="font-display text-[40px] font-medium text-forest-green">
                  CAD ${annual ? '1,499' : '149'}
                </span>
                <span className="text-[14px] text-dark-text/50">{annual ? '/year' : '/month'}</span>
              </div>
              <p className="text-[12px] text-dark-text/40 mt-0.5">per location</p>
            </div>
            <p className="text-[13px] text-dark-text/50 mt-1">For multi-location operators & networks</p>
          </div>

          <ul className="space-y-3 mb-7">
            {vineFeatures.map(f => (
              <li key={f} className="flex items-start gap-2.5">
                <Check />
                <span className="text-[13.5px] text-dark-text/70">{f}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="block text-center text-[14px] font-medium text-forest-green border-2 border-forest-green px-5 py-3 rounded-lg hover:bg-forest-green hover:text-white transition-colors"
          >
            Book a demo
          </Link>
        </div>
      </div>

      {/* Footer note */}
      <div className="text-center mt-10 space-y-2">
        <p className="text-[13px] text-dark-text/45">
          Fair Pricing Guarantee — we verify license type and enrollment to keep pricing fair for all.
        </p>
        <p className="text-[13px] text-dark-text/40">
          🔒 SOC 2 compliant · Canadian data residency · 14-day free trial
        </p>
      </div>
    </div>
  )
}
