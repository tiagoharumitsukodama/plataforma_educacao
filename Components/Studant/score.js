import { Card, Button } from "react-bootstrap"

export default function Score({score, setIndex, setScore}){

    const reset = () => {
        setIndex(0)
        setScore(0)
    }

    return (
        <Card style={{ width: '90vw', maxWidth: "500px" }}>
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            {score}
            </Card.Text>
            <Button 
                variant="primary"
                onClick={reset}
                >Go again</Button>
            </Card.Body>
        </Card>
    );
}
