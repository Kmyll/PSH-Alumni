import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const SignUpPage = () => (
	<div className="container">
		<h1>Inscriptions</h1>
		<SignUpForm />
	</div>
);

const INITIAL_STATE = {
	username    : '',
	email       : '',
	passwordOne : '',
	passwordTwo : '',
	isAdmin     : false,
	error       : null
};

const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use';

const ERROR_MSG_ACCOUNT_EXISTS = `
Un compte avec cet email existe déjà. 
Essayez de vous conecter avec cette adresse email. 
Si vous avez perdu votre mot de passe, cliquez sur mot de passe oublié.
`;

class SignUpFormBase extends Component {
	constructor(props) {
		super(props);

		this.state = { ...INITIAL_STATE };
	}

	onSubmit = (event) => {
		const { username, email, passwordOne, isAdmin } = this.state;
		const roles = {};

		if (isAdmin) {
			roles[ROLES.ADMIN] = ROLES.ADMIN;
		}

		this.props.firebase
			.doCreateUserWithEmailAndPassword(email, passwordOne)
			.then((authUser) => {
				// Create a user in your Firebase realtime database
				return this.props.firebase.user(authUser.user.uid).set(
					{
						username,
						email,
						roles
					},
					{ merge: true }
				);
			})
			.then(() => {
				return this.props.firebase.doSendEmailVerification();
			})
			.then(() => {
				this.setState({ ...INITIAL_STATE });
				this.props.history.push(ROUTES.HOME);
			})
			.catch((error) => {
				if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
					error.message = ERROR_MSG_ACCOUNT_EXISTS;
				}

				this.setState({ error });
			});

		event.preventDefault();
	};

	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	onChangeCheckbox = (event) => {
		this.setState({ [event.target.name]: event.target.checked });
	};

	render() {
		const { username, email, passwordOne, passwordTwo, isAdmin, error } = this.state;

		const isInvalid = passwordOne !== passwordTwo || passwordOne === '' || email === '' || username === '';

		return (
			<form className="registerForm" onSubmit={this.onSubmit}>
				<TextField
					id="outlined-basic"
					label="Nom complet"
					variant="outlined"
					name="username"
					value={username}
					onChange={this.onChange}
					type="text"
				/>

				<TextField
					id="outlined-basic"
					label="adresse email"
					variant="outlined"
					name="email"
					value={email}
					onChange={this.onChange}
					type="email"
				/>
				<TextField
					id="outlined-basic"
					label="Mot de passe"
					variant="outlined"
					name="passwordOne"
					value={passwordOne}
					onChange={this.onChange}
					type="password"
				/>
				<TextField
					id="outlined-basic"
					label="Mot de passe"
					variant="outlined"
					name="passwordTwo"
					value={passwordTwo}
					onChange={this.onChange}
					type="password"
				/>

				<label>
					Admin :
					<input
						className="adminCheckbox"
						name="isAdmin"
						type="checkbox"
						checked={isAdmin}
						onChange={this.onChangeCheckbox}
					/>
				</label>
				<button disabled={isInvalid} type="submit">
					Sign Up
				</button>

				{error && <p>{error.message}</p>}
			</form>
		);
	}
}

const SignUpLink = () => (
	<p>
		Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
	</p>
);

const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };
