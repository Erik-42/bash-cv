// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App.jsx';  // Vérifiez que le chemin vers App est correct
// import './src/css/index.module.scss';  // Assurez-vous que ce chemin est correct
// import './src/css/fontawesome.js'; // Importation de FontAwesome

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')  // Assurez-vous que l'ID 'root' est bien présent dans index.html
// );

//=========== Nouvelle méthode Node 18.0.0 à voir====================
import React from 'react';
import { createRoot } from 'react-dom/client'; // Importez createRoot depuis 'react-dom/client'
import App from './App.jsx'; // Assurez-vous que ce chemin est correct
import './src/css/__index.scss';  // Assurez-vous que ce chemin est correct
import './src/css/fontawesome.js'; // Importation de FontAwesome

// Sélectionnez l'élément racine
const rootElement = document.getElementById('root');

// Créez un root avec createRoot
const root = createRoot(rootElement);

// Rendez l'application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

