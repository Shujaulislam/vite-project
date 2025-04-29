// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmMbYx14NMCb9ayam8KFublLzZq8UDxak",
  authDomain: "vite-project-d8d5a.firebaseapp.com",
  projectId: "vite-project-d8d5a",
  storageBucket: "vite-project-d8d5a.firebasestorage.app",
  messagingSenderId: "331605949885",
  appId: "1:331605949885:web:abcbb7bff0774bc5b726d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);