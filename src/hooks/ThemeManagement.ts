import { ThemeFont } from "@/lib/color-theme"
import type {
  Mode,
  Theme,
  ThemeColors,
  ThemeMode,
  ThemeState,
} from "@/lib/Type-data.type"
import { create } from "zustand"

const LoadThemeActuel = (Newtheme?: Theme, Newmode?: Mode) => {
  if (Newtheme && Newmode) {
    return ThemeFont[Newtheme][Newmode]
  }
  const Load: ThemeMode | null = JSON.parse(
    localStorage.getItem("Theme") as string
  )
  if (!Load) {
    return null
  }

  return ThemeFont[Load.theme][Load.mode]
}

function AllTheme() {
  const AllTheme = []
  for (const [key, value] of Object.entries(ThemeFont)) {
    AllTheme.push({ theme: key, color: value["base"] })
  }
  return AllTheme
}

export const useThemeManagementStore = create<ThemeState>((set) => ({
  AllTheme: AllTheme(),
  ThemeColors: LoadThemeActuel() ?? null,
  ItemColorSelected: null,
  UpdateTheme: (theme: Theme, mode: Mode) =>
    set(() => ({ ThemeColors: LoadThemeActuel(theme, mode) })),
  setTheme: (index: keyof ThemeColors, color: string) =>
    set((state) => ({
      ThemeColors: state.ThemeColors
        ? { ...state.ThemeColors, [index]: color }
        : null,
    })),
  setColorSelected: (name: string, index: (keyof ThemeColors)[]) =>
    set(() => ({ ItemColorSelected: { name, index } })),
}))
