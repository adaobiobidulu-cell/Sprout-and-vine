'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, type CSSProperties } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  style?: CSSProperties
  delay?: number
  /** How far below viewport edge to trigger (negative = earlier) */
  margin?: string
  /** Horizontal offset to slide in from (e.g. 24 for phone mockups on desktop). Defaults to a vertical-only reveal. */
  x?: number
}

const EASE_SPROUT = [0.22, 1, 0.36, 1] as const

export default function FadeIn({ children, className, style, delay = 0, margin = '-60px', x = 0 }: Props) {
  const ref = useRef(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isInView = useInView(ref, { once: true, margin: margin as any })

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 16, x }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 16, x }}
      transition={{ duration: 0.7, ease: EASE_SPROUT, delay }}
    >
      {children}
    </motion.div>
  )
}
