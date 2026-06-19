import type { Metadata } from 'next'
import LegalLayout from '@/components/legal-layout'

export const metadata: Metadata = {
  title: 'Terms of Service | Sprout & Vine Care',
  description: 'The terms governing your use of the Sprout & Vine platform and services.',
}

const toc = [
  { id: 'agreement', label: '1. Agreement to Terms' },
  { id: 'services', label: '2. Description of Services' },
  { id: 'accounts', label: '3. Accounts & Access' },
  { id: 'payment', label: '4. Subscription & Payment' },
  { id: 'data', label: '5. Your Data' },
  { id: 'acceptable-use', label: '6. Acceptable Use' },
  { id: 'ip', label: '7. Intellectual Property' },
  { id: 'termination', label: '8. Termination' },
  { id: 'disclaimers', label: '9. Disclaimers' },
  { id: 'liability', label: '10. Limitation of Liability' },
  { id: 'indemnification', label: '11. Indemnification' },
  { id: 'governing-law', label: '12. Governing Law' },
  { id: 'changes', label: '13. Changes to These Terms' },
  { id: 'contact', label: '14. Contact' },
]

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      effectiveDate="January 1, 2026"
      lastUpdated="May 1, 2026"
      toc={toc}
    >
      <h2 id="agreement">1. Agreement to Terms</h2>
      <p>
        These Terms of Service ("Terms") are a legally binding agreement between you and{' '}
        <strong>Sprout &amp; Vine</strong> ("we," "our," or "us"), governing your use of our childcare management platform, website at
        sproutandvine.ca, and related services (collectively, the "Services").
      </p>
      <p>
        By creating an account, clicking "I agree," or using the Services, you confirm that you have read,
        understood, and agree to be bound by these Terms and our{' '}
        <a href="/privacy">Privacy Policy</a>, which is incorporated by reference.
      </p>
      <p>
        If you are using the Services on behalf of an organization (such as a childcare centre), you represent
        that you have authority to bind that organization to these Terms, and "you" refers to both you and
        that organization.
      </p>
      <p>
        If you do not agree to these Terms, you may not use the Services.
      </p>

      <h2 id="services">2. Description of Services</h2>
      <p>
        Sprout &amp; Vine is a cloud-based childcare management platform for Canadian childcare operators.
        The platform includes features for attendance tracking, billing and payments, CWELCC subsidy management,
        family communication, daily reporting, enrollment and waitlist management, and Smart Pickup Authorization.
      </p>
      <p>
        We offer three subscription tiers: <strong>Seeds</strong> (free), <strong>Sprout</strong> (paid monthly
        or annually), and <strong>Vine</strong> (enterprise, custom pricing). Feature availability varies by tier
        as described on our <a href="/pricing">pricing page</a>.
      </p>
      <p>
        We reserve the right to modify, suspend, or discontinue any part of the Services at any time, with
        reasonable notice where practicable. We will provide at least 30 days' notice before discontinuing a
        paid feature you actively rely on.
      </p>

      <h2 id="accounts">3. Accounts &amp; Access</h2>

      <h3>Registration</h3>
      <p>
        To access most features, you must create an account and provide accurate, current, and complete
        information. You agree to keep your account information up to date.
      </p>

      <h3>Account security</h3>
      <p>
        You are responsible for maintaining the confidentiality of your login credentials. You must notify us
        immediately at <a href="mailto:hello@sproutandvinecare.ca">hello@sproutandvinecare.ca</a> if you
        suspect unauthorized access to your account. We are not liable for losses resulting from unauthorized
        use of your credentials where you have not exercised reasonable care.
      </p>

      <h3>Authorized users</h3>
      <p>
        You may invite staff members and educators at your centre to use the platform under your account. You
        are responsible for all activity that occurs under your account, including the actions of any invited users.
      </p>

      <h2 id="payment">4. Subscription &amp; Payment</h2>

      <h3>Fees</h3>
      <p>
        Paid subscriptions (Sprout and Vine) are billed in <strong>Canadian dollars (CAD)</strong>. Current
        pricing is displayed on our <a href="/pricing">pricing page</a> and is subject to change with 30 days'
        prior written notice.
      </p>

      <h3>Billing cycle</h3>
      <p>
        Sprout subscriptions are billed monthly or annually at your election. Annual plans are billed in full
        at the start of each billing period. Billing begins on the day you upgrade from the free Seeds tier.
      </p>

      <h3>Taxes</h3>
      <p>
        Prices are exclusive of applicable taxes. Where required by law, we will collect and remit GST/HST
        and applicable provincial sales taxes.
      </p>

      <h3>Free trial</h3>
      <p>
        Where offered, a free trial runs for the specified period without charge. After the trial, you will
        be automatically charged for the selected plan unless you cancel before the trial ends.
      </p>

      <h3>Cancellation and refunds</h3>
      <p>
        You may cancel your subscription at any time through your account settings or by contacting us. Cancellation
        takes effect at the end of the current billing period. You will retain full access until then. We do not
        issue prorated refunds for unused time in a billing period, except where required by law or at our
        sole discretion in exceptional circumstances.
      </p>

      <h3>Non-payment</h3>
      <p>
        If a payment fails, we will notify you and provide a 7-day cure period to update your payment method.
        If payment remains outstanding, we may suspend access to paid features until the balance is settled.
        Accounts with outstanding balances for more than 60 days may be terminated.
      </p>

      <h2 id="data">5. Your Data</h2>

      <h3>Data ownership</h3>
      <p>
        You retain full ownership of all data you enter into the platform, including information about your
        centre, staff, children in your care, and families ("Customer Data"). We do not claim any ownership
        rights over your Customer Data.
      </p>

      <h3>Our use of your data</h3>
      <p>
        We use Customer Data solely to provide and improve the Services, as described in our{' '}
        <a href="/privacy">Privacy Policy</a>. We do not sell Customer Data or use it for purposes unrelated
        to operating the Services.
      </p>

      <h3>Data export</h3>
      <p>
        You may export your Customer Data at any time through the platform's export tools. Upon termination of
        your account, you will have 30 days to export your data before it is deleted from our systems, subject
        to our retention obligations under applicable law.
      </p>

      <h3>Your responsibilities</h3>
      <p>
        You are responsible for ensuring that you have the legal right to enter information about children and
        families into the platform, including obtaining appropriate consent from parents and guardians as required
        by applicable provincial childcare regulations and PIPEDA.
      </p>

      <h2 id="acceptable-use">6. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Services for any unlawful purpose or in violation of any applicable law or regulation.</li>
        <li>Impersonate another person or entity, or misrepresent your affiliation with a person or entity.</li>
        <li>Upload or transmit malware, viruses, or any code designed to harm, disrupt, or intercept data.</li>
        <li>Attempt to gain unauthorized access to any part of the Services, other accounts, or our infrastructure.</li>
        <li>Scrape, copy, or reproduce any part of the Services in an automated manner without our written consent.</li>
        <li>Resell, sublicense, or white-label the Services without our express written agreement.</li>
        <li>Use the Services to harass, abuse, or harm any individual, including families and children in your care.</li>
        <li>Enter false, inaccurate, or misleading information about children or families into the platform.</li>
        <li>Violate the privacy rights of any individual, including children enrolled at your centre.</li>
      </ul>
      <p>
        We reserve the right to suspend or terminate accounts that we reasonably believe are in violation of
        these restrictions.
      </p>

      <h2 id="ip">7. Intellectual Property</h2>
      <p>
        The Sprout &amp; Vine platform, including its software, design, user interface, trademarks, logos,
        and all related intellectual property, is owned by Sprout &amp; Vine and protected by Canadian and
        international copyright, trademark, and other intellectual property laws.
      </p>
      <p>
        We grant you a limited, non-exclusive, non-transferable, revocable licence to access and use the
        Services for your internal business purposes during the term of your subscription. You may not copy,
        modify, distribute, sell, or create derivative works from any part of the Services without our
        prior written consent.
      </p>
      <p>
        You retain all rights to your Customer Data. By entering Customer Data into the platform, you grant us
        a limited licence to process that data solely to provide and improve the Services.
      </p>

      <h2 id="termination">8. Termination</h2>
      <p>
        You may terminate your account at any time through your account settings. Termination takes effect
        immediately for free accounts, and at the end of the current billing period for paid accounts.
      </p>
      <p>
        We may suspend or terminate your account immediately, with or without notice, if we have reason to
        believe you have materially breached these Terms, engaged in fraudulent or illegal activity, or pose
        a risk to the security or integrity of the Services or other users.
      </p>
      <p>
        Upon termination, your right to access the Services ceases. Sections 5 (Data ownership), 7
        (Intellectual Property), 9 (Disclaimers), 10 (Limitation of Liability), 11 (Indemnification),
        and 12 (Governing Law) survive termination.
      </p>

      <h2 id="disclaimers">9. Disclaimers</h2>
      <p>
        THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND. TO THE MAXIMUM
        EXTENT PERMITTED BY APPLICABLE LAW, SPROUT &amp; VINE EXPRESSLY DISCLAIMS ALL WARRANTIES, WHETHER
        EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
        PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
      </p>
      <p>
        We do not warrant that the Services will be uninterrupted, error-free, or free of viruses or other
        harmful components. We do not warrant the accuracy of any CWELCC subsidy calculations or compliance
        guidance. You remain responsible for verifying regulatory compliance with your provincial authority.
      </p>

      <h2 id="liability">10. Limitation of Liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, SPROUT &amp; VINE AND ITS OFFICERS, DIRECTORS,
        EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
        PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, BUSINESS, OR GOODWILL, ARISING OUT OF OR IN
        CONNECTION WITH THESE TERMS OR THE SERVICES.
      </p>
      <p>
        OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICES
        WILL NOT EXCEED THE GREATER OF (A) THE TOTAL FEES YOU PAID TO US IN THE TWELVE (12) MONTHS
        IMMEDIATELY PRECEDING THE CLAIM, OR (B) ONE HUNDRED CANADIAN DOLLARS (CAD $100).
      </p>
      <p>
        Some jurisdictions do not allow the exclusion or limitation of certain damages. In those jurisdictions,
        our liability will be limited to the greatest extent permitted by law.
      </p>

      <h2 id="indemnification">11. Indemnification</h2>
      <p>
        You agree to indemnify, defend, and hold harmless Sprout &amp; Vine and its affiliates, officers,
        directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses
        (including reasonable legal fees) arising out of or relating to (a) your use of the Services, (b) your
        violation of these Terms, (c) your violation of any third-party right, including privacy rights, or
        (d) your Customer Data.
      </p>

      <h2 id="governing-law">12. Governing Law &amp; Dispute Resolution</h2>
      <p>
        These Terms and any dispute arising out of or relating to them will be governed by the laws of the
        <strong> Province of Ontario</strong> and the federal laws of Canada applicable therein, without regard
        to conflict of law principles.
      </p>
      <p>
        Any dispute that cannot be resolved informally will be submitted to the exclusive jurisdiction of the
        courts of the Province of Ontario, Canada. You agree to submit to the personal jurisdiction of those courts.
      </p>
      <p>
        Before initiating any legal proceedings, you agree to attempt to resolve disputes by contacting us at{' '}
        <a href="mailto:legal@sproutandvine.ca">legal@sproutandvine.ca</a> and giving us 30 days to respond.
      </p>

      <h2 id="changes">13. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. When we make material changes, we will notify you by
        email and by posting a notice on the platform at least 30 days before the changes take effect. Your
        continued use of the Services after the effective date constitutes acceptance of the revised Terms.
      </p>
      <p>
        If you object to any change, your remedy is to stop using the Services and cancel your subscription
        before the effective date of the change.
      </p>

      <h2 id="contact">14. Contact</h2>
      <p>
        For questions about these Terms, contact us at:
      </p>
      <p>
        <strong>Sprout &amp; Vine</strong><br />
        <a href="mailto:legal@sproutandvine.ca">legal@sproutandvine.ca</a>
      </p>
      <p>
        For privacy questions, see our <a href="/privacy">Privacy Policy</a> or email{' '}
        <a href="mailto:privacy@sproutandvine.ca">privacy@sproutandvine.ca</a>.
      </p>
    </LegalLayout>
  )
}
