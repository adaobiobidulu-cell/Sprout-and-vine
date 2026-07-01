'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import BrandLogo from '@/components/brand-logo'

function ChevronDown() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* `compact` renders a short single-word tag for the tight desktop header row;
   the full "Coming Soon" / "Bientôt disponible" wording is reserved for the
   mobile dropdown, where a vertical list has room to spare. Without this,
   the French wording alone is wide enough to push the nav into the logo and
   wrap "Feuille de route" / "Programme fondateur" onto multiple lines. */
function ComingSoon({ isFr, compact = false }: { isFr: boolean; compact?: boolean }) {
  return (
    <span className={`text-dark-text/40 font-normal whitespace-nowrap ${compact ? 'text-[11px]' : ''}`}>
      {' '}
      {compact ? '· ' : '— '}
      {compact ? (isFr ? 'Bientôt' : 'Soon') : isFr ? 'Bientôt disponible' : 'Coming Soon'}
    </span>
  )
}

/* Pages that have a /fr equivalent */
const frenchPages: Record<string, string> = {
  '/': '/fr',
  '/pricing': '/fr/pricing',
  '/features': '/fr/features',
  '/resources': '/fr/resources',
  '/about': '/fr/about',
  '/contact': '/fr/contact',
  '/roadmap': '/fr/roadmap',
}

