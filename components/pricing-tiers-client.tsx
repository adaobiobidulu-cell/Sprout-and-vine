'use client'

import { useState } from 'react'
import Link from 'next/link'

function Check() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mx-auto" aria-hidden="true">
      <path d="M3 8l3.5 3.5 7-7" stroke="#6EB76F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Dash() {
  return <span className="text-dark-text/20 text-sm font-light select-none block text-center" aria-hidden="true">–</span>
}

const tiers = [
  {
    id: 'seeds',
    name: 'Seeds',
    emoji: '🌱',
    enrollment: 'Up to 3 children',
    forLabel: 'Pre-licensed and aspiring operators',
    tagline: 'Plan your centre before you open the doors.',
    monthly: null as number | null,
    annual: null as number | null,
    isFree: true,
    cta: { label: 'Get started free', href: '/founding' },
    highlight: false,
    badge: null as string | null,
  },
  {
    id: 'sprout-home',
    name: 'Sprout Home',
    emoji: '🏡',
    enrollment: '4–8 children',
    forLabel: 'Licensed family home daycares',
    tagline: 'Everything you need to run your home daycare beautifully.',
    monthly: 39,
    annual: 33,
    isFree: false,
    cta: { label: 'Join the Founding Program', href: '/founding' },
    highlight: false,
    badge: null as string | null,
  },
  {
    id: 'sprout-starter',
    name: 'Sprout Starter',
    emoji: '🌿',
    enrollment: '9–20 children',
    forLabel: 'Small licensed centres',
    tagline: 'Your centre is growing. Your software should keep up.',
    monthly: 69,
    annual: 58,
    isFree: false,
    cta: { label: 'Join the Founding Program', href: '/founding' },
    highlight: false,
    badge: null as string | null,
  },
  {
    id: 'sprout-grow',
    name: 'Sprout Grow',
    emoji: '🌳',
    enrollment: '21–40 children',
    forLabel: 'Growing centres, 1 to 2 classrooms',
    tagline: 'More children, more rooms, one calm dashboard.',
    monthly: 109,
    annual: 92,
    isFree: false,
    cta: { label: 'Join the Founding Program', href: '/founding' },
    highlight: false,
    badge: null as string | null,
  },
  {
    id: 'vine',
    name: 'Vine',
    emoji: '🍃',
    enrollment: '41–75 children',
    forLabel: 'Established licensed centres',
    tagline: 'The full platform for established Canadian centres.',
    monthly: 149,
    annual: 125,
    isFree: false,
    cta: { label: 'Join the Founding Program', href: '/founding' },
    highlight: true,
    badge: 'Most Popular',
  },
  {
    id: 'canopy',
    name: 'Canopy',
    emoji: '🌲',
    enrollment: '76–120 children',
    forLabel: 'Large centres and multi-room operations',
    tagline: 'Large-centre power without enterprise complexity.',
    monthly: 199,
    annual: 167,
    isFree: false,
    cta: { label: 'Join the Founding Program', href: '/founding' },
    highlight: false,
    badge: null as string | null,
  },
  {
    id: 'grove',
    name: 'Grove',
    emoji: '🌾',
    enrollment: '120+ or multi-site',
    forLabel: 'Networks, chains, multi-location operators',
    tagline: 'One dashboard. Every location. Total clarity.',
    monthly: null as number | null,
    annual: null as number | null,
    isFree: false,
    isCustom: true,
    cta: { label: 'Book a demo', href: '/contact' },
    highlight: false,
    badge: null as string | null,
  },
]

