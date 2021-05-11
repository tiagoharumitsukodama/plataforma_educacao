import admin from 'firebase-admin'

const serviceAccount = require("../firebase-admin-key.json");

if( !admin.apps.length )
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

export default admin