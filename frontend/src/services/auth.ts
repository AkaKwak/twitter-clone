import api from './api';

interface LoginCredentials {
  identifier: string;
  password: string;
}

interface AuthResponse {
  jwt: string;
  user: {
    id: number;
    username: string;
    email: string;
  };
}

export const authService = {
  login: async (credentials: LoginCredentials) => {
    const response = await api.post<AuthResponse>('/auth/local', credentials);
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('jwt');
  }
}; 