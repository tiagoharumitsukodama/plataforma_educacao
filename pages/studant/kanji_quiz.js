import styles from '../../styles/Studant.module.css';
import firebase from '../../Repositories/firebase';
import Nav from '../../Layouts/nav';
import { parseCookies } from '../../Services/parseCookies'
import { useFirestone } from "../../Hook/useFirestone"
import Quiz from "../../Components/Studant/kanji_quiz"
import { useState, useEffect } from "react"

export default function Studant(props){

  const user_name = props.props.user_name
  if( !props.props.user_name )
  console.log(`sem dados`)

  const {docs} = useFirestone("allKanjis")
  const [index, setIndex] = useState(0)
  const [msg, setMsg] = useState('')
  const [doc, setDoc] = useState()

  useEffect(() => {
      setMsg('')
      setDoc(docs[index])

      if( index >= docs.length )
          setMsg('Parabéns')

  },[docs,index])
  return (
      <div className={styles.container}>
  
        <Nav user={user_name}/>
  
        <main className={styles.main}>
          Kanji quiz
          {
              doc ?
              <Quiz 
                doc={doc} 
                msg={msg}
                index={index}  
                setMsg={setMsg}
                setIndex={setIndex}
              />
              : 
            <p>Acaboooou</p>
          }
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