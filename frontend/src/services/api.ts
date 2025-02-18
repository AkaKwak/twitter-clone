/**
 * Configuration principale d'Axios pour l'application
 * Gère la configuration de base et les intercepteurs pour les requêtes API
 */
import axios from 'axios';

// Création d'une instance Axios avec la configuration de base
const api = axios.create({
  baseURL: 'http://localhost:1337/api', // URL de base de l'API Strapi
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Intercepteur pour ajouter automatiquement le token JWT aux requêtes
 * Vérifie la présence d'un token dans le localStorage et l'ajoute aux headers
 */
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('jwt');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api; 