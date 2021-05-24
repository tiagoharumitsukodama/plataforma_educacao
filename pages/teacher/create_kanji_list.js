import { useState, useRef, useEffect } from 'react';
import { useCreateNewList, useSaveNewListName } from "../../Hook/useCreateKanjiList"
import GetKanjiList from "../../Components/Feed/getKanjiList"
import { useRouter } from 'next/router'
import { parseCookies } from '../../Services/parseCookies'
import firebase from "../../Repositories/firebase"
import styles from '../../styles/Teacher.module.css'
import Nav from '../../Layouts/nav'
import KanjiList from '../../Components/Feed/kanjiList';
import GetAllKanjiList from '../../Components/Feed/getAllKanjiList';


export default function CreateList(props) {

    const router = useRouter()
    const id = router.query.id || []
  
   if( !props.props.user_email )
    console.log(`sem dados`)
  
    const user_email = props.props.user_email
    const inputNameList = useRef()
    const username = user_email
    const [err, setErr] = useState('');
    const [selectedListName, setSelectedListName] = useState()
    const [collectionName, setCollectionName] = useState('images')
    // ToDo: filtrar e setCollectionName
    // ToDo: buscar listas disponíveis
    // ToDo: salvar listas vendo se já existe

    const handleSelectedList = async () => {
        setSelectedListName(inputNameList.current.value)
    }
     
    const tryAddList = async (doc) => {

        setErr('')
        try {

            if( !selectedListName )
                throw Error('Dê um nome a lista')

            await useCreateNewList({
                nameList:selectedListName, 
                newElement:doc,
                username
            })
            
            inputNameList.current.value = ""

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
                        <GetAllKanjiList 
                            setSelectedListName={setSelectedListName} 
                            selectedListName={selectedListName}
                            />
                        <input 
                            type='text' 
                            ref={inputNameList}
                            onSelect={handleSelectedList} 
                            className='list-group-item list-group-item-action mb-2' 
                            placeholder='Nome da nova lista' />
                        {
                            err &&
                            <div className="alert alert-danger" role="alert">{err}</div>
                        }
                       
                        <KanjiList listName={selectedListName} />

                    </div>
                    <div className='col-5'>
                        <GetKanjiList tryAddList={tryAddList} nameCollection={collectionName}/>
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