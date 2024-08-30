import React from 'react';
import styles from './__credits.scss'; // Importation correcte des styles
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Credits() { // Nom du composant avec une majuscule
  return (
    <p className={styles.creditTitle}> {/* Utilisation de styles.creditTitle */}
      Built by
      <a href="https://www.github.com/Erik-42" target="_blank" rel="noopener noreferrer">
        <i FontAwesome icon={faGithub}></i> {/* Assurez-vous que FontAwesome est correctement importé */}
        Erik-42
      </a>
    </p>
  );
}

export default Credits;
