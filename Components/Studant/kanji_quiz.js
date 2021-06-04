import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Card } from "react-bootstrap"
import { useFirestone } from '../../Hook/useFirestone'
import Score from './score'

export default function Kanji_quiz({docsName}) {

    const { docs } = useFirestone(docsName)
    const [attemps, setAttemps] = useState(0)
    const [doc, setDoc] = useState()
    const [index, setIndex] = useState(0)
    const [msg, setMsg] = useState('')
    const [score, setScore] = useState(0)
    const [over, setOver] = useState(false)

    useEffect(() => {
        setIndex(0)
        setScore(0)
        setOver(false)
    },[docsName])

    useEffect(() => {
        setMsg('')
        setDoc(docs[index])
  
        if( index >= docs.length )
            setOver(true)
  
    },[docs,index])

    const rightQuestion = () => {
        setIndex(index+1)
        setScore(score+1)
        setAttemps(0)
    }

    const wrongQuestion = () => {
        if( attemps > 1 ){
            setIndex(index+1)
            setAttemps(0)
        }
        else {
            setAttemps(attemps+1)
            setMsg(`Tentativa ${attemps+1}`)
        }
    }

    if(over)
        return (
            <Score 
            score={score}
            setIndex={setIndex}
            setScore={setScore}
            />
        );

    return (
        <Card style={{ width: '90vw', maxWidth: "500px" }}>
        {
            doc &&
            <Image src={ doc.url }
            width={300}
            height={300} 
            quality={50}
            className="card-img-top"
            />
        }
        <Card.Body>
            <Card.Title> Questão: { index }</Card.Title>
            <Card.Text>
                { msg }
            </Card.Text>

            <div className="container d-grid gap-3">
            <div className="row gap-3">
                <div className="col-sm">
                    <button className='btn btn-light col-10' onClick={rightQuestion} >Primeiro</button>
                </div>
                <div className="col-sm">
                    <button className='btn btn-light col-10' onClick={wrongQuestion} >Segundo</button>
                </div>
            </div>
            <div className="row gap-3">
                <div className="col-sm">
                    <button className='btn btn-light col-10' onClick={wrongQuestion} >Terceiro</button>
                </div>
                <div className="col-sm">
                    <button className='btn btn-light col-10' onClick={wrongQuestion} >Quarto</button>
                </div>
            </div>
        </div>

        </Card.Body>
        </Card>
    );
}