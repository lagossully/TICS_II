import React, { Component, useEffect } from "react";
import { Form, Button, Row} from 'react-bootstrap';
import Select from "react-select";
import { useNavigate, Link} from "react-router-dom";

function ModificarLote (){
    const navigation = useNavigate();

    



    const [inventario, setInventario] = React.useState("");
    const [altibajo, setAltibajo] = React.useState("");
    const [cantidad, setCantidad] = React.useState("");
    const [descripcion, setDescripcion] = React.useState("");
    const [isFetching, setIsFetching] = React.useState(false);

    const onInventarioChange=(value)=>setInventario(value);
    const onAltibajoChange=(value)=>setAltibajo(value);
    const onCantidadChange=(value)=>setCantidad(value);
    const onDescripcionChange=(value)=>setDescripcion(value);
    
    const [id, setId] = React.useState("");

    const [data, setData] = React.useState([]);

    // useEffect(() => {
    //     setId(sessionStorage.getItem("temp"));
    //     setName(sessionStorage.getItem("modnom"));
    //     setRut(sessionStorage.getItem("modrut"));
    //     setMail(sessionStorage.getItem("modmail"));
    //     setIsFetching(true);


    // },[]);

    React.useEffect(() => {
        fetch("/mod/inven")
          .then(res => res.json())
          .then(data => {
            let opcionesPel=[]
            data.map((e)=>{opcionesPel.push({label:"producto: "+ e.producto + "; Proveedor: " + e.proveedor, value:e})})
            setData(opcionesPel)
            setIsFetching(true)
          })
          .catch(err => console.error(err))
      }, []);


    const Handler = (e)=> {
        let message={
            nombre:"this",
        }
        fetch("/mod/user/"+id,{
            method:"PUT",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
            },
            body: JSON.stringify(message)
        })
            .then(res => {console.log(res); navigation("/usuario")})
            .catch(err => console.error(err))
        e.preventDefault();
    }


    if(!isFetching){
        return <div>Cargando...</div>
    }
    else{
    return(
        <div>
            <nav className="light-blue darken-4">
                <div className="container">
                    <a className="brand-logo" href="" onClick={() => navigation("/menuprincipal")}>HM Salon</a>
                </div>
            </nav>
            <Row>
            <Select
                    placeholder="Selecciona el lote"
                    // value={horario}
                    onChange={ opt => onInventarioChange(opt)}
                    options={data}
                    className="basic-multi-select"
                    classNamePrefix="select"
                />
            </Row>
            <Row>
             {(inventario !== "")? <Form.Label htmlFor="cantidad">Cantidad Actual: {inventario.value.cantidad} </Form.Label>:<Form.Label htmlFor="pass">Lote no definido</Form.Label>}
                <Form.Control
                    type="int"
                    id="cantidad"
                    onChange={cantidad => onCantidadChange(cantidad.target.value)}
                    required={true}
                />
                <Form.Text id="passwordHelpBlock" muted></Form.Text>
            </Row>
            <Row>

                <Form.Label htmlFor="altibajo">Aumentar o disminuir</Form.Label>
                <Form.Control
                    // type="password"
                    id="altibajo"
                    onChange={altibajo => onAltibajoChange(altibajo.target.value)}
                    required={true}
                />
                <Form.Text id="passwordHelpBlock" muted></Form.Text>
            </Row>
            <Row>
                <Form.Label htmlFor="descripcion">Descripcion</Form.Label>
                <Form.Control
                    // type="password"
                    id="descripcion"
                    onChange={descripcion => onDescripcionChange(descripcion.target.value)}
                    required={true}
                />
                <Form.Text id="passwordHelpBlock" muted></Form.Text>
            </Row>
            {/* <Button variant="primary" onClick={()=> Handler}/> */}

         
        </div>
    )}

}

export default ModificarLote;