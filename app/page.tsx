import Link from 'next/link'
import FadeIn from '@/components/fade-in'
import ProductTour from '@/components/product-tour'
import DashboardPreview from '@/components/dashboard-preview'
import EmailCapture from '@/components/email-capture'
import CanadaMap from '@/components/canada-map'
import PhotoAccent from '@/components/photo-accent'
import { testimonial } from '@/lib/testimonial'
import type { Metadata } from 'next'
import { altEn } from '@/lib/seo'

export const metadata: Metadata = {
  alternates: altEn('/'),
}

const features = [
  {
    name: 'Family Connection',
    desc: 'Keep parents informed and engaged with real-time updates.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#2F4A3A" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
        <path d="M16 3.13a4 4 0 010 7.75" />
        <path d="M21 21v-2a4 4 0 00-3-3.87" />
      </svg>
    ),
  },
  {
    name: 'Attendance Tracking',
    desc: 'Accurate attendance at your fingertips. Save time every day.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#2F4A3A" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4" />
      </svg>
    ),
  },
  {
    name: 'Daily Reports',
    desc: 'Beautiful daily reports in minutes, not hours.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#2F4A3A" strokeWidth="1.5" strokeLinecap="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
  },
  {
    name: 'Child Development',
    desc: 'Track milestones and observations with ease.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#2F4A3A" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 20V10M18 20V4M6 20v-4" />
      </svg>
    ),
  },
  {
    name: 'Billing & Payments',
    desc: 'Simplify tuition management and get paid on time.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#2F4A3A" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M9.5 9.5A2.5 2.5 0 0112 8a2.5 2.5 0 010 5 2.5 2.5 0 010 5 2.5 2.5 0 01-2.5-1.5" />
      </svg>
    ),
  },
  {
    name: 'Smart Pickup Auth',
    desc: 'Photo-verified pickup lists. Instant parent alerts.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#2F4A3A" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    name: 'Enrollment & Waitlist',
    desc: 'From first inquiry to first day, digitally managed.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#2F4A3A" strokeWidth="1.5" strokeLinecap="round">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        <path d="M12 12h.01M12 16h.01M8 12h.01M8 16h.01" />
      </svg>
    ),
  },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">
      {children}
    </p>
  )
}

function PhoneShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto" style={{ width: '220px' }}>
      <div className="rounded-[36px] p-2.5" style={{ background: '#1a1a1a', boxShadow: '0 32px 80px rgba(0,0,0,0.35)' }}>
        <div className="rounded-[28px] overflow-hidden bg-white" style={{ minHeight: '420px' }}>
          <div className="flex justify-center pt-2 pb-1">
            <div className="w-16 h-1.5 rounded-full bg-[#1a1a1a]/10" />
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

/* Marks the start of one of the 5 guided parts of the homepage. */
function PartLabel({ number, title, bg = 'bg-cream', dark = false }: { number: string; title: string; bg?: string; dark?: boolean }) {
  return (
    <div className={`${bg} pt-14 pb-6 px-5 md:px-8 text-center`}>
      <p className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.2em] text-terracotta">
        <span className={dark ? 'text-cream/40' : 'text-dark-text/30'}>{number}</span>
        {title}
      </p>
    </div>
  )
}

