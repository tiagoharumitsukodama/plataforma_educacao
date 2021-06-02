import Image from 'next/image'
import { Card } from "react-bootstrap"

export default function Kanji_quiz({doc, msg, index, setMsg, setIndex}) {

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
                    <button className='btn btn-light col-10' onClick={() => setIndex(index+1)} >Primeiro</button>
                </div>
                <div className="col-sm">
                    <button className='btn btn-light col-10' onClick={() => setMsg('opa')} >Segundo</button>
                </div>
            </div>
            <div className="row gap-3">
                <div className="col-sm">
                    <button className='btn btn-light col-10' onClick={() => setMsg('quase')} >Terceiro</button>
                </div>
                <div className="col-sm">
                    <button className='btn btn-light col-10' onClick={() => setMsg('Não consegui baixar')} >Quarto</button>
                </div>
            </div>
        </div>

        </Card.Body>
        </Card>
    );
}