import { useAuth } from '../Hook/useAuth'
import { Form, Button } from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Nav from '../Layouts/nav'
import {handleLogin} from '../Services/handlelogin'
import { useCookies } from "react-cookie"
import styles from '../styles/Login.module.css'
import { parseCookies } from '../Services/parseCookies'

export default function Login(props){

  const { setUsername, username} = useAuth()
  const [cookie, setCookie] = useCookies(["authToken"])
  const router = useRouter()


  const handleButtonLogin = async (e) => {
    e.preventDefault()

    const res = await handleLogin('teste@teste.com', '123456')

    setCookie("authToken", res, {
      maxAge: 1800,
      sameSite: true,
    })
    setUsername('teste@teste.com')
    router.push('/')
  }

    return (
        <div>
  
        <Nav/>
  
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
