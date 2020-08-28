import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import Loader from '../../assets/img/loader/loader2.gif';
import { compose } from 'recompose';
import { withAuthorization, withEmailVerification } from '../Session';
import * as ROLES from '../../constants/roles';
import { FaPenAlt } from 'react-icons/fa';

class AdminJobsList extends Component {
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
				<h1>Liste des offres, emplois et stages</h1>
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
								<strong>lieu :</strong> {annonce.place}
							</span>
							<span className="detailsIcon">
								<Link
									to={{
										pathname : `${ROUTES.ADMINJOB}/${annonce.uid}`,
										state    : { annonce }
									}}
								>
									<FaPenAlt />
								</Link>
							</span>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

const condition = (authUser) => authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(withEmailVerification, withAuthorization(condition))(AdminJobsList);
