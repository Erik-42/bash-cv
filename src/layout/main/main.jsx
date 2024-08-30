import React from "react";
import Terminal from "../../components/terminal/terminal"; // Import du Terminal
import "./__main.scss"; // Import des styles spécifiques à l'application

export default function App() {
  return (
    <main className="main_terminal">
      <Terminal />
    </main>
  );
}

