import { useState, useRef } from 'react'
import ProgressBar from "./progressbar"
import { useKanjiDatabase } from "../../Hook/useKanjiDatabase"

export default function UploadKanji() {

    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)
    const { meanKanji, setMeanKanji } = useKanjiDatabase()
    const { groupKanji, setGroupKanji } = useKanjiDatabase()
    const inputMeanKanji = useRef()
    const inputGroupKanji = useRef()

    const types = ['image/jpeg', 'image/png', 'image/jpg']

    const changeHandler = (e) => {

        const selected = e.target.files[0]

        if( selected && types.includes(selected.type) ) {
            setFile(selected)
            setError('')
            inputMeanKanji.current.value = ""
            inputGroupKanji.current.value = ""
        }
        else {
            setFile(null)
            setError('Formato inválido')
        }
    }

    return (
        <div className='container-sm d-flex flex-column'>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Kanji</label>
                <input type="text" className="form-control"  onChange={() => setMeanKanji(inputMeanKanji.current.value)}
                    ref={inputMeanKanji} placeholder='significado' required />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Grupo</label>
                <input type="text" className="form-control"  onChange={() => setGroupKanji(inputGroupKanji.current.value)}
                    ref={inputGroupKanji} placeholder='grupo' required/>
            </div>

            <div className="input-group">
            <input 
                type="file" 
                multiple={false} 
                onChange={changeHandler} 
                className="form-control" aria-describedby="inputGroupFileAddon04" 
                aria-label="Upload" />
            </div>

            { 
                file &&
                <div className="alert alert-info mt-5" role="alert">
                    { file.name }
                </div> 
            }

            { 
                error &&
                <div className="alert alert-info mt-5" role="alert">{
                    error }
                </div> 
            }

            { 
                meanKanji 
                    && groupKanji 
                    && file 
                    && <ProgressBar 
                        file={file} 
                        setFile={setFile}
                    /> 
            }
        </div>
    );
}
