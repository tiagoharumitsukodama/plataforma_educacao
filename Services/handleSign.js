import firebase from '../Repositories/firebase'

export const handleSign = async (email, password) => {
        
    try {
        const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
        
        return user.user
        
    } catch (error) {
        console.log(error)
        return ''
    }
}