import { useAuth } from '../Hook/useAuth'
import { Form, Button } from 'react-bootstrap'
import Image from 'next/image'
import Nav from '../Layouts/nav'
import {handleLogin} from '../Services/handlelogin'
import styles from '../styles/Login.module.css'

export default function Login(props){

  const {setCookie, setUsername, username} = useAuth()
  let user_email = ''
  
  if( props.props.user_email )
    user_email = props.props.user_email

  const handleButtonLogin = async (e) => {
    e.preventDefault()

    handleLogin('teste@teste.com', '123456')
  }

    return (
        <div className={styles.container}>
  
        <Nav user={user_email}/>
  
        <main className={styles.main}>
            <h2>Login</h2>
            <Form style={{maxWidth:'500px'}}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleButtonLogin}>
                Submit
            </Button>
            </Form>
        </main>
  
      </div>


    );
}


Login.getInitialProps = async (ctx) => {

  try {
      const authToken = ctx.req.cookies.authToken
    
      //const credentialUser = await firebase.auth().signInWithCustomToken(authToken)
      //const user = credentialUser.user.email
    
      const user = 'testanduuu@teste.com'

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