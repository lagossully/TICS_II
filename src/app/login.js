import React, { Component, useCallback } from "react";
import { Form, Button, Card, Col, Navbar, Nav, Container, Stack} from 'react-bootstrap';
import Select from "react-select";
import { useNavigate, Link} from "react-router-dom";
import Navsin from "./ruta/navsin";
import axios from "axios";


function Login (){
    const navigation = useNavigate();
    const { userData, setUserData } = React.useState( { token: undefined, user: undefined } );
    const [user, setUser] = React.useState("");
    const [pass, setPass] = React.useState("");

    
  const [errorMsg, setErrorMsg] = React.useState();
    const onUserChange=(value)=>setUser(value);
    const onPassChange=(value)=>setPass(value);

    // const handler = () => {
    //     let message={
    //         "correo":user,
    //         "pass":pass
    //     }
        
    //     fetch("/mod/auth",{
    //         method:"POST",
    //         headers:{
    //             "Accept":"application/json",
    //             "Content-Type":"application/json",
    //         },
    //         body: JSON.stringify(message)
    //     })
    //         .then(res => console.log(res))
    //         .catch(err => console.error(err))
    // }

    const handleSubmit = async () => {
    
        try {
          const newUser = {
            correo: user,
            pass: pass,
          };
    
          const loginResponse = await axios.post("/mod/auth/login", newUser);
          //console.log(loginResponse.data)
        //   setUserData({
        //     token: loginResponse.data.token,
        //     correo: loginResponse.data.correo,
        //   });
        //   localStorage.setItem("auth-token", loginResponse.data.token);
    
          setUser({
            correo: "",
            pass: "",
          });
        } catch (err) {
          err.response
            ? setErrorMsg(err.response)
            : setErrorMsg("We have an error!");
        }
      };


    return(

        <>
        <Stack>
        <Navbar bg="primary" variant="dark"> 
        <Container>
        <Navbar.Brand href="" onClick={() => navigation("/")}>HM Salon</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                {/* <Nav.Link href="" onClick={() => navigation("/inventario")}>Inventario</Nav.Link>
                <Nav.Link href="" onClick={() => navigation("/ventas")}>Ventas</Nav.Link> */}
                <Nav.Link href="" onClick={() => navigation("/menuprincipal")}>Menu Principal</Nav.Link>
                <Nav.Link href="" onClick={() => navigation("/sandbox")}>Sandbox</Nav.Link>
                <Nav.Link href="" onClick={() => navigation("/asignarhora")}>Agendar Cita</Nav.Link>
            </Nav>

        </Navbar.Collapse>
        
        </Container>
    </Navbar>
    <br />
            <Container>
        <Container>
        <h2 className="text-center mb-4">Iniciar Sesión</h2>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Usuario</Form.Label>
        <Form.Control type="text" onChange={(e)=>onUserChange(e.target.value)} required />
        <Form.Text className="text-muted">
          Porfavor ingrse su mail.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" onChange={(e)=>onPassChange(e.target.value)} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Recordar contraseña" />
      </Form.Group>
      <Button variant="primary" onClick={()=>{handleSubmit()}}>
        Ingresar
      </Button>
    </Form>
    </Container>
    </Container>
    </Stack>
        </>
    )
}

export default Login;



// {/* <Card>
// <Card.Body>
//     <h2 className="text-center mb-4">Iniciar Sesión</h2>
//     <Form>
//         <Form.Group id="user">
//             <Form.Label>Usuario</Form.Label>
//             <Form.Control type="text" onChange={(e)=>onUserChange(e.target.value)} required />
//         </Form.Group>
//         <Form.Group id="pass">
//             <Form.Label>Contraseña</Form.Label>
//             <Form.Control type="password" onChange={(e)=>onPassChange(e.target.value)} required />
//         </Form.Group>
//         <Button className="w-100"  onClick={() => handler()}>
//             Iniciar Sesión
//         </Button>
//         {/* <Button className="w-100" onClick={() => console.log("user",user,"pass",pass)}>
//             Iniciar Sesión
//         </Button> */}
//     </Form>
// </Card.Body>
// </Card> */}