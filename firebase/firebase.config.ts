import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBxM7PLIOeXZuxgBZU60R43utE5MQfS9G4",
    authDomain: "panifrutti-45ea1.firebaseapp.com",
    databaseURL: "https://panifrutti-45ea1-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "panifrutti-45ea1",
    storageBucket: "panifrutti-45ea1.appspot.com",
    messagingSenderId: "650662891272",
    appId: "1:650662891272:web:225e3bb2166c9bfd6466bd",
    measurementId: "G-D39GSGJWSR"
};
// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);


const dbCloud = firebase.firestore();

export const  firestoreApp = dbCloud;

