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
      ThemeColor && ItemColorSelected?.name === "primary"
        ? ThemeColor["--primary"]
        : "#000",
    "--tab-trigger-variable-fg":
      ThemeColor && ItemColorSelected?.name === "primary"
        ? ThemeColor["--primary-foreground"]
        : "#fff",
  } as React.CSSProperties

  return (
    <>
      {ThemeColor && ItemColorSelected?.name === "primary" ? (
        <div className="flex min-h-full flex-col items-center justify-center gap-4">
          <Button
            style={{
              backgroundColor: ThemeColor["--primary"],
              color: ThemeColor["--primary-foreground"],
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
              backgroundColor: ThemeColor["--primary"],
              color: ThemeColor["--primary-foreground"],
            }}
            className="flex aspect-square size-8 items-center justify-center rounded-lg"
          >
            <GalleryVerticalEnd className="size-4" />
          </div>
        </div>
      ) : (
        <ErrorColor />
      )}
    </>
  )
}

export function CustomColorSecondary() {
  const ItemColorSelected: ItemColorSelected | null = useThemeManagementStore(
    (state) => state.ItemColorSelected
  )
  const ThemeColor = useThemeManagementStore((state) => state.ThemeColorCustom)

  const style = {
    "--badge-variable-bg":
      ThemeColor && ItemColorSelected?.name === "secondary"
        ? ThemeColor["--secondary"]
        : "#000",
    "--badge-variable-fg":
      ThemeColor && ItemColorSelected?.name === "secondary"
        ? ThemeColor["--secondary-foreground"]
        : "#fff",
  } as React.CSSProperties

  return (
    <>
      {ThemeColor && ItemColorSelected?.name === "secondary" ? (
        <div className="flex min-h-full flex-col items-center justify-center gap-4">
          <Button
            style={{
              backgroundColor: ThemeColor["--secondary"],
              color: ThemeColor["--secondary-foreground"],
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
      ) : (
        <ErrorColor />
      )}
    </>
  )
}

export function CustomColorBase() {
  const ItemColorSelected: ItemColorSelected | null = useThemeManagementStore(
    (state) => state.ItemColorSelected
  )
  const ThemeColor = useThemeManagementStore((state) => state.ThemeColorCustom)
  const style = {
    "--background-variable-bg":
      ThemeColor && ItemColorSelected?.name === "background"
        ? ThemeColor["--background"]
        : "#000",
  } as React.CSSProperties

  return (
    <>
      {ThemeColor && ItemColorSelected?.name === "background" ? (
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
                    color: ThemeColor["--foreground"],
                  }}
                >
                  Tableau de bord
                </span>
              </header>

              <main className="min-w-0 space-y-3 overflow-hidden p-3">
                <h3
                  className="truncate text-sm font-semibold"
                  style={{
                    color: ThemeColor["--foreground"],
                  }}
                >
                  Vue générale
                </h3>

                <div className="grid grid-cols-1 gap-2">
                  <Card className="min-w-0 gap-2 py-3">
                    <CardHeader className="px-3">
                      <CardTitle className="text-xs">
                        Chiffre d'affaires
                      </CardTitle>
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
      ) : (
        <ErrorColor />
      )}
    </>
  )
}

export function CustomColorCard() {
  const ItemColorSelected: ItemColorSelected | null = useThemeManagementStore(
    (state) => state.ItemColorSelected
  )
  const ThemeColor = useThemeManagementStore((state) => state.ThemeColorCustom)

  const style = {
    "--card-variable-bg":
      ThemeColor && ItemColorSelected?.name === "card"
        ? ThemeColor["--card"]
        : "#000",
    "--card-variable-fg":
      ThemeColor && ItemColorSelected?.name === "card"
        ? ThemeColor["--card-foreground"]
        : "#ffff",
  } as React.CSSProperties

  return (
    <>
      {ThemeColor && ItemColorSelected?.name === "card" ? (
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
                  backgroundColor: ThemeColor["--secondary"],
                  color: ThemeColor["--secondary-foreground"],
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
                backgroundColor: ThemeColor["--primary"],
                color: ThemeColor["--primary-foreground"],
              }}
            >
              View Event
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <ErrorColor />
      )}
    </>
  )
}

