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
import type { ItemColorSelected, ListColorType } from "./Type-data.type"

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
  { value: "Typographie", label: "Typographie" },
  { value: "Radius", label: "Radius" },
  { value: "Chart", label: "Chart" },
  { value: "Shadow", label: "Shadow" },
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
    title: "Fenêtres",
    color: [
      { name: "fond de card", index: "--card" },
      { name: "Fond de texte", index: "--card-foreground" },
    ],
  },
  {
    trigger: "popver",
    title: "Elements flottantes",
    color: [
      { name: "Fond de l'élément", index: "--popover" },
      { name: "Fond de texte", index: "--popover-foreground" },
    ],
  },
  {
    trigger: "muted-element",
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
    name: "popver",
    index: ["--popover", "--popover-foreground"],
  },
  {
    name: "muted-element",
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
]
