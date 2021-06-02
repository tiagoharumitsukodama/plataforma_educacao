import { Card, Button } from "react-bootstrap"

export default function Score({score, setIndex, setScore}){

    const reset = () => {
        setIndex(0)
        setScore(0)
    }

    const styles = { 
        width: '90vw', 
        maxWidth: "500px",
        marginTop: "50px",
        display: "flex",
        alignItems: "center"
    }

    return (
        <Card style={styles}>
            <Card.Body>
            <Card.Title>Pontuação</Card.Title>
            <Card.Text>
            A sua nota foi:  { score }
            </Card.Text>
            <Button 
                className='btn btn-light col-10'
                variant="primary"
                onClick={reset}
                >Reiniciar</Button>
            </Card.Body>
        </Card>
    );
}
