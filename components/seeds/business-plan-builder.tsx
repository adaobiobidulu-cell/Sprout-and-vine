'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

type ProgramType = 'home' | 'small' | 'large' | ''
type Province = 'ON' | 'BC' | 'AB' | 'MB' | 'QC' | 'Other' | ''
type YesNo = 'yes' | 'no' | ''
type YesNoUnsure = 'yes' | 'no' | 'unsure' | ''
type YesNoProgress = 'yes' | 'no' | 'progress' | ''
type LocationStatus = 'yes' | 'no' | 'looking' | ''
type ZoningStatus = 'yes' | 'no' | 'unknown' | ''
type TenureType = 'own' | 'lease' | 'home' | ''

interface FormData {
  // Section 1
  programType: ProgramType
  province: Province
  ageGroups: string[]
  openTime: number
  closeTime: number
  capacity: number
  philosophy: string
  // Section 2
  hasLocation: LocationStatus
  zoned: ZoningStatus
  tenure: TenureType
  monthlyRent: number
  // Section 3
  eceStatus: YesNoProgress
  yearsExperience: number
  hasFirstAid: YesNo
  hasVSC: YesNoProgress
  // Section 4
  savings: number
  hasFinancing: YesNoUnsure
  enrollMonth1: number
  enrollMonth6: number
  enrollMonth12: number
  plannedFee: number
  // Section 5
  selfWorking: YesNo
  staffCount: number
  knowsFirstHire: YesNo
  // Section 6
  targetDate: string
  contactedSSM: YesNo
  contactedAgency: YesNo
}

const STORAGE_KEY = 'sprout-vine-business-plan'

const defaultData: FormData = {
  programType: '', province: '', ageGroups: [], openTime: 7, closeTime: 18,
  capacity: 6, philosophy: '', hasLocation: '', zoned: '', tenure: '',
  monthlyRent: 0, eceStatus: '', yearsExperience: 0, hasFirstAid: '',
  hasVSC: '', savings: 0, hasFinancing: '', enrollMonth1: 0, enrollMonth6: 0,
  enrollMonth12: 0, plannedFee: 0, selfWorking: '', staffCount: 1,
  knowsFirstHire: '', targetDate: '', contactedSSM: '', contactedAgency: '',
}

const cwelccFeeCap: Record<Province, number> = {
  ON: 22, BC: 10, AB: 0, MB: 0, QC: 10, Other: 0, '': 0,
}

