import type { Metadata } from 'next'
import { altEn } from '@/lib/seo'
import Link from 'next/link'
import EmailCapture from '@/components/email-capture'

export const metadata: Metadata = {
  title: 'Canadian Childcare Licensing Checklist by Province (2026) | Sprout & Vine Care',
  description:
    'Province-by-province licensing checklists for Canadian childcare operators. Ontario CCEYA staff ratios, BC CCALA requirements, and more.',
  alternates: altEn('/resources/licensing-checklist', '/fr/resources/liste-verification-licences'),
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-3">
      {children}
    </p>
  )
}

function ArticleH2({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2
      id={id}
      className="font-display font-medium text-forest-green leading-[1.08] mt-14 mb-5 pt-10 border-t border-[rgba(47,74,58,0.1)]"
      style={{ fontSize: 'clamp(26px, 3.5vw, 36px)' }}
    >
      {children}
    </h2>
  )
}

function ArticleH3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-display font-medium text-forest-green leading-[1.1] mt-10 mb-4" style={{ fontSize: 'clamp(20px, 2.5vw, 26px)' }}>
      {children}
    </h3>
  )
}

function ArticleP({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[16px] text-dark-text/75 leading-[1.8] mb-5">
      {children}
    </p>
  )
}

function ArticleUL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="mb-6 space-y-2.5">
      {children}
    </ul>
  )
}

function ArticleLI({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-[7px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-sage-green" aria-hidden="true" />
      <span className="text-[16px] text-dark-text/75 leading-[1.8]">{children}</span>
    </li>
  )
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-7 rounded-xl bg-terracotta/10 border-l-4 border-terracotta px-6 py-5">
      <p className="text-[12px] uppercase tracking-[0.12em] font-semibold text-terracotta mb-2">Important</p>
      <div className="text-[15px] text-dark-text/80 leading-[1.75]">{children}</div>
    </div>
  )
}

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-2 text-[14px] mb-1.5">
      <span className="font-semibold text-dark-text/60 flex-shrink-0">{label}:</span>
      <span className="text-dark-text/70">{value}</span>
    </div>
  )
}

