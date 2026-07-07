import type { Metadata } from 'next'
import { altFr } from '@/lib/seo'
import Link from 'next/link'
import EmailCapture from '@/components/email-capture'

export const metadata: Metadata = {
  title: 'Guide PÉLCPN pour les opérateurs de services de garde au Canada (2026) | Sprout & Vine Care',
  description:
    "Tout ce que les opérateurs canadiens de services de garde doivent savoir sur le Programme pancanadien d'apprentissage et de garde des jeunes enfants: plafonds de frais, suivi des subventions, conformité provinciale et changements en 2026.",
  alternates: altFr('/fr/resources/guide-pelcpn', '/resources/cwelcc-guide'),
}

export default function FrCwelccGuidePage() {
  return (
    <>
      <section className="bg-cream py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-4">
            <Link href="/fr/resources" className="text-[13px] text-dark-text/50 hover:text-forest-green transition-colors">Ressources</Link>
            <span className="text-[13px] text-dark-text/30 mx-2">/</span>
            <span className="text-[13px] text-dark-text/50">Guide PÉLCPN</span>
          </div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-4">Guide 2026</p>
          <h1 className="font-display font-medium text-forest-green leading-[1.05] mb-5" style={{ fontSize: 'clamp(34px, 5vw, 56px)' }}>
            Guide complet du PÉLCPN pour les opérateurs canadiens (2026)
          </h1>
          <p className="text-[16px] text-dark-text/60 leading-relaxed mb-8 max-w-xl">
            Mis à jour en mai 2026. S'applique aux opérateurs de services de garde agréés dans toutes les provinces, sauf le Québec (qui dispose de son propre système).
          </p>
          <Link
            href="/resources/cwelcc-guide"
            className="inline-block bg-forest-green text-white text-[14px] font-medium px-7 py-3.5 rounded-lg hover:bg-[#243d2f] transition-colors"
          >
            Lire le guide complet (en anglais)
          </Link>
        </div>
      </section>

      <section className="bg-white py-16 px-5 md:px-8">
        <div className="max-w-3xl mx-auto space-y-10">
          <div>
            <h2 className="font-display text-[26px] font-medium text-forest-green mb-4">Qu&apos;est-ce que le PÉLCPN?</h2>
            <p className="text-[15px] text-dark-text/65 leading-relaxed mb-4">
              Le Programme pancanadien d'apprentissage et de garde des jeunes enfants (PÉLCPN) est un accord fédéral-provincial historique signé en 2021 qui engage le gouvernement fédéral et toutes les provinces (à l'exclusion du Québec, qui dispose de son propre système) à réduire les frais de garde agréée à une moyenne de 10 $/jour pour les enfants de moins de six ans.
            </p>
            <p className="text-[15px] text-dark-text/65 leading-relaxed">
              Le gouvernement fédéral a engagé plus de 27 milliards de dollars sur cinq ans dans le cadre du Budget 2021, avec un minimum de 9,2 milliards de dollars par année de façon permanente à partir de 2025-2026 pour l'apprentissage et la garde des jeunes enfants partout au Canada.
            </p>
          </div>

          <div>
            <h2 className="font-display text-[26px] font-medium text-forest-green mb-4">Dates clés</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-[14px]">
                <tbody className="divide-y divide-[rgba(47,74,58,0.08)]">
                  {[
                    ['1er avril 2022', 'Réduction de 25 % des frais aux familles'],
                    ['Décembre 2022', "Réduction totale des frais atteignant 50 % des tarifs de 2020"],
                    ['1er janvier 2025', "Ontario: frais quotidiens plafonnés à 22 $/jour pour les enfants admissibles"],
                    ['Novembre 2025', "Accord PÉLCPN prolongé d'un an jusqu'au 31 décembre 2026"],
                    ['2026 (cible)', "Frais quotidiens moyens cibles de 10 $/jour pour les enfants de moins de 6 ans"],
                  ].map(([date, event]) => (
                    <tr key={date}>
                      <td className="py-3 pr-6 text-dark-text/45 whitespace-nowrap">{date}</td>
                      <td className="py-3 text-dark-text/70">{event}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="font-display text-[26px] font-medium text-forest-green mb-4">Le PÉLCPN dans Sprout et Vine Care</h2>
            <p className="text-[15px] text-dark-text/65 leading-relaxed mb-4">
              Sprout et Vine Care automatise le suivi du PÉLCPN pour que vous n'ayez pas à gérer des feuilles de calcul:
            </p>
            <ul className="space-y-2">
              {[
                "Calcul automatique des subventions par enfant inscrit selon votre accord de financement PÉLCPN",
                "Alertes de plafond de frais si la facturation dépasse le plafond de 22 $/jour",
                "Suivi du rehaussement salarial pour les exigences salariales des ÉEJE et superviseurs",
                "Rapports prêts pour l'inspection en un clic",
              ].map(item => (
                <li key={item} className="flex gap-3 text-[14px] text-dark-text/65">
                  <span className="text-sage-green mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-[rgba(47,74,58,0.08)]">
            <p className="text-[14px] text-dark-text/55 mb-4">
              Le guide complet en anglais contient toutes les exigences provinciales détaillées, les liens vers les formulaires gouvernementaux, les informations sur la Colombie-Britannique et le Québec, ainsi que les FAQ complètes.
            </p>
            <Link href="/resources/cwelcc-guide" className="inline-block text-[14px] font-medium text-forest-green underline underline-offset-4 hover:text-[#243d2f] transition-colors">
              Lire le guide PÉLCPN complet (en anglais) →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 px-5 md:px-8">
        <div className="max-w-xl mx-auto">
          <EmailCapture
            heading="Recevez les mises à jour du PÉLCPN par courriel."
            subheading="Nous vous informons lorsque le guide est mis à jour et lorsque des changements de politique importants se produisent."
            buttonText="Recevoir les alertes"
            source="fr-resources-guide-pelcpn"
          />
        </div>
      </section>
    </>
  )
}
