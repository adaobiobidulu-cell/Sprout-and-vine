import type { Metadata } from 'next'
import { altEn } from '@/lib/seo'
import LegalLayout from '@/components/legal-layout'

export const metadata: Metadata = {
  title: 'Privacy Policy | Sprout & Vine Care',
  description: 'How Sprout & Vine Care collects, uses, and protects your personal information.',
  alternates: altEn('/privacy'),
}

const toc = [
  { id: 'about', label: '1. About This Policy' },
  { id: 'who-we-are', label: '2. Who We Are' },
  { id: 'information-collected', label: '3. Information We Collect' },
  { id: 'how-we-use', label: '4. How We Use Your Information' },
  { id: 'sharing', label: '5. How We Share Your Information' },
  { id: 'storage-security', label: '6. Storage & Security' },
  { id: 'retention', label: '7. Retention' },
  { id: 'your-rights', label: '8. Your Privacy Rights' },
  { id: 'cookies', label: '9. Cookies & Tracking' },
  { id: 'third-parties', label: '10. Third-Party Services' },
  { id: 'children', label: '11. Children\'s Data' },
  { id: 'changes', label: '12. Changes to This Policy' },
  { id: 'contact', label: '13. Contact Us' },
]

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      effectiveDate="January 1, 2026"
      lastUpdated="May 1, 2026"
      banner="Pre-launch policy draft. This document is in final legal review before platform access begins. It reflects how we intend to operate, and we will post the reviewed version before any family's data is collected."
      toc={toc}
    >
      <h2 id="about">1. About This Policy</h2>
      <p>
        This Privacy Policy explains how <strong>Sprout &amp; Vine Care</strong> ("we," "our," or "us")
        collects, uses, discloses, and protects personal information
        when you use our platform, website at sproutandvinecare.ca, and related services (collectively, the "Services").
      </p>
      <p>
        By accessing or using our Services, you agree to the collection and use of your information as described
        in this policy. If you do not agree, please discontinue use of the Services.
      </p>

      <h2 id="who-we-are">2. Who We Are</h2>
      <p>
        Sprout &amp; Vine Care is a Canadian company building childcare management software for Canadian operators.
        Privacy inquiries may be directed to <a href="mailto:hello@sproutandvinecare.ca">hello@sproutandvinecare.ca</a>.
      </p>
      <p>
        We are subject to the <strong>Personal Information Protection and Electronic Documents Act (PIPEDA)</strong>{' '}
        and, for operators and users in Québec, <strong>An Act Respecting the Protection of Personal Information
        in the Private Sector (Law 25 / Bill 64)</strong>.
      </p>

      <h2 id="information-collected">3. Information We Collect</h2>

      <h3>Information you provide directly</h3>
      <ul>
        <li><strong>Account information:</strong> your name, email address, phone number, and the name of your childcare centre when you register or contact us.</li>
        <li><strong>Organization details:</strong> centre name, province, number of children enrolled, and similar operational details you enter during onboarding.</li>
        <li><strong>Payment information:</strong> billing details collected via our payment processor (Stripe). We do not store raw credit card numbers on our servers.</li>
        <li><strong>Communications:</strong> messages you send us via email, the contact form, or in-app support channels.</li>
        <li><strong>Operational data:</strong> information you enter about your centre, including attendance records, enrollment data, daily reports, and communication logs with families, as part of using the platform.</li>
      </ul>

      <h3>Information collected automatically</h3>
      <ul>
        <li><strong>Usage data:</strong> pages visited, features used, time spent, and actions taken within the platform, collected through analytics tools.</li>
        <li><strong>Log data:</strong> IP address, browser type, device type, referring URLs, and access timestamps.</li>
        <li><strong>Cookies:</strong> small data files placed on your device. See Section 9 for details.</li>
      </ul>

      <h3>Information about children in your care</h3>
      <p>
        As an operator using our platform, you may enter information about the children enrolled at your centre
        (such as names, dates of birth, attendance records, and developmental milestones). This information is
        entered and controlled by you, the operator. We process this data strictly on your behalf as a data
        processor. You are responsible for obtaining appropriate consent from families as required under
        applicable law.
      </p>

      <h2 id="how-we-use">4. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide, operate, and maintain the Sprout &amp; Vine Care platform and Services.</li>
        <li>Process payments and manage your subscription.</li>
        <li>Respond to your support requests, questions, and feedback.</li>
        <li>Send you service-related communications (account notices, security alerts, billing receipts).</li>
        <li>Send you product updates, feature announcements, and occasional promotional content. You may opt out at any time.</li>
        <li>Monitor and improve the performance, security, and functionality of the Services.</li>
        <li>Comply with legal obligations, including tax and regulatory requirements.</li>
        <li>Enforce our Terms of Service and protect the rights of our users.</li>
      </ul>
      <p>
        We do not sell your personal information to third parties. We do not use your data to train AI or
        machine learning models without your explicit consent.
      </p>

      <h2 id="sharing">5. How We Share Your Information</h2>
      <p>
        We share personal information only in the following limited circumstances:
      </p>
      <ul>
        <li><strong>Service providers:</strong> we share data with trusted vendors who help us operate the platform (hosting, payment processing, email delivery). These vendors are contractually required to protect your data and may only use it as directed by us. See Section 10 for a list of key third parties.</li>
        <li><strong>Legal requirements:</strong> we may disclose information when required by law, court order, or government authority, or when we believe disclosure is necessary to protect our legal rights or prevent harm.</li>
        <li><strong>Business transfers:</strong> if Sprout &amp; Vine Care is involved in a merger, acquisition, or sale of assets, your information may be transferred. We will notify you before your personal information is transferred and becomes subject to a different privacy policy.</li>
        <li><strong>With your consent:</strong> we may share information for any other purpose with your explicit consent.</li>
      </ul>
      <p>We do not share personal information with advertisers or data brokers.</p>

      <h2 id="storage-security">6. Storage &amp; Security</h2>
      <p>
        All personal information processed by Sprout &amp; Vine Care is stored on servers located in <strong>Canada</strong>.
        We use cloud infrastructure hosted on Canadian data centre regions.
      </p>
      <p>We protect your data using:</p>
      <ul>
        <li>Encryption in transit (TLS 1.2+) and encryption at rest.</li>
        <li>Role-based access controls limiting who within Sprout &amp; Vine Care can access user data.</li>
        <li>Regular security assessments and vulnerability monitoring.</li>
        <li>Secure, audited access logs for administrative actions.</li>
      </ul>
      <p>
        No method of transmission over the internet is 100% secure. While we use commercially reasonable
        safeguards, we cannot guarantee absolute security. If you become aware of any security issue, please
        contact us immediately at <a href="mailto:hello@sproutandvinecare.ca">hello@sproutandvinecare.ca</a>.
      </p>

      <h2 id="retention">7. Retention</h2>
      <p>
        We retain your personal information for as long as your account is active, plus a period of{' '}
        <strong>seven (7) years</strong> following account termination to comply with Canadian tax, accounting,
        and regulatory obligations (Income Tax Act, applicable provincial regulations).
      </p>
      <p>
        Operational data entered about children in your care (attendance records, daily reports, development
        milestones) is retained for the duration of your subscription, plus an additional period as required by
        applicable childcare regulations in your province. You may request earlier deletion where permitted by law.
      </p>
      <p>
        You may request deletion of your account and associated personal information by emailing
        <a href="mailto:hello@sproutandvinecare.ca"> hello@sproutandvinecare.ca</a>. We will action your request
        within 30 days, subject to legal retention requirements.
      </p>

      <h2 id="your-rights">8. Your Privacy Rights</h2>

      <h3>Under PIPEDA (all provinces except Québec)</h3>
      <p>You have the right to:</p>
      <ul>
        <li><strong>Access:</strong> request a copy of the personal information we hold about you.</li>
        <li><strong>Correction:</strong> request correction of inaccurate or incomplete information.</li>
        <li><strong>Withdrawal of consent:</strong> withdraw consent to certain uses, subject to legal and contractual constraints.</li>
        <li><strong>Complaint:</strong> file a complaint with the Office of the Privacy Commissioner of Canada at <a href="https://www.priv.gc.ca" target="_blank" rel="noopener noreferrer">priv.gc.ca</a>.</li>
      </ul>

      <h3>Under Québec Law 25 (for Québec residents)</h3>
      <p>In addition to PIPEDA rights, Québec residents have the right to:</p>
      <ul>
        <li><strong>Data portability:</strong> receive a structured, machine-readable copy of personal information you provided to us.</li>
        <li><strong>Erasure:</strong> request deletion of your personal information where it is no longer necessary for the purposes for which it was collected.</li>
        <li><strong>Restrict processing:</strong> request that we limit how we process your data in certain circumstances.</li>
        <li><strong>Lodge a complaint:</strong> with the Commission d'accès à l'information du Québec (CAI) at <a href="https://www.cai.gouv.qc.ca" target="_blank" rel="noopener noreferrer">cai.gouv.qc.ca</a>.</li>
      </ul>

      <p>
        To exercise any of these rights, email us at{' '}
        <a href="mailto:hello@sproutandvinecare.ca">hello@sproutandvinecare.ca</a>. We will respond within
        30 days of receiving your request.
      </p>

      <h2 id="cookies">9. Cookies &amp; Tracking</h2>
      <p>We use cookies and similar technologies for the following purposes:</p>
      <ul>
        <li><strong>Essential cookies:</strong> required for the platform to function (authentication sessions, security tokens). These cannot be disabled.</li>
        <li><strong>Analytics cookies:</strong> help us understand how the platform is used so we can improve it (Vercel Analytics). These collect anonymised, aggregated data.</li>
      </ul>
      <p>
        We do not use advertising cookies or behavioural tracking cookies. You can control cookie preferences
        through your browser settings. Disabling essential cookies will prevent you from using the platform.
      </p>
      <p>
        Our analytics implementation does not use cookies that require consent under Canadian privacy law as it
        collects only anonymised, non-identifying data.
      </p>

      <h2 id="third-parties">10. Third-Party Services</h2>
      <p>We use the following key third-party service providers. Each is bound by its own privacy policy:</p>
      <ul>
        <li><strong>Vercel Inc.</strong>: website hosting and edge network delivery. <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
        <li><strong>Stripe Inc.</strong>: payment processing. Stripe handles all payment card data under PCI-DSS compliance. <a href="https://stripe.com/en-ca/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
        <li><strong>Google LLC</strong>: transactional email delivery via Gmail SMTP (contact form submissions). <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
      </ul>
      <p>
        We review the privacy practices of our service providers before engagement and where possible select
        vendors with Canadian or EU-standard data protections.
      </p>

      <h2 id="children">11. Children's Data</h2>
      <p>
        Our Services are intended for use by childcare operators and their staff, specifically adults operating licensed
        childcare facilities. We do not knowingly collect personal information directly from children under
        the age of 13. Information about children enrolled in a childcare centre is entered by the centre operator
        and processed on their behalf.
      </p>
      <p>
        Operators are responsible for ensuring they have appropriate consent from parents and guardians to
        enter and process information about children in their care, as required by their provincial childcare
        licensing regulations and PIPEDA.
      </p>

      <h2 id="changes">12. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or
        legal requirements. When we make material changes, we will notify you by email (to the address on your
        account) and by posting a prominent notice on the platform at least 30 days before the changes take effect.
      </p>
      <p>
        Your continued use of the Services after the effective date of any update constitutes your acceptance
        of the revised policy.
      </p>

      <h2 id="contact">13. Contact Us</h2>
      <p>
        For privacy-related questions, requests, or complaints, contact us at:
      </p>
      <p>
        <strong>Privacy Officer</strong><br />
        Sprout &amp; Vine Care<br />
        <a href="mailto:hello@sproutandvinecare.ca">hello@sproutandvinecare.ca</a>
      </p>
      <p>
        We will acknowledge your inquiry within 2 business days and respond fully within 30 calendar days.
        If you are not satisfied with our response, you have the right to contact the Office of the Privacy
        Commissioner of Canada or, for Québec residents, the Commission d'accès à l'information du Québec.
      </p>
    </LegalLayout>
  )
}
