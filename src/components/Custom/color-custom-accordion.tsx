import { useThemeManagementStore } from "@/hooks/ThemeManagement"
import type { colorsType } from "@/lib/Type-data.type"
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"
import { PalletteColorRow } from "./pallette-color-row"

export default function ColorCustom({
  Trigger,
  Titre,
  colors,
}: {
  Trigger: string
  Titre: string
  colors: colorsType[]
}) {
  const colorActuel = useThemeManagementStore((state) => state.ThemeColorCustom)

  if (!colorActuel) return null

  return (
    <AccordionItem value={Trigger} className="border-none">
      <div>
        <AccordionTrigger className="items-center gap-2 font-medium">
          {Titre}
        </AccordionTrigger>
      </div>
      <AccordionContent className="mt-1 flex flex-col justify-between gap-2">
        {colors.map((color, index) => (
          <PalletteColorRow
            key={index}
            colorKey={color.index}
            label={color.name}
            color={colorActuel[color.index]}
          />
        ))}
      </AccordionContent>
    </AccordionItem>
  )
}
