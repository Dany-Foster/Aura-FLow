import { Palette } from "lucide-react"
import { Button } from "../ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"
import { CustomPalette } from "../ui/palette"
import PersonnalisationTabs from "./personnlisation-tabs"
import PreviewTheme from "./preview-theme"

export default function CustomisationPallette() {
  return (
    <Dialog>
      <form>
        <DialogTrigger render={<Button variant="outline" size="icon" />}>
          <Palette className="size-4" />
        </DialogTrigger>
        <DialogContent className="min-w-[calc(100%-2rem)] lg:max-w-300 lg:min-w-0">
          <DialogHeader>
            <DialogTitle>
              <div className="flex items-center gap-2">
                <CustomPalette className="size-4" />
                <span className="block">Personnalisation du thème</span>
              </div>
            </DialogTitle>
            <DialogDescription className="w-full">
              Personnalisez les couleurs de l’interface et créez une apparence
              adaptée à vos préférences. Les modifications sont appliquées
              instantanément à l’ensemble de l’application.
            </DialogDescription>
          </DialogHeader>
          <div className="justify-arround flex min-h-102 min-w-full items-start gap-2">
            <PersonnalisationTabs />
            <PreviewTheme />
          </div>
        </DialogContent>
      </form>
    </Dialog>
  )
}