export function CustomColorPopover() {
  const ItemColorSelected: ItemColorSelected | null = useThemeManagementStore(
    (state) => state.ItemColorSelected
  )
  const ThemeColor = useThemeManagementStore((state) => state.ThemeColorCustom)

  return (
    <>
      {ThemeColor && ItemColorSelected?.name === "popover" ? (
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
                backgroundColor: ThemeColor["--popover"],
                color: ThemeColor["--popover-foreground"],
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
        <ErrorColor />
      )}
    </>
  )
}

export function CustomColorMuted() {
  const ItemColorSelected: ItemColorSelected | null = useThemeManagementStore(
    (state) => state.ItemColorSelected
  )
  const ThemeColor = useThemeManagementStore((state) => state.ThemeColorCustom)

  return (
    <div className="flex min-h-full flex-col items-center justify-center gap-4">
      {ThemeColor && ItemColorSelected?.name === "muted" ? (
        <>
          <p
            className="rounded-md px-4 py-2"
            style={{
              backgroundColor: ThemeColor["--muted"],
              color: ThemeColor["--muted-foreground"],
            }}
          >
            Texte secondaire et contenu discret
          </p>
          <Button
            style={{
              backgroundColor: ThemeColor["--muted"],
              color: ThemeColor["--muted-foreground"],
            }}
          >
            Élément atténué
          </Button>
        </>
      ) : (
        <ErrorColor />
      )}
    </div>
  )
}

export function CustomColorAccent() {
  const ItemColorSelected: ItemColorSelected | null = useThemeManagementStore(
    (state) => state.ItemColorSelected
  )
  const ThemeColor = useThemeManagementStore((state) => state.ThemeColorCustom)

  if (!ThemeColor || ItemColorSelected?.name !== "accent") {
    return <ErrorColor />
  }

  return (
    <div className="flex min-h-full flex-col items-center justify-center gap-4 p-4">
      <div
        className="w-full max-w-md rounded-xl border p-4"
        style={{
          backgroundColor: ThemeColor["--accent"],
          color: ThemeColor["--accent-foreground"],
        }}
      >
        <p className="font-semibold">Élément sélectionné</p>
        <p className="mt-1 text-sm opacity-80">
          Exemple d’un item actif dans une liste ou un menu.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Badge
          style={{
            backgroundColor: ThemeColor["--accent"],
            color: ThemeColor["--accent-foreground"],
          }}
        >
          Accent
        </Badge>
        <Button
          style={{
            backgroundColor: ThemeColor["--accent"],
            color: ThemeColor["--accent-foreground"],
          }}
        >
          Action secondaire
        </Button>
      </div>
    </div>
  )
}

export function CustomColorDestructive() {
  const ItemColorSelected: ItemColorSelected | null = useThemeManagementStore(
    (state) => state.ItemColorSelected
  )
  const ThemeColor = useThemeManagementStore((state) => state.ThemeColorCustom)

  if (!ThemeColor || ItemColorSelected?.name !== "destructive-element") {
    return <ErrorColor />
  }

  return (
    <div className="flex min-h-full flex-col items-center justify-center gap-4 p-4">
      <Button
        style={{
          backgroundColor: ThemeColor["--destructive"],
          color: ThemeColor["--destructive-foreground"],
        }}
      >
        Supprimer
      </Button>
      <div
        className="w-full max-w-md rounded-lg border p-4"
        style={{
          borderColor: ThemeColor["--destructive"],
          color: ThemeColor["--destructive"],
        }}
      >
        <p className="font-semibold">Action irréversible</p>
        <p className="mt-1 text-sm">
          Cet aperçu montre un message d’erreur ou de confirmation de suppression.
        </p>
      </div>
    </div>
  )
}

