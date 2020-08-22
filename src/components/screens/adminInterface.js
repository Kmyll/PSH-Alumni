import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'recompose';
import { Link } from 'react-router-dom';
import { GrUserSettings } from 'react-icons/gr';
import { BiLogInCircle } from 'react-icons/bi';
import { BsCardChecklist } from 'react-icons/bs';

import { withAuthorization, withEmailVerification } from '../Session';
import { UserList, UserItem } from '../Users';
import * as ROLES from '../../constants/roles';
import * as ROUTES from '../../constants/routes';
import { Admin } from '../../assets/img/admin.png';

const AdminPage = () => (
	<div className="container">
		<h1>Admin interface</h1>
		<section className="adminList">
			<Link to={ROUTES.ADMIN}>
				<GrUserSettings /> <span>Utilisateurs</span>
			</Link>
			<Link to={ROUTES.SIGN_UP}>
				<BiLogInCircle /> <span>Inscriptions</span>
			</Link>
			<Link to="#">
				<BsCardChecklist /> <span>liste des CV</span>
			</Link>
		</section>
		<img src={Admin} />
	</div>
);

const condition = (authUser) => authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(withEmailVerification, withAuthorization(condition))(AdminPage);
