import { Form, Button } from 'react-bootstrap'
import styles from '../styles/Sign.module.css'
import Nav from '../Layouts/nav'

export default function Sign(){
    return (
        <div className={styles.container}>
  
        <Nav/>
  
        <main className={styles.main}>
            <h2>Cadastrar usuário</h2>
            <Form className={styles.form}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="exemplo@exemplo.com.br" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Chave secreta para logar" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirmar senha</Form.Label>
                <Form.Control type="password" placeholder="Confirmar a chave secreta" />
            </Form.Group>

            <Button variant="primary" type="submit" >
                Pronto
            </Button>
            </Form>
        </main>
  
      </div>


    );
}