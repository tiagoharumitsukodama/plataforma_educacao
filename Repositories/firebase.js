const firebaseConfig = {
    apiKey: "AIzaSyDLHWwvrHsFt0h8ZOJfyW3PY6hSKgEJw1I",
    authDomain: "himawari-2021.firebaseapp.com",
    projectId: "himawari-2021",
    storageBucket: "himawari-2021.appspot.com",
    messagingSenderId: "173356834396",
    appId: "1:173356834396:web:4c08dc541c62e4ed505099"
  };


import firebase from 'firebase'
import 'firebase/app'
import 'firebase/auth'

if( !firebase.apps.length )
  firebase.initializeApp(firebaseConfig)

  export default firebase