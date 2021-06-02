import styles from '../../styles/Studant.module.css';
import firebase from '../../Repositories/firebase';
import Nav from '../../Layouts/nav';
import { parseCookies } from '../../Services/parseCookies'
import { useFirestone } from "../../Hook/useFirestone"

export default function Studant(props){

  const user_name = props.props.user_name
  if( !props.props.user_name )
  console.log(`sem dados`)

  const {docs} = useFirestone("allKanjis")

  console.log(docs)

  return (
      <div className={styles.container}>
  
        <Nav user={user_name}/>
  
        <main className={styles.main}>
          Kanji quiz
        </main>
      </div>
  );
}


Studant.getInitialProps = async (ctx) => {
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