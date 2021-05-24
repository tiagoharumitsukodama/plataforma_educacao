import { useAuth } from '../Hook/useAuth'
import { Form, Button } from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Nav from '../Layouts/nav'
import {handleLogin} from '../Services/handlelogin'
import { useCookies } from "react-cookie"
import styles from '../styles/Login.module.css'
import { useRef } from 'react'

export default function Login(props){

  const { setUsername, username } = useAuth()
  const [cookie, setCookie] = useCookies(["authToken"])
  const router = useRouter()
  const inputEmail = useRef()
  const inputPassword = useRef()

  const handleButtonLogin = async (e) => {

    e.preventDefault()

    const email = inputEmail.current.value
    const password = inputPassword.current.value
    const res = await handleLogin(email, password)

    setCookie("authToken", res, {
      maxAge: 1800,
      sameSite: true,
    })
    
    setUsername(email)
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
                <Form.Control 
                  type="email" 
                  placeholder="exemplo@exemplo.com.br" 
                  ref={inputEmail}
                  />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="Digite sua senha" 
                  ref={inputPassword}
                  />
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
