import { projectFirestore } from "../Repositories/firebase"

export function useCreateNewList( {nameList, newElement, username="tiago"} ) { 
    //lista eh uma array
 
    const elements = {...newElement}
    elements.username = username

    console.log(nameList, "nameList")
    console.log(username, "username")

    //references
    const collectionRef = projectFirestore.collection(nameList)
    collectionRef.add(elements)
}