import React from 'react';
import styles from './skills.module.scss'; // Assurez-vous que le fichier CSS Modules existe

export function Skills() {
  return (
    <div>
      <h2 className={styles.skillsTitle}>Skills:</h2>
      <div className={styles.skillsContainer}>
        <div className={styles.skillsSection}>
          <h3 className={styles.skillsSubTitle}>Frontend:</h3>
          <table className={styles.skillsTable}>
            <tbody>
              <tr>
                <td>HTML</td>
                <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>
              </tr>
              <tr>
                <td>CSS</td>
                <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>
              </tr>
              <tr>
                <td>JavaScript</td>
                <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>
              </tr>
              <tr>
                <td>React</td>
                <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>
              </tr>
              <tr>
                <td>Redux</td>
                <td>▰▰▰▰▰▱▱▱▱▱ 50%</td>
              </tr>
              <tr>
                <td>Tailwind</td>
                <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>
              </tr>
              <tr>
                <td>Python</td>
                <td>▰▰▰▰▱▱▱▱▱▱ 40%</td>
              </tr>
            </tbody>
          </table>
        </div>
<div className={styles.skillsSection}>
          <h3 className={styles.skillsSubTitle}>Backend:</h3>
          <table className={styles.skillsTable}>
            <tbody>
              <tr>
                <td>Node.js</td>
                <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>
              </tr>
              <tr>
                <td>PHP</td>
                <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>
              </tr>
              <tr>
                <td>Apache</td>
                <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>
              </tr>
              <tr>
                <td>MySQL/MariaDB</td>
                <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>
              </tr>
              <tr>
                <td>MongoDB</td>
                <td>▰▰▰▰▰▱▱▱▱▱ 50%</td>
              </tr>
              <tr>
                <td>NGinx</td>
                <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.skillsSection}>
          <h3 className={styles.skillsSubTitle}>Design:</h3>
          <table className={styles.skillsTable}>
            <tbody>
              <tr>
                <td>Figma</td>
                <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>
              </tr>
              <tr>
                <td>PhotoShop</td>
                <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>
              </tr>
              <tr>
                <td>SolidWorks</td>
                <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>
              </tr>
              <tr>
                <td>InkScape</td>
                <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.skillsSection}>
          <h3 className={styles.skillsSubTitle}>Tools:</h3>
          <table className={styles.skillsTable}>
            <tbody>
              <tr>
                <td>WordPress</td>
                <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>
              </tr>
              <tr>
                <td>Joomla</td>
                <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>
              </tr>
              <tr>
                <td>Drupal</td>
                <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>
              </tr>
              <tr>
                <td>Jira</td>
                <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>
              </tr>
              <tr>
                <td>Notion</td>
                <td>▰▰▰▰▰▱▱▱▱▱ 50%</td>
              </tr>
              <tr>
                <td>Draw.io</td>
                <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Other sections can be added here */}
      </div>
    </div>
  );
}
