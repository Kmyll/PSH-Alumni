import React from 'react';
import { Link } from 'react-router-dom';
import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
	<Link to="/">
		<p onClick={firebase.doSignOut}>Déconnexion</p>
	</Link>
);

export default withFirebase(SignOutButton);
