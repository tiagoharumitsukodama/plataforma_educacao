import { useFirestone, useFirestoneRemoveItem } from "../../Hook/useFirestone"

export default function KanjiList({listName}){

    if(!listName)
        return (
            <div className='list-group list-group-flush mt-2 mb-2'>
            <p className="h5 mt-2">Escolha um nome e selecione um kanji</p>
            </div>
        );

    const {docs} = useFirestone(listName)

    const handleDeleteDoc = async (id) => {
        console.log(`deletando o id: ${id}`)
        await useFirestoneRemoveItem(listName, id)
    }

    return (
        <div className='list-group list-group-flush mt-2 mb-2'>
        <p className="h5 mt-2">Adicionados</p>
        {
            docs &&
            docs.map( doc => (
                    <li key={doc.id} className="list-group-item  d-flex justify-content-between align-items-center">
                        {doc.meanKanji}
                        <button 
                            className='btn btn-light fw-bold rounded-circle'
                            onClick={() => handleDeleteDoc(doc.id)}
                        >
                        -</button>
                    </li>
                )
            )
        }
        </div>
    );
}
