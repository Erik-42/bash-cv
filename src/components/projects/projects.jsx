import React from "react";
import "./__projects.scss"; // Assurez-vous que ce fichier existe
import projetPerso1 from "../../assets/img/Projets-perso/Aerial-by-HTML5-UP.png";
import projetPerso2 from "../../assets/img/Projets-perso/CetD_2023.webp";
import projetPerso3 from "../../assets/img/Projets-perso/Le-Raid-Tolkien.webp";
import projetPro1 from "../../assets/img/Projets-pro/Banner-Ohmyfood.png";
import projetPro2 from "../../assets/img/Projets-pro/argentBankLogo.png";
import projetPro3 from "../../assets/img/Projets-pro/Kasa-mini.webp";

export function ResumeProjects() {
	return (
		<section className='resumeProjects'>
			<h2 className='resumeProjects__title'>Projets:</h2>
			<div className='resumeProjects__wrapper'>
				<div className='resumeProjects__wrapper__personal'>
					<h3>Projets Personnel:</h3>

					<div className='resumeProjects__wrapper__personal-1 resumeProjects__item'>
						<h4 className='resumeProjects__wrapper__personal__title'>
							project Title 1
						</h4>
						<div className='resumeProjects__wrapper__personal__container'>
							<p className='resumeProjects__wrapper__personal__container__text'>
								Une application de gestion de tâches personnelle utilisant React
								et Node.js.
							</p>
							<img
								className='resumeProjects__wrapper__personal__container__img'
								src={projetPerso1}
								alt={projetPerso1}
							/>
						</div>
					</div>

					<div className='resumeProjects__wrapper__personal-2 resumeProjects__item'>
						<h4 className='resumeProjects__wrapper__personal__title'>
							project Title 2
						</h4>
						<div className='resumeProjects__wrapper__personal__container'>
							<p className='resumeProjects__wrapper__personal__container__text'>
								Une application de gestion de tâches personnelle utilisant React
								et Node.js.
							</p>
							<img
								className='resumeProjects__wrapper__personal__container__img'
								src={projetPerso2}
								alt={projetPerso2}
							/>
						</div>
					</div>
					<div className='resumeProjects__wrapper__personal-3 resumeProjects__item'>
						<h4 className='resumeProjects__wrapper__personal__title'>
							project Title 3
						</h4>
						<div className='resumeProjects__wrapper__personal__container'>
							<p className='resumeProjects__wrapper__personal__container__text'>
								Une application de gestion de tâches personnelle utilisant React
								et Node.js.
							</p>
							<img
								className='resumeProjects__wrapper__personal__container__img'
								src={projetPerso3}
								alt={projetPerso3}
							/>
						</div>
					</div>
				</div>

				<div className='resumeProjects__wrapper__professional'>
					<h3>Projet Professionnel:</h3>

					<div className='resumeProjects__wrapper__professional-1 resumeProjects__item'>
						<h4 className='resumeProjects__wrapper__professional__title'>
							project Title 1
						</h4>
						<div className='resumeProjects__wrapper__professional__container'>
							<p className='resumeProjects__wrapper__professional__container__text'>
								Une application de gestion de tâches professionnelle utilisant
								React et Node.js.
							</p>
							<img
								className='resumeProjects__wrapper__professional__container__img'
								src={projetPro1}
								alt={projetPro1}
							/>
						</div>
					</div>

					<div className='resumeProjects__wrapper__professional-2 resumeProjects__item'>
						<h4 className='resumeProjects__wrapper__professional__title'>
							project Title 2
						</h4>
						<div className='resumeProjects__wrapper__professional__container'>
							<p className='resumeProjects__wrapper__professional__container__text'>
								Une application de gestion de tâches professionnelle utilisant
								React et Node.js.
							</p>
							<img
								className='resumeProjects__wrapper__professional__container__img'
								src={projetPro2}
								alt={projetPro2}
							/>
						</div>
					</div>
					<div className='resumeProjects__wrapper__professional-3 resumeProjects__item'>
						<h4 className='resumeProjects__wrapper__professional__title'>
							project Title 3
						</h4>
						<div className='resumeProjects__wrapper__professional__container'>
							<p className='resumeProjects__wrapper__professional__container__text'>
								Une application de gestion de tâches professionnelle utilisant
								React et Node.js.
							</p>
							<img
								className='resumeProjects__wrapper__professional__container__img'
								src={projetPro3}
								alt={projetPro3}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default function Projects() {
	return (
		<section className='projects'>
			<h2 className='projects__title'>Projects:</h2>
			<div className='projects__list'>
				<div className='projects__list__personal'>
					<h3>Projets Personnel:</h3>

					<div className='projects__list__personal-1 project__item'>
						<h4 className='projects__list__personal__title'>
							Projet personnel 1:
						</h4>
						<p className='projects__list__personal__description'>
							Une application de gestion de tâches personnelle utilisant React
							et Node.js.
						</p>
						<img className='projects__list__personal__img' src='' alt='' />
					</div>

					<div className='projects__list__personal-2 project__item'>
						<h4 className='projects__list__personal__title'>
							Projet personnel 2:
						</h4>
						<p className='projects__list__personal__description'>
							Une application de gestion de tâches personnelle utilisant React
							et Node.js.
						</p>
						<img className='projects__list__personal__img' src='' alt='' />
					</div>

					<div className='projects__list__personal-3 project__item'>
						<h4 className='projects__list__personal__title'>
							Projet personnel 3:
						</h4>
						<p className='projects__list__personal__description'>
							Une application de gestion de tâches personnelle utilisant React
							et Node.js.
						</p>
						<img className='projects__list__personal__img' src='' alt='' />
					</div>
				</div>

				<div className='projects__list__professional'>
					<div className='projects__list__professional-1 project__item'>
						<h4 className='projects__list__professional__title'>
							Projet personnel 1:
						</h4>
						<p className='projects__list__professional__description'>
							Une application de gestion de tâches personnelle utilisant React
							et Node.js.
						</p>
						<img className='projects__list__professional__img' src='' alt='' />
					</div>

					<div className='projects__list__professional-2 project__item'>
						<h4 className='projects__list__professional__title'>
							Projet personnel 2:
						</h4>
						<p className='projects__list__professional__description'>
							Une application de gestion de tâches personnelle utilisant React
							et Node.js.
						</p>
						<img className='projects__list__professional__img' src='' alt='' />
					</div>

					<div className='projects__list__professional-3 project__item'>
						<h4 className='projects__list__professional__title'>
							Projet personnel 3:
						</h4>
						<p className='projects__list__professional__description'>
							Une application de gestion de tâches personnelle utilisant React
							et Node.js.
						</p>
						<img className='projects__list__professional__img' src='' alt='' />
					</div>
				</div>
			</div>
		</section>
	);
}
