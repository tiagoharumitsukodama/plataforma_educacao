import { Form, Button } from 'react-bootstrap'
import styles from '../styles/Sign.module.css'
import Nav from '../Layouts/nav'

import { handleSign } from "../Services/handleSign"
import { useRef } from "react"
import { useRouter } from "next/router"

export default function Sign(){

    const inputEmail = useRef()
    const inputPassword = useRef()
    const inputConfirmPassword = useRef()
    const router = useRouter()

    const handleButtonSign = async (e) => {

        e.preventDefault()

        if( inputConfirmPassword.current.value !== inputPassword.current.value ){
            alert("Senhas não conferem")
            return
        }

        const user = handleSign( inputEmail.current.value, inputPassword.current.value )
        if( user )
            router.push("/login")
        else
            alert("Não foi possível criar um usuário")

    }

    return (
        <div className={styles.container}>
  
        <Nav/>
  
        <main className={styles.main}>
            <h2>Cadastrar usuário</h2>
            <Form className={styles.form}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="exemplo@exemplo.com.br" ref={inputEmail}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword1">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Chave secreta para logar" ref={inputPassword}/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword2">
                <Form.Label>Confirmar senha</Form.Label>
                <Form.Control type="password" placeholder="Confirmar a chave secreta" ref={inputConfirmPassword}/>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleButtonSign}>
                Pronto
            </Button>
            </Form>
        </main>
  
      </div>


    );
}