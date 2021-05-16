import { useAuth } from '../Hook/useAuth'
import { Form, Button } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
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
        <div>
  
        <Nav user={user_email}/>
  
        <main className={styles.main}>
            <h2>Login</h2>
            <Form className={styles.form}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="exemplo@exemplo.com.br" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Digite sua senha" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleButtonLogin}>
                Pronto
            </Button>
            </Form>
            <Link href='/sign' replace>Clique caso queira se cadastrar</Link>
        </main>
  
      </div>
    );
}


Login.getInitialProps = async (ctx) => {

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