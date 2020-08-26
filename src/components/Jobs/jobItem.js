import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { withFirebase } from '../Firebase';
import firebase from '../Firestore';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import { AuthUserContext } from '../Session';

toast.configure();

const notify = () => {
	if (this.state.isVerified) {
		toast.success("L'utilisateur a bien été supprimé.");
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
			);
		}
	};

	render() {
		const { annonce, loading } = this.state;
		return (
			<div>
				{/* <h2>Vous êtes sur le profil utilisateur : {this.props.match.params.id}</h2> */}
				{loading && <div>Loading ...</div>}
				{annonce && (
					<div className="adminUsersDetails">
						<section>
							<span>
								<strong>ID :</strong> {annonce.uid}
							</span>
							<span>
								<strong>contrat :</strong> {annonce.contrat}
							</span>
							<span>
								<strong>Lieu :</strong> {annonce.place}
							</span>
							<span>
								<strong>Description :</strong> {annonce.description}
							</span>
							<span>
								<strong>Contact : </strong> {annonce.contact}
							</span>
							{this.ctaButtons()}
						</section>
					</div>
				)}
			</div>
		);
	}
}

export default withFirebase(JobItem);
