import firebase from 'firebase/app'

require('firebase/auth')
require('firebase/firestore')
require('firebase/storage')
require('firebase/functions')

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
  apiKey: "AIzaSyCzjPzULbhgAlyhywoN7se-ek2RCKUvuHo",
  authDomain: "ecommercevue-67041.firebaseapp.com",
  databaseURL: "https://ecommercevue-67041-default-rtdb.firebaseio.com",
  projectId: "ecommercevue-67041",
  storageBucket: "ecommercevue-67041.appspot.com",
  messagingSenderId: "885387719114",
  appId: "1:885387719114:web:c8fa87611fd43bbf6a1f33",
  measurementId: "G-LQVKLJT0YD"
};
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()
const functions = firebase.functions()

export {
    firebase,
    auth,
    storage,
    functions,
    db,
}

