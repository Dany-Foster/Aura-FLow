import { useThemeManagementStore } from "@/hooks/ThemeManagement"
import type { ItemColorSelected } from "@/lib/Type-data.type"
import { GalleryVerticalEnd } from "lucide-react"
import { Button } from "../ui/button"
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
