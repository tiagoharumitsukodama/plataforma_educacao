import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '../../styles/Teacher.module.css'
import firebase from '../../Repositories/firebase'
import Nav from '../../Layouts/nav'
import Menu from '../../Components/Teacher/menu'
import { Card } from 'react-bootstrap'
import { useHistory } from "react-router-dom";


export default function Teacher(props){

    const router = useRouter()
    let history = useHistory();
    const id = router.query.id || []

   if( !props.props.user_email )
    history.push('/login')

  const user_email = props.props.user_email

    return (
        <div className={styles.container}>
    
          <Nav user={user_email}/>
    
          <main className={styles.main}>
            <Card className="col-10 text-center">
              <Card.Body>Seja bem vindo, {id}</Card.Body>
            </Card>
            <Menu />
          </main>
        </div>
    );
}


Teacher.getInitialProps = async (ctx) => {

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