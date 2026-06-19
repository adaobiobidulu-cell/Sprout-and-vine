import type { Metadata } from 'next'
import Link from 'next/link'
import EmailCapture from '@/components/email-capture'

export const metadata: Metadata = {
  title: 'How to Open a Licensed Home Daycare in Canada (2026) | Sprout & Vine Care',
  description:
    'Everything you need to know about opening a licensed home daycare in Ontario, BC, and across Canada. Real steps, real costs, real government links.',
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
  { item: 'First Aid/CPR certification', cost: '$80 to $150' },
  { item: 'Vulnerable sector check', cost: '$25 to $80' },
  { item: 'Safety equipment (gates, locks, detectors)', cost: '$200 to $500' },
  { item: 'Cots/sleep mats per child', cost: '$50 to $120 each' },
  { item: 'Play equipment and toys', cost: '$500 to $1,500' },
  { item: 'Art and program supplies', cost: '$200 to $500' },
  { item: 'Insurance (childcare/liability)', cost: '$600 to $1,200/year' },
  { item: 'Agency fee (varies by agency)', cost: '$0 to $500' },
  { item: 'Sprout Home plan (software)', cost: '$49/mo CAD' },
  { item: 'TOTAL STARTUP ESTIMATE', cost: '$2,000 to $5,000', bold: true },
  { item: 'Monthly operating estimate', cost: '$300 to $600' },
]

