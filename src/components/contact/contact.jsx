import React from "react";
import "./__contact.scss"; // Importation des styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importation du composant FontAwesomeIcon
import {
	faAddressBook,
	faEnvelope,
	faPhone,
	faVoicemail,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
	return (
		<div className='contact'>
			<h2 className='contact__title'>Contact:</h2>
			<table className='contact__table'>
				<tbody>
					<tr className='contact__table__item'>
						<td className='contact__table__item__icon'>
							<FontAwesomeIcon icon={faEnvelope} />
						</td>
						<td>Email</td>
						<td>
							<a href='mailto:mesen.erik@gmail.com'>mesen.erik@gmail.com</a>
						</td>
					</tr>
					<tr className='contact__table__item'>
						<td className='contact__table__item__icon'>
							<FontAwesomeIcon icon={faPhone} />
						</td>
						<td>Téléphone</td>
						<td>
							<a href='tel:+33-7-68-25-25-09'>+33 7 68 25 25 09</a>
						</td>
					</tr>
					<tr className='contact__table__item'>
						<td className='contact__table__item__icon'>
							<FontAwesomeIcon icon={faAddressBook} />
						</td>
						<td>Adresse</td>
						<td>
							street
							<br />
							zip town
							<br />
							France
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
