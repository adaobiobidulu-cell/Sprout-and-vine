'use client'

import { useState } from 'react'
import Link from 'next/link'

function ROIEmailShare({ hours, value, roi, tier, locale }: {
  hours: number; value: number; roi: string; tier: { name: string; price: number } | null; locale: 'en' | 'fr'
}) {
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState('')

  const label = locale === 'fr' ? 'Partager cette estimation' : 'Share this estimate'
  const hint = locale === 'fr'
    ? 'Voulez-vous partager ceci avec votre conseil ou votre propriétaire?'
    : 'Want to share this with your board or owner?'
  const btnText = locale === 'fr' ? "M'envoyer l'estimation" : 'Email me this estimate'
  const fine = locale === 'fr'
    ? 'Nous vous enverrons un résumé de vos résultats. Un seul courriel.'
    : 'We will send you a summary of your results. One email, that is it.'
  const consentLabel = locale === 'fr'
    ? "J'accepte de recevoir ce courriel de Sprout & Vine."
    : 'I agree to receive this email from Sprout & Vine.'
  const doneMsg = locale === 'fr' ? 'Envoyé. Vérifiez votre boîte de réception.' : 'Sent. Check your inbox.'

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!consent) { setErr(locale === 'fr' ? 'Veuillez cocher la case.' : 'Please check the box.'); return }
    setLoading(true)
    setErr('')
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: email.split('@')[0],
          centerName: 'ROI Calculator result',
          province: 'N/A',
          childrenCount: 'N/A',
          email,
          message: [
            `Source: roi-calculator email-share`,
            `Locale: ${locale}`,
            `Annual hours saved: ${hours}`,
            `Dollar value: $${value.toLocaleString()}`,
            tier ? `Tier: ${tier.name} at CAD $${tier.price}/mo` : 'Tier: Seeds (free)',
            tier ? `ROI: ${roi}x` : '',
            'Marketing consent: Yes',
          ].filter(Boolean).join('\n'),
        }),
      })
      setSent(true)
    } catch {
      setErr(locale === 'fr' ? 'Erreur. Réessayez.' : 'Something went wrong. Try again.')
    } finally {
      setLoading(false)
    }
  }

  if (sent) return <p className="text-[13px] text-sage-green font-medium">{doneMsg}</p>

  return (
    <div className="border-t border-[rgba(47,74,58,0.08)] pt-5 mt-5">
      <p className="text-[12px] text-dark-text/40 uppercase tracking-wide mb-2">{label}</p>
      <p className="text-[13px] text-dark-text/55 mb-3">{hint}</p>
      <form onSubmit={submit}>
        <div className="flex gap-2 mb-2">
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="your@centre.ca"
            className="flex-1 border border-[rgba(47,74,58,0.2)] rounded-lg px-3 py-2 text-[13px] bg-white focus:outline-none focus:border-forest-green transition-colors"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-forest-green/10 text-forest-green text-[12px] font-medium px-4 py-2 rounded-lg hover:bg-forest-green/20 transition-colors disabled:opacity-50 whitespace-nowrap flex-shrink-0"
          >
            {loading ? '...' : btnText}
          </button>
        </div>
        <div className="flex items-start gap-2 mb-1">
          <input
            id="roi-share-consent"
            type="checkbox"
            checked={consent}
            onChange={e => setConsent(e.target.checked)}
            className="mt-0.5 w-3 h-3 flex-shrink-0"
          />
          <label htmlFor="roi-share-consent" className="text-[11px] text-dark-text/40 leading-relaxed cursor-pointer">
            {consentLabel}
          </label>
        </div>
        <p className="text-[11px] text-dark-text/35">{fine}</p>
        {err && <p className="text-[11px] text-terracotta mt-1">{err}</p>}
      </form>
    </div>
  )
}

