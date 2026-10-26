import {
  Archive,
  BadgeCheck,
  BellRing,
  Blocks,
  CalendarDays,
  ChartNoAxesCombined,
  FileChartLine,
  LayoutDashboard,
  ListTodo,
  Package,
  Settings2,
  ShelvingUnit,
  ShoppingCart,
  SquareActivity,
  Store,
  UserCog,
  Van,
  Warehouse,
} from "lucide-react"
import type { ItemColorSelected, ListColorType, Mode } from "./Type-data.type"

export const datadropMenuEntreprise = [
  {
    id: 1,
    titre: "Plus d'information",
  },
  {
    id: 2,
    titre: "Paramètres",
  },
  {
    id: 3,
    titre: "Changer d'entreprise",
  },
]

export const datadropMenu = {
  navTrav: [
    {
      id: 1,
      titre: "Tableau de bord",
      url: "#",
      icon: LayoutDashboard,
    },
    {
      id: 2,
      titre: "Notifications",
      url: "#",
      icon: BellRing,
    },
    {
      id: 3,
      titre: "KPIs",
      url: "#",
      icon: ChartNoAxesCombined,
    },
    {
      id: 4,
      titre: "Planification",
      url: "#",
      icon: CalendarDays,
    },
    {
      id: 5,
      titre: "Tâches",
      url: "#",
      icon: ListTodo,
    },
    {
      id: 6,
      titre: "Rapport et Analyse",
      url: "#",
      icon: FileChartLine,
    },
    {
      id: 7,
      titre: "Activités commerciales",
      url: "#",
      icon: SquareActivity,
    },
    {
      id: 8,
      titre: "Validations",
      url: "#",
      icon: BadgeCheck,
    },
  ],
  navRelation: [
    {
      id: 1,
      titre: "Familles",
      url: "#",
      icon: Blocks,
    },
    {
      id: 2,
      titre: "Articles",
      url: "#",
      icon: Package,
    },
  ],
  navCompte: [
    {
      id: 1,
      titre: "Clients",
      url: "#",
      icon: LayoutDashboard,
    },
    {
      id: 2,
      titre: "Fournisseurs",
      url: "#",
      icon: LayoutDashboard,
    },
  ],
  navGesCom: [
    {
      id: 1,
      titre: "Achat",
      url: "#",
      icon: ShoppingCart,
    },
    {
      id: 2,
      titre: "Vente",
      url: "#",
      icon: Store,
    },
    {
      id: 3,
      titre: "Stock",
      url: "#",
      icon: Warehouse,
    },
    {
      id: 4,
      titre: "Inventaires",
      url: "#",
      icon: ShelvingUnit,
    },
    {
      id: 5,
      titre: "Caisses",
      url: "#",
      icon: Archive,
    },
    {
      id: 6,
      titre: "Logistiques",
      url: "#",
      icon: Van,
    },
  ],
  navParam: [
    {
      id: 1,
      titre: "Paramètres",
      url: "#",
      icon: Settings2,
    },
    {
      id: 2,
      titre: "Administration",
      url: "#",
      icon: UserCog,
    },
  ],
}

export const tabs = [
  { value: "Couleur", label: "Couleur" },
  { value: "Chart", label: "Couleurs des graphiques" },
]

export const ListColor: ListColorType[] = [
  {
    trigger: "primary",
    title: "Couleur principal",
    color: [
      { name: "Couleur de fond", index: "--primary" },
      { name: "Fond de texte", index: "--primary-foreground" },
    ],
  },
  {
    trigger: "secondary",
    title: "Couleur secondaire",
    color: [
      { name: "Couleur de fond", index: "--secondary" },
      { name: "Fond de texte", index: "--secondary-foreground" },
    ],
  },
  {
    trigger: "background",
    title: "Fond de l'application",
    color: [
      { name: "Arrière-plan", index: "--background" },
      { name: "Fond de texte", index: "--foreground" },
    ],
  },
  {
    trigger: "card",
    title: "Cartes",
    color: [
      { name: "fond de carte", index: "--card" },
      { name: "Fond de texte", index: "--card-foreground" },
    ],
  },
  {
    trigger: "popover",
    title: "Elements flottantes",
    color: [
      { name: "Fond de l'élément", index: "--popover" },
      { name: "Fond de texte", index: "--popover-foreground" },
    ],
  },
  {
    trigger: "muted",
    title: "Elements atténués",
    color: [
      { name: "Fond de l'élément", index: "--muted" },
      { name: "Fond de texte", index: "--muted-foreground" },
    ],
  },
  {
    trigger: "accent",
    title: "Accentuation",
    color: [
      { name: "Fond de l'élément", index: "--accent" },
      { name: "Fond de texte", index: "--accent-foreground" },
    ],
  },
  {
    trigger: "destructive-element",
    title: "Action de suppression",
    color: [
      { name: "Fond de l'élément", index: "--destructive" },
      { name: "Fond de texte", index: "--destructive-foreground" },
    ],
  },
  {
    trigger: "sidebar",
    title: "Barre latérale",
    color: [
      { name: "Arrière-plan", index: "--sidebar" },
      { name: "Texte", index: "--sidebar-foreground" },
      { name: "Élément principal", index: "--sidebar-primary" },
      {
        name: "Texte de l'élément principal",
        index: "--sidebar-primary-foreground",
      },
      { name: "Élément sélectionné", index: "--sidebar-accent" },
      {
        name: "Texte de l'élément sélectionné",
        index: "--sidebar-accent-foreground",
      },
      { name: "Séparateur", index: "--sidebar-border" },
      { name: "Contour de focus", index: "--sidebar-ring" },
    ],
  },
]

export const ListItemColors: ItemColorSelected[] = [
  {
    name: "primary",
    index: ["--primary", "--primary-foreground"],
  },
  {
    name: "secondary",
    index: ["--secondary", "--secondary-foreground"],
  },
  {
    name: "background",
    index: ["--background", "--foreground"],
  },
  {
    name: "card",
    index: ["--card", "--card-foreground"],
  },
  {
    name: "popover",
    index: ["--popover", "--popover-foreground"],
  },
  {
    name: "muted",
    index: ["--muted", "--muted-foreground"],
  },
  {
    name: "accent",
    index: ["--accent", "--accent-foreground"],
  },
  {
    name: "destructive-element",
    index: ["--destructive", "--destructive-foreground"],
  },
  {
    name: "sidebar",
    index: [
      "--sidebar",
      "--sidebar-foreground",
      "--sidebar-primary",
      "--sidebar-primary-foreground",
      "--sidebar-accent",
      "--sidebar-accent-foreground",
      "--sidebar-border",
      "--sidebar-ring",
    ],
  },
]

export const MODE_THEME_VALUES: Mode[] = ["dark", "light", "system"]

export function isMode(value: string | null): value is Mode {
  if (value === null) {
    return false
  }

  return MODE_THEME_VALUES.includes(value as Mode)
}

export function disableTransitionsTemporarily() {
  const style = document.createElement("style")
  style.appendChild(
    document.createTextNode(
      "*,*::before,*::after{-webkit-transition:none!important;transition:none!important}"
    )
  )
  document.head.appendChild(style)

  return () => {
    window.getComputedStyle(document.body)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        style.remove()
      })
    })
  }
}
