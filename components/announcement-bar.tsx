'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FOUNDING_SPOTS_REMAINING, FOUNDING_SPOTS_TOTAL } from '@/lib/config'

export default function AnnouncementBar() {
  const isFr = usePathname().startsWith('/fr')

  return (
    <div className="bg-forest-green text-cream text-center py-2 px-4">
      <p className="text-[12px] font-medium tracking-[0.02em]">
        <span className="inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse flex-shrink-0" />
          {isFr
            ? <>{FOUNDING_SPOTS_REMAINING} des {FOUNDING_SPOTS_TOTAL} places fondatrices restantes.{' '}<Link href="/founding" className="underline underline-offset-2 hover:text-cream/80 transition-colors">En savoir plus</Link></>
            : <>{FOUNDING_SPOTS_REMAINING} of {FOUNDING_SPOTS_TOTAL} founding spots remaining.{' '}<Link href="/founding" className="underline underline-offset-2 hover:text-cream/80 transition-colors">Apply now</Link></>
          }
        </span>
      </p>
    </div>
  )
}
