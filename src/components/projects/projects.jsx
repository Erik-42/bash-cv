import React from "react";
import "./__projects.scss";
import logoSportSee from "../../assets/img/Projets-pro/logoSportSee.png";
import sportSee from "../../assets/img/Projets-pro/SportSee.png";

import logoArgentBank from "../../assets/img/Projets-pro/argentBankLogo.png";
import argentBank from "../../assets/img/Projets-pro/ArgentBank.png";

import logoWealthHealth from "../../assets/img/Projets-pro/logo-wealthhealth-nobackground.svg";
import wealthHealth from "../../assets/img/Projets-pro/Wealth-Health0.png";

import logoCEtD from "../../assets/img/Projets-perso/Logo-Festival-Grand-Format-Fond-Transparent-001.png";
import cEtD from "../../assets/img/Projets-perso/CetD_2023.webp";

import logoRaidTolkien from "../../assets/img/Projets-perso/RT_2018_jaunesb.svg";
import raidTolkien from "../../assets/img/Projets-perso/Le-Raid-Tolkien.webp";

import logoBashPortfolio from "../../assets/img/Projets-perso/logo.svg";
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
								https://git Une application de gestion de tâches personnelle
								utilisant React et Node.js.
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
					<h3>Projets Professionnel:</h3>

					<div className='projects__list__professional-1 projects__item'>
						<div className='projects__list__professional__header'>
							<h4 className='projects__list__professional__header__title'>
								Projet SportSee:
							</h4>
							<img
								className='projects__list__professional__header__logo'
								src={logoSportSee}
								alt={logoSportSee}
							/>
						</div>
						<p className='projects__list__professional__description'>
							Développez un tableau de bord d'analytics avec React
							<br />
							https://github.com/Erik-42/openclassroom-projet_12-sportsee
							<br />
							Site développé dans le cadre de ma formation "Développeur
							d'applications JavaScript React"
						</p>
						<img
							className='projects__list__professional__img'
							src={sportSee}
							alt={sportSee}
						/>
					</div>

					<div className='projects__list__professional-2 projects__item'>
						<div className='projects__list__professional__header'>
							<h4 className='projects__list__professional__header__title'>
								Projet ArgentBank:
							</h4>
							<img
								className='projects__list__professional__header__logo'
								src={logoArgentBank}
								alt={logoArgentBank}
							/>
						</div>
						<p className='projects__list__professional__description'>
							Utilisez une API pour un compte utilisateur bancaire avec React
							<br />
							https://github.com/Erik-42/openclassroom-projet_13-argentbank
							<br />
							Site développé dans le cadre de ma formation "Développeur
							d'applications JavaScript React"
						</p>
						<img
							className='projects__list__professional__img'
							src={argentBank}
							alt={argentBank}
						/>{" "}
					</div>

					<div className='projects__list__professional-3 projects__item'>
						<div className='projects__list__professional__header'>
							<h4 className='projects__list__professional__header__title'>
								Projet Wealth-Health RH:
							</h4>
							<img
								className='projects__list__professional__header__logo'
								src={logoWealthHealth}
								alt={logoWealthHealth}
							/>
						</div>
						<p className='projects__list__professional__description'>
							Faites passer une librairie jQuery vers React
							<br />
							https://github.com/Erik-42/openclassroom-projet_14-wealthhealth
							<br />
							https://github.com/Erik-42/openclassroom-projet_14-wealthhealth-npm
							<br />
							Site développé dans le cadre de ma formation "Développeur
							d'applications JavaScript React"
						</p>
						<img
							className='projects__list__professional__img'
							src={wealthHealth}
							alt={wealthHealth}
						/>{" "}
					</div>
				</div>

				<div className='projects__list__personal'>
					<h3>Projets Personnel:</h3>

					<div
						id='projet1'
						className='projects__list__personal-1 projects__item'>
						<div className='projects__list__professional__header'>
							<h4 className='projects__list__professional__header__title'>
								Projet Cidre & Dragon:
							</h4>
							<img
								className='projects__list__professional__header__logo'
								src={logoCEtD}
								alt={logoCEtD}
							/>
						</div>
						<div className='projects__list__personal__container'>
							<p className='projects__list__personal__description'>
								Site du festival Cidre & Dragon
								<br />
								Site développé sous Joomla
								<br />
								https://github.com/Erik-42/CidreEtDragon
							</p>
							<a className='projects__list__personal__link' href='#'>
								<img
									className='projects__list__personal__img'
									src={cEtD}
									alt={cEtD}
								/>
							</a>
						</div>
					</div>

					<div className='projects__list__personal-2 projects__item'>
						<div className='projects__list__professional__header'>
							<h4 className='projects__list__professional__header__title'>
								Projet Le Raid Tolkien:
							</h4>
							<img
								className='projects__list__professional__header__logo'
								src={logoRaidTolkien}
								alt={logoRaidTolkien}
							/>
						</div>
						<p className='projects__list__personal__description'>
							Site de l'association "Le Raid Tolkien"
							<br />
							Site développé en React Redux
							<br />
							https://git Une application de gestion de tâches personnelle
							utilisant React et Node.js.
						</p>
						<img
							className='projects__list__personal__img'
							src={raidTolkien}
							alt={raidTolkien}
						/>{" "}
					</div>

					<div className='projects__list__personal-3 projects__item'>
						<div className='projects__list__professional__header'>
							<h4 className='projects__list__professional__header__title'>
								Projet Mon Portfolio:
							</h4>
							<img
								className='projects__list__professional__header__logo'
								src={logoBashPortfolio}
								alt={logoBashPortfolio}
							/>
						</div>
						<p className='projects__list__personal__description'>
							Mon portfolio
							<br />
							Site développé en React Redux sur la base du site
							<br />
							<a href='#'>Bash-CV</a>
							<br />
							https://github.com/Erik-42/bash-cv
						</p>
						<img
							className='projects__list__personal__img'
							src={bashPortfolio}
							alt={bashPortfolio}
						/>{" "}
					</div>
				</div>
			</div>
		</section>
	);
}
