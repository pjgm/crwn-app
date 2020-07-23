import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAVrRj6Kp7yYMVgyKPwsywcM6aM7bMeqZg",
    authDomain: "crwn-db-cc2b6.firebaseapp.com",
    databaseURL: "https://crwn-db-cc2b6.firebaseio.com",
    projectId: "crwn-db-cc2b6",
    storageBucket: "crwn-db-cc2b6.appspot.com",
    messagingSenderId: "401491693053",
    appId: "1:401491693053:web:04fb874ccf8977bbf7dd94",
    measurementId: "G-06C9DT0SM7"  
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;