type ThemeColors = {
  "--background": string
  "--foreground": string
  "--card": string
  "--card-foreground": string
  "--popover": string
  "--popover-foreground": string
  "--primary": string
  "--primary-foreground": string
  "--secondary": string
  "--secondary-foreground": string
  "--muted": string
  "--muted-foreground": string
  "--accent": string
  "--accent-foreground": string
  "--destructive": string
  "--destructive-foreground": string
  "--border": string
  "--input": string
  "--ring": string

  "--chart-1": string
  "--chart-2": string
  "--chart-3": string
  "--chart-4": string
  "--chart-5": string
  "--chart-6": string
  "--chart-7": string
  "--chart-8": string
  "--chart-highlight": string
  "--chart-positive": string
  "--chart-negative": string

  "--sidebar": string
  "--sidebar-foreground": string
  "--sidebar-primary": string
  "--sidebar-primary-foreground": string
  "--sidebar-accent": string
  "--sidebar-accent-foreground": string
  "--sidebar-border": string
  "--sidebar-ring": string

  "--font-sans": string
  "--font-serif": string
  "--font-mono": string

  "--radius": string

  "--shadow-x": string
  "--shadow-y": string
  "--shadow-blur": string
  "--shadow-spread": string
  "--shadow-opacity": string
  "--shadow-color": string

  "--shadow-2xs": string
  "--shadow-xs": string
  "--shadow-sm": string
  "--shadow": string
  "--shadow-md": string
  "--shadow-lg": string
  "--shadow-xl": string
  "--shadow-2xl": string

  "--tracking-normal": string
  "--spacing": string
}

type Theme = "default" | "claude"
type Mode = "dark" | "light" | "system"
type ThemeMode = { theme: Theme; mode: Mode }
type SavedCustomTheme = { id: string; name: string; baseTheme: Theme; colorsByMode: { dark: ThemeColors; light: ThemeColors } }
type ThemeAndColor = {
  theme: string
  color: string[]
}
type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  defaultMode?: Mode
  storageKey?: string
  disableTransitionOnChange?: boolean
}

type ItemColorSelected = {
  name: string
  index?: (keyof ThemeColors)[]
}
type ThemeProviderState = {
  themeMode: ThemeMode
  setTheme: (nextTheme: Theme, nextMode: Mode) => void
}

type ThemeState = {
  SystemTheme: () => "dark" | "light"
  AllTheme: ThemeAndColor[]
  CustomThemes: SavedCustomTheme[]
  ActiveCustomThemeId: string | null
  ThemeColors: ThemeColors | null
  ThemeColorCustom: ThemeColors | null
  ItemColorSelected: ItemColorSelected | null
  Reset: () => void
  ResetThemeCustom: () => void
  UpdateThemeCustom: (theme: Theme, mode: Mode) => void
  UpdateTheme: (theme: Theme, mode: "dark" | "light") => void
  SaveCustomTheme: (name: string, baseTheme: Theme, mode: Mode) => void
  SetActiveCustomTheme: (id: string | null) => void
  setTheme: (index: keyof ThemeColors, color: string) => void
  resetChartColor: (index: ChartColorKey) => string
  resetChartPalette: () => void
  setColorSelected: (name: string) => void
}

type ChartColorKey =
  | "--chart-1"
  | "--chart-2"
  | "--chart-3"
  | "--chart-4"
  | "--chart-5"
  | "--chart-6"
  | "--chart-7"
  | "--chart-8"
  | "--chart-highlight"
  | "--chart-positive"
  | "--chart-negative"

type colorsType = {
  name: string
  index: keyof ThemeColors
}

type ListColorType = {
  trigger: string
  title: string
  color: { name: string; index: keyof ThemeColors }[]
}

export type {
  colorsType,
  ChartColorKey,
  ItemColorSelected,
  ListColorType,
  Mode,
  SavedCustomTheme,
  Theme,
  ThemeAndColor,
  ThemeColors,
  ThemeMode,
  ThemeProviderProps,
  ThemeProviderState,
  ThemeState,
}