/* Marks a workflow sub-group within Part 3. */
function GroupLabel({ children, bg = 'bg-cream' }: { children: React.ReactNode; bg?: string }) {
  return (
    <div className={`${bg} pt-10 pb-2 px-5 md:px-8 text-center`}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-dark-text/40">
        {children}
      </p>
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* ══════════════ PART 1: WHAT SPROUT & VINE CARE IS ══════════════ */}
      <PartLabel number="01 /" title="What Sprout & Vine Care is" bg="bg-cream" />

      {/* ── HERO */}
      <section className="pb-24 md:pb-32 px-5 md:px-8 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta text-[12px] font-semibold px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
            Founding Operators Program · Now Open
          </div>

          <h1
            className="font-display font-medium text-forest-green leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(38px, 5vw, 66px)' }}
          >
            The Childcare Platform<br />
            We Are Building With<br className="hidden sm:block" />{' '}
            <em className="text-terracotta not-italic">Canadian Operators.</em>
          </h1>

          <p className="text-[18px] text-dark-text/65 mb-10 max-w-xl mx-auto leading-relaxed">
            Sprout &amp; Vine Care is a modern childcare management platform designed for Canadian centres. We're partnering with a limited group of founding operators to help shape the future of enrollment, compliance, communication, and centre management.
          </p>

          <div className="flex flex-col items-center gap-4">
            <Link
              id="hero-primary-cta"
              href="/founding"
              className="w-full sm:w-auto bg-forest-green text-white text-[14px] font-medium px-8 py-3.5 rounded-lg hover:bg-[#243d2f] transition-colors text-center"
            >
              Join the Founding Operators Program
            </Link>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto">
              <Link
                href="/features"
                className="text-[13px] font-medium text-dark-text/70 border border-[rgba(47,74,58,0.22)] px-5 py-2.5 rounded-lg hover:border-[rgba(47,74,58,0.45)] hover:text-dark-text transition-colors text-center"
              >
                Explore Features
              </Link>
              <Link
                href="/contact"
                className="text-[13px] font-medium text-dark-text/70 border border-[rgba(47,74,58,0.22)] px-5 py-2.5 rounded-lg hover:border-[rgba(47,74,58,0.45)] hover:text-dark-text transition-colors text-center"
              >
                Book a Discovery Call
              </Link>
              <Link
                href="/roadmap"
                className="text-[13px] font-medium text-dark-text/70 border border-[rgba(47,74,58,0.22)] px-5 py-2.5 rounded-lg hover:border-[rgba(47,74,58,0.45)] hover:text-dark-text transition-colors text-center"
              >
                View Roadmap
              </Link>
            </div>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8">
            {['Built for Canada', 'Designed with Childcare Operators', 'AI-Powered Future Roadmap', 'CWELCC-Aware'].map(item => (
              <div key={item} className="flex items-center gap-1.5 text-[12px] text-dark-text/45 font-medium">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <circle cx="7" cy="7" r="6.5" stroke="#6EB76F" />
                  <path d="M4 7l2 2 4-4" stroke="#6EB76F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION BLURB */}
      <section className="bg-white py-16 md:py-20 px-5 md:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <p
            className="font-display font-medium leading-snug mb-4"
            style={{ fontSize: 'clamp(22px, 2.8vw, 32px)', color: '#0F6E56' }}
          >
            The gap is not passion. The gap is information and infrastructure.
          </p>
          <p className="text-[16px] text-dark-text/60 mb-6">
            That's why we built Sprout &amp; Vine for Canada.
          </p>
          <p className="text-[15px] font-semibold text-forest-green mb-6">
            Sprout &amp; Vine Care is built with operators, not for them.
          </p>
          <Link href="/about" className="text-[14px] font-medium text-forest-green hover:underline">
            Read our story →
          </Link>
        </div>
      </section>

      {/* ── THREE JOURNEYS */}
      <section className="bg-cream py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-14">
            <SectionLabel>The Platform</SectionLabel>
            <h2 className="font-display font-medium text-forest-green leading-[1.1]" style={{ fontSize: 'clamp(36px, 4.5vw, 52px)' }}>
              One platform. Three stages of growth.
            </h2>
            <p className="text-[16px] text-dark-text/55 mt-4 max-w-xl mx-auto">
              Whether you're planning to open, running a single centre, or managing multiple locations, Sprout &amp; Vine scales with you.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeIn delay={0.05}>
            <div className="bg-white rounded-2xl p-7 border border-[rgba(47,74,58,0.08)] hover:-translate-y-1 transition-transform duration-200" style={{ boxShadow: '0 4px 20px rgba(47,74,58,0.06)' }}>
              <div className="text-2xl mb-4">🌱</div>
              <h3 className="font-display text-[26px] font-medium text-forest-green mb-1">Seeds</h3>
              <p className="text-[13px] font-medium text-dark-text/50 mb-4">For aspiring childcare operators</p>
              <p className="text-[14px] text-dark-text/65 leading-relaxed mb-6">
                Planning your centre? Build your business plan, complete your provincial licensing checklist, and get everything ready before day one.
              </p>
              <Link href="/features" className="text-[14px] font-medium text-forest-green hover:underline">Start planning →</Link>
            </div>
            </FadeIn>

            <FadeIn delay={0.1}>
            <div
              className="bg-white rounded-2xl p-7 relative hover:-translate-y-1 transition-transform duration-200"
              style={{ border: '2px solid #2F4A3A', boxShadow: '0 12px 40px rgba(47,74,58,0.14)' }}
            >
              <div className="text-2xl mb-4">🌿</div>
              <h3 className="font-display text-[26px] font-medium text-forest-green mb-1">Sprout</h3>
              <p className="text-[13px] font-medium text-dark-text/50 mb-4">For growing centres and home providers</p>
              <p className="text-[14px] text-dark-text/65 leading-relaxed mb-6">
                You're open. Now run daily operations beautifully: attendance, billing, parent communication, and Smart Pickup, all in one place.
              </p>
              <Link href="/founding" className="text-[14px] font-medium text-forest-green hover:underline">Join the founding program →</Link>
            </div>
            </FadeIn>

            <FadeIn delay={0.15}>
            <div className="bg-white rounded-2xl p-7 border border-[rgba(47,74,58,0.08)] hover:-translate-y-1 transition-transform duration-200" style={{ boxShadow: '0 4px 20px rgba(47,74,58,0.06)' }}>
              <div className="text-2xl mb-4">🍃</div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-display text-[26px] font-medium text-forest-green">Vine</h3>
                <span className="text-[10px] font-semibold text-dark-text/40 border border-[rgba(47,74,58,0.15)] px-2 py-0.5 rounded-full">Multi-location</span>
              </div>
              <p className="text-[13px] font-medium text-dark-text/50 mb-4">For scaling multi-location organizations</p>
              <p className="text-[14px] text-dark-text/65 leading-relaxed mb-6">
                Multiple locations, one calm dashboard. Oversee everything, report across centres, and scale without the chaos.
              </p>
              <Link href="/founding" className="text-[14px] font-medium text-forest-green hover:underline">Join the founding program →</Link>
            </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════════════ PART 2: BUILT FOR CANADIAN CHILDCARE ══════════════ */}
      <PartLabel number="02 /" title="Built for Canadian childcare" bg="bg-white" />

      {/* ── CWELCC / CANADA */}
      <section className="bg-white pb-20 md:pb-24 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Built for Canada</SectionLabel>
          <h2 className="font-display font-medium text-forest-green leading-[1.08] mb-6" style={{ fontSize: 'clamp(34px, 4vw, 50px)' }}>
            A platform built around<br />CWELCC from the ground up.
          </h2>
          <p className="text-[16px] text-dark-text/65 leading-relaxed mb-12 max-w-2xl">
            Canada's childcare landscape is unlike any other. Sprout &amp; Vine is designed around Canadian childcare from day one — including CWELCC, bilingual support, and provincial workflows.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🍁',
                title: 'CWELCC Subsidy Tracking',
                desc: 'Automatically calculate and track Canada-Wide Early Learning and Child Care subsidies. No spreadsheets.',
              },
              {
                icon: '🇫🇷',
                title: 'Fully Bilingual',
                desc: 'English and French throughout the platform and the Vine parent app, built in from the start.',
              },
              {
                icon: '📋',
                title: 'Provincial Compliance',
                desc: 'Planned licensing checklists and ratio tracking designed around provincial requirements.',
              },
            ].map(item => (
              <div key={item.title}>
                <span className="text-3xl block mb-4">{item.icon}</span>
                <h3 className="text-[16px] font-semibold text-dark-text mb-2">{item.title}</h3>
                <p className="text-[14px] text-dark-text/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-[rgba(47,74,58,0.1)]">
            <p className="text-[12px] font-medium text-dark-text/40 uppercase tracking-[0.12em] mb-3">
              Now welcoming founding operators in
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {['Ontario', 'British Columbia', 'Alberta', 'Manitoba', 'Québec'].map((province, i, arr) => (
                <span key={province} className="text-[14px] font-medium text-dark-text/55">
                  {province}{i < arr.length - 1 ? <span className="text-dark-text/25 ml-4">·</span> : null}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CANADA MAP ── */}
      <section className="bg-white py-16 md:py-20 px-5 md:px-8">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <CanadaMap />
        </div>
      </section>

      {/* ══════════════ PART 3: BUILT AROUND DAILY CHILDCARE WORKFLOWS ══════════════ */}
      <PartLabel number="03 /" title="Built around daily childcare workflows" bg="bg-white" />

      {/* ── FEATURES GRID */}
      <section className="bg-white pb-20 md:pb-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-medium text-forest-green text-center leading-[1.1] mb-16" style={{ fontSize: 'clamp(36px, 4.5vw, 52px)' }}>
            Everything you need, all in one place. 🌿
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            {features.slice(0, 4).map(f => (
              <div key={f.name} className="flex flex-col items-center text-center">
                <div
                  className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4 p-3.5"
                  style={{ border: '1.5px solid rgba(47,74,58,0.15)', boxShadow: '0 4px 16px rgba(47,74,58,0.08)' }}
                >
                  {f.icon}
                </div>
                <h3 className="text-[14px] font-semibold text-dark-text mb-1.5">{f.name}</h3>
                <p className="text-[13px] text-dark-text/55 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 mt-10 md:max-w-3xl md:mx-auto">
            {features.slice(4).map(f => (
              <div key={f.name} className="flex flex-col items-center text-center">
                <div
                  className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4 p-3.5"
                  style={{ border: '1.5px solid rgba(47,74,58,0.15)', boxShadow: '0 4px 16px rgba(47,74,58,0.08)' }}
                >
                  {f.icon}
                </div>
                <h3 className="text-[14px] font-semibold text-dark-text mb-1.5">{f.name}</h3>
                <p className="text-[13px] text-dark-text/55 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DASHBOARD PREVIEW */}
      <section className="bg-cream py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[35%_1fr] gap-12 items-center">
          <div>
            <h2 className="font-display font-medium text-forest-green leading-[1.08] mb-5" style={{ fontSize: 'clamp(32px, 3.5vw, 48px)' }}>
              Designed for busy centres.<br />Built for what matters most. 🌿
            </h2>
            <p className="text-[16px] text-dark-text/65 leading-relaxed mb-7">
              From enrollment to everyday operations, Sprout &amp; Vine helps you save time, reduce stress, and focus on the children in your care.
            </p>
            <Link
              href="/features"
              className="inline-block bg-forest-green text-white text-[14px] font-medium px-6 py-3.5 rounded-lg hover:bg-[#243d2f] transition-colors"
            >
              Explore all features
            </Link>
            <PhotoAccent
              src="/pexels-mikhail-nilov-8923952.jpg"
              alt="Bright, organized educational toys and materials on classroom shelves"
              width={160}
              height={200}
              rotate={2}
              tone="sage"
              className="mt-8 hidden lg:block"
            />
          </div>

          <div className="min-w-0">
            <DashboardPreview />
          </div>
        </div>
      </section>

      {/* ── For safer pickup ── */}
      <GroupLabel bg="bg-forest-green">
        <span className="text-sage-green">For safer pickup</span>
      </GroupLabel>

      {/* ── SMART PICKUP SPOTLIGHT */}
      <section className="bg-forest-green pb-20 md:pb-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">Parent Safety</p>
            <h2 className="font-display font-medium text-cream leading-[1.08] mb-6" style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}>
              Peace of mind,<br />every single pickup.
            </h2>
            <p className="text-[16px] text-cream/65 leading-relaxed mb-8 max-w-lg">
              Most apps tell parents their child was picked up. Sprout &amp; Vine tells them <em>who</em> picked up their child, shows a photo, and sends an instant notification before they have left the parking lot.
            </p>
            <ul className="space-y-4">
              {[
                { icon: '🔒', text: 'Photo-verified authorized pickup list' },
                { icon: '📱', text: 'Instant notification: name, photo, and timestamp' },
                { icon: '🚗', text: 'Real-time pickup ETA from parents and guardians' },
              ].map(item => (
                <li key={item.text} className="flex items-start gap-3 text-[15px] text-cream/80">
                  <span className="text-lg flex-shrink-0 leading-none mt-0.5">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
            <PhotoAccent
              src="/pexels-tiger-lily-8260484.jpg"
              alt="A parent helping their child on with a backpack before heading out"
              width={168}
              height={224}
              rotate={-2}
              className="mt-8 hidden sm:block"
            />
          </div>

          <div className="flex justify-center">
            <PhoneShell>
              <div className="px-3 pb-3 space-y-2.5">
                <div className="text-[10px] text-dark-text/40 text-center py-1">Vine Parent App</div>

                <div className="rounded-2xl p-3.5 bg-forest-green">
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white text-sm">✓</div>
                    <div>
                      <p className="text-white text-[11px] font-semibold">Smart Pickup Alert</p>
                      <p className="text-white/55 text-[9px]">Just now</p>
                    </div>
                  </div>
                  <p className="text-cream font-semibold text-[13px] mb-0.5">Sophie has been picked up</p>
                  <p className="text-cream/65 text-[11px]">By Grandma Rose · 3:14 PM</p>
                </div>

                <div className="rounded-xl border border-[rgba(47,74,58,0.1)] p-3 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-light-sage/30 flex items-center justify-center text-2xl">👵</div>
                  <div>
                    <p className="text-[12px] font-semibold text-dark-text">Rose Mitchell</p>
                    <p className="text-[10px] text-dark-text/45">Grandmother · Authorized</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-sage-green" />
                      <span className="text-[9px] text-sage-green font-medium">Photo verified</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-sage-green/10 py-2.5 flex items-center justify-center gap-2">
                  <span className="text-sage-green text-sm">✓</span>
                  <span className="text-[11px] font-semibold text-sage-green">Pickup confirmed</span>
                </div>

                <div className="text-center pt-1">
                  <p className="text-[10px] text-dark-text/35">Notification sent to both parents</p>
                </div>
              </div>
            </PhoneShell>
          </div>
        </div>
      </section>

      {/* ── CONTEXTUAL CTA: Book a Discovery Call ── */}
      <div className="bg-white py-8 px-5 md:px-8 border-y border-[rgba(47,74,58,0.07)]">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[15px] text-dark-text/65 font-medium text-center sm:text-left">
            Want to see Smart Pickup and the full platform in action?
          </p>
          <Link
            href="/contact"
            className="flex-shrink-0 bg-forest-green text-white text-[13px] font-medium px-6 py-2.5 rounded-lg hover:bg-[#243d2f] transition-colors whitespace-nowrap"
          >
            Book a Discovery Call
          </Link>
        </div>
      </div>

      {/* ── For enrollment and family communication ── */}
      <GroupLabel bg="bg-cream">For enrollment and family communication</GroupLabel>

      {/* ── ENROLLMENT & WAITLIST */}
      <section className="bg-cream pb-20 md:pb-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="space-y-3">
              {[
                { num: '1', label: 'Inquiry', desc: 'Online form · Auto waitlist', icon: '📬' },
                { num: '2', label: 'Waitlist', desc: 'Position tracked · Parent notified', icon: '📋' },
                { num: '3', label: 'Offer Sent', desc: 'Digital package · E-signature', icon: '📄' },
                { num: '4', label: 'Enrolled ✓', desc: 'CWELCC pre-filled · Ready day 1', icon: '💚', active: true },
              ].map((stage, i) => (
                <div key={stage.label} className="relative">
                  <div
                    className="flex items-center gap-4 rounded-xl p-4 bg-white border transition-colors"
                    style={{
                      border: stage.active ? '1.5px solid #6EB76F' : '1px solid rgba(47,74,58,0.1)',
                      boxShadow: stage.active ? '0 4px 20px rgba(110,183,111,0.12)' : '0 2px 10px rgba(47,74,58,0.05)',
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-lg"
                      style={{ background: stage.active ? 'rgba(110,183,111,0.15)' : 'rgba(47,74,58,0.06)' }}
                    >
                      {stage.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-[14px] font-semibold text-dark-text">{stage.label}</p>
                      <p className="text-[12px] text-dark-text/45">{stage.desc}</p>
                    </div>
                    <span className="text-[11px] font-semibold text-dark-text/25">{stage.num}</span>
                  </div>
                  {i < 3 && (
                    <div className="flex justify-center py-0.5">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M 8 2 C 10 6 6 10 8 14" stroke="#AEC1B0" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionLabel>Enrollment Made Simple</SectionLabel>
            <h2 className="font-display font-medium text-forest-green leading-[1.08] mb-6" style={{ fontSize: 'clamp(34px, 4vw, 50px)' }}>
              From first inquiry to<br />first day, beautifully managed.
            </h2>
            <p className="text-[16px] text-dark-text/65 leading-relaxed mb-8">
              Canadian centres carry waitlists of 2 to 3 years. Sprout &amp; Vine manages the entire journey: inquiry forms, waitlist positions, enrollment packages, e-signature, and subsidy paperwork pre-filled from your CWELCC data. No spreadsheets. No paper. No stress.
            </p>
            <ul className="space-y-4">
              {[
                { icon: '📬', text: 'Online inquiry forms with automatic waitlist placement' },
                { icon: '📄', text: 'Digital enrollment packages with e-signature' },
                { icon: '💳', text: 'Subsidy paperwork pre-filled from your CWELCC data' },
              ].map(item => (
                <li key={item.text} className="flex items-start gap-3 text-[15px] text-dark-text/75">
                  <span className="text-lg flex-shrink-0 leading-none mt-0.5">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── VINE PARENT APP */}
      <section className="bg-white py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center order-2 lg:order-1">
            <PhoneShell>
              <div className="px-3 pb-3 space-y-2">
                <div className="text-[10px] font-semibold text-forest-green text-center py-1 border-b border-[rgba(47,74,58,0.08)]">
                  Activity Feed
                </div>
                {[
                  { icon: '📷', title: 'Emma working on her art project', sub: 'Butterflies Room · 10:24 AM', color: '#AEC1B0' },
                  { icon: '🌱', title: 'Milestone: First use of scissors!', sub: 'Child Development · 10:31 AM', color: '#6EB76F' },
                  { icon: '📋', title: 'Daily report from Olivia is ready', sub: 'Tap to read · 12:03 PM', color: '#2F4A3A' },
                  { icon: '💬', title: 'Message from Little Learners', sub: 'Spring photos this Friday!', color: '#E2845F' },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-2.5 p-2.5 rounded-xl" style={{ background: 'rgba(247,242,232,0.7)' }}>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-base"
                      style={{ background: `${item.color}20` }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-dark-text leading-snug">{item.title}</p>
                      <p className="text-[9px] text-dark-text/40 mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PhoneShell>
          </div>

          <div className="order-1 lg:order-2">
            <SectionLabel>The Vine Parent App</SectionLabel>
            <h2 className="font-display font-medium text-forest-green leading-[1.08] mb-5" style={{ fontSize: 'clamp(34px, 4vw, 50px)' }}>
              Parents aren't just notified.<br />They're connected.
            </h2>
            <p className="text-[16px] text-dark-text/65 leading-relaxed mb-8">
              Families stay connected through daily updates, milestone photos, billing, pickup history, messages, and important centre communications, all in one app. Every update attached to their child's profile. Nothing lost.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: '👨‍👩‍👧',
                  title: 'Family Circle',
                  badge: 'Standout feature',
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
              ].map(item => (
                <div key={item.title} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-xl"
                    style={{ background: 'rgba(47,74,58,0.07)' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="text-[14px] font-semibold text-dark-text">{item.title}</p>
                      {item.badge && (
                        <span
                          className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                          style={{ background: 'rgba(110,183,111,0.12)', color: '#6EB76F' }}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[13px] text-dark-text/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 pt-6 border-t border-[rgba(47,74,58,0.1)]">
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 bg-forest-green/8 text-forest-green text-[12px] font-medium px-4 py-2 rounded-lg">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  iOS app coming Q4 2026
                </span>
                <span className="inline-flex items-center gap-2 bg-forest-green/8 text-forest-green text-[12px] font-medium px-4 py-2 rounded-lg">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                    <path d="M3.18 23.76c.3.17.64.22.99.16l12.87-7.43-2.82-2.82-11.04 10.09zm-1.65-20.4A1.99 1.99 0 001 4.96v14.08c0 .65.28 1.24.72 1.64l.09.08 7.89-7.89v-.19L1.53 4.8l-.01-.01v-.01zm19.65 7.47l-2.76-1.6-3.14 3.14 3.14 3.13 2.79-1.61c.79-.46.79-1.21-.03-1.66zM4.17.24L17.04 7.68l-2.82 2.82L1.35.41c.35-.06.71 0 1.01.17l1.81 1.07V.24z"/>
                  </svg>
                  Android app planned for 2027
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── For child and staff records ── */}
      <GroupLabel bg="bg-cream">For child and staff records</GroupLabel>

      {/* ── CHILD PROFILE SECTION ── */}
      <section className="bg-cream pb-20 md:pb-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>Coming at launch</SectionLabel>
            <h2
              className="font-display font-medium text-forest-green leading-[1.05] mb-5"
              style={{ fontSize: 'clamp(34px, 4vw, 52px)' }}
            >
              Every child. One profile.<br />A record that grows with them.
            </h2>
            <p className="text-[16px] text-dark-text/65 leading-relaxed mb-4">
              The child profile starts the moment they enroll. It travels with them when they leave.
            </p>
            <p className="text-[16px] text-dark-text/65 leading-relaxed mb-8">
              From day one, every update, every milestone, every photo, and every document lives in a single profile that belongs to the family, not the centre. Educators contribute to it. Parents treasure it. And when the time comes to move on, it moves with them.
            </p>
            <div className="space-y-3 mb-8">
              {[
                { icon: '🔒', text: 'Owned by the family, not the centre' },
                { icon: '📁', text: 'Every photo, report, and milestone in one place' },
                { icon: '🚀', text: 'Portable. Moves with your child, always.' },
              ].map(item => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <span className="text-[15px] text-dark-text/75">{item.text}</span>
                </div>
              ))}
            </div>
            <PhotoAccent
              src="/pexels-kseniachernaya-8535187.jpg"
              alt="An educator playing with a child using colourful wooden blocks"
              width={200}
              height={134}
              rotate={-1.5}
              className="mb-8 hidden sm:block"
            />
            <Link
              href="/features"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-forest-green hover:underline"
            >
              See how the profile builds over time →
            </Link>
          </div>

          {/* Profile card mockup */}
          <div>
            <div
              className="bg-white rounded-2xl overflow-hidden border border-[rgba(47,74,58,0.1)]"
              style={{ boxShadow: '0 8px 40px rgba(47,74,58,0.12)' }}
            >
              {/* Card header */}
              <div className="bg-forest-green px-6 py-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-light-sage flex items-center justify-center text-forest-green text-[14px] font-bold flex-shrink-0">
                  EJ
                </div>
                <div>
                  <p className="text-cream font-semibold text-[15px] leading-tight">Emma Johnson</p>
                  <p className="text-cream/60 text-[12px]">Butterflies Room · 3 yrs, 2 mo</p>
                </div>
                <div className="ml-auto">
                  <span className="text-[10px] font-medium text-sage-green bg-sage-green/20 px-2.5 py-1 rounded-full">Active</span>
                </div>
              </div>

              {/* Info row */}
              <div className="px-6 py-4 border-b border-[rgba(47,74,58,0.07)] grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[11px] text-dark-text/40 uppercase tracking-[0.08em] mb-1">Enrolled</p>
                  <p className="text-[13px] font-semibold text-dark-text">September 2024</p>
                </div>
                <div>
                  <p className="text-[11px] text-dark-text/40 uppercase tracking-[0.08em] mb-1">Room</p>
                  <p className="text-[13px] font-semibold text-dark-text">Butterflies</p>
                </div>
              </div>

              {/* Milestone tags */}
              <div className="px-6 py-4 border-b border-[rgba(47,74,58,0.07)]">
                <p className="text-[11px] text-dark-text/40 uppercase tracking-[0.08em] mb-3">Recent milestones</p>
                <div className="flex flex-col gap-2">
                  {[
                    { icon: '🌱', text: 'First scissors', date: 'May 14' },
                    { icon: '💬', text: 'First full sentence', date: 'May 20' },
                    { icon: '🎨', text: 'Drew a shape', date: 'May 23' },
                  ].map(m => (
                    <div key={m.text} className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-[13px] text-dark-text/75">
                        <span>{m.icon}</span> {m.text}
                      </span>
                      <span className="text-[11px] text-dark-text/35">{m.date}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline bar */}
              <div className="px-6 py-4">
                <p className="text-[11px] text-dark-text/40 uppercase tracking-[0.08em] mb-3">Journey</p>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-medium text-forest-green whitespace-nowrap">Enrolled</span>
                  <div className="flex-1 flex items-center gap-1">
                    <div className="h-1.5 rounded-full bg-sage-green flex-1" style={{ maxWidth: '45%' }} />
                    <div className="w-2.5 h-2.5 rounded-full bg-forest-green border-2 border-white ring-2 ring-forest-green flex-shrink-0" />
                    <div className="h-1.5 rounded-full flex-1" style={{ background: 'linear-gradient(to right, rgba(110,183,111,0.3), rgba(110,183,111,0.05))' }} />
                  </div>
                  <span className="text-[11px] font-medium text-dark-text/30 whitespace-nowrap">…</span>
                </div>
                <div className="flex justify-center mt-1">
                  <span className="text-[10px] text-dark-text/35">Today</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STAFF PROFILE SECTION ── */}
      <section className="bg-white py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Staff card mockup */}
          <div className="flex justify-center order-2 lg:order-1">
            <div
              className="bg-white rounded-2xl overflow-hidden border border-[rgba(47,74,58,0.1)] w-full max-w-sm"
              style={{ boxShadow: '0 8px 40px rgba(47,74,58,0.12)' }}
            >
              <div className="bg-forest-green px-6 py-4 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-light-sage flex items-center justify-center text-forest-green text-[14px] font-bold flex-shrink-0">
                  ST
                </div>
                <div>
                  <p className="text-cream font-semibold text-[15px] leading-tight">Sarah</p>
                  <p className="text-cream/60 text-[12px]">Butterflies Room</p>
                </div>
              </div>

              <div className="px-6 py-3.5 border-b border-[rgba(47,74,58,0.07)]">
                <p className="text-[12px] text-dark-text/50">With this room since September 2024</p>
              </div>

              <div className="px-6 py-3.5 border-b border-[rgba(47,74,58,0.07)]">
                <p className="text-[10px] text-dark-text/40 uppercase tracking-[0.08em] mb-2.5">Verified credentials</p>
                <div className="flex flex-wrap gap-1.5">
                  {['First Aid ✓', 'ECE ✓', 'Police Check ✓'].map(badge => (
                    <span key={badge} className="text-[11px] font-semibold text-sage-green bg-sage-green/10 px-2.5 py-1 rounded-full">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-6 py-3.5 border-b border-[rgba(47,74,58,0.07)]">
                <p className="text-[12px] text-dark-text/60 italic leading-relaxed">
                  &ldquo;Loves outdoor learning and creative arts. Fluent in English and French.&rdquo;
                </p>
              </div>

              <div className="px-6 py-3.5">
                <p className="text-[12px] font-medium text-forest-green">Caring for Emma since October 2024</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <SectionLabel>Coming at launch</SectionLabel>
            <h2
              className="font-display font-medium text-forest-green leading-[1.05] mb-5"
              style={{ fontSize: 'clamp(34px, 4vw, 52px)' }}
            >
              Know the people<br />caring for your child.
            </h2>
            <p className="text-[16px] text-dark-text/65 leading-relaxed mb-4">
              Every educator. Verified credentials. A face and name, not just a role.
            </p>
            <p className="text-[16px] text-dark-text/65 leading-relaxed mb-8">
              Every staff member on Sprout &amp; Vine has a profile that belongs to them. Parents see what matters: a name, a photo, how long they have been with their child&#39;s room, and verified credential badges for First Aid, ECE designation, and police check status. Directors see everything they need for compliance, scheduling, and licensing. All in one place.
            </p>
            <div className="space-y-3 mb-8">
              {[
                { icon: '✓', text: 'Educators control their own parent-facing profile' },
                { icon: '🔒', text: 'Credentials verified by the director before display' },
                { icon: '📋', text: 'Full compliance dashboard for directors. One screen, all staff, all certifications.' },
              ].map(item => (
                <div key={item.text} className="flex items-start gap-3">
                  <span className="text-lg flex-shrink-0 mt-0.5 leading-none">{item.icon}</span>
                  <span className="text-[15px] text-dark-text/75 leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>
            <Link
              href="/features"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-forest-green hover:underline"
            >
              See how staff profiles work →
            </Link>
          </div>
        </div>
      </section>

      {/* ── For educators and operators ── */}
      <GroupLabel bg="rgba(174,193,176,0.15)">For educators and operators</GroupLabel>

      {/* ── EDUCATOR SECTION */}
      <section className="pb-20 md:pb-24 px-5 md:px-8" style={{ background: 'rgba(174,193,176,0.15)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel>For Educators</SectionLabel>
          <h2 className="font-display font-medium text-forest-green leading-[1.08] mb-5" style={{ fontSize: 'clamp(34px, 4vw, 50px)' }}>
            Built for the people<br />who show up every day.
          </h2>
          <p className="text-[16px] text-dark-text/65 leading-relaxed mb-10 max-w-2xl mx-auto">
            Directors choose Sprout &amp; Vine. Educators love it. That's not a coincidence. We designed every daily workflow around the people actually using it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
            {[
              { icon: '📋', title: 'Daily reports done in under 2 minutes', desc: 'Tap-to-complete templates. Add a photo. Done before nap time.' },
              { icon: '🌱', title: 'Tag milestones from your phone', desc: 'See something beautiful? Tag it in 10 seconds. It builds their development timeline automatically.' },
              { icon: '💬', title: 'Message parents without your personal number', desc: "All communication through the app. Professional boundaries kept. Parents cannot text you at 11pm." },
            ].map(item => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[rgba(47,74,58,0.08)]" style={{ boxShadow: '0 2px 12px rgba(47,74,58,0.06)' }}>
                <span className="text-2xl block mb-3">{item.icon}</span>
                <p className="text-[14px] font-semibold text-dark-text mb-1.5">{item.title}</p>
                <p className="text-[13px] text-dark-text/55 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="hidden sm:flex items-center justify-center gap-5 mb-10">
            <PhotoAccent
              src="/Child Painting.jpg"
              alt="A child's hands using watercolours during a daily activity"
              width={150}
              height={190}
              rotate={-3}
            />
            <PhotoAccent
              src="/pexels-yankrukov-8613054.jpg"
              alt="An educator guiding children through a watercolour painting activity"
              width={190}
              height={150}
              rotate={2}
              tone="sage"
            />
          </div>

          <Link
            href="/for-educators"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-forest-green border-2 border-forest-green px-7 py-3.5 rounded-lg hover:bg-forest-green hover:text-white transition-colors"
          >
            See the educator experience →
          </Link>
        </div>
      </section>

      {/* ── CONTEXTUAL CTA: Explore Features ── */}
      <div className="bg-cream py-8 px-5 md:px-8 border-y border-[rgba(47,74,58,0.07)]">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[15px] text-dark-text/65 font-medium text-center sm:text-left">
            Curious about everything else the platform can do?
          </p>
          <Link
            href="/features"
            className="flex-shrink-0 border-2 border-forest-green text-forest-green text-[13px] font-medium px-6 py-2.5 rounded-lg hover:bg-forest-green hover:text-white transition-colors whitespace-nowrap"
          >
            Explore Features
          </Link>
        </div>
      </div>

      {/* ── AI SECTION ── */}
      <section className="bg-white py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Artificial Intelligence</SectionLabel>
          <h2
            className="font-display font-medium text-forest-green leading-[1.08] mb-6"
            style={{ fontSize: 'clamp(34px, 4vw, 50px)' }}
          >
            AI assistance throughout the platform.
          </h2>
          <p className="text-[16px] text-dark-text/65 leading-relaxed mb-6 max-w-2xl">
            AI should help reduce administrative work, not replace educator judgment.
          </p>

          <p className="text-[14px] text-dark-text/50 font-medium mb-4">Future capabilities may include:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              { icon: '📝', title: 'Documentation assistance', desc: 'Help drafting incident reports, daily summaries, and development notes.' },
              { icon: '💬', title: 'Parent communication drafting', desc: 'Suggested responses and updates ready to review before sending.' },
              { icon: '🌱', title: 'Developmental observation support', desc: 'Pattern recognition across milestones to surface meaningful insights.' },
              { icon: '📬', title: 'Enrollment follow-up assistance', desc: 'Timely nudges and draft messages for waitlist families.' },
              { icon: '📊', title: 'Operational insights', desc: 'Surface patterns in attendance, billing, and daily centre data.' },
            ].map(item => (
              <div key={item.title} className="flex items-start gap-3 bg-cream rounded-xl p-4">
                <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                <div>
                  <p className="text-[13px] font-semibold text-dark-text mb-0.5">{item.title}</p>
                  <p className="text-[12px] text-dark-text/55 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[15px] font-semibold text-forest-green mb-7">
            Every suggestion is a starting point. Educators always decide.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-forest-green hover:underline"
          >
            See Pricing Philosophy →
          </Link>
        </div>
      </section>

      {/* ══════════════ PART 4: WHAT WE ARE BUILDING FIRST ══════════════ */}
      <PartLabel number="04 /" title="What we are building first" bg="bg-cream" />

      {/* ── INTERACTIVE PRODUCT TOUR */}
      <section className="bg-cream pb-20 md:pb-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>See It in Action</SectionLabel>
            <h2 className="font-display font-medium text-forest-green leading-[1.08] mb-4" style={{ fontSize: 'clamp(34px, 4vw, 50px)' }}>
              30 seconds to check in a child.<br />2 minutes to send a daily report.
            </h2>
            <p className="text-[16px] text-dark-text/55">
              Experience the platform before booking a call.
            </p>
          </div>
          <ProductTour />
        </div>
      </section>

      {/* ── CONTEXTUAL CTA: How Pricing Works ── */}
      <div className="bg-white py-8 px-5 md:px-8 border-y border-[rgba(47,74,58,0.07)]">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[15px] text-dark-text/65 font-medium text-center sm:text-left">
            Built for Canada means built for your budget, too.
          </p>
          <Link
            href="/pricing"
            className="flex-shrink-0 border-2 border-forest-green text-forest-green text-[13px] font-medium px-6 py-2.5 rounded-lg hover:bg-forest-green hover:text-white transition-colors whitespace-nowrap"
          >
            How Pricing Works
          </Link>
        </div>
      </div>

      {/* ══════════════ PART 5: HELP SHAPE SPROUT & VINE CARE ══════════════ */}
      <PartLabel number="05 /" title="Help shape Sprout & Vine Care" bg="bg-forest-green" dark />

      {/* ── FOUNDER'S LETTER ── */}
      <section className="bg-forest-green pb-20 md:pb-24 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-8">
            A note from the founder
          </p>
          <blockquote className="space-y-5 mb-10">
            <p className="font-display font-medium text-cream leading-relaxed" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
              &ldquo;Sprout &amp; Vine did not start with a business plan. It started when we had our first baby and I began researching what it would take to open a home daycare in Canada. I hit a wall.
            </p>
            <p className="text-[16px] text-cream/70 leading-relaxed">
              Licensing requirements buried in government PDFs. CWELCC funding nearly impossible to navigate. Every piece of information somewhere different, written for people who already knew what they were doing.
            </p>
            <p className="text-[16px] text-cream/70 leading-relaxed">
              The gap is not passion. The gap is information and infrastructure.
            </p>
            <p className="text-[16px] text-cream/70 leading-relaxed">
              We are fixing that. And we are looking for the operators who feel it too.&rdquo;
            </p>
          </blockquote>
          <div className="flex items-center gap-4">
            <div>
              <p className="text-cream font-semibold text-[15px]">Ada</p>
              <p className="text-cream/50 text-[13px]">Co-Founder, Sprout &amp; Vine</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-cream/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <Link href="/about" className="text-[14px] font-medium text-sage-green hover:text-cream transition-colors">
              Read our full story →
            </Link>
            <PhotoAccent
              src="/pexels-pavel-danilyuk-8422126.jpg"
              alt="Educators working with a diverse group of preschool children"
              width={220}
              height={140}
              rotate={-1.5}
              className="hidden sm:block"
            />
          </div>
        </div>
      </section>

      {/* ── FOUNDER STORY CALLOUT */}
      <section className="bg-cream py-16 md:py-20 px-5 md:px-8 text-center">
        <div className="max-w-xl mx-auto">
          <p
            className="font-display font-medium text-forest-green leading-snug mb-6"
            style={{ fontSize: 'clamp(22px, 2.8vw, 30px)' }}
          >
            Built by a team passionate about supporting Canadian childcare operators, educators, and families.
          </p>
          <Link href="/about" className="inline-flex items-center gap-2 text-[14px] font-medium text-forest-green border-2 border-forest-green px-6 py-3 rounded-lg hover:bg-forest-green hover:text-white transition-colors">
            Meet our story →
          </Link>
        </div>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section className="bg-white py-16 md:py-20 px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-sage-green" />
            <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold">
              Community
            </p>
          </div>
          <p
            className="font-display font-medium text-forest-green leading-snug mb-4"
            style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}
          >
            We&rsquo;re inviting founding operators from Ontario, BC, Alberta,<br className="hidden sm:block" /> Manitoba, and Québec to help shape the platform.
          </p>
          <p className="text-[15px] text-dark-text/55 mb-8 leading-relaxed">
            Applications are reviewed in order received.
          </p>
          <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta text-[14px] font-semibold px-6 py-3 rounded-full">
            <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
            Now open for a limited early cohort
          </div>
        </div>
      </section>

      {/* ── OPERATOR QUOTE ── renders only when testimonial.text is populated in lib/testimonial.ts */}
      {testimonial.text && (
        <section className="bg-cream py-16 md:py-20 px-5 md:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <blockquote>
              <p className="font-display font-medium text-forest-green leading-relaxed mb-6" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <footer className="text-[13px] text-dark-text/50">
                <span className="font-semibold text-dark-text">{testimonial.firstName}</span>
                {testimonial.role && <span>, {testimonial.role}</span>}
                {testimonial.province && <span> &middot; {testimonial.province}</span>}
                {testimonial.centreType && <span> &middot; {testimonial.centreType}</span>}
              </footer>
            </blockquote>
          </div>
        </section>
      )}

      {/* ── FOUNDING PROGRAM CTA */}
      <section className="bg-forest-green py-24 md:py-32 px-5 md:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">
            Founding Operators Program
          </p>
          <h2 className="font-display font-medium text-cream leading-[1.08] mb-5" style={{ fontSize: 'clamp(38px, 5vw, 56px)' }}>
            Be among the first<br />to build with us.
          </h2>
          <p className="text-[17px] text-cream/65 leading-relaxed mb-4">
            We're building Sprout &amp; Vine in public, with the operators who will use it. Founding members lock in their pricing, shape the roadmap, and get early access before public launch.
          </p>
          <p className="text-[14px] text-cream/60 mb-10">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
              Now open for a limited early cohort. Applications reviewed in the order they are received.
            </span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/founding"
              className="bg-terracotta text-white text-[14px] font-medium px-8 py-4 rounded-lg hover:bg-[#d4724e] transition-colors"
            >
              Apply to the Founding Program
            </Link>
            <Link
              href="/about"
              className="text-cream text-[14px] font-medium px-8 py-4 rounded-lg border-2 border-cream/40 hover:border-cream/70 transition-colors"
            >
              Our story
            </Link>
          </div>
        </div>
      </section>

      {/* ── EMAIL CAPTURE STRIP ── */}
      <section className="bg-white py-16 md:py-20 px-5 md:px-8 border-t border-[rgba(47,74,58,0.08)]">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.14em] text-sage-green font-semibold mb-3">
            Stay in the loop
          </p>
          <h2
            className="font-display font-medium text-forest-green leading-snug mb-3"
            style={{ fontSize: 'clamp(24px, 3vw, 32px)' }}
          >
            Not ready yet? Get updates as we build.
          </h2>
          <p className="text-[15px] text-dark-text/55 mb-8 leading-relaxed">
            No commitment. We share what we're building, what we're learning, and when we're ready for you.
          </p>
          <div className="max-w-md mx-auto">
            <EmailCapture
              showFirstName
              heading=""
              subheading=""
              buttonText="Get updates"
              source="homepage-strip"
            />
          </div>
        </div>
      </section>
    </>
  )
}
