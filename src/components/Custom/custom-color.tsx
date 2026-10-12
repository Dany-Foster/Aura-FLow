import { useThemeManagementStore } from "@/hooks/ThemeManagement"
import type { ItemColorSelected } from "@/lib/Type-data.type"
import { GalleryVerticalEnd } from "lucide-react"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs"

export default function CustomColorPrimary() {
  const ItemColorSelected: ItemColorSelected | null = useThemeManagementStore(
    (state) => state.ItemColorSelected
  )
  const ThemeColor = useThemeManagementStore((state) => state.ThemeColorCustom)

  const style = {
    "--tab-trigger-variable-bg":
      ThemeColor && ItemColorSelected
        ? ThemeColor[ItemColorSelected?.index[0]]
        : "#000",
    "--tab-trigger-variable-fg":
      ThemeColor && ItemColorSelected
        ? ThemeColor[ItemColorSelected?.index[1]]
        : "#fff",
  } as React.CSSProperties

  return (
    <div className="flex min-h-full flex-col items-center justify-center gap-4">
      <Button
        style={{
          backgroundColor:
            ThemeColor && ItemColorSelected
              ? ThemeColor[ItemColorSelected?.index[0]]
              : "",
          color:
            ThemeColor && ItemColorSelected
              ? ThemeColor[ItemColorSelected?.index[1]]
              : "",
        }}
      >
        Button
      </Button>
      <Tabs>
        <TabsList>
          <TabsTrigger
            style={style}
            className="data-active:bg-(--tab-trigger-variable-bg) data-active:text-(--tab-trigger-variable-fg) hover:data-active:text-(--tab-trigger-variable-fg)"
            value="Tabs1"
          >
            Tabs 1
          </TabsTrigger>
          <TabsTrigger
            style={style}
            className="data-active:bg-(--tab-trigger-variable-bg) data-active:text-(--tab-trigger-variable-fg) hover:data-active:text-(--tab-trigger-variable-fg)"
            value="Tabs2"
          >
            Tabs 2
          </TabsTrigger>
          <TabsTrigger
            style={style}
            className="data-active:bg-(--tab-trigger-variable-bg) data-active:text-(--tab-trigger-variable-fg) hover:data-active:text-(--tab-trigger-variable-fg)"
            value="Tabs3"
          >
            Tabs 3
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div
        style={{
          backgroundColor:
            ThemeColor && ItemColorSelected
              ? ThemeColor[ItemColorSelected?.index[0]]
              : "",
          color:
            ThemeColor && ItemColorSelected
              ? ThemeColor[ItemColorSelected?.index[1]]
              : "",
        }}
        className="flex aspect-square size-8 items-center justify-center rounded-lg"
      >
        <GalleryVerticalEnd className="size-4" />
      </div>
    </div>
  )
}

export function CustomColorSecondary() {
  const ItemColorSelected: ItemColorSelected | null = useThemeManagementStore(
    (state) => state.ItemColorSelected
  )
  const ThemeColor = useThemeManagementStore((state) => state.ThemeColorCustom)

  const style = {
    "--badge-variable-bg":
      ThemeColor && ItemColorSelected
        ? ThemeColor[ItemColorSelected?.index[0]]
        : "#000",
    "--badge-variable-fg":
      ThemeColor && ItemColorSelected
        ? ThemeColor[ItemColorSelected?.index[1]]
        : "#fff",
  } as React.CSSProperties

  return (
    <div className="flex min-h-full flex-col items-center justify-center gap-4">
      <Button
        style={{
          backgroundColor:
            ThemeColor && ItemColorSelected
              ? ThemeColor[ItemColorSelected?.index[0]]
              : "",
          color:
            ThemeColor && ItemColorSelected
              ? ThemeColor[ItemColorSelected?.index[1]]
              : "",
        }}
      >
        Button
      </Button>
      <Badge
        style={style}
        className="bg-(--badge-variable-bg) text-(--badge-variable-fg)"
      >
        badge
      </Badge>
    </div>
  )
}

export function CustomColorBase() {
  const ItemColorSelected: ItemColorSelected | null = useThemeManagementStore(
    (state) => state.ItemColorSelected
  )
  const ThemeColor = useThemeManagementStore((state) => state.ThemeColorCustom)
  const style = {
    "--background-variable-bg":
      ThemeColor && ItemColorSelected
        ? ThemeColor[ItemColorSelected?.index[0]]
        : "#000",
  } as React.CSSProperties

  return (
    <div className="h-full min-w-0 overflow-hidden rounded-xl border">
      <div className="flex h-full min-w-0">
        <aside className="min-h-full w-24 shrink-0 border-r p-2">
          <div className="mb-4 truncate text-xs font-semibold">
            Mon application
          </div>
          <div className="space-y-2">
            <div className="h-6 rounded bg-muted" />
            <div className="h-6 rounded bg-muted/50" />
            <div className="h-6 rounded bg-muted/50" />
          </div>
        </aside>

        {/* Contenu principal */}
        <div
          className="h-full min-w-0 flex-1 overflow-hidden bg-(--background-variable-bg)"
          style={style}
        >
          <header className="flex h-10 items-center border-b px-3">
            <span className="truncate text-xs font-medium">
              Tableau de bord
            </span>
          </header>

          <main className="min-w-0 space-y-3 overflow-hidden p-3">
            <h3 className="truncate text-sm font-semibold">Vue générale</h3>

            <div className="grid grid-cols-1 gap-2">
              <Card className="min-w-0 gap-2 py-3">
                <CardHeader className="px-3">
                  <CardTitle className="text-xs">Chiffre d'affaires</CardTitle>
                </CardHeader>
                <CardContent className="px-3">
                  <p className="text-lg font-bold">24 500 €</p>
                </CardContent>
              </Card>

              <Card className="min-w-0 gap-2 py-3">
                <CardHeader className="px-3">
                  <CardTitle className="text-xs">Commandes</CardTitle>
                </CardHeader>
                <CardContent className="px-3">
                  <p className="text-lg font-bold">128</p>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
