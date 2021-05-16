import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../../styles/Studant.module.css';
import firebase from '../../Repositories/firebase';
import Nav from '../../Layouts/nav';


export default function Studant(props){

    const router = useRouter()
    const id = router.query.id || []

   if( !props.props.user_email )
    return router.push('/login')

  const user_email = props.props.user_email

    return (
        <div className={styles.container}>
            
          <Nav user={user_email}/>
    
          <main className={styles.main}>
            Oi aluno { id }
          </main>
    
        </div>
    );
}


Studant.getInitialProps = async (ctx) => {

    try {
        const authToken = ctx.req.cookies.authToken
        const credentialUser = await firebase.auth().signInWithCustomToken(authToken)
        const user = credentialUser.user.email
        
        return {
          props: {
            user_email: user
          }
        }
    } catch (error) {
      return {
        props: {
          user_email: ''
        }
      }
    }
  }