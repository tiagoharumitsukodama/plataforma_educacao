import styles from '../../styles/Studant.module.css';
import firebase from '../../Repositories/firebase';
import Nav from '../../Layouts/nav';
import { parseCookies } from '../../Services/parseCookies'
import { useFirestone } from "../../Hook/useFirestone"
import Quiz from "../../Components/Studant/kanji_quiz"
import Score from "../../Components/Studant/score"
import { useState, useEffect } from "react"
import GetAllKajiList from "../../Components/Feed/getAllKanjiList"

export default function Studant(props){

  const user_name = props.props.user_name
  if( !props.props.user_name )
  console.log(`sem dados`)


  const [collectionName, setCollectionName] = useState("allKanjis")

  return (
      <div className={styles.container}>
  
        <Nav user={user_name}/>
  
        <main className={styles.main}>

          <div className={styles.aside}>
          Lista de exercícios
          <GetAllKajiList setSelectedListName={setCollectionName}/>
          </div>

          <div className={styles.quiz}>
          <h2>Kanji quiz</h2>
          <Quiz 
            docsName={collectionName} 
          />
          </div>
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