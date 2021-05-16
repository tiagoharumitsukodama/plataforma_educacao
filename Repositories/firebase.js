const firebaseConfig = process.env.firebaseConfig

import firebase from 'firebase'
import 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'

if( !firebase.apps.length )
  firebase.initializeApp(firebaseConfig)

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

export {projectFirestore, projectStorage}

export default firebase