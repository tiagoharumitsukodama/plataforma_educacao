import { Card } from "react-bootstrap";

export default function Menu(){

    const menu_list = [
        {
            title: "Atividade Kanji",
            uri: "/teacher/upload_kanji",
            message: "Adicione kanjis para os alunos jogarem"
        },
        {
            title: "Ver pontuação",
            uri: "/teacher/create_kanji_list",
            message: "Crie lista de kanjis para os alunos jogarem"
        },
        {
            title: "Jogos de katakana",
            uri: "/sign",
            message: "Adicione kanjis para os alunos jogarem"
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
                            <Card.Text>
                                {
                                    card.message
                                }
                            </Card.Text>
                            <Card.Link href={card.uri}>Clique</Card.Link>
                        </Card.Body>
                        </Card>
                    );
                })
            }
        </div>
    );
}