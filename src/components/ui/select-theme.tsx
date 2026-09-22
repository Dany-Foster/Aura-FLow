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

  const onValueChange = (value: "default" | "claude") => {
    setTheme(value, themeMode.mode)
  }
  const items = [
    { label: "Select votre couleur", value: null },
    { label: "Default", value: "default" },
    { label: "Claude", value: "Claude" },
  ]

  const ColorListe = [
    { label: "Default", value: "default", color: "#6366f1" },
    { label: "Claude", value: "claude", color: "#c96442" },
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
          {ColorListe.map((color) => (
            <SelectItem value={color.value}>
              <div key={color.value} className="flex flex-1 items-center gap-2">
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ backgroundColor: color.color }}
                />
                <span>{color.label}</span>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
