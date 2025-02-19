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
    const response = await api.get('/tweets?populate=*');
    
    const sampleTweet = response.data.data[0];
    console.log('=== TWEET AVEC RELATIONS ===');
    console.log(JSON.stringify(sampleTweet, null, 2));
    console.log('=== RELATIONS ===');
    console.log('Author:', sampleTweet.author);
    console.log('=========================');

    return response.data.data.map((tweet: any) => {
      // Récupérer l'auteur depuis la relation
      const authorData = tweet.author;
      return {
        id: tweet.id,
        content: tweet.content,
        timestamp: tweet.createdAt,
        author: authorData ? authorData.username : 'Anonyme'
      };
    });
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
    // Récupérer l'ID de l'utilisateur connecté
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    const response = await api.post('/tweets', {
      data: {
        content,
        timestamp: new Date().toISOString(),
        author: user.id  // Associer l'auteur au tweet
      }
    });
    return {
      id: response.data.data.id,
      content: response.data.data.content,
      timestamp: response.data.data.createdAt,
      author: response.data.data.author || 'Anonyme'
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