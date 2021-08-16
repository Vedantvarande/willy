import firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyBbT9ulml0gvK0val4lqSZOa963tcS9St8",
    authDomain: "willy-app-d7143.firebaseapp.com",
    projectId: "willy-app-d7143",
    storageBucket: "willy-app-d7143.appspot.com",
    messagingSenderId: "157012663069",
    appId: "1:157012663069:web:4d762986f3c337b1b71ff4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();