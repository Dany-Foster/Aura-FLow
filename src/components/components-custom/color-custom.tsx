import { useThemeManagementStore } from "@/hooks/ThemeManagement"
import type { colorsType, ThemeColors } from "@/lib/Type-data.type"
import { useState } from "react"
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"
import { Input } from "../ui/input"

export default function ColorCustom({
  Trigger,
  Titre,
  colors,
}: {
  Trigger: string
  Titre: string
  colors: colorsType[]
}) {
  const colorActuel = useThemeManagementStore((state) => state.ThemeColors)
  const setColorInTheme = useThemeManagementStore((state) => state.setTheme)
  const [stateColor, setStateColor] = useState<string | null>(null)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: keyof ThemeColors
  ) => {
    const { value } = e.target
    setStateColor(value)
    setColorInTheme(index, value)
  }
  return (
    <AccordionItem value={Trigger} className="border-none">
      <div>
        <AccordionTrigger className="items-center gap-2 font-medium">
          {Titre}
        </AccordionTrigger>
      </div>
      <AccordionContent className="mt-1 flex flex-col gap-2">
        {colors.map((color, index) => (
          <div
            key={index}
            className="justify-arround flex w-full items-center gap-4"
          >
            <div
              style={{
                backgroundColor: colorActuel ? colorActuel[color.index] : "",
              }}
              className="relative flex size-7 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-md border shadow-sm"
            >
              <Input
                type="color"
                name=""
                value={stateColor ? stateColor : ""}
                onChange={(e) => handleChange(e, color.index)}
                className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
              />
            </div>
            <span className="min-w-0 shrink-0 text-[13px] font-semibold text-foreground">
              {color.name}
            </span>
            <div className="flex-1">
              <Input
                type="text"
                className="w-full"
                disabled
                value={colorActuel ? colorActuel[color.index] : ""}
                onChange={(e) => handleChange(e, color.index)}
              />
            </div>
          </div>
        ))}
      </AccordionContent>
    </AccordionItem>
  )
}
