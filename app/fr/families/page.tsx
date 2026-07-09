import type { Metadata } from 'next'
import { altFr } from '@/lib/seo'
import FadeIn from '@/components/fade-in'
import FamilyInterestForm from '@/components/family-interest-form'

export const metadata: Metadata = {
  title: 'Pour les familles | Sprout & Vine Care',
  description:
    "L'application Vine gardera les familles connectées à leur service de garde: mises à jour quotidiennes, photos de jalons, notifications de ramassage sécurisé et communication bilingue. Inscrivez-vous pour savoir quand des garderies près de chez vous rejoindront Sprout & Vine Care.",
  alternates: altFr('/fr/families', '/families'),
}

/* Descriptions reprises de la section «Application Vine» de la page
   d'accueil française; rien d'inventé (brief 2.2). */
const features = [
  {
    icon: '👨‍👩‍👧',
    title: 'Cercle familial',
    desc: 'Maman, papa, grands-parents, beaux-parents et gardiennes, chacun avec un accès selon son rôle. Les coparents de foyers séparés restent tous deux pleinement informés.',
  },
  {
    icon: '🔒',
    title: 'Autorisation de ramassage sécurisée',
    desc: "Liste de ramassage autorisée avec vérification photo. Les parents sont avisés dès que leur enfant quitte, et par qui.",
  },
  {
    icon: '🌱',
    title: 'Jalons et parcours de développement',
    desc: "Les éducatrices notent les moments du quotidien: premiers ciseaux, premier ami, première phrase complète. Ils construisent automatiquement une histoire de développement que les parents chériront.",
  },
  {
    icon: '💬',
    title: 'Tout dans une seule application',
    desc: "Mises à jour quotidiennes, photos de jalons, facturation, historique de ramassage, messages et communications importantes du service de garde, tout au même endroit, attaché au profil de votre enfant.",
  },
]

export default function FrFamiliesPage() {
  return (
    <>
      {/* Héro */}
      <section className="bg-cream py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn margin="0px">
            <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">
              Pour les familles
            </p>
            <h1
              className="font-display font-medium text-forest-green leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
            >
              Restez connecté à la journée de votre enfant.
            </h1>
            <p className="text-[17px] text-dark-text/60 leading-relaxed max-w-xl mx-auto">
              L&rsquo;application Vine permet aux familles sur Sprout &amp; Vine Care de voir les mises à jour quotidiennes, les photos de jalons et les notifications de ramassage de leur service de garde. Application à venir au T4 2026, installable sur iPhone et Android dès le premier jour.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Ce que fera l'application */}
      <section className="bg-white py-16 md:py-20 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.08}>
                <div className="bg-cream/60 rounded-2xl p-6 border border-[rgba(47,74,58,0.08)] h-full">
                  <span className="text-2xl block mb-3">{f.icon}</span>
                  <p className="text-[15px] font-semibold text-dark-text mb-1.5">{f.title}</p>
                  <p className="text-[13.5px] text-dark-text/60 leading-relaxed">{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Ligne d'état honnête */}
          <FadeIn delay={0.15}>
            <p className="text-[14px] text-dark-text/50 text-center mt-10">
              La plateforme est en développement avec nos opérateurs fondateurs. Les familles y accèdent par leur service de garde une fois celui-ci sur Sprout &amp; Vine Care.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Formulaire d'intérêt */}
      <section className="bg-cream py-16 md:py-20 px-5 md:px-8">
        <div className="max-w-xl mx-auto">
          <FadeIn>
            <h2
              className="font-display font-medium text-forest-green leading-snug mb-3 text-center"
              style={{ fontSize: 'clamp(26px, 3.5vw, 36px)' }}
            >
              Sachez quand des garderies près de chez vous nous rejoignent.
            </h2>
            <p className="text-[15px] text-dark-text/55 leading-relaxed text-center mb-10">
              Dites-nous où vous êtes et nous vous aviserons quand des services de garde de votre région rejoindront la plateforme. C&rsquo;est la seule utilisation que nous en ferons.
            </p>
            <div className="bg-white rounded-2xl border border-[rgba(47,74,58,0.1)] p-7" style={{ boxShadow: '0 4px 24px rgba(47,74,58,0.07)' }}>
              <FamilyInterestForm isFr />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
