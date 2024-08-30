// src/layout/header/header.jsx
import React from 'react';
import logo from '../../assets/logos/Logo_v2.png'; // Chemin relatif de l'image
import './__header.scss'; // Importation des styles SCSS

function Header() {
  return (
    <header className="header"> {/* Utilisation de la classe définie dans __header.scss */}
      <img src={logo} alt="Logo" />
      {/* Autres contenus du header */}
    </header>
  );
}

export default Header;