const featureRows = [
  { feature: 'Business planning tools', cols: [true, true, true, true, true, true, true] },
  { feature: 'Provincial licensing checklists', cols: [true, true, true, true, true, true, true] },
  { feature: 'CWELCC readiness guide', cols: [true, true, true, true, true, true, true] },
  { feature: 'Resource library', cols: [true, true, true, true, true, true, true] },
  { feature: 'Operator community (private Slack group)', cols: [true, true, true, true, true, true, true] },
  { feature: 'Attendance tracking', cols: [false, true, true, true, true, true, true] },
  { feature: 'Daily reports and parent messaging', cols: [false, true, true, true, true, true, true] },
  { feature: 'Vine parent app', cols: [false, true, true, true, true, true, true] },
  { feature: 'Billing and invoicing', cols: [false, true, true, true, true, true, true] },
  { feature: 'CWELCC subsidy tracking', cols: [false, true, true, true, true, true, true] },
  { feature: 'Smart Pickup Authorization', cols: [false, true, true, true, true, true, true] },
  { feature: 'Enrollment and waitlist management', cols: [false, true, true, true, true, true, true] },
  { feature: 'Bilingual EN/FR', cols: [false, true, true, true, true, true, true] },
  { feature: 'Staff scheduling', cols: [false, false, true, true, true, true, true] },
  { feature: 'Ratio tracking and alerts', cols: [false, false, true, true, true, true, true] },
  { feature: 'Child development milestones', cols: [false, false, true, true, true, true, true] },
  { feature: 'Incident reports', cols: [false, false, false, true, true, true, true] },
  { feature: 'Custom forms and documentation', cols: [false, false, false, true, true, true, true] },
  { feature: 'Priority email support', cols: [false, false, false, false, true, true, true] },
  { feature: 'Multi-room dashboard', cols: [false, false, false, false, true, true, true] },
  { feature: 'Advanced CWELCC reporting', cols: [false, false, false, false, true, true, true] },
  { feature: 'Dedicated onboarding call', cols: [false, false, false, false, false, true, true] },
  { feature: 'Multi-location dashboard', cols: [false, false, false, false, false, false, true] },
  { feature: 'Cross-location reporting', cols: [false, false, false, false, false, false, true] },
  { feature: 'Custom branding', cols: [false, false, false, false, false, false, true] },
  { feature: 'API access', cols: [false, false, false, false, false, false, true] },
  { feature: 'Phone support', cols: [false, false, false, false, false, false, true] },
]

const featureRowsFr = [
  { feature: "Outils de planification d'entreprise", cols: [true, true, true, true, true, true, true] },
  { feature: 'Listes de vérification provinciales', cols: [true, true, true, true, true, true, true] },
  { feature: 'Guide de préparation au PÉLCPN', cols: [true, true, true, true, true, true, true] },
  { feature: 'Bibliothèque de ressources', cols: [true, true, true, true, true, true, true] },
  { feature: 'Communauté des opérateurs (Slack privé)', cols: [true, true, true, true, true, true, true] },
  { feature: 'Suivi des présences', cols: [false, true, true, true, true, true, true] },
  { feature: 'Rapports quotidiens et messagerie', cols: [false, true, true, true, true, true, true] },
  { feature: 'Application Vine pour les familles', cols: [false, true, true, true, true, true, true] },
  { feature: 'Facturation et paiements', cols: [false, true, true, true, true, true, true] },
  { feature: 'Suivi des subventions PÉLCPN', cols: [false, true, true, true, true, true, true] },
  { feature: 'Autorisation de ramassage intelligent', cols: [false, true, true, true, true, true, true] },
  { feature: "Inscriptions et liste d'attente", cols: [false, true, true, true, true, true, true] },
  { feature: 'Bilingue FR/EN', cols: [false, true, true, true, true, true, true] },
  { feature: 'Planification du personnel', cols: [false, false, true, true, true, true, true] },
  { feature: 'Suivi des ratios et alertes', cols: [false, false, true, true, true, true, true] },
  { feature: "Jalons de développement de l'enfant", cols: [false, false, true, true, true, true, true] },
  { feature: "Rapports d'incidents", cols: [false, false, false, true, true, true, true] },
  { feature: 'Formulaires et documentation personnalisés', cols: [false, false, false, true, true, true, true] },
  { feature: 'Assistance courriel prioritaire', cols: [false, false, false, false, true, true, true] },
  { feature: 'Tableau de bord multi-salles', cols: [false, false, false, false, true, true, true] },
  { feature: 'Rapports PÉLCPN avancés', cols: [false, false, false, false, true, true, true] },
  { feature: "Appel d'intégration dédié", cols: [false, false, false, false, false, true, true] },
  { feature: 'Tableau de bord multi-installations', cols: [false, false, false, false, false, false, true] },
  { feature: 'Rapports croisés entre installations', cols: [false, false, false, false, false, false, true] },
  { feature: 'Image de marque personnalisée', cols: [false, false, false, false, false, false, true] },
  { feature: 'Accès API', cols: [false, false, false, false, false, false, true] },
  { feature: 'Support téléphonique', cols: [false, false, false, false, false, false, true] },
]

