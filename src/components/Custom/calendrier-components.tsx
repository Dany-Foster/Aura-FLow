import * as React from "react"
import { type DateRange } from "react-day-picker"

import { Calendar } from "@/components/ui/calendar"

export function CalendarCustomDays({
  range,
  setRange,
}: {
  range: DateRange | undefined
  setRange: React.Dispatch<React.SetStateAction<DateRange | undefined>>
}) {
  const [currentMonth, setCurrentMonth] = React.useState<Date>(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1)
  )
  return (
    <Calendar
      mode="range"
      defaultMonth={range?.from}
      selected={range}
      onSelect={setRange}
      month={currentMonth}
      onMonthChange={setCurrentMonth}
      numberOfMonths={1}
      className="mx-auto w-fit p-0 text-primary"
      formatters={{
        formatMonthDropdown: (date) => {
          const Date = date.toLocaleString("default", { month: "long" })
          return Date.charAt(0).toUpperCase() + Date.slice(1)
        },
      }}
    />
  )
}