function LangToggle() {
  const pathname = usePathname()
  const isFr = pathname.startsWith('/fr')

  const frHref = frenchPages[pathname] ?? '/fr'
  const enHref = isFr ? (pathname.replace(/^\/fr/, '') || '/') : pathname

  return (
    <div className="flex items-center gap-1.5 text-[13px] font-medium border border-[rgba(47,74,58,0.18)] rounded-full px-3 py-1">
      <Link
        href={enHref}
        className={`transition-colors ${!isFr ? 'text-forest-green font-semibold' : 'text-dark-text/40 hover:text-forest-green'}`}
      >
        EN
      </Link>
      <span className="text-dark-text/20 select-none text-[11px]">|</span>
      <Link
        href={frHref}
        className={`transition-colors ${isFr ? 'text-forest-green font-semibold' : 'text-dark-text/40 hover:text-forest-green'}`}
      >
        FR
      </Link>
    </div>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const isFr = pathname.startsWith('/fr')
  const p = (en: string) => isFr ? `/fr${en}` : en

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // French labels ("Fonctionnalités", "Feuille de route", "Bientôt disponible" x2, etc.)
  // are wide enough that the desktop nav doesn't comfortably fit until the `xl`
  // breakpoint — below that it stays on the mobile hamburger menu instead of
  // squeezing into the logo or wrapping onto multiple lines. English fits from `md`.

  return (
    <header
      className={`sticky top-0 z-50 h-[84px] ${isFr ? 'xl:h-[112px]' : 'md:h-[112px]'} transition-all duration-300 ${scrolled ? 'border-b border-[rgba(47,74,58,0.12)]' : ''}`}
      style={{
        background: 'rgba(247,242,232,0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-full flex items-center justify-between">

        {/* Logo */}
        <Link href={isFr ? '/fr' : '/'} className="flex items-center" aria-label="Sprout & Vine Care">
          <BrandLogo height={84} className={`h-[60px] w-auto flex-shrink-0 ${isFr ? 'xl:h-[84px]' : 'md:h-[84px]'}`} />
        </Link>

        {/* Desktop nav links */}
        <nav className={`hidden ${isFr ? 'xl:flex' : 'md:flex'} items-center gap-3`} aria-label="Primary navigation">
          <Link
            href={p('/features')}
            className="flex items-center gap-1 text-[13px] font-medium text-dark-text/80 hover:text-forest-green transition-colors whitespace-nowrap"
          >
            {isFr ? 'Fonctionnalités' : 'Features'} <ChevronDown />
          </Link>
          <Link
            href={p('/pricing')}
            className="text-[13px] font-medium text-dark-text/80 hover:text-forest-green transition-colors whitespace-nowrap"
          >
            {isFr ? 'Tarifs' : 'Pricing'}
          </Link>
          <Link
            href="/compare"
            className="text-[13px] font-medium text-dark-text/80 hover:text-forest-green transition-colors whitespace-nowrap"
          >
            {isFr ? 'Comparer' : 'Compare'}
          </Link>
          <Link
            href={p('/resources')}
            className="flex items-center gap-1 text-[13px] font-medium text-dark-text/80 hover:text-forest-green transition-colors whitespace-nowrap"
          >
            {isFr ? 'Ressources' : 'Resources'} <ChevronDown />
          </Link>
          <Link
            href={p('/roadmap')}
            className="text-[13px] font-medium text-dark-text/80 hover:text-forest-green transition-colors whitespace-nowrap"
          >
            {isFr ? 'Feuille de route' : 'Roadmap'}
          </Link>
          <Link
            href={p('/about')}
            className="text-[13px] font-medium text-dark-text/80 hover:text-forest-green transition-colors whitespace-nowrap"
          >
            {isFr ? 'À propos' : 'About'}
          </Link>
        </nav>

        {/* Desktop CTAs */}
        <div className={`hidden ${isFr ? 'xl:flex' : 'md:flex'} items-center gap-2.5`}>
          <LangToggle />
          <Link
            href="/login"
            className="text-[13px] font-medium text-dark-text/80 hover:text-forest-green transition-colors whitespace-nowrap"
          >
            {isFr ? 'Connexion' : 'Log in'}
            <ComingSoon isFr={isFr} compact />
          </Link>
          <Link
            href={p('/founding')}
            className="bg-forest-green text-white text-[13px] font-medium px-4 py-[10px] rounded-lg hover:bg-[#243d2f] transition-colors whitespace-nowrap"
          >
            {isFr ? 'Programme fondateur' : 'Founding Program'}
          </Link>

          <span
            className="text-[13px] font-medium text-dark-text/80 cursor-default whitespace-nowrap"
          >
            {isFr ? 'Trouver une garderie' : 'Find childcare'}
            <ComingSoon isFr={isFr} compact />
          </span>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`${isFr ? 'xl:hidden' : 'md:hidden'} flex flex-col gap-[5px] p-2 -mr-2`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-[22px] h-[1.5px] bg-forest-green transition-all duration-200 origin-center ${
              mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''
            }`}
          />
          <span
            className={`block w-[22px] h-[1.5px] bg-forest-green transition-all duration-200 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-[22px] h-[1.5px] bg-forest-green transition-all duration-200 origin-center ${
              mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div
          className={`absolute top-[84px] left-0 right-0 ${isFr ? 'xl:hidden' : 'md:hidden'} border-b border-[rgba(47,74,58,0.12)] shadow-lg`}
          style={{ background: 'rgba(247,242,232,0.97)', backdropFilter: 'blur(12px)' }}
        >
          <nav className="px-5 py-5 flex flex-col gap-1" aria-label="Mobile navigation">
            {[
              { label: isFr ? 'Fonctionnalités' : 'Features', href: p('/features') },
              { label: isFr ? 'Tarifs' : 'How Pricing Works', href: p('/pricing') },
              { label: isFr ? 'Comparer' : 'Compare', href: '/compare' },
              { label: isFr ? 'Ressources' : 'Resources', href: p('/resources') },
              { label: isFr ? 'Feuille de route' : 'Roadmap', href: p('/roadmap') },
              { label: isFr ? 'À propos' : 'About', href: p('/about') },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="py-3 text-[15px] font-medium text-dark-text/80 hover:text-forest-green border-b border-[rgba(47,74,58,0.07)] last:border-0 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <div className="py-1">
                <LangToggle />
              </div>

              <span
                className="text-[15px] font-medium text-dark-text/70 cursor-default"
              >
                {isFr ? 'Trouver une garderie' : 'Find childcare'}
                <ComingSoon isFr={isFr} />
              </span>
              <Link
                href="/login"
                className="text-[15px] font-medium text-dark-text/70 hover:text-forest-green transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {isFr ? 'Connexion' : 'Log in'}
                <ComingSoon isFr={isFr} />
              </Link>
              <Link
                href={p('/founding')}
                className="bg-forest-green text-white text-[14px] font-medium px-5 py-3 rounded-lg text-center hover:bg-[#243d2f] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {isFr ? 'Programme fondateur' : 'Founding Program'}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
