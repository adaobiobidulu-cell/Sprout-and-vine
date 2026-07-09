import type { Metadata } from 'next'
import { altEn } from '@/lib/seo'
import FadeIn from '@/components/fade-in'
import FamilyInterestForm from '@/components/family-interest-form'

export const metadata: Metadata = {
  title: 'For Families | Sprout & Vine Care',
  description:
    'The Vine parent app will keep families connected to their childcare centre: daily updates, milestone photos, Smart Pickup notifications, and bilingual communication. Join the list to hear when centres near you join Sprout & Vine Care.',
  alternates: altEn('/families', '/fr/families'),
}

/* Feature descriptions below are taken from the live homepage's Vine
   Parent App section; nothing here is invented (brief 2.2). */
const features = [
  {
    icon: '👨‍👩‍👧',
    title: 'Family Circle',
    desc: 'Mom, Dad, grandparents, step-parents, and nannies, each with role-based access. Co-parents in separate households both stay fully in the loop.',
  },
  {
    icon: '🔒',
    title: 'Smart Pickup Authorization',
    desc: 'Photo-verified authorized pickup list. Parents get notified the moment their child is signed out, and by whom.',
  },
  {
    icon: '🌱',
    title: 'Milestone and Development Timeline',
    desc: 'Teachers tag everyday moments: first scissors, first friend, first full sentence. They auto-build a keepsake development story parents will treasure.',
  },
  {
    icon: '💬',
    title: 'Everything in one app',
    desc: "Daily updates, milestone photos, billing, pickup history, messages, and important centre communications, all in one place. Every update attached to your child's profile.",
  },
]

export default function FamiliesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn margin="0px">
            <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">
              For Families
            </p>
            <h1
              className="font-display font-medium text-forest-green leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
            >
              Stay connected to your child&rsquo;s day.
            </h1>
            <p className="text-[17px] text-dark-text/60 leading-relaxed max-w-xl mx-auto">
              The Vine parent app is how families on Sprout &amp; Vine Care see daily updates, milestone photos, and pickup notifications from their centre. Parent app coming Q4 2026, installable on iPhone and Android from day one.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What the app will do */}
      <section className="bg-white py-16 md:py-20 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.08}>
                <div className="bg-cream/60 rounded-2xl p-6 border border-[rgba(47,74,58,0.08)] h-full">
                  <span className="text-2xl block mb-3">{f.icon}</span>
                  <p className="text-[15px] font-semibold text-dark-text mb-1.5">{f.title}</p>
                  <p className="text-[13.5px] text-dark-text/60 leading-relaxed">{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Honest status line */}
          <FadeIn delay={0.15}>
            <p className="text-[14px] text-dark-text/50 text-center mt-10">
              The platform is in development with our founding operators. Families join through their childcare centre once it is on Sprout &amp; Vine Care.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Interest form */}
      <section className="bg-cream py-16 md:py-20 px-5 md:px-8">
        <div className="max-w-xl mx-auto">
          <FadeIn>
            <h2
              className="font-display font-medium text-forest-green leading-snug mb-3 text-center"
              style={{ fontSize: 'clamp(26px, 3.5vw, 36px)' }}
            >
              Hear when centres near you join.
            </h2>
            <p className="text-[15px] text-dark-text/55 leading-relaxed text-center mb-10">
              Tell us where you are and we will let you know when childcare centres in your area come on board. That is the only thing we will use this for.
            </p>
            <div className="bg-white rounded-2xl border border-[rgba(47,74,58,0.1)] p-7" style={{ boxShadow: '0 4px 24px rgba(47,74,58,0.07)' }}>
              <FamilyInterestForm />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
