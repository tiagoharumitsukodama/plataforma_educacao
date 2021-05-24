import { projectFirestore } from "../Repositories/firebase"

export function useCreateNewList( {nameList, newElement, username} ) { 
    //lista eh uma array
 
    const elements = {...newElement}
    elements.username = username

    //references
    const collectionRef = projectFirestore.collection(nameList)
    collectionRef.add(elements)

    projectFirestore.collection("listKanjiList")
        .where("kanjiList", "==", nameList)
        .get()
        .then((querySnapshot) => {

            if(querySnapshot.empty){
                const ref = projectFirestore.collection("listKanjiList")
                ref.add({kanjiList: nameList, username: username})
            }
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
}
