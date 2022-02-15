import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-kltHFJKRgo5ePcdzx9AMJBtTnyFTwuM",
  authDomain: "myfinance-769a4.firebaseapp.com",
  projectId: "myfinance-769a4",
  storageBucket: "myfinance-769a4.appspot.com",
  messagingSenderId: "202132150011",
  appId: "1:202132150011:web:310ce7e2798e32a27cc25e",
};

// Init firebase
firebase.initializeApp(firebaseConfig);

// Init services to be used from firebase
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
