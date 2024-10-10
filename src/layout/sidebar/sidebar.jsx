import React from "react";
import "./__sidebar.scss"; // Import des styles spécifiques au Sidebar
import photo from "../../assets/img/Photo-Mesen.jpg"; // Import de l'image de profil
import logo from "../../assets/logos/Logo_v2.png"; // Chemin relatif de l'image

export default function Sidebar() {
	return (
		<aside className="sidebar">
			<img className="sidebar__logo" src={logo} alt="Logo" />

			<h1 className="sidebar__titleName">Erik Mesen</h1>
			<img
				className="sidebar__titlePhoto"
				src={photo}
				alt="Photo de profil de Erik Mesen"
			/>
			<p className="sidebar__bio">
				Créateur d'expériences numériques fluides
				<br /> <br />
				En tant que Concepteur & Développeur Fullstack JS/React, je combine mes
				compétences en développement front-end et back-end pour créer des
				applications intuitives et performantes.
				<br /> <br />
				Dynamique et orienté vers le travail d'équipe, j'aime relever des défis
				techniques et collaborer pour atteindre des objectifs communs.
			</p>
		</aside>
	);
}
