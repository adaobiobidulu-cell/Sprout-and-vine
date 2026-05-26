interface TocItem {
  id: string
  label: string
}

interface Props {
  title: string
  effectiveDate: string
  lastUpdated: string
  toc: TocItem[]
  children: React.ReactNode
}

export default function LegalLayout({ title, effectiveDate, lastUpdated, toc, children }: Props) {
  return (
    <div className="bg-white min-h-screen">
      {/* Draft banner */}
      <div className="bg-amber-50 border-b border-amber-200 px-5 py-3 text-center">
        <p className="text-[13px] text-amber-800 font-medium">
          Draft document — pending professional legal review. Not yet final.{' '}
          <a href="mailto:legal@sproutandvine.ca" className="underline hover:text-amber-900">
            Questions? Email legal@sproutandvine.ca
          </a>
        </p>
      </div>

      {/* Header */}
      <div className="bg-cream border-b border-[rgba(47,74,58,0.1)] px-5 md:px-8 py-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.14em] text-sage-green font-semibold mb-3">Legal</p>
          <h1
            className="font-display font-medium text-forest-green mb-4"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
          >
            {title}
          </h1>
          <p className="text-[13px] text-dark-text/45">
            Effective: {effectiveDate} · Last updated: {lastUpdated}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-5 md:px-8 py-12">
        <div className="flex gap-16">
          {/* Sticky TOC — desktop only */}
          <aside className="hidden lg:block flex-shrink-0 w-52">
            <div className="sticky top-8">
              <p className="text-[10px] uppercase tracking-[0.14em] text-dark-text/40 font-semibold mb-4">Contents</p>
              <nav>
                <ul className="space-y-2">
                  {toc.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-[13px] text-dark-text/55 hover:text-forest-green transition-colors leading-snug block"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0 prose-legal">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
