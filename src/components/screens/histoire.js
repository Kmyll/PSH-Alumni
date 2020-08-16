import React, { Component } from 'react';
import library from '../../assets/img/library.jpeg';
import { FaMix, FaAnchor } from 'react-icons/fa';
import { IoIosLeaf } from 'react-icons/io';

class Histoire extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="container">
				<h1>Notre Histoire</h1>
				<h2>
					<FaMix /> L'association des anciens de PSH
				</h2>
				<section className="flex_history">
					<img className="historyPic" src={library} />
					<p>
						Une première soirée des anciens de PSH a été organisée en juin 2014. Elle réunissait une
						centaine de participants, anciens élèves mais aussi anciens de l'équipe pédagogique et
						administrative, accueillis par M. Lablée, les enseignants du lycée et Françoise Signeyrole, à
						l'origine du projet.
						<br />
						<br />
						Les participants, anciens élèves et étudiants, représentaient toutes les formations dispensées
						par PSH et différences promotions parfois assez anciennes !
						<br />
						<br />
						Cette première soirée de l'amicale des anciens de PSH fut un grand moment joyeux et plein
						d'humour, un temps de bavardages avec les enseignants et les amis, et surtout l'occasion pour
						quelques anciens élèves de présenter leur parcours d'études et professionnel. Des parcours
						professionnels exemplaires, souvent de belles réussites. <br /> <br />
						Le succès de la soirée, suivie par l'autres évènements, a été le début de la construction, pas à
						pas, de l'amicale pour aboutir en décembre 2018 à la création de l'assocation (loi 1901) "PSH
						Alumni".
					</p>
				</section>
				<h2>
					<FaAnchor /> But de l'assocation
				</h2>
				<h3>
					<IoIosLeaf /> Pour les anciens élèves
				</h3>
				<ul className="historyUl">
					<li>
						Créer et entretenir des relations amicales entre les diplomés des différentes formations
						dispensées par PSH et ses partenaires
					</li>
					<li>Faciliter des projets professionnels communs</li>
					<li>
						Bénéficier d'un réseau d'entraide efficace au moment du choix d'une nouvelle orientation
						professionnelle ou d'une recherche d'emploi (bourse à l'emploi)
					</li>
					<li>Partager son expérience en tant que professionnel</li>
					<li>Relayer l'actualité propre à PSH et PSH Alumni</li>
					<li>Contribuer au rayonnement de PSH Alumni et de ses membres</li>
					<li>
						Participer ou organiser des spectacles, des évènements en concordance avec les projets de PSH
					</li>
				</ul>
				<h3>
					<IoIosLeaf /> Pour les élèves et étudiants de PSH
				</h3>
				<ul className="historyUl">
					<li>Faire connaitre l'existence de PSH Alumni</li>
					<li>
						Etre force de proposition pour des activités d'orientation et d'accompoagnement professionnel
					</li>
				</ul>
				<h3>
					<IoIosLeaf /> Pour les anciens membres du personnel
				</h3>
				<ul className="historyUl">
					<li>FParticiper à des rencontres avec les anciens élèves</li>
					<li>Aider au développement de projets professionnels ou pédagogiques</li>
				</ul>
			</div>
		);
	}
}

export default Histoire;
