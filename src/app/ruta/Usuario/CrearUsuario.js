import React, { Component } from "react";
import { Form, Button} from 'react-bootstrap';
import Select from "react-select";
import { useNavigate, Link} from "react-router-dom";

function CrearUsuario (){
    const navigation = useNavigate();

    const [name, setName] = React.useState("");
    const [rut, setRut] = React.useState("");
    const [pass, setPass] = React.useState("");
    const [mail, setMail] = React.useState("");
    const [perfil, setPerfil] = React.useState("1");

    const onNameChange=(value)=>setName(value);
    const onRutChange=(value)=>setRut(value);
    const onPassChange=(value)=>setPass(value);
    const onMailChange=(value)=>setMail(value);
    const onPerfilChange=(value)=>setPerfil(value);
    

    const options =[
        {
            value:"0",
            label:"Peluquero"
        },{
            value:"1",
            label:"Administrador"
        }]
    const Handler = (e)=> {
        let message={
            nombre:name,
            rut:rut,
            correo:mail,
            pass:pass,
            perfil:perfil.value
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
            <nav className="light-blue darken-4">
                <div className="container">
                    <a className="brand-logo" href="" onClick={() => navigation("/")}>HM Salon</a>
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
                <Button variant="info" onClick={Handler}>Crear usuario</Button>
                <Button variant="info" onClick={() => navigation("/usuario")}>Cancelar</Button>
                
                {/* <Link to={"../prod"} >try</Link>         */}
            </div>
        </div>
    )

}

export default CrearUsuario;