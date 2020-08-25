import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'recompose';

import { withAuthorization, withEmailVerification } from '../Session';
import { OffresList, OffresItem } from '../Offres';
import * as ROLES from '../../constants/roles';
import * as ROUTES from '../../constants/routes';

const OffresPage = () => (
	<div className="container">
		<h1>Gestion des Offres</h1>
		<Switch>
			<Route exact path={ROUTES.OFFRES_DETAILS} component={OffresItem} />
			<Route exact path={ROUTES.OFFRES} component={OffresList} />
		</Switch>
	</div>
);

const condition = (authUser) => authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(withEmailVerification, withAuthorization(condition))(OffresPage);
