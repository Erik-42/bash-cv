import './processor.module.scss'; // Import des styles pour le processeur

import { help } from '../../components/help/help';
import { about } from '../../components/about/about';
import { skills } from '../../components/skills/skills';
import { resumeProjects, projects } from '../../components/projects/projects';
import { links } from '../../components/links/links';
import { contact } from '../../components/contacts/contacts';
import { cv, cvDownload } from '../../components/cv/cv';
import { rickroll } from '../../components/rickroll/rickroll';
import { credits } from '../../components/credits/credits';

function commandProcessor(event) {
  if (event.key === 'Enter') {
    const txtInput = event.target.value.trim().toLowerCase(); // Utiliser event.target pour obtenir la valeur
    const commands = {
      help,
      all: () => about() + '<br><br>' + skills() + '<br><br>' + resumeProjects() + '<br><br>' + links() + '<br><br>' + contact() + '<br><br>' + cvDownload(),
      about,
      skills,
      projects,
      links,
      contact,
      cv,
      rickroll,
      credits
    };

    const injectedElement = document.getElementById('injected');
    injectedElement.innerHTML = commands[txtInput] ? commands[txtInput]() : help();
    event.target.value = ''; // Réinitialiser la valeur de l'input
  }
}

// Assurez-vous que le DOM est entièrement chargé avant d'ajouter l'écouteur d'événements
document.addEventListener('DOMContentLoaded', () => {
  const txtBox = document.getElementById('txtBox');
  if (txtBox) {
    txtBox.addEventListener('keydown', commandProcessor);
  }
});
