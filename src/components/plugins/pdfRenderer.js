import React, { Component } from 'react';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
import renderHTML from 'react-render-html';


class pdfrenderer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			profil      : '',
		};
  }
  
  	onHandleChange = (e) => {
		this.setState({
			profil : e
		});
  };
  
  	onSubmit = (event, authUser, place) => {
		event.preventDefault(); // do not refresh the page
		event.target.reset(); // reset form fields
		const db = firebase.firestore();
		db.settings({
			timestampsInSnapshots : true
		});
		const placeRef = db.collection('test').add({
			created     : firebase.firestore.Timestamp.now(),
			name        : this.state.name,
			type        : this.state.type,
			contrat     : this.state.contrat,
			place       : this.state.place,
			description : this.state.description,
			profil      : '',
			contact     : this.state.contact
		});

		this.setState({
			name        : '',
			type        : '',
			contrat     : '',
			place       : '',
			description : '',
			profil      : '',
			contact     : ''
		});
	};