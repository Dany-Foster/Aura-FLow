import { useThemeManagementStore } from "@/hooks/ThemeManagement"
import type { ItemColorSelected } from "@/lib/Type-data.type"
import { Palette, Plus } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import CustomColorPrimary, {
  CustomColorBase,
  CustomColorSecondary,
} from "./custom-color"
import EmptyCustom from "./Presence/Empty"

export default function PreviewTheme() {
  const ItemColorSelected: ItemColorSelected | null = useThemeManagementStore(
    (state) => state.ItemColorSelected
  )

  const renderCustomColorComponent = () => {
    switch (ItemColorSelected?.name) {
      case "primary":
        return <CustomColorPrimary />
      case "secondary":
        return <CustomColorSecondary />
      case "background":
        return <CustomColorBase />
      default:
        return (
          <EmptyCustom
            text="Choisissez un élément dans le panneau de gauche pour
                    personnaliser sa couleur."
            icon={Palette}
            className="flex h-full w-full items-center justify-center"
          />
        )
    }
  }

  return (
    <div className="flex h-111.5 w-1/2 flex-col items-end gap-2">
      <div className="flex items-center gap-4">
        <Button variant="outline" className="w-auto">
          <Plus /> Nouveau thème
        </Button>
      </div>
      <Card className="h-full w-full">
        <CardContent className="h-full">
          {renderCustomColorComponent()}
        </CardContent>
      </Card>
    </div>
  )
}
