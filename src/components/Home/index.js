import React from 'react';
import { compose } from 'recompose';

import { withAuthorization, withEmailVerification } from '../Session';
import Honeycomb from './honeycomb';

const HomePage = () => (
	<div className="container">
		<h1>Bienvenue sur votre page personnalisée !</h1>
		<p className="authHomepage">Merci de cliquer sur une rubrique ci-dessous :</p>

		<Honeycomb />
	</div>
);

const condition = (authUser) => !!authUser;

export default compose(withEmailVerification, withAuthorization(condition))(HomePage);
