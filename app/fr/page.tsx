import Link from 'next/link'
import DashboardPreview from '@/components/dashboard-preview'
import ProductTour from '@/components/product-tour'
import PricingCards from '@/components/pricing-cards'
import ROICalculator from '@/components/roi-calculator'
import EmailCapture from '@/components/email-capture'
import FadeIn from '@/components/fade-in'
import CanadaMap from '@/components/canada-map'
import { FOUNDING_SPOTS_REMAINING, FOUNDING_SPOTS_TOTAL } from '@/lib/config'
import { testimonial } from '@/lib/testimonial'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sprout & Vine | Gestion de garderie au Canada',
  description: 'Présences, facturation, communication avec les familles et autorisation de collecte sécurisée. La plateforme de gestion construite pour les garderies canadiennes.',
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">
      {children}
    </p>
  )
}

function PhoneShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-[220px] flex-shrink-0">
      <div className="w-full bg-white rounded-[36px] shadow-2xl border-4 border-[#1C2B22] overflow-hidden" style={{ paddingTop: '12px' }}>
        <div className="flex justify-center mb-2">
          <div className="w-16 h-1.5 rounded-full bg-[#1a1a1a]/10" />
        </div>
        {children}
      </div>
    </div>
  )
}

const faqFr = [
  {
    q: "Y a-t-il un essai gratuit?",
    a: "Oui, 14 jours sur Sprout, sans carte de crédit. Annulez à tout moment.",
  },
  {
    q: "Puis-je changer de forfait?",
    a: "Oui. Passez à un forfait supérieur ou inférieur à tout moment. Les changements prennent effet au prochain cycle de facturation.",
  },
  {
    q: "Supportez-vous les fournisseurs en milieu familial?",
    a: "Oui. Les services de garde en milieu familial agréés bénéficient de Sprout à 39 $ CA/mois.",
  },
  {
    q: "Mes données sont-elles stockées au Canada?",
    a: "Oui. Résidence des données canadiennes sur tous les forfaits, toujours.",
  },
  {
    q: "Qu'est-ce que le PÉLCN?",
    a: "Programme d'apprentissage et de garde des jeunes enfants à l'échelle du Canada. Notre plateforme suit et gère automatiquement votre admissibilité aux subventions.",
  },
]

