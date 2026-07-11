import type { Metadata } from 'next'
import Link from 'next/link'
import { altEn } from '@/lib/seo'
import ComingSoon from '@/components/coming-soon'
import {
  securityPageLive,
  TRUST_GATES,
  PRIVACY_CONTACT,
  RETENTION,
} from '@/lib/trust'

/*
 * /security trust page (website brief section 2, FINAL COPY).
 *
 * The full page below ships dark behind securityPageLive() and renders
 * the interim "coming soon" card until every publication gate in
 * lib/trust.ts clears. No compliance conclusion appears anywhere on
 * purpose: "built PIPEDA-first" is a design statement and is the
 * ceiling; "PIPEDA-compliant" is a legal conclusion that does not go on
 * the site.
 */

export const metadata: Metadata = {
  title: 'Security | Sprout & Vine Care',
  description:
    'How Sprout & Vine Care handles your data, in plain language: Canadian data residency, family data ownership, human-confirmed pickup, and database-level access control.',
  alternates: altEn('/security'),
}

function SectionHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="font-display font-medium text-forest-green leading-[1.15] mb-4 scroll-mt-28"
      style={{ fontSize: 'clamp(22px, 2.6vw, 30px)' }}
    >
      {children}
    </h2>
  )
}

function Body({ children }: { children: React.ReactNode }) {
  return <p className="text-[15px] text-dark-text/70 leading-[1.8]">{children}</p>
}

