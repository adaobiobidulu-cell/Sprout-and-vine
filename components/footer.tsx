'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

function LogoMarkCream() {
  return (
    <svg viewBox="0 0 62 86" width="18" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M 27 13 C 25 6 15 5 16 12 C 17 19 25 16 27 13 Z" fill="rgba(247,242,232,0.5)" />
      <path
        d="M 28 14 C 40 8 56 20 51 34 C 46 48 24 46 20 56 C 14 66 20 78 34 76 C 48 74 56 62 47 56"
        stroke="#F7F2E8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      />
      <path d="M 8 55 L 52 32" stroke="#F7F2E8" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 44 27 C 38 22 36 15 40 14 C 42 13 44 17 44 17 C 44 17 46 13 48 14 C 52 15 50 22 44 27 Z" fill="#E2845F" />
      <path d="M 24 78 C 18 71 10 72 12 78 C 14 84 22 81 24 78 Z" fill="rgba(247,242,232,0.45)" />
      <path d="M 36 77 C 42 70 50 71 48 77 C 46 83 38 80 36 77 Z" fill="rgba(247,242,232,0.45)" />
    </svg>
  )
}

const footerColumns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/features' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Changelog', href: '#' },
      { label: 'Roadmap', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'CWELCC Guide', href: '#' },
      { label: 'Licensing Checklist', href: '#' },
      { label: 'Help Centre', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Security', href: '#' },
    ],
  },
]

const frenchPages: Record<string, string> = {
  '/': '/fr',
  '/pricing': '/fr/pricing',
  '/features': '/fr/features',
  '/about': '/fr/about',
  '/contact': '/fr/contact',
}

export default function Footer() {
  const pathname = usePathname()
  const isFr = pathname.startsWith('/fr')
  const frHref = frenchPages[pathname] ?? '/fr'
  const enHref = isFr ? (pathname.replace(/^\/fr/, '') || '/') : pathname

  return (
    <footer className="bg-forest-green text-cream">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* Left: brand block */}
          <div className="flex-shrink-0 lg:max-w-[260px]">
            <Link href="/" className="flex items-center gap-1.5 mb-5" aria-label="Sprout & Vine home">
              <span className="font-display text-[23px] font-medium text-cream leading-none tracking-tight">sprout</span>
              <LogoMarkCream />
              <span className="font-display text-[23px] font-medium text-cream leading-none tracking-tight">vine</span>
            </Link>
            <p className="text-[11px] text-cream/60 uppercase tracking-[0.12em] mb-5 font-medium">
              Growing connections. Nurturing futures.
            </p>
            <p className="text-[13px] text-cream/55 leading-relaxed">
              Sprout &amp; Vine operates as Prime Horizon Inc.
            </p>
            <p className="text-[12px] text-cream/40 mt-3">
              © 2025 Prime Horizon Inc. All rights reserved.
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
            <Link href="#" className="text-[12px] text-cream/45 hover:text-cream transition-colors">
              Privacy
            </Link>
            <span className="text-cream/25 text-[12px] select-none">|</span>
            <Link href="#" className="text-[12px] text-cream/45 hover:text-cream transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
