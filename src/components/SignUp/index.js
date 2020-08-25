import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
	terminale   : '',
	bts         : '',
	licences    : '',
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
		const { username, email, passwordOne, terminale, bts, licences, isAdmin } = this.state;
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
						terminale,
						bts,
						licences,
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
		const { username, email, passwordOne, passwordTwo, isAdmin, terminale, bts, licences, error } = this.state;

		const isInvalid = passwordOne !== passwordTwo || passwordOne === '' || email === '' || username === '';
		console.log(this.state);
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

				{/* FILIERES */}

				<FormControl variant="outlined">
					<InputLabel id="demo-simple-select-outlined-label">Section terminale</InputLabel>
					<Select
						labelId="demo-simple-select-outlined-label"
						id="demo-simple-select-outlined"
						value={terminale}
						onChange={this.onChange}
						name="terminale"
					>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						<MenuItem value="ES">ES</MenuItem>
						<MenuItem value="L">L</MenuItem>
						<MenuItem value="STMG">STMG</MenuItem>
						<MenuItem value="ST2S">ST2S</MenuItem>
					</Select>
				</FormControl>

				<FormControl variant="outlined">
					<InputLabel id="demo-simple-select-outlined-label">Section BTS</InputLabel>
					<Select
						labelId="demo-simple-select-outlined-label"
						id="demo-simple-select-outlined"
						value={bts}
						onChange={this.onChange}
						label="BTS"
						name="bts"
					>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						<MenuItem value="Gestion_PME">Gestion de la PME</MenuItem>
						<MenuItem value="Action_Manageriale">Support à l’Action Managériale</MenuItem>
						<MenuItem value="Comptabilite_Gestion">Comptabilité et Gestion</MenuItem>
						<MenuItem value="Banque_conseiller_clientele">Banque Conseiller de Clientèle</MenuItem>
						<MenuItem value="Communication">Communication</MenuItem>
						<MenuItem value="Dietetique">Diététique</MenuItem>
						<MenuItem value="Technico_commercial">Technico-commercial</MenuItem>
					</Select>
				</FormControl>

				<FormControl variant="outlined">
					<InputLabel id="demo-simple-select-outlined-label">Licences et Bachelors</InputLabel>
					<Select
						labelId="demo-simple-select-outlined-label"
						id="demo-simple-select-outlined"
						value={licences}
						onChange={this.onChange}
						label="BTS"
						name="licences"
					>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						<MenuItem value="licenceProBanque">Licence professionnelle banque</MenuItem>
						<MenuItem value="certificationOME">Certification OME</MenuItem>
						<MenuItem value="CertificatCommunicationDigitale">
							Certificat de communication digitale
						</MenuItem>
						<MenuItem value="BachelorCoventryUniversity">Bachelor of Coventry University</MenuItem>
						<MenuItem value="ManagementProjetsInternationaux">
							Licence professionelle management de projets internationaux
						</MenuItem>
					</Select>
				</FormControl>

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
