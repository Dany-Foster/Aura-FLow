export type PreviewChartKind =
  | "line"
  | "bar"
  | "grouped"
  | "stacked"
  | "pie"
  | "donut"
  | "area"
  | "stacked-area"
  | "combo"
  | "comparison"
  | "stock"
  | "targets"

export type PreviewSeries = {
  name: string
  colorIndex: number
  values: number[]
}

export type PreviewChart = {
  id: string
  title: string
  description: string
  kind: PreviewChartKind
  labels: string[]
  series: PreviewSeries[]
}

export const CHART_PREVIEW_DATA: PreviewChart[] = [
  {
    id: "revenue-trend",
    title: "Chiffre d’affaires mensuel",
    description: "Évolution du chiffre d’affaires et comparaison annuelle",
    kind: "line",
    labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin"],
    series: [
      { name: "2026", colorIndex: 0, values: [34, 42, 38, 57, 61, 73] },
      { name: "2025", colorIndex: 1, values: [29, 35, 44, 43, 52, 57] },
      { name: "Objectif", colorIndex: 6, values: [38, 42, 47, 52, 57, 62] },
    ],
  },
  {
    id: "monthly-sales",
    title: "Ventes par mois",
    description: "Montant facturé, en milliers d’euros",
    kind: "bar",
    labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin"],
    series: [{ name: "Ventes", colorIndex: 0, values: [42, 51, 47, 65, 70, 82] }],
  },
  {
    id: "sales-purchases",
    title: "Ventes et achats",
    description: "Comparaison mensuelle des flux commerciaux",
    kind: "grouped",
    labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin"],
    series: [
      { name: "Ventes", colorIndex: 0, values: [52, 58, 64, 61, 72, 84] },
      { name: "Achats", colorIndex: 3, values: [34, 39, 42, 45, 49, 53] },
    ],
  },
  {
    id: "orders-status",
    title: "Commandes par statut",
    description: "Volume mensuel des commandes enregistrées",
    kind: "stacked",
    labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin"],
    series: [
      { name: "Validées", colorIndex: 9, values: [35, 42, 46, 49, 54, 61] },
      { name: "En attente", colorIndex: 8, values: [14, 17, 12, 18, 16, 13] },
      { name: "Annulées", colorIndex: 10, values: [4, 3, 5, 4, 3, 5] },
    ],
  },
  {
    id: "revenue-category",
    title: "Chiffre d’affaires par catégorie",
    description: "Part de chaque famille dans les ventes",
    kind: "pie",
    labels: ["Équipement", "Services", "Consommables", "Maintenance", "Autres"],
    series: [{ name: "CA", colorIndex: 0, values: [38, 24, 17, 13, 8] }],
  },
  {
    id: "article-family",
    title: "Ventes par famille d’articles",
    description: "Répartition du chiffre d’affaires, en milliers d’euros",
    kind: "donut",
    labels: ["Mobilier", "Informatique", "Fournitures", "Services", "Divers"],
    series: [{ name: "Ventes", colorIndex: 0, values: [31, 25, 19, 16, 9] }],
  },
  {
    id: "revenue-expenses",
    title: "Chiffre d’affaires et dépenses",
    description: "Évolution comparée sur le premier semestre",
    kind: "area",
    labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin"],
    series: [
      { name: "Chiffre d’affaires", colorIndex: 0, values: [42, 48, 55, 53, 68, 77] },
      { name: "Dépenses", colorIndex: 4, values: [28, 32, 35, 38, 41, 45] },
    ],
  },
  {
    id: "category-performance",
    title: "Performance par catégorie",
    description: "Contribution des principales familles de vente",
    kind: "stacked-area",
    labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin"],
    series: [
      { name: "Équipement", colorIndex: 0, values: [18, 22, 21, 26, 30, 34] },
      { name: "Services", colorIndex: 3, values: [12, 13, 17, 15, 18, 20] },
      { name: "Consommables", colorIndex: 5, values: [9, 11, 10, 13, 14, 16] },
    ],
  },
  {
    id: "margin-combo",
    title: "Ventes et taux de marge",
    description: "Montant des ventes et évolution du taux de marge",
    kind: "combo",
    labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin"],
    series: [
      { name: "Ventes", colorIndex: 0, values: [46, 52, 57, 63, 71, 79] },
      { name: "Marge", colorIndex: 8, values: [43, 47, 45, 57, 61, 68] },
    ],
  },
  {
    id: "orders-comparison",
    title: "Suivi des commandes",
    description: "Commandes validées, en attente et annulées",
    kind: "comparison",
    labels: ["Avr", "Mai", "Juin"],
    series: [
      { name: "Validées", colorIndex: 9, values: [148, 162, 181] },
      { name: "En attente", colorIndex: 8, values: [32, 28, 35] },
      { name: "Annulées", colorIndex: 10, values: [12, 9, 11] },
    ],
  },
  {
    id: "stock-levels",
    title: "Niveaux de stock",
    description: "Quantités disponibles pour les articles suivis",
    kind: "stock",
    labels: ["Ordinateur portable", "Écran 27 pouces", "Station d’accueil", "Clavier sans fil"],
    series: [{ name: "En stock", colorIndex: 2, values: [78, 61, 46, 34] }],
  },
  {
    id: "sales-targets",
    title: "Objectifs commerciaux",
    description: "Objectif et résultat réalisé par équipe, en milliers d’euros",
    kind: "targets",
    labels: ["Nord", "Centre", "Sud", "Ouest"],
    series: [
      { name: "Objectif", colorIndex: 7, values: [72, 65, 58, 62] },
      { name: "Réalisé", colorIndex: 0, values: [78, 59, 63, 67] },
    ],
  },
]
