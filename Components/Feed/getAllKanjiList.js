import { useEffect, useState } from "react";
import { useFirestone } from "../../Hook/useFirestone"

export default function GetAllKanjiList({setSelectedListName,selectedListName}){

    const {docs} = useFirestone("allKanjiList")

    const filter = (collectionName) => {

        if(collectionName == "allKanjis")
            return false
        
        return true
    }

    return (
        <>
        <button 
            type="button" 
            className="list-group-item list-group-item-action" 
            onClick={() => setSelectedListName("allKanjis")}
        >
            Todos
        </button>
        {
            docs &&
            docs.map(doc => {

            if( doc.size && filter(doc.kanjiList) )
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