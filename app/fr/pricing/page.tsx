import Link from 'next/link'
import FadeIn from '@/components/fade-in'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tarification | Sprout & Vine',
  description: 'Tarification Sprout & Vine. Trois niveaux conçus pour grandir avec vous. Les membres fondateurs bloquent leur tarif avant le lancement public.',
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
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
      <path d="M3 8l3.5 3.5 7-7" stroke="#6EB76F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Dash() {
  return <span className="text-dark-text/20 text-sm font-light select-none">–</span>
}

const tableRows = [
  { feature: "Outils de planification d'entreprise",   seeds: true,  sprout: true,  vine: true  },
  { feature: 'Listes de vérification provinciales',    seeds: true,  sprout: true,  vine: true  },
  { feature: 'Guide de préparation au PÉLCN',          seeds: true,  sprout: true,  vine: true  },
  { feature: 'Bibliothèque de ressources',             seeds: true,  sprout: true,  vine: true  },
  { feature: 'Suivi des présences',                    seeds: false, sprout: true,  vine: true  },
  { feature: 'Rapports quotidiens et messagerie',      seeds: false, sprout: true,  vine: true  },
  { feature: 'Application Vine pour les familles',     seeds: false, sprout: true,  vine: true  },
  { feature: 'Facturation et paiements',               seeds: false, sprout: true,  vine: true  },
  { feature: 'Suivi des subventions PÉLCN',            seeds: false, sprout: true,  vine: true  },
  { feature: 'Autorisation de collecte sécurisée',     seeds: false, sprout: true,  vine: true  },
  { feature: "Inscriptions et liste d'attente",        seeds: false, sprout: true,  vine: true  },
  { feature: 'Bilingue (FR/EN)',                       seeds: false, sprout: true,  vine: true  },
  { feature: 'Comptes du personnel illimités',         seeds: false, sprout: true,  vine: true  },
  { feature: 'Assistance par courriel',                seeds: false, sprout: true,  vine: true  },
  { feature: 'Tableau de bord multi-installations',    seeds: false, sprout: false, vine: true  },
  { feature: 'Rapports croisés entre installations',   seeds: false, sprout: false, vine: true  },
  { feature: 'Assistance prioritaire',                 seeds: false, sprout: false, vine: true  },
  { feature: 'Intégration dédiée',                     seeds: false, sprout: false, vine: true  },
]

const faqFr = [
  { q: 'Quand la tarification sera-t-elle disponible?', a: 'Nous partageons les détails de tarification avec les opérateurs fondateurs lors de leur appel de candidature. La tarification publique sera annoncée au lancement. Les membres fondateurs bloquent leur tarif avant cela.' },
  { q: "Qu'est-ce que le Programme des opérateurs fondateurs?", a: "Les membres fondateurs obtiennent un accès anticipé à la plateforme, une tarification fondatrice permanente et une voix directe dans ce que nous construisons. Les candidatures sont ouvertes maintenant." },
  { q: 'Supportez-vous les services de garde en milieu familial?', a: 'Oui. Les services de garde en milieu familial agréés sont un cas d\'utilisation de première classe. Nous avons un niveau dédié conçu pour les fournisseurs en milieu familial.' },
  { q: 'Mes données sont-elles stockées au Canada?', a: 'Oui. Résidence des données au Canada sur tous les forfaits, toujours.' },
  { q: 'La plateforme est-elle disponible en français?', a: "Oui. La plateforme et l'application Vine sont entièrement bilingues (FR/EN) depuis le début, pas traduits après coup." },
  { q: "Qu'est-ce que le PÉLCN?", a: "Programme d'apprentissage et de garde des jeunes enfants à l'échelle du Canada. Notre plateforme suit et gère automatiquement votre admissibilité aux subventions, sans feuilles de calcul." },
]

