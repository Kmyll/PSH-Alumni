import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { withFirebase } from '../Firebase';
import adminUsers from '../../assets/img/adminUsers.png';
import firebase from '../Firestore';

toast.configure();

const notify = () => {
	if (this.state.isVerified) {
		toast.success("L'utilisateur a bien été supprimé.");
	} else {
		toast.error('Une erreur est survenue, merci de réessayer.');
	}
};

class UserItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading : false,
			user    : null,
			...props.location.state
		};
	}

	componentDidMount() {
		if (this.state.user) {
			return;
		}

		this.setState({ loading: true });

		this.unsubscribe = this.props.firebase.user(this.props.match.params.id).onSnapshot((snapshot) => {
			this.setState({
				user    : snapshot.data(),
				loading : false
			});
		});
	}

	componentWillUnmount() {
		this.unsubscribe && this.unsubscribe();
	}

	onSendPasswordResetEmail = () => {
		this.props.firebase.doPasswordReset(this.state.user.email);
	};

	//delete user
	deleteAccount = () => {
		console.log('mounted');
		const db = firebase.firestore();
		db
			.collection('users')
			.doc(this.state.user.uid)
			.delete()
			.then(function() {
				toast.success('✔️ The user was succesfully deleted.');
				window.location.href = '/admin';
			})
			.catch(function(error) {
				toast.danger('Something went wrong. Please try again.');
			});
	};

	render() {
		const { user, loading } = this.state;

		return (
			<div>
				{/* <h2>Vous êtes sur le profil utilisateur : {this.props.match.params.id}</h2> */}
				{loading && <div>Loading ...</div>}
				{user && (
					<div className="adminUsersDetails">
						<section>
							<span>
								<strong>ID :</strong> {user.uid}
							</span>
							<span>
								<strong>E-Mail :</strong> {user.email}
							</span>
							<span>
								<strong>nom :</strong> {user.username}
							</span>
						</section>
						<section className="usersAdminBtn">
							<button type="button" onClick={this.onSendPasswordResetEmail}>
								Réinitialiser le mot de passe
							</button>
							<button type="button" onClick={this.deleteAccount}>
								Supprimer l'utilisateur
							</button>
						</section>
					</div>
				)}
				<img className="adminUsersPic" src={adminUsers} />{' '}
			</div>
		);
	}
}

export default withFirebase(UserItem);
