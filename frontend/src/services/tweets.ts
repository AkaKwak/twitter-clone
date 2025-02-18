import api from './api';

export interface Tweet {
  id: number;
  content: string;
  timestamp: string;
  createdAt: string;
  updatedAt: string;
}

export const tweetService = {
  // Récupérer tous les tweets
  getAll: async () => {
    const response = await api.get('/tweets');
    return response.data;
  },

  // Créer un nouveau tweet
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