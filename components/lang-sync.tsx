'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/* Keeps <html lang> correct across client-side navigation between English
   and French routes. The root layout can't read the current path itself —
   it's a Server Component shared by every route, and giving it that via
   headers()/a dynamic segment would opt the entire static site into dynamic
   rendering just to set one attribute. A blocking inline script (see
   layout.tsx) gets the initial page load right before hydration; this
   effect re-applies it whenever the route changes without a full reload
   (e.g. clicking the EN/FR toggle), since the root layout itself doesn't
   re-render on that kind of navigation. */
export default function LangSync() {
  const pathname = usePathname()

  useEffect(() => {
    document.documentElement.lang = pathname.startsWith('/fr') ? 'fr' : 'en'
  }, [pathname])

  return null
}
