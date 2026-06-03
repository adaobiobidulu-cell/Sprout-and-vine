import type { Metadata } from 'next'
import Link from 'next/link'
import EmailCapture from '@/components/email-capture'

export const metadata: Metadata = {
  title: 'Startup Funding for Canadian Childcare Operators (2026) | Sprout & Vine',
  description:
    'Every grant, subsidy, and financing source available to new childcare operators in Canada. CWELCC capital grants, provincial programs, BDC loans, and more.',
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

const fundingSources = [
  {
    category: 'CWELCC Capital Grants',
    badge: 'Federal-Provincial',
    badgeColor: '#2F4A3A',
    items: [
      {
        name: 'Ontario: CWELCC Start-Up Grant (Home Daycare)',
        amount: 'Up to $7,200',
        desc: 'Available to new licensed home daycare providers. Up to $1,200 per new licensed space (maximum 6 spaces). Applied through your home child care agency and local CMSM/DSSAB.',
        link: 'https://www.ontario.ca/page/service-system-managers-child-care-and-early-years-programs',
        linkText: 'Find your CMSM',
        timing: 'After licensing',
      },
      {
        name: 'Ontario: CWELCC Capital Grant (New Centres)',
        amount: 'Up to $350,000 per 20 spaces',
        desc: 'Major capital investment for new centre construction or renovation. Highly competitive. Priority given to areas with documented waitlist pressures. Applied through your local CMSM.',
        link: 'https://www.ontario.ca/page/service-system-managers-child-care-and-early-years-programs',
        linkText: 'Find your CMSM',
        timing: 'Before opening (application required)',
      },
      {
        name: 'BC: CCOF (Child Care Operating Funding)',
        amount: 'Variable per space',
        desc: 'BC\'s primary operating subsidy for licensed childcare providers. Applied through the ChildCareBC funding system. Includes components for wages, benefits, and operating costs.',
        link: 'https://www.childcarebc.ca',
        linkText: 'childcarebc.ca',
        timing: 'After licensing',
      },
      {
        name: 'BC: CCFRI (Child Care Fee Reduction Initiative)',
        amount: 'Up to $900/month per under-3 space',
        desc: 'Reduces the fees you charge to families. You receive the subsidy directly from the province in exchange for capping your parent fees at the approved level.',
        link: 'https://www.childcarebc.ca',
        linkText: 'childcarebc.ca',
        timing: 'Ongoing once enrolled',
      },
    ],
  },
  {
    category: 'Wage and Compensation Grants',
    badge: 'Provincial',
    badgeColor: '#6EB76F',
    items: [
      {
        name: 'Ontario: Wage Enhancement Grant',
        amount: 'Up to $3/hour additional',
        desc: 'Increases wages for RECE-designated ECEs and ECE II staff at CWELCC-enrolled centres. Paid through the operator, not directly to staff. Applied through your CMSM.',
        link: 'https://www.ontario.ca/page/service-system-managers-child-care-and-early-years-programs',
        linkText: 'Find your CMSM',
        timing: 'Ongoing (applied annually)',
      },
      {
        name: 'BC: ECE Wage Enhancement',
        amount: 'Up to $4/hour additional',
        desc: 'Additional wage top-up for eligible ECEs working at CCOF-enrolled facilities. Applied through ChildCareBC system.',
        link: 'https://www.childcarebc.ca',
        linkText: 'childcarebc.ca',
        timing: 'Ongoing once enrolled',
      },
    ],
  },
  {
    category: 'Federal Financing',
    badge: 'Federal',
    badgeColor: '#E2845F',
    items: [
      {
        name: 'BDC Small Business Loans',
        amount: 'Up to $100,000+ (standard)',
        desc: 'The Business Development Bank of Canada offers flexible financing for childcare startups. Childcare is considered an essential service sector by BDC with favorable terms.',
        link: 'https://www.bdc.ca/en/financing/business-loans/small-business-loan',
        linkText: 'bdc.ca',
        timing: 'Application before or during startup',
      },
      {
        name: "Canada Small Business Financing Program (CSBFP)",
        amount: 'Up to $1,000,000',
        desc: 'Government-backed loan program through participating financial institutions. Can finance equipment, leasehold improvements, and real estate. Up to 85% of eligible costs covered.',
        link: 'https://ised-isde.canada.ca/site/canada-small-business-financing-program/en',
        linkText: 'CSBFP program page',
        timing: 'Application through your bank',
      },
      {
        name: 'Women Entrepreneurship Strategy (WES)',
        amount: 'Up to $100,000',
        desc: 'Grants and financing specifically for women-owned businesses. Many childcare operators qualify. Available through regional ecosystem partners.',
        link: 'https://ised-isde.canada.ca/site/women-entrepreneurship-strategy/en',
        linkText: 'WES program page',
        timing: 'Application required',
      },
    ],
  },
  {
    category: 'Municipal and Community Programs',
    badge: 'Local',
    badgeColor: '#AEC1B0',
    items: [
      {
        name: 'Municipal childcare development grants',
        amount: 'Varies widely ($5,000 to $50,000)',
        desc: 'Many Ontario and BC municipalities have their own childcare development funds, particularly for non-profit operators. Contact your municipality\'s social services or housing department.',
        link: '',
        linkText: 'Contact your municipality directly',
        timing: 'Before opening',
      },
      {
        name: 'Community Foundation grants',
        amount: 'Varies ($2,500 to $25,000)',
        desc: 'Local community foundations often fund childcare initiatives as part of their early childhood development priorities. Check the Community Foundations of Canada directory.',
        link: 'https://communityfoundations.ca',
        linkText: 'communityfoundations.ca',
        timing: 'Application required (typically annual cycles)',
      },
    ],
  },
]

export default function FundingGuidePage() {
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
            <span className="text-[13px] text-dark-text/50">Startup Funding Guide</span>
          </div>
          <SectionLabel>Seeds: Funding Guide</SectionLabel>
          <h1
            className="font-display font-medium text-forest-green leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(36px, 5vw, 62px)' }}
          >
            There is more funding available than most operators know about.
          </h1>
          <p className="text-[17px] text-dark-text/65 leading-relaxed mb-4 max-w-2xl">
            CWELCC capital grants, provincial wage supplements, federal business financing, and community grants: this guide covers every funding source available to new Canadian childcare operators.
          </p>
          <p className="text-[12px] text-dark-text/40 border border-[rgba(47,74,58,0.15)] inline-block px-4 py-2 rounded-full">
            Updated May 2026. Verified against federal and provincial sources.
          </p>
        </div>
      </section>

      {/* Key principle */}
      <section className="bg-forest-green py-12 md:py-16 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <p
            className="font-display font-medium text-cream leading-relaxed"
            style={{ fontSize: 'clamp(22px, 3vw, 32px)' }}
          >
            "Apply early, apply often, and never assume you do not qualify. The operators who get funding are the ones who ask."
          </p>
          <p className="text-cream/55 text-[14px] mt-4">The most common mistake: waiting until you are licensed to begin funding applications.</p>
        </div>
      </section>

      {/* Funding sources */}
      <section className="bg-white py-14 md:py-20 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-14">
            {fundingSources.map(category => (
              <div key={category.category}>
                <div className="flex items-center gap-3 mb-7">
                  <h2
                    className="font-display font-medium text-forest-green leading-tight"
                    style={{ fontSize: 'clamp(24px, 3vw, 34px)' }}
                  >
                    {category.category}
                  </h2>
                  <span
                    className="text-[11px] font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full text-white flex-shrink-0"
                    style={{ background: category.badgeColor }}
                  >
                    {category.badge}
                  </span>
                </div>

                <div className="space-y-5">
                  {category.items.map(item => (
                    <div
                      key={item.name}
                      className="rounded-xl border border-[rgba(47,74,58,0.1)] overflow-hidden"
                      style={{ boxShadow: '0 2px 8px rgba(47,74,58,0.04)' }}
                    >
                      <div className="px-6 py-4 bg-cream/50 border-b border-[rgba(47,74,58,0.08)] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <p className="text-[15px] font-semibold text-dark-text">{item.name}</p>
                        <span className="text-[13px] font-semibold text-forest-green whitespace-nowrap">{item.amount}</span>
                      </div>
                      <div className="px-6 py-4">
                        <p className="text-[14px] text-dark-text/70 leading-relaxed mb-3">{item.desc}</p>
                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                          {item.link ? (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[13px] font-medium text-forest-green hover:underline"
                            >
                              {item.linkText} →
                            </a>
                          ) : (
                            <span className="text-[13px] text-dark-text/50 italic">{item.linkText}</span>
                          )}
                          <span className="text-[11px] text-dark-text/40 border border-[rgba(47,74,58,0.15)] px-3 py-1 rounded-full">
                            Timing: {item.timing}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sequencing advice */}
      <section className="bg-cream py-14 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Strategy</SectionLabel>
          <h2
            className="font-display font-medium text-forest-green leading-[1.08] mb-6"
            style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}
          >
            How to sequence your funding applications
          </h2>
          <div className="space-y-4">
            {[
              {
                step: '6 to 12 months before opening',
                actions: [
                  'Contact your local CMSM or DSSAB to introduce yourself and learn what capital funding is available.',
                  'Begin CSBFP loan application through your bank (takes time to process).',
                  'Apply for WES grant if you are a woman-owned business.',
                  'Research municipal grants in your area.',
                ],
              },
              {
                step: '3 to 6 months before opening',
                actions: [
                  'Submit CWELCC capital grant application through your CMSM (requires licence application to be in progress).',
                  'Confirm BDC loan terms if using.',
                  'Apply to community foundation grants.',
                ],
              },
              {
                step: 'After licensing',
                actions: [
                  'Enroll in CWELCC operating funding through your CMSM (Ontario) or ChildCareBC portal (BC).',
                  'Apply for CWELCC start-up grant (home daycare) through your agency.',
                  'Register for wage enhancement programs through your CMSM.',
                ],
              },
            ].map(phase => (
              <div key={phase.step} className="bg-white rounded-xl p-6 border border-[rgba(47,74,58,0.1)]">
                <p className="text-[14px] font-semibold text-forest-green mb-3">{phase.step}</p>
                <ul className="space-y-2">
                  {phase.actions.map(action => (
                    <li key={action} className="flex items-start gap-2.5 text-[14px] text-dark-text/70">
                      <span className="text-sage-green mt-1 flex-shrink-0">›</span>
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Callout variant="warning">
            <p className="text-[14px] font-semibold text-terracotta mb-2">Do not wait until you are open</p>
            <p className="text-[14px] text-dark-text/75">
              Most capital grants require applications to be submitted before construction begins. If you wait until your centre is open, you are not eligible for capital funding. Start the conversation with your CMSM the same week you start looking for a space.
            </p>
          </Callout>
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
              Get updates on childcare funding
            </h2>
            <p className="text-cream/65 text-[15px] leading-relaxed mb-6">
              Funding programs change. We track provincial and federal announcements and notify you when new programs open.
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
              heading="Get notified when funding programs open"
              subheading="We track CWELCC grants, provincial programs, and new federal childcare funding. Free updates."
              source="seeds-funding"
            />
          </div>
        </div>
      </section>
    </>
  )
}