export default function HomeDaycareGuidePage() {
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
            <span className="text-[13px] text-dark-text/50">Home Daycare</span>
          </div>
          <SectionLabel>Seeds: Home Daycare Guide</SectionLabel>
          <h1
            className="font-display font-medium text-forest-green leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(36px, 5vw, 62px)' }}
          >
            You already know how to care for children. Here is how to make it official.
          </h1>
          <p className="text-[17px] text-dark-text/65 leading-relaxed mb-4 max-w-2xl">
            Opening a licensed home daycare is the most accessible entry point into Canada's childcare sector.
          </p>
          <p
            className="text-[12px] text-dark-text/40 border border-[rgba(47,74,58,0.15)] inline-block px-4 py-2 rounded-full"
          >
            Built from Ontario.ca, BC.gov, and Ministry guidelines. Updated May 2026.
          </p>
        </div>
      </section>

      {/* Section A: What is a Licensed Home Daycare */}
      <section className="bg-white py-14 md:py-18 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Section A</SectionLabel>
          <h2
            className="font-display font-medium text-forest-green leading-[1.08] mb-6"
            style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}
          >
            What Is a Licensed Home Daycare?
          </h2>
          <p className="text-[15px] text-dark-text/70 leading-relaxed mb-6">
            A licensed home daycare (called "licensed home child care" in Ontario and "family child care" in BC) is a childcare program that takes place in your own home. You are the educator. You set the rhythm. You build real, lasting relationships with the small group of children you care for.
          </p>

          <h3 className="text-[16px] font-semibold text-dark-text mb-4">It is NOT the same as babysitting or unlicensed care:</h3>
          <ul className="space-y-3 mb-8">
            <CheckItem>Licensed home daycares are overseen by provincial government</CheckItem>
            <CheckItem>You receive professional support from a trained home visitor</CheckItem>
            <CheckItem>You are eligible for provincial subsidies and CWELCC funding</CheckItem>
            <CheckItem>Families can apply for the Child Care Fee Subsidy to pay your fees</CheckItem>
            <CheckItem>You are protected by professional insurance and agency support</CheckItem>
          </ul>

          <h3 className="text-[16px] font-semibold text-dark-text mb-4">Capacity by province:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-cream rounded-xl p-5">
              <p className="text-[13px] font-semibold text-forest-green uppercase tracking-[0.1em] mb-3">Ontario</p>
              <ul className="space-y-2 text-[14px] text-dark-text/70 leading-relaxed">
                <li>Up to 6 children under age 13 at any time (including your own children under age 6)</li>
                <li>Maximum 3 children under age 2</li>
                <li>You operate from your home only</li>
              </ul>
            </div>
            <div className="bg-cream rounded-xl p-5">
              <p className="text-[13px] font-semibold text-forest-green uppercase tracking-[0.1em] mb-3">British Columbia</p>
              <ul className="space-y-2 text-[14px] text-dark-text/70 leading-relaxed">
                <li>Up to 7 children (Family Child Care) including your own children under age 13</li>
                <li>Maximum group size determined at final inspection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section B: Ontario Step-by-Step */}
      <section className="bg-cream py-14 md:py-20 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Section B</SectionLabel>
          <h2
            className="font-display font-medium text-forest-green leading-[1.08] mb-8"
            style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}
          >
            Ontario Step-by-Step Guide
          </h2>

          <Callout variant="warning">
            <p className="text-[14px] font-semibold text-terracotta mb-2">Important: How Ontario licensing works</p>
            <p className="text-[14px] text-dark-text/75 leading-relaxed">
              In Ontario, individual home daycare providers are NOT licensed directly by the Ministry of Education. You must be contracted to a licensed Home Child Care Agency. The agency holds the licence. You are their contracted provider. This is not optional. This is actually a good thing: your agency provides training, home visitor support, insurance, and access to CWELCC funding that you could not access alone.
            </p>
          </Callout>

          {/* Step 1 */}
          <div className="mt-10 mb-10">
            <div className="flex items-center gap-4 mb-5">
              <StepNumber n={1} />
              <h3 className="font-display font-medium text-forest-green" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
                Understand the Rules
              </h3>
            </div>
            <div className="pl-14">
              <p className="text-[14px] font-semibold text-dark-text mb-3">Key limits in Ontario:</p>
              <ul className="space-y-2 mb-5">
                <CheckItem>Maximum 6 children under 13 at any time (including your own children under 6)</CheckItem>
                <CheckItem>Maximum 2 children under 2 years old</CheckItem>
                <CheckItem>You may operate at only one location (your home)</CheckItem>
              </ul>
              <Callout variant="info">
                <p className="text-[13px] font-semibold text-dark-text mb-1">Before you are licensed:</p>
                <p className="text-[13px] text-dark-text/70 leading-relaxed">
                  You may care for up to 5 children total (including your own) as an unlicensed provider, but you must inform parents in writing that you are unlicensed, and you are not eligible for CWELCC funding.
                </p>
              </Callout>
            </div>
          </div>

          {/* Step 2 */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-5">
              <StepNumber n={2} />
              <h3 className="font-display font-medium text-forest-green" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
                Income and Time to Expect
              </h3>
            </div>
            <div className="pl-14">
              <p className="text-[14px] text-dark-text/70 leading-relaxed mb-4">
                Full-time licensed home daycares typically operate Monday to Friday, approximately 7:30am to 5:30pm, 47 to 49 weeks per year.
              </p>
              <div className="bg-white rounded-xl p-5 border border-[rgba(47,74,58,0.1)] mb-4">
                <p className="text-[13px] font-semibold text-forest-green mb-3">Estimated annual income (Ontario, CWELCC-enrolled):</p>
                <ul className="space-y-2 text-[13px] text-dark-text/70">
                  <li>5 children at $22/day x 245 days: approximately $26,950/year gross</li>
                  <li>6 children at full capacity: approximately $32,340/year gross</li>
                  <li>Plus CWELCC operating subsidy (variable by region)</li>
                  <li>Minus food, supplies, insurance, agency fee, software ($8,000 to $12,000/year)</li>
                  <li className="font-semibold text-dark-text">Net income range: approximately $18,000 to $25,000/year (full-time, licensed, CWELCC-enrolled)</li>
                </ul>
              </div>
              <Callout variant="info">
                <p className="text-[13px] font-semibold text-dark-text mb-1">Income is modest but comes with real benefits:</p>
                <p className="text-[13px] text-dark-text/70">
                  Working from home, no commute, significant tax deductions (home office, meals, supplies), personal satisfaction, and meaningful community impact.
                </p>
              </Callout>
            </div>
          </div>

          {/* Step 3 */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-5">
              <StepNumber n={3} />
              <h3 className="font-display font-medium text-forest-green" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
                Prepare Your Home
              </h3>
            </div>
            <div className="pl-14">
              <p className="text-[14px] text-dark-text/70 mb-4">Your home must meet these minimum requirements before your inspection:</p>
              <ul className="space-y-3">
                <CheckItem>Dedicated play space with enough room for enrolled children</CheckItem>
                <CheckItem>Sleeping area with individual, labeled sleep surfaces (cots or mats). Infants must sleep in a crib or playpen.</CheckItem>
                <CheckItem>Separate safe food preparation area (kitchen must pass health standards)</CheckItem>
                <CheckItem>Working smoke detector on every level, tested and dated</CheckItem>
                <CheckItem>Working carbon monoxide detector, tested and dated</CheckItem>
                <CheckItem>Fire extinguisher present and accessible (not to children)</CheckItem>
                <CheckItem>All medications, cleaning products, and chemicals locked away</CheckItem>
                <CheckItem>All stairs have safety gates (top AND bottom for infants/toddlers)</CheckItem>
                <CheckItem>All electrical outlets covered</CheckItem>
                <CheckItem>Safe outdoor play area (fencing recommended for infants/toddlers)</CheckItem>
              </ul>
            </div>
          </div>

          {/* Step 4 */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-5">
              <StepNumber n={4} />
              <h3 className="font-display font-medium text-forest-green" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
                Get Your Certifications
              </h3>
            </div>
            <div className="pl-14">
              <p className="text-[14px] font-semibold text-dark-text mb-3">Required before your agency home visit:</p>

              <div className="bg-white rounded-xl p-5 border border-[rgba(47,74,58,0.1)] mb-5">
                <p className="text-[14px] font-semibold text-dark-text mb-2">Standard First Aid plus Infant/Child CPR</p>
                <p className="text-[13px] text-dark-text/65 mb-3">Must be from a WSIB-approved provider (not online-only). Cost: $80 to $150. Renewal: every 3 years.</p>
                <p className="text-[12px] font-semibold text-dark-text/50 uppercase tracking-[0.1em] mb-2">Recommended providers:</p>
                <ul className="space-y-1 text-[13px] text-dark-text/65">
                  <li>Canadian Red Cross: <a href="https://www.redcross.ca/take-a-course" target="_blank" rel="noopener noreferrer" className="text-forest-green hover:underline">redcross.ca/take-a-course</a></li>
                  <li>St. John Ambulance: <a href="https://www.sja.ca/en/first-aid-cpr-training" target="_blank" rel="noopener noreferrer" className="text-forest-green hover:underline">sja.ca/en/first-aid-cpr-training</a></li>
                  <li>Heart and Stroke Foundation: <a href="https://www.heartandstroke.ca" target="_blank" rel="noopener noreferrer" className="text-forest-green hover:underline">heartandstroke.ca</a></li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-5 border border-[rgba(47,74,58,0.1)] mb-5">
                <p className="text-[14px] font-semibold text-dark-text mb-2">Vulnerable Sector Check</p>
                <p className="text-[13px] text-dark-text/65">
                  Obtained from your local police service or OPP detachment. Must include vulnerable sector screening. Typical turnaround: 2 to 8 weeks. Cost: $25 to $80. Renewal: every 5 years.
                </p>
              </div>

              <p className="text-[14px] font-semibold text-dark-text mb-3">Strongly recommended:</p>
              <ul className="space-y-3">
                <CheckItem>
                  ECE Diploma (RECE designation): Not legally required for home care providers in Ontario, but significantly strengthens your application and qualifies you for the CWELCC Wage Enhancement Grant.
                </CheckItem>
                <CheckItem>
                  Safe food handling certificate: Available through your local public health unit. Cost: Free to $40.
                </CheckItem>
              </ul>
            </div>
          </div>

          {/* Step 5 */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-5">
              <StepNumber n={5} />
              <h3 className="font-display font-medium text-forest-green" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
                Find a Licensed Home Child Care Agency
              </h3>
            </div>
            <div className="pl-14">
              <p className="text-[14px] text-dark-text/70 leading-relaxed mb-5">
                This is the most consequential decision you will make. Your agency is your licensor, your support system, your professional home.
              </p>

              <p className="text-[14px] font-semibold text-dark-text mb-3">How to find an agency near you:</p>
              <ul className="space-y-2 mb-6 text-[14px] text-dark-text/70">
                <li>Ministry of Education's licensed child care locator: <a href="https://www.ontario.ca/page/find-licensed-child-care" target="_blank" rel="noopener noreferrer" className="text-forest-green hover:underline">ontario.ca/page/find-licensed-child-care</a> (filter by "Home Child Care Agency")</li>
                <li>Open data, all licensed agencies: <a href="https://data.ontario.ca/dataset/home-child-care-agencies" target="_blank" rel="noopener noreferrer" className="text-forest-green hover:underline">data.ontario.ca/dataset/home-child-care-agencies</a></li>
                <li>Contact your local service system manager (CMSM/DSSAB): <a href="https://www.ontario.ca/page/service-system-managers-child-care-and-early-years-programs" target="_blank" rel="noopener noreferrer" className="text-forest-green hover:underline">ontario.ca/page/service-system-managers-child-care-and-early-years-programs</a></li>
              </ul>

              <p className="text-[14px] font-semibold text-dark-text mb-3">Questions to ask every agency:</p>
              <ol className="space-y-2 mb-6">
                {[
                  'Are you currently accepting new home providers in my area?',
                  'What is your agency fee or percentage of earnings?',
                  'How often does my home visitor come? What happens between visits?',
                  'What training and professional development do you provide?',
                  'Do you help me apply for CWELCC funding?',
                  'What is your process if I need to close temporarily (illness, vacation)?',
                ].map((q, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] text-dark-text/70">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-forest-green/10 text-forest-green text-[12px] font-semibold flex items-center justify-center mt-0.5">{i + 1}</span>
                    {q}
                  </li>
                ))}
              </ol>

              <Callout variant="warning">
                <p className="text-[14px] font-semibold text-terracotta mb-2">Red flags in an agency:</p>
                <ul className="space-y-1.5 text-[13px] text-dark-text/70">
                  <li>They want you to enroll families before your home is approved</li>
                  <li>They cannot clearly explain how CWELCC funding works</li>
                  <li>Home visitor contact is less than monthly in your first year</li>
                  <li>The agency fee is above 15% without clear justification</li>
                </ul>
              </Callout>
            </div>
          </div>

          {/* Step 6 */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-5">
              <StepNumber n={6} />
              <h3 className="font-display font-medium text-forest-green" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
                The Application Process
              </h3>
            </div>
            <div className="pl-14">
              <div className="space-y-4 mb-6">
                {[
                  {
                    phase: 'Phase 1: Agency Onboarding',
                    timeline: '2 to 8 weeks',
                    steps: 'Initial meeting, certifications review, preliminary home assessment, complete agency-required training.',
                  },
                  {
                    phase: 'Phase 2: Ministry Application',
                    timeline: 'Submitted by your agency',
                    steps: 'Documents submitted include: personal information and home address, proposed capacity, floor plan/description of childcare spaces, emergency and evacuation plan, policies (nutrition, illness, rest, screen time, prohibited practices), proof of certifications.',
                  },
                  {
                    phase: 'Phase 3: Inspections',
                    timeline: 'Scheduled by Ministry',
                    steps: 'Ministry assigns a Program Advisor. Includes home visitor inspection, health inspection (local Public Health Unit), fire safety inspection (local fire department).',
                  },
                  {
                    phase: 'Phase 4: Licence Issued',
                    timeline: 'Ready to open',
                    steps: 'Licence posted visibly in your home. Required before you accept fees.',
                  },
                ].map((phase) => (
                  <div key={phase.phase} className="bg-white rounded-xl p-5 border border-[rgba(47,74,58,0.1)]">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <p className="text-[14px] font-semibold text-dark-text">{phase.phase}</p>
                      <span className="text-[11px] text-dark-text/40 whitespace-nowrap flex-shrink-0">{phase.timeline}</span>
                    </div>
                    <p className="text-[13px] text-dark-text/65 leading-relaxed">{phase.steps}</p>
                  </div>
                ))}
              </div>

              <div className="bg-forest-green/8 rounded-xl p-5">
                <p className="text-[13px] font-semibold text-forest-green mb-1">Total timeline</p>
                <p className="text-[13px] text-dark-text/70 mb-4">3 to 6 months from first agency contact to licence in hand.</p>
                <p className="text-[12px] font-semibold text-dark-text/40 uppercase tracking-[0.1em] mb-2">Key links:</p>
                <ul className="space-y-1 text-[13px] text-dark-text/65">
                  <li><a href="https://www.ontario.ca/page/home-child-care-licensing-manual" target="_blank" rel="noopener noreferrer" className="text-forest-green hover:underline">ontario.ca/page/home-child-care-licensing-manual</a></li>
                  <li><a href="https://www.ontario.ca/page/apply-or-renew-child-care-licence" target="_blank" rel="noopener noreferrer" className="text-forest-green hover:underline">ontario.ca/page/apply-or-renew-child-care-licence</a></li>
                  <li>Ministry childcare helpline: 1-877-510-5333 | <a href="mailto:childcare_ontario@ontario.ca" className="text-forest-green hover:underline">childcare_ontario@ontario.ca</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 7 */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-5">
              <StepNumber n={7} />
              <h3 className="font-display font-medium text-forest-green" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
                Apply for CWELCC Funding
              </h3>
            </div>
            <div className="pl-14">
              <p className="text-[14px] text-dark-text/70 leading-relaxed mb-4">
                Once licensed and contracted to an agency:
              </p>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-5 border border-[rgba(47,74,58,0.1)]">
                  <p className="text-[14px] font-semibold text-dark-text mb-1">CWELCC Start-Up Grant</p>
                  <p className="text-[13px] text-dark-text/65 mb-2">Up to $1,200 per new licensed space, maximum $7,200 per provider. Applied through your agency, then your local CMSM/DSSAB.</p>
                  <a href="https://www.ontario.ca/page/service-system-managers-child-care-and-early-years-programs" target="_blank" rel="noopener noreferrer" className="text-[12px] text-forest-green hover:underline">Find your CMSM</a>
                </div>
                <div className="bg-white rounded-xl p-5 border border-[rgba(47,74,58,0.1)]">
                  <p className="text-[14px] font-semibold text-dark-text mb-1">Ongoing Operating Funding</p>
                  <p className="text-[13px] text-dark-text/65">Monthly subsidy applied through your agency and CMSM after opening.</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-[rgba(47,74,58,0.1)]">
                  <p className="text-[14px] font-semibold text-dark-text mb-1">Wage Enhancement Grant (if you hold RECE)</p>
                  <p className="text-[13px] text-dark-text/65">$1/hr annual increase through 2026. Your agency coordinates this application.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 8: Startup Cost Estimate */}
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-5">
              <StepNumber n={8} />
              <h3 className="font-display font-medium text-forest-green" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
                Startup Cost Estimate (Ontario, Home Daycare)
              </h3>
            </div>
            <div className="pl-14">
              <div className="rounded-xl overflow-hidden border border-[rgba(47,74,58,0.12)]">
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
                <p className="text-[13px] text-dark-text/70">
                  CWELCC start-up grants (up to $7,200) can offset a significant portion of these startup costs.
                </p>
              </Callout>
            </div>
          </div>
        </div>
      </section>

      {/* Section C: British Columbia */}
      <section className="bg-white py-14 md:py-18 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Section C</SectionLabel>
          <h2
            className="font-display font-medium text-forest-green leading-[1.08] mb-6"
            style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}
          >
            British Columbia
          </h2>
          <p className="text-[15px] text-dark-text/70 leading-relaxed mb-5">
            In BC, home-based childcare is called Family Child Care. The key difference from Ontario: in BC, you apply directly to your local health authority's Community Care Facilities Licensing (CCFL) office, not through an agency. A licence is required when you care for 3 or more children who are not related to you. Maximum group size is 7 children.
          </p>
          <p className="text-[14px] font-semibold text-dark-text mb-3">Contact your regional health authority first:</p>
          <ul className="space-y-2 mb-6 text-[14px] text-dark-text/70">
            <li>Fraser Health: <a href="https://www.fraserhealth.ca" target="_blank" rel="noopener noreferrer" className="text-forest-green hover:underline">fraserhealth.ca</a></li>
            <li>Interior Health: <a href="https://www.interiorhealth.ca" target="_blank" rel="noopener noreferrer" className="text-forest-green hover:underline">interiorhealth.ca</a></li>
            <li>Vancouver Coastal Health: <a href="https://www.vch.ca" target="_blank" rel="noopener noreferrer" className="text-forest-green hover:underline">vch.ca</a></li>
            <li>Island Health: <a href="https://www.islandhealth.ca/our-services/community-care-facilities-licensing" target="_blank" rel="noopener noreferrer" className="text-forest-green hover:underline">islandhealth.ca/our-services/community-care-facilities-licensing</a></li>
            <li>Northern Health: <a href="https://www.northernhealth.ca" target="_blank" rel="noopener noreferrer" className="text-forest-green hover:underline">northernhealth.ca</a></li>
          </ul>
          <ul className="space-y-2 text-[14px] text-dark-text/70">
            <li>BC ECE Registry: <a href="https://www.eceregistry.gov.bc.ca" target="_blank" rel="noopener noreferrer" className="text-forest-green hover:underline">eceregistry.gov.bc.ca</a></li>
            <li>My ChildCareBC Services (CCOF plus CCFRI funding): <a href="https://www.mychildcarebc.ca" target="_blank" rel="noopener noreferrer" className="text-forest-green hover:underline">mychildcarebc.ca</a></li>
          </ul>
        </div>
      </section>

      {/* Section D: Quebec */}
      <section className="bg-cream py-14 md:py-18 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Section D</SectionLabel>
          <h2
            className="font-display font-medium text-forest-green leading-[1.08] mb-6"
            style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}
          >
            Quebec
          </h2>
          <p className="text-[15px] text-dark-text/70 leading-relaxed mb-5">
            In Quebec, home childcare is called service de garde en milieu familial. Providers work through a Bureau coordonnateur (coordinating office). Capacity: up to 6 children (under age 12), including your own. Parent fee (2026): $9.65/day.
          </p>
          <Callout variant="warning">
            <p className="text-[14px] font-semibold text-terracotta mb-2">Important 2026 change:</p>
            <p className="text-[14px] text-dark-text/75 leading-relaxed">
              From September 1, 2026, unrecognized home childcare providers wishing to care for more than 2 children will require a permit from the Ministere de la Famille. If you are currently caring for 2 to 6 children without recognition, you need to begin this process now.
            </p>
          </Callout>
          <p className="text-[14px] text-dark-text/70 mt-4">
            Find your coordinating office: <a href="https://www.mfa.gouv.qc.ca" target="_blank" rel="noopener noreferrer" className="text-forest-green hover:underline">mfa.gouv.qc.ca</a>
          </p>
        </div>
      </section>

      {/* Section E: Insurance */}
      <section className="bg-white py-14 md:py-18 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Section E</SectionLabel>
          <div
            className="rounded-2xl p-7 border"
            style={{ background: 'rgba(226,132,95,0.06)', borderColor: 'rgba(226,132,95,0.3)' }}
          >
            <h2
              className="font-display font-medium text-terracotta leading-[1.08] mb-4"
              style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}
            >
              Do not open your doors without the right insurance.
            </h2>
            <p className="text-[15px] text-dark-text/70 leading-relaxed mb-5">
              Every licensed home daycare provider needs childcare-specific liability insurance. Your personal homeowner's insurance does NOT cover childcare liability, and most policies will void your coverage if you run a business from your home without notifying them.
            </p>
            <p className="text-[14px] font-semibold text-dark-text mb-3">What you need:</p>
            <ul className="space-y-3 mb-5">
              <CheckItem>Commercial General Liability Insurance (CGL): Minimum $2,000,000 per occurrence (most agencies require this)</CheckItem>
              <CheckItem>Many agencies have group insurance arrangements for their home providers. Ask your agency first.</CheckItem>
            </ul>
            <p className="text-[14px] font-semibold text-dark-text mb-2">Independent brokers who specialize in childcare:</p>
            <ul className="space-y-1 text-[14px] text-dark-text/70 mb-5">
              <li>Morison Insurance: <a href="https://www.morisoninsurance.ca" target="_blank" rel="noopener noreferrer" className="text-forest-green hover:underline">morisoninsurance.ca</a></li>
              <li>BrokerLink: <a href="https://www.brokerlink.ca" target="_blank" rel="noopener noreferrer" className="text-forest-green hover:underline">brokerlink.ca</a></li>
              <li>Westland Insurance (BC): <a href="https://www.westlandinsurance.ca" target="_blank" rel="noopener noreferrer" className="text-forest-green hover:underline">westlandinsurance.ca</a></li>
            </ul>
            <p className="text-[14px] text-dark-text/70 mb-4">Annual cost: approximately $600 to $1,200/year</p>
            <Callout variant="warning">
              <p className="text-[13px] font-semibold text-terracotta mb-1">Before you open:</p>
              <p className="text-[13px] text-dark-text/70">
                Inform your home or renters insurance provider that you are operating a licensed childcare business from your home.
              </p>
            </Callout>
          </div>
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
              heading="Get the home daycare checklist as a PDF"
              subheading="A complete licensing checklist, cost estimate, and step-by-step guide. Free."
              source="seeds-home-daycare"
            />
          </div>
        </div>
      </section>
    </>
  )
}
