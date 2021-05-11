import firebase from '../Repositories/firebase'


export default handleLogin = async () => {
        
    try {
        const user = await firebase.auth().signInWithEmailAndPassword('teste@teste.com', '123456')

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
        
        setCookie('authToken', token.authToken)
        setUsername('usuario legal Login.js')
        
    } catch (error) {
        console.log('usuario nao encontrado')
    }
}