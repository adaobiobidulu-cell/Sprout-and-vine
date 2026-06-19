import type { Metadata } from 'next'
import Link from 'next/link'
import FadeIn from '@/components/fade-in'
import FrFoundingForm from '@/components/fr-founding-form'
import { FOUNDING_SPOTS_REMAINING, FOUNDING_SPOTS_TOTAL } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Programme des opérateurs fondateurs | Sprout & Vine Care',
  description: 'Rejoignez le Programme des opérateurs fondateurs. Accès anticipé, tarif fondateur verrouillé à vie, et une voix directe dans ce que nous construisons. Inscriptions ouvertes.',
}

const benefits = [
  {
    icon: '🔒',
    title: 'Tarif fondateur verrouillé à vie',
    desc: 'Les membres fondateurs reçoivent un rabais permanent sur le tarif standard. Le tarif auquel vous adhérez est celui que vous conservez, peu importe notre croissance.',
  },
  {
    icon: '🗺️',
    title: 'Contribution directe à la feuille de route',
    desc: 'Vous aidez à décider ce qui est construit en premier. Appels mensuels avec notre équipe fondatrice, priorité sur les demandes de fonctionnalités, et une ligne directe avec les personnes qui construisent ceci.',
  },
  {
    icon: '🚀',
    title: 'Accès anticipé avant le lancement public',
    desc: "Les membres fondateurs ont accès à la plateforme avant son ouverture au public. Vous serez sur Sprout et Vine pendant que d'autres sont encore sur la liste d'attente.",
  },
  {
    icon: '🌱',
    title: 'Reconnaissance comme opérateur fondateur',
    desc: 'Votre centre est reconnu dans la plateforme et dans nos communications en tant que membre fondateur. Vous avez aidé à construire ceci. Cela compte.',
  },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">
      {children}
    </p>
  )
}

