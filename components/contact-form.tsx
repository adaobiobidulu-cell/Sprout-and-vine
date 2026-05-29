'use client'

import { useState } from 'react'
import Link from 'next/link'

const labelClass = 'block text-[13px] font-medium text-dark-text/70 mb-1.5'
const inputClass =
  'w-full border border-[rgba(47,74,58,0.2)] rounded-lg px-4 py-3 text-[14px] text-dark-text bg-white focus:outline-none focus:border-forest-green transition-colors'

const provincesEn = [
  { value: '', label: 'Select your province...' },
  { value: 'BC', label: 'BC' },
  { value: 'AB', label: 'AB' },
  { value: 'SK', label: 'SK' },
  { value: 'MB', label: 'MB' },
  { value: 'ON', label: 'ON' },
  { value: 'QC', label: 'QC' },
  { value: 'NB', label: 'NB' },
  { value: 'NS', label: 'NS' },
  { value: 'PEI', label: 'PEI' },
  { value: 'NL', label: 'NL' },
  { value: 'YT', label: 'YT' },
  { value: 'NT', label: 'NT' },
  { value: 'NU', label: 'NU' },
]

const provincesFr = [
  { value: '', label: 'Sélectionnez votre province...' },
  { value: 'BC', label: 'BC' },
  { value: 'AB', label: 'AB' },
  { value: 'SK', label: 'SK' },
  { value: 'MB', label: 'MB' },
  { value: 'ON', label: 'ON' },
  { value: 'QC', label: 'QC' },
  { value: 'NB', label: 'NB' },
  { value: 'NS', label: 'NS' },
  { value: 'PEI', label: 'PEI' },
  { value: 'NL', label: 'NL' },
  { value: 'YT', label: 'YT' },
  { value: 'NT', label: 'NT' },
  { value: 'NU', label: 'NU' },
]

const childrenCountsEn = [
  { value: '', label: 'Select enrolled count...' },
  { value: 'under-15', label: 'Under 15' },
  { value: '15-30', label: '15 to 30' },
  { value: '31-60', label: '31 to 60' },
  { value: '61-100', label: '61 to 100' },
  { value: 'over-100', label: 'Over 100' },
]

const childrenCountsFr = [
  { value: '', label: "Sélectionnez le nombre d'inscrits..." },
  { value: 'under-15', label: 'Moins de 15' },
  { value: '15-30', label: '15 à 30' },
  { value: '31-60', label: '31 à 60' },
  { value: '61-100', label: '61 à 100' },
  { value: 'over-100', label: 'Plus de 100' },
]

const copy = {
  en: {
    nameLabel: 'Your name',
    centreLabel: 'Centre name',
    provinceLabel: 'Province',
    childrenLabel: 'Number of children enrolled',
    emailLabel: 'Your email',
    phoneLabel: 'Your phone',
    optional: '(optional)',
    messageLabel: 'Message',
    messagePlaceholder: 'Anything you would like us to know before our call...',
    sending: 'Sending...',
    submit: 'Book my demo',
    errorMsg: 'Something went wrong sending your message. Please email us directly at hello@sproutandvine.ca.',
    thankYouHeading: (name: string) => `Thanks, ${name}!`,
    thankYouBody: 'We will be in touch within one business day. In the meantime, you can start exploring with a free Seeds account.',
    thankYouCta: 'Start with Seeds',
    thankYouHref: '/contact',
  },
  fr: {
    nameLabel: 'Votre nom',
    centreLabel: 'Nom du centre',
    provinceLabel: 'Province',
    childrenLabel: "Nombre d'enfants inscrits",
    emailLabel: 'Votre courriel',
    phoneLabel: 'Votre téléphone',
    optional: '(facultatif)',
    messageLabel: 'Message',
    messagePlaceholder: 'Ce que vous souhaitez nous dire avant notre appel...',
    sending: 'Envoi...',
    submit: 'Réserver ma démo',
    errorMsg: 'Un problème est survenu. Envoyez-nous un courriel à hello@sproutandvine.ca.',
    thankYouHeading: (name: string) => `Merci, ${name} !`,
    thankYouBody: 'Nous vous contacterons dans un délai d\'un jour ouvrable. En attendant, vous pouvez explorer librement avec un compte Seeds gratuit.',
    thankYouCta: 'Commencer avec Seeds',
    thankYouHref: '/fr/contact',
  },
}

