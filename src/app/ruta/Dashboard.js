import React, { Component, useCallback } from "react";
import { Form, Button, Card, Col, Navbar, Nav} from 'react-bootstrap';
import Select from "react-select";
import { useNavigate, Link} from "react-router-dom";

// const divStyle = {
//     background-color: '#611A8A';
//   };

function Dashboard (){
    const navigation = useNavigate();

    return(
        <div>
            <Navbar expand="lg"> 
                <Navbar.Brand href="" onClick={() => navigation("/")}>HM Salon</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="" onClick={() => navigation("/inventario")}>Inventario</Nav.Link>
                        <Nav.Link href="" onClick={() => navigation("/ventas")}>Ventas</Nav.Link>
                        <Nav.Link href="" onClick={() => navigation("/clientes")}>Clientes</Nav.Link>
                        <Nav.Link href="" onClick={() => navigation("/empleados")}>Empleados</Nav.Link>
                        <Nav.Link href="" onClick={() => navigation("/reportes")}>Reportes</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


            {/* <nav className="light-blue darken-4">
                <div className="container">
                    <a className="brand-logo" href="" onClick={() => navigation("/")}>HM Salon</a>
                </div>
            </nav> */}
            <div className="container">
                <div className="row">
                    <div className="col s12 m6">
                        <Card>
                            <Card.Body>
                                <Card.Title>Usuario</Card.Title>
                                <Card.Text>
                                    <Link to="/usuario">Gestionar Usuarios</Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col s12 m6">
                        <Card>
                            <Card.Body>
                                <Card.Title>Pedir Hora (POR CLIENTE)</Card.Title>
                                <Card.Text>
                                    <Link to="/pel">Se realiza la peticion de la hora</Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                
                </div>
                <div className="row">
                    <div className="col s12 m6">
                        <Card>
                            <Card.Body>
                                <Card.Title>Inventario</Card.Title>
                                <Card.Text>
                                    <Link to="/inv">Acceso a al inventario</Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    
                    <div className="col s12 m6">
                        <Card>
                            <Card.Body>
                                <Card.Title>Gestionar Agenda (USUARIOS)</Card.Title>
                                <Card.Text>
                                    <Link to="/gesag">Gestionar Agenda</Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                    {/* <div className="col s12 m6">
                        <Card>
                            <Card.Body>
                                <Card.Title>Gestionar Agenda</Card.Title>
                                <Card.Text>
                                    <Link to="/agen">Gestionar Agenda</Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div> */}
                {/* <div className="row">
                </div> */}
            </div>
        </div>
    )

}

export default Dashboard;