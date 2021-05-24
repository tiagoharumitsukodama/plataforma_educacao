import {useFirestone} from "../../Hook/useFirestone"
import Image from 'next/image'


export default function GetKanjiList({tryAddList, nameCollection}) {

    if( !nameCollection )
        nameCollection='allKanjis'

    const { docs } = useFirestone(nameCollection)

    return (
            <table className="table">
            <thead>
            <tr>
                <th scope="col">Adicionar</th>
                <th scope="col">Imagem</th>
                <th scope="col">Kanji</th>
                <th scope="col">Classificação/Grupo</th>
            </tr>
            </thead>
            <tbody>
            { 
                docs && docs.map(doc => (
                    <tr key={doc.id} className='align-middle'>
                        <td><button onClick={() => tryAddList(doc)} className='btn btn-light fw-bold rounded-circle'>+</button></td>
                        <td>
                            <Image 
                                src={doc.url} 
                                alt={doc.meanKanji}
                                width={75}
                                height={75}
                            />
                        </td>
                        <td>{doc.meanKanji}</td>
                        <td>{doc.groupKanji}</td>
                    </tr>
                )) 
            }
            </tbody>
            </table>
    )
}