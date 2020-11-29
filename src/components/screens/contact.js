import React, { Component } from 'react';
import Email from '../../assets/img/contact/email.PNG';
import Facebook from '../../assets/img/contact/facebook2.PNG';
import Instagram from '../../assets/img/contact/instagram.JPG';
import Linkedin from '../../assets/img/contact/linkedin.PNG';

class contact extends Component {
	render() {
		return (
			<div className="container">
				<h1>Contact</h1>

				<p className="contactExplain">
					Pour toute question, suggestion ou demande, vous pouvez nous contacter via nos divers réseaux
					sociaux :
				</p>

				<ul className="contactList">
					<li>
						<a href="mailto:pshalumni@gmail.com">
							<img src={Email} />
							<p>Email</p>
						</a>
					</li>
					<li>
						<a target="_blank" href="https://www.linkedin.com/in/passy-st-honor%C3%A9-alumni-2a1282150/">
							{' '}
							<img src={Linkedin} />
							<p>Linkedin</p>
						</a>
					</li>
					<li>
						<a target="_blank" href="https://www.instagram.com/psh.alumni/">
							{' '}
							<img src={Instagram} />
							<p>Instagram</p>
						</a>
					</li>
					<li>
						<a target="_blank" href="https://www.facebook.com/amicale.passysainthonore/">
							{' '}
							<img src={Facebook} />
							<p>Facebook</p>
						</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default contact;
