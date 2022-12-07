import React, { Component, useCallback } from "react";
import { Form, Button, Card, Col} from 'react-bootstrap';
import { useNavigate, Link} from "react-router-dom";
import Calendario from "./Calendario";
import Navlog from "../navlog";
import Auth from "../utils/auth";

function GestionarAgenda(){
    const navigation = useNavigate();

    return(
        <div>
            <Auth/>
            <Navlog/>
            <Card>
                <Card.Body>
                    <Calendario/>
                </Card.Body>
            </Card>
        </div>
    )
}
export default GestionarAgenda;