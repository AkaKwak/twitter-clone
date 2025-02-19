/**
 * Configuration des routes de l'application
 * Définit la structure de navigation de l'application
 */
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import { ProtectedRoute } from '../components/ProtectedRoute';
import TweetDetail from '../pages/TweetDetail';

// Définition des routes avec React Router
export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute allowPublic>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/tweet/:id',
    element: (
      <ProtectedRoute allowPublic>
        <TweetDetail />
      </ProtectedRoute>
    ),
  },
]); 