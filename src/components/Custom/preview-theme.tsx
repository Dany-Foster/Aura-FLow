import { useThemeManagementStore } from "@/hooks/ThemeManagement"
import type { ItemColorSelected } from "@/lib/Type-data.type"
import { Card, CardContent } from "../ui/card"
import CustomColorPrimary, {
  CustomColorAccent,
  CustomColorBase,
  CustomColorCard,
  CustomColorDestructive,
  CustomColorGallery,
  CustomColorMuted,
  CustomColorPopover,
  CustomColorSecondary,
  CustomColorSidebar,
} from "./custom-color"

export default function PreviewTheme() {
  const selected: ItemColorSelected | null = useThemeManagementStore(
    (state) => state.ItemColorSelected
  )
  const render = () => {
    switch (selected?.name) {
      case "primary":
        return <CustomColorPrimary />
      case "secondary":
        return <CustomColorSecondary />
      case "background":
        return <CustomColorBase />
      case "card":
        return <CustomColorCard />
      case "popover":
        return <CustomColorPopover />
      case "muted":
        return <CustomColorMuted />
      case "accent":
        return <CustomColorAccent />
      case "destructive-element":
        return <CustomColorDestructive />
      case "sidebar":
        return <CustomColorSidebar />
      default:
        return <CustomColorGallery />
    }
  }
  return (
    <div className="hidden w-1/2 flex-col items-end gap-2 md:flex">
      <Card className="flex min-h-102 w-full justify-center">
        <CardContent className="h-full">{render()}</CardContent>
      </Card>
    </div>
  )
}
