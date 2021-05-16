import firebase from '../Repositories/firebase'

export const handleLogin = async (email, password) => {
        
    try {
        const user = await firebase.auth().signInWithEmailAndPassword(email, password)
        const user_uid = await user.user.uid

        const res = await fetch('http://localhost:3000/api/auth', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({ uid: `${user_uid}` }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })

        const token = await res.json()
        
        return (token.authToken)
        
    } catch (error) {
        console.log('usuario nao encontrado')
        return ''
    }
}