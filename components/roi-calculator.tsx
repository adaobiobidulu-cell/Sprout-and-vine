'use client'

import { useState } from 'react'
import Link from 'next/link'

function Slider({
  label,
  value,
  min,
  max,
  unit = '',
  onChange,
}: {
  label: string
  value: number
  min: number
  max: number
  unit?: string
  onChange: (v: number) => void
}) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div>
      <div className="flex justify-between items-baseline mb-2.5">
        <label className="text-[13px] font-medium text-cream/75 leading-snug max-w-[200px]">{label}</label>
        <span className="text-[15px] font-semibold text-cream ml-4 whitespace-nowrap">
          {value}{unit}
        </span>
      </div>
      <div className="relative h-1.5 rounded-full" style={{ background: 'rgba(247,242,232,0.15)' }}>
        <div
          className="absolute left-0 top-0 h-full rounded-full bg-sage-green transition-all duration-75"
          style={{ width: `${pct}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={e => onChange(parseInt(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer"
          style={{ height: '24px', marginTop: '-9px' }}
        />
      </div>
    </div>
  )
}

export default function ROICalculator() {
  const [children, setChildren] = useState(30)
  const [staff, setStaff] = useState(8)
  const [billing, setBilling] = useState(6)
  const [reports, setReports] = useState(5)

  const weeklyHours = billing * 0.75 + reports * 0.8
  const annualHours = Math.round(weeklyHours * 52)
  const dollarValue = Math.round(annualHours * 25)
  const roi = (dollarValue / (69 * 12)).toFixed(1)
  const totalAdmin = billing + reports

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-5">
          Calculate Your Savings
        </p>
        <h2 className="font-display font-medium text-cream leading-[1.08] mb-4" style={{ fontSize: 'clamp(40px, 5vw, 56px)' }}>
          How much time is<br />admin costing you?
        </h2>
        <p className="text-cream/55 text-[16px]">
          Most centers reclaim 8–12 hours per week with Sprout &amp; Vine.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Sliders */}
        <div className="flex flex-col gap-8">
          <Slider label="Children enrolled" value={children} min={5} max={150} onChange={setChildren} />
          <Slider label="Staff members" value={staff} min={1} max={30} onChange={setStaff} />
          <Slider label="Hours/week on billing & invoicing" value={billing} min={1} max={20} unit="h" onChange={setBilling} />
          <Slider label="Hours/week on reports & communication" value={reports} min={1} max={15} unit="h" onChange={setReports} />
        </div>

        {/* Output panel */}
        <div className="bg-white rounded-2xl p-7 shadow-xl" style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.18)' }}>
          <div className="space-y-5">
            <div>
              <p className="text-[12px] text-dark-text/40 uppercase tracking-wide mb-1.5">You currently spend</p>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-[38px] font-medium text-forest-green leading-none">~{totalAdmin}</span>
                <span className="text-[16px] text-dark-text/40"> hrs/week</span>
              </div>
              <p className="text-[12px] text-dark-text/35 mt-1">on billing and reporting</p>
            </div>

            <div className="border-t border-[rgba(47,74,58,0.08)] pt-5">
              <p className="text-[12px] text-dark-text/40 uppercase tracking-wide mb-1.5">Sprout &amp; Vine saves approximately</p>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-[38px] font-medium text-sage-green leading-none">{weeklyHours.toFixed(1)}</span>
                <span className="text-[16px] text-dark-text/40"> hrs/week</span>
              </div>
            </div>

            <div className="border-t border-[rgba(47,74,58,0.08)] pt-5">
              <p className="text-[12px] text-dark-text/40 uppercase tracking-wide mb-1.5">
                That's {annualHours} hours/year — worth
              </p>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-[38px] font-medium text-terracotta leading-none">
                  ${dollarValue.toLocaleString()}
                </span>
                <span className="text-[16px] text-dark-text/40"> at $25/hr</span>
              </div>
            </div>

            <div className="rounded-xl p-4 flex items-center justify-between" style={{ background: 'rgba(47,74,58,0.05)' }}>
              <div>
                <p className="text-[11px] text-dark-text/45 mb-0.5">Your ROI at CAD $69/month</p>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-[28px] font-medium text-forest-green leading-none">{roi}x</span>
                  <span className="text-[13px] text-dark-text/40">return</span>
                </div>
              </div>
              <div className="text-2xl">🌿</div>
            </div>
          </div>

          <Link
            href="/contact"
            className="mt-6 block bg-terracotta text-white text-[14px] font-medium px-6 py-3.5 rounded-lg text-center hover:bg-[#d4724e] transition-colors"
          >
            Start your free trial — see the savings yourself
          </Link>
        </div>
      </div>
    </div>
  )
}
