import type { Metadata } from 'next'
import Link from 'next/link'
import FadeIn from '@/components/fade-in'

export const metadata: Metadata = {
  title: 'Feuille de route | Sprout & Vine',
  description: "Nous construisons en public. Voici ce que nous construisons, dans quel ordre, et pourquoi.",
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">
      {children}
    </p>
  )
}

type Status = 'building' | 'next' | 'planned'

const phases: {
  phase: string
  label: string
  status: Status
  eta: string
  description: string
  items: { name: string; note?: string }[]
}[] = [
  {
    phase: 'Phase 1',
    label: 'En construction',
    status: 'building',
    eta: 'Accès fondateur: T3 2026',
    description: "La fondation. Nous construisons la plateforme de base avec notre cohorte d'opérateurs fondateurs, en itérant chaque semaine selon leurs retours directs.",
    items: [
      { name: 'Suivi des présences et entrées/sorties' },
      { name: 'Suivi des subventions PÉLCN et rapports' },
      { name: 'Rapports quotidiens et messagerie aux familles' },
      { name: 'Facturation et paiements' },
      { name: 'Profils des enfants et gestion des inscriptions' },
      { name: 'Comptes du personnel et gestion des rôles' },
      { name: 'Plateforme bilingue (FR/EN)' },
      { name: 'Données au Canada', note: 'Toutes les données sont stockées au Canada' },
    ],
  },
  {
    phase: 'Phase 2',
    label: 'Prochainement',
    status: 'next',
    eta: 'T4 2026',
    description: 'La couche famille. Tout ce qui fait que les parents se sentent vraiment connectés à la journée de leur enfant, pas seulement notifiés.',
    items: [
      { name: 'Autorisation de collecte sécurisée', note: 'Vérification photo, alerte instantanée aux parents' },
      { name: 'Application Vine pour les familles (iOS)', note: 'Android à suivre' },
      { name: 'Cercle familial', note: 'Accès basé sur les rôles pour coparents, grands-parents, nounous' },
      { name: 'Jalons et chronologie du développement' },
      { name: "Gestion des inscriptions et de la liste d'attente" },
      { name: "Dossiers d'inscription numériques avec signature électronique" },
    ],
  },
  {
    phase: 'Phase 3',
    label: 'Planifié',
    status: 'planned',
    eta: '2027',
    description: 'Croissance et profondeur. Tout ce dont les opérateurs multi-installations ont besoin, plus des intégrations qui font gagner encore plus de temps.',
    items: [
      { name: 'Tableau de bord et rapports multi-installations' },
      { name: 'Gestion du personnel entre installations' },
      { name: 'Intégrations comptables (QuickBooks, Xero)' },
      { name: 'Suivi des ratios de licence provinciale', note: 'Préchargé pour chaque province' },
      { name: "Accès à l'API pour les intégrations personnalisées" },
      { name: 'Album photo annuel généré automatiquement' },
      { name: 'Application Vine pour les familles (Android)' },
    ],
  },
]

const statusStyles: Record<Status, { dot: string; badge: string; border: string }> = {
  building: { dot: 'bg-sage-green animate-pulse', badge: 'bg-sage-green/15 text-sage-green', border: 'border-sage-green/40' },
  next: { dot: 'bg-terracotta', badge: 'bg-terracotta/10 text-terracotta', border: 'border-[rgba(47,74,58,0.15)]' },
  planned: { dot: 'bg-dark-text/20', badge: 'bg-dark-text/8 text-dark-text/45', border: 'border-[rgba(47,74,58,0.1)]' },
}

export default function FrRoadmapPage() {
  return (
    <>
      <section className="bg-cream py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Feuille de route publique</SectionLabel>
          <h1 className="font-display font-medium text-forest-green leading-[1.05] mb-6" style={{ fontSize: 'clamp(40px, 5vw, 62px)' }}>
            Nous construisons en public.<br />Aucune surprise.
          </h1>
          <p className="text-[17px] text-dark-text/65 leading-relaxed max-w-xl mx-auto mb-8">
            Voici ce que nous construisons, dans quel ordre, et pourquoi. Nous partageons cela pour que les opérateurs puissent nous tenir responsables et planifier en conséquence.
          </p>
          <p className="text-[13px] text-dark-text/40 font-medium">Dernière mise à jour: mai 2026</p>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16 px-5 md:px-8">
        <div className="max-w-3xl mx-auto space-y-10">
          {phases.map((phase, i) => {
            const s = statusStyles[phase.status]
            return (
              <FadeIn key={phase.phase} delay={i * 0.08}>
              <div className={`rounded-2xl border-2 p-7 ${s.border}`}>
                <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                  <div>
                    <div className="flex items-center gap-2.5 mb-1">
                      <div className={`w-2 h-2 rounded-full ${s.dot}`} />
                      <span className={`text-[11px] font-semibold uppercase tracking-[0.12em] px-2.5 py-0.5 rounded-full ${s.badge}`}>{phase.label}</span>
                    </div>
                    <h2 className="font-display text-[28px] font-medium text-forest-green">{phase.phase}</h2>
                  </div>
                  <span className="text-[12px] font-medium text-dark-text/45 bg-[rgba(47,74,58,0.06)] px-3 py-1.5 rounded-full">{phase.eta}</span>
                </div>
                <p className="text-[15px] text-dark-text/65 leading-relaxed mb-6">{phase.description}</p>
                <ul className="space-y-2.5">
                  {phase.items.map(item => (
                    <li key={item.name} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full bg-forest-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="#2F4A3A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </div>
                      <div>
                        <span className="text-[14px] text-dark-text/80 font-medium">{item.name}</span>
                        {item.note && <span className="text-[12px] text-dark-text/40 ml-2">{item.note}</span>}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              </FadeIn>
            )
          })}
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-forest-green rounded-2xl p-8 md:p-10">
            <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-4">Opérateurs fondateurs</p>
            <h2 className="font-display font-medium text-cream leading-[1.08] mb-4" style={{ fontSize: 'clamp(26px, 3.5vw, 36px)' }}>
              Aidez-nous à décider ce qui est construit en premier.
            </h2>
            <p className="text-[15px] text-cream/65 leading-relaxed mb-7">
              Les opérateurs fondateurs ont une contribution directe à notre feuille de route. Appels mensuels avec notre équipe, priorité sur les demandes de fonctionnalités, et accès anticipé à chaque phase.
            </p>
            <Link href="/founding" className="inline-block bg-terracotta text-white text-[14px] font-medium px-7 py-3.5 rounded-lg hover:bg-[#d4724e] transition-colors">
              Rejoindre le Programme fondateur
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
