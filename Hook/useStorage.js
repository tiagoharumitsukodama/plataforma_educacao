import { useState, useEffect } from 'react'
import { projectFirestore, projectStorage } from '../Repositories/firebase'

export function useStorage( file, meanKanji, groupKanji ) {

    const [url, setUrl] = useState(null)
    const [progress, setProgress] = useState(0)
    let error = ""

    useEffect( () => {
        const storageRef = projectStorage.ref(file.name)
        const collectionRef = projectFirestore.collection('images')

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes)*100;
            setProgress(percentage)

        },(error) => {
            alert(error)

        }, async () => {
            const url = await storageRef.getDownloadURL();
            collectionRef.add( {url, meanKanji, groupKanji} )
            setUrl(url)
        }
        )}, [file])

        return { progress, url, error }
}