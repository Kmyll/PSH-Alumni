import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'recompose';

import { withAuthorization, withEmailVerification } from '../Session';
import { JobAdDisplayList, JobAdDisplayItem } from '../JobAdDisplay';
// import * as ROLES from '../../constants/roles';
import * as ROUTES from '../../constants/routes';

const JobAdDisplayPage = () => (
	<div className="container">
		<Switch>
			<Route exact path={ROUTES.JOBADDISPLAY_DETAILS} component={JobAdDisplayItem} />
			<Route exact path={ROUTES.JOBADDISPLAY} component={JobAdDisplayList} />
		</Switch>
	</div>
);

// const condition = (authUser) => authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(
	withEmailVerification
	// withAuthorization(condition)
)(JobAdDisplayPage);
