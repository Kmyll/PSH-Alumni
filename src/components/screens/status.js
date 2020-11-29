import React, { Component } from 'react';
import Psh from '../../assets/img/psh.jpg';

class status extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="container status">
				<h1>Status de l'alumni des anciens de PSH</h1>

				<h2>Lycée sous contrat d'association Passy-Saint-Honoré</h2>
				<img className="imgStatus" src={Psh} />
				<h3>ARTICLE 1er - Dénomination</h3>
				<p>
					Il est fondé entre les adhérents aux présents statuts une association régie par la loi du 1er
					juillet et le décret du 16 août 1901, ayant pour titre : La durée de vie de l’association est
					illimitée.
				</p>
				<h3>ARTICLE 2 - Objet</h3>
				<p>Le but de l’Association est de :</p>
				<p>Pour les anciens élèves</p>
				<ul>
					<li>
						Créer et entretenir entre les diplômés des différentes formations dispensées par PSH et ses
						partenaires des relations amicales,
					</li>
					<li>Faciliter des projets professionnels communs,</li>
					<li>
						Bénéficier d’un réseau d’entraide qui sera efficace au moment du choix d’une nouvelle
						orientation professionnelle ou d’une recherche d’emploi (bourse à l’emploi),
					</li>
					<li>Partager son expérience en tant que professionnel,</li>
					<li>Relayer l’actualité propre à PSH et à l’alumni,</li>
					<li>Contribuer au rayonnement de l’alumni et de ses membres,</li>
					<li>
						participer ou organiser des spectacles, des événements en concordance avec les projets de PSH.
					</li>
				</ul>
				<p>Pour les élèves et étudiants de PSH</p>
				<ul>
					<li>faire connaître l’existence de l’alumni,</li>
					<li>
						être force de proposition en accord avec la Direction de PSH pour des activités d’orientation et
						d’accompagnement professionnels.
					</li>
				</ul>
				<p>Pour les anciens membres du personnel</p>
				<ul>
					<li>participer à des rencontres avec les anciens élèves.</li>
					<li>aider au développement de projets professionnels ou pédagogiques.</li>
				</ul>

				<h3>ARTICLE 3 - Siège social</h3>
				<p>
					Le siège social est fixé à Paris au 117 avenue Victor-Hugo 75116 PARIS. <br />
					Il pourra être transféré par décision du bureau en accord avec la direction de PSH ; la ratification
					par l'assemblée sera nécessaire.
				</p>
				<h3>ARTICLE 4 – Moyens d’action</h3>
				<p>
					Tout moyen d’action et de communication favorisant l’organisation d’événements, dans les limites de
					ses ressources financières et humaines.
				</p>
				<h3>ARTICLE 5 – Composition</h3>
				<p>
					Peuvent être membres de l’alumni tout ancien élève du lycée, ancien membre du personnel et
					généralement, tout ami soucieux de soutenir le lycée PSH.<br />
					<br />
					L'association se compose de :
					<ul>
						<li>membres d'honneur</li>
						<li>membres bienfaiteurs</li>
						<li>membres actifs ou adhérents</li>
					</ul>
					<p>
						Sont membres d'honneur, ceux qui ont rendu des services reconnus par le bureau de l’alumni ;
						membres dispensés de cotisation. Sont membres bienfaiteurs, ceux qui versent annuellement une
						cotisation spécifique, fixée chaque année par l’assemblée générale. Sont membres actifs ou
						adhérents, ceux qui versent annuellement la cotisation dont le montant est fixé chaque année par
						l'assemblée générale.
					</p>
				</p>
				<h3>ARTICLE 6 – Démission - Radiation</h3>
				<p>La qualité de membre se perd par :</p>
				<ul>
					<li>
						la démission écrite en cours d’année qui ne désire plus recevoir d’informations sur l’alumni,
					</li>
					<li>la radiation prononcée par le bureau pour motifs graves, après avoir entendu l'intéressé,</li>
					<li>le non-paiement de la cotisation.</li>
				</ul>
				<h3>ARTICLE 7 – Ressources</h3>
				<p>Les ressources de l'association comprennent :</p>
				<ul>
					<li>
						la participation des parents ou de l’élève, via le dossier d’inscription à PSH, montant
						déterminé par la direction de PSH et ratifié par l’Apel de PSH,
					</li>
					<li>
						la cotisation volontaire des membres actifs, montant fixé par le conseil sur proposition du
						bureau et ratifié par l’assemblée générale ordinaire,
					</li>
					<li>
						les dons des membres de l’amicale et plus particulièrement lors d’une aide apportée pour une
						recherche de stage ou d’un emploi quel que soit le type de contrat de travail en cause,
					</li>
					<li>Les subventions et subsides de toute nature qui peuvent être versés à l’alumni, </li>

					<li>les ressources provenant de toute prestation et ressources légales</li>
				</ul>
				<p>
					Le fait de l’adhésion implique adhésion entière et absolue aux statuts, au règlement intérieur, aux
					décisions du conseil et des assemblées générales ordinaires et extraordinaires.
				</p>
				<h3>ARTICLE 8 – Ouverture d’un compte bancaire</h3>
				<p>
					Après dépôt des statuts, un compte bancaire est ouvert à la Banque Postale avenue Victor-Hugo à
					Paris 16. L’établissement d’un chèque de règlement nécessite deux signatures, celle du trésorier ou
					adjoint, et du président de l’association ou du président adjoint ou du secrétaire.
				</p>
				<h3>ARTICLE 9 – Bureau</h3>
				<p>
					L’Association est dirigée par un bureau de membres élus pour 3 ans, renouvelables par tiers tous les
					ans ; les membres sont rééligibles.
				</p>
				<p>Le bureau est composé d'au moins 3 membres titulaires et de préférence, de 3 adjoints :</p>
				<ul>
					<li>un(e) président(e) et un(e) vice-président(e)</li>
					<li>un(e) trésorier et un trésorier adjoint</li>
					<li>un(e) secrétaire général(e) et un secrétaire adjoint</li>
				</ul>

				<p>
					Le bureau est élu pour un an.<br />
					<br />
					Les postes de président et de trésorier sont tenus par un représentant des anciens élèves et un
					représentant du personnel.<br />
					Le Directeur de PSH ou son représentant, membre de la direction de PSH, assiste comme invité, au
					bureau de l’association.
				</p>

				<h3>ARTICLE 10 - Réunion du bureau</h3>
				<p>
					Le bureau se réunit toutes les fois qu'il est nécessaire, sur convocation du président ou du
					vice-président(e). Au minimum, trois fois par année scolaire. <br />Les décisions ou résolutions
					sont prises à la majorité des voix ; en cas de partage, la voix du président(e) est prépondérante.
				</p>
				<h3>ARTICLE 11 - Assemblée générale ordinaire</h3>

				<p>
					L'assemblée générale ordinaire comprend tous les membres de l’Alumni à jour de cotisation, à quelque
					titre qu'ils soient affiliés. Elle se réunit au moins une fois par an. Quinze jours au moins avant
					la date fixée, les membres de l'association sont convoqués par les soins du secrétaire. L'ordre du
					jour est indiqué sur la convocation. Le Président, assisté des membres du bureau, préside
					l'assemblée. Il présente le rapport moral de l'année écoulée et le soumet à l'approbation de
					l'assemblée. Le trésorier rend compte de sa gestion et soumet le bilan à l'approbation de
					l'assemblée. Il est procédé au remplacement des membres sortants du bureau. Les décisions sont
					prises à la majorité des voix des présents et représentés, le nombre de pouvoirs par membre présent
					n'est pas limité.
				</p>
				<h3>ARTICLE 12 - Assemblée générale extraordinaire</h3>
				<p>
					Si besoin est, ou sur la demande de la moitié plus un des membres, le président peut convoquer
					l'assemblée générale extraordinaire, suivant les mêmes formalités que pour une Assemblée générale
					ordinaire.<br />
					Pour être valable, doivent être présents ou représentés plus des 2/3 des membres de l'association, à
					jour de leur cotisation. A défaut de ce quorum, une deuxième Assemblée générale extraordinaire est
					convoquée, qui pourra statuer sans quorum. Les décisions sont prises à la majorité des 3/4 des
					membres présents ou représentés.
				</p>
				<h3>ARTICLE 13 - Règlement intérieur</h3>
				<p>
					Un règlement intérieur peut être établi par le bureau qui le soumet alors à l'assemblée générale. Ce
					règlement éventuel est destiné à fixer les divers points non prévus par les statuts, notamment ceux
					relatifs à l'administration interne de l'association.
				</p>
				<h3>ARTICLE 14 - Dissolution</h3>
				<p>
					Seule l'assemblée générale extraordinaire peut décider de la dissolution ; elle nomme en ce cas un
					ou plusieurs liquidateurs et l'actif, s'il y a lieu, est dévolu conformément à la loi du 1er juillet
					1901 et au décret du 16 août 1901.
				</p>
			</div>
		);
	}
}

export default status;
