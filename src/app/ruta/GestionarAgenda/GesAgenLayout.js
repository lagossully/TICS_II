import React, { Component, useCallback } from "react";
import { Form, Button, Card, Col} from 'react-bootstrap';
import { useNavigate, Link} from "react-router-dom";
import Calendario from "./Calendario";

function GestionarAgenda(){
    const navigation = useNavigate();

    return(
        <div>
            <nav className="light-blue darken-4">
                <div className="container">
                    <a className="brand-logo" href="" onClick={() => navigation("/")}>HM Salon</a>
                </div>
            </nav>
            <Card>
                <Card.Body>
                    <Calendario/>
                </Card.Body>
            </Card>
        </div>
    )
}
export default GestionarAgenda;