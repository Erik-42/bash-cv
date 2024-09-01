import React from "react";
import "./__projects.scss"; // Assurez-vous que ce fichier existe

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
						<p className='resumeProjects__wrapper__personal__text'>
							Une application de gestion de tâches personnelle utilisant React
							et Node.js.
						</p>
						<img
							className='resumeProjects__wrapper__personal__img'
							src=''
							alt=''
						/>
					</div>
					<div className='resumeProjects__wrapper__personal-2 resumeProjects__item'>
						<h4 className='resumeProjects__wrapper__personal__title'>
							project Title 2
						</h4>
						<p className='resumeProjects__wrapper__personal__text'>
							Une application de gestion de tâches personnelle utilisant React
							et Node.js.
						</p>
						<img
							className='resumeProjects__wrapper__personal__img'
							src=''
							alt=''
						/>
					</div>
					<div className='resumeProjects__wrapper__personal-3 resumeProjects__item'>
						<h4 className='resumeProjects__wrapper__personal__title'>
							project Title 3
						</h4>
						<p className='resumeProjects__wrapper__personal__text'>
							Une application de gestion de tâches personnelle utilisant React
							et Node.js.
						</p>
						<img
							className='resumeProjects__wrapper__personal__img'
							src=''
							alt=''
						/>
					</div>
				</div>

				<div className='resumeProjects__wrapper__professional'>
					<h3>Projet Professionnel:</h3>

					<div className='resumeProjects__wrapper__professional-1 resumeProjects__item'>
						<h4 className='resumeProjects__wrapper__professional__title'>
							project Title 1
						</h4>
						<p className='resumeProjects__wrapper__professional__text'>
							Développement d'une plateforme d'e-learning pour une entreprise
							utilisant Moodle et PHP.
						</p>
						<img
							className='resumeProjects__wrapper__professional__img'
							src=''
							alt=''
						/>
					</div>
					<div className='resumeProjects__wrapper__professional-2 resumeProjects__item'>
						<h4 className='resumeProjects__wrapper__professional__title'>
							project Title 2
						</h4>
						<p className='resumeProjects__wrapper__professional__text'>
							Développement d'une plateforme d'e-learning pour une entreprise
							utilisant Moodle et PHP.
						</p>
						<img
							className='resumeProjects__wrapper__professional__img'
							src=''
							alt=''
						/>
					</div>
					<div className='resumeProjects__wrapper__professional-3 resumeProjects__item'>
						<h4 className='resumeProjects__wrapper__professional__title'>
							project Title 3
						</h4>
						<p className='resumeProjects__wrapper__professional__text'>
							Développement d'une plateforme d'e-learning pour une entreprise
							utilisant Moodle et PHP.
						</p>
						<img
							className='resumeProjects__wrapper__professional__img'
							src=''
							alt=''
						/>
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
