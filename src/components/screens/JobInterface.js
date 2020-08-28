import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'recompose';
import { Link } from 'react-router-dom';
import { IoIosBrush } from 'react-icons/io';
import { MdDeleteSweep } from 'react-icons/md';

import { withAuthorization, withEmailVerification } from '../Session';
import { UserList, UserItem } from '../Users';
import * as ROLES from '../../constants/roles';
import * as ROUTES from '../../constants/routes';

const AdminPage = () => (
	<div className="container">
		<h1>Interface d'annonces d'emploi et de stages</h1>
		<section className="adminList">
			<Link to={ROUTES.JOBADFORMPOST}>
				<IoIosBrush /> <span>Poster une offre d'emploi ou de stage</span>
			</Link>
			<Link to={ROUTES.ADMINJOB}>
				<MdDeleteSweep /> <span>Gérer les offres</span>
			</Link>
		</section>
	</div>
);

const condition = (authUser) => authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(withEmailVerification, withAuthorization(condition))(AdminPage);
