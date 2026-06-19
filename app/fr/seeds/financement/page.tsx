import type { Metadata } from 'next'
import Link from 'next/link'
import EmailCapture from '@/components/email-capture'

export const metadata: Metadata = {
  title: 'Financement de démarrage pour les services de garde au Canada (2026) | Sprout & Vine Care',
  description:
    "Toutes les subventions, aides provinciales et sources de financement disponibles pour les nouveaux opérateurs de services de garde au Canada. PÉLCPN, CCFRI, et plus encore.",
}

export default function FrFundingPage() {
  return (
    <>
      <section className="bg-cream py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-4">
            <Link href="/fr/seeds" className="text-[13px] text-dark-text/50 hover:text-forest-green transition-colors">Seeds</Link>
            <span className="text-[13px] text-dark-text/30 mx-2">/</span>
            <span className="text-[13px] text-dark-text/50">Financement</span>
          </div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-4">Guide 2026</p>
          <h1 className="font-display font-medium text-forest-green leading-[1.05] mb-5" style={{ fontSize: 'clamp(34px, 5vw, 56px)' }}>
            Le financement pour ouvrir votre service de garde. Voici ce qui est réel.
          </h1>
          <p className="text-[16px] text-dark-text/60 leading-relaxed max-w-xl">
            Le financement est réellement disponible, mais il n'est pas simple. Il passe par les municipalités, non directement par les provinces ou Ottawa. Ce que vous pouvez obtenir dépend fortement de l'endroit où vous voulez ouvrir et du type de programme que vous proposez.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 px-5 md:px-8">
        <div className="max-w-3xl mx-auto space-y-10">
          {[
            {
              title: 'Ontario: Subvention de démarrage PÉLCPN (garderie familiale)',
              amount: "Jusqu'à 7 200 $",
              badge: 'Garderie familiale',
              body: "Disponible pour les nouveaux fournisseurs de garde en milieu familial agréés. Jusqu'à 1 200 $ par nouvel espace de garde agréé (maximum 6 espaces). La participation au PÉLCPN est obligatoire: vous devez accepter de réduire les frais aux parents aux taux du PÉLCPN. Demande: par l'intermédiaire de votre agence de garde en milieu familial agréée et de votre CMSM ou DSSAB local.",
            },
            {
              title: 'Ontario: Subvention de capital PÉLCPN (nouveaux centres)',
              amount: "Jusqu'à 350 000 $ par 20 places",
              badge: 'Centres',
              body: "Investissement en capital majeur pour la construction ou la rénovation d'un nouveau centre. Très compétitif. Priorité aux régions présentant des pressions documentées sur les listes d'attente. Demande: par l'intermédiaire de votre CMSM local. Ne signez pas de bail ou d'engagement financier important avant l'approbation du financement.",
            },
            {
              title: 'Colombie-Britannique: CCFRI (Initiative de réduction des frais de garde)',
              amount: 'Variable par place',
              badge: 'Colombie-Britannique',
              body: "Financement mensuel supplémentaire pour réduire les frais aux familles. Opt-in facultatif via la demande de FCEF (Financement de base pour les services de garde). Plancher de frais: 200 $/mois (10 $/jour) minimum pour la garde à temps plein. Renouvellement annuel requis (date limite: 9 mars 2026 pour le début au 1er avril).",
            },
            {
              title: 'Financement continu: subvention de fonctionnement',
              amount: 'Variable mensuellement',
              badge: 'Toutes les provinces',
              body: "Subvention mensuelle de fonctionnement une fois ouvert et inscrit au PÉLCPN. Couvre l'écart entre les plafonds de frais du PÉLCPN et les coûts d'exploitation réels. Comprend la subvention de rehaussement salarial pour le personnel ÉEJE.",
            },
          ].map(item => (
            <div key={item.title} className="bg-cream rounded-2xl p-7 border border-[rgba(47,74,58,0.1)]">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <span className="text-[11px] font-semibold text-sage-green bg-sage-green/10 px-2.5 py-0.5 rounded-full">{item.badge}</span>
                  <h3 className="font-display text-[20px] font-medium text-forest-green mt-2">{item.title}</h3>
                </div>
                <span className="text-[18px] font-display font-medium text-terracotta flex-shrink-0">{item.amount}</span>
              </div>
              <p className="text-[14px] text-dark-text/65 leading-relaxed">{item.body}</p>
            </div>
          ))}

          <div className="rounded-xl p-6 border border-[rgba(226,132,95,0.3)] bg-[rgba(226,132,95,0.06)]">
            <p className="text-[14px] font-semibold text-dark-text mb-2">Réalités importantes à connaître</p>
            <ul className="space-y-2 text-[14px] text-dark-text/65">
              <li>Il n'existe pas de portail de demande unique. Toutes les demandes passent par votre CMSM ou DSSAB local.</li>
              <li>Certaines régions accordent la priorité aux opérateurs sans but lucratif pour les subventions de démarrage. Renseignez-vous auprès de votre CMSM avant de supposer votre admissibilité.</li>
              <li>Ne signez pas de bail avant l'approbation du financement. De nombreux CMSM exigent l'approbation du financement avant tout engagement financier important.</li>
              <li>Alignez votre proposition avec les priorités de croissance dirigée de votre région (actuellement: les places pour nourrissons et bambins sont prioritaires dans la plupart des régions).</li>
            </ul>
          </div>

          <div className="pt-4">
            <Link href="/seeds/funding" className="text-[14px] font-medium text-forest-green underline underline-offset-4 hover:text-[#243d2f] transition-colors">
              Lire le guide de financement complet avec tous les détails et liens gouvernementaux (en anglais) →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 px-5 md:px-8">
        <div className="max-w-xl mx-auto">
          <EmailCapture
            heading="Restez informé des mises à jour du financement."
            subheading="Nous vous informons des changements au PÉLCPN, des nouvelles ouvertures de guichet et des opportunités de financement provincial."
            buttonText="Recevoir les alertes"
            source="fr-seeds-financement"
          />
        </div>
      </section>
    </>
  )
}
