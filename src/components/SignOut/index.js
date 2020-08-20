import React from 'react';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => <p onClick={firebase.doSignOut}>Déconnexion</p>;

export default withFirebase(SignOutButton);
