'use client'

import { motion } from 'framer-motion'

const EASE_SPROUT = [0.22, 1, 0.36, 1] as const

/* Marks the start of one of the guided parts of a homepage. The growing
   line beside the label is meant to read as a small recurring signature
   detail across the site, not a one-off flourish. */
export function PartLabel({
  number,
  title,
  bg = 'bg-cream',
  dark = false,
}: {
  number: string
  title: string
  bg?: string
  dark?: boolean
}) {
  return (
    <div className={`${bg} pt-14 pb-6 px-5 md:px-8 text-center`}>
      <motion.p
        initial={{ opacity: 0, letterSpacing: '0.05em' }}
        whileInView={{ opacity: 1, letterSpacing: '0.2em' }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: EASE_SPROUT }}
        className="inline-flex items-center gap-2 text-[12px] font-bold uppercase text-terracotta"
      >
        <span className={dark ? 'text-cream/40' : 'text-dark-text/30'}>{number}</span>
        {title}
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: 28 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: EASE_SPROUT, delay: 0.25 }}
          className={`h-px inline-block ${dark ? 'bg-cream/30' : 'bg-terracotta/40'}`}
        />
      </motion.p>
    </div>
  )
}

/* Marks a workflow sub-group within a part. */
export function GroupLabel({ children, bg = 'bg-cream' }: { children: React.ReactNode; bg?: string }) {
  return (
    <div className={`${bg} pt-10 pb-2 px-5 md:px-8 text-center`}>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: EASE_SPROUT }}
        className="text-[11px] font-semibold uppercase tracking-[0.14em] text-dark-text/40"
      >
        {children}
      </motion.p>
    </div>
  )
}
