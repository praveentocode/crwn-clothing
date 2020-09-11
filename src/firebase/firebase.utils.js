import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBG8Ks84b2NR4hOdYrsKfHwzj7j3rUhjuA",
  authDomain: "crwn-db-c8cd4.firebaseapp.com",
  databaseURL: "https://crwn-db-c8cd4.firebaseio.com",
  projectId: "crwn-db-c8cd4",
  storageBucket: "crwn-db-c8cd4.appspot.com",
  messagingSenderId: "472370142679",
  appId: "1:472370142679:web:ac09798d91a04469647f92"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;