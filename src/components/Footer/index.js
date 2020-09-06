import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="footer">
				<section className="flexFooter">
					<p>PSH Alumni - 2020</p>
					<section className="footerLink">
						<Link to="./status">Status</Link>
						<Link to="./confidentialite">Politique de confidentialité</Link>
					</section>
				</section>
			</div>
		);
	}
}

export default Footer;
