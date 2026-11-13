import { usePeriodeMangement } from "./periode-manager"

export default function usePeriode() {
  const range = usePeriodeMangement((state) => state.range)
  const setRange = usePeriodeMangement((state) => state.setRange)
  const currentMonth = usePeriodeMangement((state) => state.currentMonth)
  const setCurrentMonth = usePeriodeMangement((state) => state.setCurrentMonth)

  return { setRange, setCurrentMonth, currentMonth, range }
}
