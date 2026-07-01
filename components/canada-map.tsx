export default function CanadaMap({ caption = 'Built province by province for Canadian childcare.' }: { caption?: string }) {
  return (
    <figure className="mx-auto w-full" style={{ maxWidth: '760px' }}>
      <svg viewBox="0 0 1320 720" role="img" aria-labelledby="svcMapTitle svcMapDesc">
        <title id="svcMapTitle">Sprout &amp; Vine Care Canadian operator focus map</title>
        <desc id="svcMapDesc">An elegant illustrated map of Canada highlighting British Columbia, Alberta, Manitoba, Ontario, and Québec for Sprout &amp; Vine Care.</desc>
        <defs>
          <linearGradient id="focusFill" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#E8F0E3" />
            <stop offset="100%" stopColor="#C9D8C4" />
          </linearGradient>
          <linearGradient id="quietFill" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#FFF9EF" />
            <stop offset="100%" stopColor="#F2E7D8" />
          </linearGradient>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#244C31" floodOpacity="0.08" />
          </filter>
          <style>{`
            .outline { stroke: #2F4A3A; stroke-width: 2.25; stroke-linejoin: round; stroke-linecap: round; }
            .quiet { fill: url(#quietFill); opacity: .72; }
            .focus { fill: url(#focusFill); }
            .label { font-family: ui-serif, Georgia, 'Times New Roman', serif; fill: #244C31; font-size: 22px; font-weight: 700; letter-spacing: -0.02em; }
            .small-label { font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; fill: #6E7D70; font-size: 14px; font-weight: 500; }
            .micro-label { font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; fill: #8E958D; font-size: 13px; font-weight: 500; }
            .marker-stem { fill: none; stroke: #E2845F; stroke-width: 2; stroke-linecap: round; }
            .marker-leaf { fill: #E2845F; }
            .coast-detail { fill: none; stroke: #2F4A3A; stroke-width: 1.4; stroke-linecap: round; stroke-linejoin: round; opacity: .42; }
            @media (prefers-reduced-motion: no-preference) {
              .focus { opacity: 0; animation: svcFadeUp .8s cubic-bezier(.22,1,.36,1) forwards; }
              .operator-marker { opacity: 0; transform-origin: center; transform-box: fill-box; animation: svcMarkerPop .6s cubic-bezier(.22,1,.36,1) forwards; }
              .bc { animation-delay: .05s; } .ab { animation-delay: .16s; } .mb { animation-delay: .27s; } .on { animation-delay: .38s; } .qc { animation-delay: .49s; }
              .operator-marker.bc { animation-delay: .38s; } .operator-marker.ab { animation-delay: .48s; } .operator-marker.mb { animation-delay: .58s; } .operator-marker.on { animation-delay: .68s; } .operator-marker.qc { animation-delay: .78s; }
              @keyframes svcFadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
              @keyframes svcMarkerPop { from { opacity: 0; transform: scale(.9); } to { opacity: 1; transform: scale(1); } }
            }
          `}</style>
        </defs>

        <rect x="24" y="24" width="1272" height="672" rx="34" fill="#FFF8EC" filter="url(#softShadow)" />
        <path d="M92 558 C126 532, 144 512, 150 480 C154 454, 178 444, 197 463 C220 486, 208 525, 172 534 C139 542, 118 562, 107 599" fill="none" stroke="#D8E4D6" strokeWidth="28" strokeLinecap="round" opacity="0.35" />

        <g transform="translate(46 54)">
          {/* Territories */}
          <path className="quiet outline" d="M78 180 L205 58 L306 248 L198 313 L66 246 Z" />
          <path className="quiet outline" d="M205 58 L558 126 L540 300 L306 248 Z" />
          <path className="quiet outline" d="M558 126 C615 67, 706 48, 792 72 C852 88, 922 90, 1012 150 C1080 195, 1075 252, 1018 278 C960 306, 916 308, 841 290 C769 272, 715 286, 646 330 L540 300 Z" />

          {/* Western provinces */}
          <path className="focus bc outline" d="M66 246 L198 313 L306 248 L356 502 L114 484 L92 404 Z" />
          <path className="focus ab outline" d="M306 248 L455 268 L430 518 L356 502 Z" />
          <path className="quiet outline" d="M455 268 L584 292 L556 524 L430 518 Z" />
          <path className="focus mb outline" d="M584 292 L704 314 L637 526 L556 524 Z" />

          {/* Ontario and Québec */}
          <path className="focus on outline" d="M704 314 L824 352 L783 504 C810 520, 838 540, 877 548 C824 586, 758 603, 682 578 L637 526 Z" />
          <path className="focus qc outline" d="M824 352 C873 320, 935 296, 1008 294 C1048 336, 1076 386, 1074 430 C1070 488, 1024 530, 877 548 C838 540, 810 520, 783 504 Z" />

          {/* Atlantic Canada */}
          <path className="quiet outline" d="M1008 294 C1068 270, 1108 276, 1134 318 C1110 322, 1086 345, 1074 378 C1062 350, 1044 324, 1008 294 Z" />
          <path className="quiet outline" d="M958 552 C986 543, 1007 556, 1015 582 C990 586, 966 581, 958 552 Z" />
          <path className="quiet outline" d="M1030 548 C1057 540, 1084 552, 1090 579 C1064 583, 1040 577, 1030 548 Z" />
          <path className="quiet outline" d="M1092 512 C1118 506, 1142 516, 1148 538 C1124 543, 1102 536, 1092 512 Z" />
          <path className="quiet outline" d="M1090 460 C1130 435, 1170 448, 1185 486 C1146 494, 1114 486, 1090 460 Z" />

          {/* Soft coastline details */}
          <path className="coast-detail" d="M495 100 C515 78, 548 86, 558 126" />
          <path className="coast-detail" d="M625 78 C649 50, 690 52, 704 84" />
          <path className="coast-detail" d="M745 74 C775 40, 832 54, 840 90" />
          <path className="coast-detail" d="M930 120 C982 126, 1024 156, 1050 198" />
          <path className="coast-detail" d="M962 438 C1004 420, 1042 398, 1074 378" />
          <path className="coast-detail" d="M742 577 C772 548, 811 546, 877 548" />
          <path className="coast-detail" d="M115 484 C134 454, 131 423, 92 404" />

          {/* Small labels */}
          <text className="small-label" x="120" y="205">Yukon</text>
          <text className="small-label" x="302" y="214">Northwest</text>
          <text className="small-label" x="302" y="232">Territories</text>
          <text className="small-label" x="612" y="236">Nunavut</text>
          <text className="small-label" x="464" y="432">Saskatchewan</text>
          <text className="micro-label" x="1084" y="340">Newfoundland</text>
          <text className="micro-label" x="1084" y="357">&amp; Labrador</text>
          <text className="micro-label" x="1040" y="598">New Brunswick</text>
          <text className="micro-label" x="1096" y="568">Prince Edward</text>
          <text className="micro-label" x="1096" y="585">Island</text>
          <text className="micro-label" x="1116" y="626">Nova Scotia</text>

          {/* Focus labels */}
          <text className="label" x="134" y="372">British</text>
          <text className="label" x="128" y="397">Columbia</text>
          <text className="label" x="334" y="418">Alberta</text>
          <text className="label" x="585" y="448">Manitoba</text>
          <text className="label" x="730" y="530">Ontario</text>
          <text className="label" x="914" y="482">Québec</text>

          {/* Leaf operator markers.
              The animation (opacity/transform fade-up) lives on the inner <g>
              rather than this outer one: a CSS `transform` on an element
              fully replaces its SVG `transform` presentation attribute
              instead of composing with it, which previously collapsed every
              marker onto the same spot once the fade-up animation settled. */}
          <g transform="translate(160 330)">
            <g className="operator-marker bc">
              <path className="marker-stem" d="M0 20 C2 8, 8 2, 17 0" />
              <path className="marker-leaf" d="M3 7 C-6 -3,-7 -18,5 -24 C16 -14,15 1,3 7Z" />
              <path className="marker-leaf" d="M13 3 C20 -8,35 -10,40 1 C31 11,19 12,13 3Z" />
            </g>
          </g>
          <g transform="translate(345 370)">
            <g className="operator-marker ab">
              <path className="marker-stem" d="M0 20 C2 8, 8 2, 17 0" />
              <path className="marker-leaf" d="M3 7 C-6 -3,-7 -18,5 -24 C16 -14,15 1,3 7Z" />
              <path className="marker-leaf" d="M13 3 C20 -8,35 -10,40 1 C31 11,19 12,13 3Z" />
            </g>
          </g>
          <g transform="translate(626 402)">
            <g className="operator-marker mb">
              <path className="marker-stem" d="M0 20 C2 8, 8 2, 17 0" />
              <path className="marker-leaf" d="M3 7 C-6 -3,-7 -18,5 -24 C16 -14,15 1,3 7Z" />
              <path className="marker-leaf" d="M13 3 C20 -8,35 -10,40 1 C31 11,19 12,13 3Z" />
            </g>
          </g>
          <g transform="translate(785 474)">
            <g className="operator-marker on">
              <path className="marker-stem" d="M0 20 C2 8, 8 2, 17 0" />
              <path className="marker-leaf" d="M3 7 C-6 -3,-7 -18,5 -24 C16 -14,15 1,3 7Z" />
              <path className="marker-leaf" d="M13 3 C20 -8,35 -10,40 1 C31 11,19 12,13 3Z" />
            </g>
          </g>
          <g transform="translate(950 435)">
            <g className="operator-marker qc">
              <path className="marker-stem" d="M0 20 C2 8, 8 2, 17 0" />
              <path className="marker-leaf" d="M3 7 C-6 -3,-7 -18,5 -24 C16 -14,15 1,3 7Z" />
              <path className="marker-leaf" d="M13 3 C20 -8,35 -10,40 1 C31 11,19 12,13 3Z" />
            </g>
          </g>
        </g>
      </svg>
      <p className="text-center text-[13px] text-dark-text/50 font-medium mt-6">
        {caption}
      </p>
    </figure>
  )
}
