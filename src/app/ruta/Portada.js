import React, { Component, useCallback } from "react";
import { Form, Button, Card, Col, Navbar, Nav} from 'react-bootstrap';
import Select from "react-select";
import { useNavigate, Link} from "react-router-dom";
import Navsin from "./navsin";

// const divStyle = {
//     background-color: '#611A8A';
//   };

function Portada (){
    const navigation = useNavigate();

    return(
        <div>
           <Navsin/>


            {/* <nav className="light-blue darken-4">
                <div className="container">
                    <a className="brand-logo" href="" onClick={() => navigation("/")}>HM Salon</a>
                </div>
            </nav> */}
            <div className="container">
               <h4>PORTADA ACA</h4>
            </div>
        </div>
    )

}

export default Portada;