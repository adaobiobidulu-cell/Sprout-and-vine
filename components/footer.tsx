'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import BrandLogo from '@/components/brand-logo'

const footerColumnsEn = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/features' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Compare', href: '/compare' },
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
      { label: 'Comparer', href: '/compare' },
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
      {/* Development disclaimer */}
      <div className="border-b border-cream/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-3 text-center">
          <p className="text-[11px] text-cream/35 leading-relaxed">
            Sprout &amp; Vine is currently in development. Founding operators are helping shape the platform before launch through feedback, research, and early-access participation.
          </p>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* Left: brand block */}
          <div className="flex-shrink-0 lg:max-w-[260px]">
            <Link href={isFr ? '/fr' : '/'} className="inline-flex mb-5" aria-label="Sprout & Vine home">
              <BrandLogo tone="cream" height={64} />
            </Link>
            <p className="text-[11px] text-cream/60 uppercase tracking-[0.12em] mb-5 font-medium">
              {isFr ? 'Créer des liens. Nourrir les avenirs.' : 'Growing connections. Nurturing futures.'}
            </p>
            <p className="text-[12px] text-cream/40 mt-3">
              {isFr ? '© 2026 Sprout & Vine. Tous droits réservés.' : '© 2026 Sprout & Vine. All rights reserved.'}
            </p>
            <div className="flex flex-col gap-1 mt-4">
              <p className="text-[11px] text-cream/40">iOS app coming Q4 2026</p>
              <p className="text-[11px] text-cream/40">Android app planned for 2027</p>
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
