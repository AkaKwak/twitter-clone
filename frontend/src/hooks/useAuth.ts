import { useAtom } from 'jotai';
import { authAtom } from '../store/atoms';
import { authService } from '../services/auth';
import { useNavigate } from 'react-router-dom';

export function useAuth() {
  const [authState, setAuthState] = useAtom(authAtom);
  const navigate = useNavigate();

  const login = async (identifier: string, password: string) => {
    setAuthState(state => ({ ...state, loading: true, error: null }));
    try {
      const response = await authService.login({ identifier, password });
      localStorage.setItem('jwt', response.jwt);
      setAuthState({
        user: response.user,
        token: response.jwt,
        loading: false,
        error: null
      });
      navigate('/');
    } catch (error) {
      setAuthState(state => ({
        ...state,
        loading: false,
        error: 'Invalid credentials'
      }));
    }
  };

  const logout = () => {
    authService.logout();
    setAuthState({
      user: null,
      token: null,
      loading: false,
      error: null
    });
  };

  return {
    user: authState.user,
    token: authState.token,
    loading: authState.loading,
    error: authState.error,
    login,
    logout,
    isAuthenticated: !!authState.token
  };
} 