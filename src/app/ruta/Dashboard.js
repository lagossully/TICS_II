import React, { Component, useCallback } from "react";
import { Form, Button, Card, Col } from 'react-bootstrap';
import Select from "react-select";
import { useNavigate, Link} from "react-router-dom";

function Dashboard (){
    const navigation = useNavigate();

    return(
        <div>
            <nav className="light-blue darken-4">
                <div className="container">
                    <a className="brand-logo" href="" onClick={() => navigation("/")}>HM Salon</a>
                </div>
            </nav>
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
                                <Card.Title>Pedir Hora</Card.Title>
                                <Card.Text>
                                    <Link to="/pel">Se realiza la peticion de la hora</Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    {/* <div className="col s12 m6">
                        <Card>
                            <Card.Body>
                                <Card.Title>Crear Producto</Card.Title>
                                <Card.Text>
                                    <Link to="/prod">Crear Producto</Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div> */}
                    
                    {/* <div className="col s12 m6">
                        <Card>
                            <Card.Body>
                                <Card.Title>Crear Servicio</Card.Title>
                                <Card.Text>
                                    <Link to="/serv">Crear Servicio</Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div> */}
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
                </div>
                {/* <div className="row">
                </div> */}
            </div>
        </div>
    )

}

export default Dashboard;