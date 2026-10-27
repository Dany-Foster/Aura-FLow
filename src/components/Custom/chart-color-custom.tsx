import { useThemeManagementStore } from "@/hooks/ThemeManagement"
import type { ChartColorKey, ThemeColors } from "@/lib/Type-data.type"
import { CHART_PREVIEW_DATA, type PreviewChart } from "@/lib/chart-preview-data"
import { formatHex, parse } from "culori"
import { RotateCcw } from "lucide-react"
import { useRef, useState } from "react"
import { Button } from "../ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Input } from "../ui/input"
import { ScrollArea } from "../ui/scroll-area"

const SERIES_KEYS: ChartColorKey[] = [
  "--chart-1",
  "--chart-2",
  "--chart-3",
  "--chart-4",
  "--chart-5",
  "--chart-6",
  "--chart-7",
  "--chart-8",
]

const COLOR_SETTINGS: { key: ChartColorKey; label: string }[] = [
  ...SERIES_KEYS.map((key, index) => ({ key, label: `Série ${index + 1}` })),
  { key: "--chart-highlight", label: "Mise en évidence" },
  { key: "--chart-positive", label: "Valeur positive" },
  { key: "--chart-negative", label: "Valeur négative" },
]

function toHex(color: string) {
  try {
    const parsed = parse(color)
    return parsed ? formatHex(parsed).toUpperCase() : "#000000"
  } catch {
    return "#000000"
  }
}

