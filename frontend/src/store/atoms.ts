/**
 * Définition des atoms Jotai pour la gestion d'état globale
 */
import { atom } from 'jotai';
import { Tweet } from '../services/tweets';

// Atom pour stocker l'état d'authentification
export const authAtom = atom<string | null>(localStorage.getItem('jwt'));

// Atom pour stocker la liste des tweets
export const tweetsAtom = atom<Tweet[]>([]);

// Atom dérivé pour le chargement des tweets
export const loadingAtom = atom<boolean>(false); 