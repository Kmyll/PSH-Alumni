import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import Loader from '../../assets/img/loader/loader2.gif';
import { compose } from 'recompose';
import { withAuthorization, withEmailVerification } from '../Session';
import * as ROLES from '../../constants/roles';

class ModifyJobAd extends Component {
	render() {
		return (
			<div>
				<h1>Hallo</h1>
			</div>
		);
	}
}
const condition = (authUser) => authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(withEmailVerification, withAuthorization(condition))(ModifyJobAd);
