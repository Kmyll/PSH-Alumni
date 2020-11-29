import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import firebase from '../Firestore';
import FileUploader from 'react-firebase-file-uploader';
import 'firebase/storage';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StyledDropZone } from 'react-drop-zone';
import 'react-drop-zone/dist/styles.css';

toast.configure();

const notify = () => {
	toast.success('Votre inscription a bien été prise en compte, merci.', {
		position : toast.POSITION_TOP_RIGHT
	});
};

export default class Evenements extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lastName         : '',
			firstName        : '',
			email            : '',
			lastdiploma      : '',
			lastNamePerson2  : '',
			firstNamePerson2 : ''
		};
	}

	//Change for texte
	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	//Send texte

	onSubmit = (event, authUser, place) => {
		event.preventDefault(); // do not refresh the page
		event.target.reset(); // reset form fields
		const db = firebase.firestore();
		db.settings({
			timestampsInSnapshots : true
		});
		const placeRef = db.collection('events').add({
			created          : firebase.firestore.Timestamp.now(),
			lastName         : this.state.lastName,
			firstName        : this.state.firstName,
			email            : this.state.email,
			lastdiploma      : this.state.lastdiploma,
			lastNamePerson2  : this.state.lastNamePerson2,
			firstNamePerson2 : this.state.firstNamePerson2
		});

		this.setState({
			lastName         : '',
			firstName        : '',
			email            : '',
			lastdiploma      : '',
			lastNamePerson2  : '',
			firstNamePerson2 : ''
		});
	};

	render() {
		console.log(this.state);
		const { lastName, firstName, email, lastdiploma, lastNamePerson2, firstNamePerson2, error } = this.state;

		// const isInvalid = lastName === '' || firstName === '' || email === '' || lastdiploma === '';

		return (
			<div className="container">
				<h1>S'inscrire</h1>
				<form className="cvthequeForm" onSubmit={this.onSubmit}>
					<h3>Personne 1</h3>

					<TextField
						className="marginFormTop"
						id="outlined-basic"
						name="lastName"
						label="Nom de famille"
						variant="outlined"
						onChange={this.toInputUppercase}
					/>

					<TextField
						className="marginFormTop"
						id="outlined-basic"
						name="firstName"
						label="Prénom"
						variant="outlined"
					/>

					<TextField
						className="marginFormTop"
						id="outlined-basic"
						name="email"
						label="email"
						variant="outlined"
					/>

					<TextField
						className="marginFormTop"
						id="outlined-basic"
						name="lastdiploma"
						label="Dernier diplôme"
						variant="outlined"
					/>

					<hr />
					<h3>Personne 2 (optionnel)</h3>

					<TextField
						className="marginFormTop"
						id="outlined-basic"
						name="lastNamePerson2"
						label="Nom de famille"
						variant="outlined"
						onChange={this.toInputUppercase}
					/>
					<TextField
						className="marginFormTop"
						id="outlined-basic"
						name="firstNamePerson2"
						label="Prénom"
						variant="outlined"
					/>
					<div className="validationBtn">
						<button
							// disabled={isInvalid}
							type="submit"
							onClick={notify}
						>
							Sauvegarder
						</button>
					</div>
					{error && <p>{error.message}</p>}
				</form>
			</div>
		);
	}
}
