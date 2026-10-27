import { useThemeManagementStore } from "@/hooks/ThemeManagement"
import type { Theme } from "@/lib/Type-data.type"
import { useTheme } from "../theme-provider"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./select"
import { ThemeFont } from "@/lib/color-theme"
export default function SelectTheme() {
  const { themeMode, setTheme } = useTheme()
  const builtIns = useThemeManagementStore((state) => state.AllTheme)
  const custom = useThemeManagementStore((state) => state.CustomThemes)
  const active = useThemeManagementStore((state) => state.ActiveCustomThemeId)
  const setActive = useThemeManagementStore(
    (state) => state.SetActiveCustomTheme
  )
  const system = useThemeManagementStore((state) => state.SystemTheme)
  const mode = themeMode.mode === "system" ? system() : themeMode.mode
  const value = active ?? themeMode.theme
  const items = [
    ...builtIns.map((item) => ({ label: item.theme, value: item.theme })),
    ...custom.map((item) => ({ label: item.name, value: item.id })),
  ]
  const change = (next: string | null) => {
    if (!next) return
    const saved = custom.find((item) => item.id === next)
    if (saved) {
      setTheme(saved.baseTheme, themeMode.mode)
      setActive(saved.id)
    } else if (ThemeFont[next as Theme]) {
      setActive(null)
      setTheme(next as Theme, themeMode.mode)
    }
  }
  return (
    <Select items={items} value={value} onValueChange={change}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Sélectionner un thème" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Thèmes intégrés</SelectLabel>
          {builtIns.map((item) => (
            <SelectItem key={item.theme} value={item.theme}>
              <div className="flex flex-1 items-center gap-2">
                <span
                  className="inline-block size-2 rounded-full"
                  style={{
                    backgroundColor: item.color[mode === "light" ? 0 : 1],
                  }}
                />
                <span>{item.theme}</span>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
        {custom.length > 0 && (
          <SelectGroup>
            <SelectLabel>Mes thèmes</SelectLabel>
            {custom.map((item) => (
              <SelectItem key={item.id} value={item.id}>
                <div className="flex flex-1 items-center gap-2">
                  <span
                    className="inline-block size-2 rounded-full"
                    style={{
                      backgroundColor: item.colorsByMode[mode]["--primary"],
                    }}
                  />
                  <span>{item.name}</span>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        )}
      </SelectContent>
    </Select>
  )
}
