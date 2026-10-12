import { ThemeFont } from "@/lib/color-theme"
import type {
  Mode,
  Theme,
  ThemeColors,
  ThemeMode,
  ThemeState,
} from "@/lib/Type-data.type"
import { create } from "zustand"

const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)"
function getSystemTheme(): "dark" | "light" {
  if (window.matchMedia(COLOR_SCHEME_QUERY).matches) {
    return "dark"
  }

  return "light"
}

const LoadThemeActuel = (Newtheme?: Theme, Newmode?: Mode) => {
  if (Newtheme && Newmode) {
    return ThemeFont[Newtheme][
      Newmode === "system" ? getSystemTheme() : Newmode
    ]
  }

  const Load: ThemeMode | null = JSON.parse(
    localStorage.getItem("Theme") as string
  )

  if (!Load) {
    return null
  }
  const ResolvedTheme = Load.mode === "system" ? getSystemTheme() : Load.mode

  return ThemeFont[Load.theme][ResolvedTheme]
}

function AllTheme() {
  const AllTheme = []
  for (const [key, value] of Object.entries(ThemeFont)) {
    AllTheme.push({ theme: key, color: value["base"] })
  }
  return AllTheme
}

export const useThemeManagementStore = create<ThemeState>((set) => ({
  SystemTheme: getSystemTheme,
  AllTheme: AllTheme(),
  ThemeColors: null,
  ThemeColorCustom: null,
  ItemColorSelected: null,
  UpdateThemeCustom: () =>
    set(() => ({
      ThemeColorCustom: LoadThemeActuel(),
    })),
  UpdateTheme: (theme: Theme, mode: Mode) =>
    set(() => ({
      ThemeColors: LoadThemeActuel(theme, mode),
    })),
  Reset: () => set(() => ({ ThemeColorCustom: null, ItemColorSelected: null })),
  setTheme: (index: keyof ThemeColors, color: string) =>
    set((state) => ({
      ThemeColorCustom: state.ThemeColorCustom
        ? { ...state.ThemeColorCustom, [index]: color }
        : null,
    })),

  setColorSelected: (name: string, index: (keyof ThemeColors)[]) =>
    set(() => ({ ItemColorSelected: { name, index } })),
}))
