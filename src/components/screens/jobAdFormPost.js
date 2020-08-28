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
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6

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

class Jobadformpost extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name        : '',
			company     : '',
			type        : '',
			contrat     : '',
			place       : '',
			description : '',
			profil      : '',
			contact     : ''
		};
	}

	//Change for texte
	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onHandleChange = (e) => {
		this.setState({
			profil : e
		});
	};

	onChangeDescription = (e) => {
		this.setState({
			description : e
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
			company     : this.state.company,
			type        : this.state.type,
			contrat     : this.state.contrat,
			place       : this.state.place,
			description : this.state.description,
			profil      : this.state.profil,
			contact     : this.state.contact
		});

		this.setState({
			name        : '',
			company     : '',
			type        : '',
			contrat     : '',
			place       : '',
			description : '',
			profil      : '',
			contact     : ''
		});
	};

	render() {
		console.log(this.state);
		const { name, company, type, contrat, place, description, profil, contact, error } = this.state;

		const isInvalid =
			name === '' ||
			company === '' ||
			type === '' ||
			contrat === '' ||
			place === '' ||
			description === '' ||
			profil === '' ||
			contact === '';

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

					<TextField
						className="marginFormBottom"
						id="outlined-basic"
						name="company"
						label="Nom de l'entreprise"
						variant="outlined"
						onChange={this.onChange}
					/>

					<FormControl variant="outlined" className="selectJob">
						<InputLabel id="demo-simple-select-outlined-label">Contrat de poste</InputLabel>
						<Select
							labelId="demo-simple-select-outlined-label"
							id="demo-simple-select-outlined"
							onChange={this.onChange}
							label="contrat de poste"
							name="contrat"
							value={contrat}
						>
							<MenuItem value="CDD">CDD</MenuItem>
							<MenuItem value="CDI">CDI</MenuItem>
							<MenuItem value="Stage">Stage</MenuItem>
							<MenuItem value="Alternance">Alternance</MenuItem>
						</Select>
					</FormControl>

					<TextField
						className="marginFormTop marginFormBottom"
						name="place"
						id="outlined-basic"
						label="Lieu du poste"
						variant="outlined"
						onChange={this.onChange}
					/>
					<FormControl variant="outlined" className="selectJob">
						<InputLabel id="demo-simple-select-outlined-label">Type de poste</InputLabel>
						<Select
							labelId="demo-simple-select-outlined-label"
							id="demo-simple-select-outlined"
							onChange={this.onChange}
							label="Type de poste"
							name="type"
							value={type}
						>
							<MenuItem value="temps complet">Temps complet</MenuItem>
							<MenuItem value="temps partiel">Temps partiel</MenuItem>
							<MenuItem value="mi temps">Mi-temps</MenuItem>
						</Select>
					</FormControl>

					<ReactQuill
						modules={Jobadformpost.modules}
						format={Jobadformpost.formats}
						value={this.state.description}
						onChange={this.onChangeDescription}
						placeholder="Description succinte de l'entreprise et des tâches du poste à pourvoir"
						className="marginFormTop"
						name="description"
					/>

					<ReactQuill
						modules={Jobadformpost.modules}
						format={Jobadformpost.formats}
						value={this.state.profil}
						onChange={this.onHandleChange}
						placeholder="Description du profil recherché"
						className="marginFormTop"
						name="profil"
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

Jobadformpost.modules = {
	toolbar : [
		[
			{
				header : [
					1,
					2,
					3,
					4,
					5,
					6,
					false
				]
			},
			{ font: [] },
			{ align: [] }
		],
		[
			'bold',
			'italic',
			'underline'
		],
		[
			{ list: 'ordered' },
			{ list: 'bullet' }
		],
		[
			'link',
			'image',
			'video'
		]
	]
};

Jobadformpost.formats = [
	'header',
	'font',
	'size',
	'bold',
	'italic',
	'underline',
	'strike',
	'blockquote',
	'list',
	'bullet',
	'link',
	'image',
	'video',
	'code-block'
];

const condition = (authUser) => authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(withEmailVerification, withAuthorization(condition))(Jobadformpost);