function RadioGroup({ label, options, value, onChange }: {
  label: string
  options: { value: string; label: string }[]
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div>
      <p className="text-[14px] font-semibold text-dark-text mb-3">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map(o => (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange(o.value)}
            className={`px-4 py-2 text-[13px] rounded-lg border transition-all ${
              value === o.value
                ? 'bg-forest-green text-white border-forest-green'
                : 'bg-white text-dark-text/70 border-[rgba(47,74,58,0.2)] hover:border-forest-green/50'
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  )
}

function NumberField({ label, value, onChange, prefix, suffix, min, max, hint }: {
  label: string; value: number; onChange: (v: number) => void
  prefix?: string; suffix?: string; min?: number; max?: number; hint?: string
}) {
  return (
    <div>
      <p className="text-[14px] font-semibold text-dark-text mb-1">{label}</p>
      {hint && <p className="text-[12px] text-dark-text/50 mb-2">{hint}</p>}
      <div className="flex items-center gap-2">
        {prefix && <span className="text-[14px] text-dark-text/50">{prefix}</span>}
        <input
          type="number"
          value={value || ''}
          onChange={e => onChange(Math.max(min ?? 0, Math.min(max ?? 9999, Number(e.target.value))))}
          min={min}
          max={max}
          className="w-40 border border-[rgba(47,74,58,0.2)] rounded-lg px-4 py-2.5 text-[14px] text-dark-text bg-white focus:outline-none focus:border-forest-green transition-colors"
        />
        {suffix && <span className="text-[14px] text-dark-text/50">{suffix}</span>}
      </div>
    </div>
  )
}

function TimeSlider({ label, value, onChange }: { label: string; value: number; onChange: (v: number) => void }) {
  function fmtHour(h: number) {
    if (h === 12) return '12:00 pm'
    if (h === 0) return '12:00 am'
    return h < 12 ? `${h}:00 am` : `${h - 12}:00 pm`
  }
  return (
    <div>
      <div className="flex justify-between items-baseline mb-1">
        <p className="text-[14px] font-semibold text-dark-text">{label}</p>
        <span className="text-[13px] text-forest-green font-medium">{fmtHour(value)}</span>
      </div>
      <input
        type="range"
        min={5} max={22} value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="w-full accent-forest-green"
      />
    </div>
  )
}

function CheckboxGroup({ label, options, values, onChange }: {
  label: string; options: string[]; values: string[]; onChange: (vals: string[]) => void
}) {
  function toggle(v: string) {
    onChange(values.includes(v) ? values.filter(x => x !== v) : [...values, v])
  }
  return (
    <div>
      <p className="text-[14px] font-semibold text-dark-text mb-3">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map(o => (
          <button
            key={o}
            type="button"
            onClick={() => toggle(o)}
            className={`px-4 py-2 text-[13px] rounded-lg border transition-all ${
              values.includes(o)
                ? 'bg-forest-green text-white border-forest-green'
                : 'bg-white text-dark-text/70 border-[rgba(47,74,58,0.2)] hover:border-forest-green/50'
            }`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  )
}

function calcScore(d: FormData): number {
  let score = 0
  if (d.eceStatus === 'yes') score += 20
  else if (d.eceStatus === 'progress') score += 10
  if (d.hasFirstAid === 'yes') score += 15
  if (d.hasVSC === 'yes') score += 10
  else if (d.hasVSC === 'progress') score += 5
  if (d.hasLocation === 'yes') score += 10
  if (d.zoned === 'yes') score += 5
  if (d.contactedSSM === 'yes' || d.contactedAgency === 'yes') score += 15
  if (d.savings > 1000) score += 10
  if (d.savings > 10000) score += 5
  if (d.hasFinancing === 'yes') score += 5
  if (d.knowsFirstHire === 'yes') score += 5
  return Math.min(100, score)
}

function calcNextSteps(d: FormData): string[] {
  const steps: string[] = []
  if (!d.hasFirstAid || d.hasFirstAid === 'no') steps.push('Book a Standard First Aid and infant/child CPR course (required before licensing).')
  if (!d.hasVSC || d.hasVSC === 'no') steps.push('Apply for a Vulnerable Sector Check at your local police service. Allow 2 to 8 weeks.')
  if (!d.eceStatus || d.eceStatus === 'no') steps.push('Consider enrolling in an ECE diploma program. Not legally required for home daycares, but strongly recommended.')
  if (d.programType === 'home' && (!d.contactedAgency || d.contactedAgency === 'no')) steps.push('Find and contact a licensed home child care agency in your area. In Ontario this is required: you cannot licence independently.')
  if ((d.programType === 'small' || d.programType === 'large') && (!d.contactedSSM || d.contactedSSM === 'no')) steps.push('Contact your local service system manager (CMSM or DSSAB) to understand CWELCC space allocations and funding priorities in your region.')
  if (!d.hasLocation || d.hasLocation === 'no') steps.push('Identify and confirm your operating space. Check municipal zoning before signing any lease.')
  if (d.hasLocation === 'yes' && d.zoned !== 'yes') steps.push('Confirm your space is zoned for childcare use with your municipal zoning department.')
  if (!d.savings || d.savings < 2000) steps.push('Build your startup fund. Home daycares typically need $2,000 to $5,000; centres need $50,000 or more.')
  if (!d.targetDate) steps.push('Set a realistic target opening date and work backwards to build your pre-licensing timeline.')
  if (steps.length === 0) steps.push('You are well prepared. Submit your licensing application and apply for CWELCC start-up funding through your CMSM.')
  return steps
}

function ReadinessMeter({ score }: { score: number }) {
  const label = score >= 70 ? 'Ready to apply' : score >= 40 ? 'Getting ready' : 'Early stage'
  const color = score >= 70 ? '#6EB76F' : score >= 40 ? '#E2845F' : '#AEC1B0'
  return (
    <div className="mb-8">
      <div className="flex items-baseline justify-between mb-2">
        <p className="text-[15px] font-semibold text-dark-text">Your readiness score</p>
        <span className="text-[22px] font-display font-medium" style={{ color }}>{score}/100</span>
      </div>
      <div className="h-3 rounded-full bg-[rgba(47,74,58,0.08)] overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${score}%`, background: color }}
        />
      </div>
      <p className="text-[13px] mt-2 font-medium" style={{ color }}>{label}</p>
    </div>
  )
}

