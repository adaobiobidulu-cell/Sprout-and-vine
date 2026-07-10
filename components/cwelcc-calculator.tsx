'use client'

import { useState } from 'react'
import Link from 'next/link'
import EmailCapture from '@/components/email-capture'
import {
  calculate,
  CWELCC_FIGURES,
  type OperatorType,
  type ParticipationStatus,
} from '@/lib/cwelcc-calculator'

const inputClass =
  'w-full border border-[rgba(47,74,58,0.2)] rounded-lg px-4 py-2.5 text-[14px] text-dark-text bg-white focus:outline-none focus:border-forest-green transition-colors'
const labelClass = 'block text-[13px] font-semibold text-dark-text mb-1.5'

function cad(n: number) {
  return n.toLocaleString('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 2 })
}

/*
 * CWELCC calculator (improvement brief 3.1): one-screen form, calm
 * results panel below it that updates on input change. Results are never
 * gated behind an email; the capture below them is optional. All figures
 * come from lib/cwelcc-calculator.ts and nowhere else. The explanation
 * and limitations copy is Ada's, validated by the licensing expert
 * (July 8, 2026); the only edits are em dashes converted per the site's
 * copy rules.
 */
export default function CwelccCalculator() {
  const [operatorType, setOperatorType] = useState<OperatorType>('centre')
  const [children, setChildren] = useState('')
  const [dailyFee, setDailyFee] = useState('')
  const [oneTimeFees, setOneTimeFees] = useState('')
  const [serviceDays, setServiceDays] = useState(String(CWELCC_FIGURES.ontario.defaultServiceDaysPerYear ?? 250))
  const [participation, setParticipation] = useState<ParticipationStatus>('considering')

  const childrenNum = parseInt(children, 10)
  const feeNum = parseFloat(dailyFee)
  const oneTimeNum = oneTimeFees.trim() === '' ? 0 : parseFloat(oneTimeFees)
  const daysNum = parseInt(serviceDays, 10)
  const inputsComplete =
    Number.isFinite(childrenNum) && childrenNum > 0 &&
    Number.isFinite(feeNum) && feeNum >= 0 &&
    Number.isFinite(oneTimeNum) && oneTimeNum >= 0 &&
    Number.isFinite(daysNum) && daysNum >= 50 && daysNum <= 366

  const results = inputsComplete
    ? calculate({
        operatorType,
        childrenUnderSix: childrenNum,
        currentDailyFeeCad: feeNum,
        oneTimeMandatoryFeesCad: oneTimeNum,
        serviceDaysPerYear: daysNum,
        participation,
      })
    : null

  return (
    <div>
      {/* Form */}
      <div className="bg-white rounded-2xl border border-[rgba(47,74,58,0.1)] p-7" style={{ boxShadow: '0 4px 24px rgba(47,74,58,0.07)' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="calc-province" className={labelClass}>Province</label>
            <select id="calc-province" className={inputClass} value="on" disabled aria-describedby="calc-province-note">
              <option value="on">Ontario</option>
            </select>
            <p id="calc-province-note" className="text-[12px] text-dark-text/45 mt-1.5 leading-relaxed">
              Ontario first. More provinces as we verify the numbers.
            </p>
          </div>

          <div>
            <label htmlFor="calc-operator" className={labelClass}>Operator type</label>
            <select
              id="calc-operator"
              className={inputClass}
              value={operatorType}
              onChange={e => setOperatorType(e.target.value as OperatorType)}
            >
              <option value="centre">Licensed centre</option>
              <option value="home-agency">Home daycare through a licensed agency</option>
            </select>
          </div>

          <div>
            <label htmlFor="calc-children" className={labelClass}>Children aged 0 to 5</label>
            <input
              id="calc-children"
              type="number"
              min={1}
              max={500}
              inputMode="numeric"
              placeholder="e.g. 24"
              className={inputClass}
              value={children}
              onChange={e => setChildren(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="calc-fee" className={labelClass}>Current or intended daily fee (CAD)</label>
            <input
              id="calc-fee"
              type="number"
              min={0}
              step="0.01"
              inputMode="decimal"
              placeholder="e.g. 55.00"
              className={inputClass}
              value={dailyFee}
              onChange={e => setDailyFee(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="calc-onetime" className={labelClass}>Mandatory one-time fees per child per year (CAD)</label>
            <input
              id="calc-onetime"
              type="number"
              min={0}
              step="0.01"
              inputMode="decimal"
              placeholder="e.g. 500 registration"
              className={inputClass}
              value={oneTimeFees}
              onChange={e => setOneTimeFees(e.target.value)}
              aria-describedby="calc-onetime-note"
            />
            <p id="calc-onetime-note" className="text-[12px] text-dark-text/45 mt-1.5 leading-relaxed">
              Registration, deposits, and admin fees count toward the cap. Leave blank if none.
            </p>
          </div>

          <div>
            <label htmlFor="calc-days" className={labelClass}>Service days per year</label>
            <input
              id="calc-days"
              type="number"
              min={50}
              max={366}
              inputMode="numeric"
              className={inputClass}
              value={serviceDays}
              onChange={e => setServiceDays(e.target.value)}
              aria-describedby="calc-days-note"
            />
            <p id="calc-days-note" className="text-[12px] text-dark-text/45 mt-1.5 leading-relaxed">
              The guideline&rsquo;s worked example uses 250. Monthly figures below are approximate: daily rate times service days over 12.
            </p>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="calc-participation" className={labelClass}>CWELCC participation status</label>
            <select
              id="calc-participation"
              className={inputClass}
              value={participation}
              onChange={e => setParticipation(e.target.value as ParticipationStatus)}
            >
              <option value="participating">Participating</option>
              <option value="considering">Considering</option>
              <option value="not-sure">Not sure</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results — always fully visible, never behind an email gate */}
      <div className="mt-8" aria-live="polite">
        {!inputsComplete && (
          <p className="text-[14px] text-dark-text/50 text-center py-6">
            Fill in your enrolment and fees above to see your results.
          </p>
        )}

        {inputsComplete && results && (
          <div className="bg-cream/60 rounded-2xl border border-[rgba(47,74,58,0.1)] p-7 space-y-6">
            {/* Effective base fee, with the amortization shown transparently */}
            <div className="bg-white rounded-xl p-5 border border-[rgba(47,74,58,0.08)]">
              <p className="text-[12px] uppercase tracking-[0.1em] font-semibold text-dark-text/40 mb-1.5">
                Your effective daily base fee
              </p>
              <p className="font-display text-[30px] font-medium text-forest-green leading-none">
                {cad(results.effectiveDailyBaseFeeCad)}<span className="text-[15px] text-dark-text/50 font-sans"> / day</span>
              </p>
              <p className="text-[13px] text-dark-text/55 mt-2">
                {results.amortizedDailyCad > 0
                  ? `${cad(feeNum)} daily fee plus ${cad(results.amortizedDailyCad)} from one-time mandatory fees spread over ${daysNum} service days. This combined figure is what the $22 cap tests.`
                  : 'No mandatory one-time fees entered, so your daily fee is your base fee. This is the figure the $22 cap tests.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-white rounded-xl p-5 border border-[rgba(47,74,58,0.08)]">
                <p className="text-[12px] uppercase tracking-[0.1em] font-semibold text-dark-text/40 mb-1.5">
                  Capped parent fee
                </p>
                <p className="font-display text-[30px] font-medium text-forest-green leading-none">
                  {cad(results.cappedDailyFeeCad)}<span className="text-[15px] text-dark-text/50 font-sans"> / day</span>
                </p>
                <p className="text-[13px] text-dark-text/55 mt-2">
                  About {cad(results.cappedMonthlyPerChildCad)} per child per month. For context, the provincial average base fee is about {cad(CWELCC_FIGURES.ontario.provincialAverageDailyFeeCad)} a day.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-[rgba(47,74,58,0.08)]">
                <p className="text-[12px] uppercase tracking-[0.1em] font-semibold text-dark-text/40 mb-1.5">
                  Gap from your base fee
                </p>
                <p className="font-display text-[30px] font-medium text-forest-green leading-none">
                  {cad(results.dailyGapCad)}<span className="text-[15px] text-dark-text/50 font-sans"> / day / child</span>
                </p>
                <p className="text-[13px] text-dark-text/55 mt-2">
                  {results.overCap
                    ? `Roughly ${cad(results.monthlyGapAllChildrenCad)} per month across ${childrenNum} children, addressed through the funding model below.`
                    : 'Your base fee is already at or below the cap.'}
                </p>
              </div>
            </div>

            {/* Frozen-fee rule: a sub-$22 fee cannot rise to meet the cap */}
            {results.belowCap && (
              <div className="rounded-xl bg-white border border-[rgba(47,74,58,0.1)] px-5 py-4">
                <p className="text-[13px] text-dark-text/65 leading-relaxed">
                  <span className="font-semibold text-dark-text">Worth knowing:</span> the cap is a ceiling, not a target. Programs already charging under $22 are frozen at their December 31, 2024 rate; an already-enrolled program cannot raise an existing sub-$22 fee up toward the cap.
                </p>
              </div>
            )}

            {/* Over-cap note, stated calmly */}
            {results.overCap && participation === 'participating' && (
              <div className="rounded-xl bg-terracotta/10 border-l-4 border-terracotta px-5 py-4">
                <p className="text-[13px] text-dark-text/70 leading-relaxed">
                  <span className="font-semibold text-dark-text">If you are participating today:</span> a participating program cannot charge a base fee above the cap. Contravening it can lead to an administrative penalty of $750 per child charged above the cap; at your enrolment that is {cad(results.potentialPenaltyCad)}.
                </p>
              </div>
            )}

            {operatorType === 'home-agency' && (
              <p className="text-[13px] text-dark-text/55 leading-relaxed">
                For home child care, the same cap applies to eligible children and is administered through your licensed agency.
              </p>
            )}

            {/* How the money actually flows — Ada's validated copy */}
            <div className="text-[14px] text-dark-text/70 leading-relaxed space-y-3">
              <p>
                <span className="font-semibold text-dark-text">How the money actually flows.</span> The $22-a-day cap is the most you can charge a parent for base child care. It is not a cheque the government sends you for the difference. Here&rsquo;s what really happens. Your local service system manager (your CMSM or DSSAB) funds you through cost-based funding: they add up your eligible operating costs, add an amount in lieu of profit or surplus, and then subtract the base fees you collect from parents. That result is your funding allocation. So when the cap lowers what parents pay you, that lost revenue is meant to be backfilled through your allocation, not paid to you per child.
              </p>
              <p>
                Two things follow from this that surprise most new operators. First, because your allocation is built minus your parent-fee revenue, every mandatory fee you charge (registration, deposits, admin) reduces your funding, not just your parents&rsquo; bill. And all of those count toward the $22 cap. Second, because funding is cost-based and reconciled at year-end against what you actually spent, underspending can be clawed back. This tool shows you the parent-facing side of the cap. It cannot tell you your allocation. Only your CMSM/DSSAB can.
              </p>
            </div>

            {/* What this does not tell you — Ada's validated copy */}
            <div className="rounded-xl bg-white border border-[rgba(47,74,58,0.1)] px-5 py-4">
              <p className="text-[12px] uppercase tracking-[0.1em] font-semibold text-terracotta mb-2">
                What this calculator does not tell you
              </p>
              <p className="text-[13px] text-dark-text/60 leading-relaxed mb-3">
                This is an estimate to help you think, not funding advice. It deliberately stops at the parent-fee side of the picture.
              </p>
              <ul className="space-y-2.5 text-[13px] text-dark-text/60 leading-relaxed">
                <li><span className="font-semibold text-dark-text/80">It does not calculate your funding.</span> Your actual CWELCC funding is a cost-based allocation (your eligible costs, plus an amount in lieu of profit, minus your parent-fee revenue, with vacancy and reconciliation adjustments). Only your CMSM or DSSAB can determine that number.</li>
                <li><span className="font-semibold text-dark-text/80">Your region runs its own rules.</span> Every CMSM/DSSAB administers CWELCC differently: timelines, reconciliation, eligible costs, and even whether you can join at all vary by region. What&rsquo;s true in one county may not hold in the next.</li>
                <li>
                  <span className="font-semibold text-dark-text/80">Joining may not be open.</span> For most of Ontario in 2026, new CWELCC intake is closed or fully allocated. Being able to charge $22/day assumes you are already enrolled or can enrol, which is a separate question. See{' '}
                  <Link href="/resources/cwelcc-intake" className="text-forest-green underline underline-offset-2 hover:text-sage-green transition-colors">
                    Can you join CWELCC right now?
                  </Link>
                </li>
                <li><span className="font-semibold text-dark-text/80">Mandatory fees change the math.</span> Registration fees, deposits, and admin fees are base fees and count toward the $22 cap once spread across your service days. Your real base fee is usually higher than your headline daily rate.</li>
                <li><span className="font-semibold text-dark-text/80">The future is uncertain.</span> The cap holds through December 31, 2026. The $10-a-day target has been delayed with no firm date, and the federal-provincial agreement is currently extended only to March 31, 2027.</li>
                <li><span className="font-semibold text-dark-text/80">Subsidy is separate.</span> Income-tested child care fee subsidy is a different program that can stack on top of CWELCC; this tool doesn&rsquo;t model it.</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Optional email of results — the answer above is never gated */}
      {inputsComplete && results && (
        <div className="mt-8 bg-white rounded-2xl border border-[rgba(47,74,58,0.1)] p-7">
          <EmailCapture
            heading="Email me these results"
            subheading="We will send this estimate plus our CWELCC guide. Optional; your results above are yours either way."
            buttonText="Send my results"
            source={`cwelcc-calculator-${participation}`}
          />
        </div>
      )}

      {/* Verification line — a feature, not a disclaimer */}
      {CWELCC_FIGURES.verifiedDate && CWELCC_FIGURES.guidelineVersion && (
        <p className="text-[13px] text-dark-text/50 text-center mt-8">
          Figures last verified {CWELCC_FIGURES.verifiedDate} against the {CWELCC_FIGURES.guidelineVersion}.
        </p>
      )}
    </div>
  )
}
