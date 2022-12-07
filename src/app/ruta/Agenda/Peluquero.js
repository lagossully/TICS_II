import React, { Component, useCallback } from "react";
import { Form, Button, Card, Col, Container, Row, Collapse, Modal, Stack, Navbar, Nav} from 'react-bootstrap';
import { useNavigate, Link} from "react-router-dom";
import Select from "react-select";
import Navlog from "../navlog";
import Auth from "../utils/auth";
import { validate } from "../utils/rut";


function AsignarPeluquero(){
    const navigate = useNavigate();


    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [isFetching, setIsFetching] = React.useState(false);
    const [dataOb, setData] = React.useState([]);

    const [peluquero, setPeluquero] = React.useState("");
    const onPeluSelect=(value)=>{setPeluquero(value), console.log(value)};

    const [userData, setUserData] = React.useState([]);

    
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  const [next, setNext] = React.useState(0);


    
    
    const [nombre, setNombre] = React.useState("");
    const [rut, setRut] = React.useState("");
    const [correo, setCorreo] = React.useState("");
    const [telefono, setTelefono] = React.useState("");

    const onNameChange=(value)=>setNombre(value);
    const onRutChange=(value)=>setRut(value);
    const onMailChange=(value)=>setCorreo(value);
    const onPhoneChange=(value)=>setTelefono(value);

    const nombreValidate = React.useMemo(()=>{
        if(nombre.length>0){
            return false;
        }
        return true;
    },[nombre]);

    const rutValidate = React.useMemo(()=>{
        if(rut.length>7){
            return false;
        }
        return true;
    },[rut]);

    const correoValidate = React.useMemo(()=>{
        if(correo.length>0){
            return false;
        }
        return true;
    },[correo]);

    const telefonoValidate = React.useMemo(()=>{
        if(telefono.length>0){
            return false;
        }
        return true;
    },[telefono]);

    const peluqueroValidate = React.useMemo(()=>{
        if(peluquero === ""){
            return true;
        }
        return false;
    },[peluquero]);



    React.useEffect(() => {
        fetch("/mod/user")
          .then(res => res.json())
          .then(data => {
            let opcionesPel=[]
            data.map((e)=>{opcionesPel.push({label:e.nombre, value:e.rut, horario:e.horario, id:e._id})})
            setIsFetching(true)
            setData(opcionesPel)
          })
          .catch(err => console.error(err))
      }, []);
    


    const [isFetching2, setIsFetching2] = React.useState(false);
    const [data2, setData2] = React.useState([]);

    const [servicio, setServicio] = React.useState("");
    const onServSelect=(value)=>{setServicio(value), console.log(value)};

    React.useEffect(() => {
        fetch("/mod/servicio")
          .then(res => res.json())
          .then(data => {
            let opcionesSer=[]
            data.map((e)=>{opcionesSer.push({label:e.nombre, value:e.nombre})})
            setIsFetching2(true)
            setData2(opcionesSer)

          })
          .catch(err => console.error(err))
      },[]);


    const servicioValidate = React.useMemo(()=>{
        if(servicio === ""){
            return true;
        }
        return false;
    },[servicio]);
    
    const AreYou = (rut)=>{
        fetch("/mod/client/getcliente/"+rut,{
            method:"GET",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
            }
        })
          .then(res => res.json())
          .then(data => {
            setUserData(data)
            console.log("user",userData)
            console.log("data",data)
            if(data.length===0){
                setNext(1)
                setOpen(!open)
                setOpen2(!open2)
                }
            else{
            handleShow()}
            // console.log("userData:", userData)
            // console.log("rut:", rut)
          })
          .catch(err => console.error(err))
        
        // setOpen(!open)
    }


    const NextStep = ()=>{
        sessionStorage.setItem("next", next)
        {next!==1? sessionStorage.setItem("clid",userData[0]._id):null}
        // console.log(userData[0]._id)
        switch (next) {
            case 1:
            case 2:
                sessionStorage.setItem("nombre", nombre);
                sessionStorage.setItem("correo", correo);
                sessionStorage.setItem("telefono", telefono);
            case 3:
                sessionStorage.setItem("rut", rut);
                sessionStorage.setItem("peluquero", peluquero.label);
                sessionStorage.setItem("horario", peluquero.horario.split(""));
                sessionStorage.setItem("servicio", servicio.value);
                // navigate("/agen");
            default:
                navigate("/pedirhora");
        }


    }

    

    if (isFetching === false || isFetching2 === false){
        return(
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
    else{
    return(
        <>
            {/* <Auth/> */}
            <Navbar bg="primary" variant="dark"> 
            <Container>
                <Navbar.Brand href="" onClick={() => navigation("/")}>
                    <img src="https://i.ibb.co/WHbHr2B/Logo-sobre-moda-femenina-minimalista-neutral.png" alt="HM SALON"  width="50" height="50"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="" onClick={() => navigation("/inventario")}>Inventario</Nav.Link>
                        <Nav.Link href="" onClick={() => navigation("/ventas")}>Ventas</Nav.Link>
                        <Nav.Link href="" onClick={() => navigation("/menuprincipal")}>Portada</Nav.Link>
                        <Nav.Link href="" onClick={() => navigation("/sandbox")}>Sandbox</Nav.Link>
                        <Nav.Link href="" onClick={() => navigation("/asignarhora")}>Pedir Cita (Usuario)</Nav.Link>
                    </Nav>
                    {/* <Button variant="light" onClick={()=>{localStorage.clear(), navigation("/")}}>Cerrar sesión</Button>{' '} */}
                </Navbar.Collapse>
                </Container>
            </Navbar>
            <br/>
            <h2 className="text-center mb-4">Agendar Hora</h2>
            <Container>
                <Collapse in={!open3}>
                    <Form.Group>
                        <Form.Label htmlFor="rut">Rut</Form.Label>
                        <Form.Control
                            id="rut"
                            onChange={rut => onRutChange(rut.target.value)}
                            required={true}
                        />
                        <Form.Text className="text-muted">
          Ingrese su rut sin puntos ni guión
        </Form.Text>
                        <br/>
                <br/>
                        <Button onClick={()=>{AreYou(rut), setOpen3(!open3)}}> Continuar</Button>
                    </Form.Group>
                </Collapse>
                {open3? <div>rut: {rut}</div> : null}
                <Collapse in={open}>
                    <div>
                        <Form.Label htmlFor="Nombre">Nombre</Form.Label>
                            <Form.Control
                                
                                id="Nombre"
                                onChange={Nombre => onNameChange(Nombre.target.value)}
                                required={true}
                            />
                        <Form.Label htmlFor="correo">correo</Form.Label>
                        <Form.Control
                            
                            id="correo"
                            onChange={correo => onMailChange(correo.target.value)}
                            required={true}
                        />
                        <Form.Text id="correo" muted></Form.Text>
                        
                        <Form.Label htmlFor="telefono">telefono</Form.Label>
                        <Form.Control
                            
                            id="telefono"
                            onChange={telefono => onPhoneChange(telefono.target.value)}
                            required={true}
                        />
                    </div>
                </Collapse>
                <Collapse in={open2} >
                    <div>
                        <br/>
                        <Row>
                            <Select
                                placeholder="Selecciona un peluquero"
                                value={peluquero}
                                onChange={ opt => onPeluSelect(opt)}
                                options={dataOb}
                            />
                        </Row>
                        <br/>
                        <Row>
                        <br/>
                            <Select
                                placeholder="Selecciona un servicio"
                                value={servicio}
                                onChange={ opt => onServSelect(opt)}
                                options={data2}
                            />
                        </Row>
                        
                        {/* <Button onClick={()=> console.log(validate(rut))}> asdasdasd</Button> */}
                    </div>
                </Collapse>

                <br/>
                <Stack direction="horizontal" gap={3}>
                {open3? <Button onClick={()=>navigate("/menuprincipal")}>Cancelar</Button> : null}
                {(next===3)? <Button onClick={()=>NextStep()} disabled={(peluqueroValidate 
                || servicioValidate)}>Siguiente</Button> : (next===1 || next===2)?
                    <Button variant="primary" type="submit" onClick={() => NextStep()} disabled={
                    ( nombreValidate || rutValidate || correoValidate ||  telefonoValidate 
                    || peluqueroValidate || servicioValidate || !validate(rut))}>Siguiente</Button>: null }
                </Stack>

<br/>
                

            </Container>
            {(userData.length >0 )? <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Hola {userData[0].nombre}!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Como desea continuar?</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={()=>{handleClose(),setOpen3(!open3)}}>Atras</Button>
                <Button variant="primary" onClick={()=>{setOpen(!open),handleClose(), setNext(2), setOpen2(!open2)}}>Modificar Datos</Button>
                <Button variant="primary" onClick={()=>{setOpen2(!open2),handleClose(), setNext(3)}}> Continuar </Button>
                </Modal.Footer>
            </Modal>: null}
        </>
    )}
}
export default AsignarPeluquero;