import React from 'react';
import './__userInput.scss';

function UserInput() {
  const commandProcessor = (e) => {
    if (e.key === 'Enter') {
      const txtInput = e.target.value.trim().toLowerCase();
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
        credits,
      };

      document.getElementById('injected').innerHTML = commands[txtInput] ? commands[txtInput]() : help();
      e.target.value = '';
    }
  };

  return (
    <div id="userInput">
      <label htmlFor="txtBox" className="sr-only">
        Entrer une commande
      </label>
      <input
        type="text"
        value="root@Erik Mesen's Website:~$"
        id="prompt"
        size="28"
        readOnly
      />
      <input
        type="text"
        id="txtBox"
        onKeyPress={commandProcessor}
        placeholder="Enter help for commands list"
        size="40"
        autoFocus
      />
    </div>
  );
}

export default UserInput;
