import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'recompose';

import { withAuthorization, withEmailVerification } from '../Session';
import { JobList, JobItem } from '../Jobs';
import * as ROLES from '../../constants/roles';
import * as ROUTES from '../../constants/routes';

const JobsPage = () => (
	<div className="container">
		<Switch>
			<Route exact path={ROUTES.JOBS_DETAILS} component={JobItem} />
			<Route exact path={ROUTES.JOBS} component={JobList} />
		</Switch>
	</div>
);

const condition = (authUser) => authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(withEmailVerification, withAuthorization(condition))(JobsPage);
