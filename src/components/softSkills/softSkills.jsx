import React from "react";
import "./__softSkills.scss";
export default function softSkills() {
	return (
		<div className='softSkills'>
			<h2 className='softSkills__title'>Soft Skills:</h2>
			<div className='softSkills__grid'>
				<div className='softSkills__grid__section'>
					<table className='softSkills__grid__section__table'>
						<tbody>
							<tr>
								<td>Autonomie</td>
							</tr>
							<tr>
								<td>Curiosité</td>
							</tr>
							<tr>
								<td>Organisation</td>
							</tr>
							<tr>
								<td>Pensée critique</td>
							</tr>
							<tr>
								<td>Persévérance</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className='softSkills__grid__section'>
					<table className='softSkills__grid__section__table'>
						<tbody>
							<tr>
								<td>Prise de décision</td>
							</tr>
							<tr>
								<td>Résolution de problèmes</td>
							</tr>
							<tr>
								<td>Travail d'équipe</td>
							</tr>
							<tr>
								<td>Vision globale</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
