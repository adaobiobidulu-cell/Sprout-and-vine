import type { Metadata } from 'next'
import Link from 'next/link'
import EmailCapture from '@/components/email-capture'

export const metadata: Metadata = {
  title: 'CWELCC Readiness Checklist for New Operators (2026) | Sprout & Vine',
  description:
    'Get CWELCC-ready before you open. A step-by-step checklist covering everything new childcare operators need to enroll in Canada-Wide Early Learning funding from day one.',
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-4">
      {children}
    </p>
  )
}

function Callout({ variant, children }: { variant: 'info' | 'warning'; children: React.ReactNode }) {
  const isWarning = variant === 'warning'
  return (
    <div
      className="rounded-xl p-5 my-5"
      style={{
        background: isWarning ? 'rgba(226,132,95,0.08)' : 'rgba(47,74,58,0.06)',
        border: isWarning ? '1px solid rgba(226,132,95,0.3)' : '1px solid rgba(47,74,58,0.15)',
      }}
    >
      {children}
    </div>
  )
}

function CheckRow({ children, note }: { children: React.ReactNode; note?: string }) {
  return (
    <li className="flex items-start gap-3 py-3 border-b border-[rgba(47,74,58,0.07)] last:border-b-0">
      <div className="w-5 h-5 rounded border-2 border-[rgba(47,74,58,0.25)] flex-shrink-0 mt-0.5" aria-hidden="true" />
      <div>
        <span className="text-[14px] text-dark-text/80 leading-snug">{children}</span>
        {note && <p className="text-[12px] text-dark-text/45 mt-1 leading-snug">{note}</p>}
      </div>
    </li>
  )
}

const readinessPhases = [
  {
    phase: 'Phase 1: Before You Apply for a Licence',
    color: 'bg-forest-green',
    items: [
      {
        text: 'Contact your local Service System Manager (CMSM/DSSAB) to introduce yourself and learn what funding is available in your community',
        note: 'Find your CMSM at ontario.ca/page/service-system-managers-child-care-and-early-years-programs',
      },
      {
        text: 'Confirm your community has a documented waitlist or childcare need (this strengthens your capital grant application)',
        note: null,
      },
      {
        text: 'Request information on available CWELCC capital grants from your CMSM before signing a lease or starting renovations',
        note: 'Capital grants cannot be applied for retroactively once construction has begun',
      },
      {
        text: 'Determine your eligibility: CWELCC enrollment is available to licensed operators. Not-for-profit operators have priority in some provinces.',
        note: null,
      },
    ],
  },
  {
    phase: 'Phase 2: During the Licensing Process',
    color: 'bg-sage-green',
    items: [
      {
        text: 'Confirm your proposed fee schedule is at or below the CWELCC parent fee cap for your province and age group',
        note: 'Ontario 2026 caps: Infant $22/day, Toddler $18.50/day, Preschool $15.50/day (approximate, confirm with CMSM)',
      },
      {
        text: 'Build your CWELCC enrollment application in parallel with your licence application to avoid delays',
        note: null,
      },
      {
        text: 'Ensure your financial tracking system can generate the reports CWELCC requires: daily attendance, subsidy reconciliation, fee records',
        note: 'Sprout and Vine generates all required CWELCC reports automatically',
      },
      {
        text: 'Document your staff qualifications to confirm eligibility for wage enhancement grants',
        note: 'RECE-designated staff unlock additional wage enhancement funding',
      },
    ],
  },
  {
    phase: 'Phase 3: At the Time of Licensing',
    color: 'bg-terracotta',
    items: [
      {
        text: 'Submit your CWELCC enrollment application to your CMSM (Ontario) or through ChildCareBC portal (BC) as soon as your licence is issued',
        note: 'You cannot receive CWELCC operating funding before your licence is active',
      },
      {
        text: 'Submit your CWELCC start-up grant application if you are a new home daycare provider (up to $7,200)',
        note: 'Administered through your home child care agency and CMSM in Ontario',
      },
      {
        text: 'Set your parent fees at or below the CWELCC-approved fee cap in writing before accepting enrolled families',
        note: 'Parents must see and sign an agreement confirming the subsidized rate',
      },
      {
        text: 'Begin tracking attendance using a system that generates daily attendance records suitable for CWELCC audits',
        note: null,
      },
    ],
  },
  {
    phase: 'Phase 4: Ongoing Compliance',
    color: 'bg-forest-green/70',
    items: [
      {
        text: 'Submit attendance and reconciliation reports to your CMSM on the schedule they require (usually monthly)',
        note: 'Late or inaccurate reports can result in clawbacks of subsidy payments',
      },
      {
        text: 'Notify your CMSM promptly of any changes to your capacity, age groups, or fee schedule',
        note: null,
      },
      {
        text: 'Complete your annual CWELCC compliance review and submit updated fee schedules as required',
        note: null,
      },
      {
        text: 'Apply for the annual wage enhancement grant renewal before the provincial deadline (typically spring each year)',
        note: null,
      },
      {
        text: 'Keep staff qualification records current: new hires must be added to your wage enhancement application',
        note: null,
      },
    ],
  },
]

