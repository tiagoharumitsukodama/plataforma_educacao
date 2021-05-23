import { projectFirestore } from "../Repositories/firebase"

export function useCreateNewList( {nameList, newElement, username} ) { 
    //lista eh uma array
 
    const elements = {...newElement}
    elements.username = username

    //references
    const collectionRef = projectFirestore.collection(nameList)
    collectionRef.add(elements)
}

export function useSaveNewListName( element ) { 

    //references
    const collectionRef = projectFirestore.collection("listKanjiList")
    collectionRef.add(element)
}
