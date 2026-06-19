import type { Metadata } from 'next'
import Link from 'next/link'
import EmailCapture from '@/components/email-capture'

export const metadata: Metadata = {
  title: 'Comment ouvrir un centre de la petite enfance au Canada (2026) | Sprout & Vine Care',
  description:
    "Les étapes, les coûts, le financement PÉLCPN et l'obtention du permis pour ouvrir un centre de garde agréé au Canada. Guide mis à jour en 2026.",
}

export default function FrChildcareCentrePage() {
  return (
    <>
      <section className="bg-cream py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-4">
            <Link href="/fr/seeds" className="text-[13px] text-dark-text/50 hover:text-forest-green transition-colors">Seeds</Link>
            <span className="text-[13px] text-dark-text/30 mx-2">/</span>
            <span className="text-[13px] text-dark-text/50">Centre de la petite enfance</span>
          </div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-4">Guide 2026</p>
          <h1 className="font-display font-medium text-forest-green leading-[1.05] mb-5" style={{ fontSize: 'clamp(34px, 5vw, 56px)' }}>
            Ouvrir un centre de garde agréé au Canada.
          </h1>
          <p className="text-[16px] text-dark-text/60 leading-relaxed mb-8 max-w-xl">
            Un centre de garde agréé est un engagement d'affaires important. Voici les étapes, les coûts réels, les sources de financement disponibles et le calendrier auquel vous attendre.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/seeds/childcare-centre" className="text-[14px] font-medium text-forest-green border-2 border-forest-green px-6 py-3 rounded-lg hover:bg-forest-green hover:text-white transition-colors">
              Lire le guide complet (en anglais)
            </Link>
            <Link href="/founding" className="bg-forest-green text-white text-[14px] font-medium px-6 py-3 rounded-lg hover:bg-[#243d2f] transition-colors">
              Rejoindre le Programme fondateur
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-6">Étapes clés</p>
          <div className="space-y-6">
            {[
              { n: 1, title: "Évaluer si un centre vous convient", body: "Avez-vous (ou allez-vous embaucher quelqu'un qui possède) un diplôme en EJE avec 2 ans d'expérience ou plus? Avez-vous accès à des capitaux? Un centre de taille modeste nécessite généralement 50 000 $ à 200 000 $." },
              { n: 2, title: "Contacter le gestionnaire de services local", body: "Votre premier appel doit être adressé au gestionnaire de services municipal (CMSM ou DSSAB) de votre région. Il contrôle les priorités locales du PÉLCPN, les allocations de places et les critères d'admissibilité au financement." },
              { n: 3, title: "Choisir et évaluer votre emplacement", body: "L'espace doit être zoné pour un service de garde. Minimum 2,8 m² d'espace de jeu intérieur non obstrué par enfant (Ontario). Des pièces séparées sont requises pour les nourrissons, les bambins et les groupes préscolaires." },
              { n: 4, title: "Bâtir votre plan d'affaires", body: "Plan de programme, plan financier (les salaires représentent généralement 70 à 80 % des coûts), plan de dotation en personnel, projections d'inscriptions et analyse de rentabilité." },
              { n: 5, title: "Demander votre permis", body: "Postulez via le Système de délivrance des permis de service de garde (SDPSG) de l'Ontario. Délai habituel: 4 à 6 mois au minimum. Prévoyez 6 à 18 mois dans votre calendrier de projet." },
              { n: 6, title: "Accéder au financement PÉLCPN", body: "Subvention de démarrage: jusqu'à 350 000 $ par 20 nouvelles places. Financement de fonctionnement continu une fois ouvert et inscrit. Ne signez pas de bail ou d'engagement financier majeur avant l'approbation du financement." },
            ].map(s => (
              <div key={s.n} className="flex gap-5">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-forest-green/10 flex items-center justify-center">
                  <span className="text-[15px] font-display font-medium text-forest-green">{s.n}</span>
                </div>
                <div>
                  <p className="text-[16px] font-semibold text-dark-text mb-1">{s.title}</p>
                  <p className="text-[14px] text-dark-text/60 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-8 border-t border-[rgba(47,74,58,0.08)]">
            <Link href="/seeds/childcare-centre" className="inline-block text-[14px] font-medium text-forest-green underline underline-offset-4 hover:text-[#243d2f] transition-colors">
              Lire le guide complet avec toutes les estimations de coûts et les liens gouvernementaux (en anglais) →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 px-5 md:px-8">
        <div className="max-w-xl mx-auto">
          <EmailCapture
            heading="Restez informé."
            subheading="Recevez les mises à jour sur le programme PÉLCPN et les ressources pour les nouveaux opérateurs."
            buttonText="S'abonner"
            source="fr-seeds-centre"
          />
        </div>
      </section>
    </>
  )
}
