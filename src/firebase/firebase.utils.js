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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }catch(error){
            console.log('Error creating user:' + error.message);
        }
    }

    return userRef;
}

export const updateUserProfileDocument = async (user, additionalData) => {
    if(!user) return;

    const userRef = firestore.doc(`users/${user.id}`);
    const snapShot = await userRef.get();
    if(snapShot.exists){
        const updatedAt = new Date();
        try{
            await userRef.update({
                updatedAt,
                ...additionalData
            });
        }catch(error){
            console.log('Error creating user:' + error.message);
        }
    }

    return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;