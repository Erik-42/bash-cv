import React from 'react';
import logo from '../../assets/logos/Logo_v2.png'; // Chemin relatif de l'image

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" />
      {/* Autres contenus du header */}
    </header>
  );
}

export default Header;
