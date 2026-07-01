'use client'

import { motion } from 'framer-motion'

/* A single "alive" pulse on mount/first view — not a repeating animation.
   Repeating pulses on a dashboard mockup read as needy rather than premium. */
export default function StatusPulseBadge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ scale: 1 }}
      whileInView={{ scale: [1, 1.08, 1] }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
    >
      {children}
    </motion.div>
  )
}
