'use client'

import { useState } from 'react'
import Link from 'next/link'

const PROVINCES_EN = [
  'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador',
  'Northwest Territories', 'Nova Scotia', 'Nunavut', 'Ontario', 'Prince Edward Island',
  'Quebec', 'Saskatchewan', 'Yukon',
]

const PROVINCES_FR = [
  'Alberta', 'Colombie-Britannique', 'Île-du-Prince-Édouard', 'Manitoba', 'Nouveau-Brunswick',
  'Nouvelle-Écosse', 'Nunavut', 'Ontario', 'Québec', 'Saskatchewan',
  'Terre-Neuve-et-Labrador', 'Territoires du Nord-Ouest', 'Yukon',
]

const inputClass =
  'w-full border border-[rgba(47,74,58,0.2)] rounded-lg px-4 py-2.5 text-[14px] text-dark-text bg-white focus:outline-none focus:border-forest-green transition-colors'
const labelClass = 'block text-[13px] font-semibold text-dark-text mb-1.5'

/*
 * Parent interest form (improvement brief 2.2). Collects only what the
 * brief allows: email, city, province, optional children count, one
 * consent checkbox unchecked by default. Consent copy uses fuller forms
 * (no contractions) per the site's copy rules for consent surfaces.
 * Confirmation is a plain thank-you: no urgency, no queue position.
 */
export default function FamilyInterestForm({ isFr = false }: { isFr?: boolean }) {
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [province, setProvince] = useState('')
  const [children, setChildren] = useState('')
  const [consent, setConsent] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const provinces = isFr ? PROVINCES_FR : PROVINCES_EN

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!consent) {
      setError(
        isFr
          ? 'Veuillez cocher la case ci-dessus pour confirmer que vous souhaitez recevoir un courriel.'
          : 'Please check the box above to confirm you would like to receive an email.'
      )
      return
    }
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/family-interest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, city, province, children, lang: isFr ? 'fr' : 'en' }),
      })
      if (!res.ok) throw new Error('send_failed')
      setSubmitted(true)
    } catch {
      setError(
        isFr
          ? 'Une erreur est survenue. Écrivez-nous directement à hello@sproutandvinecare.ca.'
          : 'Something went wrong. Email us directly at hello@sproutandvinecare.ca.'
      )
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <p className="text-[17px] font-semibold text-forest-green mb-2">
          {isFr ? 'Merci. Vous êtes sur la liste.' : 'Thank you. You are on the list.'}
        </p>
        <p className="text-[14px] text-dark-text/55 leading-relaxed max-w-sm mx-auto">
          {isFr
            ? 'Nous vous écrirons quand des services de garde près de chez vous rejoindront Sprout & Vine Care. Rien d’autre.'
            : 'We will email you when childcare centres near you join Sprout & Vine Care. Nothing else.'}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="sm:col-span-2">
          <label htmlFor="fam-email" className={labelClass}>
            {isFr ? 'Votre courriel' : 'Your email'}
          </label>
          <input
            id="fam-email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="fam-city" className={labelClass}>
            {isFr ? 'Ville' : 'City'}
          </label>
          <input
            id="fam-city"
            type="text"
            required
            autoComplete="address-level2"
            value={city}
            onChange={e => setCity(e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="fam-province" className={labelClass}>
            {isFr ? 'Province ou territoire' : 'Province or territory'}
          </label>
          <select
            id="fam-province"
            required
            value={province}
            onChange={e => setProvince(e.target.value)}
            className={inputClass}
          >
            <option value="" disabled>
              {isFr ? 'Choisir…' : 'Select…'}
            </option>
            {provinces.map(p => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="fam-children" className={labelClass}>
            {isFr ? 'Nombre d’enfants ayant besoin d’une place (optionnel)' : 'Number of children needing care (optional)'}
          </label>
          <input
            id="fam-children"
            type="number"
            min={1}
            max={10}
            inputMode="numeric"
            value={children}
            onChange={e => setChildren(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      {/* Consent: unchecked by default, fuller forms, links to privacy policy */}
      <div className="flex items-start gap-2.5 mt-6 mb-5">
        <input
          id="fam-consent"
          type="checkbox"
          checked={consent}
          onChange={e => setConsent(e.target.checked)}
          className="mt-0.5 w-4 h-4 flex-shrink-0 accent-[#2F4A3A]"
        />
        <label htmlFor="fam-consent" className="text-[12px] text-dark-text/55 leading-relaxed cursor-pointer">
          {isFr ? (
            <>
              Envoyez-moi un courriel quand des services de garde près de chez moi rejoindront Sprout &amp; Vine Care. Je peux me désabonner à tout moment.{' '}
              <Link href="/fr/privacy" className="underline underline-offset-2 hover:text-forest-green transition-colors">
                Politique de confidentialité
              </Link>
            </>
          ) : (
            <>
              Email me when childcare centres near me join Sprout &amp; Vine Care. I can unsubscribe at any time.{' '}
              <Link href="/privacy" className="underline underline-offset-2 hover:text-forest-green transition-colors">
                Privacy Policy
              </Link>
            </>
          )}
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto bg-forest-green text-white text-[14px] font-medium px-7 py-3 rounded-lg hover:bg-[#243d2f] transition-colors disabled:opacity-60"
      >
        {loading ? '…' : isFr ? 'Me tenir au courant' : 'Keep me posted'}
      </button>

      {error && <p className="text-[12px] text-terracotta mt-3">{error}</p>}
    </form>
  )
}
