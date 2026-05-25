import Link from 'next/link'
import ROICalculator from '@/components/roi-calculator'
import ProductTour from '@/components/product-tour'
import PricingCards from '@/components/pricing-cards'
import DashboardPreview from '@/components/dashboard-preview'

/* ─── Data ───────────────────────────────────────────────────────── */

const trustLogos = [
  { name: 'Bright Beginnings', icon: '🌅' },
  { name: 'Little Oaks Learning', icon: '🌳' },
  { name: 'Happy Heart Childcare', icon: '💚' },
  { name: 'Discovery Playhouse', icon: '🔍' },
  { name: 'Sunshine Academy', icon: '☀️' },
]

const features = [
  {
    name: 'Family Connection',
    desc: 'Keep parents informed and engaged with real-time updates.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#2F4A3A" strokeWidth="1.5" strokeLinecap="round">
        <path d="M16 11c1.657 0 3-1.343 3-3S17.657 5 16 5M8 11c-1.657 0-3-1.343-3-3S6.343 5 8 5m8 6c0 2.21-3.582 4-8 4S0 13.21 0 11m16 0H8" />
        <circle cx="16" cy="8" r="3" />
        <circle cx="8" cy="8" r="3" />
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
    desc: 'From first inquiry to first day — digitally managed.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#2F4A3A" strokeWidth="1.5" strokeLinecap="round">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        <path d="M12 12h.01M12 16h.01M8 12h.01M8 16h.01" />
      </svg>
    ),
  },
]

const testimonials = [
  {
    quote: 'Managing billing used to eat up my entire Monday morning. Now it\'s done before I finish my coffee. Our bookkeeping is cleaner than ever.',
    name: 'Sarah M.',
    role: 'Director, Toronto Child Care Centre',
  },
  {
    quote: 'Parents love seeing photos and updates throughout the day. It\'s like giving them a window into our program. Enrollment went up because of it.',
    name: 'Jennifer P.',
    role: 'Family Child Care Home Operator, Montréal',
  },
  {
    quote: 'One dashboard, one billing view, one place to see my whole business. Managing 3 locations used to mean 3 different systems. I can\'t go back.',
    name: 'Marcus T.',
    role: 'Multi-Location Owner, Ottawa',
  },
]

/* ─── Section label component ────────────────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">
      {children}
    </p>
  )
}

/* ─── Phone shell component ──────────────────────────────────────── */
function PhoneShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto" style={{ width: '220px' }}>
      <div className="rounded-[36px] p-2.5" style={{ background: '#1a1a1a', boxShadow: '0 32px 80px rgba(0,0,0,0.35)' }}>
        <div className="rounded-[28px] overflow-hidden bg-white" style={{ minHeight: '420px' }}>
          {/* Notch */}
          <div className="flex justify-center pt-2 pb-1">
            <div className="w-16 h-1.5 rounded-full bg-[#1a1a1a]/10" />
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

