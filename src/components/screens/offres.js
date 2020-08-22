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
import Modal from '@material-ui/core/Modal';

class offres extends Component {
	constructor(props) {
		super(props);
		this.state = {
			annonces : [],
			loading  : false
		};
	}

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
		const { annonces, loading } = this.state;
		const list = Object.keys(annonces).map((annonce) => (
			<div>
				<li key={annonces.id}>
					<div>
						{annonces[annonce].name} {annonces[annonce].place}
					</div>
					<div>{annonces[annonce].contrat}</div>
					<div>{annonces[annonce].created.seconds}</div>
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
