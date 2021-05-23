import {useFirestone} from "../../Hook/useFirestone"
import Image from 'next/image'


export default function GetKanjiList({tryAddList, nameCollection}) {

    if( !nameCollection )
        nameCollection='images'

    const { docs } = useFirestone(nameCollection)

    return (
            <table className="table">
            <thead>
            <tr>
                <th scope="col">Imagem</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
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
                        <td>{doc.groupKanji}</td>
                        <td>{doc.meanKanji}</td>
                    </tr>
                )) 
            }
            </tbody>
            </table>
    )
}