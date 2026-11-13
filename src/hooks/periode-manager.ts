import { addDays } from "date-fns"
import type { DateRange } from "react-day-picker"
import { create } from "zustand"

interface PeriodeType {
  range: DateRange
  setRange: (range: DateRange) => void
  currentMonth: Date | undefined
  setCurrentMonth: (date: Date) => void
}

export const usePeriodeMangement = create<PeriodeType>((set) => ({
  range: {
    from: addDays(new Date(), -(new Date().getDay() - 1)),
    to: addDays(new Date(), 0),
  },
  setRange: (Range) => set({ range: Range }),
  currentMonth: undefined,
  setCurrentMonth: (date) => set({ currentMonth: date }),
}))
