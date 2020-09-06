import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import Loader from '../../assets/img/loader/loader2.gif';
import * as ROLES from '../../constants/roles';

class JobAdDisplayList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading  : false,
			annonces : []
		};
	}

	componentDidMount() {
		this.setState({ loading: true });

		this.props.firebase.annonces().onSnapshot((snapshot) => {
			let annonces = [];

			snapshot.forEach((doc) => annonces.push({ ...doc.data(), uid: doc.id }));

			this.setState({
				annonces,
				loading  : false
			});
		});
	}

	render() {
		const { annonces, loading } = this.state;

		return (
			<div>
				<h1>Offres : emplois et stages</h1>
				{loading && (
					<div className="loaderImg">
						<img src={Loader} />
					</div>
				)}
				<ul className="adminJobsList">
					{annonces.map((annonce) => (
						<li key={annonce.uid}>
							{/* <span>
								<strong>ID :</strong> {annonce.uid}
							</span> */}
							<span>
								<strong>Entreprise : </strong> {annonce.company}
							</span>
							<span>
								<strong>Poste :</strong> {annonce.name}
							</span>

							<span>
								<strong>Contrat :</strong> {annonce.contrat}
							</span>
							<span>
								<strong>lieu :</strong> {annonce.place}
							</span>
							<span>
								<Link
									to={{
										pathname : `${ROUTES.JOBADDISPLAY}/${annonce.uid}`,
										state    : { annonce }
									}}
								>
									Détails
								</Link>
							</span>
						</li>
					))}
				</ul>
			</div>
		);
	}
}
export default withFirebase(JobAdDisplayList);
