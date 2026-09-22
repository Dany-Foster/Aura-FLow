import { Palette, Shuffle } from "lucide-react"
import { useState } from "react"
import { useTheme } from "../theme-provider"
import { Button } from "./button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./drawer"
import SelectTheme from "./select-theme"

export default function PalletteDrawer() {
  const [open, setOpen] = useState(false)
  const { themeMode, setTheme } = useTheme()

  const handleChangeTheme = (
    theme: "default" | "claude",
    type: "dark" | "light" | "system"
  ) => {
    setTheme(theme, type)
  }

  return (
    <Drawer
      open={open}
      modal="trap-focus"
      onOpenChange={setOpen}
      swipeDirection="right"
    >
      <DrawerTrigger render={<Button variant="outline" size="icon" />}>
        <Palette className="size-4" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Customisation</DrawerTitle>
          <DrawerDescription>
            Customiser votre couleur, font, selon vos goûts
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
          <div className="flex flex-col gap-2">
            <label className="block text-xs leading-6 font-semibold">
              Couleur de theme
            </label>
            <div className="flex-1">
              <SelectTheme />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="block text-xs leading-6 font-semibold">
              Couleur de fond
            </label>
            <div className="flex justify-between gap-2">
              <Button
                onClick={() => handleChangeTheme(themeMode.theme, "light")}
                variant="outline"
                className="flex-1"
              >
                Light
              </Button>
              <Button
                onClick={() => handleChangeTheme(themeMode.theme, "dark")}
                variant="outline"
                className="flex-1"
              >
                Dark
              </Button>
              <Button
                onClick={() => handleChangeTheme(themeMode.theme, "system")}
                variant="outline"
                className="flex-1"
              >
                Système
              </Button>
            </div>
          </div>
        </div>
        <DrawerFooter>
          <div className="flex flex-row gap-2">
            <Button className="flex-1">
              <Shuffle className="size-4" />
              Aléatoire
            </Button>
            <DrawerClose
              render={<Button variant="outline" className="flex-1" />}
            >
              Réinitialiser par défaut
            </DrawerClose>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
