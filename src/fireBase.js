import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBO3rNMr8iABpBOlWtHTu479ykpwfOnVdw",
  authDomain: "slack-build-af674.firebaseapp.com",
  projectId: "slack-build-af674",
  storageBucket: "slack-build-af674.appspot.com",
  messagingSenderId: "433639078315",
  appId: "1:433639078315:web:2b45123a552ce96598faee",
  measurementId: "G-HQRJVSJ259",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