function ChartColorRow({
  colorKey,
  label,
  color,
}: {
  colorKey: ChartColorKey
  label: string
  color: string
}) {
  const [hex, setHex] = useState(() => toHex(color))
  const setThemeColor = useThemeManagementStore((state) => state.setTheme)
  const resetColor = useThemeManagementStore((state) => state.resetChartColor)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const applyHex = (value: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    if (!value) {
      return
    }

    timeoutRef.current = setTimeout(() => {
      // La couleur est appliquée uniquement
      // après que le sélecteur est resté immobile
      setHex(value.toUpperCase())
      if (/^#(?:[\da-f]{3}|[\da-f]{4}|[\da-f]{6}|[\da-f]{8})$/i.test(value))
        setThemeColor(colorKey, value)
    }, 300)
  }

  return (
    <div className="flex items-center gap-2.5">
      <label
        className="relative size-8 shrink-0 overflow-hidden rounded-md border shadow-sm"
        style={{ backgroundColor: color }}
        title={`Choisir la couleur : ${label}`}
      >
        <Input
          aria-label={`Choisir la couleur ${label}`}
          className="absolute inset-0 size-full cursor-pointer opacity-0"
          type="color"
          value={toHex(color)}
          onChange={(event) => applyHex(event.target.value)}
        />
      </label>
      <label
        className="min-w-0 flex-1 text-sm font-medium"
        htmlFor={`hex-${colorKey}`}
      >
        {label}
      </label>
      <Input
        id={`hex-${colorKey}`}
        aria-label={`Code HEX pour ${label}`}
        autoCapitalize="characters"
        className="h-8 w-27 font-mono text-xs uppercase"
        maxLength={9}
        value={hex}
        onChange={(event) => applyHex(event.target.value)}
      />
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="size-8 shrink-0"
        aria-label={`Réinitialiser ${label}`}
        title={`Réinitialiser ${label}`}
        onClick={() => setHex(toHex(resetColor(colorKey)))}
      >
        <RotateCcw className="size-3.5" />
      </Button>
    </div>
  )
}

export default function ChartColorCustom() {
  const colors = useThemeManagementStore((state) => state.ThemeColorCustom)

  if (!colors) return null

  return (
    <div className="grid min-w-0 gap-4 xl:grid-cols-[minmax(260px,0.8fr)_minmax(0,2fr)]">
      <div className="h-101 scroll-fade scrollbar-none overflow-y-auto rounded-md pr-4">
        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Palette des séries</CardTitle>
              <p className="text-sm text-muted-foreground">
                Les huit couleurs sont partagées entre les types de graphiques
                et servent de palette par défaut pour les nouvelles séries.
              </p>
            </CardHeader>
            <CardContent className="space-y-3">
              {COLOR_SETTINGS.slice(0, 8).map(({ key, label }) => (
                <ChartColorRow
                  key={`${key}-${colors[key]}`}
                  colorKey={key}
                  label={label}
                  color={colors[key]}
                />
              ))}
            </CardContent>
          </Card>

          <Card className="mt-2">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Couleurs sémantiques</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {COLOR_SETTINGS.slice(8).map(({ key, label }) => (
                <ChartColorRow
                  key={`${key}-${colors[key]}`}
                  colorKey={key}
                  label={label}
                  color={colors[key]}
                />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      <section className="hidden min-w-0 space-y-3 lg:block">
        <div className="overflow-hidden">
          <div className="h-max space-x-4">
            <h2 className="text-base font-semibold">Aperçu des graphiques</h2>
            <p className="text-sm text-muted-foreground">
              Modifiez une couleur pour voir instantanément son effet sur les
              visualisations.
            </p>
          </div>
          <ScrollArea className="mt-2 h-88 scroll-fade rounded-md">
            <div className="mt-2 grid max-h-[72vh] min-w-0 grid-cols-1 gap-3 pr-4 pb-2 pl-0 md:grid-cols-2 2xl:grid-cols-3">
              {CHART_PREVIEW_DATA.map((chart) => (
                <PreviewChartCard
                  key={chart.id}
                  chart={chart}
                  colors={colors}
                />
              ))}
            </div>
          </ScrollArea>
        </div>
      </section>
    </div>
  )
}

const PALETTE_KEYS: ChartColorKey[] = SERIES_KEYS
const SEMANTIC_KEYS: ChartColorKey[] = [
  "--chart-highlight",
  "--chart-positive",
  "--chart-negative",
]

function colorFor(index: number, colors: ThemeColors) {
  const key = index < 8 ? PALETTE_KEYS[index] : SEMANTIC_KEYS[index - 8]
  return colors[key] ?? colors["--chart-1"]
}

function PreviewChartCard({
  chart,
  colors,
}: {
  chart: PreviewChart
  colors: ThemeColors
}) {
  const pie = chart.kind === "pie" || chart.kind === "donut"
  const legend = pie
    ? chart.labels.map((name, index) => ({
        name,
        color: colorFor(index, colors),
      }))
    : chart.series.map((item) => ({
        name: item.name,
        color: colorFor(item.colorIndex, colors),
      }))

  return (
    <Card className="min-w-0 gap-2 py-3">
      <CardHeader className="px-3 pb-0">
        <CardTitle className="text-sm">{chart.title}</CardTitle>
        <p className="line-clamp-1 text-xs text-muted-foreground">
          {chart.description}
        </p>
      </CardHeader>
      <CardContent className="min-w-0 px-2 pb-1">
        <ChartSvg chart={chart} colors={colors} />
        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 px-1 text-[10px] text-muted-foreground">
          {legend.map((item) => (
            <span key={item.name} className="inline-flex items-center gap-1">
              <span
                className="size-2 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              {item.name}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

const WIDTH = 360
const HEIGHT = 174
const PLOT = { x: 38, y: 12, width: 308, height: 122 }

function ChartSvg({
  chart,
  colors,
}: {
  chart: PreviewChart
  colors: ThemeColors
}) {
  const isPie = chart.kind === "pie" || chart.kind === "donut"
  return (
    <svg
      role="img"
      aria-label={`${chart.title} : ${chart.description}`}
      className="h-auto w-full overflow-visible"
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
    >
      <title>{chart.title}</title>
      {isPie ? renderPie(chart, colors) : renderAxes(chart, colors)}
    </svg>
  )
}

function renderAxes(chart: PreviewChart, colors: ThemeColors) {
  const values = chart.series.flatMap((series) => series.values)
  const stacked = chart.kind === "stacked" || chart.kind === "stacked-area"
  const maxValue = stacked
    ? Math.max(
        10,
        ...chart.labels.map((_, index) =>
          chart.series.reduce(
            (total, series) => total + (series.values[index] ?? 0),
            0
          )
        )
      )
    : Math.max(10, ...values)
  const max = maxValue * 1.12
  const xAt = (index: number, count = chart.labels.length) =>
    PLOT.x + (count <= 1 ? 0 : (index / (count - 1)) * PLOT.width)
  const yAt = (value: number) =>
    PLOT.y + PLOT.height - (value / max) * PLOT.height
  const grid = [0, 0.5, 1].map((ratio) => PLOT.y + ratio * PLOT.height)

  if (chart.kind === "stock" || chart.kind === "targets")
    return renderHorizontalBars(chart, colors, max)

  return (
    <>
      {grid.map((y, index) => (
        <g key={y}>
          <line
            x1={PLOT.x}
            x2={PLOT.x + PLOT.width}
            y1={y}
            y2={y}
            stroke="currentColor"
            strokeOpacity="0.12"
          />
          <text
            x={PLOT.x - 6}
            y={y + 3}
            textAnchor="end"
            className="fill-muted-foreground"
            fontSize="8"
          >
            {Math.round((max * (2 - index)) / 2)}
          </text>
        </g>
      ))}
      {chart.kind === "line" ||
      chart.kind === "area" ||
      chart.kind === "stacked-area"
        ? renderLines(chart, colors, xAt, yAt)
        : chart.kind === "combo"
          ? renderCombo(chart, colors, xAt, yAt)
          : renderBars(chart, colors, yAt)}
      {chart.labels.map((label, index) => (
        <text
          key={`${label}-${index}`}
          x={xAt(index)}
          y={PLOT.y + PLOT.height + 16}
          textAnchor="middle"
          className="fill-muted-foreground"
          fontSize="8"
        >
          {label}
        </text>
      ))}
    </>
  )
}

function renderLines(
  chart: PreviewChart,
  colors: ThemeColors,
  xAt: (index: number) => number,
  yAt: (value: number) => number
) {
  const stacked = chart.kind === "stacked-area"
  const lower = chart.labels.map(() => 0)
  return chart.series.map((series) => {
    const color = colorFor(series.colorIndex, colors)
    const lowerBoundary = stacked ? [...lower] : []
    const values = stacked
      ? series.values.map((value, index) => (lower[index] += value))
      : series.values
    const points = values
      .map((value, index) => `${xAt(index)},${yAt(value)}`)
      .join(" ")
    const area = stacked
      ? [
          ...values.map((value, index) => `${xAt(index)},${yAt(value)}`),
          ...lowerBoundary
            .map((value, index) => `${xAt(index)},${yAt(value)}`)
            .reverse(),
        ].join(" ")
      : `${PLOT.x},${PLOT.y + PLOT.height} ${points} ${PLOT.x + PLOT.width},${PLOT.y + PLOT.height}`
    const mark = (
      <g key={series.name}>
        {chart.kind !== "line" && (
          <polygon
            points={area}
            fill={color}
            fillOpacity={stacked ? 0.74 : 0.14}
          />
        )}
        <polyline
          points={points}
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {!stacked &&
          series.values.map((value, index) => (
            <circle
              key={index}
              cx={xAt(index)}
              cy={yAt(value)}
              r="3"
              fill={color}
              stroke="var(--card)"
              strokeWidth="1.5"
            >
              <title>{`${series.name} · ${chart.labels[index]} : ${value} k€`}</title>
            </circle>
          ))}
      </g>
    )
    return mark
  })
}

function renderBars(
  chart: PreviewChart,
  colors: ThemeColors,
  yAt: (value: number) => number
) {
  const count = chart.labels.length
  const step = PLOT.width / count
  const barWidth = Math.min(25, (step * 0.66) / chart.series.length)
  return chart.labels.map((label, index) => {
    let stackBase = 0
    const groupWidth = barWidth * chart.series.length
    return (
      <g key={`${label}-${index}`}>
        {chart.series.map((series, seriesIndex) => {
          const value = series.values[index] ?? 0
          const stacked = chart.kind === "stacked"
          const barValue = stacked ? stackBase + value : value
          const barTop = yAt(barValue)
          const barBottom = stacked ? yAt(stackBase) : PLOT.y + PLOT.height
          const x =
            chart.kind === "bar"
              ? PLOT.x + step * index + (step - barWidth) / 2
              : PLOT.x +
                step * index +
                (step - groupWidth) / 2 +
                seriesIndex * barWidth
          if (stacked) stackBase += value
          const color = colorFor(series.colorIndex, colors)
          return (
            <rect
              key={series.name}
              x={x}
              y={barTop}
              width={barWidth - 2}
              height={Math.max(1, barBottom - barTop)}
              rx="3"
              fill={color}
            >
              <title>{`${series.name} · ${label} : ${value} k€`}</title>
            </rect>
          )
        })}
      </g>
    )
  })
}

function renderCombo(
  chart: PreviewChart,
  colors: ThemeColors,
  xAt: (index: number) => number,
  yAt: (value: number) => number
) {
  const bars = {
    ...chart,
    kind: "bar" as const,
    series: chart.series.slice(0, 1),
  }
  const line = chart.series[1]
  const points = line.values
    .map((value, index) => `${xAt(index)},${yAt(value)}`)
    .join(" ")
  return (
    <>
      {renderBars(bars, colors, yAt)}
      <polyline
        points={points}
        fill="none"
        stroke={colorFor(line.colorIndex, colors)}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {line.values.map((value, index) => (
        <circle
          key={index}
          cx={xAt(index)}
          cy={yAt(value)}
          r="3"
          fill={colorFor(line.colorIndex, colors)}
        >
          <title>{`${line.name} · ${chart.labels[index]} : ${value}%`}</title>
        </circle>
      ))}
    </>
  )
}

function renderHorizontalBars(
  chart: PreviewChart,
  colors: ThemeColors,
  max: number
) {
  const rows = chart.labels.length
  const rowHeight = PLOT.height / rows
  const isTargets = chart.kind === "targets"
  const left = isTargets ? 50 : 112
  const width = PLOT.width - (left - PLOT.x)
  const barHeight = isTargets ? 9 : 15
  return (
    <>
      {[0, 0.5, 1].map((ratio) => (
        <g key={ratio}>
          <line
            x1={left + width * ratio}
            x2={left + width * ratio}
            y1={PLOT.y}
            y2={PLOT.y + PLOT.height}
            stroke="currentColor"
            strokeOpacity="0.1"
          />
          <text
            x={left + width * ratio}
            y={PLOT.y + PLOT.height + 13}
            textAnchor="middle"
            className="fill-muted-foreground"
            fontSize="8"
          >
            {Math.round(max * ratio)}
          </text>
        </g>
      ))}
      {chart.labels.map((label, row) => (
        <g key={label}>
          <text
            x={left - 5}
            y={PLOT.y + rowHeight * (row + 0.55)}
            textAnchor="end"
            className="fill-muted-foreground"
            fontSize="8"
          >
            {label.length > 16 ? `${label.slice(0, 14)}…` : label}
          </text>
          {chart.series.map((series, seriesIndex) => {
            const value = series.values[row] ?? 0
            const y =
              PLOT.y +
              rowHeight * row +
              (isTargets ? 4 + seriesIndex * 12 : (rowHeight - barHeight) / 2)
            const barWidth = Math.max(1, (value / max) * width)
            const color = colorFor(series.colorIndex, colors)
            return (
              <rect
                key={series.name}
                x={left}
                y={y}
                width={barWidth}
                height={barHeight}
                rx="4"
                fill={color}
              >
                <title>{`${series.name} · ${label} : ${value}${chart.kind === "stock" ? " unités" : " k€"}`}</title>
              </rect>
            )
          })}
        </g>
      ))}
    </>
  )
}

function renderPie(chart: PreviewChart, colors: ThemeColors) {
  const values = chart.series[0].values
  const total = values.reduce((sum, value) => sum + value, 0)
  const centerX = 180
  const centerY = 83
  const radius = 62
  let start = -Math.PI / 2
  return (
    <g>
      {values.map((value, index) => {
        const end = start + (value / total) * Math.PI * 2
        const path = arcPath(centerX, centerY, radius, start, end)
        const color = colorFor(index, colors)
        const slice = (
          <path
            key={chart.labels[index]}
            d={path}
            fill={color}
            stroke="var(--card)"
            strokeWidth="2"
          >
            <title>{`${chart.labels[index]} : ${value}%`}</title>
          </path>
        )
        start = end
        return slice
      })}
      {chart.kind === "donut" && (
        <g>
          <circle cx={centerX} cy={centerY} r="37" fill="var(--card)" />
          <text
            x={centerX}
            y={centerY - 2}
            textAnchor="middle"
            className="fill-foreground"
            fontSize="17"
            fontWeight="600"
          >
            {total}%
          </text>
          <text
            x={centerX}
            y={centerY + 13}
            textAnchor="middle"
            className="fill-muted-foreground"
            fontSize="8"
          >
            total ventes
          </text>
        </g>
      )}
    </g>
  )
}

function arcPath(
  cx: number,
  cy: number,
  radius: number,
  start: number,
  end: number
) {
  const x1 = cx + radius * Math.cos(start)
  const y1 = cy + radius * Math.sin(start)
  const x2 = cx + radius * Math.cos(end)
  const y2 = cy + radius * Math.sin(end)
  const largeArc = end - start > Math.PI ? 1 : 0
  return `M ${cx} ${cy} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`
}
