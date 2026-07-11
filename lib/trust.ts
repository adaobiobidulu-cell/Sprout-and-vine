/*
 * Trust and privacy publication gates (website brief: security).
 *
 * Same one-file-flip pattern as the CWELCC calculator: the final
 * /security copy and the subprocessor list are fully built and ship dark.
 * Flipping the flags below (and filling the null placeholders) publishes
 * them. Nothing here goes live until the brief's publication gate clears:
 *
 *   - legalReviewSignedOff: the mandatory pre-launch legal review.
 *     Locked and non-negotiable; nothing publishes while this is false.
 *   - consentCentreBuilt: platform 9.6 Consent and Privacy Centre exists
 *     AND the live screens implement separate, un-pre-checked consent per
 *     purpose. The /security consent section renders only when true.
 *   - retentionConfirmed: retention periods confirmed with the licensing
 *     expert (CCEYA / O. Reg. 137/15). Fill the RETENTION lines below at
 *     the same time; never state an unverified period.
 *   - subprocessorsConfirmed: every SUBPROCESSORS row has its processing
 *     location verified from the actual account configuration AND a
 *     signed DPA. Publishing the list implies both.
 *
 * PRIVACY_CONTACT stays null until Ada designates a real, monitored
 * privacy officer contact (Law 25 requires designation once a Quebec
 * family is served). Do not guess or invent an address.
 *
 * Keep the residency verification record (July 2026: project region,
 * Storage, backups, read replicas, Edge Function execution all confirmed
 * in ca-central-1) on file; re-verify if any region pin or backup
 * configuration changes.
 */

export const TRUST_GATES = {
  legalReviewSignedOff: false,
  consentCentreBuilt: false,
  retentionConfirmed: false,
  subprocessorsConfirmed: false,
}

export const PRIVACY_CONTACT = {
  name: null as string | null,
  email: null as string | null,
}

/* Retention statements for /security. Fill from the confirmed retention
   schedule; each line renders only when non-null. */
export const RETENTION = {
  /* e.g. 'Care records are retained by your centre for N years after your
     child leaves, as Ontario childcare licensing requires.' */
  careRecordsLine: null as string | null,
  /* Contact and log retention line (Loops contact records, request logs,
     temporary exports beyond the 24-hour link). */
  contactAndLogsLine: null as string | null,
}

export function securityPageLive(): boolean {
  return (
    TRUST_GATES.legalReviewSignedOff &&
    TRUST_GATES.consentCentreBuilt &&
    TRUST_GATES.retentionConfirmed &&
    TRUST_GATES.subprocessorsConfirmed &&
    PRIVACY_CONTACT.email !== null
  )
}

export interface Subprocessor {
  name: string
  role: string
  receives: string
  /* Provisional until locationVerified: what we believe from the
     provider's documentation, not yet confirmed from our own account
     configuration. Unverified locations must not publish. */
  location: string
  locationVerified: boolean
  dpaSigned: boolean
}

export const SUBPROCESSORS: Subprocessor[] = [
  {
    name: 'Supabase',
    role: 'Core data infrastructure: database, storage, authentication',
    receives:
      'Effectively all platform records (children, families, staff, health, photos, documents)',
    location: 'Canada (ca-central-1)',
    locationVerified: true, // verified July 2026, incl. backups and Edge Functions
    dpaSigned: false,
  },
  {
    name: 'Stripe / Stripe Connect',
    role: 'Payment processing and operator payouts',
    receives: 'Billing contact details, payment information, operator payout details',
    location: 'Outside Canada (United States)',
    locationVerified: false,
    dpaSigned: false,
  },
  {
    name: 'Loops',
    role: 'Transactional email delivery',
    receives: 'Recipient name and email, message content',
    location: 'Outside Canada (United States)',
    locationVerified: false,
    dpaSigned: false,
  },
  {
    name: 'Anthropic (AI)',
    role: 'AI-assisted drafting of administrative summaries',
    receives:
      "Organisation-level information only: centre name, dates, subsidy totals, and the operator's own text. Never a child's name, health information, or behavioural data.",
    location: 'Outside Canada (United States)',
    locationVerified: false,
    dpaSigned: false,
  },
  {
    name: 'Vercel',
    role: 'Serving the web app and marketing site',
    receives: 'Technical request and log data, IP addresses',
    location: 'Global edge network',
    locationVerified: false,
    dpaSigned: false,
  },
  {
    name: 'RevenueCat',
    role: 'Subscription management (parent app)',
    receives: 'Subscription and device identifiers',
    location: 'Outside Canada (United States)',
    locationVerified: false,
    dpaSigned: false,
  },
  {
    name: 'Expo',
    role: 'App delivery and push notifications (parent app)',
    receives: 'Push notification tokens, device information',
    location: 'Outside Canada (United States)',
    locationVerified: false,
    dpaSigned: false,
  },
]

export function subprocessorsPageLive(): boolean {
  return (
    TRUST_GATES.legalReviewSignedOff &&
    TRUST_GATES.subprocessorsConfirmed &&
    SUBPROCESSORS.every(s => s.locationVerified && s.dpaSigned)
  )
}
