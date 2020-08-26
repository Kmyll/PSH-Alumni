import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { withFirebase } from '../Firebase';
import firebase from '../Firestore';
import * as ROLES from '../../constants/roles';
import _ from 'lodash';
import renderHTML from 'react-render-html';
import { Link } from 'react-router-dom';

toast.configure();

const notify = () => {
	if (this.state.isVerified) {
		toast.success("L'offre a bien été supprimée'.");
	} else {
		toast.error('Une erreur est survenue, merci de réessayer.');
	}
};

class JobItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading : false,
			annonce : null,
			...props.location.state
		};
	}

	componentDidMount() {
		if (this.state.annonce) {
			return;
		}

		this.setState({ loading: true });

		this.unsubscribe = this.props.firebase.annonce(this.props.match.params.id).onSnapshot((snapshot) => {
			this.setState({
				annonce : snapshot.data(),
				loading : false
			});
		});
	}

	componentWillUnmount() {
		this.unsubscribe && this.unsubscribe();
	}

	//delete user
	deleteAccount = () => {
		console.log('mounted');
		const db = firebase.firestore();
		db
			.collection('annonces')
			.doc(this.state.annonce.uid)
			.delete()
			.then(function() {
				toast.success('✔️ The user was succesfully deleted.');
				window.location.href = '/job';
			})
			.catch(function(error) {
				toast.danger('Something went wrong. Please try again.');
			});
	};

	// ADD EDIT/DELETE BUTTON FOR ADMIN ONLY
	ctaButtons = () => {
		if (ROLES.ADMIN) {
			return (
				<div>
					<hr />
					<section className="usersAdminBtn">
						<button type="button">
							{' '}
							{/* onClick={this.onSendPasswordResetEmail} */}
							Modifier l'annonce
						</button>
						<button type="button" onClick={this.deleteAccount}>
							Supprimer l'annonce
						</button>
					</section>
				</div>
			);
		}
	};

	//render posts from firebase
	renderAnnonce() {
		return (
			<div>
				<p>{renderHTML(this.state.annonce.description)}</p>
				<p>{renderHTML(this.state.annonce.profil)}</p>
			</div>
		);
	}

	render() {
		const { annonce, loading } = this.state;

		return (
			<div>
				<h2 className="adTitle">{annonce.name}</h2>
				{loading && <div>Loading ...</div>}
				{annonce && (
					<div className="adminUsersDetails">
						<section>
							<div>
								<span>
									<strong>ID :</strong> {annonce.uid}
								</span>
								<span>
									<strong>contrat :</strong> {annonce.contrat}
								</span>
								<span>
									<strong>Lieu :</strong> {annonce.place}
								</span>
								<br />
								<hr />
							</div>
							<div>
								<h3>Description du poste :</h3>
								<p>{renderHTML(this.state.annonce.description)}</p>
							</div>
							<hr />
							<div className="test">
								<h3>Profil recherché : </h3>
								<p>{renderHTML(this.state.annonce.profil)}</p>
							</div>
							<hr />
							<div>
								<h3>Contact : </h3> {annonce.contact}
							</div>
							<Link to="/job">
								<button className="backBtn">Retour</button>
							</Link>
							{this.ctaButtons()}
						</section>
					</div>
				)}
			</div>
		);
	}
}

export default withFirebase(JobItem);
