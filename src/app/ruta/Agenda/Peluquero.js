import React, { Component, useCallback } from "react";
import { Form, Button, Card, Col} from 'react-bootstrap';
import { useNavigate, Link} from "react-router-dom";
import Select from "react-select";

function AsignarPeluquero(){
    const navigate = useNavigate();

    const [isFetching, setIsFetching] = React.useState(false);
    const [data, setData] = React.useState([]);

    const [peluquero, setPeluquero] = React.useState("");
    const onPeluSelect=(value)=>{setPeluquero(value), console.log(value)};
    const opcionesPel=[]


    
    
    const [nombre, setNombre] = React.useState("");
    const [rut, setRut] = React.useState("");
    const [correo, setCorreo] = React.useState("");
    const [telefono, setTelefono] = React.useState("");

    const onNameChange=(value)=>setNombre(value);
    const onRutChange=(value)=>setRut(value);
    const onMailChange=(value)=>setCorreo(value);
    const onPhoneChange=(value)=>setTelefono(value);



    React.useEffect(() => {
        fetch("/mod/user")
          .then(res => res.json())
          .then(data => {
            setData(data)
            data.map((e)=>{opcionesPel.push({label:e.nombre, value:e.rut, horario:e.horario})})
            setIsFetching(true)
            setData(opcionesPel)
          })
          .catch(err => console.error(err))
      }, []);
    


    const [isFetching2, setIsFetching2] = React.useState(false);
    const [data2, setData2] = React.useState([]);

    const [servicio, setServicio] = React.useState("");
    const onServSelect=(value)=>{setServicio(value), console.log(value)};
    const opcionesSer=[]

    React.useEffect(() => {
        fetch("/mod/servicio")
          .then(res => res.json())
          .then(data => {
            // setData2(data)
            data.map((e)=>{opcionesSer.push({label:e.nombre, value:e.nombre})})
            setIsFetching2(true)
            setData2(opcionesSer)
          })
          .catch(err => console.error(err))
      },[]);

    const NextStep = ()=>{
        sessionStorage.setItem("nombre", nombre);
        sessionStorage.setItem("rut", rut);
        sessionStorage.setItem("correo", correo);
        sessionStorage.setItem("telefono", telefono);
        
        sessionStorage.setItem("peluquero", peluquero.label);
        sessionStorage.setItem("horario", peluquero.horario.split(""));
        sessionStorage.setItem("servicio", servicio.value);
        navigate("/agen")
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
        <div>
            <nav className="light-blue darken-4">
                <div className="container">
                    <a className="brand-logo" href="" onClick={() => navigate("/")}>HM Salon</a>
                </div>
            </nav>
            <div className="container">
                
            <Form.Label htmlFor="Nombre">Nombre</Form.Label>
                <Form.Control
                    
                    id="Nombre"
                    onChange={Nombre => onNameChange(Nombre.target.value)}
                    required={true}
                />
                <Form.Text id="Nombre" muted></Form.Text>
                
                <Form.Label htmlFor="rut">rut</Form.Label>
                <Form.Control
                    
                    id="rut"
                    onChange={rut => onRutChange(rut.target.value)}
                    required={true}
                />
                <Form.Text id="rut" muted></Form.Text>
                
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
                <Form.Text id="telefono" muted></Form.Text>
                <div className="row">
                    <Select
                        placeholder="Selecciona un peluquero"
                        value={peluquero}
                        onChange={ opt => onPeluSelect(opt)}
                        options={data}
                    />
                </div>
                <div className="row">
                    <Select
                        placeholder="Selecciona un servicio"
                        value={servicio}
                        onChange={ opt => onServSelect(opt)}
                        options={data2}
                    />
                </div>
                <Button variant="primary" type="submit" onClick={() => NextStep()}>Siguiente</Button> 
            </div>
        </div>
    )}
}
export default AsignarPeluquero;