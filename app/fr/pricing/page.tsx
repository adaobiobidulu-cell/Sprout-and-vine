import Link from 'next/link'
import ROICalculator from '@/components/roi-calculator'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tarification | Sprout & Vine',
  description: 'Tarification simple et équitable pour les garderies canadiennes. Seeds (gratuit), Sprout (69 $ CA/mois), Vine (149 $ CA/mois par installation). Essai de 14 jours sans carte de crédit.',
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">
      {children}
    </p>
  )
}

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
      <path d="M2.5 7l3 3 6-6" stroke="#6EB76F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function TableCheck() {
  return (
    <div className="flex justify-center">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="10" fill="rgba(110,183,111,0.12)" />
        <path d="M5.5 10l3 3 6-6" stroke="#6EB76F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

function TableDash() {
  return <span className="text-dark-text/20 text-sm font-light flex justify-center select-none">–</span>
}

const seedsFeatures = [
  "Outils de planification d'entreprise",
  'Listes de vérification provinciales',
  'Guide de préparation au PÉLCN',
  'Bibliothèque de ressources',
  'Accès à la communauté',
]

const sproutFeatures = [
  'Tout dans Seeds',
  'Comptes du personnel illimités',
  'Suivi des présences',
  'Rapports quotidiens et messagerie',
  "L'application Vine pour les familles",
  'Facturation et facturation',
  'Suivi des subventions PÉLCN',
  'Autorisation de collecte sécurisée',
  "Gestion des inscriptions et de la liste d'attente",
  'Bilingue (FR/EN)',
  'Assistance par courriel',
]

const vineFeatures = [
  'Tout dans Sprout',
  'Tableau de bord multi-installations',
  'Rapports croisés entre installations',
  'Assistance prioritaire',
  'Intégration dédiée',
  'Options de marque personnalisée',
  "Accès à l'API",
]

const tableRows = [
  { feature: "Outils de planification d'entreprise", seeds: true, sprout: true, vine: true },
  { feature: 'Listes de vérification provinciales', seeds: true, sprout: true, vine: true },
  { feature: 'Guide de préparation au PÉLCN', seeds: true, sprout: true, vine: true },
  { feature: 'Suivi des présences', seeds: false, sprout: true, vine: true },
  { feature: 'Rapports quotidiens', seeds: false, sprout: true, vine: true },
  { feature: 'Messagerie avec les familles', seeds: false, sprout: true, vine: true },
  { feature: 'Application Vine', seeds: false, sprout: true, vine: true },
  { feature: 'Facturation et paiements', seeds: false, sprout: true, vine: true },
  { feature: 'Suivi des subventions PÉLCN', seeds: false, sprout: true, vine: true },
  { feature: 'Autorisation de collecte sécurisée', seeds: false, sprout: true, vine: true },
  { feature: "Inscriptions et liste d'attente", seeds: false, sprout: true, vine: true },
  { feature: 'Bilingue (FR/EN)', seeds: false, sprout: true, vine: true },
  { feature: 'Comptes du personnel illimités', seeds: false, sprout: true, vine: true },
  { feature: 'Assistance par courriel', seeds: false, sprout: true, vine: true },
  { feature: 'Tableau de bord multi-installations', seeds: false, sprout: false, vine: true },
  { feature: 'Rapports croisés', seeds: false, sprout: false, vine: true },
  { feature: 'Assistance prioritaire', seeds: false, sprout: false, vine: true },
  { feature: 'Intégration dédiée', seeds: false, sprout: false, vine: true },
  { feature: "Accès à l'API", seeds: false, sprout: false, vine: true },
]

const faqFr = [
  { q: 'Y a-t-il un essai gratuit?', a: 'Oui. 14 jours sur Sprout sans carte de crédit. Annulez à tout moment.' },
  { q: 'Puis-je changer de forfait?', a: 'Oui. Passez à un forfait supérieur ou inférieur à tout moment. Les modifications prennent effet au prochain cycle de facturation.' },
  { q: 'Supportez-vous les services de garde en milieu familial?', a: 'Oui. Les services de garde en milieu familial agréés bénéficient de Sprout à 39 $ CA/mois.' },
  { q: 'Mes données sont-elles stockées au Canada?', a: 'Oui. Résidence des données au Canada sur tous les forfaits, toujours.' },
  { q: 'La plateforme est-elle disponible en français?', a: "Oui. La plateforme et l'application Vine sont entièrement bilingues (FR/EN)." },
  { q: "Qu'est-ce que le PÉLCN?", a: "Programme d'apprentissage et de garde des jeunes enfants à l'échelle du Canada. Notre plateforme suit et gère automatiquement votre admissibilité aux subventions, sans feuilles de calcul." },
]

export default function FrenchPricingPage() {
  return (
    <>
      {/* Héro */}
      <section className="bg-cream py-20 md:py-24 px-5 md:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>Tarification Simple et Équitable</SectionLabel>
          <h1 className="font-display font-medium text-forest-green leading-[1.05] mb-5" style={{ fontSize: 'clamp(40px, 5.5vw, 64px)' }}>
            Pas de frais cachés.<br />Pas de frais par enfant.
          </h1>
          <p className="text-[16px] text-dark-text/55 leading-relaxed">
            Tous les prix en dollars canadiens. Essai de 14 jours sur Sprout. Sans carte de crédit.
          </p>
        </div>
      </section>

      {/* Cartes de tarification */}
      <section className="bg-cream px-5 md:px-8 pb-24">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          {/* Seeds */}
          <div className="bg-white rounded-2xl p-7 border border-[rgba(47,74,58,0.1)]" style={{ boxShadow: '0 4px 24px rgba(47,74,58,0.06)' }}>
            <div className="mb-6">
              <div className="text-2xl mb-3">🌱</div>
              <h3 className="font-display text-[28px] font-medium text-forest-green mb-1">Seeds</h3>
              <span className="text-[11px] uppercase tracking-wide font-semibold text-dark-text/40 border border-[rgba(47,74,58,0.15)] px-2.5 py-1 rounded-full">
                Gratuit pour toujours
              </span>
              <div className="mt-5">
                <span className="font-display text-[40px] font-medium text-forest-green">Gratuit</span>
              </div>
              <p className="text-[13px] text-dark-text/50 mt-1">Pour les futurs opérateurs de garderies</p>
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
              "Quand vous serez prêt à ouvrir, Sprout vous attendra."
            </p>
            <Link href="/fr/contact" className="block text-center text-[14px] font-medium text-forest-green border-2 border-forest-green px-5 py-3 rounded-lg hover:bg-forest-green hover:text-white transition-colors">
              Commencer gratuitement
            </Link>
          </div>

          {/* Sprout */}
          <div className="bg-white rounded-2xl p-7 relative" style={{ border: '2px solid #2F4A3A', boxShadow: '0 16px 48px rgba(47,74,58,0.16)' }}>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-forest-green text-cream text-[11px] font-semibold px-4 py-1 rounded-full">Le plus populaire</span>
            </div>
            <div className="mb-6">
              <div className="text-2xl mb-3">🌿</div>
              <h3 className="font-display text-[28px] font-medium text-forest-green mb-1">Sprout</h3>
              <div className="mt-5">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-[40px] font-medium text-forest-green">69 $ CA</span>
                  <span className="text-[14px] text-dark-text/50">/mois</span>
                </div>
                <p className="text-[12px] text-dark-text/40 mt-0.5">39 $ CA/mois pour les fournisseurs en milieu familial agréés</p>
              </div>
              <div className="mt-2 flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-sage-green" />
                <p className="text-[12px] text-sage-green font-medium">Essai de 14 jours, sans carte de crédit</p>
              </div>
              <p className="text-[13px] text-dark-text/50 mt-1">Pour les centres agréés et les fournisseurs en milieu familial</p>
            </div>
            <ul className="space-y-3 mb-7">
              {sproutFeatures.map(f => (
                <li key={f} className="flex items-start gap-2.5">
                  <Check />
                  <span className="text-[13.5px] text-dark-text/70">{f}</span>
                </li>
              ))}
            </ul>
            <Link href="/fr/contact" className="block text-center text-[14px] font-medium text-cream bg-forest-green px-5 py-3 rounded-lg hover:bg-[#243d2f] transition-colors">
              Commencer l'essai gratuit
            </Link>
          </div>

          {/* Vine */}
          <div className="bg-white rounded-2xl p-7 border border-[rgba(47,74,58,0.1)]" style={{ boxShadow: '0 4px 24px rgba(47,74,58,0.06)' }}>
            <div className="mb-6">
              <div className="text-2xl mb-3">🍃</div>
              <h3 className="font-display text-[28px] font-medium text-forest-green mb-1">Vine</h3>
              <span className="text-[11px] uppercase tracking-wide font-semibold text-dark-text/40 border border-[rgba(47,74,58,0.15)] px-2.5 py-1 rounded-full">
                Multi-installations
              </span>
              <div className="mt-5">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-[40px] font-medium text-forest-green">149 $ CA</span>
                  <span className="text-[14px] text-dark-text/50">/mois</span>
                </div>
                <p className="text-[12px] text-dark-text/40 mt-0.5">par installation</p>
              </div>
              <p className="text-[13px] text-dark-text/50 mt-1">Pour les opérateurs multi-installations</p>
            </div>
            <ul className="space-y-3 mb-7">
              {vineFeatures.map(f => (
                <li key={f} className="flex items-start gap-2.5">
                  <Check />
                  <span className="text-[13.5px] text-dark-text/70">{f}</span>
                </li>
              ))}
            </ul>
            <Link href="/fr/contact" className="block text-center text-[14px] font-medium text-forest-green border-2 border-forest-green px-5 py-3 rounded-lg hover:bg-forest-green hover:text-white transition-colors">
              Prendre rendez-vous
            </Link>
          </div>
        </div>

        <div className="text-center mt-10 space-y-2">
          <p className="text-[13px] text-dark-text/45">
            Garantie de tarification équitable: nous vérifions le type de permis et les inscriptions pour assurer l'équité pour tous.
          </p>
          <p className="text-[13px] text-dark-text/40">
            🔒 Conforme SOC 2 · Données au Canada · Essai de 14 jours
          </p>
        </div>
      </section>

      {/* Tableau comparatif */}
      <section className="bg-cream py-20 px-5 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-medium text-forest-green text-center mb-12" style={{ fontSize: 'clamp(32px, 4vw, 50px)' }}>
            Comparer les forfaits
          </h2>
          <div className="overflow-x-auto -mx-5 md:mx-0">
          <div className="min-w-[580px] bg-white md:rounded-2xl overflow-hidden" style={{ boxShadow: '0 4px 32px rgba(47,74,58,0.09)' }}>
            <div className="grid grid-cols-4 border-b border-[rgba(47,74,58,0.1)]">
              <div className="p-5" />
              {[
                { name: 'Seeds', sub: 'Gratuit', color: '#2F4A3A' },
                { name: 'Sprout', sub: '69 $/mois', color: '#6EB76F' },
                { name: 'Vine', sub: '149 $/mois', color: '#E2845F' },
              ].map(col => (
                <div key={col.name} className="p-5 text-center border-l border-[rgba(47,74,58,0.07)]">
                  <p className="font-display text-[20px] font-medium" style={{ color: col.color }}>{col.name}</p>
                  <p className="text-[12px] text-dark-text/40 mt-0.5">{col.sub}</p>
                </div>
              ))}
            </div>
            {tableRows.map((row, i) => (
              <div key={row.feature} className="grid grid-cols-4 border-b border-[rgba(47,74,58,0.05)]" style={{ background: i % 2 === 0 ? 'white' : 'rgba(247,242,232,0.45)' }}>
                <div className="p-4 pl-5"><p className="text-[12px] md:text-[13px] text-dark-text/75">{row.feature}</p></div>
                {[row.seeds, row.sprout, row.vine].map((val, j) => (
                  <div key={j} className="p-4 flex items-center justify-center border-l border-[rgba(47,74,58,0.05)]">
                    {val ? <TableCheck /> : <TableDash />}
                  </div>
                ))}
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Calculateur ROI */}
      <section className="py-20 px-5 md:px-8" style={{ background: '#2F4A3A' }}>
        <ROICalculator />
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-medium text-forest-green text-center mb-12" style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>
            Questions fréquentes
          </h2>
          <div className="divide-y divide-[rgba(47,74,58,0.08)]">
            {faqFr.map(item => (
              <div key={item.q} className="py-6">
                <p className="text-[16px] font-semibold text-dark-text mb-2">{item.q}</p>
                <p className="text-[15px] text-dark-text/60 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Badges de confiance */}
      <section className="bg-cream py-12 px-5 md:px-8">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center items-center gap-x-6 gap-y-3">
          {['🔒 Conforme SOC 2', '🍁 Données au Canada', '✓ Essai de 14 jours', '💳 Sans carte de crédit', '↩ Annulez à tout moment'].map(badge => (
            <span key={badge} className="text-[13px] font-medium text-dark-text/50">{badge}</span>
          ))}
        </div>
      </section>
    </>
  )
}
