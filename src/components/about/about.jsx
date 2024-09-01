import React from "react";
import "./__about.scss"; // Import des styles spécifiques à la section About

export default function About() {
	return (
		<section className='about'>
			<h2 className='about__title'>À propos de moi</h2>
			<p className='about__text'>
				Je m'appelle Erik Mesen, je suis concepteur, développeur et intégrateur
				d'applications web.
				<br />
				Je suis passionné par les technologies de l'informatique en général, les
				réseaux et le web.
			</p>
		</section>
	);
}
