import React, { useState, useRef, useEffect } from "react";
import "./__userInput.scss";

import Help from "../help/help";
import About from "../about/about";
import SoftSkills from "../softSkills/softSkills";
import Skills from "../skills/skills";
import Projects, { ResumeProjects } from "../projects/projects";
import Links from "../links/links";
import Contact from "../contact/contact";
import CV, { CvDownload } from "../cv/cv";
import Rickroll from "../rickroll/rickroll";
import Credits from "../credits/credits";

export default function UserInput() {
	const [activeCommand, setActiveCommand] = useState(null);
	const [rootValue, setRootValue] = useState("root@Erik_Mesen's Website:~$ ");
	const spanRef = useRef(null);
	const inputRootRef = useRef(null);

	// Fonction pour ajuster la largeur de l'input en fonction du contenu
	useEffect(() => {
		if (spanRef.current && inputRootRef.current) {
			// Mettre à jour la largeur de l'input en fonction de la largeur du span
			inputRootRef.current.style.width = `${
				spanRef.current.offsetWidth + 10
			}px`;
		}
	}, [rootValue]);

	// Récupérer l'adresse IP de l'utilisateur
	useEffect(() => {
		const fetchIPAddress = async () => {
			try {
				const response = await fetch("https://api.ipify.org?format=json");
				const data = await response.json();
				setRootValue(`root@${data.ip}:~$ `);
			} catch (error) {
				// Si l'IP n'est pas disponible, je laisse la valeur par défaut
				console.error("Impossible de récupérer l'adresse IP:", error);
			}
		};

		// Essaye d'obtenir le nom du PC (ce qui n'est pas possible côté client).
		// Récupération direct de l'adresse IP à défaut.
		fetchIPAddress();
	}, []);

	const commandProcessor = (e) => {
		if (e.key === "Enter") {
			const txtInput = e.target.value.trim().toLowerCase();
			// Liste des commandes disponibles et leurs composants correspondants
			const commands = {
				help: () => <Help />,
				about: () => <About />,
				soft: () => <SoftSkills />,
				skills: () => <Skills />,
				projects: () => <Projects />,
				links: () => <Links />,
				contact: () => <Contact />,
				cv: () => <CV />,
				rickroll: () => <Rickroll />,
				credits: () => <Credits />,
				all: () => (
					<>
						<About />
						<SoftSkills />
						<Skills />
						<ResumeProjects />
						<Links />
						<Contact />
						<CvDownload />
					</>
				),
			};

			// Mettre à jour l'état pour afficher le composant correspondant à la commande
			setActiveCommand(commands[txtInput] ? commands[txtInput]() : <Help />);
			e.target.value = "";
		}
	};

	return (
		<div className='userInput'>
			<div className='userInput__wrapper'>
				{/* Span caché pour mesurer la taille du texte */}
				<span ref={spanRef} className='userInput__hiddenSpan'>
					{rootValue}
				</span>
				<input
					type='text'
					value={rootValue}
					readOnly
					className='userInput__root'
					ref={inputRootRef}
				/>
				<input
					type='text'
					placeholder='Enter help for commands list'
					autoFocus
					onKeyDown={commandProcessor}
					className='userInput__prompt'
					aria-label='Terminal input'
				/>
			</div>
			<p className='userInput__comment'>
				Pour plus d'informations sur chaque section entrez la commande approprié
			</p>
			<div className='userInput__output'>{activeCommand}</div>
		</div>
	);
}
