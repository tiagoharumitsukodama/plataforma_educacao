import {useFirestone} from "../../Hook/useFirestone"
import Image from 'next/image'


export default function AlreadyAddKanjis() {

    const { docs } = useFirestone('allKanjis')

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
                    
                    <tr key={doc.id}>
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
                        <td>{doc.id}</td>
                    </tr>

                )) 
            }
            </tbody>
            </table>

    )
}