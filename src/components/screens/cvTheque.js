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
	toast.success('CV enregistré !', {
		position : toast.POSITION_TOP_RIGHT
	});
};

class cvTheque extends Component {
	constructor(props) {
		super(props);

		this.state = {
			lastName  : '',
			firstName : '',
			job       : '',
			image     : '',
			imageURL  : ''
		};
	}

	//Change for texte
	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	// last name in uppercase

	toInputUppercase = (e) => {
		this.setState({
			[e.target.name]: e.target.value.toUpperCase()
		});
	};

	//Send image
	handleUploadStart = () => {
		this.setState({
			progress : 0
		});
	};

	handleUploadSuccess = (filename) => {
		this.setState({
			image    : filename,
			progress : 100
		});
		firebase.storage().ref('cv').child(filename).getDownloadURL().then((url) =>
			this.setState({
				imageURL : url
			})
		);
	};

	//Send texte

	onSubmit = (event, authUser, place) => {
		event.preventDefault(); // do not refresh the page
		event.target.reset(); // reset form fields
		const db = firebase.firestore();
		db.settings({
			timestampsInSnapshots : true
		});
		const placeRef = db.collection('cv').add({
			created   : firebase.firestore.Timestamp.now(),
			lastName  : this.state.lastName,
			firstName : this.state.firstName,
			imageURL  : this.state.imageURL,
			image     : this.state.image,
			job       : this.state.job
		});

		this.setState({
			lastName  : '',
			firstName : '',
			job       : '',
			image     : '',
			imageURL  : ''
		});
	};

	render() {
		console.log(this.state);
		const { lastName, firstName, job, error } = this.state;

		const isInvalid =
			lastName === '' ||
			firstName === '' ||
			job === '' ||
			lastName === firstName ||
			firstName === job ||
			lastName === job;

		return (
			<div className="container">
				<h1>CVThèque</h1>
				<p className="cvthequePara">
					Merci de remplir le formulaire et d'envoyer votre CV afin que vous apparissiez sur notre base de
					donnée de CV visible par tous. <br />Attention, vos informations seront visibles par tous, merci de
					protéger votre addresse et votre numéro de téléphone si vous le souhaitez.
				</p>
				<form className="cvthequeForm" onSubmit={this.onSubmit}>
					<div className="block">
						<label>Ajoutez votre CV </label>
						<FileUploader
							className="uploadCV marginFormTop"
							accept="application/pdf,application/vnd.ms-word"
							name="image"
							storageRef={firebase.storage().ref('cv')}
							onUploadStart={this.onUploadStart}
							onUploadSuccess={this.handleUploadSuccess}
						/>
					</div>

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
						onChange={this.onChange}
					/>

					<TextField
						className="marginFormTop"
						name="job"
						id="outlined-basic"
						label="Poste recherché"
						variant="outlined"
						onChange={this.onChange}
					/>

					{/* <div className="block image">{this.state.image && <img src={this.state.imageURL} />}</div> */}
					<div className="validationBtn">
						<button disabled={isInvalid} type="submit" onClick={notify}>
							Sauvegarder
						</button>
					</div>
					{error && <p>{error.message}</p>}
				</form>
			</div>
		);
	}
}

export default cvTheque;
