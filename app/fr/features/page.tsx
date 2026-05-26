import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fonctionnalités | Sprout & Vine',
  description: 'Présences, subventions PÉLCN, autorisation de collecte sécurisée, rapports quotidiens, messagerie familiale et facturation — tout en un pour les garderies canadiennes.',
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">{children}</p>
}

const features = [
  {
    label: 'Présences et Ratios',
    headline: 'Présences en un geste. Ratios en temps réel.',
    body: "Enregistrez les arrivées et les départs en deux tapotements. Le tableau de bord affiche vos ratios personnel-enfants en temps réel afin que vous soyez toujours conforme aux exigences provinciales.",
    bullets: ["Suivi des présences par glissement", "Alertes de ratio en temps réel", "Données d'historique et de tendance", "Rapports d'assiduité mensuels"],
  },
  {
    label: 'Subventions PÉLCN',
    headline: "Gestion des subventions sans feuilles de calcul.",
    body: "Sprout & Vine calcule automatiquement votre admissibilité aux subventions PÉLCN, réconcilie les paiements et génère les rapports requis pour votre province.",
    bullets: ['Calcul automatique des subventions', 'Réconciliation des paiements', 'Rapports prêts pour la soumission', 'Prise en charge de toutes les provinces'],
  },
  {
    label: 'Autorisation de Collecte',
    headline: 'Libération sécurisée. Tranquillité assurée.',
    body: "L'autorisation de collecte intelligente permet aux parents d'autoriser des adultes de confiance via l'application. Le personnel vérifie l'identité par photo avant chaque libération.",
    bullets: ['Autorisations par l\'application', 'Vérification par photo', 'Journal d\'audit complet', 'Alertes instantanées'],
  },
  {
    label: 'Rapports Quotidiens',
    headline: 'Rapports en moins de 2 minutes.',
    body: "Les éducateurs complètent les rapports quotidiens à partir de modèles simples. Les familles reçoivent une mise à jour riche avec des photos, des repas et des activités dès que le rapport est envoyé.",
    bullets: ['Modèles à remplir rapidement', 'Photos et notes directement dans l\'application', 'Envoi automatique aux familles', 'Historique consultable'],
  },
  {
    label: 'Facturation',
    headline: 'Facturation automatique. Paiements à temps.',
    body: "Générez des factures, appliquez automatiquement les subventions PÉLCN et recevez les paiements en ligne. Finies les relances manuelles.",
    bullets: ['Facturation automatique mensuelle', 'Application des subventions intégrée', 'Paiements en ligne', 'Reçus générés automatiquement'],
  },
  {
    label: "Messagerie Familiale",
    headline: "Communication directe. Sans votre numéro personnel.",
    body: "Toutes les communications avec les familles passent par l'application Vine. Les parents peuvent rejoindre leur équipe, poser des questions ou recevoir des alertes importantes — sans jamais vous écrire à 23h.",
    bullets: ["Messagerie dans l'application", "Annonces de groupe", "Alertes d'urgence", "Aucun numéro personnel partagé"],
  },
]

export default function FrFeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream pt-20 pb-16 px-5 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel>Fonctionnalités</SectionLabel>
          <h1 className="font-display font-medium text-forest-green leading-[1.05] mb-6" style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}>
            Tout ce dont votre centre a besoin,<br />
            <span className="italic text-terracotta">dans une seule plateforme.</span>
          </h1>
          <p className="text-[17px] text-dark-text/60 leading-relaxed max-w-2xl mx-auto mb-10">
            Conçu spécifiquement pour les opérateurs canadiens de services de garde, avec le suivi PÉLCN, le support bilingue et la conformité provinciale intégrés dès le premier jour.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="bg-forest-green text-white text-[14px] font-medium px-7 py-3.5 rounded-lg hover:bg-[#243d2f] transition-colors">
              Commencer l'essai gratuit
            </Link>
            <Link href="/fr/pricing" className="text-[14px] font-medium text-forest-green hover:underline">
              Voir les tarifs
            </Link>
          </div>
        </div>
      </section>

      {/* Feature sections */}
      {features.map((f, i) => (
        <section key={f.label} className={`py-16 md:py-20 px-5 md:px-8 ${i % 2 === 0 ? 'bg-white' : 'bg-cream'}`}>
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
              <SectionLabel>{f.label}</SectionLabel>
              <h2 className="font-display font-medium text-forest-green leading-[1.1] mb-5" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}>
                {f.headline}
              </h2>
              <p className="text-[15px] text-dark-text/65 leading-relaxed mb-8">{f.body}</p>
              <ul className="space-y-3">
                {f.bullets.map(b => (
                  <li key={b} className="flex items-start gap-3">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                      <circle cx="9" cy="9" r="9" fill="#2F4A3A" fillOpacity="0.1" />
                      <path d="M5.5 9l2.5 2.5 4.5-5" stroke="#2F4A3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[14px] text-dark-text/70 leading-snug">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`flex justify-center ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
              <div className="w-full max-w-[420px] rounded-2xl bg-forest-green/[0.04] border border-forest-green/10 h-64 flex items-center justify-center">
                <span className="text-5xl opacity-30 select-none">✦</span>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-forest-green py-20 px-5 md:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-cream font-medium leading-[1.08] mb-5" style={{ fontSize: 'clamp(34px, 4vw, 52px)' }}>
            Prêt à simplifier votre centre?
          </h2>
          <p className="text-cream/65 text-[16px] leading-relaxed mb-10">
            14 jours gratuits sur Sprout. Aucune carte de crédit requise. Annulez à tout moment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="bg-terracotta text-white text-[14px] font-medium px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity">
              Commencer l'essai gratuit
            </Link>
            <Link href="/fr/pricing" className="text-cream/75 text-[14px] font-medium hover:text-cream transition-colors">
              Voir les tarifs
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
