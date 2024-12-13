import React from "react";
import "./__help.scss";

export default function Help() {
	return (
		<div className='helpContainer'>
			<h2 className='helpContainer__title'>Help:</h2>
			<table className='helpContainer__table'>
				<tbody>
					<tr>
						<td className='helpContainer__table__command'>all</td>
						<td className='helpContainer__table__description'>
							Show me all the information
							<br />
							Toutes mes informations
						</td>
					</tr>
					<br />
					<tr>
						<td className='helpContainer__table__command'>about</td>
						<td className='helpContainer__table__description'>
							Everything you ever wanted to know about Erik Mesen
							<br />
							Tout ce que vous avez toujours voulu savoir sur moi
						</td>
					</tr>
					<br />
					<tr>
						<td className='helpContainer__table__command'>soft</td>
						<td className='helpContainer__table__description'>
							Discover my soft skills
							<br />
							Découvrez mon savoir être
						</td>
					</tr>
					<br />
					<tr>
						<td className='helpContainer__table__command'>skills</td>
						<td className='helpContainer__table__description'>
							Discover my hard skills
							<br />
							Découvrez mes compétences technique
						</td>
					</tr>
					<br />
					<tr>
						<td className='helpContainer__table__command'>projects</td>
						<td className='helpContainer__table__description'>
							Discover the projects I have completed
							<br />
							Découvrez les projets que j'ai réalisés
						</td>
					</tr>
					<br />
					<tr>
						<td className='helpContainer__table__command'>links</td>
						<td className='helpContainer__table__description'>
							My different social media profiles
							<br />
							Mes différents profils sur les réseaux sociaux
						</td>
					</tr>
					<br />
					<tr>
						<td className='helpContainer__table__command'>contact</td>
						<td className='helpContainer__table__description'>
							How to contact me
							<br />
							Comment me contacter
						</td>
					</tr>
					<br />
					<tr>
						<td className='helpContainer__table__command'>cv</td>
						<td className='helpContainer__table__description'>
							Download my CV
							<br />
							Téléchargez mon CV
						</td>
					</tr>
					<br />
					<tr>
						<td className='helpContainer__table__command'>rickroll</td>
						<td className='helpContainer__table__description'>
							Never Gonna Give You Up
						</td>
					</tr>
					<br />
					<tr>
						<td className='helpContainer__table__command'>credits</td>
						<td className='helpContainer__table__description'>
							Credits for the site
							<br />
							Crédits pour le site
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
