import React, { Component } from 'react';
import firebase from '../Firestore';

class recruterpsh extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cv      : 'null',
			loading : false,
			term    : ''
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
		console.log(this.state);
		const { cv, loading, term } = this.state;
		return (
			<div>
				<p>Hello</p>
			</div>
		);
	}
}

export default recruterpsh;
