import { Nav, Navbar, Container, Button } from 'react-bootstrap'
import { handleLogout } from '../Services/handlelogout'
import { useAuth } from '../Hook/useAuth'
import { useRouter } from 'next/router'
import cookies from 'next-cookies'

export default function Navegation({user}){

    const {setUsername} = useAuth()
    const router = useRouter()

    const handleButtonLogout = async () => {
        await handleLogout()
        document.cookie = `authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`
        router.push('/login')
    }

    return (
        <Navbar collapseOnSelect expand="md" bg="warning" variant="light" >
            <Navbar.Brand href="/" className='mx-3'>
                <h1>Himawari</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

            <Container className='d-flex flex-column align-items-center justify-content-center
                flex-md-row align-items-md-center justify-content-md-between'>

            <Nav className="mr-auto d-flex justify-content-center align-items-center">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#">Sobre</Nav.Link>
                <Nav.Link href="/studant/55">Aluno</Nav.Link>
                <Nav.Link href="/teacher/55">Professor</Nav.Link>                
                <Nav.Link href="#">Contato</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
                <Nav className="mr-auto">
                    <Nav.Item>
                        { 
                            user && 
                            (
                                <div className='ms-4'>
                                    <strong>{user}</strong>
                                    <Button 
                                        variant="link" 
                                        size="sm"
                                        onClick={handleButtonLogout}
                                        > Sair
                                    </Button>
                                </div>
                            ) 
                        }
                    </Nav.Item>
            </Nav>
            </Container>
            </Navbar.Collapse>
        </Navbar>
    );
}