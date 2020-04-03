import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyBlJecg4hN_p442bYWMd2UBhFAtShPf7As",
    authDomain: "leelasupermarketdb.firebaseapp.com",
    databaseURL: "https://leelasupermarketdb.firebaseio.com",
    projectId: "leelasupermarketdb",
    storageBucket: "leelasupermarketdb.appspot.com",
    messagingSenderId: "215599282012",
    appId: "1:215599282012:web:f19e66c0cdbc2f0cf77399",
    measurementId: "G-2GNPQBJXWJ"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;