'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

function LogoMarkCream() {
  return (
    <svg viewBox="0 0 90 126" width="18" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Leaf stem */}
      <path d="M 26 32 C 20 22 14 12 10 8" stroke="#F7F2E8" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Top leaf */}
      <path d="M 10 8 C 2 2 0 10 4 16 C 8 22 20 22 26 16 C 22 10 14 6 10 8 Z" fill="rgba(247,242,232,0.6)" />
      {/* Upper vine: crossing up through loop to spiral curl */}
      <path d="M 40 64 C 32 56 22 46 20 36 C 18 24 26 14 38 14 C 50 14 64 18 70 30 C 76 40 70 50 62 48 C 56 48 54 42 58 38 C 62 34 66 40 62 44" stroke="#F7F2E8" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Lower vine: crossing down through large circle */}
      <path d="M 40 64 C 48 70 58 74 64 84 C 70 96 68 112 56 118 C 44 124 26 120 16 110 C 6 98 8 82 18 74 C 24 70 32 66 38 68" stroke="#F7F2E8" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Heart */}
      <path d="M 52 58 C 52 54 50 50 46 52 C 42 50 40 54 40 58 C 40 64 46 70 46 70 C 46 70 52 64 52 58 Z" fill="#E2845F" />
      {/* Bottom leaf — upper */}
      <path d="M 64 84 C 76 72 88 76 84 88 C 80 96 70 94 64 84 Z" fill="rgba(247,242,232,0.55)" />
      {/* Bottom leaf — lower */}
      <path d="M 62 94 C 74 86 86 92 82 104 C 78 112 66 108 62 94 Z" fill="rgba(247,242,232,0.55)" />
    </svg>
  )
}

const footerColumnsEn = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/features' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Changelog', href: '/changelog' },
      { label: 'Roadmap', href: '/roadmap' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Seeds Hub', href: '/seeds' },
      { label: 'CWELCC Guide', href: '/resources/cwelcc-guide' },
      { label: 'Licensing Checklist', href: '/resources/licensing-checklist' },
      { label: 'Help Centre', href: '/help' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Security', href: '/security' },
    ],
  },
]

const footerColumnsFr = [
  {
    title: 'Produit',
    links: [
      { label: 'Fonctionnalités', href: '/fr/features' },
      { label: 'Tarifs', href: '/fr/pricing' },
      { label: 'Journal', href: '/fr/changelog' },
      { label: 'Feuille de route', href: '/fr/roadmap' },
    ],
  },
  {
    title: 'Entreprise',
    links: [
      { label: 'À propos', href: '/fr/about' },
      { label: 'Blogue', href: '/fr/blog' },
      { label: 'Carrières', href: '/fr/careers' },
      { label: 'Contact', href: '/fr/contact' },
    ],
  },
  {
    title: 'Ressources',
    links: [
      { label: 'Seeds', href: '/fr/seeds' },
      { label: 'Guide PÉLCPN', href: '/fr/resources/guide-pelcpn' },
      { label: 'Liste de vérification', href: '/fr/resources/liste-verification-licences' },
      { label: "Centre d'aide", href: '/fr/help' },
    ],
  },
  {
    title: 'Légal',
    links: [
      { label: 'Confidentialité', href: '/fr/privacy' },
      { label: "Conditions d'utilisation", href: '/fr/terms' },
      { label: 'Sécurité', href: '/fr/security' },
    ],
  },
]

const frenchPages: Record<string, string> = {
  '/': '/fr',
  '/pricing': '/fr/pricing',
  '/features': '/fr/features',
  '/about': '/fr/about',
  '/contact': '/fr/contact',
  '/blog': '/fr/blog',
  '/changelog': '/fr/changelog',
  '/roadmap': '/fr/roadmap',
  '/careers': '/fr/careers',
  '/help': '/fr/help',
  '/resources': '/fr/resources',
  '/privacy': '/fr/privacy',
  '/terms': '/fr/terms',
  '/security': '/fr/security',
}

