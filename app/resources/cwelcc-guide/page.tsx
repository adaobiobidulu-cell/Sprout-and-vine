import type { Metadata } from 'next'
import { altEn } from '@/lib/seo'
import Link from 'next/link'
import EmailCapture from '@/components/email-capture'
import JsonLd from '@/components/json-ld'
import { articleSchema, faqPageSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'CWELCC Guide for Canadian Childcare Operators (2026) | Sprout & Vine Care',
  description:
    'Everything Canadian childcare operators need to know about CWELCC: fee caps, subsidy tracking, provincial compliance, and what changes in 2026. Updated May 2026.',
  alternates: altEn('/resources/cwelcc-guide', '/fr/resources/guide-pelcpn'),
}

const cwelccFaqs = [
  {
    q: 'If I am not enrolled in CWELCC, can my families still get subsidized care?',
    a: 'Families in non-participating programs cannot receive CWELCC fee reductions from your centre. However, families may separately qualify for the Ontario Child Care Tax Credit or municipal fee subsidy programs regardless of your CWELCC status.',
  },
  {
    q: 'What is the difference between CWELCC, the Child Care Tax Credit, and the Child Care Fee Subsidy?',
    a: 'These are three separate programs. CWELCC is a federal-provincial program that reduces fees at the provider level. Families do not apply; they benefit automatically at enrolled centres. The Ontario Child Care Tax Credit is a provincial tax credit families claim on their annual tax return (up to 75% of eligible expenses for low-income families). The Fee Subsidy (municipal) is an income-tested municipal program providing additional assistance to qualifying families. Separate application required.',
  },
  {
    q: 'Does CWELCC apply to home daycares?',
    a: 'Yes. Licensed home child care providers operating through a licensed home child care agency are eligible to participate in CWELCC. Independent (unlicensed) providers are not eligible.',
  },
  {
    q: 'What happens to CWELCC after December 31, 2026?',
    a: 'The agreement was extended in November 2025 to December 31, 2026. Federal and provincial governments are expected to negotiate a renewed multi-year agreement. The federal government has committed to $9.2 billion annually in permanent funding, suggesting the program will continue in some form beyond 2026.',
  },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-3">
      {children}
    </p>
  )
}

function ArticleH2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-display font-medium text-forest-green leading-[1.08] mt-14 mb-5 pt-10 border-t border-[rgba(47,74,58,0.1)] first:mt-0 first:pt-0 first:border-t-0"
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

function ArticleOL({ children }: { children: React.ReactNode }) {
  return (
    <ol className="mb-6 space-y-3 list-none counter-reset-[item]">
      {children}
    </ol>
  )
}

