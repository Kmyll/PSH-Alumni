import React from 'react';
import AuthUserContext from './context';
import { withFirebase } from '../Firebase';
import confirmEmail from '../../assets/img/confirmEmail.png';

const needsEmailVerification = (authUser) =>
	authUser &&
	!authUser.emailVerified &&
	authUser.providerData.map((provider) => provider.providerId).includes('password');

const withEmailVerification = (Component) => {
	class WithEmailVerification extends React.Component {
		constructor(props) {
			super(props);

			this.state = { isSent: false };
		}

		onSendEmailVerification = () => {
			this.props.firebase.doSendEmailVerification().then(() => this.setState({ isSent: true }));
		};

		render() {
			return (
				<AuthUserContext.Consumer>
					{(authUser) =>

							needsEmailVerification(authUser) ? <div className="container">
								{
									this.state.isSent ? <p>
										Bienvenue sur PSH Alumni. Merci de vérifier votre adresse email via le lien
										envoyé. Si vous ne l'avez pas reçu, vérifiez votre dossier de spams. Si vous
										arrivez sur cete page via le lien email, merci de rafraichir la page.
									</p> :
									<p>
										Bienvenue sur PSH Alumni. Merci de vérifier votre adresse email via le lien
										envoyé. Si vous ne l'avez pas reçu, vérifiez votre dossier de spams ou renvoyez
										un email de confirmation en cliquant sur le bouton ci dessous :
									</p>}

								<button
									className="confirmationEmail"
									type="button"
									onClick={this.onSendEmailVerification}
									disabled={this.state.isSent}
								>
									Renvoyer un email de confirmation
								</button>
								<img className="EmailUsersPic" src={confirmEmail} />
							</div> :
							<Component {...this.props} />}
				</AuthUserContext.Consumer>
			);
		}
	}

	return withFirebase(WithEmailVerification);
};

export default withEmailVerification;
