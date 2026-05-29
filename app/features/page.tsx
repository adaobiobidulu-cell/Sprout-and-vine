import type { Metadata } from 'next'
import Link from 'next/link'
import ProductTour from '@/components/product-tour'
import EmailCapture from '@/components/email-capture'

export const metadata: Metadata = {
  title: 'Features | Sprout & Vine',
  description: 'Attendance tracking, CWELCC grant management, Smart Pickup Authorization, daily reports, family messaging, and billing, all in one Canadian childcare platform.',
}

/* ─── Section label ───────────────────────────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">
      {children}
    </p>
  )
}

/* ─── Bullet item ─────────────────────────────────────────────────── */
function Bullet({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5 text-[15px] text-dark-text/75">
      <span className="text-sage-green font-bold flex-shrink-0 mt-0.5">&#10003;</span>
      <span>{text}</span>
    </li>
  )
}

/* ─── MOCKUP: Attendance Tracking ────────────────────────────────── */
function AttendanceMockup() {
  const children = [
    { initials: 'EJ', name: 'Emma Johnson', status: 'Checked in 8:42 AM', present: true },
    { initials: 'LC', name: 'Lucas Chen', status: 'Not yet arrived', present: false },
    { initials: 'SM', name: 'Sofia Martinez', status: 'Checked in 8:55 AM', present: true },
    { initials: 'MT', name: 'Mila Thompson', status: 'Not yet arrived', present: false },
  ]
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg border border-[rgba(47,74,58,0.1)] overflow-hidden">
      <div className="p-4 border-b border-[rgba(47,74,58,0.08)]">
        <p className="text-[13px] font-semibold text-dark-text mb-2">32 / 40 checked in</p>
        <div className="w-full h-2 bg-[rgba(47,74,58,0.08)] rounded-full overflow-hidden">
          <div className="h-full bg-sage-green rounded-full" style={{ width: '80%' }} />
        </div>
      </div>
      <div className="divide-y divide-[rgba(47,74,58,0.06)]">
        {children.map(c => (
          <div key={c.name} className="flex items-center gap-3 px-4 py-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0"
              style={{ background: c.present ? '#6EB76F' : '#AEC1B0' }}
            >
              {c.initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-semibold text-dark-text leading-none">{c.name}</p>
              <p className="text-[11px] text-dark-text/50 mt-0.5">{c.status}</p>
            </div>
            <div
              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
              style={{ background: c.present ? '#6EB76F' : '#AEC1B0' }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── MOCKUP: Smart Pickup Authorization ─────────────────────────── */
function PickupMockup() {
  return (
    <div className="flex justify-center">
      <div className="w-52 h-96 bg-white rounded-[36px] shadow-2xl border-4 border-[#1C2B22] p-3 flex flex-col overflow-hidden">
        <div className="flex justify-center pt-1 pb-2">
          <div className="w-12 h-1 rounded-full bg-[#1C2B22]/10" />
        </div>
        <div className="rounded-2xl overflow-hidden flex-1 flex flex-col" style={{ background: '#F7F2E8' }}>
          {/* Header */}
          <div className="bg-sage-green px-3 py-2.5">
            <p className="text-white text-[12px] font-bold leading-tight">Sophie checked out</p>
            <p className="text-white/75 text-[10px]">By Grandma Rose · 3:14 PM</p>
          </div>
          {/* Body */}
          <div className="flex-1 p-3 flex flex-col gap-2.5">
            {/* Avatar */}
            <div className="flex justify-center">
              <div className="w-12 h-12 rounded-full bg-light-sage/40 flex items-center justify-center text-2xl">
                👵
              </div>
            </div>
            {/* Verified badge */}
            <div className="flex items-center justify-center gap-1.5 py-1.5 rounded-lg" style={{ background: 'rgba(110,183,111,0.12)' }}>
              <span className="text-sage-green text-[11px] font-bold">&#10003;</span>
              <span className="text-sage-green text-[11px] font-semibold">Photo verified</span>
            </div>
            {/* ID */}
            <div className="rounded-lg border border-[rgba(47,74,58,0.12)] px-2.5 py-2 bg-white">
              <p className="text-[10px] text-dark-text/40 mb-0.5">Authorized person</p>
              <p className="text-[12px] font-semibold text-dark-text">Rose Mitchell</p>
              <p className="text-[10px] text-dark-text/50">Grandmother</p>
            </div>
            {/* Footer */}
            <div className="mt-auto text-center">
              <p className="text-[10px] text-dark-text/45">Notification sent to 2 parents</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── MOCKUP: Enrollment & Waitlist ──────────────────────────────── */
function EnrollmentMockup() {
  const rows = [
    { name: 'Aisha Okafor', age: '18 mo', date: 'Jan 12, 2024', status: 'Waitlisted', statusBg: 'bg-light-sage', statusText: 'text-forest-green' },
    { name: 'Luca Bertrand', age: '2 yr', date: 'Mar 3, 2024', status: 'Enrolled', statusBg: 'bg-sage-green', statusText: 'text-white' },
    { name: 'Noah Kim', age: '3 yr', date: 'Apr 17, 2024', status: 'Pending docs', statusBg: '', statusText: 'text-terracotta', statusStyle: { background: 'rgba(226,132,95,0.12)' } },
  ]
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg border border-[rgba(47,74,58,0.1)] overflow-hidden">
      <div className="px-4 py-3 border-b border-[rgba(47,74,58,0.08)]">
        <p className="text-[13px] font-semibold text-dark-text">Waitlist &middot; 47 families</p>
      </div>
      <div className="divide-y divide-[rgba(47,74,58,0.06)]">
        {rows.map(r => (
          <div key={r.name} className="flex items-center gap-2 px-4 py-3">
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-semibold text-dark-text">{r.name}</p>
              <p className="text-[11px] text-dark-text/45">{r.age} &middot; Added {r.date}</p>
            </div>
            <span
              className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${r.statusBg} ${r.statusText}`}
              style={r.statusStyle}
            >
              {r.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── MOCKUP: Daily Reports ──────────────────────────────────────── */
function DailyReportMockup() {
  const rows = [
    { icon: '🍎', label: 'Lunch', value: 'Ate well' },
    { icon: '😴', label: 'Nap', value: '1h 20m' },
    { icon: '🎨', label: 'Activity', value: 'Watercolour painting' },
  ]
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg border border-[rgba(47,74,58,0.1)] overflow-hidden">
      {/* Header */}
      <div className="bg-forest-green px-4 py-3">
        <p className="text-cream text-[13px] font-semibold">Emma&apos;s Daily Report &middot; Today</p>
      </div>
      {/* Rows */}
      <div className="divide-y divide-[rgba(47,74,58,0.06)]">
        {rows.map(r => (
          <div key={r.label} className="flex items-center gap-3 px-4 py-3">
            <span className="text-xl flex-shrink-0">{r.icon}</span>
            <div className="flex-1">
              <p className="text-[11px] text-dark-text/45 uppercase tracking-wide">{r.label}</p>
              <p className="text-[13px] font-semibold text-dark-text">{r.value}</p>
            </div>
          </div>
        ))}
      </div>
      {/* CTA */}
      <div className="px-4 py-3">
        <button className="w-full bg-sage-green text-white text-[13px] font-semibold py-2.5 rounded-xl">
          Send to family
        </button>
      </div>
    </div>
  )
}

/* ─── MOCKUP: Child Development ──────────────────────────────────── */
function DevelopmentMockup() {
  const milestones = [
    { border: '#2F4A3A', date: 'May 14', text: 'First use of scissors 🌱', tag: 'Fine Motor' },
    { border: '#6EB76F', date: 'May 20', text: 'Said a full sentence 💬', tag: 'Language' },
    { border: '#E2845F', date: 'May 23', text: 'Drew a recognizable shape 🎨', tag: 'Creative' },
  ]
  return (
    <div className="max-w-sm mx-auto space-y-3">
      {milestones.map(m => (
        <div
          key={m.text}
          className="bg-white rounded-xl shadow-sm border border-[rgba(47,74,58,0.08)] pl-4 pr-4 py-3 flex items-start gap-3"
          style={{ borderLeft: `4px solid ${m.border}` }}
        >
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-semibold text-dark-text/40 mb-0.5 uppercase tracking-wide">{m.date}</p>
            <p className="text-[13px] font-semibold text-dark-text leading-snug">{m.text}</p>
          </div>
          <span
            className="text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5"
            style={{ background: 'rgba(174,193,176,0.3)', color: '#2F4A3A' }}
          >
            {m.tag}
          </span>
        </div>
      ))}
    </div>
  )
}

/* ─── MOCKUP: Billing ────────────────────────────────────────────── */
function BillingMockup() {
  const rows = [
    { label: 'Families billed', value: '38' },
    { label: 'Subsidies applied', value: '$3,200' },
    { label: 'Outstanding', value: '$425' },
  ]
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg border border-[rgba(47,74,58,0.1)] overflow-hidden">
      <div className="px-4 py-3 border-b border-[rgba(47,74,58,0.08)]">
        <p className="text-[13px] font-semibold text-dark-text">May 2025 &middot; $8,650 collected</p>
      </div>
      <div className="divide-y divide-[rgba(47,74,58,0.06)]">
        {rows.map(r => (
          <div key={r.label} className="flex justify-between items-center px-4 py-3">
            <p className="text-[13px] text-dark-text/65">{r.label}</p>
            <p className="text-[13px] font-semibold text-dark-text">{r.value}</p>
          </div>
        ))}
      </div>
      {/* Progress bar */}
      <div className="px-4 py-3">
        <div className="flex justify-between text-[11px] text-dark-text/45 mb-1.5">
          <span>95% collected</span>
          <span>$8,650 / $9,075</span>
        </div>
        <div className="w-full h-2 rounded-full bg-[rgba(47,74,58,0.08)] overflow-hidden">
          <div className="h-full bg-sage-green rounded-full" style={{ width: '95%' }} />
        </div>
      </div>
    </div>
  )
}

/* ─── MOCKUP: Vine Parent App ────────────────────────────────────── */
function VineAppMockup() {
  const feed = [
    { dot: '#AEC1B0', icon: '📷', text: 'Emma working on her painting', time: '10:24 AM' },
    { dot: '#6EB76F', icon: '🌱', text: 'Milestone: First scissors!', time: '10:31 AM' },
    { dot: '#2F4A3A', icon: '📋', text: "Daily report from Olivia is ready · Tap to read", time: '12:03 PM' },
  ]
  return (
    <div className="flex justify-center">
      <div className="w-52 h-96 bg-white rounded-[36px] shadow-2xl border-4 border-[#1C2B22] p-3 flex flex-col overflow-hidden">
        <div className="flex justify-center pt-1 pb-2">
          <div className="w-12 h-1 rounded-full bg-[#1C2B22]/10" />
        </div>
        <div className="rounded-2xl overflow-hidden flex-1 flex flex-col" style={{ background: '#F7F2E8' }}>
          <div className="bg-forest-green px-3 py-2">
            <p className="text-cream text-[11px] font-semibold text-center">Activity Feed</p>
          </div>
          <div className="flex-1 p-2 space-y-2 overflow-hidden">
            {feed.map(item => (
              <div
                key={item.text}
                className="flex items-start gap-2 px-2 py-2 rounded-xl"
                style={{ background: '#F7F2E8', borderLeft: `3px solid ${item.dot}` }}
              >
                <span className="text-base flex-shrink-0 leading-none mt-0.5">{item.icon}</span>
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold text-dark-text leading-snug">{item.text}</p>
                  <p className="text-[9px] text-dark-text/40 mt-0.5">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Feature section data ────────────────────────────────────────── */

const sections = [
  {
    label: 'ATTENDANCE',
    h2: 'Real-time attendance that keeps you in compliance.',
    body: 'Track every check-in and check-out instantly. Know your ratios before an inspector does. Never wonder who\'s in the building.',
    bullets: [
      'QR code or manual check-in',
      'Staff:child ratio badge updates live',
      'Exportable attendance records for licensing',
    ],
    mockup: <AttendanceMockup />,
    textLeft: true,
  },
  {
    label: 'PARENT SAFETY',
    h2: 'Peace of mind, every single pickup.',
    body: 'Know exactly who picked up every child. Photo-verified authorization, instant parent notifications, and a full pickup log.',
    bullets: [
      'Photo ID for every authorized person',
      'Instant notification to all family members',
      'Tamper-proof digital pickup log',
    ],
    mockup: <PickupMockup />,
    textLeft: false,
  },
  {
    label: 'ENROLLMENT',
    h2: 'From first inquiry to first day, beautifully managed.',
    body: 'Canadian centers carry waitlists of 2 to 3 years. Manage the entire journey digitally: inquiry, waitlist, enrollment, e-signature, and subsidy paperwork.',
    bullets: [
      'Online inquiry with instant waitlist placement',
      'Digital enrollment packages with e-signature',
      'Subsidy pre-filled from CWELCC data',
    ],
    mockup: <EnrollmentMockup />,
    textLeft: true,
  },
  {
    label: 'DAILY REPORTS',
    h2: 'Beautiful reports in minutes. Not hours.',
    body: 'Tap-to-complete templates, photo attachment, mood selector, and one-tap delivery to every family member. Done before nap time.',
    bullets: [
      'Templates for meals, naps, activities, and mood',
      'Photo attachment in one tap',
      'Delivered to every family member automatically',
    ],
    mockup: <DailyReportMockup />,
    textLeft: false,
  },
  {
    label: 'DEVELOPMENT',
    h2: 'Every milestone. Every memory. Captured.',
    body: 'Tag developmental milestones from your phone in seconds. They auto-build into a timeline that families treasure and licensing bodies accept.',
    bullets: [
      'Tap to tag: language, motor, social, creative',
      'Auto-builds a development portfolio',
      'Exportable for licensing and transitions',
    ],
    mockup: <DevelopmentMockup />,
    textLeft: true,
  },
  {
    label: 'BILLING',
    h2: 'Get paid on time. Every time.',
    body: 'Automated invoicing, CWELCC subsidy tracking, and payment reconciliation. Stop chasing payments and start growing your centre.',
    bullets: [
      'Automated monthly invoicing per family',
      'CWELCC subsidy auto-deducted from parent balances',
      'Real-time payment dashboard',
    ],
    mockup: <BillingMockup />,
    textLeft: false,
  },
  {
    label: 'THE VINE APP',
    h2: 'Parents are not just notified. They are connected.',
    body: "Give families a window into their child's day. Activity feed, milestone tags, daily reports, pickup alerts, and messaging. All in one beautiful app.",
    bullets: [
      'Real-time activity feed with photos',
      'Family Circle: role-based access for grandparents and co-parents',
      'In-app messaging without personal numbers',
    ],
    mockup: <VineAppMockup />,
    textLeft: true,
    appBadges: true,
  },
]

/* ─── Page ────────────────────────────────────────────────────────── */

export default function FeaturesPage() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="bg-cream py-20 px-5 md:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>Everything Your Centre Needs</SectionLabel>
          <h1
            className="font-display font-medium text-forest-green leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(44px, 6vw, 72px)' }}
          >
            Every feature your center needs. Nothing you don&apos;t.
          </h1>
          <p className="text-[17px] text-dark-text/65 mb-9 leading-relaxed">
            One platform built for Canadian childcare.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-forest-green text-white text-[14px] font-medium px-7 py-3.5 rounded-lg hover:bg-[#243d2f] transition-colors"
            >
              Start free trial
            </Link>
            <Link
              href="/pricing"
              className="text-forest-green text-[14px] font-medium px-7 py-3.5 rounded-lg border-2 border-forest-green hover:bg-forest-green hover:text-white transition-colors"
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ── PRODUCT TOUR ──────────────────────────────────────── */}
      <section className="bg-white py-20 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <ProductTour />
        </div>
      </section>

      {/* ── FEATURE SECTIONS ──────────────────────────────────── */}
      {sections.map((section, i) => {
        const isOdd = i % 2 === 0
        const textCol = (
          <div>
            <SectionLabel>{section.label}</SectionLabel>
            <h2
              className="font-display font-medium text-forest-green leading-[1.08] mb-5"
              style={{ fontSize: 'clamp(30px, 3.5vw, 44px)' }}
            >
              {section.h2}
            </h2>
            <p className="text-[16px] text-dark-text/65 leading-relaxed mb-7">
              {section.body}
            </p>
            <ul className="space-y-3">
              {section.bullets.map(b => (
                <Bullet key={b} text={b} />
              ))}
            </ul>
            {(section as { appBadges?: boolean }).appBadges && (
              <div className="mt-7 pt-6 border-t border-[rgba(47,74,58,0.1)]">
                <p className="text-[12px] text-dark-text/40 mb-3">Available on iOS and Android. Built with full feature parity, no Android tax.</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/founding"
                    className="inline-flex items-center gap-2.5 bg-dark-text text-white px-4 py-2.5 rounded-lg hover:bg-[#1a1a1a] transition-colors"
                    style={{ minWidth: '140px' }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div>
                      <p className="text-[9px] leading-none text-white/70">Download on the</p>
                      <p className="text-[13px] font-semibold leading-tight">App Store</p>
                    </div>
                  </a>
                  <a
                    href="/founding"
                    className="inline-flex items-center gap-2.5 bg-dark-text text-white px-4 py-2.5 rounded-lg hover:bg-[#1a1a1a] transition-colors"
                    style={{ minWidth: '140px' }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
                      <path d="M3.18 23.76c.3.17.64.22.99.16l12.87-7.43-2.82-2.82-11.04 10.09zm-1.65-20.4A1.99 1.99 0 001 4.96v14.08c0 .65.28 1.24.72 1.64l.09.08 7.89-7.89v-.19L1.53 4.8l-.01-.01v-.01zm19.65 7.47l-2.76-1.6-3.14 3.14 3.14 3.13 2.79-1.61c.79-.46.79-1.21-.03-1.66zM4.17.24L17.04 7.68l-2.82 2.82L1.35.41c.35-.06.71 0 1.01.17l1.81 1.07V.24z"/>
                    </svg>
                    <div>
                      <p className="text-[9px] leading-none text-white/70">Get it on</p>
                      <p className="text-[13px] font-semibold leading-tight">Google Play</p>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>
        )
        const mockupCol = (
          <div className="flex items-center justify-center">
            {section.mockup}
          </div>
        )

        return (
          <section
            key={section.label}
            className={`py-20 px-5 md:px-8 ${isOdd ? 'bg-white' : 'bg-cream'}`}
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                {section.textLeft ? (
                  <>
                    <div>{textCol}</div>
                    {mockupCol}
                  </>
                ) : (
                  <>
                    <div className="order-2 lg:order-1">{mockupCol}</div>
                    <div className="order-1 lg:order-2">{textCol}</div>
                  </>
                )}
              </div>
            </div>
          </section>
        )
      })}

      {/* ── SCHEDULING & PAYROLL ─────────────────────────────── */}
      <section className="bg-white py-20 px-5 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>Scheduling &amp; Payroll</SectionLabel>
            <h2
              className="font-display font-medium text-forest-green leading-[1.08] mb-5"
              style={{ fontSize: 'clamp(30px, 3.5vw, 48px)' }}
            >
              Scheduling that protects your licence.<br />Payroll that respects your time.
            </h2>
            <div className="text-[16px] text-dark-text/65 leading-relaxed max-w-2xl mx-auto space-y-4">
              <p>
                Every shift at your centre is connected to your ratio requirements. The moment a room is at risk of falling below the legal minimum, you know. Before a child arrives. Before an inspector does.
              </p>
              <p>
                Educators log in and see their schedule. They clock in, clock out, and know exactly which children they are responsible for that day. Directors see everything: who is scheduled, who has arrived, and which rooms are covered. In real time.
              </p>
              <p>
                When payday comes, hours flow directly to Wagepoint. No spreadsheets. No double entry. No Sunday night data transfers. For RECE staff, the CWELCC wage enhancement is tracked automatically. When your CMSM asks for documentation, it is already there.
              </p>
              <p>
                And for families: book a tour before you enroll. Book a check-in with your child's educator from the parent app. No phone tag. No waiting for a callback. Just a time that works.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: '📅', title: 'Shift scheduling by room', tier: 'Sprout Starter+' },
              { icon: '📊', title: 'Live ratio monitoring', tier: 'Sprout Starter+' },
              { icon: '⏱️', title: 'Educator clock in / clock out', tier: 'All paid tiers' },
              { icon: '🖥️', title: 'Director real-time dashboard', tier: 'Sprout Starter+' },
              { icon: '📆', title: 'Parent appointment booking', tier: 'Sprout Starter+' },
              { icon: '🚪', title: 'Tour booking for prospective families', tier: 'All paid tiers' },
              { icon: '💰', title: 'CWELCC wage enhancement tracker', tier: 'Sprout Starter+' },
              { icon: '🔗', title: 'Wagepoint payroll integration', tier: 'Sprout Grow+' },
              { icon: '📋', title: 'Inspection-ready ratio reports', tier: 'Sprout Starter+' },
            ].map(item => (
              <div
                key={item.title}
                className="bg-cream rounded-xl p-5 border border-[rgba(47,74,58,0.08)]"
                style={{ boxShadow: '0 2px 10px rgba(47,74,58,0.05)' }}
              >
                <span className="text-2xl block mb-3">{item.icon}</span>
                <p className="text-[14px] font-semibold text-dark-text mb-1">{item.title}</p>
                <p className="text-[11px] text-dark-text/40 font-medium">{item.tier}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI FEATURES ───────────────────────────────────────── */}
      <section className="bg-cream py-20 px-5 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>AI Built for Canada</SectionLabel>
            <h2
              className="font-display font-medium text-forest-green leading-[1.08] mb-5"
              style={{ fontSize: 'clamp(30px, 3.5vw, 48px)' }}
            >
              Built for Canada. Every feature,<br />every regulation, every family.
            </h2>
            <p className="text-[16px] text-dark-text/65 leading-relaxed max-w-2xl mx-auto">
              Every AI feature is built around Canadian childcare: CWELCC requirements, Ontario ratios, BC CCFRI, and the CPE system in Quebec. This is the depth no US competitor can replicate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                icon: '📝',
                title: 'AI Daily Report Writer',
                tier: 'Sprout Starter+',
                desc: 'Educator enters two or three brief observations. AI drafts a complete, warm, parent-facing daily report in seconds. Read, edit if needed, send with one tap.',
              },
              {
                icon: '🍁',
                title: 'CWELCC Compliance Assistant',
                tier: 'Sprout Starter+',
                desc: 'Ask compliance questions in plain language and receive accurate, province-specific answers instantly. What is my wage enhancement obligation? What does my Program Advisor need to see? Answered in seconds.',
              },
              {
                icon: '⚠️',
                title: 'AI Incident Report Helper',
                tier: 'Sprout Starter+',
                desc: 'Guided, structured incident documentation. AI drafts the formal report from staff observations. Reduces the risk of incomplete records that create licensing exposure.',
              },
              {
                icon: '📆',
                title: 'AI Schedule Builder',
                tier: 'Sprout Grow+',
                desc: 'Build a weekly schedule that satisfies every ratio requirement across every room. AI optimises shift patterns, flags gaps before they happen, and adjusts automatically when staff availability changes.',
              },
              {
                icon: '✅',
                title: 'AI Licensing Readiness Checker',
                tier: 'Seeds and above',
                desc: 'Aspiring operators answer guided questions about their space, qualifications, and preparation. AI generates a readiness score and a prioritised action list specific to their province.',
              },
              {
                icon: '📬',
                title: 'AI Parent Newsletter Writer',
                tier: 'Sprout Starter+',
                desc: 'Enter this month\'s key topics and events in bullet points. AI drafts a warm, professional monthly newsletter. Review, edit, and send to all enrolled families.',
              },
              {
                icon: '🌐',
                title: 'Multi-Language Parent Communication',
                tier: 'Sprout Home+',
                desc: 'Parents select their preferred language during onboarding. Daily reports, newsletters, and messages arrive automatically in English, French, Mandarin, Tagalog, Spanish, Punjabi, or Arabic.',
              },
            ].map(item => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-[rgba(47,74,58,0.08)]"
                style={{ boxShadow: '0 4px 20px rgba(47,74,58,0.07)' }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: 'rgba(47,74,58,0.06)' }}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="font-display text-[18px] font-medium text-forest-green">{item.title}</h3>
                      <span
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
                        style={{ background: 'rgba(110,183,111,0.12)', color: '#6EB76F' }}
                      >
                        {item.tier}
                      </span>
                    </div>
                    <p className="text-[13px] text-dark-text/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTEGRATIONS ──────────────────────────────────────── */}
      <section className="bg-cream py-16 md:py-20 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Integrations</SectionLabel>
          <h2
            className="font-display font-medium text-forest-green leading-[1.08] mb-4"
            style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}
          >
            Works with the tools you already use.
          </h2>
          <p className="text-[15px] text-dark-text/65 leading-relaxed mb-10 max-w-2xl">
            Sprout &amp; Vine connects with QuickBooks Online and Xero so your billing data flows directly to your bookkeeper without double-entry. Payment processing is built in through Stripe, with no separate merchant account needed.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              {
                name: 'QuickBooks Online',
                icon: '📊',
                status: 'Coming Q3 2026',
              },
              {
                name: 'Xero',
                icon: '🧮',
                status: 'Coming Q3 2026',
              },
              {
                name: 'Stripe',
                icon: '💳',
                status: 'Built in',
              },
              {
                name: 'Canada Post',
                icon: '📮',
                status: 'Coming Q4 2026',
              },
            ].map(item => (
              <div
                key={item.name}
                className="bg-white rounded-xl p-5 border border-[rgba(47,74,58,0.1)] text-center"
                style={{ boxShadow: '0 2px 12px rgba(47,74,58,0.05)' }}
              >
                <span className="text-3xl block mb-3">{item.icon}</span>
                <p className="text-[13px] font-semibold text-dark-text mb-1">{item.name}</p>
                <p className="text-[11px] font-medium text-dark-text/40">{item.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="bg-forest-green py-20 px-5 md:px-8">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className="font-display font-medium text-cream leading-[1.08] mb-5"
              style={{ fontSize: 'clamp(34px, 4vw, 50px)' }}
            >
              Ready to run your centre with tools built for it?
            </h2>
            <Link
              href="/founding"
              className="inline-block bg-terracotta text-white text-[14px] font-medium px-7 py-3.5 rounded-lg hover:bg-[#d4724e] transition-colors"
            >
              Apply to the Founding Program
            </Link>
          </div>
          <div className="bg-white/10 rounded-2xl p-7">
            <EmailCapture
              heading="Get notified when we launch."
              subheading="We will let you know when Sprout and Vine is ready, and share what we are building along the way."
              source="features-page"
            />
          </div>
        </div>
      </section>
    </>
  )
}
