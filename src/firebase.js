import firebase from "firebase";

const firebaseApp =firebase.initializeApp({
  apiKey: "AIzaSyD3C-ygvqnxSZ1FLhjtMfc7lTR5hN6JGBM",
  authDomain: "airbnb-clone-a148e.firebaseapp.com",
  projectId: "airbnb-clone-a148e",
  storageBucket: "airbnb-clone-a148e.appspot.com",
  messagingSenderId: "379252183732",
  appId: "1:379252183732:web:c13585b05b076871b3bde1",
  measurementId: "G-CY802KBZM7"
});


const db = firebaseApp.firestore();

export {db};