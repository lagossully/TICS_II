import React, { Component, useCallback } from "react";
import { Form, Button, Card, Col } from 'react-bootstrap';
import Select from "react-select";
import { useNavigate, Link} from "react-router-dom";

function Dashboard (){
    const navigation = useNavigate();
    // const handleClick = useCallback(() => navigate(link), [navigate])
    
    
  
    // const Handler = (e)=> {
    //     let message={
    //         nombre:name,
    //         rut:rut,
    //         correo:mail,
    //         pass:pass,
    //         perfil:perfil.value
    //     }
    //     fetch("/mod/user",{
    //         method:"POST",
    //         headers:{
    //             "Accept":"application/json",
    //             "Content-Type":"application/json",
    //         },
    //         body: JSON.stringify(message)
    //     })
    //         .then(res => console.log(res))
    //         .catch(err => console.error(err))
    //     e.preventDefault();
    // }

    return(
        <div>
            <nav className="light-blue darken-4">
                <div className="container">
                    <a className="brand-logo" href="/">HM Salon</a>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col s12 m6">
                        <Card>
                            <Card.Body>
                                <Card.Title>Crear Usuario</Card.Title>
                                <Card.Text>
                                    <Link to="/user">Crear Usuario</Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col s12 m6">
                        <Card>
                            <Card.Body>
                                <Card.Title>Crear Producto</Card.Title>
                                <Card.Text>
                                    <Link to="/prod">Crear Producto</Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    
                    <div className="col s12 m6">
                        <Card>
                            <Card.Body>
                                <Card.Title>Crear Servicio</Card.Title>
                                <Card.Text>
                                    <Link to="/serv">Crear Servicio</Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                {/* <div className="row">
                </div> */}
            </div>
        </div>
    )

}

export default Dashboard;