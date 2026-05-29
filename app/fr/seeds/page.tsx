import type { Metadata } from 'next'
import Link from 'next/link'
import EmailCapture from '@/components/email-capture'

export const metadata: Metadata = {
  title: 'Ouvrir une garderie au Canada? Commencez ici. | Sprout & Vine',
  description:
    "Le programme Seeds donne aux futurs opérateurs les outils, les listes de vérification et les guides pour passer de l'idée à l'ouverture. Gratuit, sans carte de crédit.",
}

export default function FrSeedsPage() {
  return (
    <>
      <section className="bg-cream py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-4">Seeds</p>
          <h1
            className="font-display font-medium text-forest-green leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
          >
            Chaque grand service de garde<br />commence par une question.
          </h1>
          <p className="text-[17px] text-dark-text/60 leading-relaxed mb-3 max-w-xl mx-auto">
            &ldquo;Est-ce que je peux vraiment faire ça?&rdquo;
          </p>
          <p className="text-[16px] text-dark-text/55 leading-relaxed mb-10 max-w-xl mx-auto">
            La réponse est oui. Le programme Seeds vous accompagne de l'idée à l'ouverture des portes, gratuitement et sans carte de crédit.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/fr/seeds/garderie-milieu-familial" className="bg-forest-green text-white text-[14px] font-medium px-7 py-3.5 rounded-lg hover:bg-[#243d2f] transition-colors">
              Ouvrir une garderie en milieu familial
            </Link>
            <Link href="/fr/seeds/centre-de-la-petite-enfance" className="text-forest-green border-2 border-forest-green text-[14px] font-medium px-6 py-3.5 rounded-lg hover:bg-forest-green hover:text-white transition-colors">
              Ouvrir un centre de la petite enfance
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-8">Ressources Seeds</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '🏠', title: 'Garderie en milieu familial', desc: "Guide complet pour ouvrir une garderie familiale agréée au Canada.", href: '/fr/seeds/garderie-milieu-familial' },
              { icon: '🏫', title: 'Centre de la petite enfance', desc: "Les étapes, les coûts, le financement PÉLCPN et l'obtention du permis.", href: '/fr/seeds/centre-de-la-petite-enfance' },
              { icon: '🎓', title: 'Qualifications', desc: "Ce dont vous avez besoin pour travailler dans les services de garde au Canada.", href: '/fr/seeds/qualifications' },
              { icon: '💰', title: 'Financement de démarrage', desc: "Chaque subvention et programme de financement disponible pour les nouveaux opérateurs.", href: '/fr/seeds/financement' },
              { icon: '📊', title: 'Plan d\'affaires', desc: "Outil interactif pour bâtir votre plan d'affaires étape par étape.", href: '/seeds/business-plan' },
              { icon: '✅', title: 'Préparation au PÉLCPN', desc: "Préparez-vous avant l'ouverture pour accéder au financement dès le premier jour.", href: '/fr/seeds/preparation-pelcpn' },
            ].map(card => (
              <Link key={card.title} href={card.href} className="block rounded-2xl p-6 border border-[rgba(47,74,58,0.1)] hover:border-forest-green/30 bg-cream transition-colors">
                <div className="text-2xl mb-3">{card.icon}</div>
                <p className="text-[15px] font-semibold text-dark-text mb-1">{card.title}</p>
                <p className="text-[13px] text-dark-text/55 leading-relaxed">{card.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 px-5 md:px-8">
        <div className="max-w-xl mx-auto">
          <EmailCapture
            heading="Obtenez le kit de démarrage Seeds."
            subheading="Liste de vérification des licences, guide de financement et modèle de plan d'affaires, le tout en un seul envoi."
            buttonText="Recevoir le kit"
            source="fr-seeds-hub"
          />
        </div>
      </section>
    </>
  )
}
