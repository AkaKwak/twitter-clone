/**
 * Service de gestion des tweets
 */
import api from './api';

/**
 * Interface décrivant la structure d'un tweet
 */
export interface Tweet {
  id: number;
  content: string;
  timestamp: string;
  author: string;
}

export const tweetService = {
  /**
   * Récupère tous les tweets depuis l'API
   * @returns Promise contenant la liste des tweets
   */
  getAll: async () => {
    const response = await api.get('/tweets');
    console.log('Response from API:', response.data);
    
    if (!response.data?.data) {
      console.error('Invalid response format:', response.data);
      return [];
    }

    return response.data.data.map((tweet: any) => ({
      id: tweet.id,
      content: tweet.content,
      timestamp: tweet.createdAt,
      author: tweet.author?.username || 'Anonyme'
    }));
  },

  getById: async (id: number) => {
    const response = await api.get(`/tweets/${id}`);
    // Transformer un seul tweet
    return {
      id: response.data.data.id,
      content: response.data.data.attributes.content,
      timestamp: response.data.data.attributes.createdAt
    };
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
        timestamp: new Date().toISOString()
      }
    });
    return {
      id: response.data.data.id,
      content: response.data.data.content,
      timestamp: response.data.data.createdAt,
      author: response.data.data.author?.username || 'Anonyme'
    };
  },

  update: async (id: number, content: string) => {
    const response = await api.put(`/tweets/${id}`, {
      data: { content }
    });
    // Transformer le tweet mis à jour
    return {
      id: response.data.data.id,
      content: response.data.data.attributes.content,
      timestamp: response.data.data.attributes.createdAt
    };
  },

  delete: async (id: number) => {
    return api.delete(`/tweets/${id}`);
  }
};