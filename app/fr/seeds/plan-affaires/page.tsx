import type { Metadata } from 'next'
import { altFr } from '@/lib/seo'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Outil de plan d'affaires pour services de garde | Sprout & Vine Care",
  description:
    "Outil interactif gratuit pour bâtir votre plan d'affaires de service de garde étape par étape. Votre progression est sauvegardée automatiquement.",
  alternates: altFr('/fr/seeds/plan-affaires', '/seeds/business-plan'),
}

export default function FrBusinessPlanPage() {
  return (
    <>
      <section className="bg-cream py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-4">
            <Link href="/fr/seeds" className="text-[13px] text-dark-text/50 hover:text-forest-green transition-colors">Seeds</Link>
            <span className="text-[13px] text-dark-text/30 mx-2">/</span>
            <span className="text-[13px] text-dark-text/50">Plan d&apos;affaires</span>
          </div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-4">Outil gratuit</p>
          <h1 className="font-display font-medium text-forest-green leading-[1.05] mb-5" style={{ fontSize: 'clamp(34px, 5vw, 56px)' }}>
            Bâtissez votre plan d&apos;affaires,<br />étape par étape.
          </h1>
          <p className="text-[16px] text-dark-text/60 leading-relaxed mb-8 max-w-xl mx-auto">
            Six courtes sections. Vos réponses sont sauvegardées automatiquement dans votre navigateur. À la fin, vous obtenez un score de préparation personnalisé et une liste de vos prochaines étapes concrètes.
          </p>
          <p className="text-[14px] text-dark-text/50 mb-6">
            Cet outil interactif est actuellement disponible en anglais.
          </p>
          <Link
            href="/seeds/business-plan"
            className="inline-block bg-forest-green text-white text-[14px] font-medium px-7 py-3.5 rounded-lg hover:bg-[#243d2f] transition-colors"
          >
            Utiliser l&apos;outil (en anglais)
          </Link>
        </div>
      </section>

      <section className="bg-white py-16 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-6">Ce que l&apos;outil couvre</p>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { n: 1, title: 'Votre programme', desc: "Type de garde, province, groupes d'âge, heures d'opération, capacité et philosophie pédagogique." },
              { n: 2, title: 'Votre emplacement', desc: "Avez-vous un lieu? Est-il zoné pour la garde? Propriété ou location? Loyer mensuel estimé." },
              { n: 3, title: 'Vos qualifications', desc: "Diplôme en ÉPE ou désignation ÉEJE, années d'expérience, premiers soins, vérification du secteur vulnérable." },
              { n: 4, title: 'Finances', desc: "Épargne de démarrage, accès au financement, inscriptions prévues aux mois 1, 6 et 12, frais planifiés par enfant." },
              { n: 5, title: 'Personnel', desc: "Travaillerez-vous dans le programme vous-même? Nombre de membres du personnel à l'ouverture." },
              { n: 6, title: 'Calendrier', desc: "Date d'ouverture cible, avez-vous contacté votre gestionnaire de services ou votre agence?" },
            ].map(s => (
              <div key={s.n} className="flex gap-4 p-5 rounded-xl bg-cream border border-[rgba(47,74,58,0.08)]">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-forest-green/10 text-forest-green text-[13px] font-semibold flex items-center justify-center">{s.n}</span>
                <div>
                  <p className="text-[14px] font-semibold text-dark-text mb-1">{s.title}</p>
                  <p className="text-[13px] text-dark-text/55 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/seeds/business-plan" className="inline-block bg-forest-green text-white text-[14px] font-medium px-7 py-3.5 rounded-lg hover:bg-[#243d2f] transition-colors">
              Démarrer l&apos;outil (en anglais)
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
