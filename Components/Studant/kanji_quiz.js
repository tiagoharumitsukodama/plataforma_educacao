import Image from 'next/image'
import { Card } from "react-bootstrap"

export default function Kanji_quiz({doc, msg, index, score, setMsg, setIndex, setScore}) {

    const rightQuestion = () => {
        setIndex(index+1)
        setScore(score+1)
    }

    const wrongQuestion = () => {
        setMsg("Quase")
    }

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
            <Card.Title>Questão: { index }</Card.Title>
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