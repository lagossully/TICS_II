import React, { Component, useCallback } from "react";
import { Form, Button, Card, Col, Navbar, Nav, Container, Stack} from 'react-bootstrap';
import Select from "react-select";
import { useNavigate, Link} from "react-router-dom";
import Navsin from "./ruta/navsin";
import moment from "moment";


function Login (){
    const navigation = useNavigate();
    const time = moment().format('YYYY/MM/DD hh mm')
    const [isFetching, setIsFetching] = React.useState(false);

    const [user, setUser] = React.useState("");
    const [pass, setPass] = React.useState("");

    const onUserChange=(value)=>setUser(value);
    const onPassChange=(value)=>setPass(value);

    const borrar = ()=>{
      localStorage.clear();
    }


    // const [data, setData] = React.useState([]);

    const handleSubmit = () => {

      fetch("/mod/user")
        .then(res => res.json())
        .then(data => {
          let count = 0;
          data.map (item => {
            setIsFetching(true);
            if (item.correo == user && item.pass == pass){

              console.log("Bienvenido")
              localStorage.setItem("AuthidHM", item._id);
              localStorage.setItem("AuthnomHM", item.nombre);
              localStorage.setItem("AuthmailHM", item.correo);
              localStorage.setItem("AuthprofHM", item.perfil);
              localStorage.setItem("AuthtimeHM", moment().format('YYYY MM DD hh mm'));
              navigation("/menuprincipal")
            }
            else{
              count++;
            }
            if (count == data.length){
              console.log("Usuario o contraseña incorrecta")
              setIsFetching(false);
            }
          })
        })
        .catch(err => console.error(err))
    }



    // const handleSubmit =  () => {
    //   console.log(data.length);
    //   let count = 0;
    //   data.map (item => {
    //     if (item.correo == user && item.pass == pass){

    //       console.log("Bienvenido")
    //       localStorage.setItem("Authid", item._id);
    //       localStorage.setItem("Authnom", item.nombre);
    //       localStorage.setItem("Authmail", item.correo);
    //       // navigation("/menuprincipal")
    //     }
    //     else{
    //       count++;
    //     }
    //     if (count == data.length){
    //       console.log("Usuario o contraseña incorrecta")
    //     }
    //   })

    //   };


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
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Recordar contraseña" />
      </Form.Group> */}
      <Button variant="primary" onClick={()=>{handleSubmit()}}>
        Ingresar
      </Button>
      {/* <Button variant="primary" onClick={()=>{borrar()}}>
        Borrar
      </Button>
      <Button variant="primary" onClick={()=>{console.log(time)}}>
        this
      </Button> */}
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