import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import firebase from '../Firestore';

class OffresItem extends Component {
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
						</section>
					</div>
				)}
			</div>
		);
	}
}

export default withFirebase(OffresItem);