export default function FrenchPricingPage() {
  return (
    <>
      {/* Héro */}
      <section className="bg-cream py-20 md:py-24 px-5 md:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>Tarification</SectionLabel>
          <h1 className="font-display font-medium text-forest-green leading-[1.05] mb-6" style={{ fontSize: 'clamp(40px, 5.5vw, 64px)' }}>
            Trois niveaux. Pas de frais cachés.<br />Pas de frais par enfant.
          </h1>
          <p className="text-[16px] text-dark-text/60 leading-relaxed mb-8 max-w-xl mx-auto">
            Les détails de tarification sont partagés avec les opérateurs fondateurs lors de leur candidature. La tarification publique sera annoncée au lancement. Tous les prix en dollars canadiens.
          </p>
          <Link
            href="/founding"
            className="inline-block bg-forest-green text-white text-[14px] font-medium px-7 py-3.5 rounded-lg hover:bg-[#243d2f] transition-colors"
          >
            Rejoindre le Programme des opérateurs fondateurs
          </Link>
        </div>
      </section>

      {/* Aperçu des niveaux */}
      <section className="bg-cream pb-16 px-5 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">

            <FadeIn delay={0.05}>
            <div className="bg-white rounded-2xl p-7 border border-[rgba(47,74,58,0.1)]" style={{ boxShadow: '0 4px 24px rgba(47,74,58,0.06)' }}>
              <div className="text-2xl mb-3">🌱</div>
              <h3 className="font-display text-[26px] font-medium text-forest-green mb-1">Seeds</h3>
              <span className="text-[11px] uppercase tracking-wide font-semibold text-dark-text/40 border border-[rgba(47,74,58,0.15)] px-2.5 py-1 rounded-full">
                Gratuit pour toujours
              </span>
              <p className="text-[13px] text-dark-text/55 mt-4 mb-6 leading-relaxed">
                Pour les futurs opérateurs. Planifiez votre centre, complétez les listes de vérification et préparez-vous avant le premier jour.
              </p>
              <Link href="/founding" className="block text-center text-[14px] font-medium text-forest-green border-2 border-forest-green px-5 py-3 rounded-lg hover:bg-forest-green hover:text-white transition-colors">
                Commencer gratuitement
              </Link>
            </div>
            </FadeIn>

            <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl p-7 relative" style={{ border: '2px solid #2F4A3A', boxShadow: '0 16px 48px rgba(47,74,58,0.16)' }}>
              <div className="text-2xl mb-3">🌿</div>
              <h3 className="font-display text-[26px] font-medium text-forest-green mb-1">Sprout</h3>
              <p className="text-[13px] font-medium text-terracotta mb-4">Tarification fondatrice disponible</p>
              <p className="text-[13px] text-dark-text/55 mb-6 leading-relaxed">
                Pour les centres agréés et les fournisseurs en milieu familial. Présences, facturation, communication, collecte sécurisée, et plus encore.
              </p>
              <Link href="/founding" className="block text-center text-[14px] font-medium text-cream bg-forest-green px-5 py-3 rounded-lg hover:bg-[#243d2f] transition-colors">
                Demander l'accès fondateur
              </Link>
            </div>
            </FadeIn>

            <FadeIn delay={0.15}>
            <div className="bg-white rounded-2xl p-7 border border-[rgba(47,74,58,0.1)]" style={{ boxShadow: '0 4px 24px rgba(47,74,58,0.06)' }}>
              <div className="text-2xl mb-3">🍃</div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-display text-[26px] font-medium text-forest-green">Vine</h3>
                <span className="text-[10px] font-semibold text-dark-text/40 border border-[rgba(47,74,58,0.15)] px-2 py-0.5 rounded-full">Multi-installations</span>
              </div>
              <p className="text-[13px] font-medium text-terracotta mb-4">Tarification fondatrice disponible</p>
              <p className="text-[13px] text-dark-text/55 mb-6 leading-relaxed">
                Pour les organisations multi-installations. Un tableau de bord. Visibilité complète sur chaque installation.
              </p>
              <Link href="/founding" className="block text-center text-[14px] font-medium text-forest-green border-2 border-forest-green px-5 py-3 rounded-lg hover:bg-forest-green hover:text-white transition-colors">
                Demander l'accès fondateur
              </Link>
            </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Tableau comparatif */}
      <section className="bg-cream py-20 px-5 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-medium text-forest-green text-center mb-12" style={{ fontSize: 'clamp(32px, 4vw, 50px)' }}>
            Comparer les niveaux
          </h2>
          <div className="overflow-x-auto -mx-5 md:mx-0">
          <div className="min-w-[580px] bg-white md:rounded-2xl overflow-hidden" style={{ boxShadow: '0 4px 32px rgba(47,74,58,0.09)' }}>
            <div className="grid grid-cols-4 border-b border-[rgba(47,74,58,0.08)]">
              <div className="p-5" />
              {[
                { name: 'Seeds', sub: 'Gratuit', color: '#2F4A3A' },
                { name: 'Sprout', sub: 'Tarif fondateur', color: '#6EB76F' },
                { name: 'Vine', sub: 'Tarif fondateur', color: '#E2845F' },
              ].map(col => (
                <div key={col.name} className="p-5 text-center border-l border-[rgba(47,74,58,0.07)]">
                  <p className="font-display text-[20px] font-medium" style={{ color: col.color }}>{col.name}</p>
                  <p className="text-[11px] text-dark-text/40 mt-0.5">{col.sub}</p>
                </div>
              ))}
            </div>
            {tableRows.map((row, i) => (
              <div key={row.feature} className="grid grid-cols-4 border-b border-[rgba(47,74,58,0.05)]" style={{ background: i % 2 === 0 ? 'white' : 'rgba(247,242,232,0.45)' }}>
                <div className="p-4 pl-5"><p className="text-[12px] md:text-[13px] text-dark-text/75">{row.feature}</p></div>
                {[row.seeds, row.sprout, row.vine].map((val, j) => (
                  <div key={j} className="p-4 flex items-center justify-center border-l border-[rgba(47,74,58,0.05)]">
                    {val ? <Check /> : <Dash />}
                  </div>
                ))}
              </div>
            ))}
            <div className="grid grid-cols-4 border-t-2 border-[rgba(47,74,58,0.12)] bg-cream">
              <div className="p-5" />
              {[
                { label: 'Gratuit', btn: 'Commencer', href: '/founding' },
                { label: 'Tarif fondateur', btn: 'Postuler', href: '/founding' },
                { label: 'Tarif fondateur', btn: 'Postuler', href: '/founding' },
              ].map((col, i) => (
                <div key={i} className="p-5 text-center border-l border-[rgba(47,74,58,0.07)]">
                  <p className="text-[13px] font-semibold text-dark-text mb-3">{col.label}</p>
                  <Link href={col.href} className="block text-[13px] font-medium text-forest-green border border-forest-green px-4 py-2 rounded-lg hover:bg-forest-green hover:text-white transition-colors">
                    {col.btn}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
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

      {/* Badges */}
      <section className="bg-cream py-12 px-5 md:px-8">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center items-center gap-x-6 gap-y-3">
          {['🍁 Données au Canada', '🌐 Entièrement bilingue (FR/EN)', '🔒 Pas de frais par enfant', '↩ Annulez à tout moment'].map(badge => (
            <span key={badge} className="text-[13px] font-medium text-dark-text/50">{badge}</span>
          ))}
        </div>
      </section>
    </>
  )
}
