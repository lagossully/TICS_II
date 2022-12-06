import React, { Component } from "react";
import { Form, Button, Stack} from 'react-bootstrap';
import Select from "react-select";
import { useNavigate, Link} from "react-router-dom";
import Navlog from "./navlog";

function CrearServicio (){
    const navigation = useNavigate();

    const [name, setName] = React.useState("");
    const [ID, setID] = React.useState("");
    const [Descripcion, setDescripcion] = React.useState("");
    const [tarifa, setTarifa] = React.useState("");
    const [insumos, setInsumos] = React.useState([]);
    const [duracion, setDuracion] = React.useState("");

    const onNameChange=(value)=>setName(value);
    const onIDChange=(value)=>setID(value);
    const onPassChange=(value)=>setPass(value);
    const onDescripcionChange=(value)=>setDescripcion(value);
    const onTarifaChange=(value)=>setTarifa(value);
    const onInsumosChange=(value)=>setInsumos(value);
    const onDuracionChange=(value)=>setDuracion(value);
    
   /* const options =[
        {
            value:"0",
            label:"Peluquero"
        },{
            value:"1",
            label:"Administrador"
        }]*///Aqui se cargan los datos de la base de datos
    const Handler = (e)=> {
        let message={
            name:name,
            ID:ID,
            descripcion:descripcion,
            insumos:insumos,
            tarifa:tarifa.value
        }
        fetch("/this",{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
            },
            body: JSON.stringify(message)
        })
            .then(res => console.log(res))
            .catch(err => console.error(err))
        e.preventDefault();
    }

    return(

        <Stack gap={3}>
            <Navlog/>
        <div>
            <nav className="light-blue darken-4">
                <div className="container">
                    <a className="brand-logo" href="" onClick={() => navigation("/")}>HM Salon</a>
                </div>
            </nav>
            <div className="container">
                <Form.Label htmlFor="name">Nombre del Producto</Form.Label>
                <Form.Control
                    id="name"
                    onChange={name => onNameChange(name.target.value)}
                    required={true}
                />
                <Form.Text id="name" muted></Form.Text>
            </div>
            <div className="container">
                <Form.Label htmlFor="ID">ID</Form.Label>
                <Form.Control
                    
                    id="ID"
                    onChange={ID => onIDChange(ID.target.value)}
                    required={true}
                />
                <Form.Text id="ID" muted></Form.Text>
                
                <Form.Label htmlFor="Descripcion">Agregue descripcion</Form.Label>
                <Form.Control
                
                    id="Descripcion"
                    onChange={Descripcion => onDescripcionChange(Descripcion.target.value)}
                    required={true}
                />
                <Form.Text id="Descripcion" muted></Form.Text>
                
                

                <Form.Label htmlFor="Tarifa">Tarifa</Form.Label>
                <Form.Control
                    id="Tarifa"
                    onChange={Tarifa => onTarifaChange(Tarifa.target.value)}
                    required={true}
                />  
                <Form.Text id="Tarifa" muted></Form.Text>

                <Form.Label htmlFor="Duracion">Duracion</Form.Label>
                <Form.Control
                    id="Duracion"
                    onChange={Duracion => onDuracionChange(Duracion.target.value)}  
                    required={true}
                />  
                <Form.Text id="Duracion" muted></Form.Text>


                {/* crear un areglo de productos 
                
                <Form.Label htmlFor="Insumos">Agregue Insumos</Form.Label>
                <Form.Control
                    id="Insumos"
                    onChange={Insumos => onInsumosChange(Insumos.target.value)}
                    required={true}
                />
                <Form.Text id="Insumos" muted></Form.Text>*/}


                
                <Button variant="info" onClick={Handler}>Crear Producto</Button>
            </div>
        </div>
        </Stack>
    )

}

export default CrearServicio;