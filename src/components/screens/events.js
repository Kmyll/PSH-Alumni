import React, { Component } from 'react';

class events extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="container">
				<h1>Nos evénements</h1>
				<section className="eventsFlex">
					<div>
						<h2>Soirée de PSH Alumni</h2>
						<p>Prochaine soirée : le jeudi 16 novembre 2020 – A noter sur vos agendas</p>
					</div>
					<div>
						<h2>Forum des métiers – Rencontre organisée par l’APEL de PSH</h2>
						<p>Mai 2020 – annulée du fait du confinement</p>
						<p>
							les anciens élèves sont invités à participer à cet événement pour présenter leur parcours
							professionnel aux élèves de première des différentes sections de PSH.
						</p>
					</div>
					<div>
						<h2>Rencontre professionnelle ST2S</h2>
						<p>Avril 2020 (mis en place et annulé du fait du confinement</p>
					</div>
					<div>
						<h2>Atelier 1er job</h2>
						<p>Samedi 29 février 2020 - 9h-13h - Site Victor Hugo</p>
						<p>
							Adrien, secrétaire de PSH Alumni, et son entreprise offrent aux étudiants de PSH une
							formation «1er job» réservé aux formations en entreprise.
						</p>
					</div>
					<div>
						<h2>Afterwork</h2>
						<p>Jeudi 5 décembre 2019 - à partir de 18h30</p>
						<p>
							Faire connaissance, échanger autour d'un verre, prendre des contacts professionnels,
							renforcer son réseau.
						</p>
					</div>
					<div>
						<h2>Rencontre professionnelle CGO</h2>
						<p>Samedi 23 novembre 2019 - 9h30-12h30</p>
						<p>
							Actualité et avenir dans les métiers de la comptabilité et de la gestion des organisations,
							diversité des parcours professionnels
						</p>
					</div>
					<div>
						<h2>Participation à la remise des diplômes BTS</h2>
						<p>Jeudi 17 octobre - 17h30 - Site Molitor</p>
						<p>Faire connaitre l’association et l’intérêt qu’elle représente pour les jeunes diplômés </p>
					</div>
					<div>
						<h2>Training Sup - Journée de formation</h2>
						<p>Samedi 12 octobre 2019 - 9h30-17h - Site Molitor</p>
						<p>Comment décrocher un stage en alternance ou un emploi?</p>
					</div>
				</section>
			</div>
		);
	}
}

export default events;
