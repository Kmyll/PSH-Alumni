import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'recompose';
import { Link } from 'react-router-dom';
import { IoIosBrush } from 'react-icons/io';
import { MdDeleteSweep } from 'react-icons/md';
import { FaPenAlt } from 'react-icons/fa';

import { withAuthorization, withEmailVerification } from '../Session';
import { UserList, UserItem } from '../Users';
import * as ROLES from '../../constants/roles';
import * as ROUTES from '../../constants/routes';
import firebase from '../Firestore';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const notify = () => {
	if (this.state.isVerified) {
		toast.success('The user was successfully deleted. Thank you.');
	} else {
		toast.error('Something went wrong.Plase try again.');
	}
};
class AdminPage extends Component {
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
					annonces.push({ ...doc.data(), uid: doc.id });
				});
				this.setState({ annonces: annonces });
			})
			.catch((error) => console.log(error));
	}

	deleteAccount = () => {
		console.log('mounted');
		const db = firebase.firestore();
		db
			.collection('annonces')
			.doc(this.state.annonces.created)
			.delete()
			.then(function() {
				toast.success("✔️ L'annonce a bien été supprimée");
				window.location.href = '/joblist';
			})
			.catch(function(error) {
				toast.danger('Une erreur est survenue, merci de réessayer');
			});
	};

	render() {
		const { annonces, loading, value } = this.state;

		const list = Object.keys(annonces).map((annonce) => (
			<div>
				<li className="jobListDisplay" key={annonces.id}>
					<div>{annonces[annonce].id}</div>
					<div>{annonces[annonce].name}</div>
					<div>{annonces[annonce].place}</div>
					<div>{annonces[annonce].contrat}</div>
					<div>{annonces[annonce].contact}</div>
					<div className="ctaIcons">
						<FaPenAlt />

						<button type="button" className="BtnDeleteAccount" onClick={this.deleteAccount}>
							<MdDeleteSweep />
						</button>
					</div>
				</li>
			</div>
		));

		return (
			<div className="container">
				<h1>Gestion des emplois et des stages</h1>
				<ul>{list}</ul>
				<section className="adminList" />
			</div>
		);
	}
}

const condition = (authUser) => authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(withEmailVerification, withAuthorization(condition))(AdminPage);
