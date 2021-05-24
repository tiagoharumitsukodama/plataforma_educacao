import firebase from '../Repositories/firebase'

export const handleLogin = async (email, password) => {
        
    try {
        const user = await firebase.auth().signInWithEmailAndPassword(email, password)
        const user_uid = await user.user.uid
        const url = process.env.MY_URL + "/api/auth"
console.log("url", url)
        const res = await fetch( url, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({ uid: `${user_uid}` }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })

        const token = await res.json()
        console.log("token",token)
        return (token.authToken)
        
    } catch (error) {
        console.log('usuario nao encontrado', error.message)
        return ''
    }
}