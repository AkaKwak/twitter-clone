/**
 * Service de gestion des tweets
 * Contient toutes les interactions avec l'API concernant les tweets
 */
import api from './api';

/**
 * Interface décrivant la structure d'un tweet
 */
export interface Tweet {
  id: number;
  content: string;
  timestamp: string;
  createdAt: string;
  updatedAt: string;
}

export const tweetService = {
  /**
   * Récupère tous les tweets depuis l'API
   * @returns Promise contenant la liste des tweets
   */
  getAll: async () => {
    const response = await api.get('/tweets');
    return response.data;
  },

  /**
   * Crée un nouveau tweet
   * @param content - Contenu du tweet
   * @returns Promise contenant le tweet créé
   */
  create: async (content: string) => {
    const response = await api.post('/tweets', {
      data: {
        content,
        timestamp: new Date().toISOString(),
      },
    });
    return response.data;
  },
}; 