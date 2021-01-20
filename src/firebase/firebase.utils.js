import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCUpqc6jas1s7N8_5sAxxcffgTaXWHAIOU",
  authDomain: "k-clothing-aa572.firebaseapp.com",
  projectId: "k-clothing-aa572",
  storageBucket: "k-clothing-aa572.appspot.com",
  messagingSenderId: "642882059185",
  appId: "1:642882059185:web:4f39b3d49df957499e9b90",
  measurementId: "G-C3QKCP0ZG6",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error createing user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
