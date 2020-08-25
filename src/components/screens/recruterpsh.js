import React, { Component } from 'react';
import firebase from '../Firestore';
import { GoFilePdf } from 'react-icons/go';

class recruterpsh extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cv      : [],
			loading : false
		};
	}

	componentDidMount() {
		const db = firebase.firestore();
		db
			.collection('cv')
			.orderBy('created', 'desc')
			.get()
			.then((snapshot) => {
				const cv = [];
				snapshot.forEach((doc) => {
					const data = doc.data();
					cv.push(data);
				});
				this.setState({ cv: cv });
			})
			.catch((error) => console.log(error));
	}

	render() {
		console.log('this.state', this.state.cv);
		const { cv, loading, value } = this.state;

		const list = Object.keys(cv).map((resume) => (
			<div>
				<li key={cv.id}>
					<div>
						{cv[resume].lastName} {cv[resume].firstName}
					</div>
					<div>{cv[resume].job}</div>
					<a target="_blank" href={cv[resume].imageURL}>
						<button>
							<GoFilePdf />
						</button>
					</a>
				</li>
			</div>
		));

		return (
			<section className="resumeDisplay container">
				<h1>Liste des CV</h1>
				<ul>{list}</ul>
			</section>
		);
	}
}

export default recruterpsh;
