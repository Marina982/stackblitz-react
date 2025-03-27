// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmrDyWpzfSowboO2RN7JLcalLWrS09CuI",
  authDomain: "projeto1-4f523.firebaseapp.com",
  projectId: "projeto1-4f523",
  storageBucket: "projeto1-4f523.firebasestorage.app",
  messagingSenderId: "999647401875",
  appId: "1:999647401875:web:9d4e8946081f8dd58efa66",
  measurementId: "G-X5TW2CXNZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};