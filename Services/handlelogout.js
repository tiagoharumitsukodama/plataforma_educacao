import firebase from '../Repositories/firebase'

export const handleLogout = async () => {
    try {
        await firebase.auth().signOut()
        return
        
    } catch (error) {
        console.log('Erro ao deslogar')
        return ''
    }
}