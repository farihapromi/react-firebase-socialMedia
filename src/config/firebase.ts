// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLEaCyVEZfTQOVwPXws5sNrxo3UrKXWDU",
  authDomain: "react-social-media-912a9.firebaseapp.com",
  projectId: "react-social-media-912a9",
  storageBucket: "react-social-media-912a9.appspot.com",
  messagingSenderId: "573110518738",
  appId: "1:573110518738:web:349f4d132f9e08aa6b3e0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
export const db=getFirestore(app);