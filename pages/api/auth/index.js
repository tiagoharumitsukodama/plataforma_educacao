const admin = require('../../../Repositories/firebase-admin')

function check(){
    return true;
}

export default async (req, res) => {

    if( req.method !== 'POST' ){
        return res.status(400).end()
    }

    const uid = req.body.uid
    const isTeacher = check()

    const additionalClaims = {
        teacher: isTeacher,
    }

    if( uid ){
        admin
            .auth()
            .createCustomToken(uid, additionalClaims)
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