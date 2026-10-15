# AuraFlow

> Une interface de gestion commerciale claire, modulaire et personnalisable.

AuraFlow est un projet front-end en cours de développement. Il pose les bases d’une interface destinée à organiser les activités commerciales, les relations avec les clients et fournisseurs, ainsi que la gestion des produits et des stocks.

**Statut : prototype d’interface.** Le dépôt contient aujourd’hui le socle visuel et les premiers outils de personnalisation. Les écrans métier, les données réelles et la connexion à un backend restent à développer. Certains éléments visibles sont donc encore des maquettes ou des points d’entrée sans action métier.

## Périmètre envisagé

Le projet prévoit plusieurs domaines de gestion :

- **Espace de travail** : tableau de bord, indicateurs, planification, tâches et rapports
- **Relations** : familles, articles, clients et fournisseurs
- **Gestion commerciale** : achats, ventes, stocks, inventaires, caisses et logistique
- **Administration** : paramètres et gestion de l’entreprise

Le prototype comprend une barre latérale repliable, un en-tête de navigation, plusieurs palettes prédéfinies et un premier aperçu de personnalisation des couleurs.

## État des fonctionnalités

| Domaine                                  | État actuel                     |
| ---------------------------------------- | ------------------------------- |
| Structure générale de l’application      | Présente                        |
| Navigation latérale par rubriques        | Présente, pages métier à relier |
| Thèmes clair, sombre et système          | Présents                        |
| Palettes et aperçu des couleurs          | En cours de réalisation         |
| Données et opérations commerciales       | À développer                    |
| API, base de données et authentification | À intégrer                      |

## Technologies

- React 19 et TypeScript
- Vite 8
- Tailwind CSS 4
- Base UI et composants inspirés de shadcn/ui
- Zustand pour la gestion de l’état côté interface
- Lucide pour les icônes

## Prérequis

- Node.js dans une version compatible avec Vite 8
- npm

## Installation

```bash
git clone https://github.com/Dany-Foster/Aura-FLow.git
cd Aura-FLow
npm install
npm run dev
```

Le serveur de développement affiche l’adresse locale de l’application dans le terminal.

## Commandes disponibles

| Commande            | Description                                             |
| ------------------- | ------------------------------------------------------- |
| `npm run dev`       | Lance le serveur de développement.                      |
| `npm run build`     | Vérifie le projet et génère les fichiers de production. |
| `npm run preview`   | Prévisualise localement la version de production.       |
| `npm run lint`      | Analyse le code avec ESLint.                            |
| `npm run typecheck` | Vérifie les types TypeScript.                           |
| `npm run format`    | Formate les fichiers TypeScript et TSX avec Prettier.   |

## Structure du projet

```text
src/
├── components/
│   ├── Custom/     Composants propres à AuraFlow
│   └── ui/         Composants d’interface réutilisables
├── hooks/          Hooks et gestion de l’état
├── lib/            Types, données et configuration des thèmes
├── management-state/
├── App.tsx         Composition principale de l’application
└── main.tsx        Point d’entrée React
```

## Prochaines étapes envisagées

- Relier les éléments de navigation à des pages métier
- Construire un premier parcours complet, par exemple la création d’un produit et le suivi du stock
- Connecter l’interface à une API et à des données persistantes
- Finaliser la création, l’application et l’enregistrement des thèmes personnalisés
- Ajouter des tests et une documentation de contribution

## Contribution

Les retours sont les bienvenus. Pour faciliter l’examen d’une proposition, décrivez le besoin auquel elle répond, le comportement attendu et les parties de l’interface concernées.
