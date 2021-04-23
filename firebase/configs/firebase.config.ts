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
    apiKey: "AIzaSyBxPIPPOeXZuxgPLUTOR43utPAPERINO",
    authDomain: "panifrutti-45ea1.emulated.com",
}

// Initialize Firebase
const myapp = firebase.initializeApp(firebaseConfig);

// Instantiate firebase.auth
const auth = firebase.auth(myapp);

// Instantiate firebase.firestore
const  db = firebase.firestore();


// Activate emulators
if (process.env.NODE_ENV === "development") {
    // AUTH
    try {
        auth.useEmulator("http://localhost:9099");
    }
    catch (e) {
        console.log("AUTH ERR:", e)
    }
    //FIRESTORE
    try {
        db.useEmulator("localhost", 8080);
    }
    catch (e) {
        console.log("DB ERR:", e)
    }
}

const ui = new firebaseui.auth.AuthUI(firebase.auth());
//let uiElement = () => ui.start('#firebaseui-auth-container', uiConfig);
//export const startUi = uiElement;

export const firestoreFB = db;
export const authFB = auth;


