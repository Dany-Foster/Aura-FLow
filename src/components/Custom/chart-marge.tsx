import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import usePeriode from "@/hooks/usePeriode"
import { ChartConfigMarge } from "@/lib/chart-config"
import { chartData } from "@/lib/chart-marge"
import { Download } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

export default function ChartMarge() {
  // const [selectPeriod, setSelectPeriod] = useState("Jour")
  const { range } = usePeriode()

  // const change = (value: string | null) => {
  //   if (!value) return
  //   setSelectPeriod(value)
  // }

  const FormatDataChart = () => {
    if (range) {
      if (range.to === undefined || range.from === undefined) return []
      const startDate = new Date(range.from)
      startDate.setHours(0, 0, 0, 0)

      const endDate = new Date(range.to)
      endDate.setHours(23, 59, 59, 999)

      if (startDate.getFullYear() === startDate.getFullYear()) {
        const dataYears = chartData.find(
          (item) => item.annee === startDate.getFullYear()
        )?.periode
        if (!dataYears) return []
        if (
          startDate.getDay() === endDate.getDay() &&
          startDate.getMonth() === endDate.getMonth()
        ) {
          return dataYears.filter((item) => {
            return new Date(item.date).getMonth() === endDate.getMonth()
          })
        }

        const data = dataYears.filter((item) => {
          return (
            new Date(item.date) >= startDate && new Date(item.date) <= endDate
          )
        })
        return data
      } else {
        const dataYearsFrom = chartData.find(
          (item) => item.annee === startDate.getFullYear()
        )?.periode
        const dataYearsTo = chartData.find(
          (item) => item.annee === startDate.getFullYear()
        )?.periode

        if (!dataYearsFrom || !dataYearsTo) return []

        const dataFrom = dataYearsFrom.filter((item) => {
          return new Date(item.date) >= startDate
        })
        const dataTo = dataYearsFrom.filter((item) => {
          return new Date(item.date) <= endDate
        })
        return [...dataFrom, ...dataTo]
      }
    }

    return []
  }

  const formatDate = (value: string) => {
    const date = new Date(value)
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
    })
  }

  return (
    <div className="col-span-3 row-span-2 h-full">
      <Card className="h-full bg-muted/40 pb-0">
        <CardHeader className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold tracking-tight">
              Marge Brute & Marge Net
            </CardTitle>
            <CardDescription className="text-xs">
              Suivi de la rentabilité et des marges de l’entreprise.
            </CardDescription>
          </div>
          <div className="flex flex-col items-center justify-between gap-2">
            {/* <Select
              items={periode.options}
              value={selectPeriod}
              onValueChange={change}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={periode.label} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>{periode.label}</SelectLabel>
                  {periode.options.map((p, index) => (
                    <SelectItem key={index} value={p.value}>
                      {p.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select> */}
            <Button variant="outline">
              <Download />
              Exporter
            </Button>
          </div>
        </CardHeader>
        <CardContent className="h-full overflow-hidden rounded-t-2xl bg-card px-1 ring-1 ring-foreground/5">
          <ChartContainer config={ChartConfigMarge} className="h-55 w-full">
            <BarChart accessibilityLayer data={FormatDataChart()} className="">
              <CartesianGrid vertical={false} horizontal={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => formatDate(value)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dashed" />}
              />
              <Bar
                dataKey="margeBrute"
                fill="var(--color-margeBrute)"
                radius={4}
              />
              <Bar dataKey="margeNet" fill="var(--color-margeNet)" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
