import React, { useState } from "react";
import "./__terminal.scss"; // Import des styles spécifiques au Terminal

function Terminal() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <main id="terminal" className='terminal'>
      <div id="injected"></div>
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
          className='prompt'
        />
        <input
          type="text"
          id="txtBox"
          placeholder="Enter help for commands list"
          size="40"
          autoFocus
          value={inputValue}
          onChange={handleChange}
          className='txtBox'
          aria-label="Terminal input"
        />
      </div>
    </main>
  );
}

export default Terminal;

// import React from 'react';
// import './__terminal.scss';
// import UserInput from '../userInput/userInput';

// function Terminal() {
//   return (
//     <main id="terminal">
//       <div id="injected"></div>
//       <UserInput />
//     </main>
//   );
// }

// export default Terminal;
