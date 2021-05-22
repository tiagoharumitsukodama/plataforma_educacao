import { useContext } from 'react'
import { KanjiDatabase } from "../Contexts/KanjiDatabase"

export function useFeedKanjiDatabase(){

    return useContext( KanjiDatabase );
}