import type { Metadata } from 'next'
import Link from 'next/link'
import { canonicalOnly } from '@/lib/seo'
import { articleSchema } from '@/lib/schema'
import JsonLd from '@/components/json-ld'

/*
 * "Can you join CWELCC right now?" (improvement brief 3.4.2).
 *
 * ADA: QUARTERLY REVIEW REQUIRED. The regional snapshot below is a dated
 * illustration that will drift; windows open and close on weeks of
 * notice. Refresh LAST_UPDATED and the snapshot rows every quarter (or
 * pull the page if it cannot be verified) — stale information here is
 * worse than none. Content verified through the licensing expert.
 */
const LAST_UPDATED = 'July 8, 2026'

export const metadata: Metadata = {
  title: 'Can You Join CWELCC Right Now? (Ontario, 2026) | Sprout & Vine Care',
  description:
    'The honest answer for mid-2026: most Ontario regions have closed or fully allocated their CWELCC intake. How directed growth actually works, a dated regional snapshot, and what aspiring operators can do now.',
  alternates: canonicalOnly('/resources/cwelcc-intake'),
}

/* Dated snapshot rows: illustration only, never authoritative. */
const regions = [
  { name: 'Toronto', status: 'No application intake window planned for child care centres in 2026; the City is working with existing applicants to meet the December 31, 2026 deadline.' },
  { name: 'Hamilton', status: 'All 2026 spaces and funding allocated; not accepting new applications. An Expression of Interest form is available to track future interest.' },
  { name: 'Halton', status: 'Application process closed; the region accepted applications only between December 19, 2024 and January 31, 2025, and is holding unapproved applications in case more spaces are allocated.' },
  { name: 'Waterloo', status: 'Not currently accepting applications for CWELCC enrolment; no information on future intake available.' },
  { name: 'Simcoe', status: 'The 2025-2026 directed growth application period is closed and fully committed; no new allocations authorized beyond 2026.' },
  { name: 'York', status: 'Due to limited funding, only operators opening or expanding in identified priority neighbourhoods are being considered.' },
  { name: 'Nipissing (DNSSAB)', status: 'Cannot approve further expansions at this time due to limited growth spaces; operators are directed to a waitlist form.' },
  { name: 'London-Middlesex', status: 'The Summer 2025 directed growth call-out is closed; a follow-up Middlesex process for roughly 440 remaining spaces ran on a phased, not-for-profit-first basis with a November 2025 deadline that has now passed.' },
  { name: 'Wellington-Guelph', status: 'Was recently accepting applications for ages 0 to 4 requiring spaces operational by December 31, 2026; given how tight that deadline now is, verify directly before relying on it.' },
]

const playbook = [
  {
    title: 'Contact your CMSM/DSSAB and get on the list.',
    body: 'Ask specifically about their directed growth process and submit an Expression of Interest. When the province releases new spaces, regions draw from these lists. Being on it is the difference between hearing about a window and missing it.',
  },
  {
    title: 'Get licensed anyway.',
    body: 'You can open and operate a licensed program outside CWELCC today. Licensing is a prerequisite for CWELCC and positions you to enrol the moment intake reopens.',
  },
  {
    title: 'Locate in a priority neighbourhood.',
    body: 'Directed growth targets underserved and priority-population areas. Where you open materially affects your odds. Ask your CMSM which neighbourhoods are prioritized.',
  },
  {
    title: 'If you are for-profit, understand the auspice question.',
    body: 'The province caps the share of for-profit CWELCC spaces, and several regions restrict new intake to not-for-profits or require conversion. Factor this into your structure early.',
  },
  {
    title: 'Watch for the post-2026 deal.',
    body: 'The current agreement runs to March 31, 2027. A renewed longer-term agreement could bring a fresh allocation cycle: the most likely moment for closed regions to reopen.',
  },
]

