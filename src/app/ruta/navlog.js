
import React, { Component, useCallback } from "react";
import { Form, Button, Card, Col, Navbar, Nav, Container,Stack} from 'react-bootstrap';
import Select from "react-select";
import { useNavigate, Link} from "react-router-dom";


function Navlog (){
    const navigation = useNavigate();

    return(
        

            <Navbar bg="primary" variant="dark"> 
            <Container>
                <Navbar.Brand href="" onClick={() => navigation("/")}>HM Salon</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link href="" onClick={() => navigation("/inventario")}>Inventario</Nav.Link>
                        <Nav.Link href="" onClick={() => navigation("/ventas")}>Ventas</Nav.Link> */}
                        <Nav.Link href="" onClick={() => navigation("/")}>Portada</Nav.Link>
                        <Nav.Link href="" onClick={() => navigation("/sandbox")}>Sandbox</Nav.Link>
                        <Nav.Link href="" onClick={() => navigation("/asignarhora")}>Pedir Cita (Usuario)</Nav.Link>
                    </Nav>
                    <Button variant="light">Cerrar secion</Button>{' '}
                </Navbar.Collapse>
                </Container>
            </Navbar>
       

    )
}

export default Navlog;