export default function CwelccReadinessPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-3">
            <Link href="/seeds" className="text-[13px] text-dark-text/50 hover:text-forest-green transition-colors">
              Seeds
            </Link>
            <span className="text-[13px] text-dark-text/30 mx-2">/</span>
            <span className="text-[13px] text-dark-text/50">CWELCC Readiness Checklist</span>
          </div>
          <SectionLabel>Seeds: CWELCC Readiness</SectionLabel>
          <h1
            className="font-display font-medium text-forest-green leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(36px, 5vw, 62px)' }}
          >
            Get CWELCC-ready before you open.
          </h1>
          <p className="text-[17px] text-dark-text/65 leading-relaxed mb-4 max-w-2xl">
            The operators who access the most CWELCC funding are the ones who start the process early. This checklist tells you exactly what to do and when.
          </p>
          <p className="text-[12px] text-dark-text/40 border border-[rgba(47,74,58,0.15)] inline-block px-4 py-2 rounded-full">
            Updated May 2026. Focuses on Ontario with notes for BC.
          </p>
        </div>
      </section>

      {/* Why it matters */}
      <section className="bg-white py-12 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Why CWELCC Readiness Matters</SectionLabel>
          <h2
            className="font-display font-medium text-forest-green leading-[1.08] mb-5"
            style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}
          >
            CWELCC is not automatic. You have to apply, qualify, and maintain it.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
            {[
              {
                stat: '$7,200',
                label: 'Start-up grant for home daycare providers',
              },
              {
                stat: '$350,000',
                label: 'Capital grant per 20 new licensed spaces (centres)',
              },
              {
                stat: '$4/hr',
                label: 'Wage enhancement available to qualified ECE staff (BC)',
              },
            ].map(item => (
              <div key={item.label} className="bg-cream rounded-xl p-5 text-center">
                <p className="font-display font-medium text-forest-green text-[32px]">{item.stat}</p>
                <p className="text-[12px] text-dark-text/55 mt-2 leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
          <Callout variant="warning">
            <p className="text-[14px] font-semibold text-terracotta mb-2">The most common mistake</p>
            <p className="text-[14px] text-dark-text/75 leading-relaxed">
              Operators who wait until after they open to begin CWELCC enrollment miss capital grants, delay operating subsidies by months, and lose income that cannot be recovered. Start the conversation with your Service System Manager at the same time you start looking for a space.
            </p>
          </Callout>
        </div>
      </section>

      {/* Checklist */}
      <section className="bg-cream py-14 md:py-20 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>The Checklist</SectionLabel>
          <h2
            className="font-display font-medium text-forest-green leading-[1.08] mb-10"
            style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}
          >
            CWELCC Readiness: Phase by Phase
          </h2>

          <div className="space-y-8">
            {readinessPhases.map(phase => (
              <div
                key={phase.phase}
                className="bg-white rounded-2xl overflow-hidden border border-[rgba(47,74,58,0.1)]"
                style={{ boxShadow: '0 2px 12px rgba(47,74,58,0.05)' }}
              >
                <div className={`${phase.color} px-7 py-4`}>
                  <p className="text-[13px] font-semibold text-white uppercase tracking-[0.08em]">{phase.phase}</p>
                </div>
                <ul className="px-7">
                  {phase.items.map((item, i) => (
                    <CheckRow key={i} note={item.note ?? undefined}>
                      {item.text}
                    </CheckRow>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ontario vs BC quick reference */}
      <section className="bg-white py-12 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Quick Reference</SectionLabel>
          <h2
            className="font-display font-medium text-forest-green leading-[1.08] mb-6"
            style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}
          >
            How CWELCC enrollment works in Ontario vs BC
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-[rgba(47,74,58,0.12)] overflow-hidden">
              <div className="bg-forest-green/8 px-6 py-4 border-b border-[rgba(47,74,58,0.1)]">
                <p className="text-[15px] font-semibold text-forest-green">Ontario</p>
              </div>
              <div className="px-6 py-5 space-y-3">
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-dark-text/40 mb-1">Who to contact</p>
                  <p className="text-[14px] text-dark-text/70">Your local CMSM (Children's Municipal Services Manager) or DSSAB (District Social Services Administration Board)</p>
                </div>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-dark-text/40 mb-1">Portal</p>
                  <p className="text-[14px] text-dark-text/70">Applications through CMSM. No single provincial portal for operators.</p>
                </div>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-dark-text/40 mb-1">Fee caps (2026, approximate)</p>
                  <p className="text-[14px] text-dark-text/70">Infant: $22/day · Toddler: $18.50/day · Preschool: $15.50/day</p>
                </div>
                <a
                  href="https://www.ontario.ca/page/service-system-managers-child-care-and-early-years-programs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-forest-green hover:underline block"
                >
                  Find your CMSM →
                </a>
              </div>
            </div>
            <div className="rounded-xl border border-[rgba(47,74,58,0.12)] overflow-hidden">
              <div className="bg-forest-green/8 px-6 py-4 border-b border-[rgba(47,74,58,0.1)]">
                <p className="text-[15px] font-semibold text-forest-green">British Columbia</p>
              </div>
              <div className="px-6 py-5 space-y-3">
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-dark-text/40 mb-1">Who to contact</p>
                  <p className="text-[14px] text-dark-text/70">ChildCareBC (Ministry of Education and Child Care)</p>
                </div>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-dark-text/40 mb-1">Portal</p>
                  <p className="text-[14px] text-dark-text/70">My ChildCareBC Services (mychildcarebc.ca) for CCOF and CCFRI enrollment</p>
                </div>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-dark-text/40 mb-1">Fee reduction</p>
                  <p className="text-[14px] text-dark-text/70">CCFRI: up to $900/month per under-3 space. Amounts set by ChildCareBC.</p>
                </div>
                <a
                  href="https://www.mychildcarebc.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-forest-green hover:underline block"
                >
                  My ChildCareBC Services →
                </a>
              </div>
            </div>
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
              Let Sprout and Vine handle the CWELCC tracking.
            </h2>
            <p className="text-cream/65 text-[15px] leading-relaxed mb-6">
              Our platform is built around CWELCC from the ground up: attendance records, subsidy reconciliation, fee cap compliance, and reporting are all built in.
            </p>
            <Link
              href="/founding"
              className="inline-block bg-terracotta text-white text-[14px] font-medium px-7 py-3.5 rounded-lg hover:bg-[#d4724e] transition-colors"
            >
              Apply to the Founding Operators Program
            </Link>
          </div>
          <div className="bg-white/10 rounded-2xl p-7">
            <EmailCapture
              heading="Get the CWELCC readiness guide by email"
              subheading="A printable checklist, fee cap reference, and contact directory. Free."
              source="seeds-cwelcc-readiness"
            />
          </div>
        </div>
      </section>
    </>
  )
}
