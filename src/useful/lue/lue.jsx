import React from "react";
import "./__lue.scss";
// import Life from "../../pages/error404/life/life";
// import Universe from "../../pages/error404/universe/universe";
// import Everything from "../../pages/error404/everything/everything";
// import Lue from "../../useful/lue/lue";

export default function CommandLue(event) {
	if (event.key === "Enter") {
		const txtInput = event.target.value.trim().toLowerCase(); // Utiliser event.target pour obtenir la valeur
		const commands = {
			Help,
			life,
			universe,
			everything,
		};

		const towelElement = document.getElementById("towel");
		towelElement.innerHTML = commands[txtInput] ? commands[txtInput]() : help();
		event.target.value = ""; // Réinitialiser la valeur de l'input
	}
	// On s'assure que le DOM est entièrement chargé avant d'ajouter l'écouteur d'événements
	document.addEventListener("DOMContentLoaded", () => {
		const txtBox = document.getElementById("txtBox");
		if (txtBox) {
			txtBox.addEventListener("keydown", commandLue);
		}
	});
	return (
		<div>
			<img
				src='../../../assets/img/lue.png'
				alt='Life, Universe and Everything'
			/>
		</div>
	);
}
