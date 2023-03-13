import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


function NavBar(){

    return(
        <Navbar style={colorPrimario} expand="false" className='shadow'>
            <Container bg="success" >
                <Col className='text-start'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    
                </Col>
                <Col className="text-center align-top">
                    <Link to="/" style={linkStyle}>
                        <h1 className=''>
                            ReciclAR
                        </h1>
                    </Link>
                    
                </Col>
                <Col className="text-end">
                    /*INGRESAR PARTE DEL PERFIL (ToDo)*/
                </Col>
                <Navbar.Collapse id="basic-navbar-nav" className='text-start'>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Inicio</Nav.Link>
                            <Nav.Link href="/Comoreciclar">Como reciclar</Nav.Link>
                            <Nav.Link href="/PuntosVerdes">Puntos verdes</Nav.Link>
                            <Nav.Link href="/ONGyAsociaciones">ONGs</Nav.Link>
                            <Nav.Link href="/Formasdereciclar">Formas de reciclar</Nav.Link>
                            <Nav.Link href="/Compost">Compost</Nav.Link>
                        </Nav>
                </Navbar.Collapse>




            </Container>
        </Navbar>
    )


}


let colorPrimario = {
    backgroundColor : '#B4EC89'
}

let linkStyle = {
    color:"black",
    textDecorationLine: "none"
}





export default NavBar