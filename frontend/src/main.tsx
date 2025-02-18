/**
 * Point d'entrée de l'application
 * Configure le rendu React et les providers globaux
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Création du point de montage React
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
); 