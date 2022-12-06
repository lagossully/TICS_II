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
             {/* <div class="d-grid gap-2">
 
<nav class="navbar navbar-expand bg-primary" >
  
    <a class="navbar-brand" href="" onClick={() => navigation("/")}>HM Salon</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="" onClick={() => navigation("/asignarhora")}>Pedir Cita (Usuario)</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <button class="btn btn-outline-success" type="submit">iniciar secion</button>
      </form>
    </div>
  
</nav> */}

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