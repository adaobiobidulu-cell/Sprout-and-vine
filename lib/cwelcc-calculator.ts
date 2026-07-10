/*
 * CWELCC calculator figures and formulas (improvement brief 3.1).
 *
 * EVERY figure the calculator uses lives in this one file so that a
 * guideline update is a one-file change. Do not scatter numbers into
 * components.
 *
 * Figures below were supplied by Ada and validated through the CWELCC
 * licensing expert. Sources: 2026 CWELCC centre-based guideline v.1;
 * O. Reg. 137/15 s. 77.2; Child Care Centre Licensing Manual Part 2;
 * Canada-Ontario agreement extension (Dec 2025). Verified July 8, 2026.
 *
 * Rules the math must respect (from the expert's notes):
 * - $22/day is a MAXIMUM and a yearly AVERAGE: all mandatory fees
 *   (registration, deposits, admin, mandatory food) are "base fees" and
 *   count toward the cap. One-time mandatory fees are amortized over the
 *   service days in the year: (daily base fee) + (one-time fees / service
 *   days) must average $22 or less.
 * - Capped fee = min(intended fee, $22), BUT an already-enrolled program
 *   charging under $22 is frozen at its December 31, 2024 rate and cannot
 *   raise its fee up toward the cap.
 * - The $10/day target is stalled with no scheduled date. Do not promise
 *   it. The cap holds through December 31, 2026; the federal-provincial
 *   agreement is extended to March 31, 2027.
 * - Charging above the cap can draw an administrative penalty of $750 per
 *   child charged above it.
 * - The same cap applies to eligible children in participating licensed
 *   home child care, administered through the agency.
 */

export const CWELCC_FIGURES = {
  verified: true,

  /* Rendered on the page as the verification line. */
  guidelineVersion: '2026 CWELCC guidelines and O. Reg. 137/15' as string | null,
  verifiedDate: 'July 8, 2026' as string | null,

  ontario: {
    /* Maximum base fee per day for CWELCC-eligible children (under 6) in
       participating licensed programs. Effective Jan 1, 2025; unchanged
       for 2026; holds until December 31, 2026. */
    dailyFeeCapCad: 22 as number | null,

    /* Context figure only (not used in math): the current provincial
       average base fee the extended agreement maintains through 2026. */
    provincialAverageDailyFeeCad: 19,

    /* Administrative penalty for contravening the fee cap: $750 times the
       number of children charged above the cap. */
    overCapPenaltyPerChildCad: 750,

    /* Default service days per year for amortizing one-time mandatory
       fees, from the guideline's own worked example ($500 over a
       250-service-day year contributes $2/day). User-adjustable. */
    defaultServiceDaysPerYear: 250 as number | null,
  },
}

export type OperatorType = 'centre' | 'home-agency'
export type ParticipationStatus = 'participating' | 'considering' | 'not-sure'

export interface CalculatorInputs {
  operatorType: OperatorType
  childrenUnderSix: number
  currentDailyFeeCad: number
  /* Mandatory one-time fees per child per year: registration, deposits,
     administration. These are base fees and count toward the cap. */
  oneTimeMandatoryFeesCad: number
  serviceDaysPerYear: number
  participation: ParticipationStatus
}

export interface CalculatorResults {
  /* One-time mandatory fees spread across the year's service days. */
  amortizedDailyCad: number
  /* Daily fee + amortized one-time fees: the figure the cap tests. */
  effectiveDailyBaseFeeCad: number
  cappedDailyFeeCad: number
  /* Approximate: daily figure x (service days / 12). */
  cappedMonthlyPerChildCad: number
  dailyGapCad: number
  monthlyGapAllChildrenCad: number
  overCap: boolean
  potentialPenaltyCad: number
  /* True when the entered fee is already under the cap: frozen programs
     cannot raise a sub-$22 fee up toward the cap. */
  belowCap: boolean
}

export function calculate(inputs: CalculatorInputs): CalculatorResults | null {
  const { dailyFeeCapCad, overCapPenaltyPerChildCad } = CWELCC_FIGURES.ontario
  if (dailyFeeCapCad == null || inputs.serviceDaysPerYear <= 0) return null

  const amortizedDaily = inputs.oneTimeMandatoryFeesCad / inputs.serviceDaysPerYear
  const effectiveDaily = inputs.currentDailyFeeCad + amortizedDaily
  const monthlyFactor = inputs.serviceDaysPerYear / 12
  const cappedDaily = Math.min(effectiveDaily, dailyFeeCapCad)
  const dailyGap = Math.max(0, effectiveDaily - dailyFeeCapCad)
  const overCap = effectiveDaily > dailyFeeCapCad

  return {
    amortizedDailyCad: amortizedDaily,
    effectiveDailyBaseFeeCad: effectiveDaily,
    cappedDailyFeeCad: cappedDaily,
    cappedMonthlyPerChildCad: cappedDaily * monthlyFactor,
    dailyGapCad: dailyGap,
    monthlyGapAllChildrenCad: dailyGap * monthlyFactor * inputs.childrenUnderSix,
    overCap,
    potentialPenaltyCad: overCap ? overCapPenaltyPerChildCad * inputs.childrenUnderSix : 0,
    belowCap: effectiveDaily < dailyFeeCapCad,
  }
}

/* FAQ entries, written by Ada and validated by the licensing expert
   (July 8, 2026). Rendered on the page with FAQPage JSON-LD. */
export const CALCULATOR_FAQS: { q: string; a: string }[] = [
  {
    q: 'Is $22/day what CWELCC pays me, or what I charge parents?',
    a: "It's the most you can charge a parent for base child care. Your funding is separate: your CMSM/DSSAB pays you a cost-based allocation and then subtracts your parent-fee revenue from it. You do not receive \"old fee minus $22\" per child.",
  },
  {
    q: 'I already charge less than $22 a day. Can I raise my fee up to the cap?',
    a: "No. Programs charging under $22 are frozen at their December 31, 2024 rate and can't raise fees up to $22. The cap is a ceiling, not a target.",
  },
  {
    q: 'Do registration fees and deposits count toward the cap?',
    a: 'Yes. Any mandatory fee (registration, deposit, administration) is a "base fee." One-time fees are spread across your service days for the year: a $500 registration fee over 250 service days adds $2 to your daily rate for cap purposes. Only genuinely optional charges (field trips, transportation you can decline) sit outside the cap.',
  },
  {
    q: 'Will fees drop to $10 a day soon?',
    a: "That remains the long-term goal, but the date has been pushed back more than once and there's currently no firm timeline. The $22 cap is in place through December 31, 2026.",
  },
  {
    q: 'Can I even join CWELCC right now?',
    a: 'It depends entirely on your region. Most CMSMs/DSSABs have fully allocated their 2026 spaces and aren\'t taking new applications. See our "Can you join CWELCC right now?" page for what to do in the meantime.',
  },
  {
    q: 'Does the cap apply to home child care?',
    a: 'Yes. For eligible children in a participating licensed home child care agency, the same $22/day cap applies, administered through the agency.',
  },
]
