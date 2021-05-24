import styles from '../styles/Home.module.css'
import firebase from '../Repositories/firebase'
import Nav from '../Layouts/nav'
import { parseCookies } from '../Services/parseCookies'

import { Card, Button } from "react-bootstrap"

export default function Home(props) {

  const user_email = props.props.user_email

  return (
    <div className={styles.container}>

      <Nav user={user_email}/>

      <main className={styles.main}>
          <p>Testando 123</p>
          <button>Clique aqui</button>

          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
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