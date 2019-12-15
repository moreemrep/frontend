/* eslint-disable no-undef */
import firebase from 'firebase';

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY
});

firebase.auth().languageCode = 'pt-BR';

export function useFirebase() {
  return {
    auth: firebase.auth()
  };
}