export function CustomColorSidebar() {
  const ItemColorSelected: ItemColorSelected | null = useThemeManagementStore(
    (state) => state.ItemColorSelected
  )
  const ThemeColor = useThemeManagementStore((state) => state.ThemeColorCustom)

  if (!ThemeColor || ItemColorSelected?.name !== "sidebar") {
    return <ErrorColor />
  }

  return (
    <div className="flex min-h-full items-center justify-center p-4">
      <aside
        className="w-full max-w-xs rounded-xl border p-3"
        style={{
          backgroundColor: ThemeColor["--sidebar"],
          color: ThemeColor["--sidebar-foreground"],
          borderColor: ThemeColor["--sidebar-border"],
        }}
      >
        <div
          className="mb-4 flex items-center gap-2 border-b pb-3"
          style={{ borderColor: ThemeColor["--sidebar-border"] }}
        >
          <div
            className="flex size-8 items-center justify-center rounded-md"
            style={{
              backgroundColor: ThemeColor["--sidebar-primary"],
              color: ThemeColor["--sidebar-primary-foreground"],
            }}
          >
            <GalleryVerticalEnd className="size-4" />
          </div>
          <span className="font-semibold">Aura Flow</span>
        </div>
        <nav className="space-y-1 text-sm">
          <div
            className="rounded-md px-3 py-2 font-medium"
            style={{
              backgroundColor: ThemeColor["--sidebar-accent"],
              color: ThemeColor["--sidebar-accent-foreground"],
              boxShadow: "0 0 0 2px " + ThemeColor["--sidebar-ring"],
            }}
          >
            Tableau de bord
          </div>
          <div className="rounded-md px-3 py-2 opacity-80">Planification</div>
          <div className="rounded-md px-3 py-2 opacity-80">Rapports</div>
        </nav>
      </aside>
    </div>
  )
}

export function CustomColorGallery() {
  const ThemeColor = useThemeManagementStore((state) => state.ThemeColorCustom)

  if (!ThemeColor) {
    return <ErrorColor />
  }

  return (
    <div className="grid h-full grid-cols-2 gap-3 overflow-auto p-3">
      <section className="flex flex-col gap-3 rounded-xl border p-3">
        <h3 className="text-sm font-semibold">Boutons et états</h3>
        <Button
          style={{
            backgroundColor: ThemeColor["--primary"],
            color: ThemeColor["--primary-foreground"],
          }}
        >
          Action principale
        </Button>
        <Button
          style={{
            backgroundColor: ThemeColor["--secondary"],
            color: ThemeColor["--secondary-foreground"],
          }}
        >
          Action secondaire
        </Button>
        <Button
          style={{
            backgroundColor: ThemeColor["--destructive"],
            color: ThemeColor["--destructive-foreground"],
          }}
        >
          Supprimer
        </Button>
        <Badge
          style={{
            backgroundColor: ThemeColor["--accent"],
            color: ThemeColor["--accent-foreground"],
          }}
        >
          Élément sélectionné
        </Badge>
      </section>
      <section
        className="rounded-xl border p-3"
        style={{
          backgroundColor: ThemeColor["--card"],
          color: ThemeColor["--card-foreground"],
        }}
      >
        <h3 className="text-sm font-semibold">Carte de résumé</h3>
        <p className="mt-2 text-2xl font-bold">24 500 €</p>
        <p
          className="mt-1 text-xs"
          style={{ color: ThemeColor["--muted-foreground"] }}
        >
          Chiffre d’affaires cette semaine
        </p>
      </section>
      <aside
        className="col-span-2 rounded-xl border p-3"
        style={{
          backgroundColor: ThemeColor["--sidebar"],
          color: ThemeColor["--sidebar-foreground"],
          borderColor: ThemeColor["--sidebar-border"],
        }}
      >
        <p className="mb-2 text-xs font-semibold">Aperçu du sidebar</p>
        <div className="flex flex-wrap gap-2 text-xs">
          <span
            className="rounded-md px-2 py-1"
            style={{
              backgroundColor: ThemeColor["--sidebar-primary"],
              color: ThemeColor["--sidebar-primary-foreground"],
            }}
          >
            Espace de travail
          </span>
          <span
            className="rounded-md px-2 py-1"
            style={{
              backgroundColor: ThemeColor["--sidebar-accent"],
              color: ThemeColor["--sidebar-accent-foreground"],
            }}
          >
            Tableau de bord
          </span>
          <span className="rounded-md px-2 py-1 opacity-80">Paramètres</span>
        </div>
      </aside>
    </div>
  )
}

function ErrorColor() {
  return (
    <div className="flex min-h-full w-full items-center justify-center">
      <EmptyCustom
        text="Une problème s'est produit lors du chargement de la couleur"
        icon={Ghost}
      />
    </div>
  )
}
