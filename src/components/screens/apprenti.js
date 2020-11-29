import React, { Component } from 'react';
import Apprenticeship from '../../assets/img/apprenticeship.JPG';

class apprenti extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="container">
				<h1>Embauche d’un étudiant apprenti</h1>
				<img className="apprenticeshipBanner" src={Apprenticeship} />
				<p>
					Vous ou votre entreprise envisage de recruter un jeune étudiant ? Vous pouvez faciliter l’embauche
					des étudiants de PSH
				</p>
				<p>
					L’aide de l'Etat est de 8 000 € pour le paiement des salaires. L'entreprise est exonérée de la
					plupart des charges sociales et la formation est prise en charge par l’OPCO.
				</p>

				<p>Les étudiants de PSH ont besoin d’offres de stage :</p>

				<h4>Formation en apprentissage sur un contrat d’une année :</h4>

				<ul>
					<li>BTS 2e année en Communication (la 1ère année est en initial)</li>
					<li>RNCP Chargé de communication Plurimédia (Bac +3)</li>
					<li>RNCP Conseiller en Gestion des ressources Humaines et Placement (Bac +3)</li>
				</ul>

				<h4>Formation en apprentissage sur un contrat de deux ans :</h4>
				<ul>
					<li>BTS Technico-commercial Equipement et Système</li>
				</ul>
				<br />
				<br />
				<p>
					PSH accompagne ses étudiants et les entreprises sur les embauches en contrat d’apprentissage. <br />{' '}
					<br />
					<b>
						Contact : Nathalie SYLLA au 01.53.70.12.71 ou 01.42.30.03.05 -{' '}
						<a href="mailto:nsylla@passy-st-honore.com">nsylla@passy-st-honore.com</a>
					</b>
				</p>
			</div>
		);
	}
}

export default apprenti;
