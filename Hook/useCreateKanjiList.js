import { projectFirestore } from "../Repositories/firebase"

export async function useCreateNewList( {nameList, newElement, username} ) { 
    //lista eh uma array
 
    const elements = {...newElement}
    elements.username = username

    //references
    const collectionRef = await projectFirestore.collection(nameList)
    await collectionRef.add(elements)

    const size = await (await collectionRef.get()).size

    projectFirestore.collection("allKanjiList")
        .where("kanjiList", "==", nameList)
        .get()
        .then((querySnapshot) => {

            const ref = projectFirestore.collection("allKanjiList")

            if(querySnapshot.empty){
                ref.add({
                    kanjiList: nameList, 
                    username: username, 
                    size: size
                })
            }
            else{
                querySnapshot.forEach((doc) => {
                    ref.doc(doc.id).update({
                        kanjiList: nameList, 
                        username: username, 
                        size: size
                    })
                })
            }
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
}
