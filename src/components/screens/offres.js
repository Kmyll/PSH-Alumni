import React, { Component } from 'react';
import { compose } from 'recompose';
import TextField from '@material-ui/core/TextField';
import firebase from '../Firestore';
import 'firebase/storage';
import 'react-toastify/dist/ReactToastify.css';
import { withAuthorization, withEmailVerification } from '../Session';
import { UserList, UserItem } from '../Users';
import * as ROLES from '../../constants/roles';
import * as ROUTES from '../../constants/routes';
import { render } from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

class offres extends Component {
	constructor(props) {
		super(props);
		this.state = {
			annonces : [],
			loading  : false,
			open     : false
		};
	}

	onOpenModal = () => {
		this.setState({ open: true });
	};

	onCloseModal = () => {
		this.setState({ open: false });
	};

	componentDidMount() {
		const db = firebase.firestore();
		db
			.collection('annonces')
			.orderBy('created', 'desc')
			.get()
			.then((snapshot) => {
				const annonces = [];
				snapshot.forEach((doc) => {
					const data = doc.data();
					annonces.push(data);
				});
				this.setState({ annonces: annonces });
			})
			.catch((error) => console.log(error));
	}

	render() {
		console.log('this.state', this.state);
		const { annonces, loading, open } = this.state;
		const list = Object.keys(annonces).map((annonce) => (
			<div className="offers">
				<li key={annonces.uid}>
					<div>{annonces[annonce].name}</div>
					<div>{annonces[annonce].place}</div>
					<div>{annonces[annonce].contrat}</div>
					<div>{annonces[annonce].created.seconds}</div>
					<div>
						<div className="openJob" onClick={this.onOpenModal}>
							Voir le poste
						</div>
						<Modal open={open} onClose={this.onCloseModal} className="jobAdModale">
							<h2>{annonces[annonce].name} </h2>
							<p>
								<span>Lieu : </span>
								{annonces[annonce].place}
								<span>Type de poste : </span>
								{annonces[annonce].contrat}
								<span>Description : </span>
								{annonces[annonce].description}
								<span>Contact : </span>
								{annonces[annonce].contact}
							</p>
						</Modal>
					</div>
				</li>
			</div>
		));

		return (
			<div className="container">
				<h1>Consulter nos offres</h1>
				<ul>{list}</ul>
			</div>
		);
	}
}

const condition = (authUser) => authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(withEmailVerification, withAuthorization(condition))(offres);
