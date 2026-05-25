import Link from 'next/link'

function LogoMarkCream() {
  return (
    <svg viewBox="0 0 44 58" width="22" height="29" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="24" cy="5" rx="3.5" ry="6" fill="rgba(247,242,232,0.5)" transform="rotate(-22 24 5)" />
      <path
        d="M 26 9 C 24 3 16 1 11 5 C 6 9 7 17 12 20 C 17 23 22 21 22 27 C 22 33 14 37 10 42 C 6 47 9 54 18 54 C 27 54 34 47 30 42"
        stroke="#F7F2E8" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"
      />
      <path d="M 5 28 L 34 14" stroke="#F7F2E8" strokeWidth="2.3" strokeLinecap="round" />
      <path d="M 30 42 C 36 38 39 43 34 50" stroke="#F7F2E8" strokeWidth="2.3" strokeLinecap="round" />
      <path d="M 17 13 C 18 11 22 11 23 13 C 24 16 22 19 19 21 C 16 19 15 16 17 13 Z" fill="#E2845F" />
      <ellipse cx="15" cy="54" rx="3.2" ry="5" fill="rgba(247,242,232,0.4)" transform="rotate(18 15 54)" />
      <ellipse cx="25" cy="53" rx="2.8" ry="4.5" fill="rgba(247,242,232,0.4)" transform="rotate(-22 25 53)" />
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

export default function Footer() {
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
            <Link href="/" className="text-[13px] font-semibold text-cream/80 hover:text-cream transition-colors">
              EN
            </Link>
            <span className="text-cream/25 text-[12px] select-none">|</span>
            <Link href="/fr" className="text-[13px] text-cream/45 hover:text-cream transition-colors">
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
