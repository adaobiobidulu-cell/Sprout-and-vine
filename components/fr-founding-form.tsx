'use client'

import { useState } from 'react'
import Link from 'next/link'

const labelClass = 'block text-[13px] font-medium text-dark-text/70 mb-1.5'
const inputClass =
  'w-full border border-[rgba(47,74,58,0.2)] rounded-lg px-4 py-3 text-[14px] text-dark-text bg-white focus:outline-none focus:border-forest-green transition-colors'

const provinces = [
  { value: '', label: 'Sélectionnez votre province ou territoire...' },
  { value: 'BC', label: 'Colombie-Britannique' },
  { value: 'AB', label: 'Alberta' },
  { value: 'SK', label: 'Saskatchewan' },
  { value: 'MB', label: 'Manitoba' },
  { value: 'ON', label: 'Ontario' },
  { value: 'QC', label: 'Québec' },
  { value: 'NB', label: 'Nouveau-Brunswick' },
  { value: 'NS', label: 'Nouvelle-Écosse' },
  { value: 'PEI', label: 'Île-du-Prince-Édouard' },
  { value: 'NL', label: 'Terre-Neuve-et-Labrador' },
  { value: 'YT', label: 'Yukon' },
  { value: 'NT', label: 'Territoires du Nord-Ouest' },
  { value: 'NU', label: 'Nunavut' },
]

const centerTypes = [
  { value: '', label: 'Sélectionnez le type...' },
  { value: 'licensed-centre', label: 'Centre de garde agréé' },
  { value: 'home-provider', label: 'Service de garde en milieu familial agréé' },
  { value: 'aspiring', label: 'Opérateur aspirant (pas encore ouvert)' },
  { value: 'multi-location', label: 'Organisation multi-installations' },
]

export default function FrFoundingForm() {
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
          centerName: centerName || 'Opérateur aspirant',
          province,
          childrenCount: centerType || 'Non spécifié',
          email,
          message: `Source: Programme des opérateurs fondateurs (FR)\nType de centre: ${centerType}\nConsentement marketing: ${marketingConsent ? 'Oui' : 'Non'}`,
        }),
      })
      if (!res.ok) throw new Error('send_failed')
      fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          firstName: name.split(' ')[0],
          source: 'founding-application-fr',
        }),
      }).catch(() => {})
      setSubmitted(true)
    } catch {
      setError('Une erreur s\'est produite lors de la soumission de votre candidature. Veuillez nous envoyer un courriel directement à hello@sproutandvinecare.ca.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="text-5xl mb-6">🌱</div>
        <h2 className="font-display text-[32px] font-medium text-forest-green mb-4">
          Candidature reçue.
        </h2>
        <p className="text-[16px] text-dark-text/65 leading-relaxed mb-6">
          Merci, {name}. Nous examinons toutes les candidatures fondatrices personnellement et vous contacterons dans les 2 à 3 jours ouvrables.
        </p>
        <p className="text-[14px] text-dark-text/45">
          Des questions? Écrivez-nous à{' '}
          <a href="mailto:hello@sproutandvinecare.ca" className="text-forest-green underline underline-offset-2">
            hello@sproutandvinecare.ca
          </a>
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="fr-name" className={labelClass}>Votre nom</label>
        <input
          id="fr-name"
          type="text"
          required
          value={name}
          onChange={e => setName(e.target.value)}
          className={inputClass}
          placeholder="Marie Tremblay"
        />
      </div>

      <div>
        <label htmlFor="fr-centerName" className={labelClass}>
          Nom du centre ou de l'organisation{' '}
          <span className="text-dark-text/40 font-normal">(si pas encore ouvert, votre nom prévu)</span>
        </label>
        <input
          id="fr-centerName"
          type="text"
          value={centerName}
          onChange={e => setCenterName(e.target.value)}
          className={inputClass}
          placeholder="Les Petits Explorateurs"
        />
      </div>

      <div>
        <label htmlFor="fr-centerType" className={labelClass}>Type d'opérateur</label>
        <select
          id="fr-centerType"
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
        <label htmlFor="fr-province" className={labelClass}>Province ou territoire</label>
        <select
          id="fr-province"
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
        <label htmlFor="fr-email" className={labelClass}>Votre courriel</label>
        <input
          id="fr-email"
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          className={inputClass}
          placeholder="marie@lespetitsexplorateurs.ca"
        />
      </div>

      {error && (
        <p className="text-[13px] text-terracotta bg-terracotta/10 rounded-lg px-4 py-3 leading-relaxed">
          {error}
        </p>
      )}

      <div className="flex items-start gap-3 pt-1">
        <input
          id="fr-marketing-consent"
          type="checkbox"
          checked={marketingConsent}
          onChange={e => setMarketingConsent(e.target.checked)}
          className="mt-0.5 w-4 h-4 flex-shrink-0"
        />
        <label htmlFor="fr-marketing-consent" className="text-[12px] text-dark-text/55 leading-relaxed cursor-pointer">
          J'accepte de recevoir des mises à jour sur la plateforme Sprout &amp; Vine, le Programme des opérateurs fondateurs et les annonces connexes. Je peux me désabonner à tout moment.
        </label>
      </div>

      <p className="text-[11px] text-dark-text/40 leading-relaxed">
        En soumettant cette candidature, vous confirmez avoir lu notre{' '}
        <Link href="/privacy" className="underline underline-offset-2 hover:text-forest-green transition-colors">
          Politique de confidentialité
        </Link>
        . Sprout &amp; Vine utilisera vos informations pour traiter votre candidature et vous contacter au sujet du Programme des opérateurs fondateurs.
      </p>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-forest-green text-white py-4 rounded-lg text-[15px] font-medium hover:bg-[#243d2f] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? 'Envoi en cours...' : 'Postuler au Programme fondateur'}
      </button>
    </form>
  )
}
