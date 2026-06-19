import type { Metadata } from 'next'
import { altFr } from '@/lib/seo'
import Link from 'next/link'
import FadeIn from '@/components/fade-in'
import EmailCapture from '@/components/email-capture'

export const metadata: Metadata = {
  title: 'Feuille de route | Sprout & Vine Care',
  description: "Nous construisons en public. Voici ce que nous construisons, dans quel ordre, et pourquoi.",
  alternates: altFr('/fr/roadmap'),
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">
      {children}
    </p>
  )
}

type Status = 'building' | 'next' | 'planned'
type DevStatus = 'discovery' | 'design' | 'development' | 'beta'

const devStatusStyles: Record<DevStatus, { label: string; color: string; bg: string }> = {
  discovery: { label: 'Exploration', color: '#6EB76F', bg: 'rgba(110,183,111,0.12)' },
  design: { label: 'Conception', color: '#E2845F', bg: 'rgba(226,132,95,0.12)' },
  development: { label: 'Développement', color: '#2F4A3A', bg: 'rgba(47,74,58,0.1)' },
  beta: { label: 'Bêta', color: '#6B7FD7', bg: 'rgba(107,127,215,0.12)' },
}

const phases: {
  phase: string
  label: string
  status: Status
  eta: string
  description: string
  items: { name: string; note?: string; devStatus?: DevStatus }[]
}[] = [
  {
    phase: 'Phase 1',
    label: 'En construction',
    status: 'building',
    eta: 'Accès fondateur: T3 2026',
    description: "La fondation. Nous construisons la plateforme de base avec notre cohorte d'opérateurs fondateurs, en itérant chaque semaine selon leurs retours directs.",
    items: [
      { name: 'Suivi des présences et entrées/sorties', devStatus: 'development' },
      { name: 'Suivi des subventions PÉLCN et rapports', devStatus: 'development' },
      { name: 'Rapports quotidiens et messagerie aux familles', devStatus: 'development' },
      { name: 'Facturation et paiements', devStatus: 'development' },
      { name: 'Profils des enfants et gestion des inscriptions', devStatus: 'design' },
      { name: 'Comptes du personnel et gestion des rôles', devStatus: 'design' },
      { name: 'Autorisation de collecte sécurisée', note: 'Vérification photo, alerte instantanée aux parents', devStatus: 'design' },
      { name: 'Application Vine pour les familles (iOS)', note: 'Android à suivre', devStatus: 'discovery' },
      { name: 'Assistant IA de documentation', note: 'Aide à la rédaction de documentation et de communications', devStatus: 'discovery' },
      { name: 'Plateforme bilingue (FR/EN)', devStatus: 'development' },
      { name: 'Données au Canada', note: 'Toutes les données sont stockées au Canada', devStatus: 'development' },
    ],
  },
  {
    phase: 'Phase 2',
    label: 'Prochainement',
    status: 'next',
    eta: 'T4 2026',
    description: 'La couche famille. Tout ce qui fait que les parents se sentent vraiment connectés à la journée de leur enfant, pas seulement notifiés.',
    items: [
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
      { name: 'Profil enfant: Couche mémoire', note: 'Chronologie longitudinale complète de la garderie à l\'école primaire. Appartient à la famille, portable.' },
      { name: 'Application parent Vine: Mode souvenir', note: 'Récapitulatif annuel, exportation album photo et faits saillants des jalons.' },
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
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[14px] text-dark-text/80 font-medium">{item.name}</span>
                        {item.note && (
                          <span className="text-[12px] text-dark-text/40">{item.note}</span>
                        )}
                        {item.devStatus && (
                          <span
                            className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                            style={{
                              color: devStatusStyles[item.devStatus].color,
                              background: devStatusStyles[item.devStatus].bg,
                            }}
                          >
                            {devStatusStyles[item.devStatus].label}
                          </span>
                        )}
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
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-forest-green rounded-2xl p-8 md:p-10">
            <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-4">Opérateurs fondateurs</p>
            <h2 className="font-display font-medium text-cream leading-[1.08] mb-4" style={{ fontSize: 'clamp(26px, 3.5vw, 36px)' }}>
              Aidez-nous à décider ce qui est construit en premier.
            </h2>
            <p className="text-[15px] text-cream/65 leading-relaxed mb-7">
              Les opérateurs fondateurs ont une contribution directe à notre feuille de route. Appels mensuels avec notre équipe, priorité sur les demandes de fonctionnalités, et accès anticipé à chaque phase. La feuille de route ci-dessus reflète ce que nous avons entendu jusqu'à présent.
            </p>
            <Link href="/fr/founding" className="inline-block bg-terracotta text-white text-[14px] font-medium px-7 py-3.5 rounded-lg hover:bg-[#d4724e] transition-colors">
              Rejoindre le Programme fondateur
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-[rgba(47,74,58,0.08)]" style={{ boxShadow: '0 2px 16px rgba(47,74,58,0.06)' }}>
            <EmailCapture
              heading="Pas encore prêt? Restez informé."
              subheading="Nous partageons ce que nous construisons, ce que nous livrons, et quand nous sommes prêts pour de nouveaux opérateurs."
              source="fr-roadmap-page"
              buttonText="Recevoir les mises à jour"
              emailPlaceholder="votre@centre.ca"
              consentLabel="J'accepte de recevoir des mises à jour de Sprout & Vine. Je peux me désabonner à tout moment."
              successTitle="Vous êtes sur la liste."
              successSubtitle="Nous vous contacterons au fil de notre progression."
            />
          </div>
        </div>
      </section>

      {/* Horizon vision */}
      <section className="bg-cream py-16 md:py-20 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-4">
            À l'horizon
          </p>
          <h2 className="font-display font-medium text-forest-green leading-[1.08] mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 40px)' }}>
            La vision à long terme.
          </h2>
          <p className="text-[15px] text-dark-text/55 leading-relaxed mb-10">
            Sprout &amp; Vine est conçu pour accompagner un enfant bien au-delà de la garderie. Voici où nous allons, non pas comme un engagement, mais comme un signal de ce que nous croyons que cette plateforme deviendra.
          </p>
          <div className="space-y-4">
            {[
              { icon: '🧒', title: 'Profil enfant: Couche mémoire', desc: 'Chaque jalon, photo et document depuis la garderie, appartenant à la famille, portable pour toujours.' },
              { icon: '🏫', title: 'Extension à l\'école primaire', desc: 'Le dossier suit l\'enfant jusqu\'à l\'école. Les familles déjà sur la plateforme. Les écoles les rejoignent.' },
              { icon: '🤝', title: 'Communauté familiale vérifiée', desc: 'Des activités locales et de vraies connections entre familles des mêmes écoles et centres.' },
              { icon: '🛡️', title: 'Sprout Space', desc: 'Un espace sécurisé, supervisé par les parents, où les enfants peuvent se connecter avec leurs vrais amis d\'école.' },
              { icon: '🧠', title: 'Couche intelligence IA', desc: 'Des tendances, des célébrations et des opportunités mis en évidence à travers l\'historique éducatif complet d\'un enfant.' },
            ].map(item => (
              <div key={item.title} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-[rgba(47,74,58,0.08)]" style={{ boxShadow: '0 2px 12px rgba(47,74,58,0.05)' }}>
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="text-[14px] font-semibold text-dark-text mb-1">{item.title}</p>
                  <p className="text-[13px] text-dark-text/55 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Changelog note */}
      <section className="bg-white py-12 px-5 md:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[15px] text-dark-text/55 leading-relaxed">
            Au fil de la livraison des fonctionnalités, elles sont consignées dans notre{' '}
            <Link href="/changelog" className="text-forest-green font-medium underline underline-offset-2 hover:text-dark-text transition-colors">
              journal des modifications
            </Link>
            . Suivez notre construction en public sur le{' '}
            <Link href="/blog" className="text-forest-green font-medium underline underline-offset-2 hover:text-dark-text transition-colors">
              blogue
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}
