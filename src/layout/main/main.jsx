import React from "react";
import Terminal from "../../components/terminal/terminal"; // Import du Terminal
import "./__main.scss"; // Import des styles spécifiques à l'application

function App() {
  return (
    <div className="container">
      <Terminal />
    </div>
  );
}

export default App;
