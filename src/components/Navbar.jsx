import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap'; 
import "bootstrap/dist/css/bootstrap.min.css";
//import Navbar from 'react-bootstrap'

export default function Navbarh(){

    return(
            <div>
                <header id='header'>

                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand >Christian Hampel</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#Me">This is me</Nav.Link>
                            <Nav.Link href="#skills">Skills</Nav.Link>
                            <Nav.Link href="#works">My Works</Nav.Link>                            
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                    </Navbar>
                </header>
            </div>
    )
}