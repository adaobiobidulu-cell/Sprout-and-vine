import Link from 'next/link'
import type { Metadata } from 'next'
import { altFr } from '@/lib/seo'
import PricingTiersClient from '@/components/pricing-tiers-client'
import JsonLd from '@/components/json-ld'
import { faqPageSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Tarification | Sprout & Vine Care',
  description:
    'Tarification basée sur les inscriptions pour les opérateurs de garde au Canada. Sept niveaux, du gratuit au sur mesure. Tarif fixe par tranche d\'inscription, sans frais par enfant. Tous les prix en dollars canadiens.',
  alternates: altFr('/fr/pricing'),
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">
      {children}
    </p>
  )
}

const faqsFr = [
  {
    q: "Que se passe-t-il si mes inscriptions dépassent le niveau actuel?",
    a: "Nous vous avertissons lorsque vous dépassez régulièrement la limite de votre niveau et nous facilitons la transition. Aucun changement ne sera facturé en cours de mois : les modifications prennent effet à votre prochaine date de facturation.",
  },
  {
    q: 'Facturez-vous par enfant ou par membre du personnel?',
    a: "Non. Sprout & Vine Care applique un tarif fixe par niveau selon la tranche d'inscription. Pas de frais par enfant, pas de frais par employé.",
  },
  {
    q: "Y a-t-il un contrat ou un engagement?",
    a: "Les forfaits mensuels n'ont aucun engagement minimal : annulez à tout moment. Les forfaits annuels sont facturés à l'avance et vous font économiser 2 mois.",
  },
  {
    q: "L'application Vine pour les familles est-elle incluse?",
    a: "Oui. L'application Vine est incluse dans tous les niveaux payants, sans frais supplémentaires.",
  },
  {
    q: 'Offrez-vous des rabais pour les organismes sans but lucratif ou les centres autochtones?',
    a: 'Oui. Contactez-nous à hello@sproutandvinecare.ca pour la tarification dédiée aux organismes sans but lucratif, coopératives et centres gérés par des communautés autochtones.',
  },
  {
    q: "Qu'est-ce que le Programme des opérateurs fondateurs?",
    a: "Les membres fondateurs obtiennent un accès anticipé à la plateforme, une tarification fondatrice permanente bloquée à vie, et une voix directe sur ce que nous construisons. Les candidatures sont ouvertes maintenant.",
  },
  {
    q: 'Supportez-vous les services de garde en milieu familial?',
    a: "Oui. Le niveau Sprout Maison est conçu spécifiquement pour les services de garde agréés en milieu familial accueillant 4 à 8 enfants. Il inclut tout ce dont vous avez besoin pour gérer votre garderie à domicile de manière professionnelle.",
  },
  {
    q: 'Mes données sont-elles stockées au Canada?',
    a: 'Oui. Résidence des données au Canada sur tous les forfaits, toujours.',
  },
  {
    q: 'La plateforme est-elle disponible en français?',
    a: "Oui. La plateforme et l'application Vine sont entièrement bilingues (FR/EN) depuis la conception, et non traduites après coup.",
  },
  {
    q: "Qu'est-ce que le PÉLCPN?",
    a: "Programme pancanadien d'apprentissage et de garde des jeunes enfants à l'échelle nationale. Notre plateforme suit et gère automatiquement votre admissibilité aux subventions, sans feuilles de calcul.",
  },
]

export default function FrenchPricingPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(faqsFr)} />

      {/* Héro */}
      <section className="bg-cream py-20 md:py-24 px-5 md:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>Tarification</SectionLabel>
          <h1
            className="font-display font-medium text-forest-green leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(38px, 5vw, 60px)' }}
          >
            Tarification selon les inscriptions.<br />Pas de frais cachés. Pas de frais par enfant.
          </h1>
          <p className="text-[16px] text-dark-text/60 leading-relaxed mb-8 max-w-xl mx-auto">
            Une tarification qui évolue avec votre centre. Que vous soyez une garderie en milieu familial avec 6 enfants ou un grand centre avec 80 enfants, vous payez un tarif fixe selon votre tranche d'inscription. Tous les prix en dollars canadiens.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/founding"
              className="inline-block bg-forest-green text-white text-[14px] font-medium px-7 py-3.5 rounded-lg hover:bg-[#243d2f] transition-colors"
            >
              Rejoindre le Programme des opérateurs fondateurs
            </Link>
            <Link
              href="/seeds"
              className="inline-block text-[14px] font-medium text-dark-text/65 border border-[rgba(47,74,58,0.22)] px-6 py-3.5 rounded-lg hover:border-[rgba(47,74,58,0.45)] transition-colors"
            >
              Explorer le centre Seeds gratuitement
            </Link>
          </div>
        </div>
      </section>

      {/* Interactif : bascule + niveaux + matrice */}
      <PricingTiersClient locale="fr" />

      {/* Garantie de tarification équitable */}
      <section className="bg-white py-16 px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="text-2xl">🍁</span>
            <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold">
              Garantie de tarification équitable
            </p>
          </div>
          <p className="text-[16px] text-dark-text/65 leading-relaxed max-w-xl mx-auto">
            La tarification évolue avec vos inscriptions, de sorte qu'une garderie en milieu familial avec 6 enfants et un centre avec 60 enfants paient toujours un tarif juste. Les niveaux sont vérifiés à l'inscription et révisés annuellement.
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
            Questions fréquentes
          </h2>
          <div className="divide-y divide-[rgba(47,74,58,0.08)]">
            {faqsFr.map(faq => (
              <div key={faq.q} className="py-6">
                <p className="text-[16px] font-semibold text-dark-text mb-2">{faq.q}</p>
                <p className="text-[15px] text-dark-text/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Barre de confiance */}
      <section className="bg-white py-12 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3">
            {[
              '🍁 Données au Canada',
              '🌐 Entièrement bilingue (FR/EN)',
              '🔒 Pas de frais par enfant',
              '↩ Annulez à tout moment',
              '🏠 Conçu pour les garderies en milieu familial aussi',
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
