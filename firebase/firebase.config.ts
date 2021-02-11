import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"

//Oggetto di configurazione personalizzato firebase
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
    projectId: "emulated project",
    apiKey: "this_is_the_api_key"
}


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// Inizializza Firebase Authentication
const frbAuth = firebase.auth(app);
// Inizializza Firestore
const dbCloud = firebase.firestore();


// Reindirizza le app sui rispettivi emulatori solo in modalità di sviluppo
if (process.env.NODE_ENV === "development") {
    // AUTH
    frbAuth.useEmulator("http://localhost:9099");
    //FIRESTORE
    dbCloud.useEmulator("localhost", 8080);

}

export const firebaseAuth = frbAuth
export const  firestoreApp = dbCloud;

