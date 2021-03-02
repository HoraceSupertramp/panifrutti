import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"
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
    apiKey: "emu-key",
    authDomain: "panifrutti-45ea1.webapp.com",
    projectId: "emulated-panifrutti",
    //storageBucket: "emulated-panifrutti-45ea1.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:225e3bb2166c9emu6466bd",
    //measurementId: "G-D39GSGEMUL"
}




// Initialize Firebase
const myapp = firebase.initializeApp(firebaseConfig);

// Inizializza Firebase Authentication
const frbAuthent = firebase.auth(myapp);
//frbAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then();

// Inizializza Firestore
const  frbFirestore = firebase.firestore();

// Reindirizza le app sui rispettivi emulatori solo in modalità di sviluppo
if (process.env.NODE_ENV === "development") {
    // AUTH
    frbAuthent.useEmulator("http://localhost:9099");
    //FIRESTORE
    frbFirestore.useEmulator("localhost", 8080);
}

//debugger;

const ui = new firebaseui.auth.AuthUI(firebase.auth());


const uiConfig ={
    //
    //credentialHelper?: CredentialHelperType;
   // popupMode: true,
    //queryParameterForSignInSuccessUrl?: string;
   // queryParameterForWidgetMode?: string;
    //signInFlow?: string;
    signInSuccessUrl : "",
   // siteName?: string;
    //tosUrl?: (() => void) | string;
    //privacyPolicyUrl?: (() => void) | string;
    //widgetUrl?: string;
    signInOptions: [
        {
            provider : firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        },
        {
            provider : firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        }
    ],
    callbacks: {
        
    }
}



let uiElement = () => ui.start('#firebaseui-auth-container', uiConfig);


export const firebaseMyApp = myapp;
export const firebaseAuthent = frbAuthent;
export const firestoreApp = frbFirestore;
export const globalFirebase = firebase;
export const startUi = uiElement;


