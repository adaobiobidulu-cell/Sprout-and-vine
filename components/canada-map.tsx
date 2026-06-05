export default function CanadaMap({ caption = 'Built for every province. Compliant from day one.' }: { caption?: string }) {
  const prov = '#2F4A3A'
  const terr = '#AEC1B0'
  const div = '#F7F2E8'
  const pl = '#F7F2E8' // province label
  const tl = '#2F4A3A' // territory label

  return (
    <figure className="mx-auto w-full" style={{ maxWidth: '580px' }}>
      <svg
        viewBox="0 0 820 470"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Map of Canada with all provinces highlighted in green"
        role="img"
      >
        {/* ── Territories (light sage) ── */}
        {/* Yukon */}
        <path d="M5,70 L90,70 L96,170 L5,170 Z" fill={terr} stroke={div} strokeWidth="1.5" />
        <text x="47" y="126" textAnchor="middle" fill={tl} fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">YT</text>

        {/* Northwest Territories */}
        <rect x="96" y="70" width="280" height="100" fill={terr} stroke={div} strokeWidth="1.5" />
        <text x="236" y="126" textAnchor="middle" fill={tl} fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">NWT</text>

        {/* Nunavut */}
        <path d="M380,5 L815,5 L815,174 L600,182 L380,170 Z" fill={terr} stroke={div} strokeWidth="1.5" />
        <text x="602" y="92" textAnchor="middle" fill={tl} fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">NU</text>

        {/* ── Provinces (forest green) ── */}
        {/* British Columbia */}
        <path d="M5,170 L90,170 L96,215 L90,460 L5,460 Z" fill={prov} stroke={div} strokeWidth="1.5" />
        <text x="47" y="325" textAnchor="middle" fill={pl} fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">BC</text>

        {/* Alberta */}
        <rect x="96" y="210" width="84" height="250" fill={prov} stroke={div} strokeWidth="1.5" />
        <text x="138" y="340" textAnchor="middle" fill={pl} fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">AB</text>

        {/* Saskatchewan */}
        <rect x="185" y="210" width="78" height="250" fill={prov} stroke={div} strokeWidth="1.5" />
        <text x="224" y="340" textAnchor="middle" fill={pl} fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">SK</text>

        {/* Manitoba */}
        <path d="M268,210 L354,210 L358,275 L348,460 L268,460 Z" fill={prov} stroke={div} strokeWidth="1.5" />
        <text x="312" y="345" textAnchor="middle" fill={pl} fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">MB</text>

        {/* Ontario */}
        <path d="M348,170 L376,155 L524,178 L526,460 L348,460 Z" fill={prov} stroke={div} strokeWidth="1.5" />
        <text x="437" y="338" textAnchor="middle" fill={pl} fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">ON</text>

        {/* Quebec */}
        <path d="M520,126 L594,110 L674,126 L678,460 L524,460 Z" fill={prov} stroke={div} strokeWidth="1.5" />
        <text x="600" y="305" textAnchor="middle" fill={pl} fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">QC</text>

        {/* Newfoundland and Labrador (mainland / Labrador) */}
        <path d="M670,126 L815,130 L815,362 L772,366 L656,282 L664,126 Z" fill={prov} stroke={div} strokeWidth="1.5" />
        <text x="745" y="250" textAnchor="middle" fill={pl} fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">NL</text>

        {/* New Brunswick */}
        <rect x="668" y="364" width="48" height="58" fill={prov} stroke={div} strokeWidth="1.5" />
        <text x="692" y="397" textAnchor="middle" fill={pl} fontSize="8" fontWeight="700" fontFamily="system-ui, sans-serif">NB</text>

        {/* Nova Scotia */}
        <path d="M668,416 L724,408 L728,460 L668,460 Z" fill={prov} stroke={div} strokeWidth="1.5" />
        <text x="696" y="440" textAnchor="middle" fill={pl} fontSize="7.5" fontWeight="700" fontFamily="system-ui, sans-serif">NS</text>

        {/* Prince Edward Island */}
        <rect x="653" y="362" width="12" height="8" rx="2" fill={prov} stroke={div} strokeWidth="0.5" />
        <text x="659" y="369" textAnchor="middle" fill={pl} fontSize="5.5" fontWeight="700" fontFamily="system-ui, sans-serif">PEI</text>

        {/* Newfoundland Island */}
        <ellipse cx="778" cy="445" rx="15" ry="12" fill={prov} stroke={div} strokeWidth="1" />
      </svg>
      <p className="text-center text-[13px] text-dark-text/45 font-medium mt-3">
        {caption}
      </p>
    </figure>
  )
}