export default function FrFoundingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta text-[12px] font-semibold px-4 py-2 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
            Inscriptions ouvertes maintenant
          </div>
          <div className="inline-flex items-center gap-2 text-[13px] font-medium text-dark-text/60 mb-8">
            <span className="w-2 h-2 rounded-full bg-terracotta/60" />
            {FOUNDING_SPOTS_REMAINING} des {FOUNDING_SPOTS_TOTAL} places fondatrices restantes
          </div>
          <h1
            className="font-display font-medium text-forest-green leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}
          >
            Le Programme des opérateurs fondateurs
          </h1>
          <p className="text-[17px] text-dark-text/65 leading-relaxed max-w-xl mx-auto">
            Nous construisons Sprout &amp; Vine en public, avec les opérateurs canadiens de services de garde qui l'utiliseront chaque jour. Les membres fondateurs obtiennent un accès anticipé, un tarif fondateur et une vraie voix dans ce que nous construisons.
          </p>
        </div>
      </section>

      {/* What founders get */}
      <section className="bg-white py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-14">
            <SectionLabel>Ce que vous obtenez</SectionLabel>
            <h2 className="font-display font-medium text-forest-green leading-[1.1]" style={{ fontSize: 'clamp(34px, 4vw, 50px)' }}>
              Bien plus qu'un accès anticipé.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((b, i) => (
              <FadeIn key={b.title} delay={i * 0.08}>
              <div className="bg-cream rounded-2xl p-7 hover:-translate-y-1 transition-transform duration-200">
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3 className="font-display text-[22px] font-medium text-forest-green mb-3">{b.title}</h3>
                <p className="text-[14px] text-dark-text/65 leading-relaxed">{b.desc}</p>
              </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="bg-cream py-16 md:py-20 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="font-display font-medium text-forest-green leading-[1.1] mb-8" style={{ fontSize: 'clamp(32px, 4vw, 46px)' }}>
              À qui ce programme est destiné
            </h2>
            <div className="space-y-4">
              {[
                'Les centres de garde agréés dans toute province ou tout territoire canadien',
                'Les prestataires de services de garde en milieu familial agréés',
                'Les opérateurs aspirants qui prévoient ouvrir dans les 12 prochains mois',
                'Les opérateurs multi-installations et les réseaux de services de garde',
              ].map(item => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-forest-green/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#2F4A3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-[15px] text-dark-text/75 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-[14px] text-dark-text/50 leading-relaxed mt-8 pl-8">
              Nous examinons chaque candidature personnellement. Si vous ne savez pas si vous êtes admissible, postulez et parlez-nous de votre situation. Nous préférons avoir de vos nouvelles.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Application form */}
      <section className="bg-white py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <FadeIn>
            <h2 className="font-display font-medium text-forest-green leading-[1.08] mb-6" style={{ fontSize: 'clamp(30px, 3.5vw, 42px)' }}>
              Postulez aujourd'hui.
            </h2>
            <p className="text-[16px] text-dark-text/65 leading-relaxed mb-8">
              Les places dans le Programme des opérateurs fondateurs sont limitées. Les candidatures sont examinées dans l'ordre de réception. Nous répondrons à chaque candidat dans les 2 à 3 jours ouvrables.
            </p>
            <div className="space-y-5">
              {[
                { step: '1', label: 'Soumettez votre candidature', desc: 'Prend moins de 2 minutes.' },
                { step: '2', label: 'Nous examinons et répondons', desc: 'Dans les 2 à 3 jours ouvrables. Chaque candidat reçoit une réponse.' },
                { step: '3', label: 'Appel fondateur avec notre équipe', desc: 'Un court appel pour en apprendre davantage sur votre centre et partager où nous en sommes dans la construction.' },
                { step: '4', label: 'Accès anticipé accordé', desc: 'Vous êtes admis. Tarif fondateur verrouillé. Accès à la plateforme quand elle est prête.' },
              ].map(item => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-forest-green/10 flex items-center justify-center flex-shrink-0 text-[13px] font-semibold text-forest-green">
                    {item.step}
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-dark-text">{item.label}</p>
                    <p className="text-[13px] text-dark-text/50 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[13px] text-dark-text/40 mt-8">
              Vous préférez le courriel? Contactez-nous à{' '}
              <a href="mailto:hello@sproutandvinecare.ca" className="text-forest-green underline underline-offset-2">
                hello@sproutandvinecare.ca
              </a>
            </p>
          </FadeIn>

          <div
            className="bg-cream rounded-2xl p-8"
            style={{ boxShadow: '0 4px 32px rgba(47,74,58,0.08)' }}
          >
            <FrFoundingForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-16 md:py-20 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-medium text-forest-green mb-10" style={{ fontSize: 'clamp(28px, 3.5vw, 40px)' }}>
            Questions fréquentes
          </h2>
          <div className="space-y-0 divide-y divide-[rgba(47,74,58,0.08)]">
            {[
              {
                q: 'La plateforme est-elle déjà construite?',
                a: "Nous la construisons maintenant. Le Programme des opérateurs fondateurs existe pour que les personnes qui comprennent ce travail au quotidien puissent façonner ce qui est construit. Nous partagerons notre progression ouvertement, et les membres fondateurs auront accès au fur et à mesure que les fonctionnalités seront prêtes.",
              },
              {
                q: 'Que signifie exactement le tarif fondateur?',
                a: "Les membres fondateurs verrouillent un tarif réduit qu'ils conservent aussi longtemps qu'ils restent sur la plateforme. Nous partagerons les chiffres spécifiques lors de votre appel fondateur une fois que nous aurons examiné votre candidature.",
              },
              {
                q: 'Combien de places fondatrices sont disponibles?',
                a: "Nous gardons la cohorte fondatrice délibérément petite. Nous voulons être vraiment réactifs à chaque membre fondateur, et cela nécessite un groupe gérable pour commencer.",
              },
              {
                q: "Je ne suis pas encore ouvert. Puis-je quand même postuler?",
                a: "Oui. Si vous prévoyez ouvrir un centre de garde dans les 12 prochains mois, nous aimerions avoir de vos nouvelles. Le niveau Seeds de notre plateforme est conçu spécifiquement pour les opérateurs aspirants.",
              },
              {
                q: "Que se passe-t-il si la plateforme ne me convient pas?",
                a: "Rien n'est signé. Il n'y a aucun engagement jusqu'à ce que vous choisissiez d'aller de l'avant. La candidature est un point de départ pour la conversation, pas un contrat.",
              },
            ].map(faq => (
              <div key={faq.q} className="py-6">
                <p className="text-[15px] font-semibold text-dark-text mb-2">{faq.q}</p>
                <p className="text-[14px] text-dark-text/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
