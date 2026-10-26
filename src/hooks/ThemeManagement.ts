import { ThemeFont } from "@/lib/color-theme"
import { FONT_CATALOG } from "@/lib/font-catalog"
import type {
  Mode,
  ChartColorKey,
  SavedCustomTheme,
  Theme,
  ThemeColors,
  ThemeMode,
  ThemeState,
} from "@/lib/Type-data.type"
import { create } from "zustand"

const THEME_KEY = "Theme"
const COLOR_PREFIX = "aura-flow:custom-colors:"
const CUSTOM_THEMES_KEY = "aura-flow:custom-themes"
const ACTIVE_THEME_KEY = "aura-flow:active-custom-theme"
const THEME_EXISTANT = Object.keys(ThemeFont)
const CHART_COLOR_KEYS: ChartColorKey[] = [
  "--chart-1",
  "--chart-2",
  "--chart-3",
  "--chart-4",
  "--chart-5",
  "--chart-6",
  "--chart-7",
  "--chart-8",
  "--chart-highlight",
  "--chart-positive",
  "--chart-negative",
]
const COLOR_PATTERN =
  /^(#[0-9a-f]{3,8}|(?:oklch|hsl|hsla|rgb|rgba)\([0-9a-z.%\s,+/()-]+\))$/i
const SAFE_PATTERN = /^[0-9a-z.%#(),/ +*-]+$/i
const COLOR_PROPERTIES = new Set(
  Object.keys(ThemeFont.default.light).filter(
    (key) =>
      !key.startsWith("--font-") &&
      !key.startsWith("--shadow") &&
      key !== "--radius" &&
      key !== "--tracking-normal" &&
      key !== "--spacing"
  )
)
const SAFE_FONTS = new Set([
  ...Object.values(ThemeFont).flatMap((theme) => [
    theme.light["--font-sans"],
    theme.light["--font-serif"],
    theme.light["--font-mono"],
    theme.dark["--font-sans"],
    theme.dark["--font-serif"],
    theme.dark["--font-mono"],
  ]),
  ...Object.values(FONT_CATALOG)
    .flat()
    .map((font) => font.cssValue),
])
function getSystemTheme(): "dark" | "light" {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
}
function resolveMode(mode: Mode): "dark" | "light" {
  return mode === "system" ? getSystemTheme() : mode
}
function isTheme(value: unknown): value is Theme {
  if (typeof value !== "string") return false
  if (!THEME_EXISTANT.includes(value)) return false
  return THEME_EXISTANT.includes(value)
}
function readThemeMode(): ThemeMode | null {
  try {
    const raw = JSON.parse(localStorage.getItem(THEME_KEY) ?? "null") as {
      theme?: unknown
      mode?: unknown
    } | null
    if (
      raw &&
      isTheme(raw.theme) &&
      (raw.mode === "dark" || raw.mode === "light" || raw.mode === "system")
    )
      return { theme: raw.theme, mode: raw.mode }
  } catch {
    return { theme: "default", mode: "system" }
  }
  return null
}
function colorKey(theme: Theme, mode: "dark" | "light") {
  return COLOR_PREFIX + theme + ":" + mode
}
function isSafeValue(property: string, value: unknown): value is string {
  if (typeof value !== "string" || value.length > 180) return false
  const token = value.trim()
  if (/[;{}:<>\\]/.test(token)) return false
  if (property.startsWith("--font-")) return SAFE_FONTS.has(token)
  if (property.startsWith("--shadow") && property !== "--shadow-color")
    return SAFE_PATTERN.test(token)
  if (
    property === "--radius" ||
    property === "--tracking-normal" ||
    property === "--spacing"
  )
    return SAFE_PATTERN.test(token)
  return COLOR_PROPERTIES.has(property) && COLOR_PATTERN.test(token)
}
function sanitize(candidate: unknown, base: ThemeColors): ThemeColors {
  const safe = { ...base }
  if (typeof candidate !== "object" || candidate === null) return safe
  for (const [key, value] of Object.entries(candidate)) {
    if (key in base && isSafeValue(key, value))
      (safe as unknown as Record<string, string>)[key] = value.trim()
  }
  return safe
}
function readCustomColors(
  theme: Theme,
  mode: "dark" | "light"
): Partial<ThemeColors> {
  try {
    const raw = JSON.parse(
      localStorage.getItem(colorKey(theme, mode)) ?? "{}"
    ) as unknown
    const safe = sanitize(raw, ThemeFont[theme][mode]),
      base = ThemeFont[theme][mode]
    return Object.fromEntries(
      Object.entries(safe).filter(
        ([key, value]) => value !== base[key as keyof typeof base]
      )
    ) as Partial<ThemeColors>
  } catch {
    return {}
  }
}
function readCustomThemes(): SavedCustomTheme[] {
  try {
    const raw = JSON.parse(
      localStorage.getItem(CUSTOM_THEMES_KEY) ?? "[]"
    ) as unknown
    if (!Array.isArray(raw)) return []
    return raw.flatMap((item): SavedCustomTheme[] => {
      if (typeof item !== "object" || item === null) return []
      const value = item as Record<string, unknown>
      if (
        typeof value.id !== "string" ||
        typeof value.name !== "string" ||
        !value.name.trim() ||
        value.name.length > 40 ||
        !isTheme(value.baseTheme) ||
        typeof value.colorsByMode !== "object" ||
        value.colorsByMode === null
      )
        return []
      const colors = value.colorsByMode as Record<string, unknown>
      return [
        {
          id: value.id,
          name: value.name.trim(),
          baseTheme: value.baseTheme,
          colorsByMode: {
            light: sanitize(colors.light, ThemeFont[value.baseTheme].light),
            dark: sanitize(colors.dark, ThemeFont[value.baseTheme].dark),
          },
        },
      ]
    })
  } catch {
    return []
  }
}
function readActiveId(themes: SavedCustomTheme[]) {
  const id = localStorage.getItem(ACTIVE_THEME_KEY)
  return id && themes.some((item) => item.id === id) ? id : null
}
function resolveColors(
  theme: Theme,
  mode: "dark" | "light",
  state?: Pick<ThemeState, "CustomThemes" | "ActiveCustomThemeId">
): ThemeColors {
  const active = state?.CustomThemes.find(
    (item) => item.id === state.ActiveCustomThemeId
  )
  return active
    ? { ...active.colorsByMode[mode] }
    : { ...ThemeFont[theme][mode], ...readCustomColors(theme, mode) }
}
const initialThemes = readCustomThemes()
export const useThemeManagementStore = create<ThemeState>((set, get) => ({
  SystemTheme: getSystemTheme,
  AllTheme: Object.entries(ThemeFont).map(([theme, value]) => ({
    theme,
    color: value.base,
  })),
  CustomThemes: initialThemes,
  ActiveCustomThemeId: readActiveId(initialThemes),
  ThemeColors: null,
  ThemeColorCustom: null,
  ItemColorSelected: null,
  UpdateThemeCustom: (theme, mode) =>
    set((state) => ({
      ThemeColorCustom: resolveColors(theme, resolveMode(mode), state),
    })),
  UpdateTheme: (theme, mode) =>
    set((state) => ({ ThemeColors: resolveColors(theme, mode, state) })),
  Reset: () => set({ ThemeColorCustom: null, ItemColorSelected: null }),
  ResetThemeCustom: () => {
    const stored = readThemeMode(),
      theme = stored?.theme ?? "default",
      mode = resolveMode(stored?.mode ?? "system")
    localStorage.removeItem(colorKey(theme, mode))
    localStorage.removeItem(ACTIVE_THEME_KEY)
    set({
      ActiveCustomThemeId: null,
      ThemeColors: { ...ThemeFont[theme][mode] },
      ThemeColorCustom: { ...ThemeFont[theme][mode] },
      ItemColorSelected: null,
    })
  },
  SaveCustomTheme: (name, baseTheme, mode) =>
    set((state) => {
      const clean = name.trim().slice(0, 40)
      if (!clean || !state.ThemeColorCustom) return {}
      const colorsByMode = {
        light: resolveColors(baseTheme, "light", state),
        dark: resolveColors(baseTheme, "dark", state),
      }
      const selected = resolveMode(mode)
      colorsByMode[selected] = sanitize(
        state.ThemeColorCustom,
        ThemeFont[baseTheme][selected]
      )
      const custom: SavedCustomTheme = {
        id: globalThis.crypto?.randomUUID?.() ?? String(Date.now()),
        name: clean,
        baseTheme,
        colorsByMode,
      }
      const CustomThemes = [...state.CustomThemes, custom]
      localStorage.setItem(CUSTOM_THEMES_KEY, JSON.stringify(CustomThemes))
      localStorage.setItem(ACTIVE_THEME_KEY, custom.id)
      return {
        CustomThemes,
        ActiveCustomThemeId: custom.id,
        ThemeColors: { ...colorsByMode[selected] },
        ThemeColorCustom: { ...colorsByMode[selected] },
        ItemColorSelected: null,
      }
    }),

  SetActiveCustomTheme: (id) => {
    if (id === null) localStorage.removeItem(ACTIVE_THEME_KEY)
    else {
      if (!get().CustomThemes.some((item) => item.id === id)) return
      localStorage.setItem(ACTIVE_THEME_KEY, id)
    }
    set({ ActiveCustomThemeId: id })
  },
  setTheme: (index, color) =>
    set((state) =>
      state.ThemeColorCustom
        ? { ThemeColorCustom: { ...state.ThemeColorCustom, [index]: color } }
        : {}
    ),
  resetChartColor: (index) => {
    const stored = readThemeMode(),
      theme = stored?.theme ?? "default",
      mode = resolveMode(stored?.mode ?? "system")
    set((state) =>
      state.ThemeColorCustom
        ? {
            ThemeColorCustom: {
              ...state.ThemeColorCustom,
              [index]: ThemeFont[theme][mode][index],
            },
          }
        : {}
    )
    return ThemeFont[theme][mode][index]
  },
  resetChartPalette: () => {
    const stored = readThemeMode(),
      theme = stored?.theme ?? "default",
      mode = resolveMode(stored?.mode ?? "system")
    set((state) => {
      if (!state.ThemeColorCustom) return {}
      const ThemeColorCustom = { ...state.ThemeColorCustom }
      for (const key of CHART_COLOR_KEYS)
        ThemeColorCustom[key] = ThemeFont[theme][mode][key]
      return { ThemeColorCustom }
    })
  },
  setColorSelected: (name) => set({ ItemColorSelected: { name } }),
}))
