'use client'

import { useState } from 'react'
import Link from 'next/link'

const labelClass = 'block text-[13px] font-medium text-dark-text/70 mb-1.5'
const inputClass =
  'w-full border border-[rgba(47,74,58,0.2)] rounded-lg px-4 py-3 text-[14px] text-dark-text bg-white focus:outline-none focus:border-forest-green transition-colors'

const provinces = [
  { value: '', label: 'Select your province or territory...' },
  { value: 'BC', label: 'British Columbia' },
  { value: 'AB', label: 'Alberta' },
  { value: 'SK', label: 'Saskatchewan' },
  { value: 'MB', label: 'Manitoba' },
  { value: 'ON', label: 'Ontario' },
  { value: 'QC', label: 'Quebec' },
  { value: 'NB', label: 'New Brunswick' },
  { value: 'NS', label: 'Nova Scotia' },
  { value: 'PEI', label: 'Prince Edward Island' },
  { value: 'NL', label: 'Newfoundland and Labrador' },
  { value: 'YT', label: 'Yukon' },
  { value: 'NT', label: 'Northwest Territories' },
  { value: 'NU', label: 'Nunavut' },
]

const centerTypes = [
  { value: '', label: 'Select type...' },
  { value: 'licensed-centre', label: 'Licensed childcare centre' },
  { value: 'home-provider', label: 'Licensed home provider' },
  { value: 'aspiring', label: 'Aspiring operator (not yet open)' },
  { value: 'multi-location', label: 'Multi-location organization' },
]

export default function FoundingForm() {
  const [name, setName] = useState('')
  const [centerName, setCenterName] = useState('')
  const [centerType, setCenterType] = useState('')
  const [province, setProvince] = useState('')
  const [email, setEmail] = useState('')
  const [marketingConsent, setMarketingConsent] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          centerName: centerName || 'Aspiring operator',
          province,
          childrenCount: centerType || 'Not specified',
          email,
          message: `Source: Founding Operators Program\nCentre type: ${centerType}\nMarketing consent: ${marketingConsent ? 'Yes' : 'No'}`,
        }),
      })
      if (!res.ok) throw new Error('send_failed')
      setSubmitted(true)
    } catch {
      setError('Something went wrong submitting your application. Please email us directly at founders@sproutandvine.ca.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="text-5xl mb-6">🌱</div>
        <h2 className="font-display text-[32px] font-medium text-forest-green mb-4">
          Application received.
        </h2>
        <p className="text-[16px] text-dark-text/65 leading-relaxed mb-6">
          Thank you, {name}. We review all founding applications personally and will be in touch within 2 to 3 business days.
        </p>
        <p className="text-[14px] text-dark-text/45">
          Questions? Email us at{' '}
          <a href="mailto:founders@sproutandvine.ca" className="text-forest-green underline underline-offset-2">
            founders@sproutandvine.ca
          </a>
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className={labelClass}>Your name</label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={e => setName(e.target.value)}
          className={inputClass}
          placeholder="Jane Smith"
        />
      </div>

      <div>
        <label htmlFor="centerName" className={labelClass}>
          Centre or organization name{' '}
          <span className="text-dark-text/40 font-normal">(if not yet open, your planned name)</span>
        </label>
        <input
          id="centerName"
          type="text"
          value={centerName}
          onChange={e => setCenterName(e.target.value)}
          className={inputClass}
          placeholder="Bright Beginnings Child Care"
        />
      </div>

      <div>
        <label htmlFor="centerType" className={labelClass}>Type of operator</label>
        <select
          id="centerType"
          required
          value={centerType}
          onChange={e => setCenterType(e.target.value)}
          className={inputClass}
        >
          {centerTypes.map(t => (
            <option key={t.value} value={t.value} disabled={t.value === ''}>{t.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="province" className={labelClass}>Province or territory</label>
        <select
          id="province"
          required
          value={province}
          onChange={e => setProvince(e.target.value)}
          className={inputClass}
        >
          {provinces.map(p => (
            <option key={p.value} value={p.value} disabled={p.value === ''}>{p.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>Your email</label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          className={inputClass}
          placeholder="jane@brightbeginnings.ca"
        />
      </div>

      {error && (
        <p className="text-[13px] text-terracotta bg-terracotta/10 rounded-lg px-4 py-3 leading-relaxed">
          {error}
        </p>
      )}

      {/* CASL consent — unchecked by default */}
      <div className="flex items-start gap-3 pt-1">
        <input
          id="marketing-consent"
          type="checkbox"
          checked={marketingConsent}
          onChange={e => setMarketingConsent(e.target.checked)}
          className="mt-0.5 w-4 h-4 flex-shrink-0"
        />
        <label htmlFor="marketing-consent" className="text-[12px] text-dark-text/55 leading-relaxed cursor-pointer">
          I agree to receive updates about the Sprout &amp; Vine platform, the Founding Operators Program, and related announcements from Sprout &amp; Vine (operated by Prime Horizon Inc.). I can unsubscribe at any time.
        </label>
      </div>

      <p className="text-[11px] text-dark-text/40 leading-relaxed">
        By submitting this application you confirm you have read our{' '}
        <Link href="/privacy" className="underline underline-offset-2 hover:text-forest-green transition-colors">
          Privacy Policy
        </Link>
        . Sprout &amp; Vine (Prime Horizon Inc.) will use your information to process your application and contact you about the Founding Operators Program.
      </p>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-forest-green text-white py-4 rounded-lg text-[15px] font-medium hover:bg-[#243d2f] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? 'Submitting...' : 'Apply to the Founding Program'}
      </button>
    </form>
  )
}
