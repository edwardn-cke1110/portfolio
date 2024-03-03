import './NavBar.css'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';

export default function NavBar()
{
    return (
        <Navbar className="bg-body-tertiary" expand="lg" sticky='top' bg="dark" data-bs-theme="dark">
            <Container> 
                <Navbar.Brand>Edward Nguyen</Navbar.Brand>
                <Navbar.Toggle aria-controls='navbar-nav'></Navbar.Toggle>
                <Navbar.Collapse id='navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/hobbies">Hobbies</Nav.Link>
                        <Nav.Link href="/contacts">Contacts</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}