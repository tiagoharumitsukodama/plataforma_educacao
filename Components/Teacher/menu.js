import { Card } from "react-bootstrap";

export default function Menu(){

    const menu_list = [
        {
            title: "Jogos de kanji",
            uri: "/login"
        },
        {
            title: "Jogos de katakana",
            uri: "/sign"
        },
        {
            title: "Jogos de katakana",
            uri: "/sign"
        }
    ]

    const stylesCard = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    }

    return (
        <div style={stylesCard}>
            {
                menu_list.map(card => {
                    return (
                        <Card 
                            key={Math.random()}
                            style={{ 
                                width: '18rem', 
                                marginTop: "10px",
                                marginLeft: "10px",
                                }}>
                        <Card.Body>
                            <Card.Title>{card.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Card.Link href="#">{card.uri}</Card.Link>
                        </Card.Body>
                        </Card>
                    );
                })
            }
        </div>
    );
}