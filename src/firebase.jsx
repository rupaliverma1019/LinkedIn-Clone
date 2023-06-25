import firebase from "firebase";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDzLyBZ61Zn_sDtOtKi87qDC19Qt6k7n7Y",
    authDomain: "linkedin-clone-199a9.firebaseapp.com",
    projectId: "linkedin-clone-199a9",
    storageBucket: "linkedin-clone-199a9.appspot.com",
    messagingSenderId: "354771710978",
    appId: "1:354771710978:web:af31aab7c9da7cace9a31b",
    measurementId: "G-KXR3PX140W"
  };
  //This Special line of code connect Everything 
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  //get the firestore database
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export  {db,auth}




