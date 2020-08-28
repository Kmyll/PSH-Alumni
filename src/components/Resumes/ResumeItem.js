import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { withFirebase } from '../Firebase';
import firebase from '../Firestore';
import * as ROLES from '../../constants/roles';
import _ from 'lodash';
import renderHTML from 'react-render-html';
import { Link } from 'react-router-dom';
import Resume from '../../assets/img/resume.png';
import Loader from '../../assets/img/loader/loader2.gif';

toast.configure();

const notify = () => {
	if (this.state.isVerified) {
		toast.success("Le CV a bien été supprimée'.");
	} else {
		toast.error('Une erreur est survenue, merci de réessayer.');
	}
};

class PositionItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading : false,
			resume  : null,
			...props.location.state
		};
	}

	componentDidMount() {
		if (this.state.resume) {
			return;
		}

		this.setState({ loading: true });

		this.unsubscribe = this.props.firebase.resume(this.props.match.params.id).onSnapshot((snapshot) => {
			this.setState({
				resume  : snapshot.data(),
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
			.collection('cv')
			.doc(this.state.resume.uid)
			.delete()
			.then(function() {
				toast.success('✔️ Le CV a bien été supprimé');
				window.location.href = '/job';
			})
			.catch(function(error) {
				toast.danger('Une erreur est survenue, merci de réessayer.');
			});
	};

	render() {
		const { resume, loading } = this.state;
		console.log(this.state);
		return (
			<div>
				<h2 className="adTitle">{resume.name}</h2>
				{loading && (
					<div className="loaderImg">
						<img src={Loader} />
					</div>
				)}
				{resume && (
					<div className="adminResumesDetails">
						<h1>
							CV de {resume.firstName} {resume.lastName}
						</h1>
						<section>
							<div>
								<div>
									<span>
										<strong>ID :</strong> {resume.uid}
									</span>
									<span>
										<strong>Nom :</strong> {resume.lastName} {resume.firstName}
									</span>
									<span>
										<strong>Poste :</strong> {resume.job}
									</span>
								</div>
								<div className="CVLogo">
									<a target="_blank" href={resume.imageURL}>
										<img className="cvImg" src={Resume} />
									</a>
								</div>
							</div>
							<div>
								<section className="ResumeAdminBtn">
									<button type="button" onClick={this.deleteAccount}>
										Supprimer
									</button>
								</section>
							</div>
						</section>
					</div>
				)}
			</div>
		);
	}
}

export default withFirebase(PositionItem);
