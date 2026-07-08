/*
 * CWELCC calculator figures and formulas (improvement brief 3.1).
 *
 * EVERY figure the calculator uses lives in this one file so that a
 * guideline update is a one-file change. Do not scatter numbers into
 * components.
 *
 * RULES FOR THIS FILE (from the improvement brief):
 * - Every figure below must come from Ada, validated through the CWELCC
 *   licensing expert. Nothing here may be sourced or inferred by anyone
 *   else, including from other pages of this site.
 * - When a figure is entered or updated, record the guideline version and
 *   the date it was verified in `guidelineVersion` and `verifiedDate`.
 * - The calculator page stays redirected to the CWELCC guide until
 *   `verified` is true. Flip it only when the licensing expert has
 *   confirmed every figure AND the explanatory copy in the calculator
 *   component.
 */

export const CWELCC_FIGURES = {
  /* Flip to true only when Ada confirms the licensing expert has
     validated every figure and formula in this file. */
  verified: false,

  /* e.g. '2026 Ontario CWELCC funding guidelines' — set when verified. */
  guidelineVersion: null as string | null,

  /* yyyy-mm-dd the figures were last verified — rendered on the page as
     "Figures last verified: [date]". Set when verified. */
  verifiedDate: null as string | null,

  ontario: {
    /* Capped parent fee in CAD per day for CWELCC-participating
       programs. ADA INPUT: confirm current value and effective date. */
    dailyFeeCapCad: null as number | null,

    /* Average operating days per month used to express the daily cap as
       a monthly amount. ADA INPUT: confirm the convention the licensing
       expert wants (calendar-month average vs. fixed 21-day convention). */
    operatingDaysPerMonth: null as number | null,
  },
}

export type OperatorType = 'centre' | 'home-agency'
export type ParticipationStatus = 'participating' | 'considering' | 'not-sure'

export interface CalculatorInputs {
  operatorType: OperatorType
  childrenUnderSix: number
  currentDailyFeeCad: number
  participation: ParticipationStatus
}

export interface CalculatorResults {
  cappedDailyFeeCad: number
  cappedMonthlyPerChildCad: number
  dailyGapCad: number
  monthlyGapAllChildrenCad: number
}

/* Draft formula, isolated here for the licensing expert to confirm or
   correct before `verified` is flipped: monthly per child is the daily
   cap times the agreed operating-days convention; the gap is current
   fee minus cap (zero-floored: a fee already at or below the cap has
   no reduction to show). */
export function calculate(inputs: CalculatorInputs): CalculatorResults | null {
  const { dailyFeeCapCad, operatingDaysPerMonth } = CWELCC_FIGURES.ontario
  if (dailyFeeCapCad == null || operatingDaysPerMonth == null) return null

  const dailyGap = Math.max(0, inputs.currentDailyFeeCad - dailyFeeCapCad)
  return {
    cappedDailyFeeCad: dailyFeeCapCad,
    cappedMonthlyPerChildCad: dailyFeeCapCad * operatingDaysPerMonth,
    dailyGapCad: dailyGap,
    monthlyGapAllChildrenCad: dailyGap * operatingDaysPerMonth * inputs.childrenUnderSix,
  }
}

/* FAQ entries for the calculator page (rendered with FAQPage JSON-LD).
   ADA INPUT: 4 to 6 entries, every answer validated by the licensing
   expert. The page renders the FAQ section only when entries exist. */
export const CALCULATOR_FAQS: { q: string; a: string }[] = []
