import React, { Component } from 'react';

class adherer extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="container adherer">
				<h1>Adhérer</h1>
				<h2>Pourquoi adhérer à PSH ?</h2>
				<ul>
					<li>
						Pour être membre d’un vrai réseau professionnel, créé sur l’amitié et la reconnaissance du
						savoir faire, sur l’habitude de l’entre-aide et du travail en équipe,
					</li>
					<li>pour embaucher dans mon entreprise des juniors qualifiés,</li>
					<li>
						Pour aider les plus jeunes, élèves et étudiants, à choisir une orientation d’études et
						professionnelle, témoigner, faire profiter de son expertise. Permettre au jeune de se projeter
						dans un avenir faisable, porteur et correspondant à ses ambitions.
					</li>
				</ul>
				<h2>Nos engagements</h2>
				<h3>Envers les anciens élèves</h3>
				<ul>
					<li>
						Favoriser des relations amicales et professionnelles entre les anciens diplômés des différentes
						formations dispensées par PSH et différentes années, faciliter ainsi des projets professionnels
						communs par le développement d’un réseau professionnel qualifié ;
					</li>
					<li>
						Partager son expérience en tant que professionnel avec les juniors, à travers un réseau
						d’entraide efficace au moment du choix d’une nouvelle orientation professionnelle ou d’une
						recherche d’emploi ;
					</li>
					<li>
						Contribuer au rayonnement de PSH Alumni et de ses membres par l’organisation de rencontres,
						amicales, pleines de discussions et du plaisir d’être ensemble, professionnelles, à thème,
						spécialisées par formation ou par métier ;
					</li>
					<li>Relayer l’actualité propre à PSH et à PSH Alumni ;</li>
					<li>
						Participer ou organiser des spectacles, des événements, en concordance avec les projets de PSH.
					</li>
				</ul>
				<h3>Envers les élèves et étudiants de PSH</h3>

				<ul>
					<li>
						Etre force de proposition sur des activités d’orientation et d’accompagnement professionnel par
						l’organisation de sessions de formation, de rencontres sur les métiers…
					</li>
					<li>
						Multiplier les partenariats (stages, emplois en alternances, CDI) et créer des parrainages entre
						les anciens et les jeunes élèves-étudiants ;
					</li>
					<li>Faire connaître l’existence de PSH Alumni.</li>
				</ul>
				<h3>Envers les anciens membres du personnel</h3>
				<ul>
					<li>Participer à des rencontres avec les anciens élèves,</li>
					<li>Aider au développement de projets professionnels ou pédagogiques.</li>
				</ul>
			</div>
		);
	}
}

export default adherer;
