import { useState, createContext } from 'react'

export const KanjiDatabaseContext = createContext();

export default function KanjiDatabaseProvider( {children} ) {

    const [ meanKanji, setMeanKanji ] = useState()
    const [ groupKanji, setGroupKanji ] = useState()

    const value = {
        meanKanji,
        setMeanKanji,
        groupKanji,
        setGroupKanji
    }

    return (
        <KanjiDatabaseContext.Provider value={ value }>
            {children}
        </KanjiDatabaseContext.Provider>
    );
}