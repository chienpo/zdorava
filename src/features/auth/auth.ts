import firebase from 'firebase/app';
import 'firebase/database';

import { FIREBASE_AUTH_DOMAIN, FIREBASE_DATABASE_URL } from 'constants/api';

export const firebaseInstance = firebase;

export const auth = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp({
      authDomain: FIREBASE_AUTH_DOMAIN,
      databaseURL: FIREBASE_DATABASE_URL,
    });
  }
};
