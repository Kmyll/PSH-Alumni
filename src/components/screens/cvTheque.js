import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withFirebase as firebase } from '../Firebase';
import FileUploader from 'react-firebase-file-uploader';

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
		firebase.storage().ref('resumeFile').child(filename).getDownloadURL().then((url) =>
			this.setState({
				imageURL : url
			})
		);
	};

	//Send texte

	onSubmit = (event, authUser, place) => {
		event.preventDefault();
		event.target.reset();
		const db = firebase.firestore();
		db.settings({
			timestampsInSnapshots : true
		});
		const placeRef = db.collection('cv').add({
			created   : firebase.firestore.Timestamp.now(),
			lastName  : this.state.lastName,
			firstName : this.state.firstName,
			imageURL  : this.state.imageURL,
			job       : this.state.job
		});

		this.setState({
			lastName  : '',
			firstName : '',
			job       : ''
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
					<TextField id="outlined-basic" label="Nom de famille" variant="outlined" onChange={this.onChange} />
					<TextField id="outlined-basic" label="Prénom" variant="outlined" onChange={this.onChange} />
					<TextField
						id="outlined-basic"
						label="Poste recherché"
						variant="outlined"
						onChange={this.onChange}
					/>
					<div className="block">
						<label>Add a picture</label>

						<FileUploader
							accept="image/*"
							name="image"
							storageRef={firebase.storage().ref('test')}
							onUploadStart={this.onUploadStart}
							onUploadSuccess={this.handleUploadSuccess}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default cvTheque;
