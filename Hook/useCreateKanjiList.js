import { projectFirestore } from "../Repositories/firebase"

export function useCreateNewList( {nameList, newElement, user} ) { 
    //lista eh uma array
 
    const elements = {...newElement}
    elements.user = user

    //references
    const collectionRef = projectFirestore.collection(nameList)
    collectionRef.add(elements)
}