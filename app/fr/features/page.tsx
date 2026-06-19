import type { Metadata } from 'next'
import { altFr } from '@/lib/seo'
import Link from 'next/link'
import EmailCapture from '@/components/email-capture'

export const metadata: Metadata = {
  title: 'Fonctionnalités | Sprout & Vine Care',
  description: 'Présences, subventions PÉLCN, autorisation de collecte sécurisée, rapports quotidiens, messagerie familiale et facturation, tout en un pour les garderies canadiennes.',
  alternates: altFr('/fr/features'),
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
    body: "Toutes les communications avec les familles passent par l'application Vine. Les parents peuvent rejoindre leur équipe, poser des questions ou recevoir des alertes importantes, sans jamais vous écrire à 23h.",
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
            <Link href="/fr/contact" className="bg-forest-green text-white text-[14px] font-medium px-7 py-3.5 rounded-lg hover:bg-[#243d2f] transition-colors">
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

      {/* ── PROFIL ENFANT ─────────────────────────────────────────── */}
      <section className="bg-cream py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>Disponible au lancement</SectionLabel>
            <h2
              className="font-display font-medium text-forest-green leading-[1.05] mb-5"
              style={{ fontSize: 'clamp(30px, 3.5vw, 48px)' }}
            >
              Chaque enfant. Un profil.<br />Un dossier qui grandit avec eux.
            </h2>
            <p className="text-[16px] text-dark-text/65 leading-relaxed mb-4">
              Le profil de l'enfant commence dès l'inscription. Il les accompagne quand ils partent.
            </p>
            <p className="text-[16px] text-dark-text/65 leading-relaxed mb-8">
              Dès le premier jour, chaque mise à jour, chaque jalon, chaque photo et chaque document vit dans un profil unique qui appartient à la famille, pas au centre. Les éducateurs y contribuent. Les parents le chérissent. Et quand le moment vient de partir, il les suit.
            </p>
            <div className="space-y-3">
              {[
                { icon: '🔒', text: 'Appartient à la famille, pas au centre' },
                { icon: '📁', text: 'Chaque photo, rapport et jalon en un seul endroit' },
                { icon: '🚀', text: 'Portable. Suit votre enfant, toujours.' },
              ].map(item => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <span className="text-[15px] text-dark-text/75">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Profile card mockup */}
          <div>
            <div
              className="bg-white rounded-2xl overflow-hidden border border-[rgba(47,74,58,0.1)]"
              style={{ boxShadow: '0 8px 40px rgba(47,74,58,0.12)' }}
            >
              <div className="bg-forest-green px-6 py-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-light-sage flex items-center justify-center text-forest-green text-[14px] font-bold flex-shrink-0">
                  EJ
                </div>
                <div>
                  <p className="text-cream font-semibold text-[15px] leading-tight">Emma Johnson</p>
                  <p className="text-cream/60 text-[12px]">Salle des Papillons · 3 ans, 2 mois</p>
                </div>
                <div className="ml-auto">
                  <span className="text-[10px] font-medium text-sage-green bg-sage-green/20 px-2.5 py-1 rounded-full">Actif</span>
                </div>
              </div>

              <div className="px-6 py-4 border-b border-[rgba(47,74,58,0.07)] grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[11px] text-dark-text/40 uppercase tracking-[0.08em] mb-1">Inscrit</p>
                  <p className="text-[13px] font-semibold text-dark-text">Septembre 2024</p>
                </div>
                <div>
                  <p className="text-[11px] text-dark-text/40 uppercase tracking-[0.08em] mb-1">Salle</p>
                  <p className="text-[13px] font-semibold text-dark-text">Papillons</p>
                </div>
              </div>

              <div className="px-6 py-4 border-b border-[rgba(47,74,58,0.07)]">
                <p className="text-[11px] text-dark-text/40 uppercase tracking-[0.08em] mb-3">Jalons récents</p>
                <div className="flex flex-col gap-2">
                  {[
                    { icon: '🌱', text: 'Premiers ciseaux', date: '14 mai' },
                    { icon: '💬', text: 'Première phrase complète', date: '20 mai' },
                    { icon: '🎨', text: 'A dessiné une forme', date: '23 mai' },
                  ].map(m => (
                    <div key={m.text} className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-[13px] text-dark-text/75">
                        <span>{m.icon}</span> {m.text}
                      </span>
                      <span className="text-[11px] text-dark-text/35">{m.date}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-6 py-4">
                <p className="text-[11px] text-dark-text/40 uppercase tracking-[0.08em] mb-3">Parcours</p>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-medium text-forest-green whitespace-nowrap">Inscrit</span>
                  <div className="flex-1 flex items-center gap-1">
                    <div className="h-1.5 rounded-full bg-sage-green flex-1" style={{ maxWidth: '45%' }} />
                    <div className="w-2.5 h-2.5 rounded-full bg-forest-green border-2 border-white ring-2 ring-forest-green flex-shrink-0" />
                    <div className="h-1.5 rounded-full flex-1" style={{ background: 'linear-gradient(to right, rgba(110,183,111,0.3), rgba(110,183,111,0.05))' }} />
                  </div>
                  <span className="text-[11px] font-medium text-dark-text/30 whitespace-nowrap">…</span>
                </div>
                <div className="flex justify-center mt-1">
                  <span className="text-[10px] text-dark-text/35">Aujourd'hui</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CE QUI EST DANS LE PROFIL ─────────────────────────────── */}
      <section className="bg-white py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>Ce qui est dans le profil</SectionLabel>
            <h2
              className="font-display font-medium text-forest-green leading-[1.08] mb-4"
              style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}
            >
              Un profil complet. Un seul endroit.
            </h2>
            <p className="text-[16px] text-dark-text/55 max-w-xl mx-auto">
              Tout ce dont les éducateurs, les familles et les directeurs ont besoin, organisé dans un profil qui grandit avec chaque enfant.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: '📋', title: 'Rapports quotidiens', desc: 'Chaque rapport envoyé, archivé automatiquement dans leur profil.' },
              { icon: '🌱', title: 'Jalons', desc: 'Chronologie de développement taguée par les éducateurs, consultable par les familles.' },
              { icon: '📁', title: 'Documents', desc: 'Formulaires d\'inscription, ordonnances médicales, accords signés.' },
              { icon: '🏥', title: 'Santé et urgences', desc: 'Allergies, contacts d\'urgence, directives médicales, toujours à portée de main.' },
              { icon: '🚗', title: 'Historique des collectes', desc: 'Journal complet de qui a collecté l\'enfant et quand, avec vérification photo.' },
              { icon: '💳', title: 'Facturation', desc: 'Factures, paiements et historique des subventions PÉLCN liés au profil.' },
              { icon: '📊', title: 'Assiduité', desc: 'Historique complet des présences par mois, semaine et journée.' },
              { icon: '💬', title: 'Messagerie', desc: 'Fil de messages entre l\'équipe du centre et la famille, organisé par enfant.' },
            ].map(item => (
              <div
                key={item.title}
                className="bg-cream rounded-2xl p-5 border border-[rgba(47,74,58,0.07)]"
                style={{ boxShadow: '0 2px 12px rgba(47,74,58,0.05)' }}
              >
                <span className="text-2xl block mb-3">{item.icon}</span>
                <p className="text-[13px] font-semibold text-dark-text mb-1.5">{item.title}</p>
                <p className="text-[12px] text-dark-text/55 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROFILS DU PERSONNEL ──────────────────────────────────── */}
      <section className="bg-cream py-20 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <SectionLabel>Profils du Personnel</SectionLabel>
            <h2
              className="font-display font-medium text-forest-green leading-[1.08] mb-5"
              style={{ fontSize: 'clamp(30px, 3.5vw, 44px)' }}
            >
              Des profils professionnels pour les personnes qui se présentent chaque jour.
            </h2>
            <p className="text-[16px] text-dark-text/65 leading-relaxed mb-7 max-w-3xl">
              Chaque éducateur mérite de se sentir comme un professionnel, pas juste un nom sur un tableau. Sprout &amp; Vine donne à chaque membre du personnel un profil qu&apos;il contrôle: une présence visible par les familles avec sa photo, sa bio et ses accréditations vérifiées. Les directeurs voient le tableau complet: certifications, dates d&apos;expiration, statut de conformité pour toute l&apos;équipe, et chaque document nécessaire pour une inspection de licence. Le tout en un seul endroit.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 max-w-3xl">
              {[
                'Les éducateurs contrôlent leur propre profil visible par les familles et leur bio',
                'Badges d\'accréditation vérifiés par le directeur avant d\'apparaître aux parents',
                'Premiers soins, RCP, désignation ÉPE et vérification policière, suivis avec alertes d\'expiration',
                'Tableau de bord de conformité des certifications: vert / ambre / rouge pour tout le personnel',
                'Rapport de conformité exportable en un clic pour les inspections de licence',
                'Dossier RH et emploi complet dans la vue du directeur',
              ].map(b => (
                <li key={b} className="flex items-start gap-2.5 text-[15px] text-dark-text/75">
                  <span className="text-sage-green font-bold flex-shrink-0 mt-0.5">&#10003;</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tableau à trois panneaux */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Panneau 1: Vue des parents */}
            <div className="space-y-2">
              <p className="text-[11px] font-semibold text-dark-text/40 uppercase tracking-[0.1em] mb-3">Ce que voient les parents</p>
              <div className="bg-white rounded-xl border border-[rgba(47,74,58,0.1)] overflow-hidden" style={{ boxShadow: '0 4px 20px rgba(47,74,58,0.08)' }}>
                <div className="bg-forest-green px-5 py-3.5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-light-sage flex items-center justify-center text-forest-green text-[13px] font-bold flex-shrink-0">ST</div>
                  <div>
                    <p className="text-cream font-semibold text-[14px] leading-tight">Sarah</p>
                    <p className="text-cream/60 text-[11px]">Salle des Papillons</p>
                  </div>
                </div>
                <div className="px-4 py-3 border-b border-[rgba(47,74,58,0.07)]">
                  <div className="flex flex-wrap gap-1.5">
                    {['Premiers soins ✓', 'ÉPE ✓', 'Vérif. policière ✓'].map(badge => (
                      <span key={badge} className="text-[10px] font-semibold text-sage-green bg-sage-green/10 px-2 py-0.5 rounded-full">{badge}</span>
                    ))}
                  </div>
                </div>
                <div className="px-4 py-3 border-b border-[rgba(47,74,58,0.07)]">
                  <p className="text-[11px] text-dark-text/55 italic leading-relaxed">
                    &ldquo;Passionnée par l&apos;apprentissage en plein air. Bilingue FR/EN.&rdquo;
                  </p>
                </div>
                <div className="px-4 py-3">
                  <p className="text-[11px] font-medium text-forest-green">S&apos;occupe d&apos;Emma depuis oct. 2024</p>
                </div>
              </div>
            </div>

            {/* Panneau 2: Vue personnelle de Sarah */}
            <div className="space-y-2">
              <p className="text-[11px] font-semibold text-dark-text/40 uppercase tracking-[0.1em] mb-3">Ce que Sarah voit (son profil)</p>
              <div className="bg-white rounded-xl border border-[rgba(47,74,58,0.08)] overflow-hidden" style={{ boxShadow: '0 4px 20px rgba(47,74,58,0.06)' }}>
                <div className="px-4 py-3.5 border-b border-[rgba(47,74,58,0.07)]">
                  <p className="text-[11px] text-dark-text/40 uppercase tracking-[0.08em] mb-2">Mes certifications</p>
                  <div className="space-y-2">
                    {[
                      { name: 'Premiers soins et RCP', expiry: 'mars 2026', ok: true },
                      { name: 'Désignation ÉPE', expiry: 'Sans expiration', ok: true },
                      { name: 'Vérification policière', expiry: 'juin 2025', ok: false },
                    ].map(cert => (
                      <div key={cert.name} className="flex items-center justify-between">
                        <p className="text-[11px] text-dark-text/70">{cert.name}</p>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${cert.ok ? 'bg-sage-green/10 text-sage-green' : 'bg-terracotta/10 text-terracotta'}`}>
                          {cert.expiry}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-4 py-3.5 border-b border-[rgba(47,74,58,0.07)]">
                  <p className="text-[11px] text-dark-text/40 uppercase tracking-[0.08em] mb-2">Aujourd&apos;hui</p>
                  <div className="space-y-1.5">
                    {['2 rapports quotidiens à envoyer', '1 jalon à confirmer', '3 messages à lire'].map(t => (
                      <div key={t} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-sage-green flex-shrink-0" />
                        <p className="text-[11px] text-dark-text/65">{t}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-4 py-3">
                  <button className="text-[11px] font-medium text-forest-green hover:underline">Modifier mon profil →</button>
                </div>
              </div>
            </div>

            {/* Panneau 3: Vue de conformité du directeur */}
            <div className="space-y-2">
              <p className="text-[11px] font-semibold text-dark-text/40 uppercase tracking-[0.1em] mb-3">Vue de conformité du directeur</p>
              <div className="bg-white rounded-xl border border-[rgba(47,74,58,0.08)] overflow-hidden" style={{ boxShadow: '0 4px 20px rgba(47,74,58,0.06)' }}>
                <div className="px-4 py-3 border-b border-[rgba(47,74,58,0.07)]">
                  <p className="text-[11px] font-semibold text-dark-text mb-2">Tout le personnel · Statut des certifications</p>
                  <div className="space-y-2">
                    {[
                      { name: 'Sarah T.', status: 'green', label: 'Tout à jour' },
                      { name: 'Marcus L.', status: 'amber', label: 'Premiers soins dans 42 jours' },
                      { name: 'Priya R.', status: 'green', label: 'Tout à jour' },
                      { name: 'Daniel O.', status: 'red', label: 'Vérif. policière expirée' },
                    ].map(staff => (
                      <div key={staff.name} className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full flex-shrink-0 ${staff.status === 'green' ? 'bg-sage-green' : staff.status === 'amber' ? 'bg-terracotta' : 'bg-red-500'}`} />
                          <p className="text-[11px] font-medium text-dark-text">{staff.name}</p>
                        </div>
                        <p className="text-[10px] text-dark-text/45">{staff.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-4 py-3">
                  <button className="w-full text-[11px] font-semibold text-forest-green border border-forest-green/30 rounded-lg py-2 hover:bg-forest-green/5 transition-colors">
                    Télécharger le rapport de conformité
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/fr/features#child-profile"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-forest-green hover:underline"
            >
              Voir comment le profil enfant est connecté →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-green py-20 px-5 md:px-8">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-cream font-medium leading-[1.08] mb-5" style={{ fontSize: 'clamp(34px, 4vw, 50px)' }}>
              Prêt à voir la plateforme en action?
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link href="/fr/contact" className="inline-block bg-terracotta text-white text-[14px] font-medium px-7 py-3.5 rounded-lg hover:bg-[#d4724e] transition-colors">
                Prendre rendez-vous
              </Link>
              <Link href="/fr/founding" className="inline-block text-cream text-[14px] font-medium px-7 py-3.5 rounded-lg border-2 border-cream/40 hover:border-cream/70 transition-colors">
                Rejoindre le Programme fondateur
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-7">
            <EmailCapture
              heading="Recevoir une notification au lancement."
              subheading="Nous vous informerons quand Sprout et Vine est prêt, et partagerons ce que nous construisons en chemin."
              source="fr-features-page"
              buttonText="Me notifier"
              emailPlaceholder="votre@centre.ca"
              consentLabel="J'accepte de recevoir des mises à jour de Sprout & Vine. Je peux me désabonner à tout moment."
              successTitle="Vous êtes sur la liste."
              successSubtitle="Nous vous contacterons au fil de notre progression."
            />
          </div>
        </div>
      </section>
    </>
  )
}
