# Weather App

Une application météo moderne construite avec React, TypeScript et Vite.

## 🚀 Fonctionnalités

- Recherche de la météo par ville
- Affichage des conditions météo actuelles : température, description, icône
- Interface responsive et moderne
- Utilisation de composants UI réutilisables

## 🛠️ Technologies

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [shadcn/ui](https://ui.shadcn.com/) pour les composants UI
- [lucide-react](https://lucide.dev/) pour les icônes
- [pnpm](https://pnpm.io/) pour la gestion des dépendances

## 📦 Installation

```bash
pnpm install
```

## 🏃‍♂️ Démarrer le projet

```bash
pnpm dev
```

L’application sera accessible sur [http://localhost:3000](http://localhost:3000).

## ✨ Exemple d’utilisation

```tsx
import { WeatherCard } from "./src/components/weather-card"
;<WeatherCard city='Paris' />
```

## 📁 Structure du projet

- `src/components/` : Composants UI
- `src/contexts/` : Contexts React pour la gestion d’état
- `src/types/` : Types TypeScript

## 🤝 Contribuer

1. Fork le repo
2. Crée une branche : `git checkout -b feature/ma-nouvelle-fonctionnalite`
3. Commit tes changements : `git commit -m 'Ajoute une nouvelle fonctionnalité'`
4. Push la branche : `git push origin feature/ma-nouvelle-fonctionnalite`
5. Ouvre une Pull Request

## 📄 Licence

MIT
