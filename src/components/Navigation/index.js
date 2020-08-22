import React from 'react';
import { Link } from 'react-router-dom';

import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import { Dropdown } from 'semantic-ui-react';

import logo from '../../assets/img/logo.png';

const Navigation = () => (
	<AuthUserContext.Consumer>
		{(authUser) =>

				authUser ? <NavigationAuth authUser={authUser} /> :
				<NavigationNonAuth />}
	</AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
	<ul className="uthNav">
		<li className="logo">
			<Link to={ROUTES.LANDING}>
				{' '}
				<img src={logo} />
			</Link>
		</li>
		<li>
			<Link to={ROUTES.HOME}>Home</Link>
		</li>
		<li>
			<Link to={ROUTES.ACCOUNT}>Account</Link>
		</li>
		<li>
			<Dropdown text="Agir">
				<Dropdown.Menu>
					<Dropdown.Item text="Contacter l'équipe Alumni" as={Link} to="/contact" />
					<Dropdown.Item text="Participer aux evénements" as={Link} to="/evenements" />
					<Dropdown.Item text="Recrutement" as={Link} to="/recrutement" />
					<Dropdown.Item text="Consulter les offres" as={Link} to="/offres" />
					<Dropdown.Item text="CvThèque" as={Link} to="/cvtheque" />
				</Dropdown.Menu>
			</Dropdown>
		</li>

		{!!authUser.roles[ROLES.ADMIN] && (
			<li>
				<Link to={'/adminInterface'}>Admin</Link>
			</li>
		)}
		<li className="signOutPara">
			<SignOutButton className="signOutPara" />
		</li>
	</ul>
);

const NavigationNonAuth = () => (
	<ul className="nonAuthNav">
		<li className="logo">
			<Link to={ROUTES.LANDING}>
				{' '}
				<img src={logo} />
			</Link>
		</li>
		<li>
			<Dropdown text="Association">
				<Dropdown.Menu>
					<Dropdown.Item text="Notre histoire" as={Link} to="/histoire" />
					<Dropdown.Item text="Nos missions" as={Link} to="/missions" />
					<Dropdown.Item text="Adhérer" as={Link} to="/adherer" />
					<Dropdown.Item text="Equipe" as={Link} to="/equipe" />
					<Dropdown.Item text="Assemblée générale" as={Link} to="/ag" />
				</Dropdown.Menu>
			</Dropdown>
		</li>
		<li>
			<Dropdown text="Actualité">
				<Dropdown.Menu>
					<Dropdown.Item text="Evénements" as={Link} to="/events" />
					<Dropdown.Item text="Agenda 2020-2021" as={Link} to="/agenda" />
					<Dropdown.Item text="Adhérer" as={Link} to="/adherer" />
					<Dropdown.Item text="Offres" as={Link} to="/offres" />
					<Dropdown.Item text="Recruter des PSH" as={Link} to="/recrutementpsh" />
					<Dropdown.Item text="Newsletters" as={Link} to="/Newsletter" />
				</Dropdown.Menu>
			</Dropdown>
		</li>
		<li>
			<Link to={ROUTES.GALERIE}>Galerie</Link>
		</li>
		<li>
			<Dropdown text="Alumni et PSH">
				<Dropdown.Menu>
					<Dropdown.Item text="incubateur PSH" as={Link} to="/incubateur" />
					<Dropdown.Item text="Formations PSH" as={Link} to="/formations" />
					<Dropdown.Item text="Etudiant-apprenti" as={Link} to="/apprenti" />
					<Dropdown.Item text="Evénements" as={Link} to="/eventsAlumni" />
					<Dropdown.Item text="Recruter des PSH" as={Link} to="/recruterpsh" />
					<Dropdown.Item text="Newsletters" as={Link} to="/Newsletter" />
				</Dropdown.Menu>
			</Dropdown>
		</li>
		<li>
			<Dropdown text="Anciens de PSH">
				<Dropdown.Menu>
					<Dropdown.Item text="Nos carrières" as={Link} to="/carrieres" />
					<Dropdown.Item text="Créateurs d'entreprises" as={Link} to="/createursEntreprise" />
					<Dropdown.Item text="Etudiant-apprenti" as={Link} to="/apprenti" />
					<Dropdown.Item text="Nos partenaires" as={Link} to="/partenaires" />
					<Dropdown.Item text="Carnet" as={Link} to="/carnet" />
					<Dropdown.Item text="Les alumnis" as={Link} to="/alumni" />
				</Dropdown.Menu>
			</Dropdown>
		</li>
		<li>
			<Link to={ROUTES.SIGN_IN}>Connexion</Link>
		</li>
	</ul>
);

export default Navigation;
