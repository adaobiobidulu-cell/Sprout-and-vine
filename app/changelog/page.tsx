import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { canonicalOnly } from '@/lib/seo'
import { getChangelogEntries } from '@/lib/changelog'

export const metadata: Metadata = {
  title: 'Changelog | Sprout & Vine Care',
  description:
    'What we shipped, updated as we build. Product updates from the Sprout & Vine Care team, written by the people building it.',
  alternates: canonicalOnly('/changelog'),
}

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function formatDate(iso: string) {
  const [y, m, d] = iso.split('-').map(Number)
  return `${MONTHS[m - 1]} ${d}, ${y}`
}

export default function ChangelogPage() {
  const entries = getChangelogEntries()

  // Per the improvement brief: an empty or near-empty changelog reads worse
  // than none. The page goes live automatically once Ada has written at
  // least three real entries in content/changelog/ (see the README there).
  if (entries.length < 3) {
    redirect('/roadmap')
  }

  return (
    <>
      {/* Header */}
      <section className="bg-cream py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-2xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">
            Changelog
          </p>
          <h1
            className="font-display font-medium text-forest-green leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(40px, 5vw, 60px)' }}
          >
            What we shipped.
          </h1>
          <p className="text-[17px] text-dark-text/60 leading-relaxed max-w-xl">
            Updated as we build. Every entry here is written by Ada and Chuck, not generated.
          </p>
        </div>
      </section>

      {/* Entries */}
      <section className="bg-white py-14 md:py-16 px-5 md:px-8">
        <div className="max-w-2xl mx-auto space-y-12">
          {entries.map(entry => (
            <article key={entry.slug} className="border-b border-[rgba(47,74,58,0.08)] pb-12 last:border-0 last:pb-0">
              <time dateTime={entry.date} className="text-[12px] font-medium text-dark-text/40 uppercase tracking-[0.1em]">
                {formatDate(entry.date)}
              </time>
              <h2 className="font-display font-medium text-forest-green leading-[1.15] mt-2 mb-4" style={{ fontSize: 'clamp(22px, 2.8vw, 30px)' }}>
                {entry.title}
              </h2>
              {entry.paragraphs.map((p, i) => (
                <p key={i} className="text-[15px] text-dark-text/70 leading-[1.8] mb-3 last:mb-0">
                  {p}
                </p>
              ))}
              {entry.image && (
                <div className="mt-5 rounded-xl overflow-hidden border border-[rgba(47,74,58,0.1)]" style={{ boxShadow: '0 4px 20px rgba(47,74,58,0.06)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={entry.image} alt="" className="w-full h-auto" />
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Follow along */}
      <section className="bg-cream py-14 px-5 md:px-8 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-[16px] text-dark-text/65 mb-5">
            Want these updates in your inbox as we ship them?
          </p>
          <Link
            href="/#updates"
            className="inline-block border-2 border-forest-green text-forest-green text-[14px] font-medium px-6 py-3 rounded-lg hover:bg-forest-green hover:text-white transition-colors"
          >
            Follow along by email
          </Link>
        </div>
      </section>
    </>
  )
}
