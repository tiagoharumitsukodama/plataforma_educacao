import { useContext } from 'react'
import { KanjiDatabaseContext } from "../Contexts/KanjiDatabase"

export function useKanjiDatabase(){

    return useContext( KanjiDatabaseContext );
}