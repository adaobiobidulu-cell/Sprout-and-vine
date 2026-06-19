import type { Metadata } from 'next'
import Link from 'next/link'
import EmailCapture from '@/components/email-capture'

export const metadata: Metadata = {
  title: 'Liste de vérification pour les licences de services de garde par province (2026) | Sprout & Vine Care',
  description:
    "Listes de vérification pour l'agrément des services de garde canadiens par province. Exigences de l'Ontario (MSJE), de la C.-B. (CCALA), ratios du personnel et plus encore.",
}

export default function FrLicensingChecklistPage() {
  return (
    <>
      <section className="bg-cream py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-4">
            <Link href="/fr/resources" className="text-[13px] text-dark-text/50 hover:text-forest-green transition-colors">Ressources</Link>
            <span className="text-[13px] text-dark-text/30 mx-2">/</span>
            <span className="text-[13px] text-dark-text/50">Liste de vérification</span>
          </div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-4">Guide 2026</p>
          <h1 className="font-display font-medium text-forest-green leading-[1.05] mb-5" style={{ fontSize: 'clamp(34px, 5vw, 56px)' }}>
            Liste de vérification pour l&apos;agrément des services de garde au Canada (2026)
          </h1>
          <p className="text-[16px] text-dark-text/60 leading-relaxed mb-8 max-w-xl">
            Utilisez cette liste de vérification comme point de départ. Les exigences sont établies par votre gouvernement provincial et peuvent changer. Vérifiez toujours auprès de votre autorité provinciale de délivrance de permis.
          </p>
          <Link
            href="/resources/licensing-checklist"
            className="inline-block bg-forest-green text-white text-[14px] font-medium px-7 py-3.5 rounded-lg hover:bg-[#243d2f] transition-colors"
          >
            Voir la liste complète (en anglais)
          </Link>
        </div>
      </section>

      <section className="bg-white py-16 px-5 md:px-8">
        <div className="max-w-3xl mx-auto space-y-12">
          {[
            {
              province: 'Ontario',
              law: 'Loi de 2014 sur la garde d\'enfants et la petite enfance (LGPE)',
              regulator: 'Ministère de l\'Éducation de l\'Ontario',
              ratios: [
                { group: 'Nourrissons (0 à 18 mois)', ratio: '1:3', max: '10' },
                { group: 'Bambins (18 mois à 2,5 ans)', ratio: '1:5', max: '15' },
                { group: 'Préscolaire (2,5 à 5 ans)', ratio: '1:8', max: '24' },
                { group: 'Maternelle (44 mois à 7 ans)', ratio: '1:13', max: '26' },
              ],
              checklist: [
                'Demander un permis au Ministère de l\'Éducation en vertu de la LGPE',
                'Soumettre un plan d\'étage avec les dimensions des pièces (2,8 m²/enfant)',
                'Certificat de sécurité-incendie',
                'Inspection et autorisation de santé publique',
                'Vérifications des antécédents judiciaires pour tout le personnel (secteur vulnérable)',
                'Preuve des qualifications du superviseur et approbation du directeur du Ministère',
                'Manuel des politiques et procédures',
                'Plan d\'urgence et d\'évacuation',
                'Manuel des parents incluant le statut de participation au PÉLCPN',
              ],
            },
            {
              province: 'Québec',
              law: 'Loi sur les services de garde éducatifs à l\'enfance',
              regulator: 'Ministère de la Famille du Québec',
              ratios: [
                { group: 'Poupons (0 à 18 mois)', ratio: '1:5', max: 'Non spécifié' },
                { group: 'Enfants (18 mois à 5 ans)', ratio: '1:8', max: 'Non spécifié' },
              ],
              checklist: [
                'Obtenir un permis d\'exploitation du Ministère de la Famille',
                'Obtenir un permis d\'occupation municipal',
                'Constituer une corporation sans but lucratif avec un conseil d\'administration à majorité de parents (CPE seulement)',
                'Embaucher un directeur général qualifié approuvé par le Ministère',
                'S\'assurer que les 2/3 du personnel de soins directs détient un DEC ou une AEC + 3 ans d\'expérience',
                'Vérifications des antécédents judiciaires pour tout le personnel',
                'Respecter les exigences d\'espace: 4 m²/enfant (nourrissons)',
                'Émettre des reçus Relevé 24 aux parents (obligatoire depuis 2022)',
              ],
            },
          ].map(p => (
            <div key={p.province}>
              <h2 className="font-display text-[26px] font-medium text-forest-green mb-1">{p.province}</h2>
              <p className="text-[12px] text-dark-text/45 mb-5">{p.law} · {p.regulator}</p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-[13px] border border-[rgba(47,74,58,0.1)] rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-cream">
                      <th className="text-left p-3 font-semibold text-dark-text/60">Groupe d'âge</th>
                      <th className="text-left p-3 font-semibold text-dark-text/60">Ratio personnel:enfants</th>
                      <th className="text-left p-3 font-semibold text-dark-text/60">Groupe max.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[rgba(47,74,58,0.06)]">
                    {p.ratios.map(r => (
                      <tr key={r.group}>
                        <td className="p-3 text-dark-text/70">{r.group}</td>
                        <td className="p-3 text-dark-text/70 font-medium">{r.ratio}</td>
                        <td className="p-3 text-dark-text/70">{r.max}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <ul className="space-y-2">
                {p.checklist.map(item => (
                  <li key={item} className="flex gap-3 text-[14px] text-dark-text/65">
                    <span className="flex-shrink-0 w-4 h-4 border border-[rgba(47,74,58,0.3)] rounded mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="pt-4 border-t border-[rgba(47,74,58,0.08)]">
            <p className="text-[14px] text-dark-text/55 mb-4">
              La liste de vérification complète comprend également la Colombie-Britannique, l'Alberta, le Manitoba, ainsi que toutes les exigences de conformité continue et les sections spécifiques au PÉLCPN.
            </p>
            <Link href="/resources/licensing-checklist" className="inline-block text-[14px] font-medium text-forest-green underline underline-offset-4 hover:text-[#243d2f] transition-colors">
              Voir la liste de vérification complète (en anglais) →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 px-5 md:px-8">
        <div className="max-w-xl mx-auto">
          <EmailCapture
            heading="Obtenez la liste de vérification de votre province en PDF."
            subheading="Nous vous enverrons la liste de vérification d'agrément et un résumé mensuel de conformité pour votre province."
            buttonText="Recevoir la liste"
            source="fr-resources-liste-verification"
          />
        </div>
      </section>
    </>
  )
}