const uiStrings = {
  en: {
    monthly: 'Monthly',
    annual: 'Annual',
    twoMonthsFree: '2 months free',
    free: 'Free',
    custom: 'Custom',
    billedAnnually: 'billed annually',
    compareAll: 'Compare all features',
    getStarted: 'Get started',
    applyNow: 'Apply now',
    bookDemo: 'Book demo',
  },
  fr: {
    monthly: 'Mensuel',
    annual: 'Annuel',
    twoMonthsFree: '2 mois gratuits',
    free: 'Gratuit',
    custom: 'Sur mesure',
    billedAnnually: 'facturé annuellement',
    compareAll: 'Comparer toutes les fonctionnalités',
    getStarted: 'Commencer',
    applyNow: 'Postuler',
    bookDemo: 'Réserver',
  },
}

const tiersFr = tiers.map(tier => ({
  ...tier,
  enrollment: tier.id === 'seeds' ? "Jusqu'à 3 enfants"
    : tier.id === 'sprout-home' ? '4 à 8 enfants'
    : tier.id === 'sprout-starter' ? '9 à 20 enfants'
    : tier.id === 'sprout-grow' ? '21 à 40 enfants'
    : tier.id === 'vine' ? '41 à 75 enfants'
    : tier.id === 'canopy' ? '76 à 120 enfants'
    : '120+ enfants ou multi-sites',
  tagline: tier.id === 'seeds' ? 'Planifiez votre centre avant d\'ouvrir les portes.'
    : tier.id === 'sprout-home' ? 'Tout ce qu\'il faut pour gérer votre garderie en milieu familial.'
    : tier.id === 'sprout-starter' ? 'Votre centre grandit. Vos outils aussi.'
    : tier.id === 'sprout-grow' ? 'Plus d\'enfants, plus de salles, un seul tableau de bord.'
    : tier.id === 'vine' ? 'La plateforme complète pour les centres canadiens établis.'
    : tier.id === 'canopy' ? 'La puissance d\'un grand centre, sans la complexité.'
    : 'Un tableau de bord. Chaque installation. Clarté totale.',
  cta: {
    href: tier.cta.href,
    label: tier.id === 'seeds' ? 'Commencer gratuitement'
      : tier.id === 'grove' ? 'Réserver une démo'
      : 'Rejoindre le programme fondateur',
  },
}))

