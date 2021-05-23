import { useState, useRef } from 'react';
import { useCreateNewList } from "../../Hook/useCreateKanjiList"
import { useAuth } from "../../Hook/useAuth"
import GetKanjiList from "../../Components/Feed/getKanjiList"
import { useRouter } from 'next/router'
import { parseCookies } from '../../Services/parseCookies'
import firebase from "../../Repositories/firebase"
import styles from '../../styles/Teacher.module.css'
import Nav from '../../Layouts/nav'


export default function CreateList(props) {

    const router = useRouter()
    const id = router.query.id || []
  
   if( !props.props.user_email )
    console.log(`sem dados`)
  
    const user_email = props.props.user_email

    const [url, setUrl] = useState('')
    const [show, setShow] = useState('none')
    const inputNomeLista = useRef()
    const { username } = useAuth()
    const [err, setErr] = useState('');
    const [newKanjiList, setNewKanjiList] = useState(['um', 'dois'])
    
    
    const tryAddList = async (doc) => {

        setErr('')

        try {
            const inputNameList = inputNomeLista.current.value

            if( !inputNameList )
                throw Error('Dê um nome a lista')

            await useCreateNewList({
                    nameList:inputNameList, 
                    newElement:doc,
                    username
                })

        } catch (error) {

            setErr(error.message)
        }
    }

    return (
        <div className={styles.container}>

            <Nav user={user_email}/>

            <div className='col-12'>
                <p className="h2 text-center mt-3 mb-5">Criar lista de Kanji</p>
                <div className='d-flex justify-content-around'>
                    <div className='list-group col-2'>
                        <p className="h3">Listas</p>
                        <button type="button" className="list-group-item list-group-item-action" >Lista 1</button>
                        <button type="button" className="list-group-item list-group-item-action">Lista 2</button>
                        <button type="button" className="list-group-item list-group-item-action">Lista 3</button>
                        <button  className='btn btn-dark mt-5 mb-3' onClick={() => setShow('block')}>Criar lista</button>
                        <input type='text' ref={inputNomeLista} className='list-group-item list-group-item-action mb-2' 
                            placeholder='nome da lista' />
                        {
                            err &&
                            <div className="alert alert-danger" role="alert">{err}</div>
                        }
                        <div className='list-group list-group-flush mt-2 mb-2' style={{display:show}}>
                        <p className="h5 mt-2">Adicionados</p>
                        {
                            newKanjiList.map( el => (
                                    <li key={el} className="list-group-item  d-flex justify-content-between align-items-center">
                                        {el}
                                        <button className='btn btn-light fw-bold rounded-circle'>-</button>
                                    </li>
                                )
                            )
                        }
                        </div>
                    </div>
                    <div className='col-5'>
                        <GetKanjiList tryAddList={tryAddList} nameCollection='images'/>
                    </div>
                </div>
            </div>
        </div>
    );
}


CreateList.getInitialProps = async (ctx) => {

    try {
      const {authToken} = parseCookies(ctx.req)

      if( !authToken )
        throw new Error('Can not find user')
      
      const credentialUser = await firebase.auth().signInWithCustomToken(authToken)
      const user = credentialUser.user.email
        
      return {
        props: {
          user_email: user
        }
      }
    } catch (error) {
      const res = ctx.res
      res.writeHead(307, { Location: '/login' })
      res.end()
    }
  
  }