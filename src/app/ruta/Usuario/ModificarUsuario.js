import React, { Component, useEffect } from "react";
import { Form, Button, Stack} from 'react-bootstrap';
import Select from "react-select";
import { useNavigate, Link} from "react-router-dom";
import Navlog from "../navlog";
import Auth from "../utils/auth";
import {validate} from "../utils/rut";

function ModificarUsuario (){
    const navigation = useNavigate();

    



    const [name, setName] = React.useState("");
    const [rut, setRut] = React.useState("");
    const [pass, setPass] = React.useState("");
    const [mail, setMail] = React.useState("");
    const [perfil, setPerfil] = React.useState("1");
    const [horario, setHorario] = React.useState([]);
    const [isFetching, setIsFetching] = React.useState(false);

    const onNameChange=(value)=>setName(value);
    const onRutChange=(value)=>setRut(value);
    const onPassChange=(value)=>setPass(value);
    const onMailChange=(value)=>setMail(value);
    const onPerfilChange=(value)=>setPerfil(value);
    const onHorarioChange=(value)=>setHorario(value);

    const nombreValidate = React.useMemo(()=>{
        if(name.length>0){
            return false;
        }
        return true;
    },[name]);

    const rutValidate = React.useMemo(()=>{
        if(rut.length>0){
            return false;
        }
        return true;
    },[rut]);

    const passValidate = React.useMemo(()=>{
        if(pass.length>0){
            return false;
        }
        return true;
    },[pass]);

    const mailValidate = React.useMemo(()=>{
        if(mail.length>0){
            return false;
        }
        return true;
    },[mail]);

    const perfilValidate = React.useMemo(()=>{
        if(perfil === ""){
            return true;
        }
        return false;
    },[perfil]);

    const horarioValidate = React.useMemo(()=>{
        if(horario === ""){
            return true;
        }
        return false;
    },[horario]);
    
    const [id, setId] = React.useState("");
    useEffect(() => {
        setId(sessionStorage.getItem("temp"));
        // console.log(sessionStorage.getItem("temp"))
        setName(sessionStorage.getItem("modnom"));
        setRut(sessionStorage.getItem("modrut"));
        setMail(sessionStorage.getItem("modmail"));

        if(sessionStorage.getItem("modpro")=="0"){
            setPerfil({value:0, label:"Peluquero"});
        }
        else{
            setPerfil({value:1, label:"Administrador"});
        }
        let horariotemp = []
        for (let i = 0; i < sessionStorage.getItem("horario").length; i++) {
            switch (sessionStorage.getItem("horario")[i]) {
                case "1":
                    horariotemp.push({ value: "1", label: "Lunes" });
                    break;
                case "2":
                    horariotemp.push({ value: "2", label: "Martes" });
                    break;
                case "3":
                    horariotemp.push({ value: "3", label: "Miercoles" });
                    break;
                case "4":
                    horariotemp.push({ value: "4", label: "Jueves" });
                    break;
                case "5":
                    horariotemp.push({value: "5", label: "Viernes"});
                    break;
                case "6":
                    horariotemp.push({value: "6", label: "Sabado"});
                    break;
                case "0":
                    horariotemp.push({value: "0", label: "Domingo"});
                    break;
                default:
                    break;
        }}
        setHorario(horariotemp);
        // sessionStorage.removeItem("temp");
        setIsFetching(true);
    },[]);




    const options =[
        {
            value:"0",
            label:"Peluquero"
        },{
            value:"1",
            label:"Administrador"
        }]
    const days =[
        {   value:"0",
            label: "Lunes"},
        {   value:"1",
            label: "Martes"},
        {   value:"2",
            label: "Miercoles"},
        {   value:"3",
            label: "Jueves"},
        {   value:"4",
            label: "Viernes"},
        {   value:"5",
            label: "Sabado"},
        {   value:"6",
            label: "Domingo"}]

    const Handler = ()=> {
        let message={
            nombre:name,
            rut:rut,
            correo:mail,
            pass:pass,
            perfil:perfil.value,
            horario:horario.map((item)=>item.value).join("")
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
        // e.preventDefault();
    }

    const Delete = () => {
        fetch("/mod/user/"+id,{
            method:"DELETE",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
            }
        })
            .then(res => {console.log(res); navigation("/usuario")})
            .catch(err => console.error(err))
    }

    if(!isFetching){
        return (<div>
            <Navlog/>
        
        Cargando...</div>
)
    }
    else{
    return(
        <div>
        <Stack gap={3}>
            <Auth/>
            <Navlog/>
            <br/>
            <h2 className="text-center mb-4">Modificacion de usuario</h2>
            <div className="container">
                <Form.Label htmlFor="name">Nombre del Usuario</Form.Label>
                <Form.Control
                    defaultValue={sessionStorage.getItem("modnom")}
                    id="name"
                    onChange={name => onNameChange(name.target.value)}
                    required={true}
                />
                <Form.Text id="name" muted></Form.Text>
            </div>
            <div className="container">
                <Form.Label htmlFor="rut">Rut</Form.Label>
                <Form.Control
                    // type="password"
                    defaultValue={sessionStorage.getItem("modrut")}
                    id="rut"
                    onChange={rut => onRutChange(rut.target.value)}
                    required={true}
                />
                <Form.Text id="passwordHelpBlock" muted></Form.Text>
                
                <Form.Label htmlFor="mail">Correo Electronico</Form.Label>
                <Form.Control
                    // type="password"
                    defaultValue={sessionStorage.getItem("modmail")}
                    id="mail"
                    onChange={mail => onMailChange(mail.target.value)}
                    required={true}
                />
                <Form.Text id="passwordHelpBlock" muted></Form.Text>
                
                <Form.Label htmlFor="pass">Contrase??a</Form.Label>
                <Form.Control
                    // type="password"
                    id="pass"
                    onChange={pass => onPassChange(pass.target.value)}
                    required={true}
                />
                <Form.Text id="passwordHelpBlock" muted></Form.Text>

                <Select
                    placeholder="Selecciona un perfil"
                    value={perfil}
                    // defaultValue={{label:sessionStorage.getItem("modlab"), value:sessionStorage.getItem("modpro")}}
                    onChange={ opt => onPerfilChange(opt)}
                    options={options}
                />
                <Select
                    defaultValue={horario}
                    isMulti
                    placeholder="Selecciona el horario  "
                    // value={horario}
                    onChange={ opt => onHorarioChange(opt)}
                    options={days}
                    className="basic-multi-select"
                    classNamePrefix="select"
                />
                <Button variant="info" onClick={Handler} disabled={
                    ( nombreValidate || rutValidate || passValidate ||  mailValidate 
                    || perfilValidate || horarioValidate || !validate(rut))}>Modificar Usuario</Button>
                <Button variant="info" onClick={() => navigation("/usuario")}>Cancelar</Button>
                <Button variant="warning" onClick={() => Delete()}>Eliminar</Button>
                {/* <Button variant="warning" onClick={() => console.log(sessionStorage.getItem("horario").split(""))}>asd</Button> */}
                
                {/* <Link to={"../prod"} >try</Link>         */}
            </div>
            </Stack>
        </div>
    )}

}

export default ModificarUsuario;