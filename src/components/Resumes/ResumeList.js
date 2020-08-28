import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import Loader from '../../assets/img/loader/loader2.gif';

class PositionList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading : false,
			cv      : []
		};
	}

	componentDidMount() {
		this.setState({ loading: true });

		this.props.firebase.cv().onSnapshot((snapshot) => {
			let cv = [];

			snapshot.forEach((doc) => cv.push({ ...doc.data(), uid: doc.id }));

			this.setState({
				cv,
				loading : false
			});
		});
	}

	render() {
		const { cv, loading } = this.state;
		console.log(this.state);
		return (
			<div>
				<h1>Liste des CVs</h1>
				{loading && (
					<div className="loaderImg">
						<img src={Loader} />
					</div>
				)}
				<ul className="adminResumeList">
					{cv.map((resume) => (
						<li key={resume.uid}>
							<span>
								<strong>ID :</strong> {resume.uid}
							</span>
							<span>
								<strong>Nom :</strong> {resume.lastName} {resume.firstName}
							</span>
							<span>
								<strong>Titre:</strong> {resume.job}
							</span>

							<span>
								<Link
									to={{
										pathname : `${ROUTES.RESUME}/${resume.uid}`,
										state    : { resume }
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

export default withFirebase(PositionList);
