import type { Metadata } from 'next'
import { altFr } from '@/lib/seo'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Autorisation de ramassage intelligent | Sprout & Vine Care",
  description:
    "Listes de ramassage vérifiées par photo, notifications instantanées aux parents et journal complet pour chaque départ d'enfant. Disponible sur Sprout & Vine Care.",
  alternates: altFr('/fr/features/autorisation-ramassage', '/features/smart-pickup'),
}

export default function AutorisationRamassagePage() {
  return (
    <>
      <section className="bg-forest-green py-24 md:py-32 px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-4">
            Sécurité parentale
          </p>
          <h1
            className="font-display font-medium text-cream leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(36px, 5vw, 62px)' }}
          >
            Sachez exactement qui a récupéré votre enfant. Chaque fois.
          </h1>
          <p className="text-[17px] text-cream/65 mb-10 max-w-xl mx-auto leading-relaxed">
            La plupart des applications informent les parents que leur enfant a été récupéré. Sprout &amp; Vine Care leur dit <em className="not-italic font-semibold text-cream/80">qui</em> est venu, affiche une photo et envoie une notification instantanée avant qu'ils n'aient quitté le stationnement.
          </p>
          <Link
            href="/fr"
            className="text-cream/60 text-[14px] hover:text-cream transition-colors"
          >
            ← Retour à l'accueil
          </Link>
        </div>
      </section>

      <section className="bg-cream py-16 px-5 md:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[16px] text-dark-text/60 leading-relaxed mb-8">
            La page complète en français est en cours de préparation. Pour voir toutes les fonctionnalités, consultez la version anglaise.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/features/smart-pickup"
              className="inline-block bg-forest-green text-white text-[14px] font-medium px-6 py-3 rounded-lg hover:bg-[#243d2f] transition-colors"
            >
              See Smart Pickup (English) →
            </Link>
            <Link
              href="/fr/founding"
              className="inline-block text-[14px] font-medium text-dark-text/65 border border-[rgba(47,74,58,0.22)] px-5 py-3 rounded-lg hover:border-[rgba(47,74,58,0.45)] transition-colors"
            >
              Programme des opérateurs fondateurs
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
