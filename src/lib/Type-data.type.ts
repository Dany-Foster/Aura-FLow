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
type Mode = "dark" | "light"
type ThemeMode = { theme: Theme; mode: Mode }
type ThemeAndColor = {
  theme: string
  color: string[]
}

type ColorTypeUnique = { index: keyof ThemeColors; color: string }

type SelectedColorType = {
  name: string
  colors: ColorTypeUnique[]
}

type ThemeState = {
  AllTheme: ThemeAndColor[]
  SelectedColorsCustom: SelectedColorType | null
  ThemeColors: ThemeColors | null
  UpdateTheme: (theme: Theme, mode: Mode) => void
  SetSelectedColorCustom: (name: string, color: ColorTypeUnique[]) => void
}

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
  ColorTypeUnique,
  ListColorType,
  Mode,
  SelectedColorType,
  Theme,
  ThemeAndColor,
  ThemeColors,
  ThemeMode,
  ThemeState,
}
