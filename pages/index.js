import styles from '../styles/Home.module.css'
import firebase from '../Repositories/firebase'
import Nav from '../Layouts/nav'
import { parseCookies } from '../Services/parseCookies'

export default function Home(props) {

  const user_email = props.props.user_email

  return (
    <div className={styles.container}>

      <Nav user={user_email}/>

      <main className={styles.main}>
          Cookie:
      </main>

    </div>
  )
}


Home.getInitialProps = async ({req}) => {

  try {
    const {authToken} = parseCookies(req)

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
    return {
      props: {
        user_email: ''
      }
    }
  }
}