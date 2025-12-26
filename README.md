# SmartCampus - Université Privée de Fès

Site web pour le smart campus de l'Université Privée de Fès avec portail étudiant et interface d'administration.

## 🚀 Déploiement sur GitHub Pages

### Configuration requise

1. **Activer GitHub Pages dans votre repository :**
   - Allez dans `Settings` > `Pages`
   - Source : Sélectionnez `GitHub Actions`

2. **Le nom du repository doit être :** `smartcampuswebproject`

### Déploiement automatique

Le projet se déploie automatiquement sur GitHub Pages à chaque push sur la branche `main`.

Le workflow GitHub Actions :
- ✅ Installe les dépendances
- ✅ Build le projet avec Vite
- ✅ Déploie sur GitHub Pages

### Accès

Une fois déployé, le site sera accessible à :
```
https://[votre-username].github.io/smartcampuswebproject/
```

## 🔐 Identifiants de test

### Portail Étudiant
- **Username :** 11111
- **Password :** 11111

### Portail Admin
- **Username :** 00000
- **Password :** 00000

## 🛠️ Développement local

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour production
npm run build
```

## 📁 Structure du projet

```
smartcampuswebproject/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions workflow
├── public/
│   ├── logo-upf.svg         # Logo UPF
│   └── .nojekyll            # Pour GitHub Pages
├── src/
│   ├── app/
│   │   ├── components/      # Tous les composants React
│   │   │   ├── admin/       # Panel d'administration
│   │   │   └── student/     # Portail étudiant
│   │   └── App.tsx          # Composant principal
│   └── styles/              # Fichiers CSS
└── vite.config.ts           # Configuration Vite avec base path
```

## ✨ Fonctionnalités

### Portail Étudiant
- 📅 Emploi du temps
- 📚 Consultation des cours
- 📄 Demande de documents
- 🏢 Réservation de salles
- 📊 Consultation des notes
- 👤 Gestion du profil

### Portail Admin
- 📊 Tableau de bord avec statistiques
- 👥 Gestion des étudiants (CRUD)
- 📚 Gestion des cours
- 📋 Gestion des demandes
- 📈 Statistiques détaillées

### Site Public
- 🏠 Page d'accueil
- 🎓 Services du campus
- 💡 Innovation
- 📰 Actualités
- 💬 Témoignages
- ❓ FAQ interactive
- 📞 Contact

## 🔧 Technologies

- **React 18** - Framework UI
- **TypeScript** - Typage statique
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **Lucide React** - Icônes
- **GitHub Actions** - CI/CD

## 📝 Notes importantes

- Le fichier `.nojekyll` dans `/public` est nécessaire pour que GitHub Pages serve correctement les assets
- Le `base: '/smartcampuswebproject/'` dans `vite.config.ts` doit correspondre au nom de votre repository
- Les workflows GitHub Actions nécessitent les permissions Pages activées dans les settings du repository

## 🐛 Résolution des problèmes

### La page ne s'affiche pas après le déploiement

1. Vérifiez que GitHub Pages est activé dans Settings > Pages
2. Assurez-vous que la source est bien `GitHub Actions`
3. Vérifiez que le workflow s'est exécuté sans erreurs dans l'onglet `Actions`
4. Le nom du repository doit être exactement `smartcampuswebproject`

### Erreur 404 sur les assets

- Vérifiez que `base: '/smartcampuswebproject/'` dans `vite.config.ts` correspond au nom de votre repository
- Assurez-vous que le fichier `.nojekyll` est présent dans `/public`

## 📄 Licence

© 2024 SmartCampus - Université Privée de Fès
