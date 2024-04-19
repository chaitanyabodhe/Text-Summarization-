// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiH2TJeOk3NtiDBoByqMebcHv536tLkeM",
  authDomain: "text-summarization-2f3b7.firebaseapp.com",
  databaseURL: "https://text-summarization-2f3b7-default-rtdb.firebaseio.com",
  projectId: "text-summarization-2f3b7",
  storageBucket: "text-summarization-2f3b7.appspot.com",
  messagingSenderId: "753389594200",
  appId: "1:753389594200:web:2d4e902ef047584c0b0c2d",
  measurementId: "G-22D8ERTFPD"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
firebase.initializeApp(firebaseConfig);

// Now you can use Firebase services such as authentication and Firestore.

export const firestore = firebase.firestore();

