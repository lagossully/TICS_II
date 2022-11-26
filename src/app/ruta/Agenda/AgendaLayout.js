import React, { Component, useCallback } from "react";
import { Form, Button, Card, Col} from 'react-bootstrap';
import { useNavigate, Link} from "react-router-dom";
import Table from "./Tabla";

function AgendaLayout(){
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
                        <Table/>
                    </div>
                </div>
                {/* <div className="row">
                    <Button variant="primary" onClick={() => navigation("/user")}>Crear Usuario</Button>
                </div> */}
            </div>
        </div>
    )
}
export default AgendaLayout;