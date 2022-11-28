import React, { Component } from "react";
import { Form, Button} from 'react-bootstrap';
import Select from "react-select";
import { useNavigate, Link} from "react-router-dom";

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
            <nav className="light-blue darken-4">
                <div className="container">
                    <a className="brand-logo" href="" onClick={() => navigation("/")}>HM Salon</a>
                </div>
            </nav>
           
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
                {/* <Button onClick={Handler}>Crear</Button> */}


                {/* <Form.Label htmlFor="Descripcion">Descripcion</Form.Label>
                <Form.Control
                    // type="password"
                    id="pass"
                    onChange={pass => onPassChange(pass.target.value)}
                    required={true}
                />
                <Form.Text id="passwordHelpBlock" muted></Form.Text> */}

                {/* <Select
                    placeholder="Selecciona un precio"
                    value={precio}
                    onChange={ opt => onPrecioChange(opt)}
                    options={options}
                /> */}
                <Button variant="info" onClick={()=> Handler()}>Crear Producto</Button>
                <Button variant="secondary" onClick={()=> navigation("/inv")}>Cancelar</Button>
            </div>
        </div>
    )

}

export default CrearProducto;