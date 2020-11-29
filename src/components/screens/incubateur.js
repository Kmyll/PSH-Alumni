import React, { Component } from 'react';
import pepitePon from '../../assets/img/pepitepon.jpeg';
import pepitePon2 from '../../assets/img/pepitePon.png';
class incubateur extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="container incubateur">
				<h1>Pépite Pon - Statut National Etudiant-entrepreneur</h1>
				<ul>
					<li>L'incubateur</li>
					<li>pépite Pon</li>
				</ul>
				<h2>L'incubateur</h2>
				<hr />
				<img className="pepitePonLogo" src={pepitePon} />
				<div>
					<h2>Pépite Pon</h2>
					<h3>
						Vous rêvez d'entreprendre, vous avez une idée ou un projet entrepreneurial, vous avez besoin
						d'un accompagnement, de conseils, d'un espace pour travailler, le SNEE est fait pour vous !
					</h3>
					<p>
						Travailler sur son projet au sein de PEPITE PON, profiter du programme d'accompagnement, c'est
						être au coeur de l'aventure entrepreneuriale dans un écosystème stimulant?
					</p>

					<p>L'occasion pour vous (et vos associés) : </p>
					<ul>
						<li>De faire un premier pas vers votre projet personnel de création d'entreprise,</li>
						<li>
							D'accéder à des formations et des séminaires qui vous aideront à la réalisation de votre
							projet,
						</li>
						<li>De rejoindre un céchosystème riche (établissements, Etudiants, partenaires...)</li>
						<li>
							De participer à de nombreux événements entrepreneuriaux (salon des entrepreneurs, Afterwork,
							Prox PEPITE Tremplin...)
						</li>
					</ul>
					<br />
					<section className="IncubateurInfo">
						<div className="contactCard">
							<p>
								Pour vous informer :{' '}
								<a href="https://snee.enseignementsup-recherche.gouv.fr/">
									https://snee.enseignementsup-recherche.gouv.fr/
								</a>, ou prendre contact avec Julien Meykerque, coordonateur du PEPITE PON :{' '}
								<a href="mailto:contact@pepite-pon.fr">contact@pepite-pon.fr</a>
							</p>
						</div>
						<div className="contactCard">
							<p>
								PSH incub, incubateur de PSH SUP vous accompagne dans votre démarche
								d'étudiant-entrepreneur (candidature ET suivi). Contact : Claire Boucher: 01 42 15 80 10{' '}
								<a href="mailto:cboucher@passy-st-honore.com">cboucher@passy-st-honore.com</a>
							</p>
						</div>
						<div className="contactCard">
							<p>
								Pour connaitre les dates des admissions :{' '}
								<a href="https://www.pepite-pon.fr/index.php/etudiant-entrepreneur/deposer-sa-candidature">
									https://www.pepite-pon.fr/index.php/etudiant-entrepreneur/deposer-sa-candidature
								</a>
							</p>
						</div>
					</section>
				</div>
			</div>
		);
	}
}

export default incubateur;
