import firebase from 'firebase';
import 'firebase/storage';

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

firebase.initializeApp(config);
const storage = firebase.storage();

export { storage, firebase as default };
