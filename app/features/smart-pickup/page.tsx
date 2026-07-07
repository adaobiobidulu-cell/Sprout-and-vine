import type { Metadata } from 'next'
import { altEn } from '@/lib/seo'
import Link from 'next/link'
import EmailCapture from '@/components/email-capture'

export const metadata: Metadata = {
  title: 'Smart Pickup Authorization | Sprout & Vine Care',
  description:
    'Photo-verified pickup lists, instant parent notifications, and a complete audit log for every child release. Smart Pickup Authorization by Sprout & Vine Care, built for Canadian childcare centres.',
  alternates: altEn('/features/smart-pickup', '/fr/features/autorisation-ramassage'),
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-4">
      {children}
    </p>
  )
}

const featureBlocks = [
  {
    title: 'Photo-Verified Pickup List',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#2F4A3A" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <circle cx="12" cy="10" r="3" />
        <path d="M8 19c.83-1.19 2.3-2 4-2s3.17.81 4 2" />
      </svg>
    ),
    body: 'Every authorized pickup person has a photo on file. Staff match the face before releasing a child, with no relying on memory or name alone.',
  },
  {
    title: 'Instant Parent Notification',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#2F4A3A" strokeWidth="1.5" strokeLinecap="round">
        <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 01-3.46 0" />
        <path d="M12 2v1" />
      </svg>
    ),
    body: "The moment a child is signed out, both parents receive an instant notification: the authorized person's name, photo, and timestamp. Before they have reached the parking lot.",
  },
  {
    title: 'Family Circle Access Control',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#2F4A3A" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
        <path d="M16 3.13a4 4 0 010 7.75" />
        <path d="M21 21v-2a4 4 0 00-3-3.87" />
      </svg>
    ),
    body: 'Moms, dads, grandparents, step-parents, nannies, each with their own role and access level. Co-parents in separate households both stay fully informed, with no shared accounts required.',
  },
  {
    title: 'Real-Time Pickup ETA',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#2F4A3A" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    body: 'Parents can send a pickup ETA through the app so staff know who is coming and when. Fewer interruptions. Smoother end of day.',
  },
  {
    title: 'Custody and Restriction Notes',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#2F4A3A" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
        <circle cx="12" cy="16" r="1" fill="#2F4A3A" />
      </svg>
    ),
    body: "Add custody notes, court-order restrictions, and pickup restrictions directly to a child's profile. Staff see alerts before releasing a child to anyone flagged.",
  },
  {
    title: 'Complete Pickup Audit Log',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#2F4A3A" strokeWidth="1.5" strokeLinecap="round">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <path d="M9 12h6M9 16h4" />
      </svg>
    ),
    body: 'Every pickup is logged with name, photo, timestamp, and confirming staff member. Fully auditable. Available for licensing inspections.',
  },
]

