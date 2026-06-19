const base = 'https://www.sproutandvinecare.ca'

// For EN pages paired with a FR page (same or different slug).
// frPath defaults to /fr + enPath when omitted.
export function altEn(enPath: string, frPath?: string) {
  const fr = frPath ?? `/fr${enPath === '/' ? '' : enPath}`
  return {
    canonical: `${base}${enPath}`,
    languages: {
      en: `${base}${enPath}`,
      fr: `${base}${fr}`,
      'x-default': `${base}${enPath}`,
    },
  }
}

// For FR pages paired with an EN page (same or different slug).
// enPath defaults to frPath.replace(/^\/fr/, '') when omitted.
export function altFr(frPath: string, enPath?: string) {
  const en = enPath ?? (frPath.replace(/^\/fr/, '') || '/')
  return {
    canonical: `${base}${frPath}`,
    languages: {
      en: `${base}${en}`,
      fr: `${base}${frPath}`,
      'x-default': `${base}${en}`,
    },
  }
}

// For pages with no FR equivalent — self-referencing canonical only.
export function canonicalOnly(path: string) {
  return { canonical: `${base}${path}` }
}
