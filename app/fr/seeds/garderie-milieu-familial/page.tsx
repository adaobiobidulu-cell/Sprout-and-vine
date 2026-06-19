import type { Metadata } from 'next'
import Link from 'next/link'
import EmailCapture from '@/components/email-capture'

export const metadata: Metadata = {
  title: 'Comment ouvrir une garderie en milieu familial agréée au Canada (2026) | Sprout & Vine Care',
  description:
    "Tout ce que vous devez savoir pour ouvrir une garderie en milieu familial agréée en Ontario, en Colombie-Britannique et partout au Canada. Guide complet mis à jour en 2026.",
}

export default function FrHomeDaycarePage() {
  return (
    <>
      <section className="bg-cream py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-4">
            <Link href="/fr/seeds" className="text-[13px] text-dark-text/50 hover:text-forest-green transition-colors">Seeds</Link>
            <span className="text-[13px] text-dark-text/30 mx-2">/</span>
            <span className="text-[13px] text-dark-text/50">Garderie en milieu familial</span>
          </div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-4">Guide 2026</p>
          <h1 className="font-display font-medium text-forest-green leading-[1.05] mb-5" style={{ fontSize: 'clamp(34px, 5vw, 56px)' }}>
            Vous savez déjà comment prendre soin des enfants.<br />Voici comment le rendre officiel.
          </h1>
          <p className="text-[16px] text-dark-text/60 leading-relaxed mb-8 max-w-xl">
            Ouvrir une garderie en milieu familial agréée est la façon la plus accessible d'entrer dans le secteur de la garde d'enfants au Canada. Ce guide complet vous accompagne étape par étape.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/seeds/home-daycare" className="text-[14px] font-medium text-forest-green border-2 border-forest-green px-6 py-3 rounded-lg hover:bg-forest-green hover:text-white transition-colors">
              Lire la version anglaise complète
            </Link>
            <Link href="/founding" className="bg-forest-green text-white text-[14px] font-medium px-6 py-3 rounded-lg hover:bg-[#243d2f] transition-colors">
              Rejoindre le Programme des opérateurs fondateurs
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-6">Étapes clés</p>
          <div className="space-y-6">
            {[
              { n: 1, title: "Comprendre les règles de votre province", body: "En Ontario, vous devez être contracté à un bureau coordonnateur agréé (ou à une agence de garde en milieu familial). Vous ne pouvez pas être agréé de façon indépendante. Capacité maximale: 6 enfants de moins de 13 ans (y compris vos propres enfants de moins de 6 ans)." },
              { n: 2, title: "Évaluer et préparer votre espace", body: "Votre domicile doit répondre aux normes de santé et de sécurité avant votre approbation: espace de jeu dédié, détecteurs de fumée et de monoxyde de carbone, verrous de sécurité, espace extérieur sécurisé." },
              { n: 3, title: "Obtenir vos certifications", body: "Obligatoire: Premiers soins standard avec RCR pour nourrissons et enfants (fournisseur reconnu par la CSPAAT). Vérification du secteur vulnérable (dossier de police). Fortement recommandé: diplôme d'éducation à l'enfance (DEP ou DEC)." },
              { n: 4, title: "Trouver une agence ou un bureau coordonnateur", body: "En Ontario: 154 agences agréées supervisent plus de 5 860 foyers agréés. En Colombie-Britannique: vous postulez directement auprès de votre régie de santé régionale. Au Québec: travaillez avec un bureau coordonnateur reconnu par le Ministère de la Famille." },
              { n: 5, title: "Demander votre permis", body: "Votre agence coordonne votre demande d'agrément auprès du Ministère de l'Éducation (Ontario). Le processus comprend une visite à domicile, une inspection de la santé publique et une inspection des pompiers. Délai habituel: 3 à 6 mois." },
              { n: 6, title: "Demander le financement PÉLCPN", body: "Une fois agréé: subvention de démarrage allant jusqu'à 7 200 $ (1 200 $ par nouvel espace de garde, max. 6 espaces). Subvention de fonctionnement mensuelle pour compenser la réduction des frais aux parents." },
            ].map(step => (
              <div key={step.n} className="flex gap-5">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-forest-green/10 flex items-center justify-center">
                  <span className="text-[15px] font-display font-medium text-forest-green">{step.n}</span>
                </div>
                <div>
                  <p className="text-[16px] font-semibold text-dark-text mb-1">{step.title}</p>
                  <p className="text-[14px] text-dark-text/60 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-8 border-t border-[rgba(47,74,58,0.08)]">
            <p className="text-[14px] text-dark-text/55 leading-relaxed mb-4">
              Le guide complet en anglais contient toutes les étapes détaillées, les liens vers les formulaires gouvernementaux, les coûts de démarrage estimés et les liens officiels vérifiés pour l'Ontario, la Colombie-Britannique et le Québec.
            </p>
            <Link href="/seeds/home-daycare" className="inline-block text-[14px] font-medium text-forest-green underline underline-offset-4 hover:text-[#243d2f] transition-colors">
              Lire le guide complet (en anglais) →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 px-5 md:px-8">
        <div className="max-w-xl mx-auto">
          <EmailCapture
            heading="Obtenez la liste de vérification en PDF."
            subheading="Liste de vérification imprimable pour la garde en milieu familial, avec les conseils pour trouver une agence dans votre région."
            buttonText="Recevoir la liste"
            source="fr-seeds-home-daycare"
          />
        </div>
      </section>
    </>
  )
}
