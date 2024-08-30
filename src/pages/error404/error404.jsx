import React from 'react';
import styles from './error404.module.scss'; // Import des styles de la page d'erreur

function Error404() {
  return (
    <div className={styles.error404}>
      <h1>404 - Page non trouvée</h1>
      <p>La page que vous cherchez n'existe pas.</p>
      <p>Il semble que la page que vous recherchez est introuvable. Peut-être avez-vous fait une erreur de frappe ou cliqué sur un lien brisé.</p>
      <a href="/" className={styles.homeButton}>Retour à la page d'accueil</a>
    </div>
  );
}

export default Error404;
