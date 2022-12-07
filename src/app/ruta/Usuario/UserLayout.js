import React, { Component, useCallback } from "react";
import { Form, Button, Card, Col, Stack} from 'react-bootstrap';
import { useNavigate, Link} from "react-router-dom";
import Navlog from "../navlog";
import Auth from "../utils/auth";
import UserTable from "./TablaUsuario";

function UserLayout(){
    const navigation = useNavigate();

    return(
        <div>
            <Stack>
                <Auth/>
                <Navlog/>
            <br/>
            {/* <h2 className="text-center mb-4">Usuarios</h2> */}
            <nav className="light-blue darken-4">
                <div className="container">
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col s12 m6">
                        <UserTable/>
                    </div>
                </div>
                <div className="row">
                    {/* <Button variant="primary" onClick={() => navigation("/crearusuario")}>Crear Usuario</Button> */}
                    <center><Link to="/crearusuario"><button type="button" class="btn btn-primary">Crear Usuario</button></Link></center>
                </div>
            </div>
            </Stack>
        </div>
    )
}
export default UserLayout;