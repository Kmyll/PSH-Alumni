import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import header from '../../assets/img/header.png';
import { FaGraduationCap, FaRegStar } from 'react-icons/fa';
import { BsFillAwardFill } from 'react-icons/bs';

const Landing = () => (
	<div>
		<img src={header} />
		<section className="landingPresentation">
			<Card>
				<Card.Content>
					<FaGraduationCap /> <h1>PSH Alumni</h1>
					<br />
					<p>
						Fondé en 2014, PSH Alumni vous propose des evénements annuels, des ateliers, conférences par
						sections, du lycée aux études supérieures ainsi que des offres d'emploi.
					</p>
				</Card.Content>
				<Card.Content extra>
					<a href="/histoire">Notre histoire</a>
				</Card.Content>
			</Card>
			<Card>
				<Card.Content>
					<FaRegStar /> <h1>Nos missions</h1>
					<br />
					<p>
						Nos missions sont d'accompagner les étudiants actuels, les aider à trouver un premier emploi
						grâce à nos ateliers et conférenes, et les fédérer les alumnis grâce à nos évènements.
					</p>
				</Card.Content>
				<Card.Content extra>
					<a href="/missions">Nos missions</a>
				</Card.Content>
			</Card>

			<Card>
				<Card.Content>
					<BsFillAwardFill /> <h1>Adhérer</h1>
					<br />
					<p>
						En vous inscrivant à PSH, vous adhérez systématiquement à PSH Alumni. Vous pouvez vous connecter
						à tout moment ppour consulter nos offres d'emploi ainsi que les évènements à venir.
					</p>
				</Card.Content>
				<Card.Content extra>
					<a href="/signin">Connexion</a>
				</Card.Content>
			</Card>
		</section>
	</div>
);

export default Landing;
