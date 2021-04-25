import firebase from 'firebase/app';
import 'firebase/database';

import {
  BACKEND_URL,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DB_REF,
} from '~/constants/constants';

export const firebaseRefInstance = () =>
  firebase.database().ref(FIREBASE_DB_REF);

// TODO: Upgrade with MERN
export const auth = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp({
      authDomain: FIREBASE_AUTH_DOMAIN,
      databaseURL: BACKEND_URL,
    });
  }
};
