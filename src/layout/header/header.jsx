import React from 'react';
import logo from '../../assets/logos/Logo_v2.png'; // Chemin relatif de l'image
import styled from './__header.scss
function Header() {
  return (
    <header className={styled.header}>
      <img src={logo} alt="Logo" />
      {/* Autres contenus du header */}
    </header>
  );
}

export default Header;