export default function CwelccIntakePage() {
  return (
    <>
      <JsonLd
        data={articleSchema({
          headline: 'Can You Join CWELCC Right Now? (Ontario, 2026)',
          description:
            'How CWELCC directed growth actually works, where regional intake stands in mid-2026, and what aspiring operators can do while windows are closed.',
          path: '/resources/cwelcc-intake',
          datePublished: '2026-07-08',
        })}
      />

      {/* Hero */}
      <section className="bg-forest-green py-16 md:py-20 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-4">
            CWELCC Reality Check
          </p>
          <h1
            className="font-display font-medium text-cream leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(34px, 5vw, 56px)' }}
          >
            Can you join CWELCC right now?
          </h1>
          <p className="text-[16px] text-cream/65 leading-relaxed max-w-2xl">
            The honest answer for mid-2026: for most of Ontario, there is no open door to join as a new operator right now. Here is how the system actually works, where regions stand, and what you can do in the meantime.
          </p>
          <p className="text-[13px] text-cream/45 mt-5">
            Last updated {LAST_UPDATED}. Reviewed quarterly.
          </p>
        </div>
      </section>

      {/* Structural reality — slow-changing, safe */}
      <section className="bg-white py-14 md:py-16 px-5 md:px-8">
        <div className="max-w-3xl mx-auto space-y-10">
          <div>
            <h2 className="font-display font-medium text-forest-green leading-[1.1] mb-4" style={{ fontSize: 'clamp(24px, 3vw, 32px)' }}>
              How joining CWELCC actually works
            </h2>
            <p className="text-[15px] text-dark-text/70 leading-[1.8]">
              There is no province-wide &ldquo;apply now&rdquo; button. Each region&rsquo;s service system manager (CMSM or DSSAB) runs its own directed growth process, which steers a limited number of provincially-allocated spaces toward priority neighbourhoods and underserved families. You apply to your region, spaces are limited, and participation is never guaranteed. Many regions restrict directed growth to not-for-profit operators, and some require for-profit operators to convert to not-for-profit to be considered, a reflection of the province&rsquo;s cap on for-profit CWELCC spaces.
            </p>
          </div>

          <div>
            <h2 className="font-display font-medium text-forest-green leading-[1.1] mb-4" style={{ fontSize: 'clamp(24px, 3vw, 32px)' }}>
              Where things stand in 2026
            </h2>
            <p className="text-[15px] text-dark-text/70 leading-[1.8]">
              The federal-provincial agreement was extended one year, to March 31, 2027, and most regions have already committed their space allocations for the current cycle. That means new intake windows are closed or fully allocated across much of the province, and no new space allocations have been authorized for periods beyond 2026 while governments negotiate a longer-term deal. You can still get licensed and operate outside CWELCC at any time: licensing is handled by the Ministry of Education and does not require a directed-growth approval.
            </p>
          </div>
        </div>
      </section>

      {/* Dated regional snapshot */}
      <section className="bg-cream py-14 md:py-16 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-medium text-forest-green leading-[1.1] mb-3" style={{ fontSize: 'clamp(24px, 3vw, 32px)' }}>
            A regional snapshot, dated {LAST_UPDATED}
          </h2>
          <p className="text-[14px] text-dark-text/60 leading-relaxed mb-8">
            This is an illustration of what intake looked like when we last checked, not an authoritative table. Windows open and close on weeks of notice, allocation numbers shift mid-cycle, and your region is the only authoritative source. Verify with your CMSM or DSSAB before acting on any row.
          </p>

          <div className="space-y-3">
            {regions.map(r => (
              <div key={r.name} className="bg-white rounded-xl border border-[rgba(47,74,58,0.08)] px-5 py-4">
                <p className="text-[14px] font-semibold text-dark-text mb-1">{r.name}</p>
                <p className="text-[13.5px] text-dark-text/60 leading-relaxed">{r.status}</p>
                <p className="text-[12px] text-dark-text/40 mt-1.5">Verify with your CMSM/DSSAB.</p>
              </div>
            ))}
          </div>

          <p className="text-[13px] text-dark-text/50 leading-relaxed mt-6">
            Whether closed regions reopen depends on an unfinished federal-provincial negotiation. A renewed deal may bring new intake; nothing implies it will.
          </p>
        </div>
      </section>

      {/* The playbook */}
      <section className="bg-white py-14 md:py-16 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-medium text-forest-green leading-[1.1] mb-3" style={{ fontSize: 'clamp(24px, 3vw, 32px)' }}>
            If your region is closed, here is your realistic playbook
          </h2>
          <div className="mt-8 space-y-6">
            {playbook.map((step, i) => (
              <div key={step.title} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-forest-green/10 text-forest-green text-[13px] font-semibold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <p className="text-[15px] font-semibold text-dark-text mb-1">{step.title}</p>
                  <p className="text-[14px] text-dark-text/65 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standing CTA: the region is the authority */}
      <section className="bg-forest-green py-14 px-5 md:px-8 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display font-medium text-cream leading-snug mb-4" style={{ fontSize: 'clamp(24px, 3vw, 34px)' }}>
            Your region is the only authoritative source.
          </h2>
          <p className="text-[15px] text-cream/65 leading-relaxed">
            Every CMSM and DSSAB publishes its own child care services contact. Search your municipality or district name plus &ldquo;children&rsquo;s services CWELCC&rdquo; to reach the office that decides for your area, and ask them directly about directed growth and Expressions of Interest.
          </p>
        </div>
      </section>

      {/* Related */}
      <section className="bg-white py-10 px-5 md:px-8 border-t border-[rgba(47,74,58,0.07)]">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8">
          <Link href="/tools/cwelcc-calculator" className="text-[14px] font-medium text-forest-green hover:underline underline-offset-4">
            CWELCC calculator for Ontario operators →
          </Link>
          <Link href="/resources/cwelcc-guide" className="text-[14px] font-medium text-forest-green hover:underline underline-offset-4">
            Read the full CWELCC guide →
          </Link>
          <Link href="/resources/licensing-checklist" className="text-[14px] font-medium text-forest-green hover:underline underline-offset-4">
            Provincial licensing checklist →
          </Link>
        </div>
      </section>
    </>
  )
}
