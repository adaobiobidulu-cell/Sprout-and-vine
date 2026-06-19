import type { Metadata } from 'next'
import { altEn } from '@/lib/seo'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog | Sprout & Vine Care',
  description: "We build Sprout & Vine Care in public. Follow our progress, what we're learning from Canadian childcare operators, and why we're building the way we are.",
  alternates: altEn('/blog'),
}

const posts = [
  {
    slug: 'why-we-are-building-sprout-and-vine',
    title: 'Why we are building Sprout & Vine',
    excerpt: 'We are not building another app. We are building infrastructure. Here is what we found when we looked closely at Canadian childcare operations, and why it changed everything.',
    author: 'Ada',
    date: 'May 1, 2026',
    dateIso: '2026-05-01',
    readTime: '8 min',
    tag: 'Build in public',
  },
]

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-cream py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">
            Blog
          </p>
          <h1
            className="font-display font-medium text-forest-green leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(40px, 5vw, 60px)' }}
          >
            We build in public.
          </h1>
          <p className="text-[17px] text-dark-text/60 leading-relaxed max-w-xl">
            What we are building, what we are learning, and what Canadian childcare operators are telling us. Updated as we go.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-white py-12 md:py-16 px-5 md:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          {posts.map(post => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <article className="bg-cream rounded-2xl p-8 hover:-translate-y-1 transition-transform duration-200 border border-[rgba(47,74,58,0.08)]" style={{ boxShadow: '0 4px 20px rgba(47,74,58,0.06)' }}>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-[11px] font-semibold text-sage-green bg-sage-green/10 px-3 py-1 rounded-full uppercase tracking-[0.1em]">
                    {post.tag}
                  </span>
                  <span className="text-[12px] text-dark-text/40">
                    <time dateTime={post.dateIso}>{post.date}</time>
                    {' · '}
                    {post.readTime} read
                  </span>
                </div>
                <h2 className="font-display font-medium text-forest-green leading-[1.1] mb-3 group-hover:underline underline-offset-4 decoration-1" style={{ fontSize: 'clamp(24px, 3vw, 32px)' }}>
                  {post.title}
                </h2>
                <p className="text-[15px] text-dark-text/65 leading-relaxed mb-5">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-forest-green/15 flex items-center justify-center text-[10px] font-bold text-forest-green">
                    AO
                  </div>
                  <span className="text-[13px] text-dark-text/55 font-medium">{post.author}</span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-10">
          <p className="text-[13px] text-dark-text/40 text-center">
            More posts coming. Follow our build at{' '}
            <a
              href="https://x.com/sproutandvine"
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest-green underline underline-offset-2 hover:text-dark-text transition-colors"
            >
              @sproutandvine
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
