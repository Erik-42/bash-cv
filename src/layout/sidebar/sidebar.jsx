import React from "react";
import "./__sidebar.scss"; // Import des styles spécifiques au Sidebar
import photo from "../../assets/img/Photo-Mesen.jpg"; // Import de l'image de profil
import logo from '../../assets/logos/Logo_v2.png'; // Chemin relatif de l'image


export default function Sidebar() {
  return (
    <aside className='sidebar'>
      <img className='sidebar__logo' src={logo} alt="Logo" />

      <h1 className='sidebar__titleName'>Erik Mesen</h1>
      <img
        className='sidebar__titlePhoto'
        src={photo}
        alt="Photo de profil de Erik Mesen"
      />
      <p className='sidebar__bio'>
        Développeur web, je suis dynamique et j'aime travailler en équipe pour relever des challenges techniques.<br />
        J'ai une bonne maîtrise des outils de développement et je suis en constante recherche d'apprentissage.
      </p>
    </aside>
  );
}

