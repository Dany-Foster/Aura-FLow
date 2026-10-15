import { useThemeManagementStore } from "@/hooks/ThemeManagement"
import type { ItemColorSelected } from "@/lib/Type-data.type"
import { GalleryVerticalEnd, Ghost } from "lucide-react"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "../ui/popover"
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs"
import EmptyCustom from "./Presence/Empty"

export default function CustomColorPrimary() {
  const ItemColorSelected: ItemColorSelected | null = useThemeManagementStore(
    (state) => state.ItemColorSelected
  )
  const ThemeColor = useThemeManagementStore((state) => state.ThemeColorCustom)

  const style = {
    "--tab-trigger-variable-bg":
      ThemeColor && ItemColorSelected
        ? ThemeColor[ItemColorSelected.index[0]]
        : "#000",
    "--tab-trigger-variable-fg":
      ThemeColor && ItemColorSelected
        ? ThemeColor[ItemColorSelected.index[1]]
        : "#fff",
  } as React.CSSProperties

  return (
    <div className="flex min-h-full flex-col items-center justify-center gap-4">
      <Button
        style={{
          backgroundColor:
            ThemeColor && ItemColorSelected
              ? ThemeColor[ItemColorSelected.index[0]]
              : "",
          color:
            ThemeColor && ItemColorSelected
              ? ThemeColor[ItemColorSelected.index[1]]
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
              ? ThemeColor[ItemColorSelected.index[0]]
              : "",
          color:
            ThemeColor && ItemColorSelected
              ? ThemeColor[ItemColorSelected.index[1]]
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
        ? ThemeColor[ItemColorSelected.index[0]]
        : "#000",
    "--badge-variable-fg":
      ThemeColor && ItemColorSelected
        ? ThemeColor[ItemColorSelected.index[1]]
        : "#fff",
  } as React.CSSProperties

  return (
    <div className="flex min-h-full flex-col items-center justify-center gap-4">
      <Button
        style={{
          backgroundColor:
            ThemeColor && ItemColorSelected
              ? ThemeColor[ItemColorSelected.index[0]]
              : "",
          color:
            ThemeColor && ItemColorSelected
              ? ThemeColor[ItemColorSelected.index[1]]
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
        ? ThemeColor[ItemColorSelected.index[0]]
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
            <span
              className="truncate text-xs font-medium"
              style={{
                color:
                  ThemeColor && ItemColorSelected
                    ? ThemeColor[ItemColorSelected.index[1]]
                    : "#fff",
              }}
            >
              Tableau de bord
            </span>
          </header>

          <main className="min-w-0 space-y-3 overflow-hidden p-3">
            <h3
              className="truncate text-sm font-semibold"
              style={{
                color:
                  ThemeColor && ItemColorSelected
                    ? ThemeColor[ItemColorSelected.index[1]]
                    : "#fff",
              }}
            >
              Vue générale
            </h3>

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

export function CustomColorCard() {
  const ItemColorSelected: ItemColorSelected | null = useThemeManagementStore(
    (state) => state.ItemColorSelected
  )
  const ThemeColor = useThemeManagementStore((state) => state.ThemeColorCustom)

  const style = {
    "--card-variable-bg":
      ThemeColor && ItemColorSelected
        ? ThemeColor[ItemColorSelected.index[0]]
        : "#000",
    "--card-variable-fg":
      ThemeColor && ItemColorSelected
        ? ThemeColor[ItemColorSelected.index[1]]
        : "#ffff",
  } as React.CSSProperties

  return (
    <Card
      className="relative mx-auto w-full max-w-sm bg-(--card-variable-bg) pt-0 text-(--card-variable-fg)"
      style={style}
    >
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src="https://avatar.vercel.sh/shadcn1"
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
          <Badge
            variant="secondary"
            style={{
              backgroundColor: ThemeColor ? ThemeColor["--secondary"] : "#000",
              color: ThemeColor ? ThemeColor["--secondary-foreground"] : "#fff",
            }}
          >
            Featured
          </Badge>
        </CardAction>
        <CardTitle>Design systems meetup</CardTitle>
        <CardDescription>
          A practical talk on component APIs, accessibility, and shipping
          faster.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button
          className="w-full"
          style={{
            backgroundColor: ThemeColor ? ThemeColor["--primary"] : "#000",
            color: ThemeColor ? ThemeColor["--primary-foreground"] : "#fff",
          }}
        >
          View Event
        </Button>
      </CardFooter>
    </Card>
  )
}

export function CustomColorPopover() {
  const ItemColorSelected: ItemColorSelected | null = useThemeManagementStore(
    (state) => state.ItemColorSelected
  )
  const ThemeColor = useThemeManagementStore((state) => state.ThemeColorCustom)

  return (
    <>
      {ThemeColor && ItemColorSelected ? (
        <div className="flex min-h-full flex-col items-center justify-center gap-4">
          <Popover open={true}>
            <PopoverTrigger
              render={
                <Button
                  variant="default"
                  className="w-fit"
                  style={{
                    backgroundColor: ThemeColor["--primary"],
                    color: ThemeColor["--primary-foreground"],
                  }}
                >
                  Button d'activation
                </Button>
              }
            />
            <PopoverContent
              align="center"
              className="w-80 p-4"
              style={{
                backgroundColor: ThemeColor[ItemColorSelected.index[0]],
                color: ThemeColor[ItemColorSelected.index[1]],
              }}
            >
              <PopoverHeader>
                <PopoverTitle>Elément flottante</PopoverTitle>
                <PopoverDescription>
                  Cet élément flottant est personnalisé.
                </PopoverDescription>
              </PopoverHeader>
            </PopoverContent>
          </Popover>
        </div>
      ) : (
        <EmptyCustom
          text="Une problème s'est produit lors du chargement de la couleur"
          icon={Ghost}
        />
      )}
    </>
  )
}

export function CustomColorMuted() {
  const ThemeColor = useThemeManagementStore((state) => state.ThemeColorCustom)
  return (
    <div className="flex min-h-full flex-col items-center justify-center gap-4">
      <Button
        style={{
          backgroundColor: ThemeColor ? ThemeColor["--muted"] : "#000",
          color: ThemeColor ? ThemeColor["--muted-foreground"] : "#fff",
        }}
      >
        Button
      </Button>
    </div>
  )
}