function ArticleOLI({ num, children }: { num: number; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-forest-green/10 text-forest-green text-[12px] font-semibold flex items-center justify-center mt-0.5">
        {num}
      </span>
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
            <tr
              key={i}
              className={i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}
            >
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

function FaqItem({ q, a }: { q: string; a: React.ReactNode }) {
  return (
    <div className="mb-8">
      <p className="text-[16px] font-semibold text-forest-green mb-2 leading-[1.5]">{q}</p>
      <div className="text-[16px] text-dark-text/70 leading-[1.8]">{a}</div>
    </div>
  )
}

export default function CwelccGuidePage() {
  return (
    <>
      <JsonLd
        data={articleSchema({
          headline: 'CWELCC Guide for Canadian Childcare Operators (2026)',
          description:
            'Everything Canadian childcare operators need to know about CWELCC: fee caps, subsidy tracking, provincial compliance, and what changes in 2026.',
          path: '/resources/cwelcc-guide',
          datePublished: '2026-05-01',
        })}
      />
      <JsonLd data={faqPageSchema(cwelccFaqs)} />

      {/* Hero */}
      <section className="bg-forest-green py-16 md:py-24 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>CWELCC Guide</SectionLabel>
          <h1
            className="font-display font-medium text-cream leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(34px, 5vw, 58px)' }}
          >
            The Complete CWELCC Guide for Canadian Childcare Operators (2026)
          </h1>
          <div className="flex flex-wrap gap-4 text-[13px] text-cream/60">
            <span>Last updated: May 2026</span>
            <span className="text-cream/30">·</span>
            <span>Applies to: Licensed childcare operators in all provinces except Quebec</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-white py-14 md:py-20 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">

          {/* What is CWELCC */}
          <ArticleH2>What is CWELCC?</ArticleH2>
          <ArticleP>
            The Canada-Wide Early Learning and Child Care (CWELCC) program is a landmark federal-provincial agreement signed in 2021 that commits the federal government and all provinces (excluding Quebec, which has its own system) to reducing licensed childcare fees to an average of $10/day for children under six years old.
          </ArticleP>
          <ArticleP>
            The federal government committed over $27 billion over five years as part of Budget 2021, with a minimum of $9.2 billion per year permanently from 2025-2026 onward for early learning and childcare across Canada.
          </ArticleP>

          {/* Key Milestones */}
          <ArticleH2>Key Milestones and Dates</ArticleH2>
          <DataTable
            headers={['Date', 'What Changed']}
            rows={[
              ['April 1, 2022', '25% fee reduction for families retroactive to this date'],
              ['December 2022', 'Total fee reduction reached 50% of 2020 rates'],
              ['January 1, 2025', 'Ontario: Daily fees capped at $22/day for eligible children'],
              ['November 2025', 'CWELCC agreement extended by one year to December 31, 2026'],
              ['2026 (target)', 'Average daily fee target of $10/day for children under 6'],
              ['December 31, 2026', 'Target: 86,000 new licensed childcare spaces in Ontario'],
            ]}
          />

          {/* Ontario */}
          <ArticleH2>Ontario: What Operators Need to Know</ArticleH2>

          <ArticleH3>Fee Caps (January 1, 2025 onward)</ArticleH3>
          <ArticleP>
            As of January 1, 2025, Ontario operators participating in CWELCC must cap parent-facing daily fees at $22/day for eligible children (under 6). If your fees were already at or below $22/day before this date, no change was required.
          </ArticleP>
          <ArticleP>The path to $10/day average is ongoing through 2026:</ArticleP>
          <ArticleUL>
            <ArticleLI>Fees were reduced by approximately 52.75% from 2020 rates by end of 2022</ArticleLI>
            <ArticleLI>Further reductions are bringing fees toward $10/day average by end of 2026</ArticleLI>
            <ArticleLI>The current average for participating programs is approximately $19/day</ArticleLI>
          </ArticleUL>

          <ArticleH3>Who Must Participate?</ArticleH3>
          <ArticleP>
            Participation in CWELCC is optional for operators, but operators who opt in receive provincial funding to offset the fee reductions they pass on to families. Operators who do not participate cannot offer CWELCC-reduced fees to their enrolled families.
          </ArticleP>

          <ArticleH3>Operator Requirements When Enrolled in CWELCC</ArticleH3>
          <ArticleOL>
            <ArticleOLI num={1}><strong className="font-semibold text-dark-text">Fee cap compliance:</strong> Maintain daily fees at or below $22 (as of Jan 2025)</ArticleOLI>
            <ArticleOLI num={2}><strong className="font-semibold text-dark-text">Parent notification:</strong> Include CWELCC participation status in your parent handbook</ArticleOLI>
            <ArticleOLI num={3}><strong className="font-semibold text-dark-text">Funding agreement:</strong> Keep a copy of your CWELCC agreement on-site, available to your Ministry program advisor during inspections</ArticleOLI>
            <ArticleOLI num={4}><strong className="font-semibold text-dark-text">30-day notice:</strong> Give families at least 30 days' notice of any fee changes; families may withdraw without penalty if fees change</ArticleOLI>
            <ArticleOLI num={5}><strong className="font-semibold text-dark-text">CCEYA compliance:</strong> Continue to meet all Child Care and Early Years Act, 2014 requirements regardless of CWELCC participation</ArticleOLI>
            <ArticleOLI num={6}><strong className="font-semibold text-dark-text">Wage Enhancement:</strong> RECEs and supervisors must receive the mandated $1/hr wage increase annually from 2023-2026, up to a maximum of $25/hr</ArticleOLI>
          </ArticleOL>

          <ArticleH3>What Fees Can You Still Charge?</ArticleH3>
          <ArticleP>
            Operators enrolled in CWELCC must use the base fee structure set in Ontario Regulation. Registration fees, activity fees, and some optional program fees may still apply. However, these must be clearly disclosed and cannot be used to circumvent the daily fee cap.
          </ArticleP>
          <Callout>
            Rule of thumb: If a fee is required for a child to access the program, it is subject to the cap. Optional extras (e.g. extended hours, field trips) may be charged separately with proper disclosure.
          </Callout>

          {/* British Columbia */}
          <ArticleH2>British Columbia: CCFRI and $10-a-Day ChildCareBC</ArticleH2>

          <ArticleH3>Child Care Fee Reduction Initiative (CCFRI)</ArticleH3>
          <ArticleP>
            The CCFRI provides monthly funding to licensed childcare providers to reduce and stabilize fees for families. Key details:
          </ArticleP>
          <ArticleUL>
            <ArticleLI>Families do not apply: savings are passed directly by participating providers</ArticleLI>
            <ArticleLI>Eligible families: Children aged 12 and under in participating programs</ArticleLI>
            <ArticleLI>Not income-tested: available to all families in participating centres</ArticleLI>
            <ArticleLI>Fee floor: Fees will not be reduced below $200/month ($10/day) for full-time care or $140/month ($7/day) for part-time care</ArticleLI>
            <ArticleLI>Provider opt-in: Voluntary. Providers apply when submitting for Child Care Operating Funding (CCOF)</ArticleLI>
          </ArticleUL>

          <ArticleH3>What Changed April 1, 2026 (BC)</ArticleH3>
          <ArticleUL>
            <ArticleLI>Providers in the fee reduction program may only charge optional fees for extended hours after offering a minimum of 9.5 hours of service per day during regular operating hours</ArticleLI>
            <ArticleLI>Providers switching from the $10-a-Day ChildCareBC program to CCFRI must maintain comparable hours and cannot introduce optional fees for previously included services</ArticleLI>
            <ArticleLI>Staff wages, benefits, and hours must be maintained at existing levels</ArticleLI>
          </ArticleUL>

          <ArticleH3>CCOF Funding Agreement Timeline (2026-27)</ArticleH3>
          <DataTable
            headers={['Date', 'Action Required']}
            rows={[
              ['January 2026', 'Renewal applications available on My ChildCareBC Services'],
              ['February 25, 2026', '2026-27 operating funding agreements sent for signing'],
              ['March 9, 2026', 'Last day to sign for April 1 funding start'],
              ['March 15, 2026', 'Pre-claiming available for April 1 funding'],
              ['March 31, 2026', 'All 2025-26 agreements expire'],
              ['April 30, 2026', 'Final day to renew for April 1 start'],
            ]}
          />

          {/* Quebec */}
          <ArticleH2>Quebec: A Different System</ArticleH2>
          <ArticleP>
            Quebec is excluded from the federal CWELCC agreement because it already operates Canada's oldest and most established subsidized childcare system. Rather than CWELCC fee reductions, Quebec runs its own framework under the Act respecting educational childcare services, administered by the Ministere de la Famille du Quebec.
          </ArticleP>
          <ArticleP>Current daily fees (contribution reduite):</ArticleP>
          <ArticleUL>
            <ArticleLI>2025: $9.35/day (all parents pay this single subsidized rate)</ArticleLI>
            <ArticleLI>2026: $9.65/day (indexed automatically each January 1)</ArticleLI>
          </ArticleUL>
          <ArticleP>
            Quebec fees are not reduced through a federal agreement. They are set provincially each year and already represent one of the lowest childcare costs in the country. The rate covers up to 10 hours of care per day, including one meal and two snacks.
          </ArticleP>
          <ArticleP>
            Quebec childcare takes four forms: CPEs (Centres de la petite enfance, non-profit, parent-governed), subsidized private daycares (garderies subventionnees), non-subsidized private daycares (market rate), and recognized home childcare services.
          </ArticleP>
          <Callout>
            Critical 2026 change: From September 1, 2026, unrecognized home childcare providers wishing to care for more than two children will require a permit from the Ministere de la Famille. This brings a new wave of Quebec home providers into the regulated system for the first time.
          </Callout>
          <ArticleP>
            See the full Quebec section in our{' '}
            <Link href="/resources/licensing-checklist" className="text-forest-green underline underline-offset-2 hover:text-sage-green transition-colors">
              Provincial Licensing Checklist
            </Link>{' '}
            for CPE governance, staff qualifications, ratios, and the new 2025 registration portal.
          </ArticleP>

          {/* CWELCC in Sprout and Vine */}
          <ArticleH2>CWELCC Tracking in Sprout and Vine</ArticleH2>
          <ArticleP>
            Manually tracking CWELCC subsidies, verifying fee caps, and preparing documentation for your program advisor is one of the most time-consuming administrative tasks operators face today. Sprout and Vine automates this:
          </ArticleP>
          <ArticleUL>
            <ArticleLI>Automatic subsidy calculation per enrolled child based on your CWELCC funding agreement</ArticleLI>
            <ArticleLI>Fee cap alerts if billing would exceed the $22/day cap</ArticleLI>
            <ArticleLI>Wage enhancement tracking for RECE and supervisor wage requirements</ArticleLI>
            <ArticleLI>Inspection-ready reports that show your fee structure, subsidy amounts, and compliance documentation in one place</ArticleLI>
            <ArticleLI>Annual fee change notifications automatically pushed to enrolled families when fee schedules update</ArticleLI>
          </ArticleUL>

          {/* FAQ */}
          <ArticleH2>Frequently Asked Questions</ArticleH2>

          {cwelccFaqs.map(faq => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}

          {/* Sources */}
          <div className="mt-14 pt-8 border-t border-[rgba(47,74,58,0.1)]">
            <p className="text-[13px] text-dark-text/45 leading-relaxed mb-3">
              <strong className="font-semibold text-dark-text/55">Sources:</strong> Ontario Ministry of Education, Canada.ca CWELCC Agreement, City of Ottawa Children's Services, City of Toronto Children's Services, Province of British Columbia Ministry of Children and Family Development, York Region CWELCC, Hamilton Children's Services. Last reviewed May 2026.
            </p>
            <p className="text-[13px] text-dark-text/40 leading-relaxed italic">
              Disclaimer: This guide is for informational purposes. Always consult your provincial program advisor or Ministry contact for decisions affecting your funding agreements.
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
              Get CWELCC updates by email
            </h2>
            <p className="text-cream/60 text-[15px] leading-relaxed">
              When agreements change, fee caps update, or new provincial guidance comes out, we send a plain-language summary to operators who have signed up.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-7">
            <EmailCapture
              heading="Get CWELCC updates by email"
              subheading="Plain-language summaries whenever something changes. No spam."
              source="cwelcc-guide"
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
