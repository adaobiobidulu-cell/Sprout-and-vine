import Link from 'next/link'
import FadeIn from '@/components/fade-in'
import ProductTour from '@/components/product-tour'
import DashboardPreview from '@/components/dashboard-preview'
import EmailCapture from '@/components/email-capture'
import CanadaMap from '@/components/canada-map'
import PhotoAccent from '@/components/photo-accent'
import JsonLd from '@/components/json-ld'
import { PartLabel, GroupLabel } from '@/components/part-label'
import { testimonial } from '@/lib/testimonial'
import type { Metadata } from 'next'
import { altFr } from '@/lib/seo'
import { softwareApplicationSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Sprout & Vine Care | Gestion de garderie au Canada',
  description: 'Présences, facturation, communication avec les familles et autorisation de collecte sécurisée. La plateforme de gestion construite pour les garderies canadiennes.',
  alternates: altFr('/fr'),
}

const features = [
  {
    name: 'Connexion Familiale',
    desc: 'Gardez les parents informés et engagés grâce à des mises à jour en temps réel.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#2F4A3A" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
        <path d="M16 3.13a4 4 0 010 7.75" />
        <path d="M21 21v-2a4 4 0 00-3-3.87" />
      </svg>
    ),
  },
  {
    name: 'Suivi des Présences',
    desc: 'Présences précises à portée de main. Économisez du temps chaque jour.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#2F4A3A" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4" />
      </svg>
    ),
  },
  {
    name: 'Rapports Quotidiens',
    desc: 'De magnifiques rapports quotidiens en quelques minutes, pas des heures.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#2F4A3A" strokeWidth="1.5" strokeLinecap="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
  },
  {
    name: "Développement de l'Enfant",
    desc: 'Suivez les jalons et observations facilement.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#2F4A3A" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 20V10M18 20V4M6 20v-4" />
      </svg>
    ),
  },
  {
    name: 'Facturation et Paiements',
    desc: 'Simplifiez la gestion des frais de scolarité et soyez payé à temps.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#2F4A3A" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M9.5 9.5A2.5 2.5 0 0112 8a2.5 2.5 0 010 5 2.5 2.5 0 010 5 2.5 2.5 0 01-2.5-1.5" />
      </svg>
    ),
  },
  {
    name: 'Autorisation de Ramassage',
    desc: 'Listes de ramassage vérifiées par photo. Alertes instantanées aux parents.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#2F4A3A" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    name: "Inscription et Liste d'Attente",
    desc: 'De la première demande au premier jour, géré numériquement.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#2F4A3A" strokeWidth="1.5" strokeLinecap="round">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        <path d="M12 12h.01M12 16h.01M8 12h.01M8 16h.01" />
      </svg>
    ),
  },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">
      {children}
    </p>
  )
}

function PhoneShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto" style={{ width: '220px' }}>
      <div className="rounded-[36px] p-2.5" style={{ background: '#1a1a1a', boxShadow: '0 32px 80px rgba(0,0,0,0.35)' }}>
        <div className="rounded-[28px] overflow-hidden bg-white" style={{ minHeight: '420px' }}>
          <div className="flex justify-center pt-2 pb-1">
            <div className="w-16 h-1.5 rounded-full bg-[#1a1a1a]/10" />
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default function FrenchHomePage() {
  return (
    <>
      <JsonLd data={softwareApplicationSchema('fr')} />

      {/* ══════════════ PARTIE 1: CE QU'EST SPROUT & VINE CARE ══════════════ */}
      <PartLabel number="01 /" title="Ce qu'est Sprout & Vine Care" bg="bg-cream" />

      {/* ── HÉRO: une arrivée calme et séquencée */}
      <section className="pb-24 md:pb-32 px-5 md:px-8 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn margin="0px">
            <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta text-[12px] font-semibold px-4 py-2 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
              Programme des opérateurs fondateurs · Inscriptions ouvertes
            </div>
          </FadeIn>

          <FadeIn margin="0px" delay={0.12}>
            <h1
              className="font-display font-medium text-forest-green leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(38px, 5vw, 66px)' }}
            >
              La plateforme de gestion<br />
              que nous construisons avec<br className="hidden sm:block" />{' '}
              <em className="text-terracotta not-italic">les opérateurs canadiens.</em>
            </h1>
          </FadeIn>

          <FadeIn margin="0px" delay={0.24}>
            <p className="text-[18px] text-dark-text/65 mb-10 max-w-xl mx-auto leading-relaxed">
              Sprout &amp; Vine Care est une plateforme moderne de gestion des garderies conçue pour les centres canadiens. Nous nous associons à un groupe limité d&apos;opérateurs fondateurs pour façonner l&apos;avenir de l&apos;inscription, de la conformité, de la communication et de la gestion de centre.
            </p>
          </FadeIn>

          <FadeIn margin="0px" delay={0.36}>
            <div className="flex flex-col items-center gap-4">
              <Link
                id="hero-primary-cta"
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
          </FadeIn>

          {/* Bandeau de confiance */}
          <FadeIn margin="0px" delay={0.48}>
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
          </FadeIn>
        </div>
      </section>

      {/* ── L'OBSTACLE — presque immobile; les mots portent le poids */}
      <section className="bg-white py-16 md:py-20 px-5 md:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <p
              className="font-display font-medium leading-snug mb-4"
              style={{ fontSize: 'clamp(22px, 2.8vw, 32px)', color: '#0F6E56' }}
            >
              L&apos;obstacle n&apos;est pas la passion. L&apos;obstacle est l&apos;information et l&apos;infrastructure.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-[16px] text-dark-text/60 mb-6">
              C&apos;est pourquoi nous avons construit Sprout &amp; Vine Care pour le Canada.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-[15px] font-semibold text-forest-green mb-6">
              Sprout &amp; Vine Care est bâti avec les opérateurs, pas pour eux.
            </p>
            <Link href="/fr/about" className="text-[14px] font-medium text-forest-green hover:underline">
              Lire notre histoire →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── TROIS PARCOURS */}
      <section className="bg-cream py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-14">
            <SectionLabel>La Plateforme</SectionLabel>
            <h2 className="font-display font-medium text-forest-green leading-[1.1]" style={{ fontSize: 'clamp(36px, 4.5vw, 52px)' }}>
              Une seule plateforme. Trois étapes de croissance.
            </h2>
            <p className="text-[16px] text-dark-text/55 mt-4 max-w-xl mx-auto">
              Que vous prévoyiez ouvrir, gériez un seul centre ou plusieurs emplacements, Sprout &amp; Vine Care évolue avec vous.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeIn delay={0.05}>
            <div className="bg-white rounded-2xl p-7 border border-[rgba(47,74,58,0.08)] hover:border-[rgba(47,74,58,0.22)] hover:-translate-y-1 transition-all duration-200" style={{ boxShadow: '0 4px 20px rgba(47,74,58,0.06)' }}>
              <div className="text-2xl mb-4">🌱</div>
              <h3 className="font-display text-[26px] font-medium text-forest-green mb-1">Seeds</h3>
              <p className="text-[13px] font-medium text-dark-text/50 mb-4">Pour les opérateurs de garderies en devenir</p>
              <p className="text-[14px] text-dark-text/65 leading-relaxed mb-6">
                Vous planifiez votre centre? Élaborez votre plan d&apos;affaires, complétez votre liste de vérification de permis provincial, et préparez tout avant le jour un.
              </p>
              <Link href="/fr/features" className="group inline-flex items-center gap-1 text-[14px] font-medium text-forest-green hover:underline">
                Commencer à planifier <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]">→</span>
              </Link>
            </div>
            </FadeIn>

            <FadeIn delay={0.12}>
            <div
              className="bg-white rounded-2xl p-7 relative hover:-translate-y-1 transition-transform duration-200"
              style={{ border: '2px solid #2F4A3A', boxShadow: '0 12px 40px rgba(47,74,58,0.14)' }}
            >
              <div className="text-2xl mb-4">🌿</div>
              <h3 className="font-display text-[26px] font-medium text-forest-green mb-1">Sprout</h3>
              <p className="text-[13px] font-medium text-dark-text/50 mb-4">Pour les centres en croissance et les fournisseurs en milieu familial</p>
              <p className="text-[14px] text-dark-text/65 leading-relaxed mb-6">
                Vous êtes ouvert. Gérez maintenant vos opérations quotidiennes avec élégance: présences, facturation, communication avec les familles et Ramassage Sécurisé, le tout en un seul endroit.
              </p>
              <Link href="/fr/founding" className="group inline-flex items-center gap-1 text-[14px] font-medium text-forest-green hover:underline">
                Rejoindre le programme fondateur <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]">→</span>
              </Link>
            </div>
            </FadeIn>

            <FadeIn delay={0.24}>
            <div className="bg-white rounded-2xl p-7 border border-[rgba(47,74,58,0.08)] hover:border-[rgba(47,74,58,0.22)] hover:-translate-y-1 transition-all duration-200" style={{ boxShadow: '0 4px 20px rgba(47,74,58,0.06)' }}>
              <div className="text-2xl mb-4">🍃</div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-display text-[26px] font-medium text-forest-green">Vine</h3>
                <span className="text-[10px] font-semibold text-dark-text/40 border border-[rgba(47,74,58,0.15)] px-2 py-0.5 rounded-full">Multi-emplacements</span>
              </div>
              <p className="text-[13px] font-medium text-dark-text/50 mb-4">Pour les organisations multi-emplacements en expansion</p>
              <p className="text-[14px] text-dark-text/65 leading-relaxed mb-6">
                Plusieurs emplacements, un seul tableau de bord serein. Supervisez tout, produisez des rapports entre centres, et croissez sans le chaos.
              </p>
              <Link href="/fr/founding" className="group inline-flex items-center gap-1 text-[14px] font-medium text-forest-green hover:underline">
                Rejoindre le programme fondateur <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]">→</span>
              </Link>
            </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════════════ PARTIE 2: CONÇU POUR LES SERVICES DE GARDE CANADIENS ══════════════ */}
      <PartLabel number="02 /" title="Conçu pour les services de garde canadiens" bg="bg-white" />

      {/* ── PÉLCN / CANADA — révélation de crédibilité: structurée, confiante */}
      <section className="bg-white pb-20 md:pb-24 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <SectionLabel>Fait Pour le Canada</SectionLabel>
            <h2 className="font-display font-medium text-forest-green leading-[1.08] mb-6" style={{ fontSize: 'clamp(34px, 4vw, 50px)' }}>
              Une plateforme construite autour du PÉLCN dès le départ.
            </h2>
            <p className="text-[16px] text-dark-text/65 leading-relaxed mb-12 max-w-2xl">
              Le paysage des services de garde au Canada est unique. Sprout &amp; Vine Care est conçu spécifiquement pour les opérateurs canadiens, avec le suivi des subventions PÉLCN, le support bilingue (FR/EN) et la conformité provinciale intégrés dès le premier jour.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🍁',
                title: 'Suivi des subventions PÉLCN',
                desc: "Calculez et suivez automatiquement les subventions du Programme d'apprentissage et de garde des jeunes enfants. Fini les feuilles de calcul.",
              },
              {
                icon: '🇫🇷',
                title: 'Entièrement bilingue',
                desc: "Anglais et français dans toute la plateforme et l'application Vine, intégrés dès le départ.",
              },
              {
                icon: '📋',
                title: 'Conformité Provinciale',
                desc: 'Listes de vérification de permis et suivi des ratios prévus, conçus selon les exigences provinciales.',
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.12}>
                <span className="text-3xl block mb-4">{item.icon}</span>
                <h3 className="text-[16px] font-semibold text-dark-text mb-2">{item.title}</h3>
                <p className="text-[14px] text-dark-text/60 leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.15}>
            <div className="mt-12 pt-8 border-t border-[rgba(47,74,58,0.1)]">
              <p className="text-[12px] font-medium text-dark-text/40 uppercase tracking-[0.12em] mb-3">
                Nous accueillons maintenant des opérateurs fondateurs en
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {['Ontario', 'Colombie-Britannique', 'Alberta', 'Manitoba', 'Québec'].map((province, i, arr) => (
                  <span key={province} className="text-[14px] font-medium text-dark-text/55">
                    {province}{i < arr.length - 1 ? <span className="text-dark-text/25"> · </span> : null}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CARTE DU CANADA ── */}
      <section className="bg-white py-16 md:py-20 px-5 md:px-8">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <CanadaMap caption="Bâti province par province pour les services de garde canadiens." />
        </div>
      </section>

      {/* ══════════════ PARTIE 3: CONÇU AUTOUR DES FLUX DE TRAVAIL QUOTIDIENS ══════════════ */}
      <PartLabel number="03 /" title="Conçu autour des flux de travail quotidiens des services de garde" bg="bg-white" />

      {/* ── GRILLE DE FONCTIONNALITÉS — organisée, pas accablante */}
      <section className="bg-white pb-20 md:pb-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="font-display font-medium text-forest-green text-center leading-[1.1] mb-16" style={{ fontSize: 'clamp(36px, 4.5vw, 52px)' }}>
              Tout ce dont vous avez besoin, en un seul endroit. 🌿
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            {features.slice(0, 4).map((f, i) => (
              <FadeIn key={f.name} delay={Math.min(i, 5) * 0.09} className="group flex flex-col items-center text-center">
                <div
                  className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4 p-3.5 transition-colors duration-200 group-hover:bg-cream"
                  style={{ border: '1.5px solid rgba(47,74,58,0.15)', boxShadow: '0 4px 16px rgba(47,74,58,0.08)' }}
                >
                  {f.icon}
                </div>
                <h3 className="text-[14px] font-semibold text-dark-text mb-1.5">{f.name}</h3>
                <p className="text-[13px] text-dark-text/55 leading-relaxed">{f.desc}</p>
              </FadeIn>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 mt-10 md:max-w-3xl md:mx-auto">
            {features.slice(4).map((f, i) => (
              <FadeIn key={f.name} delay={Math.min(i + 4, 5) * 0.09} className="group flex flex-col items-center text-center">
                <div
                  className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4 p-3.5 transition-colors duration-200 group-hover:bg-cream"
                  style={{ border: '1.5px solid rgba(47,74,58,0.15)', boxShadow: '0 4px 16px rgba(47,74,58,0.08)' }}
                >
                  {f.icon}
                </div>
                <h3 className="text-[14px] font-semibold text-dark-text mb-1.5">{f.name}</h3>
                <p className="text-[13px] text-dark-text/55 leading-relaxed">{f.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TABLEAU DE BORD — le produit prend vie */}
      <section className="bg-cream py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[35%_1fr] gap-12 items-center">
          <FadeIn>
            <h2 className="font-display font-medium text-forest-green leading-[1.08] mb-5" style={{ fontSize: 'clamp(32px, 3.5vw, 48px)' }}>
              Conçu pour les centres occupés.<br />Bâti pour ce qui compte le plus. 🌿
            </h2>
            <p className="text-[16px] text-dark-text/65 leading-relaxed mb-7">
              De l&apos;inscription aux opérations quotidiennes, Sprout &amp; Vine Care vous aide à économiser du temps, réduire le stress et vous concentrer sur les enfants dont vous avez la charge.
            </p>
            <Link
              href="/fr/features"
              className="inline-block bg-forest-green text-white text-[14px] font-medium px-6 py-3.5 rounded-lg hover:bg-[#243d2f] transition-colors"
            >
              Explorer toutes les fonctionnalités
            </Link>
            <PhotoAccent
              src="/pexels-mikhail-nilov-8923952.jpg"
              alt="Du matériel éducatif lumineux et organisé sur les étagères d'une salle de classe"
              width={160}
              height={200}
              rotate={2}
              tone="sage"
              className="mt-8"
            />
          </FadeIn>

          <FadeIn delay={0.15} className="min-w-0">
            <DashboardPreview />
          </FadeIn>
        </div>
      </section>

      {/* ── Pour un ramassage plus sécuritaire ── */}
      <GroupLabel bg="bg-forest-green">
        <span className="text-sage-green">Pour un ramassage plus sécuritaire</span>
      </GroupLabel>

      {/* ── RAMASSAGE SÉCURISÉ — sécurité sans drame, confiance calme */}
      <section className="bg-forest-green pb-20 md:pb-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">Sécurité des Parents</p>
            <h2 className="font-display font-medium text-cream leading-[1.08] mb-6" style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}>
              Tranquillité d&apos;esprit,<br />à chaque ramassage.
            </h2>
            <p className="text-[16px] text-cream/65 leading-relaxed mb-8 max-w-lg">
              La plupart des applications informent les parents que leur enfant a été récupéré. Sprout &amp; Vine Care leur indique <em>qui</em> a récupéré leur enfant, montre une photo, et envoie une notification instantanée avant même qu&apos;ils n&apos;aient quitté le stationnement.
            </p>
            <ul className="space-y-4">
              {[
                { icon: '🔒', text: 'Liste de ramassage autorisée vérifiée par photo' },
                { icon: '📱', text: 'Notification instantanée: nom, photo et heure' },
                { icon: '🚗', text: "Heure d'arrivée estimée en temps réel des parents et tuteurs" },
              ].map(item => (
                <li key={item.text} className="flex items-start gap-3 text-[15px] text-cream/80">
                  <span className="text-lg flex-shrink-0 leading-none mt-0.5">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
            <PhotoAccent
              src="/pexels-tiger-lily-8260484.jpg"
              alt="Un parent aidant son enfant à enfiler son sac à dos avant de partir"
              width={168}
              height={224}
              rotate={-2}
              className="mt-8"
            />
          </FadeIn>

          <FadeIn delay={0.15} x={24} className="flex justify-center">
            <PhoneShell>
              <div className="px-3 pb-3 space-y-2.5">
                <div className="text-[10px] text-dark-text/40 text-center py-1">Application Vine</div>

                <div className="rounded-2xl p-3.5 bg-forest-green">
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white text-sm">✓</div>
                    <div>
                      <p className="text-white text-[11px] font-semibold">Alerte de Ramassage Sécurisé</p>
                      <p className="text-white/55 text-[9px]">À l&apos;instant</p>
                    </div>
                  </div>
                  <p className="text-cream font-semibold text-[13px] mb-0.5">Sophie a été récupérée</p>
                  <p className="text-cream/65 text-[11px]">Par Grand-maman Rose · 15h14</p>
                </div>

                <div className="rounded-xl border border-[rgba(47,74,58,0.1)] p-3 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-light-sage/30 flex items-center justify-center text-2xl">👵</div>
                  <div>
                    <p className="text-[12px] font-semibold text-dark-text">Rose Mitchell</p>
                    <p className="text-[10px] text-dark-text/45">Grand-mère · Autorisée</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-sage-green" />
                      <span className="text-[9px] text-sage-green font-medium">Photo vérifiée</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-sage-green/10 py-2.5 flex items-center justify-center gap-2">
                  <span className="text-sage-green text-sm">✓</span>
                  <span className="text-[11px] font-semibold text-sage-green">Ramassage confirmé</span>
                </div>

                <div className="text-center pt-1">
                  <p className="text-[10px] text-dark-text/35">Notification envoyée aux deux parents</p>
                </div>
              </div>
            </PhoneShell>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA CONTEXTUEL: Prendre rendez-vous ── */}
      <div className="bg-white py-8 px-5 md:px-8 border-y border-[rgba(47,74,58,0.07)]">
        <FadeIn className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[15px] text-dark-text/65 font-medium text-center sm:text-left">
            Vous voulez voir Ramassage Sécurisé et la plateforme complète en action?
          </p>
          <Link
            href="/fr/contact"
            className="flex-shrink-0 bg-forest-green text-white text-[13px] font-medium px-6 py-2.5 rounded-lg hover:bg-[#243d2f] transition-colors whitespace-nowrap"
          >
            Prendre rendez-vous
          </Link>
        </FadeIn>
      </div>

      {/* ── Pour l'inscription et la communication avec les familles ── */}
      <GroupLabel bg="bg-cream">Pour l&apos;inscription et la communication avec les familles</GroupLabel>

      {/* ── INSCRIPTION ET LISTE D'ATTENTE — chaque étape s'illumine au défilement */}
      <section className="bg-cream pb-20 md:pb-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="space-y-3">
              {[
                { num: '1', label: 'Demande', desc: "Formulaire en ligne · Liste d'attente automatique", icon: '📬' },
                { num: '2', label: "Liste d'attente", desc: 'Position suivie · Parent notifié', icon: '📋' },
                { num: '3', label: 'Offre envoyée', desc: 'Dossier numérique · Signature électronique', icon: '📄' },
                { num: '4', label: 'Inscrit ✓', desc: 'PÉLCN pré-rempli · Prêt dès le jour 1', icon: '💚', active: true },
              ].map((stage, i) => (
                <FadeIn key={stage.label} delay={i * 0.12} className="relative">
                  <div
                    className="flex items-center gap-4 rounded-xl p-4 bg-white border transition-colors"
                    style={{
                      border: stage.active ? '1.5px solid #6EB76F' : '1px solid rgba(47,74,58,0.1)',
                      boxShadow: stage.active ? '0 4px 20px rgba(110,183,111,0.12)' : '0 2px 10px rgba(47,74,58,0.05)',
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-lg"
                      style={{ background: stage.active ? 'rgba(110,183,111,0.15)' : 'rgba(47,74,58,0.06)' }}
                    >
                      {stage.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-[14px] font-semibold text-dark-text">{stage.label}</p>
                      <p className="text-[12px] text-dark-text/45">{stage.desc}</p>
                    </div>
                    <span className="text-[11px] font-semibold text-dark-text/25">{stage.num}</span>
                  </div>
                  {i < 3 && (
                    <div className="flex justify-center py-0.5">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M 8 2 C 10 6 6 10 8 14" stroke="#AEC1B0" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                  )}
                </FadeIn>
              ))}
            </div>
          </div>

          <FadeIn delay={0.15}>
            <SectionLabel>L&apos;Inscription Simplifiée</SectionLabel>
            <h2 className="font-display font-medium text-forest-green leading-[1.08] mb-6" style={{ fontSize: 'clamp(34px, 4vw, 50px)' }}>
              De la première demande au<br />premier jour, géré avec élégance.
            </h2>
            <p className="text-[16px] text-dark-text/65 leading-relaxed mb-8">
              Les centres canadiens ont des listes d&apos;attente de 2 à 3 ans. Sprout &amp; Vine Care gère tout le parcours: formulaires de demande, positions sur liste d&apos;attente, dossiers d&apos;inscription, signature électronique, et documents de subvention pré-remplis à partir de vos données PÉLCN. Aucune feuille de calcul. Aucun papier. Aucun stress.
            </p>
            <ul className="space-y-4">
              {[
                { icon: '📬', text: "Formulaires de demande en ligne avec placement automatique sur liste d'attente" },
                { icon: '📄', text: "Dossiers d'inscription numériques avec signature électronique" },
                { icon: '💳', text: 'Documents de subvention pré-remplis à partir de vos données PÉLCN' },
              ].map(item => (
                <li key={item.text} className="flex items-start gap-3 text-[15px] text-dark-text/75">
                  <span className="text-lg flex-shrink-0 leading-none mt-0.5">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* ── APPLICATION VINE POUR LES PARENTS — révélation douce du téléphone */}
      <section className="bg-white py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn x={-24} className="flex justify-center order-2 lg:order-1">
            <PhoneShell>
              <div className="px-3 pb-3 space-y-2">
                <div className="text-[10px] font-semibold text-forest-green text-center py-1 border-b border-[rgba(47,74,58,0.08)]">
                  Fil d&apos;activité
                </div>
                {[
                  { icon: '📷', title: 'Emma travaillant sur son projet artistique', sub: 'Salle des Papillons · 10h24', color: '#AEC1B0' },
                  { icon: '🌱', title: 'Jalon: Première utilisation des ciseaux!', sub: 'Développement · 10h31', color: '#6EB76F' },
                  { icon: '📋', title: "Rapport quotidien d'Olivia est prêt", sub: 'Appuyez pour lire · 12h03', color: '#2F4A3A' },
                  { icon: '💬', title: 'Message de Little Learners', sub: 'Photos du printemps vendredi!', color: '#E2845F' },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-2.5 p-2.5 rounded-xl" style={{ background: 'rgba(247,242,232,0.7)' }}>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-base"
                      style={{ background: `${item.color}20` }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-dark-text leading-snug">{item.title}</p>
                      <p className="text-[9px] text-dark-text/40 mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PhoneShell>
          </FadeIn>

          <FadeIn delay={0.15} className="order-1 lg:order-2">
            <SectionLabel>L&apos;Application Vine pour les Parents</SectionLabel>
            <h2 className="font-display font-medium text-forest-green leading-[1.08] mb-5" style={{ fontSize: 'clamp(34px, 4vw, 50px)' }}>
              Les parents ne sont pas seulement notifiés.<br />Ils sont connectés.
            </h2>
            <p className="text-[16px] text-dark-text/65 leading-relaxed mb-8">
              Les familles restent connectées grâce aux mises à jour quotidiennes, photos de jalons, facturation, historique de ramassage, messages et communications importantes du centre, le tout dans une seule application. Chaque mise à jour est rattachée au profil de leur enfant. Rien ne se perd.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: '👨‍👩‍👧',
                  title: 'Cercle Familial',
                  badge: 'Fonctionnalité vedette',
                  desc: 'Maman, papa, grands-parents, beaux-parents et nounous, chacun avec un accès basé sur son rôle. Les coparents dans des foyers séparés restent tous deux pleinement informés.',
                },
                {
                  icon: '🔒',
                  title: 'Autorisation de Ramassage Sécurisé',
                  desc: "Liste de ramassage autorisée vérifiée par photo. Les parents sont notifiés dès que leur enfant est signé, et par qui.",
                },
                {
                  icon: '🌱',
                  title: 'Jalons et Chronologie de Développement',
                  desc: 'Les éducatrices identifient les moments du quotidien: premiers ciseaux, premier ami, première phrase complète. Elles construisent automatiquement un précieux récit de développement que les parents chériront.',
                },
              ].map(item => (
                <div key={item.title} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-xl"
                    style={{ background: 'rgba(47,74,58,0.07)' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="text-[14px] font-semibold text-dark-text">{item.title}</p>
                      {item.badge && (
                        <span
                          className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                          style={{ background: 'rgba(110,183,111,0.12)', color: '#6EB76F' }}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[13px] text-dark-text/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 pt-6 border-t border-[rgba(47,74,58,0.1)]">
              <span className="inline-flex items-center gap-2 bg-forest-green/8 text-forest-green text-[12px] font-medium px-4 py-2 rounded-lg">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                  <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
                  <path d="M11 18.5h2" strokeLinecap="round" />
                </svg>
                Application pour les familles à venir au T4 2026, installable sur iPhone et Android dès le premier jour
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Pour les dossiers des enfants et du personnel ── */}
      <GroupLabel bg="bg-cream">Pour les dossiers des enfants et du personnel</GroupLabel>

      {/* ── PROFIL ENFANT — organisé, sûr, professionnel ─────────── */}
      <section className="bg-cream pb-20 md:pb-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <SectionLabel>Disponible au lancement</SectionLabel>
            <h2
              className="font-display font-medium text-forest-green leading-[1.05] mb-5"
              style={{ fontSize: 'clamp(34px, 4vw, 52px)' }}
            >
              Chaque enfant. Un profil.<br />Un dossier qui grandit avec eux.
            </h2>
            <p className="text-[16px] text-dark-text/65 leading-relaxed mb-4">
              Le profil de l&apos;enfant commence dès l&apos;inscription. Il les accompagne quand ils partent.
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
            <PhotoAccent
              src="/pexels-kseniachernaya-8535187.jpg"
              alt="Une éducatrice jouant avec un enfant à l'aide de blocs de bois colorés"
              width={200}
              height={134}
              rotate={-1.5}
              className="mb-8"
            />
            <Link
              href="/fr/features"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-forest-green hover:underline"
            >
              Voir comment le profil se construit dans le temps →
            </Link>
          </FadeIn>

          {/* Maquette de la carte de profil */}
          <FadeIn delay={0.15}>
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
                  <span className="text-[10px] text-dark-text/35">Aujourd&apos;hui</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── PROFIL DU PERSONNEL ── */}
      <section className="bg-white py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn className="flex justify-center order-2 lg:order-1">
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
          </FadeIn>

          <FadeIn delay={0.15} className="order-1 lg:order-2">
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
              Chaque membre du personnel sur Sprout &amp; Vine Care a un profil qui lui appartient. Les parents voient ce qui compte: un nom, une photo, depuis combien de temps cette personne s&apos;occupe de leur enfant, et des badges d&apos;accréditation vérifiés. Les directeurs voient tout ce dont ils ont besoin pour la conformité, la planification et les licences. En un seul endroit.
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
          </FadeIn>
        </div>
      </section>

      {/* ── Pour les éducateurs et les opérateurs ── */}
      <GroupLabel bg="rgba(174,193,176,0.15)">Pour les éducateurs et les opérateurs</GroupLabel>

      {/* ── SECTION ÉDUCATEURS — chaleur humaine, mouvement lent et calme */}
      <section className="pb-20 md:pb-24 px-5 md:px-8" style={{ background: 'rgba(174,193,176,0.15)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <SectionLabel>Pour les Éducateurs</SectionLabel>
            <h2 className="font-display font-medium text-forest-green leading-[1.08] mb-5" style={{ fontSize: 'clamp(34px, 4vw, 50px)' }}>
              Bâti pour les gens<br />qui se présentent chaque jour.
            </h2>
            <p className="text-[16px] text-dark-text/65 leading-relaxed mb-10 max-w-2xl mx-auto">
              Les directeurs choisissent Sprout &amp; Vine Care. Les éducateurs l&apos;adorent. Ce n&apos;est pas un hasard. Nous avons conçu chaque flux de travail autour des personnes qui l&apos;utilisent vraiment.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
            {[
              { icon: '📋', title: 'Rapports quotidiens en moins de 2 minutes', desc: "Modèles à compléter d'un tapotement. Ajoutez une photo. Terminé avant la sieste." },
              { icon: '🌱', title: 'Identifiez les jalons depuis votre téléphone', desc: 'Vous remarquez quelque chose de beau? Identifiez-le en 10 secondes. Cela construit automatiquement leur chronologie de développement.' },
              { icon: '💬', title: 'Envoyez des messages aux parents sans votre numéro personnel', desc: "Toute communication passe par l'application. Les limites professionnelles sont respectées. Les parents ne peuvent pas vous texter à 23h." },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.12} className="bg-white rounded-xl p-5 border border-[rgba(47,74,58,0.08)]" style={{ boxShadow: '0 2px 12px rgba(47,74,58,0.06)' }}>
                <span className="text-2xl block mb-3">{item.icon}</span>
                <p className="text-[14px] font-semibold text-dark-text mb-1.5">{item.title}</p>
                <p className="text-[13px] text-dark-text/55 leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2} className="flex items-end justify-center gap-4 mb-10">
            <PhotoAccent
              src="/pexels-yankrukov-8613054.jpg"
              alt="Une éducatrice guidant des enfants dans une activité de peinture à l'aquarelle"
              width={190}
              height={150}
              rotate={2}
              tone="sage"
            />
            <PhotoAccent
              src="/Child Painting.jpg"
              alt="Les mains d'un enfant utilisant des aquarelles lors d'une activité quotidienne"
              width={92}
              height={116}
              rotate={-3}
            />
          </FadeIn>

          <Link
            href="/for-educators"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-forest-green border-2 border-forest-green px-7 py-3.5 rounded-lg hover:bg-forest-green hover:text-white transition-colors"
          >
            Voir l&apos;expérience éducatrice →
          </Link>
        </div>
      </section>

      {/* ── CTA CONTEXTUEL: Explorer les fonctionnalités ── */}
      <div className="bg-cream py-8 px-5 md:px-8 border-y border-[rgba(47,74,58,0.07)]">
        <FadeIn className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[15px] text-dark-text/65 font-medium text-center sm:text-left">
            Curieux de tout ce que la plateforme peut faire?
          </p>
          <Link
            href="/fr/features"
            className="flex-shrink-0 border-2 border-forest-green text-forest-green text-[13px] font-medium px-6 py-2.5 rounded-lg hover:bg-forest-green hover:text-white transition-colors whitespace-nowrap"
          >
            Explorer les fonctionnalités
          </Link>
        </FadeIn>
      </div>

      {/* ── INTELLIGENCE ARTIFICIELLE — subtile: données → tendance → suggestion utile */}
      <section className="bg-white py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
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
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              { icon: '📝', title: 'Aide à la documentation', desc: 'Aide à la rédaction de rapports d\'incidents, résumés quotidiens et notes de développement.' },
              { icon: '💬', title: 'Rédaction de communications aux familles', desc: 'Réponses suggérées et mises à jour prêtes à réviser avant l\'envoi.' },
              { icon: '🌱', title: 'Soutien aux observations du développement', desc: 'Reconnaissance de patterns dans les jalons pour faire ressortir des insights significatifs.' },
              { icon: '📬', title: 'Aide au suivi des inscriptions', desc: 'Rappels opportuns et brouillons de messages pour les familles sur liste d\'attente.' },
              { icon: '📊', title: 'Insights opérationnels', desc: 'Mise en évidence de patterns dans les présences, la facturation et les données quotidiennes du centre.' },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1} className="flex items-start gap-3 bg-cream rounded-xl p-4">
                <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                <div>
                  <p className="text-[13px] font-semibold text-dark-text mb-0.5">{item.title}</p>
                  <p className="text-[12px] text-dark-text/55 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.15}>
            <p className="text-[15px] font-semibold text-forest-green mb-7">
              Chaque suggestion est un point de départ. Les éducateurs décident toujours.
            </p>
            <Link
              href="/fr/pricing"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-forest-green hover:underline"
            >
              Voir la philosophie tarifaire →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════ PARTIE 4: CE QUE NOUS CONSTRUISONS EN PREMIER ══════════════ */}
      <PartLabel number="04 /" title="Ce que nous construisons en premier" bg="bg-cream" />

      {/* ── VISITE INTERACTIVE — aperçu guidé */}
      <section className="bg-cream pb-20 md:pb-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-12">
            <SectionLabel>Voyez-le en Action</SectionLabel>
            <h2 className="font-display font-medium text-forest-green leading-[1.08] mb-4" style={{ fontSize: 'clamp(34px, 4vw, 50px)' }}>
              30 secondes pour inscrire un enfant.<br />2 minutes pour envoyer un rapport quotidien.
            </h2>
            <p className="text-[16px] text-dark-text/55">
              Découvrez la plateforme avant de prendre rendez-vous.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <ProductTour />
          </FadeIn>
        </div>
      </section>

      {/* ── CTA CONTEXTUEL: Tarification — stable et posé ── */}
      <div className="bg-white py-8 px-5 md:px-8 border-y border-[rgba(47,74,58,0.07)]">
        <FadeIn className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[15px] text-dark-text/65 font-medium text-center sm:text-left">
            Conçu pour le Canada, ça veut aussi dire conçu pour votre budget.
          </p>
          <Link
            href="/fr/pricing"
            className="flex-shrink-0 border-2 border-forest-green text-forest-green text-[13px] font-medium px-6 py-2.5 rounded-lg hover:bg-forest-green hover:text-white transition-colors whitespace-nowrap"
          >
            Comment fonctionne la tarification
          </Link>
        </FadeIn>
      </div>

      {/* ══════════════ PARTIE 5: AIDEZ À FAÇONNER SPROUT & VINE CARE ══════════════ */}
      <PartLabel number="05 /" title="Aidez à façonner Sprout & Vine Care" bg="bg-forest-green" dark />

      {/* ── LETTRE DE LA FONDATRICE — personnelle et immobile: un seul fondu lent */}
      <section className="bg-forest-green pb-20 md:pb-24 px-5 md:px-8">
        <FadeIn className="max-w-3xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-8">
            Un mot de la fondatrice
          </p>
          <blockquote className="space-y-5 mb-10">
            <p className="font-display font-medium text-cream leading-relaxed" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
              &ldquo;Sprout &amp; Vine Care n'a pas commencé avec un plan d'affaires. Tout a commencé quand nous avons eu notre premier bébé et que j'ai commencé à chercher ce qu'il faudrait pour ouvrir une garderie familiale au Canada. J'ai frappé un mur.
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
              <p className="text-cream/50 text-[13px]">Co-Fondatrice, Sprout &amp; Vine Care</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-cream/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <Link href="/fr/about" className="text-[14px] font-medium text-sage-green hover:text-cream transition-colors">
              Lire notre histoire complète →
            </Link>
            <PhotoAccent
              src="/pexels-pavel-danilyuk-8422126.jpg"
              alt="Des éducatrices travaillant avec un groupe diversifié d'enfants d'âge préscolaire"
              width={160}
              height={102}
              rotate={-1.5}
            />
          </div>
        </FadeIn>
      </section>

      {/* ── L'HISTOIRE DE LA FONDATRICE (RÉSUMÉ) */}
      <section className="bg-cream py-16 md:py-20 px-5 md:px-8 text-center">
        <FadeIn className="max-w-xl mx-auto">
          <p
            className="font-display font-medium text-forest-green leading-snug mb-6"
            style={{ fontSize: 'clamp(22px, 2.8vw, 30px)' }}
          >
            Bâti par une équipe passionnée par le soutien aux opérateurs, éducateurs et familles des services de garde canadiens.
          </p>
          <Link href="/fr/about" className="inline-flex items-center gap-2 text-[14px] font-medium text-forest-green border-2 border-forest-green px-6 py-3 rounded-lg hover:bg-forest-green hover:text-white transition-colors">
            Découvrir notre histoire →
          </Link>
        </FadeIn>
      </section>

      {/* ── PREUVE SOCIALE AVEC COMPTEUR — confiance sincère, sans surenchère ── */}
      <section className="bg-white py-16 md:py-20 px-5 md:px-8">
        <FadeIn className="max-w-3xl mx-auto text-center">
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
            Nous invitons des opérateurs fondateurs de l'Ontario, de la C.-B., de l'Alberta,<br className="hidden sm:block" /> du Manitoba et du Québec à contribuer à façonner la plateforme.
          </p>
          <p className="text-[15px] text-dark-text/55 mb-8 leading-relaxed">
            Les candidatures sont examinées dans l'ordre de réception.
          </p>
          <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta text-[14px] font-semibold px-6 py-3 rounded-full">
            <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
            Ouvert pour une première cohorte limitée
          </div>
        </FadeIn>
      </section>

      {/* ── TÉMOIGNAGE (conditionnel) ─────────────────────────── */}
      {testimonial.text && (
        <section className="bg-cream py-16 md:py-20 px-5 md:px-8">
          <FadeIn className="max-w-2xl mx-auto text-center">
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
          </FadeIn>
        </section>
      )}

      {/* ── BANDE CTA PROGRAMME FONDATEUR — fort mais calme: le moment de conversion ── */}
      <section className="bg-forest-green py-24 md:py-32 px-5 md:px-8 text-center">
        <FadeIn className="max-w-2xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">
            Programme des opérateurs fondateurs
          </p>
          <h2 className="font-display font-medium text-cream leading-[1.08] mb-5" style={{ fontSize: 'clamp(38px, 5vw, 56px)' }}>
            Faites partie des premiers<br />à construire avec nous.
          </h2>
          <p className="text-[17px] text-cream/65 leading-relaxed mb-4">
            Nous construisons Sprout &amp; Vine Care en public, avec les opérateurs qui l'utiliseront. Les membres fondateurs verrouillent leur tarif, façonnent la feuille de route et obtiennent un accès anticipé avant le lancement public.
          </p>
          <p className="text-[14px] text-cream/60 mb-10">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
              Ouvert pour une première cohorte limitée. Candidatures examinées dans l'ordre de réception.
            </span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/fr/founding"
              className="bg-terracotta text-white text-[14px] font-medium px-8 py-4 rounded-lg transition-all duration-200 hover:bg-[#d4724e] hover:shadow-[0_0_0_6px_rgba(226,132,95,0.18)]"
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
        </FadeIn>
      </section>

      {/* ── CAPTURE EMAIL ─────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20 px-5 md:px-8 border-t border-[rgba(47,74,58,0.08)]">
        <FadeIn className="max-w-xl mx-auto text-center">
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
              consentLabel="J'accepte de recevoir des mises à jour de Sprout & Vine Care. Je peux me désabonner à tout moment."
              successTitle="Vous êtes sur la liste."
              successSubtitle="Nous vous contacterons au fil de notre progression."
            />
          </div>
        </FadeIn>
      </section>
    </>
  )
}
