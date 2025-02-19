/**
 * Définition des atoms Jotai pour la gestion d'état globale
 */
import { atom } from 'jotai';
import { Tweet } from '../services/tweets';

// Interface pour l'état global des tweets
interface TweetsState {
  items: Tweet[];
  loading: boolean;
  error: string | null;
}

// État initial
const initialTweetsState: TweetsState = {
  items: [],
  loading: false,
  error: null
};

export const tweetsAtom = atom(initialTweetsState);

interface User {
  id: number;
  username: string;
  email: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialAuthState: AuthState = {
  user: null,
  token: localStorage.getItem('jwt'),
  loading: false,
  error: null
};

export const authAtom = atom(initialAuthState);

// Atom dérivé pour le chargement des tweets
export const loadingAtom = atom<boolean>(false); 