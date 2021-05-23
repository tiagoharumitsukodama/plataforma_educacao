import { useFirestone } from "../../Hook/useFirestone"

export default function GetAllKanjiList({setSelectedListName}){

    // add com outro nome e trocar aqui tbm
    // allKanjiList
    const {docs} = useFirestone("listKanjiList")

    return (
        <>
        <button 
            type="button" 
            className="list-group-item list-group-item-action" 
            onClick={() => setSelectedListName("images")}
        >
            Todos
        </button>
        {
            docs &&
            docs.map(doc => {
                return (
                    <button 
                        key={doc.kanjiList}
                        type="button"
                        className="list-group-item list-group-item-action"
                        onClick={() => setSelectedListName(doc.kanjiList)}
                    >
                    { doc.kanjiList }
                    </button>
                );
            })
        }
        </>
    );
}