import React, { Component } from 'react';
import { FaCodeBranch } from 'react-icons/fa';
import mission from '../../assets/img/mission.jpg';
import MissionEtAide from '../../assets/img/MissionEtAide.jpg';

class missions extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="container">
				<h1>Quels sont nos moyens de fonctionnement ?</h1>
				<h2>
					<FaCodeBranch /> L'organisation de l'équipe
				</h2>
				<section className="flex_history">
					<p>
						Le bureau et le conseil sont tenus par l'anciens élèves de PSH et animés par un ancien
						professeur qui a enseigné au lycée de nombreuses années les disciplines professionnelles.<br />
						<br />
						Une petite équipe qui consacre une partie de ses loisirs à la prise en charge d'activités, des
						diverses communications liées à ces activités, et à l'utilisation de l'informatique et des
						réseaux sociaux. une newsletter est envoyée régulièrement aux anciens élèves répertoriés dans le
						fichier de l'association et aux anciens de l'équipe pédagogique.
					</p>
					<img className="missionPic" src={mission} />
				</section>
				<h2>
					<FaCodeBranch /> Les moyens financiers
				</h2>
				<p>[... TEXTE MANQUANT ...]</p>
				<h2>
					<FaCodeBranch /> Adhérer à l'association PSH Alumni
				</h2>
				<p>Anciens élèves, nous vous invitons à nous contacter : </p>
				<section className="sectionContact">
					<a href="mailto:psh.alumni@gmail.com">psh.alumni@gmail.com</a>
					<a href="https://www.linkedin.com/in/passy-st-honor%C3%A9-alumni-2a1282150/">
						Linkedin (Passy St Honoré Alumni)
					</a>
					<a href="https://www.facebook.com/amicale.passysainthonore/">
						Facebook (Passy Saint Honoré Alumni)
					</a>
					<a href="https://www.instagram.com/psh.alumni/">Instagram (psh.alumni)</a>
				</section>
				<p>
					en précisant votre nom, prénom, la ou les section(s) suivie(s) à PSH, les options, l'année du
					dernier diplome obtenu au lycée et bien sûr, votre adresse email.
				</p>
				<h2>
					<FaCodeBranch /> Aider l'association
				</h2>
				<h3>Participer à la gestion de l'association</h3>
				<p>
					EN tant qu'ancien élève, vous pouvez consacrer un peu de temps à la gestion de l'association en
					participant au conseil ou en apportant une aide ponctuelle. il est possible également de travailler
					à distance sur l'enrichissement des fichiers réseau. COntactez la présidente de PSH Alumni pour
					proposer votre candidature
				</p>
				<h3>Nous faire connaitre une manifestation ou un savoir faire</h3>
				<p>
					De même, vous avez la possibilité de mettre à la disposition de PSH Alumni un lieu de rencontre, de
					faire connaitre un spectacle, une manifestation culturelle, de proposer une conférence sur un thème
					en gestion d'entreprise. Vos propositions sont les bienvenues.
				</p>
				<h3>Proposer une offre d'emploi ou de stage</h3>
				<p>
					Vous avez la possibilité de proposer des emplois juniors, des stages à temps plein ou en alternance,
					contactez par email <a href="mailto:psh.alumni@gmail.com">psh.alumni</a> qui diffusera votre offre
					auprès des étudiants et des anciens élèves
				</p>
				<h3>Participer financièrement</h3>
				<p>Toute aide financière sera précieuse pour la pérennité de PSH Alumni</p>
				<div className="line" />
				<section className="bottom">
					<img className="historyPic" src={MissionEtAide} />
					<p className="quoted">
						PSH Alumni est un réseau solide et en devenir d'échanges personnels et professionnels fructueux,
						un réseau de jeunes adultes responsables, un réseau de femmes et d'hommes aux carrières
						exemplaires, un réseau qui rapproche plusieurs générations, un réseau qui maintien le lien
						professeur-élève, un réseau dynalique à l'image de PSH
					</p>
				</section>
			</div>
		);
	}
}

export default missions;
