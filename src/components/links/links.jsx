import React from 'react';
import   './__links.scss'; // Assurez-vous que ce fichier existe
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Importer les icônes FontAwesome via react-icons

export default function Links() {
  return (
    <div className='links'>
      <h2 className='links__title'>Links:</h2>
      <ul className='links__list'>
        <li>
          <a href="https://www.linkedin.com/in/erik-mesen/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='icon' /> LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/Erik-42" target="_blank" rel="noopener noreferrer">
            <FaGithub className='icon' /> Github
          </a>
        </li>
      </ul>
    </div>
  );
}

