import { useState, useEffect } from 'react'
import { projectFirestore } from "../Repositories/firebase"

export function useFirestone(collection) {

    const [docs, setDocs] = useState([])

    useEffect( () => {
        const unsub = projectFirestore.collection(collection)
            .onSnapshot((snap) => {
                let documents = []
                snap.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id})
                });
                setDocs(documents)
            })
        
        return () => unsub();
        
    },[collection])

    return {docs}
}

export async function useFirestoneRemoveItem(collection, doc){
    
    const ref = await projectFirestore.collection(collection)

    await ref.doc(doc).delete()
        .then(() => console.log("Item deletado"))
        .catch(error => console.log(error.message))

    const size = (await ref.get()).size

    await projectFirestore.collection("allKanjiList")
        .where("kanjiList", "==", collection)
        .get()
        .then((snapQuery) => {
            snapQuery.forEach((doc) => {
                projectFirestore.collection("allKanjiList")
                    .doc(doc.id)
                    .update({
                        size: size
                    })
            })
        })

    return "OK"
}