export default function FrenchHomePage() {
  return (
    <>
      {/* ── SECTION 1: HÉRO ─────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-5 md:px-8 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta text-[12px] font-semibold px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
            Programme des opérateurs fondateurs · Inscriptions ouvertes
          </div>

          <h1
            className="font-display font-medium text-forest-green leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(38px, 5vw, 66px)' }}
          >
            La plateforme de gestion<br />
            que nous construisons avec<br className="hidden sm:block" />{' '}
            <em className="text-terracotta not-italic">les opérateurs canadiens.</em>
          </h1>

          <p className="text-[18px] text-dark-text/65 mb-10 max-w-xl mx-auto leading-relaxed">
            Sprout &amp; Vine Care est une plateforme moderne de gestion des garderies conçue pour les centres canadiens. Nous nous associons à un groupe limité d&apos;opérateurs fondateurs pour façonner l&apos;avenir de l&apos;inscription, de la conformité, de la communication et de la gestion de centre.
          </p>

          <div className="flex flex-col items-center gap-4">
            <Link
              href="/fr/founding"
              className="w-full sm:w-auto bg-forest-green text-white text-[14px] font-medium px-8 py-3.5 rounded-lg hover:bg-[#243d2f] transition-colors text-center"
            >
              Rejoindre le Programme des opérateurs fondateurs
            </Link>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto">
              <Link
                href="/fr/features"
                className="text-[13px] font-medium text-dark-text/70 border border-[rgba(47,74,58,0.22)] px-5 py-2.5 rounded-lg hover:border-[rgba(47,74,58,0.45)] hover:text-dark-text transition-colors text-center"
              >
                Explorer les fonctionnalités
              </Link>
              <Link
                href="/fr/contact"
                className="text-[13px] font-medium text-dark-text/70 border border-[rgba(47,74,58,0.22)] px-5 py-2.5 rounded-lg hover:border-[rgba(47,74,58,0.45)] hover:text-dark-text transition-colors text-center"
              >
                Prendre rendez-vous
              </Link>
              <Link
                href="/fr/roadmap"
                className="text-[13px] font-medium text-dark-text/70 border border-[rgba(47,74,58,0.22)] px-5 py-2.5 rounded-lg hover:border-[rgba(47,74,58,0.45)] hover:text-dark-text transition-colors text-center"
              >
                Voir la feuille de route
              </Link>
            </div>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8">
            {['Conçu pour le Canada', 'Bâti avec les opérateurs de garderies', 'Feuille de route IA', 'Conforme au PÉLCN'].map(item => (
              <div key={item} className="flex items-center gap-1.5 text-[12px] text-dark-text/45 font-medium">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <circle cx="7" cy="7" r="6.5" stroke="#6EB76F" />
                  <path d="M4 7l2 2 4-4" stroke="#6EB76F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HEART LINE ──────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20 px-5 md:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <p
            className="font-display font-medium leading-snug mb-4"
            style={{ fontSize: 'clamp(22px, 2.8vw, 32px)', color: '#0F6E56' }}
          >
            L'obstacle n'est pas la passion. L'obstacle est l'information et l'infrastructure.
          </p>
          <p className="text-[16px] text-dark-text/60 mb-6">
            C'est pourquoi nous avons construit Sprout &amp; Vine pour le Canada.
          </p>
          <p className="text-[15px] font-semibold text-forest-green mb-6">
            Sprout &amp; Vine est bâti avec les opérateurs, pas pour eux.
          </p>
          <Link href="/fr/about" className="text-[14px] font-medium text-forest-green hover:underline">
            Lire notre histoire →
          </Link>
        </div>
      </section>

      {/* ── SECTION 3: LE PROBLÈME ──────────────────────────────── */}
      <section className="py-20 md:py-24 px-5 md:px-8 bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel>Le Problème</SectionLabel>
            <h2 className="font-display font-medium text-forest-green leading-[1.08]" style={{ fontSize: 'clamp(36px, 4.5vw, 56px)' }}>
              Gérer une garderie ne devrait pas<br />ressembler à jongler.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '📋', title: "Trop d'outils", desc: "Feuilles de calcul pour les présences, un autre outil pour la facturation, des messages perdus dans des applications disparates." },
              { icon: '⏰', title: 'Trop de temps administratif', desc: 'Les directeurs passent en moyenne 14 heures par semaine sur des tâches qui pourraient être automatisées.' },
              { icon: '😔', title: 'Des familles moins bien informées', desc: 'Les parents méritent de savoir ce qui se passe dans la journée de leur enfant. Pas juste un rapport à la fin de la journée.' },
            ].map(item => (
              <div key={item.title} className="bg-white rounded-2xl p-7" style={{ boxShadow: '0 4px 20px rgba(47,74,58,0.07)' }}>
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-display text-[22px] font-medium text-forest-green mb-2">{item.title}</h3>
                <p className="text-[14px] text-dark-text/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: TABLEAU DE BORD ──────────────────────────── */}
      <section className="bg-white py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden">
              <DashboardPreview />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <SectionLabel>Votre Tableau de Bord</SectionLabel>
            <h2 className="font-display font-medium text-forest-green leading-[1.08] mb-5" style={{ fontSize: 'clamp(34px, 4vw, 52px)' }}>
              Tout ce dont vous avez besoin, d'un seul coup d'oeil.
            </h2>
            <p className="text-[16px] text-dark-text/65 leading-relaxed mb-8">
              Un seul endroit pour voir les présences, les messages, les paiements et les événements. Pas de jonglage entre différentes applications.
            </p>
            <ul className="space-y-4">
              {[
                { icon: '✅', text: 'Présences et ratios en temps réel' },
                { icon: '💬', text: 'Messages et rapports en un seul endroit' },
                { icon: '💳', text: 'Suivi des paiements et des subventions PÉLCN' },
                { icon: '📅', text: 'Calendrier des événements et des rendez-vous' },
              ].map(item => (
                <li key={item.text} className="flex items-start gap-3 text-[15px] text-dark-text/75">
                  <span className="text-lg flex-shrink-0 leading-none mt-0.5">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: VISITE INTERACTIVE ───────────────────────── */}
      <section className="bg-cream py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>Visite Interactive</SectionLabel>
            <h2 className="font-display font-medium text-forest-green leading-[1.08] mb-4" style={{ fontSize: 'clamp(34px, 4vw, 52px)' }}>
              Voyez comment ça fonctionne
            </h2>
            <p className="text-[16px] text-dark-text/55 max-w-xl mx-auto">
              Explorez les flux de travail quotidiens: enregistrement du matin, rapport quotidien et autorisation de collecte.
            </p>
          </div>
          <ProductTour />
        </div>
      </section>

      {/* ── SECTION 6: COMMENT ÇA FONCTIONNE ───────────────────── */}
      <section className="bg-white py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel>Comment Ça Fonctionne</SectionLabel>
            <h2 className="font-display font-medium text-forest-green leading-[1.08]" style={{ fontSize: 'clamp(34px, 4vw, 52px)' }}>
              Opérationnel en une journée.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Configurez votre centre', desc: 'Ajoutez vos groupes, votre personnel et vos familles. Importez vos données existantes.' },
              { step: '02', title: 'Invitez les familles', desc: "Chaque famille reçoit un accès à l'application Vine. Configuration en 2 minutes." },
              { step: '03', title: 'Commencez à utiliser', desc: 'Présences, rapports quotidiens, facturation. Tout fonctionne dès le premier jour.' },
              { step: '04', title: 'Regardez votre centre grandir', desc: 'Des données claires, des familles informées, et du temps libéré pour ce qui compte.' },
            ].map(item => (
              <div key={item.step} className="text-center">
                <div className="font-display text-[52px] font-medium text-sage-green/20 leading-none mb-3">{item.step}</div>
                <h3 className="font-display text-[20px] font-medium text-forest-green mb-2">{item.title}</h3>
                <p className="text-[13px] text-dark-text/55 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: POUR LES ÉDUCATEURS ─────────────────────── */}
      <section className="bg-cream py-20 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <SectionLabel>Pour les Éducateurs</SectionLabel>
            <h2 className="font-display font-medium text-forest-green leading-[1.08] mb-5" style={{ fontSize: 'clamp(34px, 4vw, 50px)' }}>
              Conçu pour ceux qui se présentent chaque jour.
            </h2>
            <p className="text-[16px] text-dark-text/65 leading-relaxed mb-10">
              Les directeurs choisissent Sprout &amp; Vine. Les éducateurs l'adorent. Ce n'est pas un hasard. Nous avons conçu chaque flux de travail autour des personnes qui l'utilisent vraiment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { icon: '📋', title: 'Rapports en moins de 2 minutes', desc: "Modèles à compléter d'un tapotement. Ajoutez une photo. Envoyez. Avant la sieste." },
                { icon: '🌱', title: 'Jalons en déplacement', desc: 'Remarquez quelque chose de beau? Taguez-le en 10 secondes. La chronologie se construit automatiquement.' },
                { icon: '💬', title: 'Messages sans votre numéro personnel', desc: "Toute communication passe par l'application. Les parents ne peuvent pas vous écrire à 23h." },
              ].map(item => (
                <div key={item.title} className="bg-white rounded-xl p-5" style={{ boxShadow: '0 2px 12px rgba(47,74,58,0.06)' }}>
                  <span className="text-2xl block mb-3">{item.icon}</span>
                  <p className="text-[14px] font-semibold text-dark-text mb-1.5">{item.title}</p>
                  <p className="text-[13px] text-dark-text/55 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <PhoneShell>
              <div className="px-3 pb-3 space-y-2">
                <div className="text-[10px] font-semibold text-forest-green text-center py-1 border-b border-[rgba(47,74,58,0.08)]">Fil d'activité</div>
                {[
                  { icon: '📷', title: 'Emma travaillant sur son projet artistique', sub: 'Salle des Papillons · 10h24', color: '#AEC1B0' },
                  { icon: '🌱', title: 'Jalon: Première utilisation des ciseaux!', sub: 'Développement · 10h31', color: '#6EB76F' },
                  { icon: '📋', title: "Rapport quotidien d'Olivia est prêt", sub: 'Appuyez pour lire · 12h03', color: '#2F4A3A' },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-2.5 p-2.5 rounded-xl" style={{ background: 'rgba(247,242,232,0.7)' }}>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-base" style={{ background: `${item.color}20` }}>{item.icon}</div>
                    <div>
                      <p className="text-[11px] font-semibold text-dark-text leading-snug">{item.title}</p>
                      <p className="text-[9px] text-dark-text/40 mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PhoneShell>
          </div>
        </div>
      </section>

      {/* ── PROFIL ENFANT ─────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>Disponible au lancement</SectionLabel>
            <h2
              className="font-display font-medium text-forest-green leading-[1.05] mb-5"
              style={{ fontSize: 'clamp(34px, 4vw, 52px)' }}
            >
              Chaque enfant. Un profil.<br />Un dossier qui grandit avec eux.
            </h2>
            <p className="text-[16px] text-dark-text/65 leading-relaxed mb-4">
              Le profil de l'enfant commence dès l'inscription. Il les accompagne quand ils partent.
            </p>
            <p className="text-[16px] text-dark-text/65 leading-relaxed mb-8">
              Dès le premier jour, chaque mise à jour, chaque jalon, chaque photo et chaque document vit dans un profil unique qui appartient à la famille, pas au centre. Les éducateurs y contribuent. Les parents le chérissent. Et quand le moment vient de partir, il les suit.
            </p>
            <div className="space-y-3 mb-8">
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
            <Link
              href="/fr/features"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-forest-green hover:underline"
            >
              Voir comment le profil se construit dans le temps →
            </Link>
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

      {/* ── PROFIL DU PERSONNEL ── */}
      <section className="bg-white py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Carte du personnel */}
          <div className="flex justify-center order-2 lg:order-1">
            <div
              className="bg-white rounded-2xl overflow-hidden border border-[rgba(47,74,58,0.1)] w-full max-w-sm"
              style={{ boxShadow: '0 8px 40px rgba(47,74,58,0.12)' }}
            >
              <div className="bg-forest-green px-6 py-4 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-light-sage flex items-center justify-center text-forest-green text-[14px] font-bold flex-shrink-0">ST</div>
                <div>
                  <p className="text-cream font-semibold text-[15px] leading-tight">Sarah</p>
                  <p className="text-cream/60 text-[12px]">Salle des Papillons</p>
                </div>
              </div>
              <div className="px-6 py-3.5 border-b border-[rgba(47,74,58,0.07)]">
                <p className="text-[12px] text-dark-text/50">Avec cette salle depuis septembre 2024</p>
              </div>
              <div className="px-6 py-3.5 border-b border-[rgba(47,74,58,0.07)]">
                <p className="text-[10px] text-dark-text/40 uppercase tracking-[0.08em] mb-2.5">Accréditations vérifiées</p>
                <div className="flex flex-wrap gap-1.5">
                  {['Premiers soins ✓', 'ÉPE ✓', 'Vérification police ✓'].map(badge => (
                    <span key={badge} className="text-[11px] font-semibold text-sage-green bg-sage-green/10 px-2.5 py-1 rounded-full">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-6 py-3.5 border-b border-[rgba(47,74,58,0.07)]">
                <p className="text-[12px] text-dark-text/60 italic leading-relaxed">
                  &ldquo;Passionnée par l&apos;apprentissage en plein air et les arts créatifs. Bilingue FR/EN.&rdquo;
                </p>
              </div>
              <div className="px-6 py-3.5">
                <p className="text-[12px] font-medium text-forest-green">S&apos;occupe d&apos;Emma depuis octobre 2024</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionLabel>Disponible au lancement</SectionLabel>
            <h2
              className="font-display font-medium text-forest-green leading-[1.05] mb-5"
              style={{ fontSize: 'clamp(34px, 4vw, 52px)' }}
            >
              Connaître les personnes<br />qui prennent soin de votre enfant.
            </h2>
            <p className="text-[16px] text-dark-text/65 leading-relaxed mb-4">
              Chaque éducateur. Des accréditations vérifiées. Un visage et un nom, pas juste un rôle.
            </p>
            <p className="text-[16px] text-dark-text/65 leading-relaxed mb-8">
              Chaque membre du personnel sur Sprout &amp; Vine a un profil qui lui appartient. Les parents voient ce qui compte: un nom, une photo, depuis combien de temps cette personne s&apos;occupe de leur enfant, et des badges d&apos;accréditation vérifiés. Les directeurs voient tout ce dont ils ont besoin pour la conformité, la planification et les licences. En un seul endroit.
            </p>
            <div className="space-y-3 mb-8">
              {[
                { icon: '✓', text: 'Les éducateurs contrôlent leur propre profil visible aux familles' },
                { icon: '🔒', text: 'Les accréditations sont vérifiées par le directeur avant affichage' },
                { icon: '📋', text: 'Tableau de bord de conformité complet pour les directeurs. Un seul écran, tout le personnel, toutes les certifications.' },
              ].map(item => (
                <div key={item.text} className="flex items-start gap-3">
                  <span className="text-lg flex-shrink-0 mt-0.5 leading-none">{item.icon}</span>
                  <span className="text-[15px] text-dark-text/75 leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>
            <Link href="/fr/features" className="inline-flex items-center gap-2 text-[14px] font-medium text-forest-green hover:underline">
              Voir comment les profils du personnel fonctionnent →
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTELLIGENCE ARTIFICIELLE ── */}
      <section className="bg-white py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Intelligence Artificielle</SectionLabel>
          <h2
            className="font-display font-medium text-forest-green leading-[1.08] mb-6"
            style={{ fontSize: 'clamp(34px, 4vw, 50px)' }}
          >
            L&apos;intelligence artificielle dans toute la plateforme.
          </h2>
          <p className="text-[16px] text-dark-text/65 leading-relaxed mb-6 max-w-2xl">
            L&apos;IA devrait aider à réduire le travail administratif, pas remplacer le jugement des éducateurs.
          </p>

          <p className="text-[14px] text-dark-text/50 font-medium mb-4">Capacités futures possibles:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              { icon: '📝', title: 'Aide à la documentation', desc: 'Aide à la rédaction de rapports d\'incidents, résumés quotidiens et notes de développement.' },
              { icon: '💬', title: 'Rédaction de communications aux familles', desc: 'Réponses suggérées et mises à jour prêtes à réviser avant l\'envoi.' },
              { icon: '🌱', title: 'Soutien aux observations du développement', desc: 'Reconnaissance de patterns dans les jalons pour faire ressortir des insights significatifs.' },
              { icon: '📬', title: 'Aide au suivi des inscriptions', desc: 'Rappels opportuns et brouillons de messages pour les familles sur liste d\'attente.' },
              { icon: '📊', title: 'Insights opérationnels', desc: 'Mise en évidence de patterns dans les présences, la facturation et les données quotidiennes du centre.' },
            ].map(item => (
              <div key={item.title} className="flex items-start gap-3 bg-cream rounded-xl p-4">
                <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                <div>
                  <p className="text-[13px] font-semibold text-dark-text mb-0.5">{item.title}</p>
                  <p className="text-[12px] text-dark-text/55 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[15px] font-semibold text-forest-green mb-7">
            Chaque suggestion est un point de départ. Les éducateurs décident toujours.
          </p>
          <Link
            href="/fr/pricing"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-forest-green hover:underline"
          >
            Voir la philosophie tarifaire →
          </Link>
        </div>
      </section>

      {/* ── SECTION 8: FAIT POUR LE CANADA ──────────────────────── */}
      <section className="bg-cream py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Fait Pour le Canada</SectionLabel>
          <h2 className="font-display font-medium text-forest-green leading-[1.08] mb-6" style={{ fontSize: 'clamp(34px, 4vw, 50px)' }}>
            La seule plateforme construite autour du PÉLCN dès le départ.
          </h2>
          <p className="text-[16px] text-dark-text/65 leading-relaxed mb-12 max-w-2xl">
            Le paysage des services de garde au Canada est unique. Sprout &amp; Vine est conçu spécifiquement pour les opérateurs canadiens, avec le suivi des subventions PÉLCN, le support bilingue (FR/EN) et la conformité provinciale intégrés dès le premier jour.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🍁', title: 'Suivi des subventions PÉLCN', desc: 'Calculez, réconciliez et soumettez vos subventions automatiquement. Fini les feuilles de calcul.' },
              { icon: '🌐', title: 'Entièrement bilingue FR/EN', desc: "La plateforme et l'application Vine sont entièrement disponibles en français et en anglais." },
              { icon: '🔒', title: 'Données au Canada', desc: 'Vos données demeurent au Canada, toujours. Conformité SOC 2 incluse.' },
            ].map(item => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: 'rgba(47,74,58,0.06)' }}>{item.icon}</div>
                <div>
                  <h3 className="font-display text-[20px] font-medium text-forest-green mb-1">{item.title}</h3>
                  <p className="text-[14px] text-dark-text/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CARTE DU CANADA ── */}
      <section className="bg-white py-16 md:py-20 px-5 md:px-8">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <CanadaMap caption="Conçu pour chaque province. Conforme dès le premier jour." />
        </div>
      </section>

      {/* ── SECTION 9: TARIFICATION ─────────────────────────────── */}
      <section className="bg-white py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel>Tarification Simple</SectionLabel>
            <h2 className="font-display font-medium text-forest-green leading-[1.08] mb-4" style={{ fontSize: 'clamp(36px, 4.5vw, 56px)' }}>
              Pas de frais cachés.<br />Pas de frais par enfant.
            </h2>
            <p className="text-[16px] text-dark-text/50">Tous les prix en dollars canadiens.</p>
          </div>
          <PricingCards />
          <div className="text-center mt-8">
            <Link href="/fr/pricing" className="text-[14px] font-medium text-forest-green hover:underline">
              Voir tous les détails de tarification →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: CALCULATEUR DE ROI ──────────────────────── */}
      <section className="py-20 px-5 md:px-8" style={{ background: '#2F4A3A' }}>
        <ROICalculator />
      </section>

      {/* ── LETTRE DE LA FONDATRICE ─────────────────────────────── */}
      <section className="bg-forest-green py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-8">
            Un mot de la fondatrice
          </p>
          <blockquote className="space-y-5 mb-10">
            <p className="font-display font-medium text-cream leading-relaxed" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
              &ldquo;Sprout &amp; Vine n'a pas commencé avec un plan d'affaires. Tout a commencé quand nous avons eu notre premier bébé et que j'ai commencé à chercher ce qu'il faudrait pour ouvrir une garderie familiale au Canada. J'ai frappé un mur.
            </p>
            <p className="text-[16px] text-cream/70 leading-relaxed">
              Les exigences de licence enfouies dans des PDF gouvernementaux. Le financement PÉLCN presque impossible à naviguer. Chaque information dans un endroit différent, écrite pour des gens qui savaient déjà ce qu'ils faisaient.
            </p>
            <p className="text-[16px] text-cream/70 leading-relaxed">
              L'obstacle n'est pas la passion. L'obstacle est l'information et l'infrastructure.
            </p>
            <p className="text-[16px] text-cream/70 leading-relaxed">
              Nous réglons ça. Et nous cherchons les opérateurs qui le ressentent aussi.&rdquo;
            </p>
          </blockquote>
          <div className="flex items-center gap-4">
            <div>
              <p className="text-cream font-semibold text-[15px]">Ada</p>
              <p className="text-cream/50 text-[13px]">Co-Fondatrice, Sprout &amp; Vine</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-cream/15">
            <Link href="/fr/about" className="text-[14px] font-medium text-sage-green hover:text-cream transition-colors">
              Lire notre histoire complète →
            </Link>
          </div>
        </div>
      </section>

      {/* ── PREUVE SOCIALE AVEC COMPTEUR ────────────────────────── */}
      <section className="bg-cream py-16 md:py-20 px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-sage-green" />
            <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold">
              Communauté
            </p>
          </div>
          <p
            className="font-display font-medium text-forest-green leading-snug mb-4"
            style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}
          >
            Des opérateurs fondateurs de l'Ontario, de la C.-B., de l'Alberta,<br className="hidden sm:block" /> du Manitoba et du Québec ont déjà rejoint.
          </p>
          <p className="text-[15px] text-dark-text/55 mb-8 leading-relaxed">
            Les candidatures sont examinées dans l'ordre de réception.
          </p>
          <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta text-[14px] font-semibold px-6 py-3 rounded-full">
            <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
            {FOUNDING_SPOTS_REMAINING} des {FOUNDING_SPOTS_TOTAL} places fondatrices restantes
          </div>
        </div>
      </section>

      {/* ── TÉMOIGNAGE (conditionnel) ─────────────────────────── */}
      {testimonial.text && (
        <section className="bg-white py-16 md:py-20 px-5 md:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <blockquote>
              <p className="font-display font-medium text-forest-green leading-relaxed mb-6" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <footer className="text-[13px] text-dark-text/50">
                <span className="font-semibold text-dark-text">{testimonial.firstName}</span>
                {testimonial.role && <span>, {testimonial.role}</span>}
                {testimonial.province && <span> &middot; {testimonial.province}</span>}
                {testimonial.centreType && <span> &middot; {testimonial.centreType}</span>}
              </footer>
            </blockquote>
          </div>
        </section>
      )}

      {/* ── FAQ ─────────────────────────────────────────────────── */}
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

      {/* ── BANDE CTA PROGRAMME FONDATEUR ───────────────────────── */}
      <section className="bg-forest-green py-24 md:py-32 px-5 md:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">
            Programme des opérateurs fondateurs
          </p>
          <h2 className="font-display font-medium text-cream leading-[1.08] mb-5" style={{ fontSize: 'clamp(38px, 5vw, 56px)' }}>
            Faites partie des premiers<br />à construire avec nous.
          </h2>
          <p className="text-[17px] text-cream/65 leading-relaxed mb-4">
            Nous construisons Sprout &amp; Vine en public, avec les opérateurs qui l'utiliseront. Les membres fondateurs verrouillent leur tarif, façonnent la feuille de route et obtiennent un accès anticipé avant le lancement public.
          </p>
          <p className="text-[14px] text-cream/60 mb-10">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
              {FOUNDING_SPOTS_REMAINING} des {FOUNDING_SPOTS_TOTAL} places fondatrices restantes. Candidatures examinées dans l'ordre de réception.
            </span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/fr/founding"
              className="bg-terracotta text-white text-[14px] font-medium px-8 py-4 rounded-lg hover:bg-[#d4724e] transition-colors"
            >
              Postuler au Programme fondateur
            </Link>
            <Link
              href="/fr/about"
              className="text-cream text-[14px] font-medium px-8 py-4 rounded-lg border-2 border-cream/40 hover:border-cream/70 transition-colors"
            >
              Notre histoire
            </Link>
          </div>
        </div>
      </section>

      {/* ── CAPTURE EMAIL ─────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20 px-5 md:px-8 border-t border-[rgba(47,74,58,0.08)]">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.14em] text-sage-green font-semibold mb-3">
            Restez informé
          </p>
          <h2
            className="font-display font-medium text-forest-green leading-snug mb-3"
            style={{ fontSize: 'clamp(24px, 3vw, 32px)' }}
          >
            Pas encore prêt? Recevez des mises à jour pendant que nous construisons.
          </h2>
          <p className="text-[15px] text-dark-text/55 mb-8 leading-relaxed">
            Aucun engagement. Nous partageons ce que nous construisons, ce que nous apprenons, et quand nous sommes prêts pour vous.
          </p>
          <div className="max-w-md mx-auto">
            <EmailCapture
              showFirstName
              heading=""
              subheading=""
              buttonText="Recevoir les mises à jour"
              source="fr-homepage-strip"
              emailPlaceholder="votre@centre.ca"
              firstNamePlaceholder="Prénom"
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
