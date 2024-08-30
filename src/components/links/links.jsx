import React from 'react';
import styled from './__links.scss'; // Assurez-vous que ce fichier existe
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Importer les icônes FontAwesome via react-icons

function Links() {
  return (
    <div className={styled.linksContainer}>
      <h2 className={styled.linksTitle}>Links:</h2>
      <ul className={styled.linksList}>
        <li>
          <a href="https://www.linkedin.com/in/erik-mesen/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={styled.icon} /> LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/Erik-42" target="_blank" rel="noopener noreferrer">
            <FaGithub className={styled.icon} /> Github
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Links;
