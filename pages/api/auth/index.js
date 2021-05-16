const admin = require('../../../Repositories/firebase-admin')


export default async (req, res) => {

    if( req.method !== 'POST' ){
        return res.status(400).end()
    }

    const uid = req.body.uid
    res.status(200).json({authToken: uid})

    if( uid ){
        admin
            .auth()
            .createCustomToken(uid)
            .then((customToken) => {
                res.status(200).json({authToken: 'customToken'}).end()
            })
            .catch((error) => {
                res.status(400).end()
            });
    }
    else
        res.status(401).end()
}