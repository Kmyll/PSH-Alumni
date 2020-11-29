import React, { Component } from 'react';
import firebase from '../Firestore';
import * as ROLES from '../../constants/roles';
import * as ROUTES from '../../constants/routes';

export default class Eventmanagement extends Component {
	constructor(props) {
		super(props);
		this.state = {
			events  : [],
			loading : false
		};
	}

	componentDidMount() {
		const db = firebase.firestore();
		db
			.collection('events')
			.orderBy('created', 'desc')
			.get()
			.then((snapshot) => {
				const events = [];
				snapshot.forEach((doc) => {
					const data = doc.data();
					events.push(data);
				});
				this.setState({ events: events });
			})
			.catch((error) => console.log(error));
	}

	render() {
		console.log('this.state', this.state.events);
		const { events, loading, value } = this.state;
		const list = Object.keys(events).map((event) => (
			// <div>
			// 	<li key={events.uid}>
			// 		<div>
			// 			{events[event].lastName} {events[event].firstName}
			// 		</div>
			// 		<div>{events[event].email}</div>
			// 		<div>{events[event].lastdiploma}</div>
			// 		<div>{events[event].lastNamePerson2}</div>
			// 		<div>{events[event].firstNamePerson2}</div>
			// 	</li>
			// </div>

			<table>
				<thead>
					<tr>
						<td>Nom</td>
						<td>Prénom</td>
						<td>Email</td>
						<td>Dernier diplome</td>
						<td>Nom invité</td>
						<td>Prénom invité</td>
					</tr>
				</thead>
				<tbody key={events.uid}>
					<tr>
						<td>
							{events[event].lastName} {events[event].firstName}
						</td>
						<td>{events[event].email}</td>
						<td>{events[event].lastdiploma}</td>
						<td>{events[event].lastNamePerson2}</td>
						<td>{events[event].firstNamePerson2}</td>
					</tr>
				</tbody>
			</table>
		));

		return (
			<section className="resumeDisplay container">
				<h1>Participations évènements</h1>
				<div>{list}</div>
			</section>
		);
	}
}
