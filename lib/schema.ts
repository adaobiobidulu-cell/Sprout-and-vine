import { base } from '@/lib/seo'

/* JSON-LD builders. Each returns a plain object ready for JsonLd — kept
   separate from the page components so the same shape (e.g. Organization)
   is defined once and reused wherever it's referenced (via @id). */

export const ORG_ID = `${base}/#organization`
export const WEBSITE_ID = `${base}/#website`

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'Sprout & Vine Care',
    url: base,
    // A static public/ asset, not the /apple-icon route — that route's URL
    // includes a build-specific hash suffix that changes on every deploy,
    // which would break a search engine's cached reference to it.
    logo: `${base}/logo-s.png`,
    description:
      'A childcare management platform built around CWELCC from day one, for Canadian childcare operators.',
    sameAs: ['https://x.com/sproutandvine'],
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: 'Sprout & Vine Care',
    url: base,
    publisher: { '@id': ORG_ID },
    inLanguage: ['en', 'fr'],
  }
}

export function softwareApplicationSchema(lang: 'en' | 'fr') {
  const isFr = lang === 'fr'
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Sprout & Vine Care',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: isFr ? `${base}/fr` : base,
    inLanguage: lang,
    description: isFr
      ? "Sprout & Vine Care est une plateforme moderne de gestion de services de garde conçue pour les centres canadiens, avec le suivi des subventions PÉLCPN, le ramassage sécurisé et la communication bilingue avec les familles."
      : "Sprout & Vine Care is a modern childcare management platform designed for Canadian centres, with CWELCC subsidy tracking, Smart Pickup, and bilingual family communication.",
    publisher: { '@id': ORG_ID },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'CAD',
      lowPrice: '0',
      highPrice: '249',
      offerCount: '7',
      availability: 'https://schema.org/PreOrder',
    },
  }
}

export function faqPageSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}

export function articleSchema({
  headline,
  description,
  path,
  datePublished,
  dateModified,
}: {
  headline: string
  description: string
  path: string
  datePublished: string
  dateModified?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url: `${base}${path}`,
    mainEntityOfPage: `${base}${path}`,
    datePublished,
    dateModified: dateModified ?? datePublished,
    publisher: { '@id': ORG_ID },
    author: { '@id': ORG_ID },
  }
}

export function blogPostingSchema({
  headline,
  description,
  path,
  datePublished,
  authorName,
}: {
  headline: string
  description: string
  path: string
  datePublished: string
  authorName: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    url: `${base}${path}`,
    mainEntityOfPage: `${base}${path}`,
    datePublished,
    dateModified: datePublished,
    author: { '@type': 'Person', name: authorName },
    publisher: { '@id': ORG_ID },
  }
}
