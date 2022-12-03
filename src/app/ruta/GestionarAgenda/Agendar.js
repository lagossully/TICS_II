import React, { Component, useCallback } from "react";
import { Form, Button, Card, Col} from 'react-bootstrap';
import { useNavigate, Link} from "react-router-dom";
import Select from "react-select";
import moment from "moment/moment";

function AsignarAgenda(){
    const navigate = useNavigate();

    const [isFetching, setIsFetching] = React.useState(false);
    const [data, setData] = React.useState([]);

    const [peluquero, setPeluquero] = React.useState("");
    const onPeluSelect=(value)=>{setPeluquero(value), console.log(value)};


    
    
    const [nombre, setNombre] = React.useState("");
    const [rut, setRut] = React.useState("");
    const [correo, setCorreo] = React.useState("");
    const [telefono, setTelefono] = React.useState("");

    const onNameChange=(value)=>setNombre(value);
    const onRutChange=(value)=>setRut(value);
    const onMailChange=(value)=>setCorreo(value);
    const onPhoneChange=(value)=>setTelefono(value);



    React.useEffect(() => {
        // console.log(sessionStorage.getItem("fecha"))
        fetch("/mod/user")
          .then(res => res.json())
          .then(data => {
            setData(data)
            let opcionesPel = []
            let temp = sessionStorage.getItem("peluqueros")
            // data.map((e)=>{opcionesPel.push({label:e.nombre, value:e.rut, horario:e.horario})})
            data.map((e)=>{
                if(e.horario.split("").includes(moment(sessionStorage.getItem("fecha").split(" ")[0]).days().toString()) && !temp.split("/").includes(e.nombre)){
                    console.log(temp.split("/").includes(e.nombre))
                    opcionesPel.push({label:e.nombre, value:e.rut, horario:e.horario})
                }
            })
            setIsFetching(true)
            setData(opcionesPel)
          })
          .catch(err => console.error(err))
      }, []);
    


    const [isFetching2, setIsFetching2] = React.useState(false);
    const [data2, setData2] = React.useState([]);

    const [servicio, setServicio] = React.useState("");
    const onServSelect=(value)=>{setServicio(value), console.log(value)};
    // const opcionesSer=[]

    React.useEffect(() => {
        fetch("/mod/servicio")
          .then(res => res.json())
          .then(data => {
            // setData2(data)
            let opcionesSer = []
            data.map((e)=>{opcionesSer.push({label:e.nombre, value:e.nombre})})
            setIsFetching2(true)
            setData2(opcionesSer)
          })
          .catch(err => console.error(err))
      },[]);

      const Handler = (value)=>{
        let message={ 
            nombre:nombre,
            rut:rut,
            correo:correo,
            telefono:telefono
        }
        fetch("/mod/client",{ //agrgar cliente
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
            },
            body: JSON.stringify(message)
        })
            .then(res => console.log(res))
            .catch(err => console.error(err))
        
        message={
            usuario:peluquero.label,
            cliente:rut,
            servicio:servicio.value,
            fecha:sessionStorage.getItem("fecha")
        }
        fetch("/mod/agenda",{ //agregar cita
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body: JSON.stringify(message)
        })
            .then(res => {console.log(res), navigate("/gestionaragenda")})
            .catch(err => console.error(err))
        

    }

    const Thisthis = (value)=>{
        // console.log("fecha", toString(moment(sessionStorage.getItem("fecha").split(" ")[0]).days()))
        // console.log("data",data[0].horario.split(""))
        // console.log("data",data[0].horario.split("").includes(moment(sessionStorage.getItem("fecha").split(" ")[0]).days().toString()))
        // console.log(data,data[1].horario.split("").includes(moment(sessionStorage.getItem("fecha").split(" ")[0]).day()))
        console.log(sessionStorage.getItem("peluqueros"))

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
                    <a className="brand-logo" href="" onClick={() => navigate("/menuprincipal")}>HM Salon</a>
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
                <Button variant="primary" type="submit" onClick={() => Handler()}>Siguiente</Button> 
                <Button variant="primary" type="submit" onClick={() =>(Thisthis())}>this</Button> 
            </div>
        </div>
    )}
}
export default AsignarAgenda;