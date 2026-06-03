import type { Metadata } from 'next'
import Link from 'next/link'
import EmailCapture from '@/components/email-capture'

export const metadata: Metadata = {
  title: 'How to Open a Licensed Childcare Centre in Canada (2026) | Sprout & Vine',
  description:
    'A complete step-by-step guide to opening a licensed childcare centre in Canada. Covers space requirements, licensing, staffing, CWELCC funding, and startup costs.',
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-4">
      {children}
    </p>
  )
}

function StepNumber({ n }: { n: number }) {
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-[15px] text-white"
      style={{ background: '#2F4A3A' }}
    >
      {n}
    </div>
  )
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
        <circle cx="8" cy="8" r="8" fill="#2F4A3A" fillOpacity="0.1" />
        <path d="M4.5 8l2.5 2.5 4-4.5" stroke="#2F4A3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-[14px] text-dark-text/75 leading-snug">{children}</span>
    </li>
  )
}

function Callout({ variant, children }: { variant: 'info' | 'warning'; children: React.ReactNode }) {
  const isWarning = variant === 'warning'
  return (
    <div
      className="rounded-xl p-6 my-6"
      style={{
        background: isWarning ? 'rgba(226,132,95,0.08)' : 'rgba(47,74,58,0.06)',
        border: isWarning ? '1px solid rgba(226,132,95,0.3)' : '1px solid rgba(47,74,58,0.15)',
      }}
    >
      {children}
    </div>
  )
}

const startupCostRows = [
  { item: 'Architect/space planning fees', cost: '$5,000 to $30,000' },
  { item: 'Renovations and build-out', cost: '$20,000 to $200,000' },
  { item: 'Playground equipment and fencing', cost: '$15,000 to $60,000' },
  { item: 'Indoor furniture and equipment', cost: '$10,000 to $40,000' },
  { item: 'Educational materials and supplies', cost: '$5,000 to $15,000' },
  { item: 'Kitchen equipment (if meals served)', cost: '$5,000 to $25,000' },
  { item: 'Insurance (first year)', cost: '$3,000 to $8,000' },
  { item: 'Staff recruitment and onboarding', cost: '$2,000 to $10,000' },
  { item: 'Legal and incorporation fees', cost: '$1,500 to $5,000' },
  { item: 'Sprout Starter or Grow plan (software)', cost: '$69 to $109/mo CAD' },
  { item: 'TOTAL STARTUP ESTIMATE', cost: '$50,000 to $350,000+', bold: true },
]

