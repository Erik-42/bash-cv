import Help from "../../components/help/help";
import About from "../../components/about/about";
import skills from "../../components/skills/skills";
import resumeProjects from "../../components/projects/projects";
import Links from "../../components/links/links";
import Contact from "../../components/contact/contact";
import CvDownload from "../../components/cv/cv";
import rickroll from "../../components/rickroll/rickroll";

export default function CommandProcessor(event) {
	if (event.key === "Enter") {
		const txtInput = event.target.value.trim().toLowerCase(); // Utiliser event.target pour obtenir la valeur
		const commands = {
			Help,
			all: () =>
				About() +
				"<br><br>" +
				skills() +
				"<br><br>" +
				resumeProjects() +
				"<br><br>" +
				Links() +
				"<br><br>" +
				Contact() +
				"<br><br>" +
				CvDownload(),
			about,
			skills,
			projects,
			links,
			contact,
			cv,
			rickroll,
			credits,
		};

		const injectedElement = document.getElementById("injected");
		injectedElement.innerHTML = commands[txtInput]
			? commands[txtInput]()
			: help();
		event.target.value = ""; // Réinitialiser la valeur de l'input
	}
}

// Assurez-vous que le DOM est entièrement chargé avant d'ajouter l'écouteur d'événements
document.addEventListener("DOMContentLoaded", () => {
	const txtBox = document.getElementById("txtBox");
	if (txtBox) {
		txtBox.addEventListener("keydown", commandProcessor);
	}
});
