import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://sproutandvine.ca'
  const now = new Date()

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/features`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/for-educators`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/vs-brightwheel`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/vs-lillio`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/vs-procare`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/fr`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/fr/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/fr/features`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/fr/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/fr/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ]
}
