import type { Metadata } from 'next'
import Link from 'next/link'
import FadeIn from '@/components/fade-in'
import ResourceDownload from '@/components/resource-download'

export const metadata: Metadata = {
  title: 'Ressources | Sprout & Vine Care',
  description: 'Guides et outils gratuits pour les exploitants canadiens de services de garde: guide des subventions PÉLCN, listes de contrôle des permis provinciaux et plus encore.',
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">
      {children}
    </p>
  )
}

const cwelccInside = [
  'Comment les subventions PÉLCN sont calculées dans toutes les provinces',
  "Exigences documentaires et déclencheurs courants d'audit",
  'Comment réconcilier les paiements de subventions avec les factures',
  "Ce qui change lorsque votre province renégocie son accord",
  "Taux de subvention provinciaux de référence (mis à jour en 2026)",
]

const checklistInside = [
  "Liste de contrôle documentaire pièce par pièce pour les inspections de permis",
  "Exigences de qualification du personnel et de ratio par province",
  "Modèles de politiques de santé, sécurité et nutrition",
  "Modèles de plan d'urgence et de rapport d'incident",
  "Ce que les inspecteurs recherchent et les raisons courantes d'échec",
]

export default function FrResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <SectionLabel>Ressources</SectionLabel>
            <h1
              className="font-display font-medium text-forest-green leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(40px, 5.5vw, 64px)' }}
            >
              Outils gratuits pour les exploitants canadiens de services de garde.
            </h1>
            <p className="text-[17px] text-dark-text/60 leading-relaxed max-w-2xl">
              Nous créons des guides pratiques pour les sujets qui demandent le plus de temps: la gestion des subventions PÉLCN, les permis provinciaux et la documentation de conformité.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Resources */}
      <section className="bg-white py-16 md:py-20 px-5 md:px-8">
        <div className="max-w-5xl mx-auto space-y-10">

          {/* CWELCC Guide */}
          <FadeIn>
            <div className="rounded-2xl border border-[rgba(47,74,58,0.12)] overflow-hidden" style={{ boxShadow: '0 4px 24px rgba(47,74,58,0.07)' }}>
              <div className="bg-forest-green px-8 py-6 flex items-start gap-5">
                <div className="text-4xl flex-shrink-0 mt-0.5">🍁</div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-sage-green font-semibold mb-1">Guide gratuit</p>
                  <h2 className="font-display font-medium text-cream leading-tight" style={{ fontSize: 'clamp(22px, 3vw, 30px)' }}>
                    Le guide complet des subventions PÉLCN pour les exploitants canadiens
                  </h2>
                </div>
              </div>
              <div className="px-8 py-7">
                <p className="text-[15px] text-dark-text/65 leading-relaxed mb-7">
                  Le cadre du Programme d'apprentissage et de garde des jeunes enfants à l'échelle du Canada représente le plus grand changement dans le financement des services de garde depuis une génération, et les mécanismes de subvention varient considérablement selon la province. Ce guide simplifie la complexité pour que vous puissiez cesser de deviner et commencer à planifier.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-dark-text/40 mb-3">Ce que vous trouverez</p>
                    <ul className="space-y-2.5">
                      {cwelccInside.map(item => (
                        <li key={item} className="flex items-start gap-2.5">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                            <circle cx="8" cy="8" r="8" fill="#2F4A3A" fillOpacity="0.1" />
                            <path d="M4.5 8l2.5 2.5 4-4.5" stroke="#2F4A3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span className="text-[13px] text-dark-text/65 leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-cream rounded-xl p-6 flex flex-col justify-between gap-4">
                    <div>
                      <p className="text-[13px] font-semibold text-forest-green mb-1">Soyez averti dès sa publication</p>
                      <p className="text-[12px] text-dark-text/50 mb-4">Nous vous enverrons le guide par courriel dès sa publication. Gratuit, sans engagement.</p>
                    </div>
                    <ResourceDownload resource="cwelcc-guide" label="Le guide complet des subventions PÉLCN" />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Licensing Checklist */}
          <FadeIn delay={0.05}>
            <div className="rounded-2xl border border-[rgba(47,74,58,0.12)] overflow-hidden" style={{ boxShadow: '0 4px 24px rgba(47,74,58,0.07)' }}>
              <div className="bg-cream px-8 py-6 flex items-start gap-5 border-b border-[rgba(47,74,58,0.1)]">
                <div className="text-4xl flex-shrink-0 mt-0.5">📋</div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-sage-green font-semibold mb-1">Liste de contrôle gratuite</p>
                  <h2 className="font-display font-medium text-forest-green leading-tight" style={{ fontSize: 'clamp(22px, 3vw, 30px)' }}>
                    Liste de contrôle provinciale des permis pour les centres nouveaux et existants
                  </h2>
                </div>
              </div>
              <div className="px-8 py-7">
                <p className="text-[15px] text-dark-text/65 leading-relaxed mb-7">
                  Que vous ouvriez un nouveau centre ou que vous prépariez votre prochaine inspection, cette liste couvre toutes les exigences en matière de documentation, de personnel et de conformité, détaillées par province afin que vous ne voyiez que ce qui vous concerne.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-dark-text/40 mb-3">Ce que vous trouverez</p>
                    <ul className="space-y-2.5">
                      {checklistInside.map(item => (
                        <li key={item} className="flex items-start gap-2.5">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                            <circle cx="8" cy="8" r="8" fill="#2F4A3A" fillOpacity="0.1" />
                            <path d="M4.5 8l2.5 2.5 4-4.5" stroke="#2F4A3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span className="text-[13px] text-dark-text/65 leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-cream rounded-xl p-6 flex flex-col justify-between gap-4">
                    <div>
                      <p className="text-[13px] font-semibold text-forest-green mb-1">Soyez averti dès sa publication</p>
                      <p className="text-[12px] text-dark-text/50 mb-4">Nous vous enverrons la liste par courriel dès sa publication. Gratuite, sans engagement.</p>
                    </div>
                    <ResourceDownload resource="licensing-checklist" label="Liste de contrôle provinciale des permis" />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Also available */}
      <section className="bg-cream py-16 md:py-20 px-5 md:px-8">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionLabel>Également disponible</SectionLabel>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {[
              {
                icon: '💬',
                title: "Centre d'aide",
                desc: "Guides étape par étape et tutoriels vidéo pour toutes les fonctionnalités de Sprout & Vine. Bientôt disponible.",
                href: '/fr/help',
                cta: "Visiter le centre d'aide",
              },
              {
                icon: '📓',
                title: 'Blogue',
                desc: "Réflexions sur la gestion des services de garde, le financement PÉLCN et la gestion d'un centre prospère au Canada.",
                href: '/fr/blog',
                cta: 'Lire le blogue',
              },
              {
                icon: '🗺️',
                title: 'Feuille de route',
                desc: "Découvrez ce que nous construisons ensuite. Nous partageons notre feuille de route publiquement.",
                href: '/fr/roadmap',
                cta: 'Voir la feuille de route',
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 border border-[rgba(47,74,58,0.08)] hover:-translate-y-1 transition-transform duration-200 h-full flex flex-col" style={{ boxShadow: '0 2px 12px rgba(47,74,58,0.06)' }}>
                  <span className="text-3xl block mb-4">{item.icon}</span>
                  <h3 className="text-[16px] font-semibold text-dark-text mb-2">{item.title}</h3>
                  <p className="text-[13px] text-dark-text/55 leading-relaxed flex-1 mb-5">{item.desc}</p>
                  <Link href={item.href} className="text-[13px] font-medium text-forest-green hover:underline">
                    {item.cta} →
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-green py-16 px-5 md:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display font-medium text-cream leading-[1.08] mb-5" style={{ fontSize: 'clamp(30px, 4vw, 46px)' }}>
            Prêt à mettre tout cela en pratique?
          </h2>
          <p className="text-cream/65 text-[15px] leading-relaxed mb-8">
            Sprout &amp; Vine gère automatiquement le suivi PÉLCN, la documentation des permis et la conformité, afin que votre équipe puisse se concentrer sur les enfants, pas sur la paperasse.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/fr/contact"
              className="bg-terracotta text-white text-[14px] font-medium px-7 py-3.5 rounded-lg hover:opacity-90 transition-opacity"
            >
              Prendre rendez-vous
            </Link>
            <Link
              href="/fr/features"
              className="text-cream/75 text-[14px] font-medium hover:text-cream transition-colors"
            >
              Explorer la plateforme →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
