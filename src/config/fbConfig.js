 import "firebase/auth";
 import firebase from "firebase/app";
 import "firebase/firestore";
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBCwpXTqVHWdwQXVNzWcBCdBkjJUrpX5qY",
    authDomain: "ebe-marioplan.firebaseapp.com",
    databaseURL: "https://ebe-marioplan.firebaseio.com",
    projectId: "ebe-marioplan",
    storageBucket: "ebe-marioplan.appspot.com",
    messagingSenderId: "741063755007",
    appId: "1:741063755007:web:e6b70794100c79d1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase;