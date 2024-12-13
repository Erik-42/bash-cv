import React, { useEffect, useRef, useState } from "react";
import "./__error404.scss";
import Life from "../../pages/error404/life/life";
import Universe from "../../pages/error404/universe/universe";
import Everything from "../../pages/error404/everything/everything";
// import Lue from "../../useful/lue/lue";

export default function Error404() {
	const [activeCommand, setActiveCommand] = useState(null);
	const [inputValue, setInputValue] = useState("");
	const [rootValue, setRootValue] = useState("root@Erik_Mesen's Website:~$ ");
	const spanRef = useRef(null);
	const inputRootRef = useRef(null);

	// Fonction pour ajuster la largeur de l'input en fonction du contenu
	useEffect(() => {
		if (spanRef.current && inputRootRef.current) {
			inputRootRef.current.style.width = `${
				spanRef.current.offsetWidth + 10
			}px`;
		}
	}, [rootValue]);

	const commandLue = (e) => {
		if (e.key === "Enter") {
			const txtInput = e.target.value.trim().toLowerCase();
			// Liste des commandes disponibles et leurs composants correspondants
			const commands = {
				life: () => <Life command='life' />,
				universe: () => <Universe command='universe' />,
				everything: () => <Everything command='everything' />,
			};

			// Mettre à jour l'état pour afficher le composant correspondant à la commande
			setActiveCommand(commands[txtInput] ? commands[txtInput]() : <Help />);
			setInputValue(""); // Réinitialiser la valeur de l'input
		}
	};

	return (
		<main>
			<div className='error404'>
				<h1>404: Page not found</h1>
				<div className='error404__bash'>
					<pre className='error404__bash__pre'>
						{`$ cd basillecorp.dev
$ ls
404_error_page.sh      projects/          contact/
$ cat 404_error_page.sh
#!/bin/bash
echo "Oops, cette page n'existe pas. 🫠"
echo "Retournez à la page d'accueil ?"
echo -e "-> `}
						<a href='./' className='error404__bash__pre__link'>
							https://basillecorp.dev
						</a>
						<div className='error404__bash__pre__prompt'>
							<p>
								{/* _<span className='blinking'>|</span> */}
								<input
									type='text'
									className='error404__bash__pre__prompt__input'
									value={inputValue}
									onKeyDown={commandLue}
									onChange={(e) => setInputValue(e.target.value)}
									aria-label='Error 404 hidden input'
									autoFocus
									ref={inputRootRef}
								/>
							</p>
						</div>
					</pre>
				</div>
			</div>
			<div className='lue__towel' id='towel'></div>
			<div className='lue__hiddenInput'>{activeCommand}</div>
		</main>
	);
}

function Help() {
	return (
		<p className='help'>
			Commande inconnue. Essayez "life", "universe" ou "everything".
		</p>
	);
}
