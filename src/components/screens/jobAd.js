import React, { Component } from 'react';
import { compose } from 'recompose';
import TextField from '@material-ui/core/TextField';
import firebase from '../Firestore';
import 'firebase/storage';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StyledDropZone } from 'react-drop-zone';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { withAuthorization, withEmailVerification } from '../Session';
import { UserList, UserItem } from '../Users';
import * as ROLES from '../../constants/roles';
import * as ROUTES from '../../constants/routes';

toast.configure();

const notify = () => {
	toast.success('Annonce enregistrée !', {
		position : toast.POSITION_TOP_RIGHT
	});
};

class JobAd extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name        : '',
			contrat     : '',
			place       : '',
			description : '',
			contact     : ''
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
		const placeRef = db.collection('annonces').add({
			created     : firebase.firestore.Timestamp.now(),
			name        : this.state.name,
			contrat     : this.state.contrat,
			place       : this.state.place,
			description : this.state.description,
			contact     : this.state.contact
		});

		this.setState({
			name        : '',
			contrat     : '',
			place       : '',
			description : '',
			contact     : ''
		});
	};

	render() {
		console.log(this.state);
		const { name, contrat, place, description, contact, error } = this.state;

		const isInvalid = name === '' || contrat === '' || place === '' || description === '' || contact === '';

		return (
			<div className="container">
				<h1>Poster une offre d'emploi ou de stage</h1>

				<form className="cvthequeForm" onSubmit={this.onSubmit}>
					<TextField
						className="marginFormBottom"
						id="outlined-basic"
						name="name"
						label="Intitulé du poste"
						variant="outlined"
						onChange={this.onChange}
					/>

					<FormControl variant="outlined" className="selectJob">
						<InputLabel id="demo-simple-select-outlined-label">contrat de poste</InputLabel>
						<Select
							labelId="demo-simple-select-outlined-label"
							id="demo-simple-select-outlined"
							onChange={this.onChange}
							label="contrat de poste"
							name="contrat"
							value="CDD"
						>
							<MenuItem value="CDD">
								<em>CDD</em>
							</MenuItem>
							<MenuItem value="CDI">CDI</MenuItem>
							<MenuItem value="Stage">Stage</MenuItem>
							<MenuItem value="Alternance">Alternance</MenuItem>
						</Select>
					</FormControl>

					<TextField
						className="marginFormTop"
						name="place"
						id="outlined-basic"
						label="Lieu du poste"
						variant="outlined"
						onChange={this.onChange}
					/>

					<TextField
						className="marginFormTop"
						name="description"
						multiline
						rows={8}
						id="outlined-basic"
						label="Description"
						variant="outlined"
						onChange={this.onChange}
					/>

					<TextField
						className="marginFormTop"
						name="contact"
						id="outlined-basic"
						label="email ou personne à contacter"
						variant="outlined"
						onChange={this.onChange}
					/>

					{/* <div className="block image">{this.state.image && <img src={this.state.imageURL} />}</div> */}
					<div className="validationBtn ">
						<button disabled={isInvalid} contrat="submit" onClick={notify}>
							Envoyer
						</button>
					</div>
					{error && <p>{error.message}</p>}
				</form>
			</div>
		);
	}
}

const condition = (authUser) => authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(withEmailVerification, withAuthorization(condition))(JobAd);