export default function SecurityPage() {
  if (!securityPageLive()) {
    return (
      <ComingSoon
        title="Security at Sprout & Vine Care"
        description="We take data security seriously. Our full security overview, including encryption, access controls, and compliance details, is coming soon."
        backLabel="Contact us"
        backHref="/contact"
      />
    )
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-forest-green py-16 md:py-20 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-4">
            Trust
          </p>
          <h1
            className="font-display font-medium text-cream leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(34px, 5vw, 56px)' }}
          >
            Security and privacy at Sprout &amp; Vine Care
          </h1>
          <p className="text-[16px] text-cream/65 leading-relaxed max-w-2xl">
            Keeping children's information safe is the whole job. Here is how Sprout &amp; Vine Care handles your data, in plain language. If anything here is unclear, please get in touch
            {PRIVACY_CONTACT.email && (
              <>
                {' '}at{' '}
                <a href={`mailto:${PRIVACY_CONTACT.email}`} className="underline underline-offset-4 hover:text-cream">
                  {PRIVACY_CONTACT.email}
                </a>
              </>
            )}
            .
          </p>
        </div>
      </section>

      {/* Where your data lives */}
      <section className="bg-white py-14 md:py-16 px-5 md:px-8">
        <div className="max-w-3xl mx-auto space-y-5">
          <SectionHeading>Where your data lives</SectionHeading>
          <Body>
            Your child's records, including photos, are stored and processed in Canada, in Supabase's Canadian region (ca-central-1), on every plan.
          </Body>
          <Body>
            To run the service we rely on a small number of named providers for specific jobs: payment processing (Stripe), email delivery (Loops), and AI-assisted drafting of administrative summaries (Anthropic). Some of these process limited data outside Canada. We tell you exactly what each one receives, and where, on our{' '}
            <Link href="/security/subprocessors" className="text-forest-green font-medium hover:underline underline-offset-4">
              subprocessor list
            </Link>
            .
          </Body>
          <Body>
            One boundary we want to be clear about: we never send a child's name, health information, or behavioural notes to our AI tool. It only ever helps with organisation-level administrative writing, using information like the centre name, dates, and totals.
          </Body>
          <Body>
            Sprout &amp; Vine Care is built PIPEDA-first, which shapes how we collect, store, and share information from the ground up.
          </Body>
        </div>
      </section>

      {/* Families own their records */}
      <section className="bg-cream py-14 md:py-16 px-5 md:px-8">
        <div className="max-w-3xl mx-auto space-y-5">
          <SectionHeading>Families own their records</SectionHeading>
          <Body>Families keep a permanent right to their own records.</Body>
          <Body>
            You can download a complete copy of your child's daily reports, milestones, photos, attendance history, and shared documents at any time from your settings. We also send that copy to you automatically when your child leaves the centre.
          </Body>
          <Body>
            Please note that your centre must retain certain records for the period Ontario childcare licensing requires, even after your child leaves. This is a legal obligation on the centre, not a choice, and it means some records cannot be deleted on request. We explain what this covers in{' '}
            <a href="#retention" className="text-forest-green font-medium hover:underline underline-offset-4">
              how long we keep your data
            </a>
            .
          </Body>
        </div>
      </section>

      {/* No ads, ever */}
      <section className="bg-white py-14 md:py-16 px-5 md:px-8">
        <div className="max-w-3xl mx-auto space-y-5">
          <SectionHeading>No ads, ever</SectionHeading>
          <Body>
            We do not sell your data and we never use it for advertising. There are no ads in Sprout &amp; Vine Care, and there never will be. This is a permanent commitment, not a current setting.
          </Body>
          <Body>
            To deliver the service we share limited information with the providers named above, such as sending a payment to Stripe or an email through Loops. That is different from selling data, and we never do the latter.
          </Body>
        </div>
      </section>

      {/* Pickup */}
      <section className="bg-cream py-14 md:py-16 px-5 md:px-8">
        <div className="max-w-3xl mx-auto space-y-5">
          <SectionHeading>Pickup verification is human-confirmed</SectionHeading>
          <Body>
            When someone arrives to pick up a child, a staff member confirms them in person against the authorized pickup photo on file. There is no automated facial recognition. A person makes the call, every time, and the parent gets an instant notification with the confirmation.
          </Body>
        </div>
      </section>

      {/* Access control */}
      <section className="bg-white py-14 md:py-16 px-5 md:px-8">
        <div className="max-w-3xl mx-auto space-y-5">
          <SectionHeading>Access is enforced at the database level</SectionHeading>
          <Body>
            Access is controlled where the data lives, not just in the app. Every table uses row-level security, so each role (operator, educator, parent) can reach only the records its role is permitted to see. A parent sees their own child. An educator sees their room. An operator sees their centre.
          </Body>
          <Body>
            A small internal Sprout &amp; Vine Care team can access data only where it is needed to run and support the service.
          </Body>
        </div>
      </section>

      {/* Consent: publishes only once platform 9.6 is built and verified
          on the live screens. */}
      {TRUST_GATES.consentCentreBuilt && (
        <section className="bg-cream py-14 md:py-16 px-5 md:px-8">
          <div className="max-w-3xl mx-auto space-y-5">
            <SectionHeading>Consent is explicit</SectionHeading>
            <Body>
              We ask for your consent separately for each purpose, such as care records, photos, and communications. Nothing is ever pre-checked, and you are never asked to agree to several unrelated things with a single box.
            </Body>
          </div>
        </section>
      )}

      {/* Retention */}
      <section className="bg-white py-14 md:py-16 px-5 md:px-8">
        <div className="max-w-3xl mx-auto space-y-5">
          <SectionHeading id="retention">How long we keep your data</SectionHeading>
          <Body>
            We keep information only as long as we need it, and we are honest about the cases where we cannot delete something on request.
          </Body>
          <ul className="list-disc pl-5 space-y-2 text-[15px] text-dark-text/70 leading-[1.8]">
            {RETENTION.careRecordsLine && <li>{RETENTION.careRecordsLine}</li>}
            <li>Data exports are held in temporary storage and the download link expires after 24 hours.</li>
            {RETENTION.contactAndLogsLine && <li>{RETENTION.contactAndLogsLine}</li>}
          </ul>
          <Body>
            Where a licensing retention obligation applies, it takes precedence over a deletion request. We will tell you clearly when that is the case rather than deleting a record we are legally required to keep.
          </Body>
        </div>
      </section>

      {/* Breach */}
      <section className="bg-cream py-14 md:py-16 px-5 md:px-8">
        <div className="max-w-3xl mx-auto space-y-5">
          <SectionHeading>If something goes wrong</SectionHeading>
          <Body>
            If there is ever a breach of security safeguards that creates a real risk of significant harm, we will notify the families affected and the appropriate regulator, and we keep a record of breaches as required. We would rather tell you plainly and early than manage a message.
          </Body>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-white py-14 md:py-16 px-5 md:px-8">
        <div className="max-w-3xl mx-auto space-y-5">
          <SectionHeading>Who to contact</SectionHeading>
          <Body>
            Questions about your data, or a request to access or correct it, can go to our privacy contact
            {PRIVACY_CONTACT.name && <> ({PRIVACY_CONTACT.name})</>}
            {PRIVACY_CONTACT.email && (
              <>
                {' '}at{' '}
                <a href={`mailto:${PRIVACY_CONTACT.email}`} className="text-forest-green font-medium hover:underline underline-offset-4">
                  {PRIVACY_CONTACT.email}
                </a>
              </>
            )}
            . We respond to every request.
          </Body>
        </div>
      </section>

      {/* What we collect */}
      <section className="bg-cream py-14 md:py-16 px-5 md:px-8">
        <div className="max-w-3xl mx-auto space-y-5">
          <SectionHeading>What we collect, and why</SectionHeading>
          <Body>
            We collect only what we need to provide care records and run the service, and we explain each category and its purpose in our{' '}
            <Link href="/privacy" className="text-forest-green font-medium hover:underline underline-offset-4">
              privacy policy
            </Link>
            . If a field is not necessary, we do not collect it.
          </Body>
        </div>
      </section>
    </>
  )
}
