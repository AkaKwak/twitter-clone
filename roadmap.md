# Roadmap - Twitter Clone Project

## 1. Configuration initiale
- [x] Initialiser Strapi backend
  - Utiliser SQLite en développement
  - Vérifier l'accès à l'admin panel
- [x] Configurer l'environnement de développement
- [x] Créer le projet React frontend avec Vite
  ```bash
  pnpm create vite frontend --template react
  ```
- [x] Installer les dépendances essentielles
  - react-router-dom (routing)
  - jotai (state management)
  - axios (API calls)
  - styled-components (styling)

## 2. Backend (Strapi) Setup
- [x] Configurer les collections avec le Content-Type Builder:
  - Tweet: 
    ```
    content: text
    timestamp: datetime
    author: relation with User
    ```
  - Comment, Like, Follow (relations)
- [x] Configurer JWT et Permissions
  - Activer JWT authentication
  - Définir les rôles (Public/Authenticated)
  - Configurer les permissions par collection
- [ ] Tester les endpoints API avec Postman/Insomnia
  - CRUD Tweets
  - Auth endpoints
  - Relations endpoints

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
- [ ] React Router Setup
  ```jsx
  routes = [
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '/profile/:id', element: <Profile /> }
  ]
  ```
- [ ] Jotai Store Setup
  ```jsx
  // Atoms de base
  authAtom
  userAtom
  tweetsAtom
  ```
- [ ] Service API Setup
  - Axios instance configuration
  - Intercepteurs pour JWT
  - Handlers d'erreur

## 4. Authentication
- [ ] JWT Implementation
  - Login/Register forms
  - Token storage (localStorage)
  - Refresh token logic
- [ ] Protected Routes
  - Auth middleware
  - Redirect logic
- [ ] User Session
  - Persistence
  - Auto login
  - Token refresh

## 5. Features Core (avec Jotai + API)
### 5.1 Tweets
- [ ] Tweet Creation
  - Form component
  - API integration
  - Optimistic updates
- [ ] Tweet Display
  - Timeline component
  - Infinite scroll
  - Real-time updates

### 5.2 Social Interactions
- [ ] Follow System
  - Follow/Unfollow API
  - Followers/Following lists
- [ ] Like System
  - Like/Unlike API
  - Counter updates
- [ ] Comments
  - Nested comments
  - Real-time updates

## 6. State Management Avancé
- [ ] Jotai Patterns
  - Computed atoms pour le feed
  - Async atoms pour l'API
  - localStorage persistence
- [ ] Cache Strategy
  - Tweet cache
  - User cache
  - Invalidation strategy

## 7. UI/UX Enhancement
- [ ] Components Réutilisables
  - Button, Input, Card
  - Loading states
  - Error boundaries
- [ ] Responsive Design
  - Mobile-first
  - Breakpoints
  - Layout components

## 8. Optimisation & Sécurité
- [ ] Performance
  - Lazy loading routes
  - Image optimization
  - Memoization
- [ ] Sécurité
  - XSS protection
  - CORS configuration
  - Input validation

## 9. Testing & Deployment
- [ ] Tests
  - Unit tests (components)
  - Integration tests (features)
  - API tests
- [ ] Deployment
  - Build optimization
  - ENV configuration
  - Deploy frontend/backend

## Ressources par Feature
### Authentication
- JWT.io pour debug tokens
- Strapi Auth documentation
- React Router Auth examples

### State Management
- Jotai documentation et patterns
- Atoms patterns examples
- localStorage persistence

### API Integration
- Strapi REST API docs
- Axios interceptors setup
- Error handling patterns

### UI/UX
- Styled-components patterns
- Responsive design guides
- Animation examples

Suivez cette roadmap étape par étape, en vous assurant de bien comprendre et tester chaque feature avant de passer à la suivante.

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