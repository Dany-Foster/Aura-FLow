import type { ChartConfig } from "@/components/ui/chart"

const ChartConfigMarge = {
  margeBrute: {
    color: "var(--chart-1)",
    label: "Marge Brute",
  },
  margeNet: {
    color: "var(--chart-2)",
    label: "Marge Net",
  },
} satisfies ChartConfig

const periode = {
  label: "Période",
  options: [
    { label: "Jour", value: "Jour" },
    { label: "Semaine", value: "Semaine" },
    { label: "Mois", value: "Mois" },
  ],
}

export { ChartConfigMarge, periode }
