import React, { useState } from "react";
import "./__userInput.scss";

// Import des composants React correspondant aux commandes
import Help from "../help/help";
import About from "../about/about";
import Skills from "../skills/skills";
import Projects, { ResumeProjects } from "../projects/projects";
import Links from "../links/links";
import Contact from "../contact/contact";
import CV, { CvDownload } from "../cv/cv";
import Rickroll from "../rickroll/rickroll";
import Credits from "../credits/credits";

export default function UserInput() {
	const [activeCommand, setActiveCommand] = useState(null);

	const commandProcessor = (e) => {
		if (e.key === "Enter") {
			const txtInput = e.target.value.trim().toLowerCase();
			// Liste des commandes disponibles et leurs composants correspondants
			const commands = {
				help: () => <Help />,
				about: () => <About />,
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
			<div className='userInput__output'>{activeCommand}</div>
			{/* <label htmlFor="txtBox" className='userInput__label'>
        Entrer une commande
      </label> */}
			<div className='userInput__wrapper'>
				<input
					type='text'
					value="root@Erik_Mesen's Website:~$ "
					readOnly
					className='userInput__root'
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
		</div>
	);
}
