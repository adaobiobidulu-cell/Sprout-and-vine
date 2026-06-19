import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Qualifications pour travailler dans les services de garde au Canada (2026) | Sprout & Vine Care',
  description:
    "Ce dont vous avez besoin pour travailler et opérer des services de garde au Canada, par province. ÉEJE en Ontario, certificat ÉJE en Colombie-Britannique, DEC au Québec.",
}

export default function FrQualificationsPage() {
  return (
    <>
      <section className="bg-cream py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-4">
            <Link href="/fr/seeds" className="text-[13px] text-dark-text/50 hover:text-forest-green transition-colors">Seeds</Link>
            <span className="text-[13px] text-dark-text/30 mx-2">/</span>
            <span className="text-[13px] text-dark-text/50">Qualifications</span>
          </div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-4">Guide 2026</p>
          <h1 className="font-display font-medium text-forest-green leading-[1.05] mb-5" style={{ fontSize: 'clamp(34px, 5vw, 56px)' }}>
            Quelles qualifications vous faut-il pour travailler dans les services de garde au Canada?
          </h1>
          <p className="text-[16px] text-dark-text/60 leading-relaxed max-w-xl">
            Les exigences varient selon la province et votre rôle. Voici ce que vous devez savoir.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 px-5 md:px-8">
        <div className="max-w-3xl mx-auto space-y-12">
          {[
            {
              province: 'Ontario',
              badge: 'EEJE / ÉEJE',
              body: "Le titre d'Éducateur ou d'éducatrice agréé(e) de la petite enfance (ÉEJE) est la norme de référence pour le personnel des services de garde en Ontario. Pour devenir ÉEJE: 1) Obtenir un diplôme d'ÉPE de deux ans d'un collège ontarien approuvé. 2) Postuler à l'inscription auprès de l'Ordre des éducatrices et éducateurs de la petite enfance (OEPE). 3) Payer les frais d'inscription annuels et maintenir une bonne réputation. Exigences supplémentaires: Premiers soins standard avec RCR pour nourrissons et enfants. Vérification du secteur vulnérable renouvelée tous les 5 ans.",
              link: '/seeds/qualifications',
            },
            {
              province: 'Colombie-Britannique',
              badge: 'Certificat ÉJE',
              body: "Un certificat d'éducation à la petite enfance (ÉJE) d'une institution reconnue en C.-B. est requis pour au moins 50 % du personnel dans les services de garde de groupe agréés. Vous devez vous inscrire au Registre des ÉJE de la C.-B. Des cours supplémentaires sont requis pour le titre d'éducateur ou d'éducatrice pour nourrissons et bambins.",
              link: '/seeds/qualifications',
            },
            {
              province: 'Québec',
              badge: 'DEC / AEC',
              body: "Dans les CPE et garderies subventionnées du Québec, les deux tiers du personnel de soins directs doivent détenir un DEC de 3 ans (Techniques d'éducation à l'enfance) ou une AEC de 1 an avec 3 ans d'expérience. Les deux tiers sont disponibles dans les cégeps de toute la province.",
              link: '/seeds/qualifications',
            },
            {
              province: 'Exigences universelles (toutes les provinces)',
              badge: 'Partout',
              body: "Quel que soit la province ou le rôle: Premiers soins standard incluant le RCR pour nourrissons et enfants (fournisseur reconnu; renouveler tous les 2 à 3 ans). Vérification du secteur vulnérable (casier judiciaire) avant le premier jour, renouvelée tous les 3 à 5 ans selon la province. Déclarations d'infractions annuelles entre les renouvellements de vérification (Ontario).",
              link: '/seeds/qualifications',
            },
          ].map(s => (
            <div key={s.province} className="border-l-2 border-sage-green/40 pl-6">
              <div className="flex items-start gap-3 mb-3">
                <h2 className="font-display text-[22px] font-medium text-forest-green">{s.province}</h2>
                <span className="text-[11px] font-semibold text-sage-green bg-sage-green/10 px-2.5 py-1 rounded-full mt-1">{s.badge}</span>
              </div>
              <p className="text-[15px] text-dark-text/65 leading-relaxed mb-3">{s.body}</p>
              <Link href={s.link} className="text-[13px] text-forest-green underline underline-offset-4 hover:text-[#243d2f] transition-colors">
                Détails complets (en anglais) →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream py-14 px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Link href="/founding" className="inline-block bg-forest-green text-white text-[14px] font-medium px-7 py-3.5 rounded-lg hover:bg-[#243d2f] transition-colors">
            Rejoindre le Programme des opérateurs fondateurs
          </Link>
        </div>
      </section>
    </>
  )
}
