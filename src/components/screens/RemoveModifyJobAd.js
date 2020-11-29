import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'recompose';
import { Link } from 'react-router-dom';
import { GrUserSettings } from 'react-icons/gr';
import { BiLogInCircle } from 'react-icons/bi';
import { BsCardChecklist } from 'react-icons/bs';
import { MdComputer } from 'react-icons/md';

import { withAuthorization, withEmailVerification } from '../Session';
import { UserList, UserItem } from '../Users';
import * as ROLES from '../../constants/roles';
import * as ROUTES from '../../constants/routes';
import Admin from '../../assets/img/admin.png';

const RemoveModifyJobAd = () => (
	<div className="container">
		<div>
			<hr />
			<section className="usersAdminBtn">
				<button type="button">
					{' '}
					{/* onClick={this.onSendPasswordResetEmail} */}
					Modifier l'annonce
				</button>
				<button type="button" onClick={this.deleteAccount}>
					Supprimer l'annonce
				</button>
			</section>
		</div>
	</div>
);

const condition = (authUser) => authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(withEmailVerification, withAuthorization(condition))(RemoveModifyJobAd);
