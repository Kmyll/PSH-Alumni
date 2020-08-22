import React, { Component } from 'react';

import { withFirebase } from '../Firebase';
import adminUsers from '../../assets/img/adminUsers.png';

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
							<button type="button" onClick={this.onSendPasswordResetEmail}>
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
