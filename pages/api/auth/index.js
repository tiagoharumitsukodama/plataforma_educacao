import check_user from './check_user'
import admin from '../../../Repositories/firebase-admin'

export default async (req, res) => {

    if( req.method !== 'POST' ){
        return res.status(400).end()
    }

    const uid = req.body.uid

    if( check_user(uid) ){

        admin
            .auth()
            .createCustomToken(uid)
            .then((customToken) => {
                res.status(200).json({authToken: customToken}).end()
            })
            .catch((error) => {
                res.status(400).end()
            });
         
    }
    else
        res.status(401).end()
}