import { useStorage } from "../../Hook/useStorage"
import { useEffect } from "react"

export default function Progressbar({file, setFile}) {
    
    const {url, progress, error} = useStorage(file)

    useEffect( () => {
        if(url) {
            setFile(null)
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