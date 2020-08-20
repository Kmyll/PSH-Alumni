import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
	apiKey            : 'AIzaSyCZDjLFkcFbv-_U0NACLmB8inEudquqZa4',
	authDomain        : 'psh-alumni.firebaseapp.com',
	databaseURL       : 'https://psh-alumni.firebaseio.com',
	projectId         : 'psh-alumni',
	storageBucket     : 'psh-alumni.appspot.com',
	messagingSenderId : '371602228378',
	appId             : '1:371602228378:web:18ed44d0f1cbd6b0e44b23',
	measurementId     : 'G-CJVH3D4YQP'
};

class Firebase {
	constructor() {
		app.initializeApp(config);

		/* Helper */

		this.fieldValue = app.firestore.FieldValue;
		this.emailAuthProvider = app.auth.EmailAuthProvider;

		/* Firebase APIs */

		this.auth = app.auth();
		this.db = app.firestore();

		/* Social Sign In Method Provider */

		this.googleProvider = new app.auth.GoogleAuthProvider();
		this.facebookProvider = new app.auth.FacebookAuthProvider();
		this.twitterProvider = new app.auth.TwitterAuthProvider();
	}

	// *** Auth API ***

	doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

	doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

	doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);

	doSignInWithFacebook = () => this.auth.signInWithPopup(this.facebookProvider);

	doSignInWithTwitter = () => this.auth.signInWithPopup(this.twitterProvider);

	doSignOut = () => this.auth.signOut();

	doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

	doSendEmailVerification = () =>
		this.auth.currentUser.sendEmailVerification({
			// url : process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT
			url : 'http://localhost:3000'
		});

	doPasswordUpdate = (password) => this.auth.currentUser.updatePassword(password);

	// *** Merge Auth and DB User API *** //

	onAuthUserListener = (next, fallback) =>
		this.auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				this.user(authUser.uid).get().then((snapshot) => {
					const dbUser = snapshot.data();

					// default empty roles
					if (!dbUser.roles) {
						dbUser.roles = {};
					}

					// merge auth and db user
					authUser = {
						uid           : authUser.uid,
						email         : authUser.email,
						emailVerified : authUser.emailVerified,
						providerData  : authUser.providerData,
						...dbUser
					};

					next(authUser);
				});
			} else {
				fallback();
			}
		});

	// *** User API ***

	user = (uid) => this.db.doc(`users/${uid}`);

	users = () => this.db.collection('users');

	// *** Message API ***

	message = (uid) => this.db.doc(`messages/${uid}`);

	messages = () => this.db.collection('messages');

	// *** CV API ***

	cv = (uid) => this.db.doc(`cv/${uid}`);

	cv = () => this.db.collection('cv');
}

export default Firebase;
