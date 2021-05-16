import styles from '../styles/Home.module.css'
import firebase from '../Repositories/firebase'
import Nav from '../Layouts/nav'


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

Home.getInitialProps = async (ctx) => {

  try {
    const authToken = ctx.req.cookies.authToken

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
        user_email: 'Anônimo'
      }
    }
  }
}