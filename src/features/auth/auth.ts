import firebase from 'firebase/app';
import 'firebase/database';

import { FIREBASE_AUTH_DOMAIN, FIREBASE_DATABASE_URL } from '~/constants/api';

export const firebaseInstance = firebase;

// TODO: Use loop-back admin platform and AWS
export const auth = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp({
      authDomain: FIREBASE_AUTH_DOMAIN,
      databaseURL: FIREBASE_DATABASE_URL,
    });
  }
};
