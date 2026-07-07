'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const tabs = [
  { id: 'checkin', label: 'Morning Check-In' },
  { id: 'report', label: 'Daily Report' },
  { id: 'pickup', label: 'Smart Pickup' },
] as const

type TabId = (typeof tabs)[number]['id']

/* ── Frame content components ─────────────────────────────────── */

function CheckInFrame({ step }: { step: number }) {
  const children = [
    { name: 'Emma Johnson', room: 'Butterflies', checked: true },
    { name: 'Lucas Chen', room: 'Sunflowers', checked: false },
    { name: 'Sofia Martinez', room: 'Butterflies', checked: false },
    { name: 'Mila Thompson', room: 'Rainbows', checked: true },
    { name: 'Henry Walsh', room: 'Sunflowers', checked: false },
  ]

  if (step === 0) return (
    <div className="space-y-3">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-[11px] text-dark-text/40 uppercase tracking-wide">Today · May 25</p>
          <p className="font-display text-[20px] font-medium text-forest-green">Morning Check-In</p>
        </div>
        <div className="text-right">
          <p className="text-[11px] text-dark-text/40">Checked in</p>
          <p className="font-semibold text-[18px] text-forest-green">2 / 40</p>
        </div>
      </div>
      {children.map(c => (
        <div key={c.name} className="flex items-center justify-between py-2.5 px-3 rounded-xl" style={{ background: c.checked ? 'rgba(110,183,111,0.08)' : 'rgba(47,74,58,0.04)' }}>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-light-sage/40 flex items-center justify-center text-[11px] font-semibold text-forest-green">
              {c.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <p className="text-[13px] font-medium text-dark-text">{c.name}</p>
              <p className="text-[10px] text-dark-text/40">{c.room}</p>
            </div>
          </div>
          {c.checked
            ? <span className="text-[11px] font-semibold text-sage-green">✓ In</span>
            : <button className="text-[11px] font-medium text-forest-green border border-forest-green/30 px-2.5 py-1 rounded-lg">Check In</button>
          }
        </div>
      ))}
    </div>
  )

  if (step === 1) return (
    <div className="flex flex-col items-center justify-center h-full gap-6 py-4">
      <div className="w-24 h-24 rounded-2xl border-2 border-dashed border-forest-green/30 flex items-center justify-center bg-forest-green/5">
        <div className="text-center">
          <div className="text-2xl mb-1">📱</div>
          <p className="text-[10px] text-dark-text/40 font-medium">QR Scan</p>
        </div>
      </div>
      <p className="text-[14px] font-medium text-dark-text/60 text-center">Parent scans the classroom QR code<br />or staff taps a child's name</p>
      <div className="w-full py-3 rounded-xl bg-forest-green text-white text-[13px] font-medium text-center">
        Tap to check in: Lucas Chen
      </div>
    </div>
  )

  if (step === 2) return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="font-display text-[20px] font-medium text-forest-green">Attendance Board</p>
        <div className="text-[11px] font-semibold text-cream bg-forest-green px-2.5 py-1 rounded-full">1:8 Infants ✓</div>
      </div>
      <div className="rounded-xl overflow-hidden border border-[rgba(47,74,58,0.1)]">
        <div className="h-2 bg-sage-green/20">
          <div className="h-full bg-sage-green rounded-full transition-all duration-700" style={{ width: '80%' }} />
        </div>
        <div className="p-4">
          <p className="text-[13px] font-semibold text-dark-text">32 of 40 checked in</p>
          <p className="text-[11px] text-dark-text/40 mt-0.5">8 children pending · Ratio updated</p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {['Butterflies', 'Sunflowers', 'Rainbows', 'Ivy Room'].map((room, i) => (
          <div key={room} className="rounded-lg p-2 text-center" style={{ background: 'rgba(47,74,58,0.05)' }}>
            <p className="text-[16px] font-semibold text-forest-green">{[8, 10, 9, 5][i]}</p>
            <p className="text-[9px] text-dark-text/40 leading-tight">{room}</p>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="flex flex-col items-center justify-center h-full gap-5 py-4">
      <div className="w-16 h-16 rounded-full bg-sage-green/15 flex items-center justify-center text-3xl">✅</div>
      <div className="text-center">
        <p className="font-display text-[26px] font-medium text-forest-green">32 of 40 children</p>
        <p className="font-display text-[20px] text-sage-green">checked in ✓</p>
      </div>
      <p className="text-[13px] text-dark-text/50 text-center">All ratios verified. Staff notified.<br />Morning is underway. 🌱</p>
    </div>
  )
}

function ReportFrame({ step }: { step: number }) {
  if (step === 0) return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-full bg-light-sage/40 flex items-center justify-center text-[13px] font-semibold text-forest-green">EJ</div>
        <div>
          <p className="text-[13px] font-medium text-dark-text">New Report for Emma Johnson</p>
          <p className="text-[11px] text-dark-text/40">Butterflies Room · Olivia (educator)</p>
        </div>
      </div>
      <button className="w-full border-2 border-dashed border-forest-green/25 rounded-xl py-4 flex flex-col items-center gap-2 text-forest-green/60">
        <span className="text-xl">📷</span>
        <span className="text-[12px] font-medium">Add a photo from today</span>
      </button>
      <div>
        <p className="text-[11px] text-dark-text/40 mb-2 uppercase tracking-wide">How was Emma today?</p>
        <div className="flex gap-3">
          {['😊 Happy', '😐 Okay', '😢 Tough day'].map((m, i) => (
            <button key={m} className={`flex-1 py-2 rounded-lg text-[11px] font-medium border ${i === 0 ? 'border-sage-green bg-sage-green/10 text-sage-green' : 'border-[rgba(47,74,58,0.15)] text-dark-text/40'}`}>{m}</button>
          ))}
        </div>
      </div>
    </div>
  )

  if (step === 1) return (
    <div className="space-y-3">
      <div className="rounded-xl overflow-hidden bg-forest-green/8" style={{ background: 'rgba(47,74,58,0.06)' }}>
        <div className="h-28 bg-gradient-to-br from-sage-green/30 to-light-sage/30 flex items-center justify-center">
          <span className="text-4xl">🎨</span>
        </div>
        <p className="text-[11px] text-dark-text/40 p-2 text-center">Art project · Morning session</p>
      </div>
      <div className="rounded-xl border border-[rgba(47,74,58,0.1)] p-3">
        <p className="text-[12px] text-dark-text/70 leading-relaxed">
          "Emma had a wonderful morning! She was engaged during art and spent extra time on her painting. She tried scissors for the first time. A big milestone! 🌱"
        </p>
      </div>
      <div className="flex gap-2">
        {['🎨 Art', '🌳 Outdoor', '📖 Story'].map(a => (
          <span key={a} className="text-[11px] bg-light-sage/30 text-forest-green font-medium px-2.5 py-1 rounded-full">{a}</span>
        ))}
      </div>
    </div>
  )

  if (step === 2) return (
    <div className="space-y-4 flex flex-col items-center">
      <div className="w-full rounded-xl border border-[rgba(47,74,58,0.12)] p-4">
        <p className="text-[11px] text-dark-text/40 mb-1">Sending to</p>
        <div className="flex items-center gap-2">
          <div className="flex -space-x-1.5">
            {['MJ', 'DJ'].map(i => (
              <div key={i} className="w-6 h-6 rounded-full bg-forest-green flex items-center justify-center text-[9px] text-white border border-white">{i}</div>
            ))}
          </div>
          <p className="text-[12px] font-medium text-dark-text">Johnson Family · 2 recipients</p>
        </div>
      </div>
      <button className="w-full bg-forest-green text-white text-[14px] font-medium py-3.5 rounded-xl hover:bg-[#243d2f] transition-colors">
        Send to family →
      </button>
      <p className="text-[11px] text-dark-text/35">Delivers as a rich card in the Vine parent app</p>
    </div>
  )

  return (
    <div className="space-y-3">
      <div className="rounded-xl bg-light-sage/20 p-3 border border-[rgba(174,193,176,0.4)]">
        <p className="text-[10px] text-dark-text/40 uppercase tracking-wide mb-1">📱 Parent received · 12:03 PM</p>
        <p className="text-[12px] font-semibold text-dark-text">Daily Report from Little Learners</p>
        <p className="text-[11px] text-dark-text/60 mt-1 leading-relaxed">"Emma had a wonderful morning! She tried scissors for the first time 🌱"</p>
        <div className="mt-2 rounded-lg overflow-hidden h-16 bg-gradient-to-br from-sage-green/30 to-light-sage/30 flex items-center justify-center">
          <span className="text-2xl">🎨</span>
        </div>
      </div>
      <div className="flex items-center gap-2 bg-forest-green/5 rounded-xl p-3">
        <div className="w-7 h-7 rounded-full bg-forest-green flex items-center justify-center text-[10px] text-white">MJ</div>
        <p className="text-[12px] text-dark-text/70">"Thank you! She loved it 💚"</p>
      </div>
    </div>
  )
}

function PickupFrame({ step }: { step: number }) {
  if (step === 0) return (
    <div className="space-y-4">
      <p className="font-display text-[18px] font-medium text-forest-green">Add Authorized Pickup</p>
      <div className="space-y-2.5">
        {[{ label: 'Full name', val: 'Rose Mitchell' }, { label: 'Relationship', val: 'Grandmother' }].map(f => (
          <div key={f.label}>
            <p className="text-[10px] text-dark-text/40 uppercase tracking-wide mb-1">{f.label}</p>
            <div className="border border-[rgba(47,74,58,0.15)] rounded-lg px-3 py-2.5 text-[13px] text-dark-text bg-white">{f.val}</div>
          </div>
        ))}
      </div>
      <div className="border-2 border-dashed border-forest-green/25 rounded-xl py-5 flex flex-col items-center gap-2 text-forest-green/50">
        <span className="text-2xl">📷</span>
        <span className="text-[12px] font-medium">Add a photo (required)</span>
        <div className="w-12 h-12 rounded-full bg-sage-green/20 flex items-center justify-center text-xl">👵</div>
      </div>
      <button className="w-full bg-forest-green text-white text-[13px] font-medium py-3 rounded-xl">Save Grandma Rose</button>
    </div>
  )

  if (step === 1) return (
    <div className="space-y-3">
      <div className="flex items-center justify-between mb-2">
        <p className="font-display text-[18px] font-medium text-forest-green">Check-Out · Sophie Williams</p>
      </div>
      <p className="text-[11px] text-dark-text/40 uppercase tracking-wide">Authorized pickups</p>
      {[
        { name: 'Rose Mitchell', rel: 'Grandmother', icon: '👵', verified: true },
        { name: 'David Williams', rel: 'Father', icon: '👨', verified: true },
      ].map(p => (
        <div key={p.name} className="flex items-center gap-3 p-3 rounded-xl border border-[rgba(47,74,58,0.1)]">
          <div className="w-10 h-10 rounded-full bg-light-sage/30 flex items-center justify-center text-xl">{p.icon}</div>
          <div className="flex-1">
            <p className="text-[13px] font-semibold text-dark-text">{p.name}</p>
            <p className="text-[10px] text-dark-text/40">{p.rel}</p>
          </div>
          <span className="text-[10px] font-semibold text-sage-green">📷 Verified</span>
        </div>
      ))}
    </div>
  )

  if (step === 2) return (
    <div className="flex flex-col items-center gap-5 py-2">
      <div className="w-16 h-16 rounded-full bg-light-sage/30 flex items-center justify-center text-3xl">👵</div>
      <div className="text-center">
        <p className="text-[12px] text-dark-text/40 mb-1">Confirming pickup</p>
        <p className="font-display text-[20px] font-medium text-dark-text">Rose Mitchell</p>
        <p className="text-[13px] text-dark-text/50">picking up Sophie Williams</p>
      </div>
      <div className="w-full space-y-2">
        <div className="flex justify-between text-[12px]">
          <span className="text-dark-text/40">Time</span>
          <span className="font-medium text-dark-text">3:14 PM</span>
        </div>
        <div className="flex justify-between text-[12px]">
          <span className="text-dark-text/40">ID verified by</span>
          <span className="font-medium text-dark-text">Olivia (staff)</span>
        </div>
      </div>
      <button className="w-full bg-forest-green text-white text-[13px] font-medium py-3 rounded-xl">Confirm Check-Out</button>
    </div>
  )

  return (
    <div className="flex flex-col items-center gap-5 py-2">
      <div className="w-14 h-14 rounded-full bg-sage-green/15 flex items-center justify-center text-3xl">✅</div>
      <div className="w-full rounded-xl border border-[rgba(47,74,58,0.1)] p-4">
        <p className="text-[10px] text-dark-text/35 uppercase tracking-wide mb-1">📱 Sent to parent · 3:14 PM</p>
        <p className="text-[13px] font-semibold text-dark-text">Sophie signed out by Grandma Rose</p>
        <p className="text-[11px] text-dark-text/50 mt-0.5">3:14 PM · Photo verified · ✓</p>
        <div className="mt-3 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-light-sage/30 flex items-center justify-center text-lg">👵</div>
          <div>
            <p className="text-[12px] font-medium text-dark-text">Rose Mitchell</p>
            <p className="text-[10px] text-dark-text/40">Authorized Grandmother</p>
          </div>
        </div>
      </div>
      <p className="text-[12px] text-dark-text/40 text-center">Parent notified before leaving the parking lot.</p>
    </div>
  )
}

/* ── Main component ────────────────────────────────────────────── */

export default function ProductTour() {
  const [activeTab, setActiveTab] = useState<TabId>('checkin')
  const [frame, setFrame] = useState(0)

  const frameCounts: Record<TabId, number> = { checkin: 4, report: 4, pickup: 4 }
  const total = frameCounts[activeTab]

  function switchTab(id: TabId) {
    setActiveTab(id)
    setFrame(0)
  }

  function renderFrame() {
    if (activeTab === 'checkin') return <CheckInFrame step={frame} />
    if (activeTab === 'report') return <ReportFrame step={frame} />
    return <PickupFrame step={frame} />
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Tab buttons */}
      <div className="flex rounded-xl overflow-hidden border border-[rgba(47,74,58,0.15)] mb-8 bg-white">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => switchTab(tab.id)}
            className={`flex-1 py-3 text-[13px] font-medium transition-colors ${
              activeTab === tab.id
                ? 'bg-forest-green text-white'
                : 'text-dark-text/60 hover:text-forest-green'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Frame display */}
      <div className="bg-white rounded-2xl border border-[rgba(47,74,58,0.1)] overflow-hidden" style={{ boxShadow: '0 8px 40px rgba(47,74,58,0.1)', minHeight: '340px' }}>
        <div className="p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${frame}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
            >
              {renderFrame()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="border-t border-[rgba(47,74,58,0.08)] px-6 py-4 flex items-center justify-between">
          {/* Step dots */}
          <div className="flex gap-2">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                onClick={() => setFrame(i)}
                aria-label={`Go to step ${i + 1} of ${total}`}
                aria-current={i === frame ? 'step' : undefined}
                className={`rounded-full transition-all duration-200 ${
                  i === frame ? 'w-5 h-2 bg-forest-green' : 'w-2 h-2 bg-forest-green/20 hover:bg-forest-green/40'
                }`}
              />
            ))}
          </div>

          {/* Prev / Next */}
          <div className="flex gap-2">
            <button
              onClick={() => setFrame(f => Math.max(0, f - 1))}
              disabled={frame === 0}
              aria-label="Previous step"
              className="w-9 h-9 rounded-lg border border-[rgba(47,74,58,0.15)] flex items-center justify-center text-dark-text/50 hover:border-forest-green hover:text-forest-green disabled:opacity-30 transition-colors"
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              onClick={() => setFrame(f => Math.min(total - 1, f + 1))}
              disabled={frame === total - 1}
              aria-label="Next step"
              className="w-9 h-9 rounded-lg bg-forest-green flex items-center justify-center text-white disabled:opacity-30 hover:bg-[#243d2f] transition-colors"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