function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto my-7 rounded-xl border border-[rgba(47,74,58,0.12)]" style={{ boxShadow: '0 2px 12px rgba(47,74,58,0.05)' }}>
      <table className="min-w-full text-[14px]">
        <thead>
          <tr className="bg-forest-green">
            {headers.map((h) => (
              <th
                key={h}
                scope="col"
                className="text-left px-5 py-3.5 text-cream text-[11px] uppercase tracking-[0.1em] font-semibold whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}>
              {row.map((cell, j) => (
                <td key={j} className="px-5 py-3.5 text-dark-text/75 leading-relaxed align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ChecklistItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3.5">
      {/* Checkbox SVG icon */}
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        aria-hidden="true"
        className="flex-shrink-0 mt-0.5"
      >
        <rect x="1" y="1" width="16" height="16" rx="4" stroke="#2F4A3A" strokeWidth="1.5" fill="none" />
        <rect x="3.5" y="3.5" width="11" height="11" rx="2.5" fill="#2F4A3A" fillOpacity="0.06" />
      </svg>
      <span className="text-[15px] text-dark-text/75 leading-[1.75]">{children}</span>
    </li>
  )
}

function ChecklistGroup({ children }: { children: React.ReactNode }) {
  return (
    <ul className="space-y-3 my-6">
      {children}
    </ul>
  )
}

function ProvinceCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-cream/40 rounded-xl border border-[rgba(47,74,58,0.1)] px-6 py-5 my-6">
      {children}
    </div>
  )
}

export default function LicensingChecklistPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest-green py-16 md:py-24 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>Licensing Checklist</SectionLabel>
          <h1
            className="font-display font-medium text-cream leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(34px, 5vw, 58px)' }}
          >
            Canadian Childcare Licensing Checklist (2026)
          </h1>
          <p className="text-[16px] text-cream/65 leading-relaxed max-w-2xl">
            Use this checklist as a starting point. Requirements are set by your provincial government and can change. Always verify with your provincial licensing authority.
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-white py-14 md:py-20 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">

          {/* Ontario */}
          <ArticleH2 id="ontario">Ontario: Child Care and Early Years Act, 2014 (CCEYA)</ArticleH2>

          <ProvinceCard>
            <InfoBlock label="Governing legislation" value="Child Care and Early Years Act, 2014 (CCEYA)" />
            <InfoBlock label="Regulator" value="Ontario Ministry of Education" />
            <InfoBlock label="Helpdesk" value="childcare_ontario@ontario.ca" />
          </ProvinceCard>

          <ArticleH3>Staff-to-Child Ratios (Ontario, O. Reg. 137/15)</ArticleH3>
          <DataTable
            headers={['Age Group', 'Age Range', 'Min. Staff:Child Ratio', 'Max Group Size']}
            rows={[
              ['Infants', '0-18 months', '1:3', '10'],
              ['Toddlers', '18 months-2.5 years', '1:5', '15'],
              ['Preschool', '2.5-5 years', '1:8', '24'],
              ['Kindergarten', '44 months-7 years', '1:13', '26'],
              ['Primary/Junior School Age', '5.5-13 years', '1:15', '30'],
            ]}
          />
          <Callout>
            Infant ratios cannot be reduced at any time. Reduced ratios for other age groups are permitted only in limited circumstances under the CCEYA.
          </Callout>

          <ArticleH3>Staff Qualifications</ArticleH3>
          <ArticleUL>
            <ArticleLI><strong className="font-semibold text-dark-text">Program Supervisor:</strong> Must hold a 2-year ECE diploma (RECE), minimum 2 years of experience in licensed childcare, and have Ministry director approval</ArticleLI>
            <ArticleLI><strong className="font-semibold text-dark-text">All staff counted in ratios:</strong> Must be a Registered Early Childhood Educator (RECE) or have Ministry director approval as a qualified employee</ArticleLI>
            <ArticleLI><strong className="font-semibold text-dark-text">First Aid/CPR:</strong> All staff counted in ratios must have valid Standard First Aid certification including infant and child CPR (WSIB-recognized program). New staff have up to 3 months to obtain certification</ArticleLI>
            <ArticleLI><strong className="font-semibold text-dark-text">Criminal Reference Check:</strong> All staff, volunteers, and students must have a criminal reference check including vulnerable sector screening, renewed every 5 years</ArticleLI>
            <ArticleLI><strong className="font-semibold text-dark-text">Offence Declarations:</strong> Required every year that a vulnerable sector check is not required</ArticleLI>
          </ArticleUL>

          <ArticleH3>Physical Space Requirements</ArticleH3>
          <ArticleUL>
            <ArticleLI>Minimum 2.8 m2 of unobstructed indoor play space per child</ArticleLI>
            <ArticleLI>Outdoor play area proportional to licensed capacity</ArticleLI>
            <ArticleLI>Separate play activity rooms required for infant, toddler, and preschool groups</ArticleLI>
            <ArticleLI>Separate spaces for food preparation and storage</ArticleLI>
            <ArticleLI>Age-appropriate equipment required in all areas</ArticleLI>
          </ArticleUL>

          <ArticleH3>Licensing Checklist: Centre Application</ArticleH3>
          <ChecklistGroup>
            <ChecklistItem>Apply to the Ministry of Education for a licence under the CCEYA</ChecklistItem>
            <ChecklistItem>Submit floor plan showing room dimensions and capacity calculations (2.8 m2/child)</ChecklistItem>
            <ChecklistItem>Fire safety certificate</ChecklistItem>
            <ChecklistItem>Public health inspection clearance</ChecklistItem>
            <ChecklistItem>Building permit (if applicable: renovations, new build)</ChecklistItem>
            <ChecklistItem>Criminal reference checks (including vulnerable sector screening) for all staff</ChecklistItem>
            <ChecklistItem>Proof of supervisor qualifications and Ministry director approval</ChecklistItem>
            <ChecklistItem>Policies and procedures manual (prohibited practices, illness, nutrition, etc.)</ChecklistItem>
            <ChecklistItem>Emergency and evacuation plan</ChecklistItem>
            <ChecklistItem>Parent handbook including CWELCC participation status</ChecklistItem>
            <ChecklistItem>Insurance documentation</ChecklistItem>
            <ChecklistItem>Program statement aligned with Minister's Policy Statement on Programming and Pedagogy</ChecklistItem>
          </ChecklistGroup>

          <ArticleH3>Ongoing Compliance Requirements</ArticleH3>
          <ChecklistGroup>
            <ChecklistItem>Maintain required staff-to-child ratios at all times</ChecklistItem>
            <ChecklistItem>Post licensing certificate visibly in the centre</ChecklistItem>
            <ChecklistItem>Record for every child on file (section 72 of O. Reg. 137/15)</ChecklistItem>
            <ChecklistItem>Daily attendance records</ChecklistItem>
            <ChecklistItem>Staff training records and ongoing professional development policy</ChecklistItem>
            <ChecklistItem>Annual review of policies and procedures</ChecklistItem>
            <ChecklistItem>Renewal of vulnerable sector checks every 5 years per staff member</ChecklistItem>
            <ChecklistItem>Annual offence declarations where vulnerable sector check is not renewed</ChecklistItem>
            <ChecklistItem>Ministry inspection cooperation</ChecklistItem>
          </ChecklistGroup>

          <ArticleH3>If Enrolled in CWELCC (Ontario)</ArticleH3>
          <ChecklistGroup>
            <ChecklistItem>Maintain fees at or below $22/day (as of January 1, 2025)</ChecklistItem>
            <ChecklistItem>CWELCC funding agreement on file and available to program advisor</ChecklistItem>
            <ChecklistItem>Parent handbook states CWELCC participation status</ChecklistItem>
            <ChecklistItem>30-day fee change notice process documented</ChecklistItem>
            <ChecklistItem>RECE and supervisor wage enhancement compliance tracked</ChecklistItem>
            <ChecklistItem>Fee structure set per Ontario Regulation funding table</ChecklistItem>
          </ChecklistGroup>

          {/* British Columbia */}
          <ArticleH2 id="bc">British Columbia: Community Care and Assisted Living Act (CCALA)</ArticleH2>

          <ProvinceCard>
            <InfoBlock label="Governing legislation" value="Community Care and Assisted Living Act; Child Care Licensing Regulation" />
            <InfoBlock label="Regulator" value="Ministry of Children and Family Development (MCFD)" />
          </ProvinceCard>

          <ArticleH3>Staff-to-Child Ratios (BC)</ArticleH3>
          <DataTable
            headers={['Age Group', 'Age Range', 'Min. Staff:Child Ratio', 'Max Group Size']}
            rows={[
              ['Infants', 'Under 12 months', '1:4', '12'],
              ['Toddlers', '12-36 months', '1:4', '12'],
              ['Preschool', '3-5 years', '1:8', '25'],
              ['School Age', '5+ years', '1:10', '20'],
            ]}
          />

          <ArticleH3>Licensing Checklist: BC Centre Application</ArticleH3>
          <ChecklistGroup>
            <ChecklistItem>Apply for a facility licence under the Community Care and Assisted Living Act</ChecklistItem>
            <ChecklistItem>Submit facility plan showing play space and ratio compliance</ChecklistItem>
            <ChecklistItem>Health authority inspection and approval</ChecklistItem>
            <ChecklistItem>Fire safety inspection and clearance</ChecklistItem>
            <ChecklistItem>Criminal record check for all staff and operators (MCFD Criminal Records Review)</ChecklistItem>
            <ChecklistItem>Qualified staff (ECE Certificate holders for funded programs)</ChecklistItem>
            <ChecklistItem>Policies: nutrition, illness, discipline, emergency procedures</ChecklistItem>
            <ChecklistItem>Post licence visibly at facility</ChecklistItem>
            <ChecklistItem>Apply for Child Care Operating Funding (CCOF) if seeking provincial funding</ChecklistItem>
            <ChecklistItem>Opt in to CCFRI (fee reduction) and/or ECE Wage Enhancement through CCOF application</ChecklistItem>
          </ChecklistGroup>

          <ArticleH3>Ongoing Compliance (BC)</ArticleH3>
          <ChecklistGroup>
            <ChecklistItem>Maintain CCALA Facility Licence (required for CCOF base funding)</ChecklistItem>
            <ChecklistItem>Annual renewal of Child Care Operating Funding agreement (expires March 31)</ChecklistItem>
            <ChecklistItem>Report changes to enrollment, hours, or programs via Change Notification Form</ChecklistItem>
            <ChecklistItem>Maintain staff wage, benefit, and hours obligations if in fee reduction program</ChecklistItem>
            <ChecklistItem>Ensure 9.5-hour minimum operating day if charging optional extended-hours fees (April 2026 onward)</ChecklistItem>
          </ChecklistGroup>

          {/* Alberta */}
          <ArticleH2 id="alberta">Alberta</ArticleH2>

          <ProvinceCard>
            <InfoBlock label="Governing legislation" value="Child Care Licensing Act (2025); Child Care Licensing Regulation" />
            <InfoBlock label="Regulator" value="Alberta Ministry of Education" />
          </ProvinceCard>

          <ArticleP>Key Requirements:</ArticleP>
          <ArticleUL>
            <ArticleLI>Director and lead staff: Level 3 Child Development Supervisor certificate or equivalent</ArticleLI>
            <ArticleLI>Staff ratios: 1:4 (infants/toddlers), 1:8 (preschool), 1:10 (school age)</ArticleLI>
            <ArticleLI>Criminal record and intervention checks for all staff</ArticleLI>
            <ArticleLI>Annual licence renewal</ArticleLI>
          </ArticleUL>

          {/* Manitoba */}
          <ArticleH2 id="manitoba">Manitoba</ArticleH2>

          <ProvinceCard>
            <InfoBlock label="Governing legislation" value="Community Child Care Standards Act" />
            <InfoBlock label="Regulator" value="Manitoba Families" />
          </ProvinceCard>

          <ArticleP>Key Requirements:</ArticleP>
          <ArticleUL>
            <ArticleLI>Child Care Coordinator: ECE Level II or III</ArticleLI>
            <ArticleLI>Ratios: 1:4 (infants), 1:4 (toddlers), 1:8 (preschool), 1:15 (school age)</ArticleLI>
            <ArticleLI>Child Abuse Registry check and Criminal Record check for all staff</ArticleLI>
            <ArticleLI>Annual licensing</ArticleLI>
          </ArticleUL>

          {/* Quebec */}
          <ArticleH2 id="quebec">Quebec: CPE and Subsidized Daycare System</ArticleH2>

          <ProvinceCard>
            <InfoBlock label="Governing legislation" value="Act respecting educational childcare services" />
            <InfoBlock label="Regulator" value="Ministere de la Famille du Quebec" />
          </ProvinceCard>

          <ArticleH3>Why Quebec Is Different</ArticleH3>
          <ArticleP>
            Quebec is excluded from the federal CWELCC agreement because it already operates Canada's most established subsidized childcare system, one that predates CWELCC by decades. For operators in Quebec, compliance means understanding the Ministere de la Famille's framework, not CWELCC.
          </ArticleP>

          <ArticleH3>Types of Quebec Childcare</ArticleH3>
          <DataTable
            headers={['Type', 'French Name', 'Operator', 'Funding']}
            rows={[
              ['Childcare centre', 'Centre de la petite enfance (CPE)', 'Non-profit, parent-governed', 'Subsidized'],
              ['Subsidized daycare', 'Garderie subventionnee', 'Private', 'Subsidized'],
              ['Non-subsidized daycare', 'Garderie non-subventionnee', 'Private', 'Market rate'],
              ['Home childcare', 'Service de garde en milieu familial', 'Independent provider', 'Subsidized (if recognized)'],
            ]}
          />

          <ArticleH3>Parent Fees (Contribution Reduite, Indexed Annually)</ArticleH3>
          <DataTable
            headers={['Year', 'Daily Reduced Contribution']}
            rows={[
              ['2024', '$9.10/day'],
              ['2025', '$9.35/day'],
              ['2026', '$9.65/day'],
            ]}
          />

          <ArticleH3>CPE Governance</ArticleH3>
          <ArticleP>
            CPEs are non-profit corporations. Governance structure is legally required:
          </ArticleP>
          <ArticleUL>
            <ArticleLI><strong className="font-semibold text-dark-text">Parent-majority board:</strong> The majority of board members must be parents with children currently enrolled at the CPE</ArticleLI>
            <ArticleLI><strong className="font-semibold text-dark-text">Community representative:</strong> At least one non-parent community member on the board</ArticleLI>
            <ArticleLI><strong className="font-semibold text-dark-text">General Manager:</strong> Must be qualified, Ministere-approved, and reports to the board</ArticleLI>
            <ArticleLI>Members elected at the general assembly</ArticleLI>
          </ArticleUL>

          <ArticleH3>Staff Qualifications</ArticleH3>
          <ArticleUL>
            <ArticleLI>2/3 of all direct-care staff must hold either a 3-year DEC (Diplome d'etudes collegiales) in early childhood education, or a 1-year AEC (Attestation d'etudes collegiales) plus 3 years of experience</ArticleLI>
            <ArticleLI>Remaining 1/3: No required educational credential currently mandated</ArticleLI>
            <ArticleLI>Background checks: Police background check required for all staff</ArticleLI>
          </ArticleUL>

          <ArticleH3>Staff-to-Child Ratios (Quebec)</ArticleH3>
          <DataTable
            headers={['Age Group', 'Age Range', 'Staff:Child Ratio']}
            rows={[
              ['Infants (poupons)', '0-18 months', '1:5'],
              ['Children', '18 months-5 years', '1:8'],
            ]}
          />

          <ArticleH3>Licensing Checklist: Quebec CPE/Garderie</ArticleH3>
          <ChecklistGroup>
            <ChecklistItem>Obtain operating permit from Ministere de la Famille</ChecklistItem>
            <ChecklistItem>Obtain municipal occupancy permit from city/borough</ChecklistItem>
            <ChecklistItem>Establish non-profit corporation with parent-majority board (CPEs only)</ChecklistItem>
            <ChecklistItem>Hire qualified General Manager (DEC-level or equivalent, Ministere approval)</ChecklistItem>
            <ChecklistItem>Ensure 2/3 of direct-care staff hold DEC or AEC plus 3 years experience</ChecklistItem>
            <ChecklistItem>Complete police background checks for all staff</ChecklistItem>
            <ChecklistItem>Meet physical space requirements: 4 m2/child (infants); age-group room separation</ChecklistItem>
            <ChecklistItem>Obtain umbrella insurance tailored for Quebec childcare operations</ChecklistItem>
            <ChecklistItem>Register facility on Ministere de la Famille childcare locator</ChecklistItem>
            <ChecklistItem>Execute annual funding agreement (regles budgetaires) with Ministere</ChecklistItem>
            <ChecklistItem>Set parent contribution at provincial reduced rate ($9.65/day for 2026)</ChecklistItem>
            <ChecklistItem>Issue Releve 24 receipts to parents</ChecklistItem>
            <ChecklistItem>Document inclusion supports and apply for inclusion funding where applicable</ChecklistItem>
          </ChecklistGroup>

          {/* Sprout and Vine support */}
          <ArticleH2>How Sprout and Vine Supports Compliance</ArticleH2>
          <ArticleP>
            Sprout and Vine comes pre-loaded with:
          </ArticleP>
          <ArticleUL>
            <ArticleLI>Province-specific ratio tracking and real-time alerts when ratios are at risk</ArticleLI>
            <ArticleLI>Attendance records formatted for provincial inspection requirements</ArticleLI>
            <ArticleLI>CWELCC and CCFRI subsidy tracking built into billing</ArticleLI>
            <ArticleLI>Staff certification tracking with expiry date reminders</ArticleLI>
            <ArticleLI>Documentation storage for licensing records</ArticleLI>
          </ArticleUL>

          {/* Sources */}
          <div className="mt-14 pt-8 border-t border-[rgba(47,74,58,0.1)]">
            <p className="text-[13px] text-dark-text/45 leading-relaxed mb-3">
              <strong className="font-semibold text-dark-text/55">Sources:</strong> Ontario Ministry of Education (ontario.ca), BC Ministry of Children and Family Development (gov.bc.ca), Alberta Ministry of Education, Manitoba Families, Ministere de la Famille du Quebec. Last reviewed May 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Email capture CTA */}
      <section className="bg-forest-green py-16 px-5 md:px-8">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className="font-display font-medium text-cream leading-[1.08] mb-5"
              style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}
            >
              Get your province's checklist as a PDF
            </h2>
            <p className="text-cream/60 text-[15px] leading-relaxed">
              We will send you a printable PDF version of the checklist for your province, plus updates when requirements change.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-7">
            <EmailCapture
              heading="Get your province's checklist as a PDF"
              subheading="Printable PDF plus email updates when requirements change."
              source="licensing-checklist"
            />
          </div>
        </div>
      </section>

      {/* Back to resources */}
      <section className="bg-cream py-8 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-forest-green hover:underline underline-offset-4"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Resources
          </Link>
        </div>
      </section>
    </>
  )
}
