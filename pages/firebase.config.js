import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.NEXT_PUBLIC_apiKey,
  authDomain: process.env.NEXT_PUBLIC_authDomain,
  projectId: process.envNEXT_PUBLIC_projectId,
  storageBucket: process.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//export

export const auth = getAuth(app);
export  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()