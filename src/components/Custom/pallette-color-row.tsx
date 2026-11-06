import { useThemeManagementStore } from "@/hooks/ThemeManagement"
import type { ColorKey } from "@/lib/Type-data.type"
import { RotateCcw } from "lucide-react"
import { useRef, useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { toHex } from "@/lib/utils"

export function PalletteColorRow({
  colorKey,
  label,
  color,
}: {
  colorKey: ColorKey
  label: string
  color: string
}) {
  const [hex, setHex] = useState<string>(() => toHex(color))
  const setThemeColor = useThemeManagementStore((state) => state.setTheme)
  const resetColor = useThemeManagementStore((state) => state.resetColor)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const applyHex = (value: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    if (!value) {
      return
    }

    timeoutRef.current = setTimeout(() => {
      // La couleur est appliquée uniquement
      // après que le sélecteur est resté immobile
      setHex(value.toUpperCase())
      if (/^#(?:[\da-f]{3}|[\da-f]{4}|[\da-f]{6}|[\da-f]{8})$/i.test(value))
        setThemeColor(colorKey, value)
    }, 300)
  }

  return (
    <div className="flex items-center gap-2.5">
      <label
        className="relative size-8 shrink-0 overflow-hidden rounded-md border shadow-sm"
        style={{ backgroundColor: color }}
        title={`Choisir la couleur : ${label}`}
      >
        <Input
          aria-label={`Choisir la couleur ${label}`}
          className="absolute inset-0 size-full cursor-pointer opacity-0"
          type="color"
          value={toHex(color)}
          onChange={(event) => applyHex(event.target.value)}
        />
      </label>
      <label
        className="min-w-0 flex-1 text-xs font-medium"
        htmlFor={`hex-${colorKey}`}
      >
        {label}
      </label>
      <Input
        id={`hex-${colorKey}`}
        aria-label={`Code HEX pour ${label}`}
        autoCapitalize="characters"
        className="h-8 w-1/2 font-mono text-xs uppercase"
        maxLength={9}
        value={hex}
        onChange={(event) => applyHex(event.target.value)}
        disabled
      />
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="size-8 shrink-0"
        aria-label={`Réinitialiser ${label}`}
        title={`Réinitialiser ${label}`}
        onClick={() => setHex(toHex(resetColor(colorKey)))}
      >
        <RotateCcw className="size-3.5" />
      </Button>
    </div>
  )
}
