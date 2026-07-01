const FOCUS_PROVINCES = new Set(['bc', 'ab', 'mb', 'on', 'qc'])

function LeafMarker({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(-35)`}>
      <path d="M0,-10 C5,-7 5,7 0,11 C-5,7 -5,-7 0,-10 Z" fill="#F7F2E8" />
      <path d="M0,-9 C0,-2 0,4 0,10" stroke="#2F4A3A" strokeWidth="0.8" opacity="0.4" fill="none" />
    </g>
  )
}

export default function CanadaMap({ caption = 'Built province by province for Canadian childcare.' }: { caption?: string }) {
  const highlight = '#2F4A3A'
  const base = '#F1ECDD'
  const outline = 'rgba(47,74,58,0.45)'

  const regions: { id: string; d?: string; rect?: [number, number, number, number]; ellipse?: [number, number, number, number]; markerAt: [number, number] }[] = [
    { id: 'yt', d: 'M5,70 L90,70 L96,170 L5,170 Z', markerAt: [47, 120] },
    { id: 'nwt', rect: [96, 70, 280, 100], markerAt: [236, 120] },
    { id: 'nu', d: 'M380,5 L815,5 L815,174 L600,182 L380,170 Z', markerAt: [600, 90] },
    { id: 'bc', d: 'M5,170 L90,170 L96,215 L90,460 L5,460 Z', markerAt: [47, 320] },
    { id: 'ab', rect: [96, 210, 84, 250], markerAt: [138, 335] },
    { id: 'sk', rect: [185, 210, 78, 250], markerAt: [224, 335] },
    { id: 'mb', d: 'M268,210 L354,210 L358,275 L348,460 L268,460 Z', markerAt: [312, 340] },
    { id: 'on', d: 'M348,170 L376,155 L524,178 L526,460 L348,460 Z', markerAt: [437, 335] },
    { id: 'qc', d: 'M520,126 L594,110 L674,126 L678,460 L524,460 Z', markerAt: [600, 300] },
    { id: 'nl', d: 'M670,126 L815,130 L815,362 L772,366 L656,282 L664,126 Z', markerAt: [745, 245] },
    { id: 'nb', rect: [668, 364, 48, 58], markerAt: [692, 393] },
    { id: 'ns', d: 'M668,416 L724,408 L728,460 L668,460 Z', markerAt: [696, 436] },
    { id: 'pei', rect: [653, 362, 12, 8], markerAt: [659, 366] },
  ]

  return (
    <figure
      className="mx-auto w-full rounded-3xl border border-light-sage/25 bg-cream px-6 py-10 md:px-10 md:py-12"
      style={{ maxWidth: '620px' }}
    >
      <svg
        viewBox="0 0 820 470"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Illustrated map of Canada highlighting Ontario, British Columbia, Alberta, Manitoba, and Québec"
        role="img"
      >
        {regions.map(r => {
          const fill = FOCUS_PROVINCES.has(r.id) ? highlight : base
          const shapeProps = { fill, stroke: outline, strokeWidth: 1.5 }
          return (
            <g key={r.id}>
              {r.d && <path d={r.d} {...shapeProps} />}
              {r.rect && <rect x={r.rect[0]} y={r.rect[1]} width={r.rect[2]} height={r.rect[3]} {...shapeProps} />}
            </g>
          )
        })}
        {/* Newfoundland island */}
        <ellipse cx="778" cy="445" rx="15" ry="12" fill={base} stroke={outline} strokeWidth="1" />

        {/* tiny leaf markers on the focus provinces only */}
        {regions.filter(r => FOCUS_PROVINCES.has(r.id)).map(r => (
          <LeafMarker key={r.id} x={r.markerAt[0]} y={r.markerAt[1]} />
        ))}
      </svg>
      <p className="text-center text-[13px] text-dark-text/50 font-medium mt-6">
        {caption}
      </p>
    </figure>
  )
}
