import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blogue | Sprout & Vine',
  description: "Nous construisons Sprout & Vine en public. Suivez notre progression, ce que nous apprenons des opérateurs canadiens de services de garde, et pourquoi nous construisons de cette façon.",
}

export default function FrBlogPage() {
  return (
    <>
      <section className="bg-cream py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">
            Blogue
          </p>
          <h1
            className="font-display font-medium text-forest-green leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(40px, 5vw, 60px)' }}
          >
            Nous construisons en public.
          </h1>
          <p className="text-[17px] text-dark-text/60 leading-relaxed max-w-xl">
            Ce que nous construisons, ce que nous apprenons, et ce que les opérateurs canadiens de services de garde nous disent. Mis à jour au fur et à mesure.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Point to EN post */}
          <Link href="/blog/why-we-are-building-sprout-and-vine" className="block group">
            <article className="bg-cream rounded-2xl p-8 hover:-translate-y-1 transition-transform duration-200 border border-[rgba(47,74,58,0.08)]" style={{ boxShadow: '0 4px 20px rgba(47,74,58,0.06)' }}>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-[11px] font-semibold text-sage-green bg-sage-green/10 px-3 py-1 rounded-full uppercase tracking-[0.1em]">
                  Construction en public
                </span>
                <span className="text-[12px] text-dark-text/40">
                  <time dateTime="2026-05-01">1 mai 2026</time>
                  {' · '}8 min de lecture
                </span>
              </div>
              <h2 className="font-display font-medium text-forest-green leading-[1.1] mb-3 group-hover:underline underline-offset-4 decoration-1" style={{ fontSize: 'clamp(24px, 3vw, 32px)' }}>
                Pourquoi nous construisons Sprout &amp; Vine
              </h2>
              <p className="text-[15px] text-dark-text/65 leading-relaxed mb-5">
                Nous ne construisons pas une autre application. Nous construisons une infrastructure. Voici ce que nous avons trouvé en regardant de près les opérations des garderies canadiennes, et pourquoi cela a tout changé.
              </p>
              <p className="text-[13px] text-forest-green font-medium">Lire en anglais →</p>
            </article>
          </Link>

          <p className="text-[13px] text-dark-text/40 text-center mt-10">
            Ce billet est disponible en anglais. Les billets en français arrivent bientôt.
          </p>
        </div>
      </section>
    </>
  )
}
