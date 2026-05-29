import Image from 'next/image'
import Link from 'next/link'
import DashboardPreview from '@/components/dashboard-preview'
import ProductTour from '@/components/product-tour'
import PricingCards from '@/components/pricing-cards'
import ROICalculator from '@/components/roi-calculator'
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

const trustLogos = [
  { name: 'Petits Explorateurs', icon: '🌅' },
  { name: 'Jardins du Savoir', icon: '🌳' },
  { name: 'Cœur Joyeux', icon: '💚' },
  { name: 'La Maison des Tout-Petits', icon: '🔍' },
  { name: 'Arc-en-Ciel', icon: '☀️' },
]

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
      <section className="py-16 md:py-24 px-5 md:px-8 bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          <div className="order-2 lg:order-1">
            <SectionLabel>Grandir ensemble. Nourrir l'avenir.</SectionLabel>
            <h1
              className="font-display font-medium text-forest-green leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(42px, 5.5vw, 68px)' }}
            >
              Chaque enfant enraciné.<br />
              Chaque centre{' '}
              <em className="text-terracotta not-italic">en croissance.</em>
            </h1>
            <p className="text-[17px] text-dark-text/65 mb-9 max-w-[440px] leading-relaxed">
              Présences, facturation, communication avec les familles, personnel et autorisation de collecte sécurisée. Tout sur une seule plateforme calme.
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-9">
              <Link href="/fr/contact" className="bg-forest-green text-white text-[14px] font-medium px-6 py-3.5 rounded-lg hover:bg-[#243d2f] transition-colors">
                Commencer l'essai gratuit
              </Link>
              <Link href="/fr/features" className="flex items-center gap-2 text-[14px] font-medium text-dark-text/75 border border-[rgba(47,74,58,0.22)] px-6 py-3.5 rounded-lg hover:border-[rgba(47,74,58,0.45)] transition-colors">
                <span className="text-[11px]">▶</span> Explorer la plateforme
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex">
                {['SP', 'MJ', 'AK', 'LT'].map((initials, i) => (
                  <div key={initials} className="w-8 h-8 rounded-full bg-forest-green border-2 border-cream flex items-center justify-center text-[9px] text-cream font-bold" style={{ marginLeft: i > 0 ? '-8px' : 0, zIndex: 4 - i }}>
                    {initials}
                  </div>
                ))}
              </div>
              <div className="text-amber-400 text-sm tracking-wider">★★★★★</div>
              <span className="text-[13px] text-dark-text/55">Apprécié par plus de 1 000 centres</span>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden relative" style={{ boxShadow: '0 24px 72px rgba(47,74,58,0.2)' }}>
              <Image
                src="/hero-photo.jpg"
                alt="Une éducatrice donne un high-five à un enfant lors d'une activité de peinture"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <svg className="absolute top-0 left-0 w-20 h-44 pointer-events-none" viewBox="0 0 64 176" fill="none">
                <path d="M 20 4 C 22 20 12 36 18 54 C 24 72 36 78 30 102 C 24 126 10 132 16 158" stroke="#2F4A3A" strokeWidth="1.8" strokeLinecap="round" opacity="0.65" />
                <ellipse cx="26" cy="60" rx="7" ry="11" fill="#AEC1B0" transform="rotate(-20 26 60)" opacity="0.7" />
                <ellipse cx="18" cy="105" rx="6" ry="10" fill="#AEC1B0" transform="rotate(24 18 105)" opacity="0.6" />
              </svg>
            </div>
            <div className="animate-float absolute -bottom-4 right-2 md:right-6 bg-white rounded-2xl flex items-center gap-3 z-10" style={{ padding: '12px 16px', boxShadow: '0 12px 40px rgba(47,74,58,0.18)', maxWidth: '260px' }}>
              <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-lg" style={{ background: 'rgba(110,183,111,0.12)' }}>🌱</div>
              <div>
                <p className="text-[12px] font-semibold text-dark-text leading-snug">Mila a atteint un nouveau jalon!</p>
                <p className="text-[11px] text-dark-text/45 mt-0.5">Langage · il y a 2 min</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: PREUVE SOCIALE ───────────────────────────── */}
      <section className="bg-white py-10 px-5 md:px-8 border-y border-[rgba(47,74,58,0.07)]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.18em] text-dark-text/35 font-semibold text-center mb-7">
            Utilisé par des centres à travers le Canada
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
            {trustLogos.map(({ name, icon }) => (
              <div key={name} className="flex items-center gap-2 opacity-55 hover:opacity-80 transition-opacity">
                <span className="text-lg">{icon}</span>
                <span className="text-[13px] font-medium text-dark-text">{name}</span>
              </div>
            ))}
          </div>
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

      {/* ── SECTION 8: FAIT POUR LE CANADA ──────────────────────── */}
      <section className="bg-white py-20 md:py-24 px-5 md:px-8">
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

      {/* ── SECTION 9: TARIFICATION ─────────────────────────────── */}
      <section className="bg-cream py-20 md:py-24 px-5 md:px-8">
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

      {/* ── SECTION 11: TÉMOIGNAGES ─────────────────────────────── */}
      {/* ── SECTION 12: FAQ ─────────────────────────────────────── */}
      <section className="bg-cream py-20 px-5 md:px-8">
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

      {/* ── SECTION 13: BANDE CTA ───────────────────────────────── */}
      <section className="bg-forest-green py-20 md:py-24 px-5 md:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-medium text-cream leading-[1.08] mb-5" style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}>
            Prêt à simplifier vos opérations?
          </h2>
          <p className="text-cream/55 text-[16px] mb-10">
            Rejoignez les opérateurs de garderies à travers le Canada qui grandissent avec Sprout &amp; Vine.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/fr/contact" className="bg-terracotta text-white text-[14px] font-medium px-7 py-3.5 rounded-lg hover:bg-[#d4724e] transition-colors">
              Commencer l'essai gratuit
            </Link>
            <Link href="/fr/contact" className="text-cream border-2 border-cream/40 text-[14px] font-medium px-7 py-3.5 rounded-lg hover:border-cream transition-colors">
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
