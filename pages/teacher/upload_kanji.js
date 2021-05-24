import styles from '../../styles/Teacher.module.css'
import firebase from '../../Repositories/firebase'
import { parseCookies } from '../../Services/parseCookies'
import Nav from '../../Layouts/nav'
import UploadKanji from "../../Components/Feed/uploadKanji"
import AlreadyAddKanjis from "../../Components/Feed/alreadyAddKanji"
import KanjiDatabaseProvider from "../../Contexts/KanjiDatabase"

export default function Upload_kanji(props){

 if( !props.props.user_name )
  console.log(`sem dados`)

  const user_name = props.props.user_name

    return (
        <div className={styles.container}>
    
          <Nav user={user_name}/>
    
          <main className={styles.main}>
          <KanjiDatabaseProvider>
            <p className="h2 text-center mt-5 mb-5">Adicione kanjis e suas descrições</p>
            <div className='container-fluid'>
                <div className='row d-flex flex-wrap justify-content-start
                col-12 mt-2'>
                    <div className='w-25 p-3'>
                        <UploadKanji />
                    </div>
                    <div className='w-75 p-3'>
                        <AlreadyAddKanjis />
                    </div>
                </div>
            </div>
          </KanjiDatabaseProvider>
          </main>
      </div>
    );
}


Upload_kanji.getInitialProps = async (ctx) => {

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