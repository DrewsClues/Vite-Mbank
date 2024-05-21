import 'bootstrap/dist/css/bootstrap.min.css';
import '../css-sheets/nav_bar.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom"; 


function Nav_bar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg"  variant="dark" className="custom-navbar">
                <Container>
                    <Navbar.Brand href="#content-1">
                        <img src='Cactus_logo.png' alt="logo" className='nav-logo'></img>
                        Student Bank
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" className='custom-navbar-links'>Home</Nav.Link>
                            <Nav.Link as={Link} to="/student_signin" >Students</Nav.Link>
                            <Nav.Link as={Link} to="/teacher_signin" >Teachers</Nav.Link>
                            <Nav.Link as={Link} to="/admin_signin" >Admin</Nav.Link>
                            <Nav.Link href="#content-4" >FAQs/Help Center</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Nav_bar;
