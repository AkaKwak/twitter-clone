/**
 * Composant racine de l'application
 * Configure le routeur et les providers globaux
 */
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

function App() {
  return (
    // Fournit la configuration du routeur à l'application
    <RouterProvider router={router} />
  );
}

export default App; 