export default function SmartPickupPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest-green py-24 md:py-32 px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-3">
            <Link href="/features" className="text-[13px] text-cream/50 hover:text-cream transition-colors">
              Features
            </Link>
            <span className="text-[13px] text-cream/30 mx-2">/</span>
            <span className="text-[13px] text-cream/50">Smart Pickup Authorization</span>
          </div>
          <SectionLabel>
            <span className="text-sage-green">Parent Safety</span>
          </SectionLabel>
          <h1
            className="font-display font-medium text-cream leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(38px, 5.5vw, 66px)' }}
          >
            Know exactly who picked up your child.<br />Every time.
          </h1>
          <p className="text-[18px] text-cream/65 mb-10 max-w-xl mx-auto leading-relaxed">
            Most apps tell parents their child was picked up. Sprout &amp; Vine Care tells them <em className="not-italic font-semibold text-cream/80">who</em> picked up, shows a photo, and sends an instant notification before they have left the parking lot.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/founding"
              className="bg-terracotta text-white text-[14px] font-medium px-7 py-3.5 rounded-lg hover:bg-[#d4724e] transition-colors"
            >
              Join the Founding Operators Program
            </Link>
            <a
              href="#demo"
              className="text-cream text-[14px] font-medium px-6 py-3.5 rounded-lg border-2 border-cream/35 hover:border-cream/60 transition-colors"
            >
              See it in action
            </a>
          </div>
        </div>
      </section>

      {/* Feature blocks */}
      <section id="demo" className="bg-cream py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel>How It Works</SectionLabel>
            <h2
              className="font-display font-medium text-forest-green leading-[1.08]"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
            >
              Six layers of protection at every pickup.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featureBlocks.map(block => (
              <div
                key={block.title}
                className="bg-white rounded-2xl p-6 border border-[rgba(47,74,58,0.08)]"
                style={{ boxShadow: '0 4px 20px rgba(47,74,58,0.06)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 p-2.5"
                  style={{ background: 'rgba(47,74,58,0.07)' }}
                >
                  {block.icon}
                </div>
                <h3 className="text-[15px] font-semibold text-dark-text mb-2">{block.title}</h3>
                <p className="text-[13px] text-dark-text/60 leading-relaxed">{block.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phone mockup + notification demo */}
      <section className="bg-white py-20 md:py-24 px-5 md:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>The Parent Experience</SectionLabel>
            <h2
              className="font-display font-medium text-forest-green leading-[1.08] mb-5"
              style={{ fontSize: 'clamp(30px, 3.5vw, 44px)' }}
            >
              From pickup to notification in under 30 seconds.
            </h2>
            <p className="text-[15px] text-dark-text/65 leading-relaxed mb-8">
              Staff open the child's profile, verify the authorized person against their photo, confirm the pickup, and the notification fires instantly to every parent in the family circle. The entire process takes less time than walking to the door.
            </p>
            <ul className="space-y-4">
              {[
                { icon: '🔒', label: 'Photo verified against authorized list' },
                { icon: '⚡', label: 'Notification sent before they reach the parking lot' },
                { icon: '📋', label: 'Pickup logged with staff member confirmation' },
                { icon: '👨‍👩‍👧', label: 'Both parents notified simultaneously' },
              ].map(item => (
                <li key={item.label} className="flex items-center gap-3 text-[14px] text-dark-text/75">
                  <span className="text-lg flex-shrink-0">{item.icon}</span>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Notification mock */}
          <div className="flex justify-center">
            <div className="relative mx-auto" style={{ width: '240px' }}>
              <div
                className="rounded-[38px] p-3"
                style={{ background: '#1a1a1a', boxShadow: '0 32px 80px rgba(0,0,0,0.3)' }}
              >
                <div className="rounded-[28px] overflow-hidden bg-[#f2f2f7]" style={{ minHeight: '480px' }}>
                  <div className="flex justify-center pt-2.5 pb-1.5">
                    <div className="w-16 h-1.5 rounded-full bg-[#1a1a1a]/10" />
                  </div>
                  <div className="px-3 pb-3 space-y-2.5">
                    <div className="text-[10px] text-dark-text/40 text-center py-1">Vine Parent App</div>

                    <div className="rounded-2xl p-3.5 bg-forest-green">
                      <div className="flex items-center gap-2 mb-2.5">
                        <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white text-sm">
                          ✓
                        </div>
                        <div>
                          <p className="text-white text-[11px] font-semibold">Smart Pickup Alert</p>
                          <p className="text-white/55 text-[9px]">Just now</p>
                        </div>
                      </div>
                      <p className="text-cream font-semibold text-[13px] mb-0.5">Sophie has been picked up</p>
                      <p className="text-cream/65 text-[11px]">By Grandma Rose · 3:14 PM</p>
                    </div>

                    <div
                      className="rounded-xl p-3 flex items-center gap-3 bg-white"
                      style={{ border: '1px solid rgba(47,74,58,0.1)' }}
                    >
                      <div className="w-11 h-11 rounded-full bg-light-sage/30 flex items-center justify-center text-2xl">
                        👵
                      </div>
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

                    <div className="space-y-1.5 pt-1">
                      {[
                        { label: 'Mom (Sarah)', status: 'Notified 3:14 PM', icon: '✓' },
                        { label: 'Dad (James)', status: 'Notified 3:14 PM', icon: '✓' },
                      ].map(item => (
                        <div
                          key={item.label}
                          className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-white"
                          style={{ border: '1px solid rgba(47,74,58,0.08)' }}
                        >
                          <span className="text-[11px] text-dark-text/70">{item.label}</span>
                          <span className="text-[10px] text-sage-green font-medium">{item.icon} {item.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-16 px-5 md:px-8" style={{ background: 'rgba(226,132,95,0.07)' }}>
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-2xl p-8 md:p-10"
            style={{ background: 'white', border: '1px solid rgba(226,132,95,0.2)', boxShadow: '0 4px 24px rgba(226,132,95,0.08)' }}
          >
            <span className="text-3xl block mb-5">🍁</span>
            <p className="text-[17px] text-dark-text/75 leading-relaxed mb-5">
              In Canada, custody disputes, unauthorized pickups, and child safety incidents at pickup time are among the most stressful situations a childcare director faces. Smart Pickup Authorization gives your staff a clear, documented process, and gives parents certainty they have never had before.
            </p>
            <p className="text-[13px] text-dark-text/40 font-medium uppercase tracking-[0.1em]">
              Sprout &amp; Vine Care, Built for Canadian Childcare
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-green py-16 px-5 md:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className="font-display font-medium text-cream leading-[1.08] mb-4"
              style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}
            >
              Ready to protect every pickup?
            </h2>
            <p className="text-cream/65 text-[15px] leading-relaxed mb-6">
              Smart Pickup Authorization is included in all paid Sprout &amp; Vine Care tiers. Join the Founding Operators Program to get early access.
            </p>
            <Link
              href="/founding"
              className="inline-block bg-terracotta text-white text-[14px] font-medium px-7 py-3.5 rounded-lg hover:bg-[#d4724e] transition-colors"
            >
              Apply to the Founding Operators Program
            </Link>
          </div>
          <div className="bg-white rounded-2xl p-7">
            <EmailCapture
              heading="Get updates on Smart Pickup"
              subheading="We will notify you when Smart Pickup Authorization is available in your region."
              source="features-smart-pickup"
            />
          </div>
        </div>
      </section>
    </>
  )
}
