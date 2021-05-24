import { useRouter } from 'next/router'
import styles from '../../styles/Teacher.module.css'
import firebase from '../../Repositories/firebase'
import Nav from '../../Layouts/nav'
import Menu from '../../Components/Teacher/menu'
import { Card } from 'react-bootstrap'
import { parseCookies } from '../../Services/parseCookies'

export default function Teacher(props){

    const router = useRouter()
    const id = router.query.id || []

   if( !props.props.user_name )
    console.log(`sem dados`)

  const user_name = props.props.user_name

    return (
        <div className={styles.container}>
    
          <Nav user={user_name}/>
    
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
      const {authToken} = parseCookies(ctx.req)

      if( !authToken )
        throw new Error('Can not find user')
      
      const credentialUser = await firebase.auth().signInWithCustomToken(authToken)
      const user = credentialUser.user.displayName

      return {
        props: {
          user_name: user
        }
      }
    } catch (error) {
      const res = ctx.res
      res.writeHead(307, { Location: '/login' })
      res.end()
    }
  }