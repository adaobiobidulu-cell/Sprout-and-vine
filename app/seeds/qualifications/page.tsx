import type { Metadata } from 'next'
import Link from 'next/link'
import EmailCapture from '@/components/email-capture'

export const metadata: Metadata = {
  title: 'ECE Qualifications for Canadian Childcare Operators (2026) | Sprout & Vine',
  description:
    'What qualifications do you need to work in or operate a licensed childcare program in Canada? A province-by-province guide to ECE requirements, RECE registration, and equivalency pathways.',
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

const provinces = [
  {
    province: 'Ontario',
    body: 'College of Early Childhood Educators (CECE)',
    bodyUrl: 'https://www.college-ece.ca',
    designation: 'RECE (Registered Early Childhood Educator)',
    operatorRequirement: 'A licensed childcare centre must have a RECE-designated supervisor on site. Home daycare providers are not required to hold RECE, but it strengthens applications and qualifies for wage grants.',
    staffRequirement: '67% of staff must be RECEs (1 of every 3 staff can be an ECE II under the Child Care and Early Years Act).',
    pathways: [
      '2-year ECE diploma from an Ontario college',
      'International equivalency assessment via College of ECE',
      'Prior learning assessment for experienced non-credentialed workers',
    ],
    cost: '$55 application + $134/year registration',
    link: 'https://www.college-ece.ca/en/Become-a-RECE/Registration-Process',
  },
  {
    province: 'British Columbia',
    body: 'BC ECE Registry',
    bodyUrl: 'https://www.eceregistry.gov.bc.ca',
    designation: 'ECE Certificate (Level 1) or Infant/Toddler Educator (Level 2)',
    operatorRequirement: 'Group Child Care centres require a Responsible Adult who holds at least an ECE Certificate. Infant/Toddler programs require additional Infant/Toddler Educator certification.',
    staffRequirement: '50% of staff on duty at any time must hold an ECE certificate or be enrolled in an ECE program.',
    pathways: [
      '1-year ECE Certificate from a recognized BC institution',
      '2-year ECE Diploma adds Infant/Toddler and/or Special Needs credentials',
      'International equivalency via ECE Registry',
    ],
    cost: '$100 application + $68/year renewal',
    link: 'https://www.eceregistry.gov.bc.ca/CertificationOverview.htm',
  },
  {
    province: 'Alberta',
    body: 'Alberta Child Care Staff Certification',
    bodyUrl: 'https://www.alberta.ca/child-care-staff-certification',
    designation: 'Child Development Worker (CDW) or Child Development Supervisor (CDS)',
    operatorRequirement: 'Each licensed facility must have a program director who holds at minimum a Child Development Supervisor certificate.',
    staffRequirement: 'Day Care requires 1 CDS and 1 CDW for every 6 children. Family Day Home providers need CDW certification or equivalent.',
    pathways: [
      'CDW: Early Childhood Education 1-year certificate from recognized Alberta institution',
      'CDS: 2-year ECE diploma plus supervisory experience',
      'Equivalency application for holders of post-secondary ECE credentials from other provinces',
    ],
    cost: 'Certificate application: $100 to $200',
    link: 'https://www.alberta.ca/child-care-staff-certification.aspx',
  },
  {
    province: 'Quebec',
    body: 'Ministere de la Famille',
    bodyUrl: 'https://www.mfa.gouv.qc.ca',
    designation: 'Educateur/Educatrice en service de garde (ESGE)',
    operatorRequirement: 'CPE (centre de la petite enfance) and subsidized daycares must employ a qualified director with a relevant diploma. Non-profit and CPE operators must meet collective agreement qualifications.',
    staffRequirement: '2 of every 3 staff in CPEs must hold or be in the process of completing a relevant college or university-level diploma.',
    pathways: [
      'DEC (Diploma of College Studies) in Early Childhood Education from a Quebec CEGEP',
      'University degree in Education or a related field with recognized equivalency',
      'Equivalency process for internationally trained educators',
    ],
    cost: 'No central registration body. Qualifications reviewed at hiring by each operator.',
    link: 'https://www.mfa.gouv.qc.ca/fr/services-de-garde/personnel/Pages/qualification.aspx',
  },
  {
    province: 'Manitoba',
    body: 'Child Care Human Resources Sector Council (CCHRSC)',
    bodyUrl: 'https://www.ccsc-cssge.ca',
    designation: 'Child Care Worker (CCA Level 1, 2, or 3)',
    operatorRequirement: 'Child Care Centres require a director who holds at minimum a CCA Level 2 (ECE diploma).',
    staffRequirement: 'One qualified staff member per group required. Requirements vary by facility type.',
    pathways: [
      'CCA Level 1: introductory ECE courses (no formal credential required)',
      'CCA Level 2: 2-year ECE diploma from a Manitoba institution',
      'CCA Level 3: degree-level ECE or Child Studies credential',
    ],
    cost: 'Verification process through Manitoba Child Care Program',
    link: 'https://www.gov.mb.ca/fs/childcare/qualifications.html',
  },
]

export default function QualificationsPage() {
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
            <span className="text-[13px] text-dark-text/50">ECE Qualifications Guide</span>
          </div>
          <SectionLabel>Seeds: Qualifications Guide</SectionLabel>
          <h1
            className="font-display font-medium text-forest-green leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(36px, 5vw, 62px)' }}
          >
            What qualifications do you need to work in Canadian childcare?
          </h1>
          <p className="text-[17px] text-dark-text/65 leading-relaxed mb-4 max-w-2xl">
            Qualifications vary by province. This guide covers what you need to work in and operate a licensed childcare program, broken down by province, with links to every relevant regulatory body.
          </p>
          <p className="text-[12px] text-dark-text/40 border border-[rgba(47,74,58,0.15)] inline-block px-4 py-2 rounded-full">
            Updated May 2026. Verified against provincial ministry sources.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-12 md:py-16 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Why It Matters</SectionLabel>
          <h2
            className="font-display font-medium text-forest-green leading-[1.08] mb-5"
            style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}
          >
            Qualifications unlock everything else.
          </h2>
          <p className="text-[15px] text-dark-text/70 leading-relaxed mb-4">
            In Canada, holding the right ECE credential is not only a legal requirement in many contexts: it also determines your access to CWELCC wage enhancement grants, your ability to serve as a supervisor, and your centre's eligibility for certain funding envelopes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: 'Required for supervisory roles',
                desc: 'You cannot operate a licensed centre or serve as a director without the right credential in most provinces.',
              },
              {
                title: 'Required for wage grants',
                desc: "Ontario's CWELCC Wage Enhancement Grant and similar programs in other provinces require you to hold an ECE designation.",
              },
              {
                title: 'Required for higher ratios',
                desc: 'In BC, your staff qualification level determines how many children you can supervise at one time.',
              },
            ].map(item => (
              <div key={item.title} className="bg-cream rounded-xl p-5">
                <p className="text-[14px] font-semibold text-dark-text mb-2">{item.title}</p>
                <p className="text-[13px] text-dark-text/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Province-by-province */}
      <section className="bg-cream py-14 md:py-20 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>By Province</SectionLabel>
          <h2
            className="font-display font-medium text-forest-green leading-[1.08] mb-10"
            style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}
          >
            ECE Qualifications by Province
          </h2>

          <div className="space-y-8">
            {provinces.map(p => (
              <div
                key={p.province}
                className="bg-white rounded-2xl overflow-hidden border border-[rgba(47,74,58,0.1)]"
                style={{ boxShadow: '0 2px 12px rgba(47,74,58,0.05)' }}
              >
                <div className="bg-forest-green/8 px-7 py-5 border-b border-[rgba(47,74,58,0.1)]">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display font-medium text-forest-green" style={{ fontSize: 'clamp(22px, 2.5vw, 28px)' }}>
                      {p.province}
                    </h3>
                    <a
                      href={p.bodyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[12px] text-forest-green hover:underline flex-shrink-0"
                    >
                      {p.body} →
                    </a>
                  </div>
                  <p className="text-[13px] text-dark-text/55 mt-1">Designation: <span className="text-dark-text/80 font-medium">{p.designation}</span></p>
                </div>
                <div className="px-7 py-6 space-y-5">
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-dark-text/40 mb-2">For Operators</p>
                    <p className="text-[14px] text-dark-text/70 leading-relaxed">{p.operatorRequirement}</p>
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-dark-text/40 mb-2">Staff Requirements</p>
                    <p className="text-[14px] text-dark-text/70 leading-relaxed">{p.staffRequirement}</p>
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-dark-text/40 mb-2">Pathways</p>
                    <ul className="space-y-1.5">
                      {p.pathways.map(path => (
                        <li key={path} className="flex items-start gap-2">
                          <span className="text-sage-green mt-1 flex-shrink-0">›</span>
                          <span className="text-[14px] text-dark-text/70">{path}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-dark-text/40 mb-1">Registration Cost</p>
                      <p className="text-[13px] text-dark-text/70">{p.cost}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-[13px] font-medium text-forest-green border border-forest-green/30 px-4 py-2 rounded-lg hover:bg-forest-green/5 transition-colors"
                      >
                        Official pathway info →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International credentials */}
      <section className="bg-white py-14 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>International Credentials</SectionLabel>
          <h2
            className="font-display font-medium text-forest-green leading-[1.08] mb-5"
            style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}
          >
            Internationally trained educators
          </h2>
          <p className="text-[15px] text-dark-text/70 leading-relaxed mb-5">
            If you trained as an educator outside Canada, you may be eligible for credential recognition without starting over. The process varies by province:
          </p>
          <div className="space-y-4">
            {[
              {
                province: 'Ontario',
                detail: 'Apply to the College of Early Childhood Educators for a credential recognition assessment. You will be assessed against Ontario ECE program standards. Bridging courses may be required.',
                link: 'https://www.college-ece.ca/en/Become-a-RECE/Apply-for-Registration/Internationally-trained-educators',
              },
              {
                province: 'British Columbia',
                detail: 'Apply to the BC ECE Registry for a credential review. BC assesses international credentials against its Certificate standards. You may need to complete additional coursework or practicum hours.',
                link: 'https://www.eceregistry.gov.bc.ca/InternationallyTrainedApplicants.htm',
              },
              {
                province: 'All provinces',
                detail: 'The Child Care Human Resources Sector Council (CCHRSC) publishes a national guide on credential recognition pathways for internationally trained ECEs.',
                link: 'https://www.ccsc-cssge.ca',
              },
            ].map(item => (
              <div key={item.province} className="rounded-xl p-5 bg-cream border border-[rgba(47,74,58,0.1)]">
                <p className="text-[14px] font-semibold text-dark-text mb-2">{item.province}</p>
                <p className="text-[14px] text-dark-text/70 leading-relaxed mb-3">{item.detail}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-[13px] text-forest-green hover:underline">
                  Official information →
                </a>
              </div>
            ))}
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
              Ready to take the next step?
            </h2>
            <p className="text-cream/65 text-[15px] leading-relaxed mb-6">
              Once you have your qualifications, Sprout and Vine gives you the platform to run a compliant, professional childcare program.
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
              heading="Get updates on ECE qualifications"
              subheading="We track changes to provincial qualification requirements and send updates when things change."
              source="seeds-qualifications"
            />
          </div>
        </div>
      </section>
    </>
  )
}
