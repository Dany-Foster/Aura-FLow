import { useThemeManagementStore } from "@/hooks/ThemeManagement"
import type { ItemColorSelected } from "@/lib/Type-data.type"
import { Plus } from "lucide-react"
import type { ChangeEvent } from "react"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { Input } from "../ui/input"
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

type Props = {
  isCreatingTheme: boolean
  themeName: string
  onCreateTheme: () => void
  onThemeNameChange: (value: string) => void
  onValidate: () => void
  onCancelCreate: () => void
}
export default function PreviewTheme({
  isCreatingTheme,
  themeName,
  onCreateTheme,
  onThemeNameChange,
  onValidate,
  onCancelCreate,
}: Props) {
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
    <div className="flex h-111.5 w-1/2 flex-col items-end gap-2">
      {!isCreatingTheme ? (
        <Button
          type="button"
          variant="outline"
          className="w-auto"
          onClick={onCreateTheme}
        >
          <Plus /> Nouveau thème
        </Button>
      ) : (
        <div className="flex w-full items-center gap-2">
          <Input
            aria-label="Nom du nouveau thème"
            autoFocus
            maxLength={40}
            placeholder="Nom du thème"
            value={themeName}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              onThemeNameChange(event.target.value)
            }
          />
          <Button type="button" variant="outline" onClick={onCancelCreate}>
            Annuler
          </Button>
          <Button
            type="button"
            disabled={!themeName.trim()}
            onClick={onValidate}
          >
            Valider
          </Button>
        </div>
      )}
      <Card className="h-full w-full">
        <CardContent className="h-full">{render()}</CardContent>
      </Card>
    </div>
  )
}