export default function ChildcareCentreGuidePage() {
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
            <span className="text-[13px] text-dark-text/50">Childcare Centre Guide</span>
          </div>
          <SectionLabel>Seeds: Childcare Centre Guide</SectionLabel>
          <h1
            className="font-display font-medium text-forest-green leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(36px, 5vw, 62px)' }}
          >
            Opening a licensed childcare centre is serious work. Here is the full picture.
          </h1>
          <p className="text-[17px] text-dark-text/65 leading-relaxed mb-4 max-w-2xl">
            A licensed childcare centre is one of the most impactful things you can build in a Canadian community. It is also one of the most regulated. This guide walks you through every step.
          </p>
          <p className="text-[12px] text-dark-text/40 border border-[rgba(47,74,58,0.15)] inline-block px-4 py-2 rounded-full">
            Built from Ontario.ca, BC.gov, and Ministry guidelines. Updated May 2026.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-14 md:py-18 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Overview</SectionLabel>
          <h2
            className="font-display font-medium text-forest-green leading-[1.08] mb-6"
            style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}
          >
            What Makes a Childcare Centre Different
          </h2>
          <p className="text-[15px] text-dark-text/70 leading-relaxed mb-5">
            Unlike a home daycare, a licensed childcare centre operates in a dedicated non-residential space: a standalone facility, a church hall, a school annex, or a purpose-built building. You hold the licence directly. You hire staff. You serve a larger group of children across multiple age groups, each with their own ratio requirements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
            {[
              { label: 'Timeline to open', value: '6 to 18 months' },
              { label: 'Startup cost (Ontario)', value: '$50K to $350K+' },
              { label: 'CWELCC capital funding', value: 'Up to $350K per 20 spaces' },
            ].map(stat => (
              <div key={stat.label} className="bg-cream rounded-xl p-5 text-center">
                <p className="font-display font-medium text-forest-green text-[28px]">{stat.value}</p>
                <p className="text-[12px] text-dark-text/50 uppercase tracking-[0.1em] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
          <Callout variant="info">
            <p className="text-[14px] text-dark-text/75 leading-relaxed">
              <strong>Before you begin:</strong> The most successful operators start by talking to their local Service System Manager (CMSM/DSSAB in Ontario) before they sign a lease or buy equipment. Service System Managers know what the community needs, where there are waitlist pressures, and what funding may be available. That conversation is free and can save you months.
            </p>
          </Callout>
        </div>
      </section>

      {/* Step-by-step */}
      <section className="bg-cream py-14 md:py-20 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Step by Step</SectionLabel>
          <h2
            className="font-display font-medium text-forest-green leading-[1.08] mb-10"
            style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}
          >
            Opening a Childcare Centre in Ontario: 6 Stages
          </h2>

          {/* Stage 1 */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-5">
              <StepNumber n={1} />
              <h3 className="font-display font-medium text-forest-green" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
                Plan and Assess Feasibility
              </h3>
            </div>
            <div className="pl-14">
              <p className="text-[14px] text-dark-text/70 leading-relaxed mb-4">
                Before you spend a dollar, answer these questions with real data:
              </p>
              <ul className="space-y-3 mb-5">
                <CheckItem>Is there a waitlist gap in your community? Talk to your local CMSM or DSSAB.</CheckItem>
                <CheckItem>What age groups will you serve? Each has different ratios, space requirements, and fee structures.</CheckItem>
                <CheckItem>Do you have a qualified ECE with a supervisor designation available? Without one, you cannot open.</CheckItem>
                <CheckItem>Do you have access to capital of $50K minimum? Even heavily CWELCC-funded centres need equity.</CheckItem>
                <CheckItem>Will you operate as a non-profit, a private for-profit, or a cooperative? Each has different CWELCC eligibility rules in some provinces.</CheckItem>
              </ul>
              <Callout variant="info">
                <p className="text-[14px] font-semibold text-dark-text mb-1">Get this first:</p>
                <p className="text-[14px] text-dark-text/70">
                  A letter of support from your local CMSM is often required for CWELCC capital funding. Starting that relationship now, before you have a lease or a building, is not premature. It is the right sequence.
                </p>
              </Callout>
            </div>
          </div>

          {/* Stage 2 */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-5">
              <StepNumber n={2} />
              <h3 className="font-display font-medium text-forest-green" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
                Find and Prepare Your Space
              </h3>
            </div>
            <div className="pl-14">
              <p className="text-[14px] text-dark-text/70 leading-relaxed mb-4">
                Space is where most childcare centre plans succeed or fail. The requirements are strict.
              </p>
              <p className="text-[14px] font-semibold text-dark-text mb-3">Ontario minimums (Child Care and Early Years Act, 2014):</p>
              <ul className="space-y-3 mb-5">
                <CheckItem>Indoor play space: 2.8 square metres per child (for all age groups)</CheckItem>
                <CheckItem>Outdoor play space: 5.6 square metres per child (may be shared or waived in some cases)</CheckItem>
                <CheckItem>Separate sleep room for infants with cribs spaced 90cm apart</CheckItem>
                <CheckItem>Accessible washroom facilities on the same floor as childcare</CheckItem>
                <CheckItem>Staff washroom and work area separate from child areas</CheckItem>
                <CheckItem>Kitchen or meal prep area meeting public health standards</CheckItem>
              </ul>
              <Callout variant="warning">
                <p className="text-[14px] font-semibold text-terracotta mb-2">Critical: Get zoning confirmation before signing a lease</p>
                <p className="text-[14px] text-dark-text/75 leading-relaxed">
                  Childcare use is a specific zoning category in most Ontario municipalities. Not all commercial or residential spaces are zoned for it. Confirm with your local planning department before signing anything.
                </p>
              </Callout>
              <p className="text-[14px] font-semibold text-dark-text mb-3 mt-5">Space types to consider:</p>
              <ul className="space-y-2 text-[14px] text-dark-text/70">
                <li>Church or community hall (often affordable leases with community goodwill)</li>
                <li>School board surplus space (ask your local board)</li>
                <li>Purpose-built commercial space</li>
                <li>Municipal facility leases (contact your municipality)</li>
                <li>New residential development partnerships (many developers are required to include childcare)</li>
              </ul>
            </div>
          </div>

          {/* Stage 3 */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-5">
              <StepNumber n={3} />
              <h3 className="font-display font-medium text-forest-green" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
                Incorporate and Obtain Required Certifications
              </h3>
            </div>
            <div className="pl-14">
              <ul className="space-y-3 mb-5">
                <CheckItem>Incorporate or register your business (federal or provincial)</CheckItem>
                <CheckItem>Register for HST/GST if applicable</CheckItem>
                <CheckItem>Obtain general liability insurance (minimum $2M per occurrence for most inspections)</CheckItem>
                <CheckItem>Ensure your director (supervisor) holds an ECE diploma and is a Registered ECE (RECE) in Ontario</CheckItem>
                <CheckItem>Ensure all staff and volunteers have current vulnerable sector checks</CheckItem>
                <CheckItem>Ensure all staff have current Standard First Aid plus Infant/Child CPR</CheckItem>
              </ul>
              <p className="text-[14px] font-semibold text-dark-text mb-3">Ontario staff-to-child ratios (select age groups):</p>
              <div className="rounded-xl overflow-hidden border border-[rgba(47,74,58,0.12)] mb-5">
                <table className="w-full">
                  <thead>
                    <tr className="bg-forest-green">
                      <th className="text-left text-[12px] uppercase tracking-[0.1em] text-cream/70 font-semibold px-5 py-3">Age Group</th>
                      <th className="text-left text-[12px] uppercase tracking-[0.1em] text-cream/70 font-semibold px-5 py-3">Ratio</th>
                      <th className="text-left text-[12px] uppercase tracking-[0.1em] text-cream/70 font-semibold px-5 py-3">Max Group Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { age: 'Infant (under 18 months)', ratio: '1:3', max: '10' },
                      { age: 'Toddler (18 months to 2.5 years)', ratio: '1:5', max: '15' },
                      { age: 'Preschool (30 months to 6 years)', ratio: '1:8', max: '16' },
                      { age: 'School Age (6 years+)', ratio: '1:12', max: '24' },
                    ].map((row, i) => (
                      <tr key={row.age} className={i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}>
                        <td className="px-5 py-3 text-[14px] text-dark-text/70">{row.age}</td>
                        <td className="px-5 py-3 text-[14px] text-dark-text/70">{row.ratio}</td>
                        <td className="px-5 py-3 text-[14px] text-dark-text/70">{row.max}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Stage 4 */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-5">
              <StepNumber n={4} />
              <h3 className="font-display font-medium text-forest-green" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
                Apply for Your Licence
              </h3>
            </div>
            <div className="pl-14">
              <p className="text-[14px] text-dark-text/70 leading-relaxed mb-4">
                In Ontario, your licence application is submitted to the Ministry of Education. Here is what you submit:
              </p>
              <ul className="space-y-3 mb-5">
                <CheckItem>Completed application form (via the ministry's online portal)</CheckItem>
                <CheckItem>Floor plan with room dimensions and designated uses</CheckItem>
                <CheckItem>Written policies: nutrition, illness, rest, screen time, prohibited practices, emergency procedures</CheckItem>
                <CheckItem>Proof of business registration</CheckItem>
                <CheckItem>Staff qualifications documentation</CheckItem>
                <CheckItem>Insurance certificate</CheckItem>
                <CheckItem>Proof of zoning approval</CheckItem>
              </ul>
              <p className="text-[14px] font-semibold text-dark-text mb-3">Inspections required before licence is issued:</p>
              <ul className="space-y-2 text-[14px] text-dark-text/70 mb-5">
                <li>Ministry of Education Program Advisor inspection (reviews policies, program quality, space)</li>
                <li>Local Public Health Unit inspection (kitchen, hygiene standards, diaper change areas)</li>
                <li>Local Fire Department inspection (emergency egress, fire suppression, capacity)</li>
                <li>Building permit and occupancy approval (from your municipality)</li>
              </ul>
              <div className="bg-white rounded-xl p-5 border border-[rgba(47,74,58,0.1)]">
                <p className="text-[13px] font-semibold text-forest-green mb-2">Key Ontario links:</p>
                <ul className="space-y-1 text-[13px] text-dark-text/65">
                  <li><a href="https://www.ontario.ca/page/apply-or-renew-child-care-licence" target="_blank" rel="noopener noreferrer" className="text-forest-green hover:underline">ontario.ca/page/apply-or-renew-child-care-licence</a></li>
                  <li><a href="https://www.ontario.ca/page/child-care-licensing-resources" target="_blank" rel="noopener noreferrer" className="text-forest-green hover:underline">ontario.ca/page/child-care-licensing-resources</a></li>
                  <li>Ministry childcare helpline: 1-877-510-5333</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stage 5 */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-5">
              <StepNumber n={5} />
              <h3 className="font-display font-medium text-forest-green" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
                Apply for CWELCC Funding
              </h3>
            </div>
            <div className="pl-14">
              <p className="text-[14px] text-dark-text/70 leading-relaxed mb-5">
                CWELCC funding is the most significant financial opportunity available to new childcare operators in Canada. Apply as early as possible.
              </p>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-5 border border-[rgba(47,74,58,0.1)]">
                  <p className="text-[14px] font-semibold text-dark-text mb-1">Capital Start-Up Grants (Ontario)</p>
                  <p className="text-[13px] text-dark-text/65 mb-2">Up to $350,000 per 20 new licensed spaces. Applied through your local CMSM. Most highly competitive in areas with documented waitlist pressure.</p>
                  <a href="https://www.ontario.ca/page/service-system-managers-child-care-and-early-years-programs" target="_blank" rel="noopener noreferrer" className="text-[12px] text-forest-green hover:underline">Find your CMSM</a>
                </div>
                <div className="bg-white rounded-xl p-5 border border-[rgba(47,74,58,0.1)]">
                  <p className="text-[14px] font-semibold text-dark-text mb-1">Ongoing Operating Grants</p>
                  <p className="text-[13px] text-dark-text/65">Monthly per-child operating subsidy based on your licensed capacity, age groups, and hours. Paid through your CMSM after you are licensed and enrolled. Amounts vary by region.</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-[rgba(47,74,58,0.1)]">
                  <p className="text-[14px] font-semibold text-dark-text mb-1">Fee Reduction: CWELCC Fee Caps</p>
                  <p className="text-[13px] text-dark-text/65">In Ontario, the 2026 parent fee cap for full-day infant care is $22/day. Toddler and preschool caps are lower. The funding subsidy makes up the difference between your actual cost and the fee cap. See our <a href="/resources/cwelcc-guide" className="text-forest-green hover:underline">CWELCC Guide</a> for current caps by province.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stage 6 */}
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-5">
              <StepNumber n={6} />
              <h3 className="font-display font-medium text-forest-green" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
                Set Up Your Operations
              </h3>
            </div>
            <div className="pl-14">
              <p className="text-[14px] text-dark-text/70 leading-relaxed mb-4">
                Before you open your doors, you need operating systems in place. Your licensing inspection will check that your policies exist. But you also need the systems to run them daily.
              </p>
              <ul className="space-y-3">
                <CheckItem>Attendance and sign-in/sign-out system (required for licensing)</CheckItem>
                <CheckItem>Pickup authorization system (who is permitted to collect each child, including photo ID verification)</CheckItem>
                <CheckItem>CWELCC subsidy tracking and reconciliation</CheckItem>
                <CheckItem>Family communication system (daily reports, incident reports, notices)</CheckItem>
                <CheckItem>Enrollment and waitlist management</CheckItem>
                <CheckItem>Staff scheduling and timesheet tracking</CheckItem>
                <CheckItem>Billing and invoice system for parent fees</CheckItem>
              </ul>
              <Callout variant="info">
                <p className="text-[14px] text-dark-text/75">
                  Sprout and Vine handles all of the above in one platform, built specifically for Canadian CWELCC-enrolled operators. <Link href="/founding" className="text-forest-green font-medium hover:underline">Apply to our Founding Operators Program</Link> to get early access.
                </p>
              </Callout>
            </div>
          </div>
        </div>
      </section>

      {/* Startup cost table */}
      <section className="bg-white py-14 md:py-18 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Cost Estimate</SectionLabel>
          <h2
            className="font-display font-medium text-forest-green leading-[1.08] mb-6"
            style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}
          >
            Startup Cost Estimate: Ontario Childcare Centre
          </h2>
          <div className="rounded-xl overflow-hidden border border-[rgba(47,74,58,0.12)] mb-6">
            <table className="w-full">
              <thead>
                <tr className="bg-forest-green">
                  <th className="text-left text-[12px] uppercase tracking-[0.1em] text-cream/70 font-semibold px-5 py-3">Item</th>
                  <th className="text-right text-[12px] uppercase tracking-[0.1em] text-cream/70 font-semibold px-5 py-3">Estimated Cost</th>
                </tr>
              </thead>
              <tbody>
                {startupCostRows.map((row, i) => (
                  <tr
                    key={row.item}
                    className={row.bold ? 'bg-sage-green/10' : i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}
                  >
                    <td className={`px-5 py-3 text-[14px] ${row.bold ? 'font-semibold text-dark-text' : 'text-dark-text/70'}`}>{row.item}</td>
                    <td className={`px-5 py-3 text-[14px] text-right ${row.bold ? 'font-semibold text-dark-text' : 'text-dark-text/70'}`}>{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Callout variant="info">
            <p className="text-[14px] text-dark-text/75">
              CWELCC capital grants can cover a significant portion of renovation and equipment costs. The funding envelope varies by province and is tied to community need assessments. Apply before you begin construction.
            </p>
          </Callout>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-forest-green py-16 px-5 md:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className="font-display font-medium text-cream leading-[1.08] mb-4"
              style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}
            >
              Ready to take the next step?
            </h2>
            <p className="text-cream/65 text-[15px] leading-relaxed mb-6">
              Join operators across Canada who are using Sprout and Vine to plan and run their childcare programs.
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
              heading="Get the centre licensing checklist as a PDF"
              subheading="A complete step-by-step licensing guide, inspection checklist, and funding overview. Free."
              source="seeds-childcare-centre"
            />
          </div>
        </div>
      </section>
    </>
  )
}
