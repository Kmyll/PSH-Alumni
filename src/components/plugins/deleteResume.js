import React, { Component } from 'react';
import { compose } from 'recompose';
import TextField from '@material-ui/core/TextField';
import firebase from '../Firestore';
import 'firebase/storage';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StyledDropZone } from 'react-drop-zone';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
import { GoFilePdf } from 'react-icons/go';

import { withAuthorization, withEmailVerification } from '../Session';
import { UserList, UserItem } from '../Users';
import * as ROLES from '../../constants/roles';
import * as ROUTES from '../../constants/routes';

export default class DeleteResume extends Component {
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
				<li key={cv.uid}>
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
