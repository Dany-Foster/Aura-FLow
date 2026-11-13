import { CalendarCustomDays } from "@/components/Custom/calendrier-components"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { useIsMobile } from "@/hooks/use-mobile"
import usePeriode from "@/hooks/usePeriode"
import { DateList } from "@/lib/data.type"
import { cn } from "@/lib/utils"
import { addDays, format } from "date-fns"
import { CalendarDays } from "lucide-react"
import { useState } from "react"

export default function ButtonCalendar() {
  const IsMobile = useIsMobile()
  const { range, setRange, currentMonth, setCurrentMonth } = usePeriode()
  const [selectedDate, setSelectedDate] = useState<string>("S")

  const ChangeSelectedDate = (value: string | null) => {
    const item = DateList.find((i) => i.value === value)
    if (item === undefined || item === null) return
    switch (item.value) {
      case "S":
        setRange({
          from: addDays(new Date(), -(new Date().getDay() - 1)),
          to: addDays(new Date(), 0),
        })
        setCurrentMonth(
          new Date(new Date().getFullYear(), new Date().getMonth(), 1)
        )
        break
      case "-7J":
        setRange({ from: addDays(new Date(), -7), to: addDays(new Date(), 0) })
        setCurrentMonth(
          new Date(
            new Date().getFullYear(),
            new Date(addDays(new Date(), -7)).getMonth(),
            1
          )
        )
        break
      case "-28J":
        setRange({ from: addDays(new Date(), -28), to: addDays(new Date(), 0) })
        setCurrentMonth(
          new Date(
            new Date().getFullYear(),
            new Date(addDays(new Date(), -28)).getMonth(),
            1
          )
        )
        break
      case "-M":
        setRange({
          from: addDays(
            new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1),
            0
          ),
          to: addDays(
            new Date(new Date().getFullYear(), new Date().getMonth(), 0),
            0
          ),
        })
        setCurrentMonth(
          new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1)
        )
        break
      case "-A":
        setRange({
          from: addDays(new Date(new Date().getFullYear() - 1, 0, 1), 0),
          to: addDays(new Date(new Date().getFullYear() - 1, 12, 0), 0),
        })
        setCurrentMonth(new Date(new Date().getFullYear() - 1, 0, 1))
        break
      default:
        setRange({ from: addDays(new Date(), 0), to: addDays(new Date(), 0) })
        break
    }
    setSelectedDate(item.value)
  }

  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button variant="outline" className="">
            <CalendarDays />
            {!IsMobile && range && range.from && range.to && (
              <span className="ml-2 text-xs font-medium">
                {format(range?.from, "PPP")} - {format(range?.to, "PPP")}
              </span>
            )}
          </Button>
        }
      />
      <PopoverContent align="end" className="mt-1 w-auto overflow-hidden">
        <div
          className={cn(
            IsMobile && "flex-col",
            "flex justify-between gap-4 px-2 py-2.5"
          )}
        >
          {IsMobile ? (
            <div className="w-full">
              <Select
                items={DateList}
                value={selectedDate}
                onValueChange={(value) => ChangeSelectedDate(value)}
              >
                <SelectTrigger className="w-full font-medium text-foreground">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="w-full">
                  <SelectGroup>
                    {DateList.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          ) : (
            <div className="flex w-25 flex-col justify-start gap-1">
              {DateList.map((item) => (
                <Button
                  key={item.value}
                  variant="ghost"
                  data-active={selectedDate === item.value}
                  onClick={() => ChangeSelectedDate(item.value)}
                  className="flex w-full items-center justify-start text-xs"
                >
                  {item.label}
                </Button>
              ))}
            </div>
          )}
          <Separator
            orientation="vertical"
            className={cn(IsMobile && "hidden", "dark:bg-primary")}
          />
          <CalendarCustomDays
            range={range}
            setRange={setRange}
            currentMonth={currentMonth!}
            setCurrentMonth={setCurrentMonth!}
          />
        </div>
      </PopoverContent>
    </Popover>
  )
}
