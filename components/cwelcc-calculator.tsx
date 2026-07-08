'use client'

import { useState } from 'react'
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
 * come from lib/cwelcc-calculator.ts and nowhere else.
 *
 * The explanatory copy in the results panel is a draft for Ada and the
 * licensing expert to confirm before CWELCC_FIGURES.verified is flipped;
 * the page is unreachable until then.
 */
export default function CwelccCalculator() {
  const [operatorType, setOperatorType] = useState<OperatorType>('centre')
  const [children, setChildren] = useState('')
  const [dailyFee, setDailyFee] = useState('')
  const [participation, setParticipation] = useState<ParticipationStatus>('considering')

  const childrenNum = parseInt(children, 10)
  const feeNum = parseFloat(dailyFee)
  const inputsComplete = Number.isFinite(childrenNum) && childrenNum > 0 && Number.isFinite(feeNum) && feeNum >= 0

  const results = inputsComplete
    ? calculate({ operatorType, childrenUnderSix: childrenNum, currentDailyFeeCad: feeNum, participation })
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
            Fill in your enrolment and daily fee above to see your results.
          </p>
        )}

        {inputsComplete && results && (
          <div className="bg-cream/60 rounded-2xl border border-[rgba(47,74,58,0.1)] p-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-white rounded-xl p-5 border border-[rgba(47,74,58,0.08)]">
                <p className="text-[12px] uppercase tracking-[0.1em] font-semibold text-dark-text/40 mb-1.5">
                  Capped parent fee
                </p>
                <p className="font-display text-[30px] font-medium text-forest-green leading-none">
                  {cad(results.cappedDailyFeeCad)}<span className="text-[15px] text-dark-text/50 font-sans"> / day</span>
                </p>
                <p className="text-[13px] text-dark-text/55 mt-2">
                  About {cad(results.cappedMonthlyPerChildCad)} per child per month.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-[rgba(47,74,58,0.08)]">
                <p className="text-[12px] uppercase tracking-[0.1em] font-semibold text-dark-text/40 mb-1.5">
                  Gap from your current fee
                </p>
                <p className="font-display text-[30px] font-medium text-forest-green leading-none">
                  {cad(results.dailyGapCad)}<span className="text-[15px] text-dark-text/50 font-sans"> / day / child</span>
                </p>
                <p className="text-[13px] text-dark-text/55 mt-2">
                  {results.dailyGapCad > 0
                    ? `Roughly ${cad(results.monthlyGapAllChildrenCad)} per month across ${childrenNum} children, addressed through the funding model below.`
                    : 'Your fee is already at or below the cap.'}
                </p>
              </div>
            </div>

            <div className="text-[14px] text-dark-text/70 leading-relaxed space-y-3">
              <p>
                The gap between your current fee and the capped parent fee is not simply topped up. Under CWELCC, eligible costs are funded through your service system manager (your CMSM or DSSAB in Ontario), based on your funding agreement. What parents pay drops to the capped fee; your revenue picture depends on your agreement, not on the parent fee alone.
              </p>
            </div>

            <div className="rounded-xl bg-white border border-[rgba(47,74,58,0.1)] px-5 py-4">
              <p className="text-[12px] uppercase tracking-[0.1em] font-semibold text-terracotta mb-2">
                What this does not tell you
              </p>
              <p className="text-[13px] text-dark-text/60 leading-relaxed">
                Funding details vary by region and CMSM, application intake may be closed in some regions, and figures change as guidelines are updated. This is an estimate to help you plan, not financial or legal advice. Always confirm with your CMSM or program advisor.
              </p>
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
