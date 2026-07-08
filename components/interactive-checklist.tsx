'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'svc-licensing-checklist'

/* Stable per-item key derived from the group and the item text, so
   reordering items never scrambles saved progress. Editing an item's
   wording resets only that item, which is the honest behaviour anyway:
   if the requirement changed, the operator should re-confirm it. */
function itemKey(groupId: string, text: string) {
  return `${groupId}:${text.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 60)}`
}

function loadSaved(): Record<string, boolean> {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}')
  } catch {
    return {}
  }
}

/*
 * Interactive licensing checklist (marketing site improvement brief 3.4).
 * Progress lives in localStorage only: no account, no cookies, nothing
 * sent anywhere. State loads in an effect after mount so the server-
 * rendered HTML (all unchecked) never mismatches hydration.
 */
export default function InteractiveChecklist({
  groupId,
  items,
}: {
  groupId: string
  items: string[]
}) {
  const [checked, setChecked] = useState<Record<string, boolean>>({})
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setChecked(loadSaved())
    setLoaded(true)
  }, [])

  function toggle(key: string) {
    setChecked(prev => {
      const next = { ...prev, [key]: !prev[key] }
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      } catch {
        /* storage unavailable (private browsing etc.) — checkbox still works for the session */
      }
      return next
    })
  }

  const doneCount = items.filter(t => checked[itemKey(groupId, t)]).length

  return (
    <div className="my-6">
      <ul className="space-y-1">
        {items.map(text => {
          const key = itemKey(groupId, text)
          const isChecked = loaded && !!checked[key]
          return (
            <li key={key}>
              <label className="flex items-start gap-3.5 rounded-lg px-2 py-2 -mx-2 cursor-pointer hover:bg-cream/60 transition-colors">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggle(key)}
                  className="mt-1 w-[18px] h-[18px] flex-shrink-0 accent-[#2F4A3A] cursor-pointer"
                />
                <span
                  className={`text-[15px] leading-[1.75] transition-colors ${
                    isChecked ? 'text-dark-text/40 line-through decoration-dark-text/25' : 'text-dark-text/75'
                  }`}
                >
                  {text}
                </span>
              </label>
            </li>
          )
        })}
      </ul>
      <p className="text-[12px] text-dark-text/40 mt-2 pl-2 print:hidden" aria-live="polite">
        {doneCount} of {items.length} complete
      </p>
    </div>
  )
}

/* Small toolbar shown once at the top of the checklist article:
   the print button and the saved-on-this-device note. */
export function ChecklistToolbar() {
  return (
    <div className="rounded-xl bg-cream/60 border border-[rgba(47,74,58,0.1)] px-5 py-4 my-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 print:hidden">
      <p className="text-[13px] text-dark-text/60 leading-relaxed">
        Check items off as you complete them. Progress is saved on this device only. Nothing is collected or sent to us.
      </p>
      <button
        onClick={() => window.print()}
        className="flex-shrink-0 inline-flex items-center gap-2 border-2 border-forest-green text-forest-green text-[13px] font-medium px-4 py-2 rounded-lg hover:bg-forest-green hover:text-white transition-colors"
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M4 6V2h8v4M4 12H2V6h12v6h-2M4 10h8v4H4v-4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        </svg>
        Print this checklist
      </button>
    </div>
  )
}
