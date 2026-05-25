'use client'

import { useEffect, useRef } from 'react'

/*
 * Scroll-triggered vine that runs down the right edge of the page.
 * Uses a single long SVG path drawn via stroke-dashoffset animation
 * driven by native scroll events (no Framer Motion dependency — keeps
 * this component tiny and avoids hydration lag).
 *
 * The vine path is defined in a 60-wide viewBox that maps 1:1 to the
 * 60px-wide strip on the right. Its height is set to match the full
 * document height at runtime.
 */

/* How far down (0-1) each decoration appears along the vine */
const DECORATIONS = [
  // leaf clusters at major section transitions
  { type: 'leaf',   at: 0.10 },
  { type: 'leaf',   at: 0.25 },
  { type: 'flower', at: 0.38 }, // Pricing section
  { type: 'leaf',   at: 0.52 },
  { type: 'leaf',   at: 0.67 },
  { type: 'flower', at: 0.80 }, // Testimonials
  { type: 'berry',  at: 0.93 }, // Footer approach
]

function buildVinePath(h: number): string {
  // A gentle S-curve that weaves slightly left/right within the 60px strip
  const segments: string[] = [`M 32 0`]
  const steps = 18
  for (let i = 1; i <= steps; i++) {
    const y = (h / steps) * i
    // Alternate control-point direction to create S-waves
    const side = i % 2 === 0 ? 10 : 50
    const cp1y = y - h / steps * 0.7
    const cp2y = y - h / steps * 0.3
    const px = 28 + Math.sin((i / steps) * Math.PI * 4) * 12
    segments.push(`C ${side} ${cp1y}, ${side} ${cp2y}, ${px} ${y}`)
  }
  return segments.join(' ')
}

function Leaf({ cx, cy, angle }: { cx: number; cy: number; angle: number }) {
  return (
    <g transform={`translate(${cx} ${cy}) rotate(${angle})`}>
      <ellipse rx="9" ry="15" fill="#AEC1B0" opacity="0.82" />
      <line x1="0" y1="-13" x2="0" y2="13" stroke="#2F4A3A" strokeWidth="0.8" opacity="0.5" />
    </g>
  )
}

function Flower({ cx, cy }: { cx: number; cy: number }) {
  const petals = 5
  return (
    <g transform={`translate(${cx} ${cy})`}>
      {Array.from({ length: petals }).map((_, i) => {
        const a = (i / petals) * 360
        return (
          <ellipse
            key={i}
            cx={0} cy={-7}
            rx="4" ry="7"
            fill="#E2845F"
            opacity="0.78"
            transform={`rotate(${a})`}
          />
        )
      })}
      <circle r="5" fill="#F7F2E8" />
      <circle r="3" fill="#2F4A3A" opacity="0.7" />
    </g>
  )
}

function Berry({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g transform={`translate(${cx} ${cy})`}>
      <circle cx="-5" cy="-4" r="5" fill="#2F4A3A" opacity="0.75" />
      <circle cx="5" cy="-4" r="5" fill="#6EB76F" opacity="0.75" />
      <circle cx="0" cy="4" r="5" fill="#AEC1B0" opacity="0.75" />
      <line x1="0" y1="-18" x2="-5" y2="-9" stroke="#2F4A3A" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="0" y1="-18" x2="5" y2="-9" stroke="#2F4A3A" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="0" y1="-18" x2="0" y2="-1" stroke="#2F4A3A" strokeWidth="1.2" strokeLinecap="round" />
    </g>
  )
}

export default function ScrollVine() {
  const pathRef = useRef<SVGPathElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const decoGroupRef = useRef<SVGGElement>(null)
  const totalLenRef = useRef(0)
  const docHeightRef = useRef(0)

  useEffect(() => {
    const path = pathRef.current
    const svg = svgRef.current
    const decoGroup = decoGroupRef.current
    if (!path || !svg || !decoGroup) return

    function init() {
      const docH = document.documentElement.scrollHeight
      docHeightRef.current = docH

      // Resize SVG to full document height
      svg!.setAttribute('height', String(docH))
      svg!.setAttribute('viewBox', `0 0 60 ${docH}`)

      // Rebuild path
      const d = buildVinePath(docH)
      path!.setAttribute('d', d)

      const len = path!.getTotalLength()
      totalLenRef.current = len
      path!.style.strokeDasharray = String(len)
      path!.style.strokeDashoffset = String(len)

      // Place decorations at correct positions along the path
      decoGroup!.innerHTML = ''
      for (const dec of DECORATIONS) {
        const pt = path!.getPointAtLength(dec.at * len)
        const el = document.createElementNS('http://www.w3.org/2000/svg', 'g')
        el.setAttribute('data-at', String(dec.at))
        el.setAttribute('opacity', '0')
        el.setAttribute('transform', `translate(${pt.x} ${pt.y})`)
        // Placeholder — real SVG nodes injected below
        decoGroup!.appendChild(el)
      }

      onScroll()
    }

    function onScroll() {
      const scrolled = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(scrolled / maxScroll, 1)

      const len = totalLenRef.current
      const drawn = progress * len
      path!.style.strokeDashoffset = String(len - drawn)

      // Show decorations once the vine reaches them
      const items = decoGroup!.querySelectorAll('g[data-at]')
      items.forEach(el => {
        const at = parseFloat((el as SVGElement).getAttribute('data-at') || '0')
        const target = at * len
        const opacity = drawn >= target ? Math.min((drawn - target) / (len * 0.02), 1) : 0
        ;(el as SVGElement).setAttribute('opacity', String(opacity.toFixed(3)))
      })
    }

    init()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', init, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', init)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 right-0 z-10 hidden lg:block"
      style={{ width: 60 }}
    >
      <svg
        ref={svgRef}
        width="60"
        viewBox="0 0 60 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block' }}
      >
        {/* Main vine path */}
        <path
          ref={pathRef}
          stroke="#2F4A3A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          style={{ transition: 'stroke-dashoffset 0.05s linear' }}
        />

        {/* Decoration group — positions injected by JS */}
        <g ref={decoGroupRef}>
          {DECORATIONS.map((dec, i) => {
            if (dec.type === 'leaf') {
              return (
                <g key={i}>
                  <Leaf cx={0} cy={0} angle={-25} />
                  <Leaf cx={14} cy={8} angle={30} />
                </g>
              )
            }
            if (dec.type === 'flower') {
              return <Flower key={i} cx={0} cy={0} />
            }
            return <Berry key={i} cx={0} cy={0} />
          })}
        </g>
      </svg>
    </div>
  )
}
