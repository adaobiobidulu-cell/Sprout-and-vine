import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { canonicalOnly } from '@/lib/seo'
import { SUBPROCESSORS, subprocessorsPageLive } from '@/lib/trust'

/*
 * Subprocessor list (website brief section 3).
 *
 * Ships dark: redirects to /security until every row in lib/trust.ts has
 * its processing location verified from the actual account configuration
 * AND a signed DPA, and the legal review has signed off. Publishing the
 * list implies both, so do not flip the gate early.
 *
 * Crisp is deliberately absent: the marketing site does not run Crisp
 * chat (verified in code, July 2026). If chat or any analytics beyond
 * cookieless Vercel Web Analytics is ever added, it belongs on this list,
 * because visitor and prospect data is personal information too.
 */

export const metadata: Metadata = {
  title: 'Subprocessors | Sprout & Vine Care',
  description:
    'Every provider that processes personal information for Sprout & Vine Care, what each one receives, and where it processes.',
  alternates: canonicalOnly('/security/subprocessors'),
}

export default function SubprocessorsPage() {
  if (!subprocessorsPageLive()) redirect('/security')

  return (
    <>
      <section className="bg-forest-green py-16 md:py-20 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-4">
            Trust
          </p>
          <h1
            className="font-display font-medium text-cream leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(34px, 5vw, 52px)' }}
          >
            Subprocessors
          </h1>
          <p className="text-[16px] text-cream/65 leading-relaxed max-w-2xl">
            To run Sprout &amp; Vine Care we work with a small number of trusted providers, each for one specific job. We share only the information each one needs to do that job. We never sell your data and we never share it for advertising. This page lists every provider that processes personal information, what they receive, and where.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16 px-5 md:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          {SUBPROCESSORS.map(s => (
            <div
              key={s.name}
              className="bg-cream/60 rounded-xl border border-[rgba(47,74,58,0.08)] px-5 py-5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <p className="text-[15px] font-semibold text-dark-text">{s.name}</p>
                <p className="text-[12.5px] font-medium text-forest-green">{s.location}</p>
              </div>
              <p className="text-[13.5px] text-dark-text/65 leading-relaxed mb-1.5">{s.role}</p>
              <p className="text-[13.5px] text-dark-text/55 leading-relaxed">
                <span className="font-medium text-dark-text/70">Receives: </span>
                {s.receives}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
