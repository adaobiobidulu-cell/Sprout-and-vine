'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

function LogoMarkCream() {
  return (
    <svg viewBox="0 0 58 84" width="18" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Top leaf */}
      <path d="M 22 14 C 18 8 10 8 12 14 C 14 18 19 16 22 14 Z" fill="rgba(247,242,232,0.7)" />
      {/* Upper loop of the & */}
      <path d="M 22 14 C 32 8 46 12 50 24 C 54 36 46 46 34 46 C 22 46 14 38 16 28 C 18 20 26 16 34 18 C 42 20 46 30 42 38" stroke="#F7F2E8" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      {/* Lower diagonal body */}
      <path d="M 18 32 C 14 42 12 58 18 66 C 24 74 38 76 48 70 C 56 65 56 55 50 52 C 44 49 34 52 30 56" stroke="#F7F2E8" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      {/* Terracotta heart */}
      <path d="M 44 22 C 44 20 42 18 40 20 C 38 18 36 20 36 22 C 36 25 40 29 40 29 C 40 29 44 25 44 22 Z" fill="#E2845F" />
      {/* Bottom leaf left */}
      <path d="M 18 64 C 10 62 8 68 14 69 C 16 69 18 67 18 64 Z" fill="rgba(247,242,232,0.45)" />
      {/* Bottom leaf right */}
      <path d="M 50 68 C 58 66 60 72 54 73 C 52 73 50 71 50 68 Z" fill="rgba(247,242,232,0.45)" />
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
      { label: 'CWELCC Guide', href: '/resources' },
      { label: 'Licensing Checklist', href: '/resources' },
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
      { label: 'Guide PÉLCN', href: '/fr/resources' },
      { label: 'Liste de vérification', href: '/fr/resources' },
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
            <p className="text-[13px] text-cream/55 leading-relaxed">
              {isFr ? 'Sprout & Vine est exploité par Prime Horizon Inc.' : 'Sprout & Vine operates as Prime Horizon Inc.'}
            </p>
            <p className="text-[12px] text-cream/40 mt-3">
              © 2026 Prime Horizon Inc.{isFr ? ' Tous droits réservés.' : ' All rights reserved.'}
            </p>
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
