import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import TextField from '@material-ui/core/TextField';
import { FaLockOpen } from 'react-icons/fa';

const INITIAL_STATE = {
	passwordOne : '',
	passwordTwo : '',
	error       : null
};

class PasswordChangeForm extends Component {
	constructor(props) {
		super(props);

		this.state = { ...INITIAL_STATE };
	}

	onSubmit = (event) => {
		const { passwordOne } = this.state;

		this.props.firebase
			.doPasswordUpdate(passwordOne)
			.then(() => {
				this.setState({ ...INITIAL_STATE });
			})
			.catch((error) => {
				this.setState({ error });
			});

		event.preventDefault();
	};

	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		const { passwordOne, passwordTwo, error } = this.state;

		const isInvalid = passwordOne !== passwordTwo || passwordOne === '';

		return (
			<React.Fragment>
				<h2>
					<FaLockOpen /> Modifier son mot de passe
				</h2>
				<form onSubmit={this.onSubmit} className="passwordChangeForm">
					<TextField
						id="outlined-basic"
						label="Mot de passe"
						variant="outlined"
						name="passwordOne"
						value={passwordOne}
						onChange={this.onChange}
						type="password"
						placeholder="New Password"
					/>
					<TextField
						id="outlined-basic"
						label="Retaper le mot de passe"
						variant="outlined"
						name="passwordTwo"
						value={passwordTwo}
						onChange={this.onChange}
						type="password"
						placeholder="Confirm New Password"
					/>
					<button disabled={isInvalid} type="submit">
						Enregistrer
					</button>

					{error && <p>{error.message}</p>}
				</form>
			</React.Fragment>
		);
	}
}

export default withFirebase(PasswordChangeForm);
