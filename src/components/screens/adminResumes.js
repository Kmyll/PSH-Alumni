import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'recompose';

import { withAuthorization, withEmailVerification } from '../Session';
import { ResumeList, ResumeItem } from '../Resumes';
import * as ROLES from '../../constants/roles';
import * as ROUTES from '../../constants/routes';

const AdminResumePage = () => (
	<div className="container">
		<Switch>
			<Route exact path={ROUTES.RESUME_DETAILS} component={ResumeItem} />
			<Route exact path={ROUTES.RESUME} component={ResumeList} />
		</Switch>
	</div>
);

const condition = (authUser) => authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(withEmailVerification, withAuthorization(condition))(AdminResumePage);