/* ─── Homepage ───────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      {/* ── SECTION 1: HERO ─────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-5 md:px-8 bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Text — renders 2nd on mobile (photo is first) */}
          <div className="order-2 lg:order-1">
            <SectionLabel>Growing connections. Nurturing futures.</SectionLabel>

            <h1
              className="font-display font-medium text-forest-green leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(42px, 5.5vw, 68px)' }}
            >
              Every child rooted.<br />
              Every center{' '}
              <em className="text-terracotta not-italic">growing.</em>
            </h1>

            <p className="text-[17px] text-dark-text/65 mb-9 max-w-[440px] leading-relaxed">
              Attendance, billing, parent communication, staffing, and Smart Pickup Authorization — all in one calm operational platform.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-9">
              <Link
                href="/contact"
                className="bg-forest-green text-white text-[14px] font-medium px-6 py-3.5 rounded-lg hover:bg-[#243d2f] transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                href="/features"
                className="flex items-center gap-2 text-[14px] font-medium text-dark-text/75 border border-[rgba(47,74,58,0.22)] px-6 py-3.5 rounded-lg hover:border-[rgba(47,74,58,0.45)] transition-colors"
              >
                <span className="text-[11px]">▶</span> Explore the Platform
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex">
                {['SP', 'MJ', 'AK', 'LT'].map((initials, i) => (
                  <div
                    key={initials}
                    className="w-8 h-8 rounded-full bg-forest-green border-2 border-cream flex items-center justify-center text-[9px] text-cream font-bold"
                    style={{ marginLeft: i > 0 ? '-8px' : 0, zIndex: 4 - i }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div className="text-amber-400 text-sm tracking-wider">★★★★★</div>
              <span className="text-[13px] text-dark-text/55">Loved by 1,000+ centers</span>
            </div>
          </div>

          {/* Photo + floating card — renders 1st on mobile */}
          <div className="order-1 lg:order-2 relative">
            <div
              className="aspect-[4/3] rounded-3xl overflow-hidden relative"
              style={{ boxShadow: '0 24px 72px rgba(47,74,58,0.2)' }}
            >
              {/* Warm placeholder until hero-photo.jpg is supplied */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, #5a8c6e 0%, #4a7a5c 35%, #3a6852 65%, #2F4A3A 100%)',
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{ background: 'radial-gradient(ellipse at 30% 35%, rgba(174,193,176,0.35) 0%, transparent 55%)' }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="text-5xl opacity-60">🌿</div>
                  <p className="text-cream/25 text-[12px] font-medium">hero-photo.jpg</p>
                </div>
              </div>

              {/* Vine decoration — top-left */}
              <svg className="absolute top-0 left-0 w-20 h-44 pointer-events-none" viewBox="0 0 64 176" fill="none">
                <path d="M 20 4 C 22 20 12 36 18 54 C 24 72 36 78 30 102 C 24 126 10 132 16 158" stroke="#2F4A3A" strokeWidth="1.8" strokeLinecap="round" opacity="0.65" />
                <ellipse cx="26" cy="60" rx="7" ry="11" fill="#AEC1B0" transform="rotate(-20 26 60)" opacity="0.7" />
                <ellipse cx="18" cy="105" rx="6" ry="10" fill="#AEC1B0" transform="rotate(24 18 105)" opacity="0.6" />
                <ellipse cx="22" cy="142" rx="5" ry="8" fill="#AEC1B0" transform="rotate(-14 22 142)" opacity="0.5" />
              </svg>
            </div>

            {/* Floating notification card */}
            <div
              className="animate-float absolute -bottom-4 right-2 md:right-6 bg-white rounded-2xl flex items-center gap-3 z-10"
              style={{
                padding: '12px 16px',
                boxShadow: '0 12px 40px rgba(47,74,58,0.18)',
                maxWidth: '260px',
              }}
            >
              <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-lg" style={{ background: 'rgba(110,183,111,0.12)' }}>
                🌱
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[12px] font-semibold text-dark-text leading-snug">Mila reached a new milestone!</p>
                <p className="text-[11px] text-dark-text/45 mt-0.5">Language · 2m ago</p>
              </div>
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs" style={{ background: 'rgba(226,132,95,0.12)' }}>
                🌟
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: TRUST BAR ────────────────────────────────── */}
      <section className="bg-white border-y border-[rgba(47,74,58,0.08)] py-8 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-[11px] uppercase tracking-[0.14em] text-dark-text/35 font-medium mb-7">
            Trusted by childcare centers across North America
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {trustLogos.map(logo => (
              <div
                key={logo.name}
                className="flex items-center gap-2 transition-opacity duration-200"
                style={{ filter: 'grayscale(100%)', opacity: 0.38 }}
              >
                <span className="text-lg">{logo.icon}</span>
                <span className="text-[13px] font-semibold text-dark-text">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THREE JOURNEYS ───────────────────────────── */}
      <section className="bg-cream py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel>Three Journeys</SectionLabel>
            <h2 className="font-display font-medium text-forest-green leading-[1.1]" style={{ fontSize: 'clamp(36px, 4.5vw, 52px)' }}>
              One platform. Three stages of growth.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Seeds */}
            <div className="bg-white rounded-2xl p-7 border border-[rgba(47,74,58,0.08)]" style={{ boxShadow: '0 4px 20px rgba(47,74,58,0.06)' }}>
              <div className="text-2xl mb-4">🌱</div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-display text-[26px] font-medium text-forest-green">Seeds</h3>
                <span className="text-[10px] font-semibold text-dark-text/40 border border-[rgba(47,74,58,0.15)] px-2 py-0.5 rounded-full">Free Forever</span>
              </div>
              <p className="text-[13px] font-medium text-dark-text/50 mb-4">For aspiring childcare operators</p>
              <p className="text-[14px] text-dark-text/65 leading-relaxed mb-6">
                Planning your center? Build your business plan, complete your provincial licensing checklist, and get everything ready — at no cost.
              </p>
              <Link href="/pricing" className="text-[14px] font-medium text-forest-green hover:underline">Start planning →</Link>
            </div>

            {/* Sprout — featured */}
            <div
              className="bg-white rounded-2xl p-7 relative"
              style={{ border: '2px solid #2F4A3A', boxShadow: '0 12px 40px rgba(47,74,58,0.14)' }}
            >
              <div className="absolute -top-3 left-7">
                <span className="bg-forest-green text-cream text-[11px] font-semibold px-4 py-1 rounded-full">Most Popular</span>
              </div>
              <div className="text-2xl mb-4">🌿</div>
              <div className="flex items-baseline gap-2 mb-1">
                <h3 className="font-display text-[26px] font-medium text-forest-green">Sprout</h3>
                <span className="font-display text-[18px] text-dark-text/40">$69<span className="text-[12px] font-sans">/mo</span></span>
              </div>
              <p className="text-[13px] font-medium text-dark-text/50 mb-4">For growing centers & home providers</p>
              <p className="text-[14px] text-dark-text/65 leading-relaxed mb-6">
                You're open. Now run daily operations beautifully — attendance, billing, parent communication, and Smart Pickup, all in one place.
              </p>
              <Link href="/contact" className="text-[14px] font-medium text-forest-green hover:underline">Start free trial →</Link>
            </div>

            {/* Vine */}
            <div className="bg-white rounded-2xl p-7 border border-[rgba(47,74,58,0.08)]" style={{ boxShadow: '0 4px 20px rgba(47,74,58,0.06)' }}>
              <div className="text-2xl mb-4">🍃</div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-display text-[26px] font-medium text-forest-green">Vine</h3>
                <span className="text-[10px] font-semibold text-dark-text/40 border border-[rgba(47,74,58,0.15)] px-2 py-0.5 rounded-full">Multi-location</span>
              </div>
              <p className="text-[13px] font-medium text-dark-text/50 mb-4">For scaling multi-location organizations</p>
              <p className="text-[14px] text-dark-text/65 leading-relaxed mb-6">
                Multiple locations, one calm dashboard. Oversee everything, report across centers, and scale without the chaos.
              </p>
              <Link href="/contact" className="text-[14px] font-medium text-forest-green hover:underline">Book a demo →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: FEATURES GRID ────────────────────────────── */}
      <section className="bg-white py-20 md:py-24 px-5 md:px-8">
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

          {/* Bottom row — centered 3 */}
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

      {/* ── SECTION 5: SMART PICKUP SPOTLIGHT ───────────────────── */}
      <section className="bg-forest-green py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">Parent Safety</p>
            <h2 className="font-display font-medium text-cream leading-[1.08] mb-6" style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}>
              Peace of mind,<br />every single pickup.
            </h2>
            <p className="text-[16px] text-cream/65 leading-relaxed mb-8 max-w-lg">
              Most apps tell parents their child was picked up. Sprout &amp; Vine tells them <em>who</em> picked up their child, shows a photo, and sends an instant notification — before they've left the parking lot.
            </p>
            <ul className="space-y-4">
              {[
                { icon: '🔒', text: 'Photo-verified authorized pickup list' },
                { icon: '📱', text: 'Instant notification — name, photo, and timestamp' },
                { icon: '🚗', text: 'Real-time pickup ETA from parents and guardians' },
              ].map(item => (
                <li key={item.text} className="flex items-start gap-3 text-[15px] text-cream/80">
                  <span className="text-lg flex-shrink-0 leading-none mt-0.5">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Phone mockup */}
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

      {/* ── SECTION 6: ENROLLMENT & WAITLIST ────────────────────── */}
      <section className="bg-cream py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Flow diagram */}
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

          {/* Text */}
          <div>
            <SectionLabel>Enrollment Made Simple</SectionLabel>
            <h2 className="font-display font-medium text-forest-green leading-[1.08] mb-6" style={{ fontSize: 'clamp(34px, 4vw, 50px)' }}>
              From first inquiry to<br />first day — beautifully managed.
            </h2>
            <p className="text-[16px] text-dark-text/65 leading-relaxed mb-8">
              Canadian centers carry waitlists of 2–3 years. Sprout &amp; Vine manages the entire journey: inquiry forms, waitlist positions, enrollment packages, e-signature, and subsidy paperwork pre-filled from your CWELCC data. No spreadsheets. No paper. No stress.
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

      {/* ── SECTION 7: VINE PARENT APP ──────────────────────────── */}
      <section className="bg-white py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Phone mockup */}
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

          {/* Text */}
          <div className="order-1 lg:order-2">
            <SectionLabel>The Vine Parent App</SectionLabel>
            <h2 className="font-display font-medium text-forest-green leading-[1.08] mb-5" style={{ fontSize: 'clamp(34px, 4vw, 50px)' }}>
              Parents aren't just notified —<br />they're connected.
            </h2>
            <p className="text-[16px] text-dark-text/65 leading-relaxed mb-8">
              Most apps give parents a push notification. Vine gives them a window into their child's world. That trust is your most powerful enrollment tool.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: '👨‍👩‍👧',
                  title: 'Family Circle',
                  badge: 'Standout feature',
                  desc: 'Mom, Dad, grandparents, step-parents, and nannies — each with role-based access. Co-parents in separate households both stay fully in the loop.',
                },
                {
                  icon: '🔒',
                  title: 'Smart Pickup Authorization',
                  desc: 'Photo-verified authorized pickup list. Parents get notified the moment their child is signed out, and by whom.',
                },
                {
                  icon: '🌱',
                  title: 'Milestone & Development Timeline',
                  desc: 'Teachers tag everyday moments — first scissors, first friend, first full sentence. They auto-build a keepsake development story parents will treasure.',
                },
                {
                  icon: '📖',
                  title: 'Auto-Generated Yearbook',
                  badge: 'Coming soon',
                  desc: 'Every photo and milestone compiles into a beautiful printable keepsake at year end.',
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
                          style={{
                            background: item.badge === 'Coming soon' ? 'rgba(226,132,95,0.1)' : 'rgba(110,183,111,0.12)',
                            color: item.badge === 'Coming soon' ? '#E2845F' : '#6EB76F',
                          }}
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
          </div>
        </div>
      </section>

      {/* ── SECTION 8: EDUCATOR SECTION ─────────────────────────── */}
      <section className="py-20 md:py-24 px-5 md:px-8" style={{ background: 'rgba(174,193,176,0.15)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel>For Educators</SectionLabel>
          <h2 className="font-display font-medium text-forest-green leading-[1.08] mb-5" style={{ fontSize: 'clamp(34px, 4vw, 50px)' }}>
            Built for the people<br />who show up every day.
          </h2>
          <p className="text-[16px] text-dark-text/65 leading-relaxed mb-10 max-w-2xl mx-auto">
            Directors choose Sprout &amp; Vine. Educators love it. That's not a coincidence — we designed every daily workflow around the people actually using it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
            {[
              { icon: '📋', title: 'Daily reports done in under 2 minutes', desc: 'Tap-to-complete templates. Add a photo. Done before nap time.' },
              { icon: '🌱', title: 'Tag milestones from your phone', desc: 'See something beautiful? Tag it in 10 seconds. It builds their development timeline automatically.' },
              { icon: '💬', title: 'Message parents without your personal number', desc: "All communication through the app. Professional boundaries kept. Parents can't text you at 11pm." },
            ].map(item => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[rgba(47,74,58,0.08)]" style={{ boxShadow: '0 2px 12px rgba(47,74,58,0.06)' }}>
                <span className="text-2xl block mb-3">{item.icon}</span>
                <p className="text-[14px] font-semibold text-dark-text mb-1.5">{item.title}</p>
                <p className="text-[13px] text-dark-text/55 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <Link
            href="/for-educators"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-forest-green border-2 border-forest-green px-7 py-3.5 rounded-lg hover:bg-forest-green hover:text-white transition-colors"
          >
            See the educator experience →
          </Link>
        </div>
      </section>

      {/* ── SECTION 9: DASHBOARD PREVIEW ────────────────────────── */}
      <section className="bg-cream py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[35%_1fr] gap-12 items-center">

          {/* Text */}
          <div>
            <h2 className="font-display font-medium text-forest-green leading-[1.08] mb-5" style={{ fontSize: 'clamp(32px, 3.5vw, 48px)' }}>
              Designed for busy centers.<br />Built for what matters most. 🌿
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
          </div>

          {/* Dashboard mockup */}
          <div className="min-w-0">
            <DashboardPreview />
          </div>
        </div>
      </section>

      {/* ── SECTION 10: CWELCC / CANADA ─────────────────────────── */}
      <section className="bg-white py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Built for Canada</SectionLabel>
          <h2 className="font-display font-medium text-forest-green leading-[1.08] mb-6" style={{ fontSize: 'clamp(34px, 4vw, 50px)' }}>
            The only platform built around<br />CWELCC from the ground up.
          </h2>
          <p className="text-[16px] text-dark-text/65 leading-relaxed mb-12 max-w-2xl">
            Canada's childcare landscape is unlike any other. Sprout &amp; Vine is built specifically for Canadian operators — with CWELCC subsidy tracking, bilingual support (English &amp; French), and provincial compliance built in from day one. No US competitor comes close.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🍁',
                title: 'CWELCC Subsidy Tracking',
                desc: 'Automatically calculate and track Canada-Wide Early Learning & Child Care subsidies. No spreadsheets.',
              },
              {
                icon: '🇫🇷',
                title: 'Fully Bilingual',
                desc: 'English and French throughout the platform and the Vine parent app. A competitive edge no US competitor can match.',
              },
              {
                icon: '📋',
                title: 'Provincial Compliance',
                desc: 'Licensing checklists and ratio tracking for every province, pre-loaded and updated automatically.',
              },
            ].map(item => (
              <div key={item.title}>
                <span className="text-3xl block mb-4">{item.icon}</span>
                <h3 className="text-[16px] font-semibold text-dark-text mb-2">{item.title}</h3>
                <p className="text-[14px] text-dark-text/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 11: INTERACTIVE PRODUCT TOUR ────────────────── */}
      <section className="bg-cream py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>See It in Action</SectionLabel>
            <h2 className="font-display font-medium text-forest-green leading-[1.08] mb-4" style={{ fontSize: 'clamp(34px, 4vw, 50px)' }}>
              30 seconds to check in a child.<br />2 minutes to send a daily report.
            </h2>
            <p className="text-[16px] text-dark-text/55">
              Experience the platform before booking a call. No demo required.
            </p>
          </div>
          <ProductTour />
        </div>
      </section>

      {/* ── SECTION 12: ROI CALCULATOR ──────────────────────────── */}
      <section className="bg-forest-green py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <ROICalculator />
        </div>
      </section>

      {/* ── SECTION 13: TESTIMONIALS ────────────────────────────── */}
      <section className="bg-white py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-medium text-forest-green text-center leading-[1.1] mb-14" style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>
            What Canadian operators are saying
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <div
                key={t.name}
                className="rounded-2xl p-7 flex flex-col gap-5"
                style={{ background: '#F7F2E8', border: '1px solid rgba(47,74,58,0.08)' }}
              >
                <div className="text-amber-400 text-sm tracking-wider">★★★★★</div>
                <p className="text-[15px] text-dark-text/75 leading-relaxed flex-1">
                  "{t.quote}"
                </p>
                <div>
                  <p className="text-[14px] font-semibold text-dark-text">— {t.name}</p>
                  <p className="text-[12px] text-dark-text/45 mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 14: PRICING ─────────────────────────────────── */}
      <section className="bg-cream py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>Simple, Fair Pricing</SectionLabel>
            <h2 className="font-display font-medium text-forest-green leading-[1.08] mb-4" style={{ fontSize: 'clamp(34px, 4vw, 50px)' }}>
              No hidden fees. No per-child charges.<br />Just straightforward pricing.
            </h2>
            <p className="text-[14px] text-dark-text/45 font-medium">All prices in CAD.</p>
          </div>
          <PricingCards />
        </div>
      </section>

      {/* ── SECTION 15: CTA BAND ────────────────────────────────── */}
      <section className="bg-forest-green py-20 md:py-24 px-5 md:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display font-medium text-cream leading-[1.08] mb-5" style={{ fontSize: 'clamp(38px, 5vw, 52px)' }}>
            Ready to simplify<br />your operations?
          </h2>
          <p className="text-[16px] text-cream/60 mb-10">
            Join childcare operators across Canada growing with Sprout &amp; Vine.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-terracotta text-white text-[14px] font-medium px-8 py-4 rounded-lg hover:bg-[#d4724e] transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              href="/contact"
              className="text-cream text-[14px] font-medium px-8 py-4 rounded-lg border-2 border-cream/40 hover:border-cream/70 transition-colors"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
