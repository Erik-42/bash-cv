import React, { useState } from "react";
import styles from "./terminal.module.scss"; // Import des styles spécifiques au Terminal

function Terminal() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <main id="terminal" className={styles.terminal}>
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
          className={styles.prompt}
        />
        <input
          type="text"
          id="txtBox"
          placeholder="Enter help for commands list"
          size="40"
          autoFocus
          value={inputValue}
          onChange={handleChange}
          className={styles.txtBox}
          aria-label="Terminal input"
        />
      </div>
    </main>
  );
}

export default Terminal;
