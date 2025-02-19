/**
 * Composant racine de l'application
 * Configure le routeur et les providers globaux
 */
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'jotai';
import { router } from './routes';

function App() {
  return (
    // Fournit la configuration du routeur et le state management à l'application
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App; 