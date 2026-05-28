import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sprout & Vine vs. Lillio (HiMama) : Comparaison honnête | Sprout & Vine',
  description:
    "Comment Sprout & Vine se compare à Lillio (anciennement HiMama) sur le soutien au PÉLCPN, la transparence des prix, le soutien aux garderies en milieu familial et le support bilingue EN/FR.",
}

export default function FrLillioComparePage() {
  return (
    <>
      <section className="bg-cream py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-3">
            <Link href="/fr" className="text-[13px] text-dark-text/50 hover:text-forest-green transition-colors">
              Accueil
            </Link>
            <span className="text-[13px] text-dark-text/30 mx-2">/</span>
            <span className="text-[13px] text-dark-text/50">vs. Lillio</span>
          </div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-4">
            Comparaison
          </p>
          <h1
            className="font-display font-medium text-forest-green leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(32px, 5vw, 54px)' }}
          >
            Sprout &amp; Vine vs. Lillio (HiMama):<br />Une comparaison honnête
          </h1>
          <p className="text-[16px] text-dark-text/65 leading-relaxed max-w-2xl">
            Cette page est en cours de traduction. Pour voir la comparaison complète, consultez la version anglaise.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 px-5 md:px-8 text-center">
        <div className="max-w-xl mx-auto space-y-4">
          <Link
            href="/compare/lillio"
            className="block bg-forest-green text-white text-[14px] font-medium px-6 py-3.5 rounded-lg hover:bg-[#243d2f] transition-colors"
          >
            See the full comparison (English) →
          </Link>
          <Link
            href="/fr/pricing"
            className="block text-[14px] font-medium text-dark-text/65 border border-[rgba(47,74,58,0.22)] px-5 py-3.5 rounded-lg hover:border-[rgba(47,74,58,0.45)] transition-colors"
          >
            Voir nos tarifs
          </Link>
        </div>
      </section>
    </>
  )
}
