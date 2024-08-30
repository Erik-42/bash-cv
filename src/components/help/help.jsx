import React from 'react';
import styles from './__help.scss'; // Assurez-vous que le fichier help.scss existe

export function Help() {
  return (
    <div className={styles.helpContainer}>
      <h2 className={styles.helpTitle}>Help:</h2>
      <table className={styles.helpTable}>
        <tbody>
          <tr>
            <td>all</td>
            <td>Show me all the information<br />Montre moi toutes les informations</td>
          </tr>
          <tr>
            <td>about</td>
            <td>Everything you ever wanted to know about Erik Mesen<br />Tout ce que vous avez toujours voulu savoir sur moi</td>
          </tr>
          <tr>
            <td>skills</td>
            <td>Discover my skills<br />Découvrez mes compétences</td>
          </tr>
          <tr>
            <td>projects</td>
            <td>Discover the projects I have completed<br />Découvrez les projets que j'ai réalisés</td>
          </tr>
          <tr>
            <td>links</td>
            <td>My different social media profiles<br />Mes différents profils sur les réseaux sociaux</td>
          </tr>
          <tr>
            <td>contact</td>
            <td>How to contact me<br />Comment me contacter</td>
          </tr>
          <tr>
            <td>cv</td>
            <td>Download my CV<br />Téléchargez mon CV</td>
          </tr>
          <tr>
            <td>rickroll</td>
            <td>Never Gonna Give You Up</td>
          </tr>
          <tr>
            <td>credits</td>
            <td>Credits for the site<br />Crédits pour le site</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