export default function ContactForm({ locale = 'en' }: { locale?: 'en' | 'fr' }) {
  const [name, setName] = useState('')
  const [centerName, setCenterName] = useState('')
  const [province, setProvince] = useState('')
  const [childrenCount, setChildrenCount] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const s = copy[locale]
  const provinces = locale === 'fr' ? provincesFr : provincesEn
  const childrenCounts = locale === 'fr' ? childrenCountsFr : childrenCountsEn

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, centerName, province, childrenCount, email, phone, message }),
      })
      if (!res.ok) throw new Error('send_failed')
      setSubmitted(true)
    } catch {
      setError(s.errorMsg)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 border border-[rgba(47,74,58,0.1)]" style={{ boxShadow: '0 4px 20px rgba(47,74,58,0.08)' }}>
        <div className="text-4xl mb-5">🌱</div>
        <h2
          className="font-display font-medium text-forest-green mb-4"
          style={{ fontSize: '32px' }}
        >
          {s.thankYouHeading(name)}
        </h2>
        <p className="text-[16px] text-dark-text/65 leading-relaxed mb-8">
          {s.thankYouBody}
        </p>
        <Link
          href={s.thankYouHref}
          className="inline-block bg-forest-green text-white text-[15px] font-medium px-8 py-3.5 rounded-lg hover:bg-[#243d2f] transition-colors"
        >
          {s.thankYouCta}
        </Link>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className={labelClass}>
          {s.nameLabel}
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
          placeholder="Jane Smith"
        />
      </div>

      {/* Centre name */}
      <div>
        <label htmlFor="centerName" className={labelClass}>
          {s.centreLabel}
        </label>
        <input
          id="centerName"
          type="text"
          required
          value={centerName}
          onChange={(e) => setCenterName(e.target.value)}
          className={inputClass}
          placeholder="Bright Beginnings Child Care"
        />
      </div>

      {/* Province */}
      <div>
        <label htmlFor="province" className={labelClass}>
          {s.provinceLabel}
        </label>
        <select
          id="province"
          required
          value={province}
          onChange={(e) => setProvince(e.target.value)}
          className={inputClass}
        >
          {provinces.map((p) => (
            <option key={p.value} value={p.value} disabled={p.value === ''}>
              {p.label}
            </option>
          ))}
        </select>
      </div>

      {/* Number of children enrolled */}
      <div>
        <label htmlFor="childrenCount" className={labelClass}>
          {s.childrenLabel}
        </label>
        <select
          id="childrenCount"
          required
          value={childrenCount}
          onChange={(e) => setChildrenCount(e.target.value)}
          className={inputClass}
        >
          {childrenCounts.map((c) => (
            <option key={c.value} value={c.value} disabled={c.value === ''}>
              {c.label}
            </option>
          ))}
        </select>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClass}>
          {s.emailLabel}
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          placeholder="jane@brightbeginnings.ca"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className={labelClass}>
          {s.phoneLabel}{' '}
          <span className="text-dark-text/40 font-normal">{s.optional}</span>
        </label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={inputClass}
          placeholder="+1 (416) 555-0100"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>
          {s.messageLabel}{' '}
          <span className="text-dark-text/40 font-normal">{s.optional}</span>
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClass} h-28 resize-none`}
          placeholder={s.messagePlaceholder}
        />
      </div>

      {/* Error */}
      {error && (
        <p className="text-[13px] text-terracotta bg-terracotta/10 rounded-lg px-4 py-3 leading-relaxed">
          {error}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-forest-green text-white py-3.5 rounded-lg text-[15px] font-medium hover:bg-[#243d2f] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? s.sending : s.submit}
      </button>
    </form>
  )
}
