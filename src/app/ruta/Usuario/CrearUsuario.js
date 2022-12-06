import React, { Component } from "react";
import { Form, Button, Stack} from 'react-bootstrap';
import Select from "react-select";
import { useNavigate, Link} from "react-router-dom";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import Navlog from "../navlog";

function CrearUsuario (){
    const navigation = useNavigate();

    const [name, setName] = React.useState("");
    const [rut, setRut] = React.useState("");
    const [pass, setPass] = React.useState("");
    const [mail, setMail] = React.useState("");
    const [perfil, setPerfil] = React.useState("1");
    const [horario, setHorario] = React.useState([]);

    const onNameChange=(value)=>setName(value);
    const onRutChange=(value)=>setRut(value);
    const onPassChange=(value)=>setPass(value);
    const onMailChange=(value)=>setMail(value);
    const onPerfilChange=(value)=>setPerfil(value);
    const onHorarioChange=(value)=>setHorario(value);
    

    const options =[
        {   value:"0",
            label:"Peluquero"},
        {   value:"1",
            label:"Administrador"}]

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

    React.useEffect(() => {
        onHorarioChange(days);
    },[]);

    const Handler = (e)=> {
        let message={
            nombre:name,
            rut:rut,
            correo:mail,
            pass:pass,
            perfil:perfil.value,
            horario:horario.map((item)=>item.value).join("")
        }
        fetch("/mod/user",{
            method:"POST",
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

    return(
        
        
        <div>
            <Stack>
                <Navlog/>
                    <br/>
                    <h2 className="text-center mb-4">Crear un usuario</h2>
                <nav className="light-blue darken-4">
                    <div className="container">
                    </div>
                </nav>
                <div className="container">
                    <Form.Label htmlFor="name">Nombre del Usuario</Form.Label>
                    <Form.Control
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
                        id="rut"
                        onChange={rut => onRutChange(rut.target.value)}
                        required={true}
                    />
                    <Form.Text id="passwordHelpBlock" muted></Form.Text>
                    
                    <Form.Label htmlFor="mail">Correo Electronico</Form.Label>
                    <Form.Control
                        // type="password"
                        id="mail"
                        onChange={mail => onMailChange(mail.target.value)}
                        required={true}
                    />
                    <Form.Text id="passwordHelpBlock" muted></Form.Text>
                    
                    <Form.Label htmlFor="pass">Contraseña</Form.Label>
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
                        onChange={ opt => onPerfilChange(opt)}
                        options={options}
                    />
                    <Select
                        defaultValue={days}
                        isMulti
                        placeholder="Selecciona el horario  "
                        // value={horario}
                        onChange={ opt => onHorarioChange(opt)}
                        options={days}
                        className="basic-multi-select"
                        classNamePrefix="select"
                    />

                    <Button variant="info" onClick={Handler}>Crear usuario</Button>
                    <Button variant="secondary" onClick={() => navigation("/usuario")}>Cancelar</Button>
                    {/* <Button variant="secondary" onClick={() => console.log(horario.map((item)=>item.value).join(""))}>this</Button> */}
                    
                    {/* <Link to={"../prod"} >try</Link>         */}
                </div>
            </Stack>
        </div>
    )


}

export default CrearUsuario;