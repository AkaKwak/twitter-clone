/**
 * Configuration des routes de l'application
 * Définit la structure de navigation de l'application
 */
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';

// Définition des routes avec React Router
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]); 