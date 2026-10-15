import { useThemeManagementStore } from "@/hooks/ThemeManagement"
import { Palette } from "lucide-react"
import { useState } from "react"
import { useTheme } from "../theme-provider"
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
  const [open, setOpen] = useState(false)
  const [creating, setCreating] = useState(false)
  const [themeName, setThemeName] = useState("")
  const { themeMode } = useTheme()
  const reset = useThemeManagementStore((state) => state.Reset)
  const load = useThemeManagementStore((state) => state.UpdateThemeCustom)
  const save = useThemeManagementStore((state) => state.SaveCustomTheme)
  const draft = useThemeManagementStore((state) => state.ThemeColorCustom)
  const handleOpenChange = (next: boolean) => {
    setOpen(next)
    if (!next) {
      setCreating(false)
      setThemeName("")
      reset()
    } else load(themeMode.theme, themeMode.mode)
  }
  const validate = () => {
    if (!themeName.trim() || !draft) return
    save(themeName, themeMode.theme, themeMode.mode)
    setCreating(false)
    setThemeName("")
    reset()
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger render={<Button variant="outline" size="icon" />}>
        <Palette className="size-4" />
      </DialogTrigger>
      <DialogContent className="min-w-[calc(100%-2rem)] lg:max-w-300 lg:min-w-0">
        <DialogHeader>
          <DialogTitle>
            <div className="flex items-center gap-2">
              <CustomPalette className="size-4" />
              <span>Personnalisation du thème</span>
            </div>
          </DialogTitle>
          <DialogDescription>
            Les changements restent en aperçu jusqu’à validation. Annuler ou
            fermer conserve le thème actif ; un nouveau thème ne s’applique
            qu’après confirmation.
          </DialogDescription>
        </DialogHeader>
        <div className="justify-arround flex min-h-102 min-w-full items-start gap-2">
          <PersonnalisationTabs />
          <PreviewTheme
            isCreatingTheme={creating}
            themeName={themeName}
            onCreateTheme={() => setCreating(true)}
            onThemeNameChange={setThemeName}
            onValidate={validate}
            onCancelCreate={() => {
              setCreating(false)
              setThemeName("")
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
