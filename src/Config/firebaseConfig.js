// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb6YH414TkEgOrHYsPCvcqMh7YsvcYn6s",
  authDomain: "oi12-bc970.firebaseapp.com",
  databaseURL: "https://oi12-bc970.firebaseio.com",
  projectId: "oi12-bc970",
  storageBucket: "oi12-bc970.firebasestorage.app",
  messagingSenderId: "966743092864",
  appId: "1:966743092864:web:b32910645de9765b720065",
  measurementId: "G-SBT1XWCKZ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};