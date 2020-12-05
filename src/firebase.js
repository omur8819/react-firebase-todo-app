import firebase from 'firebase';

const firebase = firebase.initializeApp({
    apiKey: "AIzaSyCZiweMN6CYVmZntTizF5NA-66lv9qPoN4",
    authDomain: "todo-app-cp-6b3ee.firebaseapp.com",
    projectId: "todo-app-cp-6b3ee",
    storageBucket: "todo-app-cp-6b3ee.appspot.com",
    messagingSenderId: "207478903839",
    appId: "1:207478903839:web:ee3f235f8797ad2eb9f12a",
    measurementId: "G-JWC47V43R9"
});


const db = firebaseApp.firestore();

export default db;