export default function PricingTiersClient({ locale = 'en' }: { locale?: 'en' | 'fr' }) {
  const [isAnnual, setIsAnnual] = useState(false)
  const s = uiStrings[locale]
  const activeTiers = locale === 'fr' ? tiersFr : tiers
  const activeFeatureRows = locale === 'fr' ? featureRowsFr : featureRows

  return (
    <>
      {/* Billing toggle */}
      <section className="bg-cream pb-6 px-5 md:px-8">
        <div className="max-w-7xl mx-auto flex justify-center">
          <div className="flex bg-[rgba(47,74,58,0.08)] rounded-lg p-1">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 text-[13px] font-medium rounded-md transition-all ${
                !isAnnual ? 'bg-white text-dark-text shadow-sm' : 'text-dark-text/50 hover:text-dark-text/75'
              }`}
            >
              {s.monthly}
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 text-[13px] font-medium rounded-md transition-all flex items-center gap-2 ${
                isAnnual ? 'bg-white text-dark-text shadow-sm' : 'text-dark-text/50 hover:text-dark-text/75'
              }`}
            >
              {s.annual}
              <span className="text-[10px] font-semibold text-sage-green bg-sage-green/15 px-2 py-0.5 rounded-full whitespace-nowrap">
                {s.twoMonthsFree}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Tier cards */}
      <section className="bg-cream pb-16 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="overflow-x-auto -mx-5 md:-mx-8 lg:mx-0 pb-2">
            <div className="flex gap-3 px-5 md:px-8 lg:px-0 min-w-max lg:min-w-0 lg:grid lg:grid-cols-7">
              {activeTiers.map(tier => (
                <div
                  key={tier.id}
                  className={`bg-white rounded-2xl p-5 flex flex-col w-[190px] lg:w-auto relative`}
                  style={{
                    border: tier.highlight ? '2px solid #2F4A3A' : '1px solid rgba(47,74,58,0.1)',
                    boxShadow: tier.highlight
                      ? '0 12px 40px rgba(47,74,58,0.14)'
                      : '0 4px 24px rgba(47,74,58,0.06)',
                    marginTop: tier.badge ? '12px' : '0',
                  }}
                >
                  {tier.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-terracotta text-white text-[10px] font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                        {tier.badge}
                      </span>
                    </div>
                  )}

                  <div className="text-xl mb-2">{tier.emoji}</div>
                  <h3 className="font-display text-[17px] font-medium text-forest-green leading-tight mb-1">
                    {tier.name}
                  </h3>
                  <p className="text-[10px] text-dark-text/40 mb-3 leading-snug">{tier.enrollment}</p>

                  <div className="mb-3 min-h-[52px] flex flex-col justify-center">
                    {tier.isFree ? (
                      <p className="font-display text-[26px] font-medium text-forest-green">{s.free}</p>
                    ) : (tier as { isCustom?: boolean }).isCustom ? (
                      <p className="font-display text-[20px] font-medium text-forest-green">{s.custom}</p>
                    ) : (
                      <>
                        <div className="flex items-baseline gap-0.5">
                          <span className="text-[11px] text-dark-text/50 font-medium">CAD</span>
                          <span className="font-display text-[26px] font-medium text-forest-green">
                            ${isAnnual ? tier.annual : tier.monthly}
                          </span>
                          <span className="text-[12px] text-dark-text/45">/mo</span>
                        </div>
                        {isAnnual && (
                          <p className="text-[10px] text-dark-text/40 mt-0.5">{s.billedAnnually}</p>
                        )}
                      </>
                    )}
                  </div>

                  <p className="text-[11px] text-dark-text/55 leading-relaxed mb-4 flex-1">{tier.tagline}</p>

                  <Link
                    href={tier.cta.href}
                    className={`block text-center text-[12px] font-medium px-4 py-2.5 rounded-lg transition-colors ${
                      tier.highlight
                        ? 'bg-forest-green text-white hover:bg-[#243d2f]'
                        : 'text-forest-green border border-forest-green/35 hover:bg-forest-green/5'
                    }`}
                  >
                    {tier.cta.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="bg-cream pt-4 pb-20 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-display font-medium text-forest-green text-center mb-8"
            style={{ fontSize: 'clamp(26px, 3vw, 38px)' }}
          >
            {s.compareAll}
          </h2>

          <div className="overflow-x-auto -mx-5 md:-mx-8 lg:mx-0">
            <div
              className="bg-white overflow-hidden md:rounded-2xl"
              style={{ boxShadow: '0 4px 32px rgba(47,74,58,0.09)', minWidth: '900px' }}
            >
              {/* Header */}
              <div
                className="grid border-b border-[rgba(47,74,58,0.08)]"
                style={{ gridTemplateColumns: '200px repeat(7, 1fr)' }}
              >
                <div className="p-4" />
                {activeTiers.map(tier => (
                  <div key={tier.id} className="p-3 text-center border-l border-[rgba(47,74,58,0.07)]">
                    <p className="font-display text-[13px] font-medium text-forest-green leading-snug">
                      {tier.name}
                    </p>
                    <p className="text-[10px] text-dark-text/35 mt-0.5">
                      {tier.isFree
                        ? s.free
                        : (tier as { isCustom?: boolean }).isCustom
                        ? s.custom
                        : `$${isAnnual ? tier.annual : tier.monthly}/mo`}
                    </p>
                  </div>
                ))}
              </div>

              {/* Rows */}
              {activeFeatureRows.map((row, i) => (
                <div
                  key={row.feature}
                  className="grid border-b border-[rgba(47,74,58,0.05)]"
                  style={{
                    gridTemplateColumns: '200px repeat(7, 1fr)',
                    background: i % 2 === 0 ? 'white' : 'rgba(247,242,232,0.45)',
                  }}
                >
                  <div className="p-3 pl-5">
                    <p className="text-[12px] text-dark-text/70">{row.feature}</p>
                  </div>
                  {row.cols.map((val, j) => (
                    <div
                      key={j}
                      className="p-3 flex items-center justify-center border-l border-[rgba(47,74,58,0.05)]"
                    >
                      {val ? <Check /> : <Dash />}
                    </div>
                  ))}
                </div>
              ))}

              {/* CTA row */}
              <div
                className="grid border-t-2 border-[rgba(47,74,58,0.1)] bg-cream"
                style={{ gridTemplateColumns: '200px repeat(7, 1fr)' }}
              >
                <div className="p-4" />
                {activeTiers.map(tier => (
                  <div key={tier.id} className="p-3 text-center border-l border-[rgba(47,74,58,0.07)]">
                    <Link
                      href={tier.cta.href}
                      className="block text-[11px] font-medium text-forest-green border border-forest-green/35 px-2 py-2 rounded-lg hover:bg-forest-green hover:text-white transition-colors"
                    >
                      {tier.isFree ? s.getStarted : (tier as { isCustom?: boolean }).isCustom ? s.bookDemo : s.applyNow}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
