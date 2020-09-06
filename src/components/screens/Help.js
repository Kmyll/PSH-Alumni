import React, { Component } from 'react';
import { MdEventNote } from 'react-icons/md';
import { BsBriefcaseFill } from 'react-icons/bs';
import { FaSignature } from 'react-icons/fa';
import { RiContactsLine, RiAccountPinCircleFill } from 'react-icons/ri';
import { ImLibreoffice, ImInfo } from 'react-icons/im';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Accueil from '../../assets/img/help/accueil.png';
import Offers from '../../assets/img/help/offers.png';
import Cvthèque from '../../assets/img/help/cvtheque.png';

export default class Help extends Component {
	render() {
		return (
			<div className="container">
				<h1>Documentation / Page d'aide</h1>
				<section className="helpFlex">
					<div className="leftMenu">
						<h2>Menu</h2>
						<ol>
							<li>Informations générales</li>
							<li>Mon compte</li>
							<li>Participer aux évènements</li>
							<li>Recrutement</li>
							<li>Consulter nos offres</li>
							<li>CVthèque</li>
							<li>Contact</li>
						</ol>
					</div>
					<div className="rightContent">
						<h2>
							<ImInfo /> Informations générales
						</h2>
						<p>
							Bienvenue sur le site de PSH Alumni. Cette page d'aide a pour but de vous guider dans les
							fonctionnalités que vous pouvez utiliser. Après votre connexion, vous arrivez sur la page
							d'accueil interne. Sur cette interface, vous avez accès aux fonctionnalités décrites ci
							dessous.
						</p>
						<img src={Accueil} />
						<h2>
							<RiAccountPinCircleFill /> Mon compte
						</h2>
						<p>
							La première rubrique, aussi accessible depuis le menu en haut de la page est votre compte.
							Sur cette page, vous avez la possibilité de modifier votre mot de passe (vivement conseillé
							lors de votre première connexion), ainsi que de supprimer votre compte. D'autres
							fonctionnalités seront ajoutées dans une version ultérieure de l'application.
						</p>
						<h2>
							<MdEventNote /> Participer aux évènements
						</h2>
						<h2>
							<BsBriefcaseFill /> Recrutement
						</h2>
						<h2>
							<FaSignature /> Consulter nos offres
						</h2>
						<p>
							Sur cette page, vous retrouvez toutes nos offres de stage et d'emploi disponibles. Pour plus
							d'information et pour postuler, cliquer sur "Détails", à droite d'un poste susceptible de
							vous intéresser. Merci de veuiller à envoyer un CV à jour et y joindre une lettre de
							motivation.
						</p>
						<img src={Offers} />
						<h2>
							<ImLibreoffice /> CVthèque
						</h2>
						<p>
							{' '}
							La page "CVThèque" est disponible soit depuis la page d'accueil de l'espace connecté, soit
							sous la rubrique "Agir" du menu en haut de la page. Sur cette page, veuillez renseigner
							votre nom, prénom ainsi que le poste recherché et ajouter un CV à jour. Votre CV sera
							ensuite disponible sous la rubrique "Recruter des PSH" sous "Alumni et PSH", visible par
							tous.
						</p>
						<img src={Cvthèque} />
						<h2>
							<RiContactsLine /> Contact
						</h2>
					</div>
				</section>
			</div>
		);
	}
}
