import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { withFirebase } from '../Firebase';
import firebase from '../Firestore';
import * as ROLES from '../../constants/roles';
import _ from 'lodash';
import renderHTML from 'react-render-html';
import { Link } from 'react-router-dom';
import Loader from '../../assets/img/loader/loader2.gif';
import { compose } from 'recompose';
import * as ROUTES from '../../constants/routes';
import { withAuthorization, withEmailVerification } from '../Session';

toast.configure();

const notify = () => {
	if (this.state.isVerified) {
		toast.success("L'offre a bien été supprimée'.");
	} else {
		toast.error('Une erreur est survenue, merci de réessayer.');
	}
};

class AdminJobItem extends Component {
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
				toast.success("✔️ l'annonce a bien été supprimée");
				window.location.href = '/jobManagement';
			})
			.catch(function(error) {
				toast.danger('Une erreur est survenue, merci de réessayer plus tard');
			});
	};

	render() {
		const { annonce, loading } = this.state;

		return (
			<div>
				<h2 className="adTitle">{annonce.name}</h2>
				{loading && (
					<div className="loaderImg">
						<img src={Loader} />
					</div>
				)}
				{annonce && (
					<div className="adminJobDetails">
						<section>
							<div>
								<div>
									<strong>ID :</strong> {annonce.uid}
								</div>
								<div>
									<strong>contrat :</strong> {annonce.contrat}
								</div>
								<div>
									<strong>Lieu :</strong> {annonce.place}
								</div>
								<br />
							</div>
						</section>
						<div className="JobManagementCta">
							<div>
								<Link to="/jobManagement">
									<button className="AdminJobBtn">Retour</button>
								</Link>
							</div>
							<div>
								<button type="button" className="AdminJobBtn deleteAd" onClick={this.deleteAccount}>
									Supprimer l'annonce
								</button>
							</div>
							<div>
								<Link
									to={{
										pathname : `${ROUTES.MODIFYJOBAD}/${annonce.uid}`,
										state    : { annonce }
									}}
								>
									<button className="AdminJobBtn">Modifier</button>
								</Link>
							</div>
						</div>
					</div>
				)}
			</div>
		);
	}
}

const condition = (authUser) => authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(withEmailVerification, withAuthorization(condition))(AdminJobItem);