export default function Footer() {
  const pathname = usePathname()
  const isFr = pathname.startsWith('/fr')
  const frHref = frenchPages[pathname] ?? '/fr'
  const enHref = isFr ? (pathname.replace(/^\/fr/, '') || '/') : pathname
  const footerColumns = isFr ? footerColumnsFr : footerColumnsEn

  return (
    <footer className="bg-forest-green text-cream">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* Left: brand block */}
          <div className="flex-shrink-0 lg:max-w-[260px]">
            <Link href={isFr ? '/fr' : '/'} className="flex items-center gap-1.5 mb-5" aria-label="Sprout & Vine home">
              <span className="font-display text-[23px] font-medium text-cream leading-none tracking-tight">sprout</span>
              <LogoMarkCream />
              <span className="font-display text-[23px] font-medium text-cream leading-none tracking-tight">vine</span>
            </Link>
            <p className="text-[11px] text-cream/60 uppercase tracking-[0.12em] mb-5 font-medium">
              {isFr ? 'Créer des liens. Nourrir les avenirs.' : 'Growing connections. Nurturing futures.'}
            </p>
            <p className="text-[12px] text-cream/40 mt-3">
              {isFr ? '© 2026 Sprout & Vine. Tous droits réservés.' : '© 2026 Sprout & Vine. All rights reserved.'}
            </p>
            <div className="flex gap-2 mt-4">
              <a href="/founding" className="inline-flex items-center gap-1.5 bg-cream/10 hover:bg-cream/20 transition-colors px-3 py-1.5 rounded-md">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-cream/70 flex-shrink-0" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span className="text-[10px] font-medium text-cream/60">iOS</span>
              </a>
              <a href="/founding" className="inline-flex items-center gap-1.5 bg-cream/10 hover:bg-cream/20 transition-colors px-3 py-1.5 rounded-md">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-cream/70 flex-shrink-0" aria-hidden="true">
                  <path d="M3.18 23.76c.3.17.64.22.99.16l12.87-7.43-2.82-2.82-11.04 10.09zm-1.65-20.4A1.99 1.99 0 001 4.96v14.08c0 .65.28 1.24.72 1.64l.09.08 7.89-7.89v-.19L1.53 4.8l-.01-.01v-.01zm19.65 7.47l-2.76-1.6-3.14 3.14 3.14 3.13 2.79-1.61c.79-.46.79-1.21-.03-1.66zM4.17.24L17.04 7.68l-2.82 2.82L1.35.41c.35-.06.71 0 1.01.17l1.81 1.07V.24z"/>
                </svg>
                <span className="text-[10px] font-medium text-cream/60">Android</span>
              </a>
            </div>
          </div>

          {/* Right: link columns */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-6">
            {footerColumns.map(({ title, links }) => (
              <div key={title}>
                <h3 className="text-[11px] uppercase tracking-[0.12em] font-semibold text-cream/45 mb-4">
                  {title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="text-[13.5px] text-cream/65 hover:text-cream transition-colors leading-snug"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link href={enHref} className={`text-[13px] transition-colors ${!isFr ? 'font-semibold text-cream' : 'text-cream/45 hover:text-cream'}`}>
              EN
            </Link>
            <span className="text-cream/25 text-[12px] select-none">|</span>
            <Link href={frHref} className={`text-[13px] transition-colors ${isFr ? 'font-semibold text-cream' : 'text-cream/45 hover:text-cream'}`}>
              FR
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href={isFr ? '/fr/privacy' : '/privacy'} className="text-[12px] text-cream/45 hover:text-cream transition-colors">
              {isFr ? 'Confidentialité' : 'Privacy'}
            </Link>
            <span className="text-cream/25 text-[12px] select-none">|</span>
            <Link href={isFr ? '/fr/terms' : '/terms'} className="text-[12px] text-cream/45 hover:text-cream transition-colors">
              {isFr ? 'Conditions' : 'Terms'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
