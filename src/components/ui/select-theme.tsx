import { useThemeManagementStore } from "@/hooks/ThemeManagement"
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

export default function SelectTheme() {
  const { themeMode, setTheme } = useTheme()
  const All = useThemeManagementStore((state) => state.AllTheme)

  const onValueChange = (value: "default" | "claude") => {
    setTheme(value, themeMode.mode)
  }
  const items = [
    { label: "Select votre couleur", value: null },
    { label: "Default", value: "default" },
    { label: "Claude", value: "Claude" },
  ]

  return (
    <Select
      items={items}
      defaultValue={themeMode.theme}
      onValueChange={onValueChange}
    >
      <SelectTrigger className="w-full">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Couleur de fond</SelectLabel>
          {All.map((color) => (
            <SelectItem value={color.theme}>
              <div key={color.theme} className="flex flex-1 items-center gap-2">
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{
                    backgroundColor: `${themeMode.mode === "light" ? color.color[0] : color.color[1]}`,
                  }}
                />
                <span>{color.theme}</span>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
