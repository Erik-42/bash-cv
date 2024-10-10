import React from "react";
import "./__about.scss"; // Import des styles spécifiques à la section About

export default function About() {
	return (
		<section className="about">
			<h2 className="about__title">À propos de moi</h2>
			<p className="about__text">
				Créateur d'expériences numériques fluides
				<br />
				Concepteur & Développeur Fullstack JS/React | Front & Back
				<br />
				Passionné par les technologies de l'informatique, <br />
				je me spécialise dans les réseaux et le web pour créer des solutions
				innovantes et performantes.
			</p>
		</section>
	);
}
