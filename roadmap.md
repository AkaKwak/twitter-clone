# Roadmap - Twitter Clone Project

## 1. Configuration initiale ✅
- [x] Initialiser Strapi backend
- [x] Configurer l'environnement de développement
- [x] Créer le projet React frontend avec Vite
- [x] Installer les dépendances essentielles
  - react-router-dom
  - jotai
  - axios
  - styled-components

## 2. Backend (Strapi) Setup ✅
- [x] Configurer les collections de base:
  - Tweet: 
    ```
    content: text
    timestamp: datetime
    ```
- [x] Configurer JWT et Permissions
  - [x] Activer JWT authentication
  - [x] Définir les rôles (Public/Authenticated)
  - [x] Configurer les permissions par collection
- [x] Tester les endpoints API de base
  - [x] POST /tweets (création)
  - [x] GET /tweets (liste)
  - [ ] Relations et endpoints avancés (à faire plus tard)

## 3. Frontend Architecture
- [x] Structure des dossiers
  ```
  src/
    components/
    features/
    hooks/
    services/
    store/
    utils/
  ```
- [x] Configuration des services API
  - [x] Setup Axios
  - [x] Service tweets.ts
- [x] React Router Setup
  ```jsx
  routes = [
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> }
  ]
  ```
- [x] Jotai Store Setup
  ```jsx
  authAtom
  tweetsAtom
  ```

## 4. Features Core (MVP)
### 4.1 Tweets ✅
- [x] Affichage des tweets
  - [x] Liste des tweets
  - [x] Composant Tweet individuel
  - [ ] Page détaillée par tweet
  - [x] Gestion des erreurs d'affichage
- [x] Création de tweets
  - [x] Formulaire de création
  - [x] Validation basique
  - [x] Feedback utilisateur (succès/erreur)
  - [ ] Validation avancée (longueur, contenu)

### 4.2 Authentication ✅
- [x] Login/Register
  - [x] Formulaire de login
  - [x] Gestion basique du token JWT
  - [x] Gestion des erreurs de connexion
  - [ ] Page de création de compte
  - [ ] Validation des champs
- [x] Protected Routes
  - [x] Composant wrapper
  - [x] Redirection si non authentifié
  - [ ] Gestion expiration token
- [ ] Profil utilisateur
  - [ ] Page profil
  - [ ] Modification email/password
  - [ ] Avatar utilisateur

### 4.3 Fonctionnalités CRUD 🚧
- [x] Supprimer un tweet
  - [x] Ajouter un bouton de suppression
  - [x] Confirmation de suppression
  - [x] Vérification propriétaire
- [ ] Modifier un tweet ⬅️ PROCHAINE ÉTAPE
  - Mode édition inline
  - Validation du contenu
- [ ] Pagination des tweets
  - Limite par page
  - Bouton "Charger plus"

## 5. Features Additionnelles (Phase 2)
### 5.1 Relations et Interactions
- [ ] Système Author
  - Relation User-Tweet
  - Affichage de l'auteur
- [ ] Likes
  - Relation many-to-many
  - Toggle like/unlike
- [ ] Comments
  - CRUD commentaires
  - Nested comments

## 6. UI/UX 🚧
- [ ] Styled Components Setup
  - Thème global
  - Composants de base
- [ ] Responsive Design
  - Mobile-first
  - Breakpoints
- [x] Loading States
  - [x] États de chargement basiques
  - [x] Feedback utilisateur
  - [ ] Skeletons
  - [ ] Spinners
- [x] Error Handling
  - [x] Messages d'erreur
  - [x] Toast notifications
  - [ ] Error boundaries

## 7. Optimisations
- [ ] Performance
  - Pagination/Infinite scroll
  - Caching avec Jotai
- [ ] Tests
  - Unit tests
  - Integration tests

## Notes
- Approche MVP first : d'abord les fonctionnalités de base
- Relations complexes (author, likes) reportées à la phase 2
- Focus sur la stabilité des features implémentées

## Stack Technique
- Frontend:
  - React (Vite)
  - React Router v6
  - Jotai
  - Axios
  - CSS Modules/Styled Components

- Backend:
  - Strapi
  - SQLite (développement)
  - JWT Authentication

## Notes Importantes
- Suivre les bonnes pratiques React
- Maintenir une structure de code propre
- Documenter les composants et fonctions importantes
- Utiliser le versioning Git avec des commits clairs
- Tester régulièrement les fonctionnalités

## Ressources Utiles
- Documentation React Router
- Documentation Jotai
- Documentation Strapi
- Documentation JWT

## Technologies et Principes Clés

### JWT (JSON Web Tokens)
- **Principe** : Méthode sécurisée pour transmettre des informations entre parties
- **Structure** : 
  - Header (algorithme + type)
  - Payload (données)
  - Signature (vérification)
- **Utilisation** :
  - Authentication des requêtes API
  - Stockage sécurisé dans localStorage/cookies
  - Gestion des sessions sans état (stateless)
- **Bonnes pratiques** :
  - Expiration courte des tokens
  - Refresh tokens pour renouvellement
  - Stockage sécurisé côté client

### React Router (v6)
- **Principe** : Gestion du routing côté client
- **Concepts clés** :
  - Routes imbriquées
  - Outlet pour le nested routing
  - Hooks (useNavigate, useParams)
  - Protected Routes avec authentication
- **Nouveautés v6** :
  - Routes déclaratives
  - Auto-nested routes
  - Meilleure gestion des layouts

### Jotai
- **Principe** : Gestion d'état atomique pour React
- **Concepts clés** :
  - Atoms (unités d'état)
  - Dérivés (computed values)
  - Async atoms
  - Provider optionnel
- **Avantages** :
  - Performance optimisée
  - Pas de re-renders inutiles
  - Simplicité vs Redux/Context

### Strapi
- **Principe** : Headless CMS avec API REST/GraphQL
- **Fonctionnalités clés** :
  - API Builder automatique
  - Système de permissions granulaire
  - Authentication intégrée
  - Media Library
- **Sécurité** :
  - RBAC (Role Based Access Control)
  - Sanitization des entrées
  - Rate limiting
  - CORS configuration

### Architecture Recommandée
- **Frontend** :
  - Architecture par features
  - Components atomiques
  - Custom hooks pour la logique
  - Services pour l'API
- **State Management** :
  - Atoms globaux (auth, theme)
  - Atoms locaux par feature
  - Persistence avec localStorage
- **Sécurité** :
  - Intercepteurs Axios
  - Validation des données
  - Gestion des erreurs centralisée 