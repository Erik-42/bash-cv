import React from 'react';
import './__error404.scss'; // Import des styles de la page d'erreur

function Error404() {
  return (
    <div className='error404'>
      <h1>404 - Page non trouvée</h1>
      <p>La page que vous cherchez n'existe pas.</p>
      <p>Il semble que la page que vous recherchez est introuvable. Peut-être avez-vous fait une erreur de frappe ou cliqué sur un lien brisé.</p>
      <a href="/" className='homeButton'>Retour à la page d'accueil</a>
    </div>
  );
}

export default Error404;
