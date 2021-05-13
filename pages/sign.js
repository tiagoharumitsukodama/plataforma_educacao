import { Form, Button } from 'react-bootstrap'
import styles from '../styles/Home.module.css'
import Nav from '../Layouts/nav'

export default function Sign(){


    return (
        <div className={styles.container}>
  
        <Nav/>
  
        <main className={styles.main}>
            <h2>Criar usuário</h2>
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
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirm password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit" >
                Submit
            </Button>
            </Form>
        </main>
  
      </div>


    );
}