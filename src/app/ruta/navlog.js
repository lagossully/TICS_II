
import React, { Component, useCallback } from "react";
import { Form, Button, Card, Col, Navbar, Nav, Container,Stack} from 'react-bootstrap';
import Select from "react-select";
import { useNavigate, Link} from "react-router-dom";


function Navlog (){
    const navigation = useNavigate();

    return(
        

            <Navbar bg="primary" variant="dark"> 
            <Container>
                <Navbar.Brand href="" onClick={() => navigation("/")}>
                    <img src="https://i.ibb.co/WHbHr2B/Logo-sobre-moda-femenina-minimalista-neutral.png" alt="HM SALON"  width="50" height="50"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="" onClick={() => navigation("/inventario")}>Inventario</Nav.Link>
                        <Nav.Link href="" onClick={() => navigation("/ventas")}>Ventas</Nav.Link>
                        <Nav.Link href="" onClick={() => navigation("/menuprincipal")}>Portada</Nav.Link>
                        <Nav.Link href="" onClick={() => navigation("/sandbox")}>Sandbox</Nav.Link>
                        {/* <Nav.Link href="" onClick={() => navigation("/asignarhora")}>Pedir Cita</Nav.Link> */}
                    </Nav>
                    <Button variant="light" onClick={()=>{localStorage.clear(), navigation("/")}}>Cerrar sesión</Button>{' '}
                </Navbar.Collapse>
                </Container>
            </Navbar>
       

    )
}

export default Navlog;