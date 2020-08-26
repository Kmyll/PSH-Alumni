import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';

class Honeycomb extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div>
				<ul class="honeycomb" lang="fr">
					<li class="honeycomb-cell">
						<Link to="/account">
							<img
								class="honeycomb-cell__image"
								src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80"
							/>
							<div class="honeycomb-cell__title">Mon compte</div>
						</Link>
					</li>

					<li class="honeycomb-cell">
						<Link to="/events">
							<img
								class="honeycomb-cell__image"
								src="https://images.unsplash.com/photo-1561912774-79769a0a0a7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
							/>
							<div class="honeycomb-cell__title">Participer aux évènements</div>
						</Link>
					</li>
					<li class="honeycomb-cell">
						<Link to="/recrutement">
							<img
								class="honeycomb-cell__image"
								src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
							/>
							<div class="honeycomb-cell__title">Recrutement</div>
						</Link>
					</li>
					<li class="honeycomb-cell">
						<Link to="/job">
							<img
								class="honeycomb-cell__image"
								src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
							/>
							<div class="honeycomb-cell__title">Consulter les offres</div>
						</Link>
					</li>
					<li className="honeycomb-cell">
						<Link to="/cvtheque">
							<img
								className="honeycomb-cell__image"
								src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
							/>
							<div className="honeycomb-cell__title">CVThèque</div>
						</Link>
					</li>
					<li className="honeycomb-cell">
						<Link to="/contact">
							<img
								class="honeycomb-cell__image"
								src="https://images.unsplash.com/photo-1586769852044-692d6e3703f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
							/>
							<div class="honeycomb-cell__title">Contact</div>
						</Link>
					</li>
					<li className="honeycomb-cell signoutBtn">
						<img
							class="honeycomb-cell__image"
							src="https://images.unsplash.com/photo-1545805973-a16124ed9629?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
						/>

						<SignOutButton />
					</li>
				</ul>
			</div>
		);
	}
}

export default Honeycomb;
