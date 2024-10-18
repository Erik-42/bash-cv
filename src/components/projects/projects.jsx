import React from "react";
import "./__projects.scss";
import sportSee from "../../assets/img/Projets-pro/logoSportSee.png";
import argentBank from "../../assets/img/Projets-pro/argentBankLogo.png";
import wealthHealth from "../../assets/img/Projets-pro/logo-wealthhealth-nobackground.svg";
import cEtD from "../../assets/img/Projets-perso/CetD_2023.webp";
import raidTolkien from "../../assets/img/Projets-perso/Le-Raid-Tolkien.webp";
import bashPortfolio from "../../assets/img/Projets-perso/Erik-Mesen-portfolio.png";

export function ResumeProjects() {
	return (
		<section className='resumeProjects'>
			<h2 className='resumeProjects__title'>Projets:</h2>
			<div className='resumeProjects__wrapper'>
				<div className='resumeProjects__wrapper__professional'>
					<h3>Projet Professionnel:</h3>

					<div className='resumeProjects__wrapper__professional-1 resumeProjects__item'>
						<h4 className='resumeProjects__wrapper__professional__title'>
							ArgentBank
						</h4>
						<div className='resumeProjects__wrapper__professional__container'>
							<p className='resumeProjects__wrapper__professional__container__text'>
								Utilisez une API pour un compte utilisateur bancaire avec React
								<br />
								https://github.com/Erik-42/openclassroom-projet_13-argentbank
								<br />
								Site développé dans le cadre de ma formation "Développeur
								d'applications JavaScript React"
							</p>
							<a
								className='resumeProjects__wrapper__professional__container__img'
								href='https://github.com/Erik-42/openclassroom-projet_13-argentbank'
								_blank>
								<img src={argentBank} alt={argentBank} />
							</a>
						</div>
					</div>

					<div className='resumeProjects__wrapper__professional-2 resumeProjects__item'>
						<h4 className='resumeProjects__wrapper__professional__title'>
							SportSee
						</h4>
						<div className='resumeProjects__wrapper__professional__container'>
							<p className='resumeProjects__wrapper__professional__container__text'>
								Développez un tableau de bord d'analytics avec React
								<br />
								https://github.com/Erik-42/openclassroom-projet_12-sportsee
								<br />
								Site développé dans le cadre de ma formation "Développeur
								d'applications JavaScript React"
							</p>
							<a
								className='resumeProjects__wrapper__professional__container__img'
								href='https://github.com/Erik-42/openclassroom-projet_12-sportsee'>
								<img src={sportSee} alt={sportSee} />
							</a>
						</div>
					</div>
					<div className='resumeProjects__wrapper__professional-3 resumeProjects__item'>
						<h4 className='resumeProjects__wrapper__professional__title'>
							wealthHealth
						</h4>
						<div className='resumeProjects__wrapper__professional__container'>
							<p className='resumeProjects__wrapper__professional__container__text'>
								Faites passer une librairie jQuery vers React
								<br />
								https://github.com/Erik-42/openclassroom-projet_14-wealthhealth
								<br />
								https://github.com/Erik-42/openclassroom-projet_14-wealthhealth-npm
								<br />
								Site développé dans le cadre de ma formation "Développeur
								d'applications JavaScript React"
							</p>
							<a
								className='resumeProjects__wrapper__professional__container__img'
								href='https://github.com/Erik-42/openclassroom-projet_14-wealthhealth'>
								<img src={wealthHealth} alt={wealthHealth} />
							</a>
						</div>
					</div>
				</div>

				<div className='resumeProjects__wrapper__personal'>
					<h3>Projets Personnel:</h3>

					<div className='resumeProjects__wrapper__personal-1 resumeProjects__item'>
						<h4 className='resumeProjects__wrapper__personal__title'>
							Cidre & Dragon
						</h4>
						<div className='resumeProjects__wrapper__personal__container'>
							<p className='resumeProjects__wrapper__personal__container__text'>
								Site du festival Cidre & Dragon
								<br />
								Site développé sous Joomla
								<br />
								https://github.com/Erik-42/CidreEtDragon
							</p>
							<a
								className='resumeProjects__wrapper__professional__container__img'
								href='https://github.com/Erik-42/CidreEtDragon'>
								<img src={cEtD} alt={cEtD} />
							</a>
						</div>
					</div>

					<div className='resumeProjects__wrapper__personal-2 resumeProjects__item'>
						<h4 className='resumeProjects__wrapper__personal__title'>
							Le Raid Tolkien
						</h4>
						<div className='resumeProjects__wrapper__personal__container'>
							<p className='resumeProjects__wrapper__personal__container__text'>
								Site de l'association "Le Raid Tolkien"
								<br />
								Site développé en React Redux
								<br />
								https://github.com/Erik-42/raidtolkien
							</p>
							<a
								className='resumeProjects__wrapper__professional__container__img'
								href='https://github.com/Erik-42/raidtolkien'>
								<img src={raidTolkien} alt={raidTolkien} />
							</a>
						</div>
					</div>
					<div className='resumeProjects__wrapper__personal-3 resumeProjects__item'>
						<h4 className='resumeProjects__wrapper__personal__title'>
							Bash Portfolio
						</h4>
						<div className='resumeProjects__wrapper__personal__container'>
							<p className='resumeProjects__wrapper__personal__container__text'>
								Mon portfolio
								<br />
								Site développé en React Redux sur la base du site
								<br />
								<a href='#'>Bash-CV</a>
								<br />
								https://github.com/Erik-42/bash-cv
							</p>
							<a
								className='resumeProjects__wrapper__professional__container__img'
								href='https://github.com/Erik-42/bash-cv'>
								<img src={bashPortfolio} alt={bashPortfolio} />
							</a>
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

				<div className='projects__list__personal'>
					<h3>Projets Personnel:</h3>

					<div
						id='projet1'
						className='projects__list__personal-1 project__item'>
						<h4 className='projects__list__personal__title'>
							Titre Projet personnel 1:
						</h4>
						<div className='projects__list__personal__container'>
							<p className='projects__list__personal__description'>
								Une application de gestion de tâches personnelle utilisant React
								et Node.js.
							</p>
							<a className='projects__list__personal__link' href='#'>
								<img
									className='projects__list__personal__img'
									src={projetPerso1}
									alt={projetPerso1}
								/>
							</a>
						</div>
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
			</div>
		</section>
	);
}
