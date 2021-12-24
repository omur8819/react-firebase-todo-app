import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB81nSLrxR1whAo7FgfZ9QyI8kGRkZV0Jg",
    authDomain: "todoapp-3bec1.firebaseapp.com",
    projectId: "todoapp-3bec1",
    storageBucket: "todoapp-3bec1.appspot.com",
    messagingSenderId: "931363494607",
    appId: "1:931363494607:web:b6438b52166099a1f435ba",
    measurementId: "G-GXN4825JSH"
});


const db = firebaseApp.firestore();

export default db;

