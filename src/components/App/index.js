import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import Footer from '../Footer';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import ResumePage from '../screens/adminResumes';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

import AdminInterface from '../screens/adminInterface';
import Adherer from '../screens/adherer';
import Ag from '../screens/ag';
import Agenda from '../screens/agenda';
import Alumni from '../screens/alumni';
import Apprenti from '../screens/apprenti';
import Carnet from '../screens/carnet';
import Carrieres from '../screens/carrieres';
import Confidentialite from '../screens/confidentialite';
import Contact from '../screens/contact';
import Cookies from '../screens/cookies';
import CreateursEntreprise from '../screens/createursEntreprise';
import CvTheque from '../screens/cvTheque';
import Equipe from '../screens/equipe';
import Events from '../screens/events';
import EventsAlumni from '../screens/eventsAlumni';
import Formations from '../screens/formations';
import Galerie from '../screens/galerie';
import Histoire from '../screens/histoire';
import Incubateur from '../screens/incubateur';
import Missions from '../screens/missions';
import Newsletter from '../screens/newsletter';
import Partenaires from '../screens/partenaires';
import ParticiperEvenements from '../screens/participerEvenements';
import Recrutement from '../screens/recrutement';
import RecruterPsh from '../screens/recruterpsh';
import Status from '../screens/status';

const App = () => (
	<Router>
		<div>
			<Navigation />
			<div className="wrapper">
				<Route exact path={ROUTES.LANDING} component={LandingPage} />
				<Route path={ROUTES.SIGN_UP} component={SignUpPage} />
				<Route path={ROUTES.SIGN_IN} component={SignInPage} />
				<Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
				<Route path={ROUTES.HOME} component={HomePage} />
				<Route path={ROUTES.ACCOUNT} component={AccountPage} />
				<Route path={ROUTES.ADMIN} component={AdminPage} />
				<Route path={ROUTES.RESUME} component={ResumePage} />

				{/* SCREENS */}

				<Route path={ROUTES.ADMININTERFACE} component={AdminInterface} />
				<Route path={ROUTES.ADHERER} component={Adherer} />
				<Route path={ROUTES.AG} component={Ag} />
				<Route path={ROUTES.AGENDA} component={Agenda} />
				<Route path={ROUTES.ALUMNI} component={Alumni} />
				<Route path={ROUTES.APPRENTI} component={Apprenti} />
				<Route path={ROUTES.CARNET} component={Carnet} />
				<Route path={ROUTES.CARRIERES} component={Carrieres} />
				<Route path={ROUTES.CONFIDENTIALITE} component={Confidentialite} />
				<Route path={ROUTES.CONTACT} component={Contact} />
				<Route path={ROUTES.COOKIES} component={Cookies} />
				<Route path={ROUTES.CREATEURSENTREPRISE} component={CreateursEntreprise} />
				<Route path={ROUTES.CVTHEQUE} component={CvTheque} />
				<Route path={ROUTES.EQUIPE} component={Equipe} />
				<Route path={ROUTES.EVENTS} component={Events} />
				<Route path={ROUTES.EVENTSALUMNI} component={EventsAlumni} />
				<Route path={ROUTES.FORMATIONS} component={Formations} />
				<Route path={ROUTES.GALERIE} component={Galerie} />
				<Route path={ROUTES.HISTOIRE} component={Histoire} />
				<Route path={ROUTES.INCUBATEUR} component={Incubateur} />
				<Route path={ROUTES.MISSIONS} component={Missions} />
				<Route path={ROUTES.NEWSLETTER} component={Newsletter} />
				<Route path={ROUTES.PARTENAIRES} component={Partenaires} />
				<Route path={ROUTES.PARTICIPEREVENEMENTS} component={ParticiperEvenements} />
				<Route path={ROUTES.RECRUTEMENT} component={Recrutement} />
				<Route path={ROUTES.RECRUTERPSH} component={RecruterPsh} />
				<Route path={ROUTES.STATUS} component={Status} />
			</div>
			<Footer />
		</div>
	</Router>
);

export default withAuthentication(App);
