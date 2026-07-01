/* Dashboard Preview: fully coded, static, server component */

import StatusPulseBadge from '@/components/status-pulse-badge'

function LogoMarkSmall() {
  // The real vine-shaped S mark (raster), height-constrained so it stays crisp.
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/logo-s.png" alt="" width={12} height={22} style={{ height: 22, width: 'auto' }} />
  )
}

/* SVG donut chart for classroom snapshot */
function DonutChart() {
  // Total: 45 children. r=42, circumference = 2π×42 = 263.9
  const r = 42
  const c = 2 * Math.PI * r // 263.9
  const cx = 55
  const cy = 55

  const segments = [
    { label: 'Infants', count: 8, color: '#2F4A3A' },
    { label: 'Toddlers', count: 12, color: '#6EB76F' },
    { label: 'Preschool', count: 15, color: '#AEC1B0' },
    { label: 'Pre-K', count: 10, color: '#E2845F' },
  ]
  const total = 45

  let offset = 0
  const arcs = segments.map(s => {
    const len = (s.count / total) * c
    const arc = { ...s, len, offset }
    offset += len
    return arc
  })

  return (
    <div className="flex items-center gap-4">
      <svg viewBox="0 0 110 110" width="90" height="90" className="flex-shrink-0">
        <g transform={`rotate(-90 ${cx} ${cy})`}>
          {arcs.map(a => (
            <circle
              key={a.label}
              cx={cx} cy={cy} r={r}
              fill="none"
              stroke={a.color}
              strokeWidth="13"
              strokeDasharray={`${a.len} ${c - a.len}`}
              strokeDashoffset={-a.offset}
            />
          ))}
        </g>
        <text x={cx} y={cy - 4} textAnchor="middle" fontSize="14" fontWeight="600" fill="#1C2B22">{total}</text>
        <text x={cx} y={cy + 9} textAnchor="middle" fontSize="7" fill="#1C2B22" opacity="0.4">children</text>
      </svg>

      <div className="space-y-1.5">
        {segments.map(s => (
          <div key={s.label} className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: s.color }} />
            <span className="text-[10px] text-dark-text/60">{s.label}</span>
            <span className="text-[10px] font-semibold text-dark-text ml-auto pl-2">{s.count}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const sidebarItems = ['Dashboard', 'Children', 'Families', 'Attendance', 'Daily Reports', 'Messaging', 'Billing', 'Reports', 'Settings']

const activity = [
  { icon: '🌱', text: 'Mila reached a new milestone', sub: 'Language · 3m ago' },
  { icon: '📋', text: "Henry's daily report is ready", sub: '8:41 AM' },
  { icon: '✅', text: 'Sophie was checked in by Olivia', sub: '8:41 AM' },
  { icon: '💳', text: 'New payment received $425.00', sub: 'Yesterday' },
]

const events = [
  { title: 'Parent-Teacher Conference', date: 'May 16 · 9:00 AM' },
  { title: 'Spring Celebration', date: 'May 24 · 2:00 PM' },
  { title: 'Center Closed', date: 'May 26 · All day' },
]

export default function DashboardPreview() {
  return (
    <div
      className="w-full rounded-2xl overflow-hidden bg-white border border-[rgba(47,74,58,0.1)]"
      style={{ boxShadow: '0 24px 80px rgba(47,74,58,0.14)', minWidth: 0 }}
    >
      {/* Dashboard nav bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-[rgba(47,74,58,0.08)] bg-white">
        <div className="flex items-center gap-2">
          <LogoMarkSmall />
          <span className="font-display text-[13px] font-bold text-forest-green tracking-tight">Sprout &amp; Vine</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] text-dark-text/50 hidden sm:block">Good morning, Emma 👋</span>
          <div className="w-6 h-6 rounded-full bg-forest-green flex items-center justify-center text-[8px] text-cream font-bold">EJ</div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-32 flex-shrink-0 border-r border-[rgba(47,74,58,0.07)] bg-white py-3 hidden sm:flex flex-col">
          {sidebarItems.map((item, i) => (
            <div
              key={item}
              className={`mx-2 px-2.5 py-1.5 rounded-lg text-[10px] font-medium mb-0.5 ${
                i === 0 ? 'bg-forest-green text-white' : 'text-dark-text/50 hover:bg-gray-50'
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 min-w-0" style={{ background: '#F7F2E8' }}>
          {/* Top bar */}
          <div className="flex items-center gap-2 px-4 py-2 border-b border-[rgba(47,74,58,0.07)] bg-white/80">
            <div className="flex-1 flex items-center gap-2 bg-[rgba(47,74,58,0.05)] rounded-lg px-2.5 py-1.5">
              <span className="text-[10px] text-dark-text/30">Search children, reports…</span>
            </div>
            <div className="text-dark-text/30 text-sm">🔔</div>
            <StatusPulseBadge className="inline-block">
              <div className="text-[9px] font-semibold text-sage-green bg-sage-green/10 px-2 py-0.5 rounded-full whitespace-nowrap">1:8 Infants ✓</div>
            </StatusPulseBadge>
          </div>

          <div className="p-4">
            {/* Greeting */}
            <div className="mb-3">
              <p className="font-display text-[15px] font-medium text-forest-green">Good morning, Emma 👋</p>
              <p className="text-[10px] text-dark-text/45">Here's what's happening at Little Learners Preschool</p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-3">
              {[
                { label: 'Check-ins', val: '32/40', sub: '80%', bar: true },
                { label: 'Messages', val: '12', sub: 'Unread →', bar: false },
                { label: 'Payments', val: '$8,650', sub: 'this month', bar: false },
                { label: 'Events', val: '3', sub: 'this week', bar: false },
              ].map(s => (
                <div key={s.label} className="bg-white rounded-xl p-3" style={{ boxShadow: '0 2px 8px rgba(47,74,58,0.06)' }}>
                  <p className="text-[9px] text-dark-text/40 uppercase tracking-wide mb-1">{s.label}</p>
                  <p className="font-display text-[16px] font-medium text-forest-green leading-none">{s.val}</p>
                  {s.bar ? (
                    <div className="mt-1.5 h-1 rounded-full bg-sage-green/15">
                      <div className="h-full w-4/5 rounded-full bg-sage-green" />
                    </div>
                  ) : (
                    <p className="text-[9px] text-dark-text/35 mt-0.5">{s.sub}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom 3 columns */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
              {/* Recent Activity */}
              <div className="bg-white rounded-xl p-3" style={{ boxShadow: '0 2px 8px rgba(47,74,58,0.06)' }}>
                <p className="text-[9px] font-semibold text-dark-text/40 uppercase tracking-wide mb-2">Recent Activity</p>
                <div className="space-y-2">
                  {activity.map(a => (
                    <div key={a.text} className="flex items-start gap-2">
                      <span className="text-sm flex-shrink-0 leading-none mt-0.5">{a.icon}</span>
                      <div>
                        <p className="text-[10px] font-medium text-dark-text leading-snug">{a.text}</p>
                        <p className="text-[9px] text-dark-text/35">{a.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Events */}
              <div className="bg-white rounded-xl p-3" style={{ boxShadow: '0 2px 8px rgba(47,74,58,0.06)' }}>
                <p className="text-[9px] font-semibold text-dark-text/40 uppercase tracking-wide mb-2">Upcoming Events</p>
                <div className="space-y-2.5">
                  {events.map(e => (
                    <div key={e.title} className="border-l-2 border-light-sage pl-2">
                      <p className="text-[10px] font-semibold text-dark-text leading-snug">{e.title}</p>
                      <p className="text-[9px] text-dark-text/40">{e.date}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Classroom Snapshot */}
              <div className="bg-white rounded-xl p-3" style={{ boxShadow: '0 2px 8px rgba(47,74,58,0.06)' }}>
                <p className="text-[9px] font-semibold text-dark-text/40 uppercase tracking-wide mb-2">Classroom Snapshot</p>
                <DonutChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
