'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function AnnouncementBar() {
  const isFr = usePathname().startsWith('/fr')

  return (
    <div className="bg-forest-green text-cream text-center py-2 px-4">
      <p className="text-[12px] font-medium tracking-[0.02em]">
        <span className="inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-sage-green animate-pulse flex-shrink-0" />
          {isFr
            ? <>Accueil de centres fondateurs partout au Canada.{' '}<Link href="/founding" className="underline underline-offset-2 hover:text-cream/80 transition-colors">En savoir plus</Link></>
            : <>Currently onboarding founding centres across Canada.{' '}<Link href="/founding" className="underline underline-offset-2 hover:text-cream/80 transition-colors">Learn more</Link></>
          }
        </span>
      </p>
    </div>
  )
}
