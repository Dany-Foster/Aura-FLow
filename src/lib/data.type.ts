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
      url: "",
      icon: LayoutDashboard,
    },
    {
      id: 2,
      titre: "Notifications",
      url: "notification",
      icon: BellRing,
    },
    {
      id: 3,
      titre: "KPIs",
      url: "kpis",
      icon: ChartNoAxesCombined,
    },
    {
      id: 4,
      titre: "Planification",
      url: "planification",
      icon: CalendarDays,
    },
    {
      id: 5,
      titre: "Tâches",
      url: "taches",
      icon: ListTodo,
    },
    {
      id: 6,
      titre: "Rapport et Analyse",
      url: "rapports-analyse",
      icon: FileChartLine,
    },
    {
      id: 7,
      titre: "Activités commerciales",
      url: "activites-commerciales",
      icon: SquareActivity,
    },
    {
      id: 8,
      titre: "Validations",
      url: "validations",
      icon: BadgeCheck,
    },
  ],
  navRelation: [
    {
      id: 1,
      titre: "Familles",
      url: "Familles",
      icon: Blocks,
    },
    {
      id: 2,
      titre: "Articles",
      url: "Articles",
      icon: Package,
    },
  ],
  navCompte: [
    {
      id: 1,
      titre: "Clients",
      url: "Clients",
      icon: LayoutDashboard,
    },
    {
      id: 2,
      titre: "Fournisseurs",
      url: "Fournisseurs",
      icon: LayoutDashboard,
    },
  ],
  navGesCom: [
    {
      id: 1,
      titre: "Achat",
      url: "Achat",
      icon: ShoppingCart,
    },
    {
      id: 2,
      titre: "Vente",
      url: "Vente",
      icon: Store,
    },
    {
      id: 3,
      titre: "Stock",
      url: "Stock",
      icon: Warehouse,
    },
    {
      id: 4,
      titre: "Inventaires",
      url: "Inventaires",
      icon: ShelvingUnit,
    },
    {
      id: 5,
      titre: "Caisses",
      url: "Caisses",
      icon: Archive,
    },
    {
      id: 6,
      titre: "Logistiques",
      url: "Logistiques",
      icon: Van,
    },
  ],
  navParam: [
    {
      id: 1,
      titre: "Paramètres",
      url: "Paramètres",
      icon: Settings2,
    },
    {
      id: 2,
      titre: "Administration",
      url: "Administration",
      icon: UserCog,
    },
  ],
}

export const tabs = [
  { value: "Couleur", label: "Couleur" },
  { value: "Chart", label: "Couleurs des graphiques" },
  { value: "Radius-shadow", label: "Coin arrondie et shadow" },
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

export const DateList = [
  { label: "Aujourd'hui", value: "T" },
  { label: "Hier", value: "H" },
  { label: "Cette semaine", value: "S" },
  { label: "Il y a 7 jours", value: "-7J" },
  { label: "Il y a 28 jours", value: "-28J" },
  { label: "Mois dernier", value: "-M" },
  { label: "L'année dernière", value: "-A" },
]
