// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaPIj9FUT91iYaafI3OB4JcElYwLgDt54",
  authDomain: "e-commerce-f4f28.firebaseapp.com",
  projectId: "e-commerce-f4f28",
  storageBucket: "e-commerce-f4f28.appspot.com",
  messagingSenderId: "900968338076",
  appId: "1:900968338076:web:c6d1b7ddce7f3b2dd45359"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };