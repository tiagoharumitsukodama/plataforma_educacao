import { useStorage } from "../../Hook/useStorage"
import { useEffect } from "react"
import { useKanjiDatabase } from "../../Hook/useKanjiDatabase"

export default function Progressbar({file, setFile}) {
    
    const { meanKanji,setMeanKanji } = useKanjiDatabase()
    const { groupKanji, setGroupKanji } = useKanjiDatabase()
    const {url, progress, error} = useStorage(file, meanKanji, groupKanji)

    useEffect( () => {
        if(url) {
            setFile(null)
            setGroupKanji(null)
            setMeanKanji(null)
        }
    },[url, setFile]) 
        
    const styles = {
        width: progress + '%',
        backgroundColor: 'blue'
    }

    return (
        <div style={styles}>Falha ao enviar</div>
    );
}