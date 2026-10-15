import { useThemeManagementStore } from "@/hooks/ThemeManagement"
import {
  FONT_CATALOG,
  FONT_PROPERTY_BY_CATEGORY,
  type FontCategory,
  type FontOption,
} from "@/lib/font-catalog"
import { useState } from "react"
import { Button } from "../ui/button"
const LABELS: Record<FontCategory, string> = {
  sans: "Sans serif",
  serif: "Serif",
  mono: "Monospace",
}
const SAMPLE = "Le petit renard brun traverse le jardin."
export default function TypographyCustom() {
  const draft = useThemeManagementStore((state) => state.ThemeColorCustom)
  const update = useThemeManagementStore((state) => state.setTheme)
  const [status, setStatus] = useState<{
    family: string
    value: "loading" | "loaded" | "error"
  } | null>(null)
  const [loaded, setLoaded] = useState<Set<string>>(() => new Set())
  const loadFont = async (font: FontOption) => {
    if (!font.googleFamily || loaded.has(font.googleFamily)) return
    setStatus({ family: font.googleFamily, value: "loading" })
    try {
      const url = new URL("https://fonts.googleapis.com/css2")
      url.searchParams.set(
        "family",
        font.googleFamily + ":wght@400;500;600;700"
      )
      url.searchParams.set("display", "swap")
      if (url.origin !== "https://fonts.googleapis.com")
        throw new Error("Origine non autorisée")
      let link = document.querySelector<HTMLLinkElement>(
        'link[data-aura-google-font="' + font.googleFamily + '"]'
      )
      if (link?.dataset.loaded === "true")
        await document.fonts.load('400 16px "' + font.family + '"')
      else {
        if (link && !link.sheet) {
          link.remove()
          link = null
        }
        const sheet = link ?? document.createElement("link")
        const loadedSheet = new Promise<void>((resolve, reject) => {
          sheet.onload = () => resolve()
          sheet.onerror = () => reject(new Error("Chargement impossible"))
          if (sheet.sheet) resolve()
        })
        if (!link) {
          sheet.rel = "stylesheet"
          sheet.href = url.toString()
          sheet.crossOrigin = "anonymous"
          sheet.dataset.auraGoogleFont = font.googleFamily
          document.head.appendChild(sheet)
        }
        await loadedSheet
        await document.fonts.load('400 16px "' + font.family + '"')
        sheet.dataset.loaded = "true"
      }
      setLoaded((state) => new Set(state).add(font.googleFamily!))
      setStatus({ family: font.googleFamily, value: "loaded" })
    } catch {
      setStatus({ family: font.googleFamily, value: "error" })
    }
  }
  const renderControl = (category: FontCategory) => {
    const property = FONT_PROPERTY_BY_CATEGORY[category],
      options = FONT_CATALOG[category],
      current = draft?.[property] ?? ""
    const selected = options.find((font) => font.cssValue === current)
    return (
      <section
        key={category}
        className="space-y-3 rounded-lg border border-foreground/10 p-3"
      >
        <div className="flex items-center justify-between gap-3">
          <label htmlFor={"font-" + category} className="text-sm font-semibold">
            {LABELS[category]}
          </label>
          {selected?.source === "google" && (
            <Button
              type="button"
              size="sm"
              variant="outline"
              disabled={
                status?.value === "loading" ||
                loaded.has(selected.googleFamily ?? "")
              }
              onClick={() => void loadFont(selected)}
            >
              {status?.family === selected.googleFamily &&
              status?.value === "loading"
                ? "Chargement…"
                : loaded.has(selected.googleFamily ?? "")
                  ? "Police chargée"
                  : "Charger depuis Google"}
            </Button>
          )}
        </div>
        <select
          id={"font-" + category}
          className="h-9 w-full rounded-lg border border-input bg-background px-3 text-sm"
          value={selected?.id ?? "__current__"}
          onChange={(event) => {
            const option = options.find(
              (font) => font.id === event.currentTarget.value
            )
            if (option) update(property, option.cssValue)
          }}
        >
          {!selected && (
            <option value="__current__">Police actuelle du thème</option>
          )}
          {options.map((font) => (
            <option key={font.id} value={font.id}>
              {font.label} ·{" "}
              {font.source === "application"
                ? "Application"
                : font.source === "system"
                  ? "Système"
                  : "Google Fonts"}
            </option>
          ))}
        </select>
        <p
          className="rounded-md bg-muted px-3 py-3 text-sm"
          style={{ fontFamily: current || undefined }}
        >
          {SAMPLE}
        </p>
      </section>
    )
  }
  return (
    <div className="space-y-4 p-4">
      <div>
        <h3 className="text-sm font-semibold">Aperçu des polices</h3>
        <p className="text-xs text-muted-foreground">
          Choisissez une famille et observez le texte dans le brouillon. Le
          thème actif changera après validation.
        </p>
      </div>
      {(["sans", "serif", "mono"] as const).map(renderControl)}
      {status?.value === "error" && (
        <p role="alert" className="text-xs text-destructive">
          Échec du chargement. Vérifiez la connexion et la politique CSP.
        </p>
      )}
      <p className="text-xs text-muted-foreground">
        Les polices de l’application et du système sont locales. Charger depuis
        Google contacte fonts.googleapis.com et fonts.gstatic.com. Le catalogue
        est contrôlé : aucune URL ni fichier arbitraire n’est accepté.
      </p>
    </div>
  )
}
