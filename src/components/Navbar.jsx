import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap'; 
import "bootstrap/dist/css/bootstrap.min.css";
import style from '../styles/Navbar.module.css'
//import Navbar from 'react-bootstrap'

export default function Navbarh(){

    return(
            <div>
                <header id='header'>

                <Navbar bg="light" expand="lg">
                    <Container className={style.navContainer}>
                        <Navbar.Brand className={style.navTitle} href="#Me" >Christian Hampel</Navbar.Brand>
                        <Nav className={style.meAuto}>
                            <Nav.Link className={style.link} href="#Me">This is me</Nav.Link>
                            <Nav.Link className={style.link} href="#skills">Skills</Nav.Link>
                            <Nav.Link className={style.link} href="#works">My Works</Nav.Link>                            
                            <Nav.Link className={style.link} href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Container>
                    </Navbar>
                </header>
            </div>
    )
}