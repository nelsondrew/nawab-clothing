import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAFUTR4XJ0gCv6fy2H9iHQeEJUQFtpQub0",
    authDomain: "zara-db.firebaseapp.com",
    databaseURL: "https://zara-db.firebaseio.com",
    projectId: "zara-db",
    storageBucket: "zara-db.appspot.com",
    messagingSenderId: "75802354934",
    appId: "1:75802354934:web:81b144587bf126cccfb8d7",
    measurementId: "G-0CHLRLMM0G"
};

export const createUserProfileDocument  =async ( userAuth , additionalData) => {
    if(!userAuth) return ;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const Snapshot = await userRef.get();

    if(!Snapshot.exists){
        const {displayName , email} = userAuth;
        const createdAt = new Date();

        try {
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        })
        } catch (error) {
             console.log('error creating user' , error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
