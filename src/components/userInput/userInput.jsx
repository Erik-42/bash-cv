import React from "react";
import styles from "./userInput.module.scss"; // Import du module de styles

import { help } from './commands/help';
import { about } from './commands/about';
import { skills } from './commands/skills';
import { projects } from './commands/projects';
import { links } from './commands/links';
import { contact } from './commands/contact';
import { cv } from './commands/cv';
import { rickroll } from './commands/rickroll';
import { credits } from './commands/credits';
import { resumeProjects } from './commands/projects'; // Si nécessaire
import { cvDownload } from './commands/cv'; // Si nécessaire

function UserInput() {
  const commandProcessor = (e) => {
    if (e.key === 'Enter') {
      const txtInput = e.target.value.trim().toLowerCase();
      const commands = {
        help,
        all: () => about() + "<br><br>" + skills() + "<br><br>" + resumeProjects() + "<br><br>" + links() + "<br><br>" + contact() + "<br><br>" + cvDownload(),
        about,
        skills,
        projects,
        links,
        contact,
        cv,
        rickroll,
        credits,
      };

      document.getElementById("injected").innerHTML = commands[txtInput]
        ? commands[txtInput]()
        : help();
      e.target.value = "";
    }
  };

  return (
    <div id="userInput" className={styles.userInput}>
      <label htmlFor="txtBox" className="sr-only">
        Entrer une commande
      </label>
      <input
        type="text"
        value="root@Erik Mesen's Website:~$"
        id="prompt"
        size="28"
        readOnly
        className={styles.prompt}
      />
      <input
        type="text"
        id="txtBox"
        onKeyDown={commandProcessor}
        placeholder="Enter help for commands list"
        size="40"
        autoFocus
        className={styles.txtBox}
      />
    </div>
  );
}

export default UserInput;
