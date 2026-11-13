import { type DateRange } from "react-day-picker"

import { Calendar } from "@/components/ui/calendar"
import { fr } from "date-fns/locale"

export function CalendarCustomDays({
  range,
  setRange,
  currentMonth,
  setCurrentMonth,
}: {
  range: DateRange
  setRange: (range: DateRange) => void
  currentMonth: Date
  setCurrentMonth: (date: Date) => void
}) {
  return (
    <Calendar
      locale={fr}
      mode="range"
      defaultMonth={range?.from}
      selected={range}
      onSelect={setRange as (range: DateRange | undefined) => void}
      month={currentMonth}
      onMonthChange={setCurrentMonth}
      numberOfMonths={1}
      fixedWeeks
      weekStartsOn={1}
      className="mx-auto w-fit p-0 text-primary capitalize"
      formatters={{
        formatMonthDropdown: (date) => {
          const Date = date.toLocaleString("default", { month: "long" })
          return Date.charAt(0).toUpperCase() + Date.slice(1)
        },
      }}
    />
  )
}
