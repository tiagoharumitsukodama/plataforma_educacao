import { useRouter } from 'next/router';
import styles from '../../styles/Studant.module.css';
import firebase from '../../Repositories/firebase';
import Nav from '../../Layouts/nav';
import { parseCookies } from '../../Services/parseCookies'


export default function Studant(props){

  const router = useRouter()
  const id = router.query.id || []
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
    const {authToken} = parseCookies(ctx.req)

      if( !authToken )
        throw new Error('Can not find user')
      
      const credentialUser = await firebase.auth().signInWithCustomToken(authToken)
      const user = credentialUser.user.email

      return {
        props: {
          user_email: user
        }
      }
      
    } catch (error) {
        const res = ctx.res
        res.writeHead(307, { Location: '/login' })
        res.end()
    }
  }