const STEP_TITLES = [
  'Your Program',
  'Your Location',
  'Your Qualifications',
  'Finances',
  'Staffing',
  'Timeline',
]

export default function BusinessPlanBuilder() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState<FormData>(defaultData)
  const [done, setDone] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw)
        setData({ ...defaultData, ...parsed })
        setSaved(true)
      }
    } catch { /* ignore */ }
  }, [])

  function save(updated: FormData) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(updated)) } catch { /* ignore */ }
    setSaved(true)
  }

  function update(partial: Partial<FormData>) {
    setData(prev => {
      const next = { ...prev, ...partial }
      save(next)
      return next
    })
  }

  function fmtTime(h: number) {
    if (h === 12) return '12:00 pm'
    if (h === 0) return '12:00 am'
    return h < 12 ? `${h}:00 am` : `${h - 12}:00 pm`
  }

  const score = calcScore(data)
  const nextSteps = calcNextSteps(data)
  const suggestedFee = data.province ? cwelccFeeCap[data.province] : 0

  if (done) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl p-8 mb-6" style={{ boxShadow: '0 4px 32px rgba(47,74,58,0.09)', border: '1px solid rgba(47,74,58,0.1)' }}>
          <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-4">Your Readiness Summary</p>
          <ReadinessMeter score={score} />

          <div className="mb-8">
            <p className="text-[15px] font-semibold text-dark-text mb-4">Your next steps</p>
            <ol className="space-y-3">
              {nextSteps.map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-forest-green/10 text-forest-green text-[12px] font-semibold flex items-center justify-center mt-0.5">{i + 1}</span>
                  <p className="text-[14px] text-dark-text/70 leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="border-t border-[rgba(47,74,58,0.08)] pt-6 mb-6">
            <p className="text-[14px] font-semibold text-dark-text mb-3">Your plan at a glance</p>
            <div className="grid grid-cols-2 gap-3 text-[13px]">
              {data.programType && <div><span className="text-dark-text/45">Program type: </span><span className="text-dark-text/75 font-medium">{{home:'Home daycare',small:'Small centre',large:'Large centre'}[data.programType]}</span></div>}
              {data.province && <div><span className="text-dark-text/45">Province: </span><span className="text-dark-text/75 font-medium">{data.province}</span></div>}
              {data.capacity > 0 && <div><span className="text-dark-text/45">Capacity: </span><span className="text-dark-text/75 font-medium">{data.capacity} children</span></div>}
              {(data.openTime > 0 || data.closeTime > 0) && <div><span className="text-dark-text/45">Hours: </span><span className="text-dark-text/75 font-medium">{fmtTime(data.openTime)} to {fmtTime(data.closeTime)}</span></div>}
              {data.enrollMonth12 > 0 && <div><span className="text-dark-text/45">Year 1 enrollment target: </span><span className="text-dark-text/75 font-medium">{data.enrollMonth12} children</span></div>}
              {data.targetDate && <div><span className="text-dark-text/45">Target opening: </span><span className="text-dark-text/75 font-medium">{data.targetDate}</span></div>}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => window.print()}
              className="px-5 py-2.5 text-[13px] font-medium text-forest-green border border-forest-green/35 rounded-lg hover:bg-forest-green/5 transition-colors"
            >
              Print / Save as PDF
            </button>
            <button
              onClick={() => { setDone(false); setStep(0) }}
              className="px-5 py-2.5 text-[13px] font-medium text-dark-text/60 border border-[rgba(47,74,58,0.15)] rounded-lg hover:border-forest-green/35 transition-colors"
            >
              Edit my plan
            </button>
          </div>
        </div>

        <div className="bg-cream rounded-2xl p-7 border border-[rgba(47,74,58,0.1)]">
          <p className="text-[15px] font-semibold text-dark-text mb-2">Ready to go further?</p>
          <p className="text-[14px] text-dark-text/60 leading-relaxed mb-5">
            When you are ready to open, your Seeds account upgrades to Sprout in one click. All your information carries over.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/founding" className="inline-block bg-forest-green text-white text-[13px] font-medium px-5 py-2.5 rounded-lg hover:bg-[#243d2f] transition-colors">
              Apply to the Founding Operators Program
            </Link>
            <Link href="/seeds/funding" className="inline-block text-[13px] font-medium text-dark-text/60 border border-[rgba(47,74,58,0.2)] px-5 py-2.5 rounded-lg hover:border-forest-green/35 transition-colors">
              Read the funding guide
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[13px] text-dark-text/50">Step {step + 1} of {STEP_TITLES.length}</p>
          {saved && <p className="text-[11px] text-sage-green">Progress saved</p>}
        </div>
        <div className="h-1.5 rounded-full bg-[rgba(47,74,58,0.08)] overflow-hidden">
          <div className="h-full rounded-full bg-forest-green transition-all duration-300" style={{ width: `${((step + 1) / STEP_TITLES.length) * 100}%` }} />
        </div>
        <div className="flex justify-between mt-2">
          {STEP_TITLES.map((t, i) => (
            <button
              key={t}
              onClick={() => setStep(i)}
              className={`text-[10px] hidden md:block transition-colors ${i === step ? 'text-forest-green font-semibold' : i < step ? 'text-sage-green' : 'text-dark-text/30'}`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-7 md:p-8 mb-6" style={{ boxShadow: '0 4px 32px rgba(47,74,58,0.09)', border: '1px solid rgba(47,74,58,0.1)' }}>
        <p className="text-[11px] uppercase tracking-[0.16em] text-sage-green font-semibold mb-1">Section {step + 1}</p>
        <h2 className="font-display text-[26px] font-medium text-forest-green mb-7">{STEP_TITLES[step]}</h2>

        {step === 0 && (
          <div className="space-y-7">
            <RadioGroup
              label="What type of childcare are you planning to open?"
              options={[
                { value: 'home', label: 'Home daycare' },
                { value: 'small', label: 'Small centre (up to 40 children)' },
                { value: 'large', label: 'Large centre (40+ children)' },
              ]}
              value={data.programType}
              onChange={v => update({ programType: v as ProgramType })}
            />
            <RadioGroup
              label="Province"
              options={[
                { value: 'ON', label: 'Ontario' },
                { value: 'BC', label: 'BC' },
                { value: 'AB', label: 'Alberta' },
                { value: 'MB', label: 'Manitoba' },
                { value: 'QC', label: 'Quebec' },
                { value: 'Other', label: 'Other' },
              ]}
              value={data.province}
              onChange={v => update({ province: v as Province })}
            />
            <CheckboxGroup
              label="Age groups you plan to serve (select all that apply)"
              options={['Infants', 'Toddlers', 'Preschool', 'School Age']}
              values={data.ageGroups}
              onChange={v => update({ ageGroups: v })}
            />
            <TimeSlider label="Opening time" value={data.openTime} onChange={v => update({ openTime: v })} />
            <TimeSlider label="Closing time" value={data.closeTime} onChange={v => update({ closeTime: v })} />
            <NumberField label="Planned capacity (number of children)" value={data.capacity} onChange={v => update({ capacity: v })} min={1} max={200} suffix="children" />
            <div>
              <p className="text-[14px] font-semibold text-dark-text mb-1">Program philosophy (optional)</p>
              <p className="text-[12px] text-dark-text/50 mb-2">Describe your approach to early learning. Max 200 words. This is for your own planning.</p>
              <textarea
                value={data.philosophy}
                onChange={e => {
                  const words = e.target.value.trim().split(/\s+/).filter(Boolean)
                  if (words.length <= 200) update({ philosophy: e.target.value })
                }}
                rows={4}
                className="w-full border border-[rgba(47,74,58,0.2)] rounded-lg px-4 py-3 text-[14px] text-dark-text bg-white focus:outline-none focus:border-forest-green transition-colors resize-none"
                placeholder="E.g. We believe children learn best through play and exploration in a warm, home-like environment..."
              />
              <p className="text-[11px] text-dark-text/35 mt-1">{data.philosophy.trim().split(/\s+/).filter(Boolean).length} / 200 words</p>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-7">
            <RadioGroup
              label="Do you have a location in mind?"
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'looking', label: 'Still looking' },
                { value: 'no', label: 'Not yet' },
              ]}
              value={data.hasLocation}
              onChange={v => update({ hasLocation: v as LocationStatus })}
            />
            {data.hasLocation === 'yes' && (
              <>
                <RadioGroup
                  label="Is the space zoned for childcare use?"
                  options={[
                    { value: 'yes', label: 'Yes, confirmed' },
                    { value: 'unknown', label: 'Not sure' },
                    { value: 'no', label: 'No' },
                  ]}
                  value={data.zoned}
                  onChange={v => update({ zoned: v as ZoningStatus })}
                />
                <RadioGroup
                  label="Owned or rented?"
                  options={[
                    { value: 'home', label: 'Home-based' },
                    { value: 'lease', label: 'Leased space' },
                    { value: 'own', label: 'Owned space' },
                  ]}
                  value={data.tenure}
                  onChange={v => update({ tenure: v as TenureType })}
                />
              </>
            )}
            {(data.hasLocation === 'yes' && data.tenure !== 'home') && (
              <NumberField
                label="Estimated monthly rent or mortgage for the space"
                value={data.monthlyRent}
                onChange={v => update({ monthlyRent: v })}
                prefix="CAD $"
                suffix="/month"
                hint="This helps you estimate your monthly operating costs."
              />
            )}
          </div>
        )}

        {step === 2 && (
          <div className="space-y-7">
            <RadioGroup
              label="Do you hold an ECE diploma or RECE designation?"
              options={[
                { value: 'yes', label: 'Yes, I am registered' },
                { value: 'progress', label: 'In progress' },
                { value: 'no', label: 'Not yet' },
              ]}
              value={data.eceStatus}
              onChange={v => update({ eceStatus: v as YesNoProgress })}
            />
            <NumberField
              label="Years of experience working in childcare"
              value={data.yearsExperience}
              onChange={v => update({ yearsExperience: v })}
              min={0}
              max={50}
              suffix="years"
            />
            <RadioGroup
              label="Do you have a valid Standard First Aid certification (including infant and child CPR)?"
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'Not yet' },
              ]}
              value={data.hasFirstAid}
              onChange={v => update({ hasFirstAid: v as YesNo })}
            />
            <RadioGroup
              label="Do you have a Vulnerable Sector Check (criminal reference check)?"
              options={[
                { value: 'yes', label: 'Yes, current' },
                { value: 'progress', label: 'Applied, waiting' },
                { value: 'no', label: 'Not yet' },
              ]}
              value={data.hasVSC}
              onChange={v => update({ hasVSC: v as YesNoProgress })}
            />
          </div>
        )}

        {step === 3 && (
          <div className="space-y-7">
            <NumberField
              label="Personal savings available for startup costs"
              value={data.savings}
              onChange={v => update({ savings: v })}
              prefix="CAD $"
              hint="Home daycares typically need $2,000 to $5,000. Centres need $50,000 or more."
            />
            <RadioGroup
              label="Do you have access to business financing (loan, line of credit, investor)?"
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
                { value: 'unsure', label: 'Not sure' },
              ]}
              value={data.hasFinancing}
              onChange={v => update({ hasFinancing: v as YesNoUnsure })}
            />
            <div>
              <p className="text-[14px] font-semibold text-dark-text mb-1">Expected enrollment</p>
              <p className="text-[12px] text-dark-text/50 mb-5">Your realistic target, not maximum capacity.</p>
              <div className="space-y-5">
                <NumberField label="Month 1 (opening)" value={data.enrollMonth1} onChange={v => update({ enrollMonth1: v })} min={0} max={data.capacity} suffix="children" />
                <NumberField label="Month 6" value={data.enrollMonth6} onChange={v => update({ enrollMonth6: v })} min={0} max={data.capacity} suffix="children" />
                <NumberField label="Month 12 (year 1 target)" value={data.enrollMonth12} onChange={v => update({ enrollMonth12: v })} min={0} max={data.capacity} suffix="children" />
              </div>
            </div>
            <div>
              <NumberField
                label="Planned fee per child per month"
                value={data.plannedFee}
                onChange={v => update({ plannedFee: v })}
                prefix="CAD $"
                suffix="/month"
                hint={suggestedFee > 0 ? `CWELCC fee cap in ${data.province}: approximately $${suggestedFee}/day (${data.province === 'ON' ? '$440/month based on 20 days' : 'varies'}).` : 'Fee caps vary by province and CWELCC participation.'}
              />
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-7">
            <RadioGroup
              label="Will you be working in the program yourself (as an educator or provider)?"
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No, I will hire staff' },
              ]}
              value={data.selfWorking}
              onChange={v => update({ selfWorking: v as YesNo })}
            />
            <NumberField
              label="Number of paid staff at opening (not including yourself)"
              value={data.staffCount}
              onChange={v => update({ staffCount: v })}
              min={0}
              max={50}
              suffix="staff"
            />
            <RadioGroup
              label="Do you already know your first hire?"
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'Not yet' },
              ]}
              value={data.knowsFirstHire}
              onChange={v => update({ knowsFirstHire: v as YesNo })}
            />
          </div>
        )}

        {step === 5 && (
          <div className="space-y-7">
            <div>
              <p className="text-[14px] font-semibold text-dark-text mb-1">Target opening date</p>
              <input
                type="month"
                value={data.targetDate}
                onChange={e => update({ targetDate: e.target.value })}
                className="border border-[rgba(47,74,58,0.2)] rounded-lg px-4 py-2.5 text-[14px] text-dark-text bg-white focus:outline-none focus:border-forest-green transition-colors"
              />
            </div>
            {(data.programType === 'small' || data.programType === 'large') && (
              <RadioGroup
                label="Have you contacted your local service system manager (CMSM or DSSAB) yet?"
                options={[
                  { value: 'yes', label: 'Yes' },
                  { value: 'no', label: 'Not yet' },
                ]}
                value={data.contactedSSM}
                onChange={v => update({ contactedSSM: v as YesNo })}
              />
            )}
            {data.programType === 'home' && (
              <RadioGroup
                label="Have you contacted a licensed home child care agency in your area?"
                options={[
                  { value: 'yes', label: 'Yes, I have spoken to one or more' },
                  { value: 'no', label: 'Not yet' },
                ]}
                value={data.contactedAgency}
                onChange={v => update({ contactedAgency: v as YesNo })}
              />
            )}
            <div className="rounded-xl p-5 bg-[rgba(47,74,58,0.04)] border border-[rgba(47,74,58,0.1)]">
              <p className="text-[13px] text-dark-text/60 leading-relaxed">
                Your progress is saved automatically. Once you click "See my readiness summary" you will see a personalized checklist of next steps and a readiness score based on your answers.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setStep(s => s - 1)}
          disabled={step === 0}
          className="px-5 py-2.5 text-[13px] font-medium text-dark-text/50 border border-[rgba(47,74,58,0.15)] rounded-lg hover:border-forest-green/35 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Back
        </button>
        {step < STEP_TITLES.length - 1 ? (
          <button
            onClick={() => setStep(s => s + 1)}
            className="px-6 py-2.5 text-[13px] font-medium bg-forest-green text-white rounded-lg hover:bg-[#243d2f] transition-colors"
          >
            Continue
          </button>
        ) : (
          <button
            onClick={() => setDone(true)}
            className="px-6 py-2.5 text-[13px] font-medium bg-terracotta text-white rounded-lg hover:bg-[#d4724e] transition-colors"
          >
            See my readiness summary
          </button>
        )}
      </div>
    </div>
  )
}
