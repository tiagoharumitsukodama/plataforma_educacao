import admin from 'firebase-admin'

const serviceAccount = process.env.firebaseAdminKey
if( !admin.apps.length )
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

export default admin