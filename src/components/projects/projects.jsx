import React from 'react';
import   './__projects.scss'; // Assurez-vous que ce fichier existe

export default function ResumeProjects() {
  return (
    <div className='projectsContainer'>
      <h2 className='projectsTitle'>Projects:</h2>
      <p>Projets Personnel:</p>
      <p>Une application de gestion de tâches personnelle utilisant React et Node.js.</p>
      <p>Projet Professionnel:</p>
      <p>Développement d'une plateforme d'e-learning pour une entreprise utilisant Moodle et PHP.</p>
    </div>
  );
}

export function Projects() {
  return (
    <div className='projectsContainer'>
      <h2 className='projectsTitle'>Projects:</h2>
      <ul className='projectsList'>
        <li>
          Projet personnel 1:<br />
          Une application de gestion de tâches personnelle utilisant React et Node.js.
        </li>
        <li>
          Projet Professionnel:<br />
          Développement d'une plateforme d'e-learning pour une entreprise utilisant Moodle et PHP.
        </li>
      </ul>
    </div>
  );
}
