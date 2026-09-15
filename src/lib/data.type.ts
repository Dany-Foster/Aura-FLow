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
