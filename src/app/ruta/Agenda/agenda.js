import React, { Component, useCallback, useState } from "react";
import { Form, Button, Card, Col, Container, Row, Collapse, Modal, Stack, Navbar, Nav} from 'react-bootstrap';
// import Modal from 'react-bootstrap/Modal';
import { useNavigate, Link} from "react-router-dom";
import moment from "moment/moment";
import { ExactDay, FormatHour } from "../utils/time";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew } from 'react-icons/md';
import Navlog from "../navlog";
import styled from "styled-components";
import Auth from "../utils/auth";




const Styles = styled.div`
padding: 1rem;
  .user {
    background-color: blue;
    color: white;
  }
  table {
    border-spacing: 0;
    border: 1px solid black;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      :last-child {
        border-right: 0;
      }
    }
  }
`

function Calendary(){
    const navigation = useNavigate();

        
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data, setData] = React.useState([]);
    const [isFetching, setIsFetching] = React.useState(false);


    // const today = moment("2022/11/30").day();
    const [days, setDays] = useState([]);
    const [nextWeek, setNextWeek] = useState(0); 
    // const days = [];

    React.useEffect(() => {
        fetch("/mod/agenda")
            .then(res => res.json())
            .then(data => {
                setData(data)
                setIsFetching(true)

            })    
            .catch(err => console.error(err))
        }, []);
        // console.log(data.map((e)=>{return e.fecha}))
        // const today = moment().format('L');



    React.useEffect(() => {
        let filler=[]
        for (let i = 0; i < 7; i++) {
            filler.push(moment().add(i+nextWeek*7, 'days').format('YYYY/MM/DD hh:mm'));
        }
        setDays(filler)
    },[nextWeek]);

    // for (let i = 0; i < 7; i++) {
    //     // days.push(moment().add(i, 'days').format('dddd'));
    //     temp.push(moment().add(i, 'days').format('YYYY/MM/DD hh:mm'));
    //     setDays(temp)
    // }


    // onClick={()=>check(hour,day)}
    // const dayhour = ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00",
    //  "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"];
    const dayhour = ["1100", "1200", "1300", "1400", "1500", "1600", "1700", "1800", "1900"];
    
    const check = (hour)=>{
        let data2=[];
        let data3=[];
        let count = 0;
        let count2 = 0;
        data.map((e)=>{data2.push(e.fecha)});
        data.map((e)=>{(e.fecha === hour)? (e.usuario === sessionStorage.getItem("peluquero"))? count2++ : null  : null})
        // data.map((e)=>{data2.push(e.peluquero)});
        data2.forEach((e)=>{ e === hour ? count++ : null });
        // if(data2.includes(hour)){
        //     return false
        // }
        // else{ return true}
        if (count>=4 || count2>=1){
            return false
        }
        else{ return true
        }
    }

    const Gestionar = (value)=>{
        // console.log(today)

        // FillDays(1);
        sessionStorage.setItem("fecha", value);
        sessionStorage.setItem("dia", value.split(" ")[0]);
        sessionStorage.setItem("hora", value.split(" ")[1]);
        // console.log("fecha",sessionStorage.getItem("fecha"),"servicio",sessionStorage.getItem("servicio"),"peluquero",sessionStorage.getItem("peluquero"),"horario",sessionStorage.getItem("horario"))
        handleShow() 
        return(<></>
        )
        // navigation("/gestionar")
    }

    const Handler = (value)=>{
        // console.log("fecha",sessionStorage.getItem("fecha"),"servicio",sessionStorage.getItem("servicio"),"peluquero",sessionStorage.getItem("peluquero"),
        // "nombre",sessionStorage.getItem("nombre"),"rut", sessionStorage.getItem("rut"),"telefono",sessionStorage.getItem("telefono"),"correo",sessionStorage.getItem("correo"))
        // navigation("/gestionar")
        let message={ 
            nombre:sessionStorage.getItem("nombre"),
            rut:sessionStorage.getItem("rut"),
            correo:sessionStorage.getItem("correo"),
            telefono:sessionStorage.getItem("telefono")
        }
        
        switch(value){
            case "1":
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
                
                break;
            case "2":
                fetch("/mod/client/"+sessionStorage.getItem("clid"),{
                    method:"PUT",
                    headers:{
                        "Accept":"application/json",
                        "Content-Type":"application/json",
                    },
                    body: JSON.stringify(message)
                })
                    .then(res => console.log(res))
                    .catch(err => console.error(err))

            default:
                break;
            }
        
        message={
            usuario:sessionStorage.getItem("peluquero"),
            cliente:sessionStorage.getItem("rut"),
            servicio:sessionStorage.getItem("servicio"),
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
            .then(res => {console.log(res), navigation("/menuprincipal")})
            .catch(err => console.error(err))
        

    }

    if(isFetching === false){
        return(
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
    else{
    return(
        <div>   
                <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Resumen</Modal.Title>    
                    </Modal.Header>
                        <Modal.Body>
                            <p>fecha: {sessionStorage.getItem("dia")} a las {FormatHour(sessionStorage.getItem("hora"))} horas</p>
                            <p>Peluquero: {sessionStorage.getItem("peluquero")}</p>
                            <p>Servicio: {sessionStorage.getItem("servicio")}</p>
                        </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button variant="primary" onClick={()=>Handler(sessionStorage.getItem("next"))}>
                            Guardar Cita
                        </Button>
                    </Modal.Footer>
                </Modal>
            <table>
                <thead>
                    <tr>
                        <th className="col-width-5 th-prox-semana cp" data-fecha=" 2022/11/26 "><i
                                className="fa fa-chevron-left" aria-hidden="true"><Button size="sm" onClick={()=>setNextWeek(nextWeek-1)} disabled={nextWeek <1}>{MdOutlineArrowBackIosNew()}</Button> </i></th>
                                {/* {days.map((day) => (<th className="col-width-10  text-center active">{day.split(" ")[0]}<br/><small>21-11</small></th>))} */}
                        {/* {days.map((day) => (<th className="col-width-10  text-center active" >{day.split(" ")[0]}<br/><small></small></th>))} */}
                        {days.map((day) => (<th className="col-width-10  text-center active" >{ExactDay(moment(day.split(" ")[0]).day())}<br/><small>{day.split(" ")[0]}</small></th>))}
                        <th className="col-width-5 th-prev-semana cp" data-fecha=" 2022/12/03 "><i
                                className="fa fa-chevron-right" aria-hidden="true"><Button size="sm" onClick={()=>setNextWeek(nextWeek+1)} disabled={nextWeek >8}>{MdOutlineArrowForwardIos()}</Button> </i></th>
                    </tr>
                    
                    {dayhour.map((hour) => (
                        <tr>
                            <td className="col-width-5 text-right">
                                <div className="hidden-xs">{FormatHour(hour)}</div>
                            </td>
                            {days.map((day) =>(
                                <td className="col-width-10 border-center-calendario text-center va-middle ">
                                    <div className="visible-xs">{FormatHour(hour)}</div>
                                    
                                    {/* {(check(day.split(" ")[0]+" "+hour)&& (moment(day.split(" ")[0]).day() !== 0))? ( */}
                                    {(check(day.split(" ")[0]+" "+hour)&& (sessionStorage.getItem("horario").includes(moment(day.split(" ")[0]).day())))? (
                                    // <a className="btn-nueva-persona"><span className="label label-success">Disponible</span></a>
                                    <Link onClick={()=> Gestionar(day.split(" ")[0]+" "+hour)}className="btn-nueva-persona"><span className="label label-success">Disponible</span></Link>
                                    ):(
                                    <span className="label label-default" style={{opacity: 0.5}}>Ocupado</span>)}
                                </td>)
                                )}
                            <td className="col-width-5 border-rigth-calendario"></td>
                        </tr>
                    ))}
                </thead>
            </table>
            {/* <Button onClick={()=>console.log(data, sessionStorage.getItem("peluquero"))}>SSSSSSSSSSs</Button> */}
        </div>
    )}
}


function Agenda(){

    
    const navigation = useNavigate();
    return(
        <div>
            {/* <Auth></Auth> */}
            
            <Navbar bg="primary" variant="dark"> 
            <Container>
                <Navbar.Brand href="" onClick={() => navigation("/")}>
                    <img src="https://i.ibb.co/WHbHr2B/Logo-sobre-moda-femenina-minimalista-neutral.png" alt="HM SALON"  width="50" height="50"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    {/* <Button variant="light" onClick={()=>{localStorage.clear(), navigation("/")}}>Cerrar sesi??n</Button>{' '} */}
                </Navbar.Collapse>
                </Container>
            </Navbar>
        <card>
      <center><h1>Agendar Hora</h1></center>
      <br></br>
      <center>
    <Styles>
    <Calendary/>
      </Styles>
      </center>
      </card>
        {/* <Calendary/> */}
        </div>
    )
}

export default Agenda;