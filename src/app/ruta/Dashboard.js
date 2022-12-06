import React, { Component, useCallback } from "react";
import { Form, Button, Card, Col, Navbar, Nav, Container,Stack} from 'react-bootstrap';
import Select from "react-select";
import { useNavigate, Link} from "react-router-dom";
import Navlog from "./navlog";

// const divStyle = {
//     background-color: '#611A8A';
//   };

function Dashboard (){
    const navigation = useNavigate();

    return(
        <div>
            
            <Stack gap={3}>
            <Navlog/>
            
             
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
                    {/* </div> */}
                    {/* <div className="col s12 m6">
                        <Card>
                            <Card.Body>
                                <Card.Title>Pedir Hora (POR CLIENTE)</Card.Title>
                                <Card.Text>
                                    <Link to="/pel">Se realiza la peticion de la hora</Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div> */}
                
                </div>
                {/* <div className="row"> */}
                    <div className="col s12 m6">
                        <Card>
                            <Card.Body>
                                <Card.Title>Inventario</Card.Title>
                                <Card.Text>
                                    <Link to="/inventario">Acceso a al inventario</Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    
                    <div className="col s12 m6">
                        <Card>
                            <Card.Body>
                                <Card.Title>Gestionar Agenda</Card.Title>
                                <Card.Text>
                                    <Link to="/gestionaragenda">Gestionar Agenda</Link>
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
            </Stack>
        </div>
        
    )

}

export default Dashboard;