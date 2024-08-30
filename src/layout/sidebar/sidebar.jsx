import React from "react";
import "./__sidebar.scss"; // Import des styles spécifiques au Sidebar
import photo from "../../assets/img/Photo-Mesen.jpg"; // Import de l'image de profil

function Sidebar() {
  return (
    <aside id="sidebar" className='sidebar'>
      <h1 className='titleName'>Erik Mesen</h1>
      <img
        className='titlePhoto'
        src={photo}
        alt="Photo de profil de Erik Mesen"
      />
      <p className='bio'>
        Développeur web, je suis dynamique et j'aime travailler en équipe pour relever des challenges techniques.<br />
        J'ai une bonne maîtrise des outils de développement et je suis en constante recherche d'apprentissage.
      </p>
    </aside>
  );
}

export default Sidebar;
