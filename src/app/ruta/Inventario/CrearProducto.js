import React, { Component } from "react";
import { Form, Button, Stack} from 'react-bootstrap';
import Select from "react-select";
import { useNavigate, Link} from "react-router-dom";
import Navlog from "../navlog";
import Auth from "../utils/auth";

function CrearProducto (){
    const navigation = useNavigate();
    
    const [name, setName] = React.useState("");
    const [descripcion, setDescripcion] = React.useState("");
    const [precio, setPrecio] = React.useState("");
    const [costo, setCosto] = React.useState("");

    const onNameChange=(value)=>setName(value);
    const onDescripcionChange=(value)=>setDescripcion(value);
    const onPrecioChange=(value)=>setPrecio(value);
    const onCostoChange=(value)=>setCosto(value);
    
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
            nombre:name,
            descripcion:descripcion,
            costo:costo,
            precio:precio
        }
        fetch("/mod/product",{
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
        <div>
            <Auth/>
            <Navlog/>
            <br/>
            <h2 className="text-center mb-4">Crear Producto</h2>
            <br/>
           
            <div className="container">
                <Form.Label htmlFor="ID">Nombre Del Producto</Form.Label>
                <Form.Control
                    
                    id="ID"
                    onChange={ID => onNameChange(ID.target.value)}
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
                
                <Form.Label htmlFor="costo">Costo</Form.Label>
                <Form.Control
                    id="costo"
                    onChange={costo => onCostoChange(costo.target.value)}
                    required={true}
                />
                <Form.Text id="costo" muted></Form.Text>

                <Form.Label htmlFor="precio">Precio</Form.Label>
                <Form.Control
                    id="precio"
                    onChange={precio => onPrecioChange(precio.target.value)}
                    required={true}
                />  
                <Form.Text id="precio" muted></Form.Text>
                <Stack direction="horizontal" gap={3}>
                <br/>
                <br/>   
                <br/>  
                <button type="button" className="btn btn-primary" onClick={Handler}>Crear</button>
                <button type="button" className="btn btn-secondary" onClick={()=>navigation("/inventario")}>Cancelar</button>
                </Stack>
            </div>
        </div>
    )

}

export default CrearProducto;