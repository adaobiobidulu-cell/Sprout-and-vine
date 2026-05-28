import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://sproutandvine.ca'
  const now = new Date()

  return [
    // Core marketing — EN
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/founding`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${base}/features`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/for-educators`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/resources`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Comparison pages — EN
    { url: `${base}/vs-brightwheel`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/vs-lillio`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/vs-procare`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Content / community — EN
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${base}/changelog`, lastModified: now, changeFrequency: 'weekly', priority: 0.5 },
    { url: `${base}/roadmap`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/careers`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/help`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },

    // Legal — EN
    { url: `${base}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${base}/security`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },

    // Core marketing — FR
    { url: `${base}/fr`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/fr/features`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/fr/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/fr/resources`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/fr/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/fr/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },

    // Content / community — FR
    { url: `${base}/fr/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.5 },
    { url: `${base}/fr/changelog`, lastModified: now, changeFrequency: 'weekly', priority: 0.4 },
    { url: `${base}/fr/roadmap`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/fr/careers`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/fr/help`, lastModified: now, changeFrequency: 'weekly', priority: 0.5 },

    // Legal — FR
    { url: `${base}/fr/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${base}/fr/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${base}/fr/security`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
  ]
}
