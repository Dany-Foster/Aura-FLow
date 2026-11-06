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
import { DateList } from "@/lib/data.type"
import { cn } from "@/lib/utils"
import { addDays } from "date-fns"
import { CalendarDays, Download } from "lucide-react"
import { useState } from "react"
import { type DateRange } from "react-day-picker"

function ButtonCalendar() {
  const IsMobile = useIsMobile()
  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 0),
  })

  const [selectedDate, setSelectedDate] = useState<string>("T")

  const OnValueChange = (value: string | null) => {
    setSelectedDate(value!)
  }

  const ChangeSelectedDate = (item: { label: string; value: string }) => {
    if (item === null) return
    switch (item.value) {
      case "T":
        setRange({ from: addDays(new Date(), 0), to: addDays(new Date(), 0) })
        break
      case "H":
        setRange({
          ...range,
          from: addDays(new Date(), -1),
          to: addDays(new Date(), 0),
        })
        break
      case "S":
        setRange({
          from: addDays(new Date(), -(new Date().getDay() - 1)),
          to: addDays(new Date(), 0),
        })
        break
      case "-7J":
        setRange({ from: addDays(new Date(), -7), to: addDays(new Date(), 0) })
        break
      case "-28J":
        setRange({ from: addDays(new Date(), -28), to: addDays(new Date(), 0) })
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
        break
      case "-A":
        setRange({
          from: addDays(new Date(new Date().getFullYear() - 1, 0, 1), 0),
          to: addDays(new Date(new Date().getFullYear() - 1, 11, 0), 0),
        })
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
          <Button variant="outline" size="icon" className="text-primary">
            <CalendarDays />
            {}
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
                onValueChange={(value) => OnValueChange(value)}
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
                  onClick={() => ChangeSelectedDate(item)}
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
          <CalendarCustomDays range={range} setRange={setRange} />
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default function Dashboard() {
  return (
    <section className="mt-2">
      <div className="flex w-full items-center justify-between gap-2">
        <h1 className="text-2xl font-bold tracking-tight text-primary">
          Tableau de bord
        </h1>
        <div className="flex items-center gap-2">
          <ButtonCalendar />
          <Button variant="default">
            <Download />
            Exporter
          </Button>
        </div>
      </div>
    </section>
  )
}
