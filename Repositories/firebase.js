const firebaseConfig = process.env.firebaseConfig


import firebase from 'firebase'
import 'firebase/app'
import 'firebase/auth'

if( !firebase.apps.length )
  firebase.initializeApp(firebaseConfig)

  export default firebase