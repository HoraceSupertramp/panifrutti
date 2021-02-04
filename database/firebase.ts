import firebase from 'firebase/app';
import  'firebase/auth';
import 'firebase/firestore'



export const config = {
    apiKey: "AIzaSyBxM7PLIOeXZuxgBZU60R43utE5MQfS9G4",
    authDomain: "panifrutti-45ea1.firebaseapp.com",
    projectId: "panifrutti-45ea1",
    storageBucket: "panifrutti-45ea1.appspot.com",
    messagingSenderId: "650662891272",
    appId: "1:650662891272:web:225e3bb2166c9bfd6466bd",
    measurementId: "G-D39GSGJWSR"
};



const app = firebase.initializeApp(config);



export default app;

