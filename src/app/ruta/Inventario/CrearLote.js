import React, { Component } from "react";
import { Form, Button} from 'react-bootstrap';
import Select from "react-select";
import { useNavigate, Link} from "react-router-dom";

function CrearLote (){
    const navigation = useNavigate();
    
    const [producto, setProducto] = React.useState("");
    const [cantidad, setCantidad] = React.useState("");
    const [caduca, setCaduca] = React.useState("");
    const [proveedor, setProveedor] = React.useState("");
    const [isFetching, setIsFetching] = React.useState(false);

    const onProdChange=(value)=>setProducto(value);
    const onCantChange=(value)=>setCantidad(value);
    const onCadChange=(value)=>setCaduca(value);
    const onProvChange=(value)=>setProveedor(value);
    
    const listprod =[]
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        
        fetch("/mod/product")
          .then(res => res.json())
          .then(data => {
            console.log(data)
            data.map((e)=>{listprod.push({label:e.nombre, value:e.nombre})})
            setData(listprod)
            setIsFetching(true)
          })
          .catch(err => console.error(err))
    },[]);

    const Handler = (e)=> {
        let message={
            producto:producto.value,
            cantidad:cantidad,
            caduca:caduca,
            proveedor:proveedor
        }
        fetch("/mod/inven",{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
            },
            body: JSON.stringify(message)
        })
            .then(res => console.log(res))
                navigation("/inventario")
            .catch(err => console.error(err))
        e.preventDefault();
    }

    if(isFetching === false){
        return(
            <div>
                <h1>Loading...</h1>
            </div>
        )}
    else{

    return(
        <div>
            <nav className="light-blue darken-4">
                <div className="container">
                    <a className="brand-logo" href="" onClick={() => navigation("/menuprincipal")}>HM Salon</a>
                </div>
            </nav>
           
            <div className="container">
                zxczxc
                <Select
                    // defaultValue={days}
                    placeholder="Selecciona el producto"
                    value={producto}
                    onChange={ opt => onProdChange(opt)}
                    options={data}
                />
                
                <Form.Label htmlFor="cantidad">Cantidad</Form.Label>
                <Form.Control
                    id="cantidad"
                    onChange={costo => onCantChange(costo.target.value)}
                    required={true}
                />
                <Form.Text id="cantidad" muted></Form.Text>

                <Form.Label htmlFor="caduca">Fecha de Caducidad</Form.Label>
                <Form.Control
                    id="caduca"
                    onChange={fecha => onCadChange(fecha.target.value)}
                    required={true}
                />  
                <Form.Text id="caduca" muted></Form.Text>

                <Form.Label htmlFor="proveedor">Proveedor</Form.Label>
                <Form.Control
                    id="proveedor"
                    onChange={prov => onProvChange(prov.target.value)}
                    required={true}
                />  
                <Form.Text id="proveedor" muted></Form.Text>
                <Button variant="info" onClick={()=> Handler()}>Crear lote</Button>
                <Button variant="secondary" onClick={()=> navigation("/inventario")}>Cancelar</Button>
            </div>
        </div>
    )}

}

export default CrearLote;