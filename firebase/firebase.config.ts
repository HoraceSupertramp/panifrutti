import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"
import {uiConfig} from "./ui.config";
const firebaseui = require("firebaseui");


//Firebase configuration object
const firebaseConfig = (process.env.NODE_ENV === "production") ? {
    apiKey: "AIzaSyBxM7PLIOeXZuxgBZU60R43utE5MQfS9G4",
    authDomain: "panifrutti-45ea1.firebaseapp.com",
    databaseURL: "https://panifrutti-45ea1-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "panifrutti-45ea1",
    storageBucket: "panifrutti-45ea1.appspot.com",
    messagingSenderId: "650662891272",
    appId: "1:650662891272:web:225e3bb2166c9bfd6466bd",
    measurementId: "G-D39GSGJWSR"
} : {
    projectId: "emulated-panifrutti",
    apiKey: "ciao"
}




// Initialize Firebase
const myapp = firebase.initializeApp(firebaseConfig);

// Inizializza Firebase Authentication
const auth = firebase.auth(myapp);
//frbAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then();

// Inizializza Firestore
const  db = firebase.firestore();


// Reindirizza le app sui rispettivi emulatori solo in modalità di sviluppo
if (process.env.NODE_ENV === "development") {
    // AUTH
    auth.useEmulator("http://localhost:9099");
    //FIRESTORE
    db.useEmulator("localhost", 8080);
}

const ui = new firebaseui.auth.AuthUI(firebase.auth());

let uiElement = () => ui.start('#firebaseui-auth-container', uiConfig);

export const firestoreApp = db;
export const startUi = uiElement;