function Slider({
  label,
  value,
  min,
  max,
  unit = '',
  onChange,
}: {
  label: string
  value: number
  min: number
  max: number
  unit?: string
  onChange: (v: number) => void
}) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div>
      <div className="flex justify-between items-baseline mb-2.5">
        <label className="text-[13px] font-medium text-cream/75 leading-snug max-w-[200px]">{label}</label>
        <span className="text-[15px] font-semibold text-cream ml-4 whitespace-nowrap">
          {value}{unit}
        </span>
      </div>
      <div className="relative h-1.5 rounded-full" style={{ background: 'rgba(247,242,232,0.15)' }}>
        <div
          className="absolute left-0 top-0 h-full rounded-full bg-sage-green transition-all duration-75"
          style={{ width: `${pct}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={e => onChange(parseInt(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer"
          style={{ height: '24px', marginTop: '-9px' }}
        />
      </div>
    </div>
  )
}

function getTierMonthlyPrice(children: number): { name: string; price: number } | null {
  if (children <= 3) return null
  if (children <= 8) return { name: 'Sprout Home', price: 39 }
  if (children <= 20) return { name: 'Sprout Starter', price: 69 }
  if (children <= 40) return { name: 'Sprout Grow', price: 109 }
  if (children <= 75) return { name: 'Vine', price: 149 }
  if (children <= 120) return { name: 'Canopy', price: 199 }
  return { name: 'Grove', price: 199 }
}

const t = {
  en: {
    label: 'Calculate Your Savings',
    heading: <>How much time is<br />admin costing you?</>,
    subheading: 'Most centres reclaim 8 to 12 hours per week with Sprout & Vine.',
    slider1: 'Children enrolled',
    slider2: 'Staff members',
    slider3: 'Hours/week on billing & invoicing',
    slider4: 'Hours/week on reports & communication',
    currentlySpend: 'You currently spend',
    onBilling: 'on billing and reporting',
    saves: 'Sprout & Vine saves approximately',
    worth: (h: number) => `That is ${h} hours/year, worth`,
    at: 'at $25/hr',
    roiLabel: (tier: { name: string; price: number } | null) =>
      tier ? `Your ROI at CAD $${tier.price}/mo (${tier.name})` : 'Free tier (Seeds)',
    roiReturn: 'return',
    cta: 'Apply to the Founding Operators Program',
    ctaHref: '/founding',
    hrsWeek: 'hrs/week',
  },
  fr: {
    label: 'Calculez vos économies',
    heading: <>Combien vous coûte<br />l'administration?</>,
    subheading: 'La plupart des centres récupèrent 8 à 12 heures par semaine avec Sprout et Vine.',
    slider1: 'Enfants inscrits',
    slider2: 'Membres du personnel',
    slider3: 'Heures/semaine sur la facturation',
    slider4: 'Heures/semaine sur les rapports et communications',
    currentlySpend: 'Vous consacrez actuellement',
    onBilling: 'à la facturation et aux rapports',
    saves: 'Sprout et Vine vous fait économiser environ',
    worth: (h: number) => `Soit ${h} heures/an, valant`,
    at: 'à 25 $/h',
    roiLabel: (tier: { name: string; price: number } | null) =>
      tier ? `Votre ROI à ${tier.price} $ CA/mois (${tier.name})` : 'Niveau gratuit (Seeds)',
    roiReturn: 'de retour',
    cta: 'Rejoindre le Programme des opérateurs fondateurs',
    ctaHref: '/founding',
    hrsWeek: 'h/semaine',
  },
}

export default function ROICalculator({ locale = 'en' }: { locale?: 'en' | 'fr' }) {
  const [children, setChildren] = useState(30)
  const [staff, setStaff] = useState(8)
  const [billing, setBilling] = useState(6)
  const [reports, setReports] = useState(5)
  const s = t[locale]

  const weeklyHours = billing * 0.75 + reports * 0.8
  const annualHours = Math.round(weeklyHours * 52)
  const dollarValue = Math.round(annualHours * 25)
  const tier = getTierMonthlyPrice(children)
  const roi = tier ? (dollarValue / (tier.price * 12)).toFixed(1) : null
  const totalAdmin = billing + reports

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">
          {s.label}
        </p>
        <h2 className="font-display font-medium text-cream leading-[1.08] mb-4" style={{ fontSize: 'clamp(40px, 5vw, 56px)' }}>
          {s.heading}
        </h2>
        <p className="text-cream/55 text-[16px]">
          {s.subheading}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="flex flex-col gap-8">
          <Slider label={s.slider1} value={children} min={5} max={150} onChange={setChildren} />
          <Slider label={s.slider2} value={staff} min={1} max={30} onChange={setStaff} />
          <Slider label={s.slider3} value={billing} min={1} max={20} unit="h" onChange={setBilling} />
          <Slider label={s.slider4} value={reports} min={1} max={15} unit="h" onChange={setReports} />
        </div>

        <div className="bg-white rounded-2xl p-7 shadow-xl" style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.18)' }}>
          <div className="space-y-5">
            <div>
              <p className="text-[12px] text-dark-text/40 uppercase tracking-wide mb-1.5">{s.currentlySpend}</p>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-[38px] font-medium text-forest-green leading-none">~{totalAdmin}</span>
                <span className="text-[16px] text-dark-text/40"> {s.hrsWeek}</span>
              </div>
              <p className="text-[12px] text-dark-text/35 mt-1">{s.onBilling}</p>
            </div>

            <div className="border-t border-[rgba(47,74,58,0.08)] pt-5">
              <p className="text-[12px] text-dark-text/40 uppercase tracking-wide mb-1.5">{s.saves}</p>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-[38px] font-medium text-sage-green leading-none">{weeklyHours.toFixed(1)}</span>
                <span className="text-[16px] text-dark-text/40"> {s.hrsWeek}</span>
              </div>
            </div>

            <div className="border-t border-[rgba(47,74,58,0.08)] pt-5">
              <p className="text-[12px] text-dark-text/40 uppercase tracking-wide mb-1.5">
                {s.worth(annualHours)}
              </p>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-[38px] font-medium text-terracotta leading-none">
                  ${dollarValue.toLocaleString()}
                </span>
                <span className="text-[16px] text-dark-text/40"> {s.at}</span>
              </div>
            </div>

            {roi && (
              <div className="rounded-xl p-4 flex items-center justify-between" style={{ background: 'rgba(47,74,58,0.05)' }}>
                <div>
                  <p className="text-[11px] text-dark-text/45 mb-0.5">{s.roiLabel(tier)}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-[28px] font-medium text-forest-green leading-none">{roi}x</span>
                    <span className="text-[13px] text-dark-text/40">{s.roiReturn}</span>
                  </div>
                </div>
                <div className="text-2xl">🌿</div>
              </div>
            )}
          </div>

          <Link
            href={s.ctaHref}
            className="mt-6 block bg-terracotta text-white text-[14px] font-medium px-6 py-3.5 rounded-lg text-center hover:bg-[#d4724e] transition-colors"
          >
            {s.cta}
          </Link>

          <ROIEmailShare
            hours={annualHours}
            value={dollarValue}
            roi={roi ?? '0'}
            tier={tier}
            locale={locale}
          />
        </div>
      </div>
    </div>
  )
}
