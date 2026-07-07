import type { Metadata } from 'next'
import { altFr } from '@/lib/seo'
import Link from 'next/link'
import EmailCapture from '@/components/email-capture'

export const metadata: Metadata = {
  title: 'Liste de vérification de préparation au PÉLCPN (2026) | Sprout & Vine Care',
  description:
    "Préparez-vous au PÉLCPN avant d'ouvrir pour accéder au financement dès le premier jour. Liste de vérification pour les opérateurs de services de garde en Ontario et partout au Canada.",
  alternates: altFr('/fr/seeds/preparation-pelcpn', '/seeds/cwelcc-readiness'),
}

export default function FrCwelccReadinessPage() {
  return (
    <>
      <section className="bg-cream py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-4">
            <Link href="/fr/seeds" className="text-[13px] text-dark-text/50 hover:text-forest-green transition-colors">Seeds</Link>
            <span className="text-[13px] text-dark-text/30 mx-2">/</span>
            <span className="text-[13px] text-dark-text/50">Préparation au PÉLCPN</span>
          </div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-4">Liste de vérification 2026</p>
          <h1 className="font-display font-medium text-forest-green leading-[1.05] mb-5" style={{ fontSize: 'clamp(34px, 5vw, 56px)' }}>
            Préparez-vous au PÉLCPN avant d&apos;ouvrir.
          </h1>
          <p className="text-[16px] text-dark-text/60 leading-relaxed max-w-xl">
            Les opérateurs qui se préparent au PÉLCPN avant d'ouvrir accèdent au financement dès le premier jour. Ceux qui ne le font pas passent souvent leurs premiers mois à faire de la réconciliation manuelle.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 px-5 md:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">Liste de vérification de préparation</p>
            <div className="space-y-4">
              {[
                { title: "Comprendre le PÉLCPN", body: "Le Programme pancanadien d'apprentissage et de garde des jeunes enfants est un accord fédéral-provincial signé en 2021 visant à réduire les frais de garde à une moyenne de 10 $/jour pour les enfants de moins de 6 ans. La participation est volontaire mais donne accès au financement de fonctionnement." },
                { title: "Identifier votre gestionnaire de services local", body: "Tout le financement PÉLCPN passe par votre gestionnaire de services municipal (CMSM) ou votre DSSAB. En Ontario, il y a 47 CMSM et 10 DSSAB. Trouvez le vôtre à ontario.ca/page/service-system-managers." },
                { title: "Comprendre les plafonds de frais", body: "En Ontario (à partir du 1er janvier 2025): les frais quotidiens aux parents sont plafonnés à 22 $/jour pour les enfants admissibles de moins de 6 ans. L'objectif est une moyenne de 10 $/jour d'ici la fin de 2026." },
                { title: "Rassembler votre documentation", body: "Contrat de financement PÉLCPN en dossier et disponible pour votre conseiller de programme. Manuel des parents indiquant le statut de participation au PÉLCPN. Processus d'avis de changement de frais de 30 jours documenté." },
                { title: "Configurer le suivi des subventions", body: "Sprout et Vine Care automatise le calcul des subventions par enfant inscrit, les alertes de plafond de frais, le suivi du rehaussement salarial pour les ÉEJE et les rapports prêts pour l'inspection." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-xl border border-[rgba(47,74,58,0.1)] bg-cream">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-forest-green/30 mt-0.5" />
                  <div>
                    <p className="text-[15px] font-semibold text-dark-text mb-1">{item.title}</p>
                    <p className="text-[13px] text-dark-text/60 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <Link href="/resources/cwelcc-guide" className="text-[14px] font-medium text-forest-green underline underline-offset-4 hover:text-[#243d2f] transition-colors">
              Lire le guide PÉLCPN complet (en anglais) →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 px-5 md:px-8">
        <div className="max-w-xl mx-auto">
          <EmailCapture
            heading="Recevez les alertes de changements au PÉLCPN."
            subheading="Nous vous informons lorsque les règles de financement changent, afin que vous n'ayez pas à surveiller les bulletins gouvernementaux."
            buttonText="S'abonner"
            source="fr-seeds-pelcpn"
          />
        </div>
      </section>
    </>
  )
}
