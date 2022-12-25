import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAec6sufKRZCUHOE3IF9ZFCxym14EYbadM",
  authDomain: "ecommerce-edf3c.firebaseapp.com",
  projectId: "ecommerce-edf3c",
  storageBucket: "ecommerce-edf3c.appspot.com",
  messagingSenderId: "997382152335",
  appId: "1:997382152335:web:f38fd43c8c01b8cf7550fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//export

export const auth = getAuth(app);
export  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()