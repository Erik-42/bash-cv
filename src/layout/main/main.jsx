import React from "react";
import Sidebar from "../sidebar/sidebar"; // Import du Sidebar
import Terminal from "../../components/terminal/terminal"; // Import du Terminal
import "./main.module.scss"; // Import des styles spécifiques à l'application

function App() {
  return (
    <div className="container">
      <Terminal />
    </div>
  );
}

export default App;
