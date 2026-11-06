import { clsx, type ClassValue } from "clsx"
import { formatHex, parse } from "culori"
import { twMerge } from "tailwind-merge"
import type { ChartColorKey, Mode, ThemeColors } from "./Type-data.type"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/* fonction de gestion des couleurs du thème */

export const MODE_THEME_VALUES: Mode[] = ["dark", "light", "system"]

export function isMode(value: string | null): value is Mode {
  if (value === null) {
    return false
  }

  return MODE_THEME_VALUES.includes(value as Mode)
}

export function disableTransitionsTemporarily() {
  const style = document.createElement("style")
  style.appendChild(
    document.createTextNode(
      "*,*::before,*::after{-webkit-transition:none!important;transition:none!important}"
    )
  )
  document.head.appendChild(style)

  return () => {
    window.getComputedStyle(document.body)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        style.remove()
      })
    })
  }
}

/* fonction de conversion en hexadécimal des couleurs okhsv et rgb, ainsi que les configurations chart color */
export function toHex(color: string) {
  try {
    const parsed = parse(color)
    return parsed ? formatHex(parsed).toUpperCase() : "#000000"
  } catch {
    return "#000000"
  }
}

export const SERIES_KEYS: Partial<ChartColorKey>[] = [
  "--chart-1",
  "--chart-2",
  "--chart-3",
  "--chart-4",
  "--chart-5",
  "--chart-6",
  "--chart-7",
  "--chart-8",
]

export const COLOR_SETTINGS: { key: ChartColorKey; label: string }[] = [
  ...SERIES_KEYS.map((key, index) => ({ key, label: `Série ${index + 1}` })),
  { key: "--chart-highlight", label: "Mise en évidence" },
  { key: "--chart-positive", label: "Valeur positive" },
  { key: "--chart-negative", label: "Valeur négative" },
]

export const SEMANTIC_KEYS: Partial<ChartColorKey>[] = [
  "--chart-highlight",
  "--chart-positive",
  "--chart-negative",
]

export function colorFor(index: number, colors: ThemeColors): string {
  const key = index < 8 ? SERIES_KEYS[index] : SEMANTIC_KEYS[index - 8]
  return colors[key] ?? colors["--chart-1"]
}

export function capitalize(word: string): string {
  if (!word) return ""
  return word[0].toUpperCase() + word.slice(1)
}
