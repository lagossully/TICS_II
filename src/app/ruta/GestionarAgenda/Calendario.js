import React, { Component, useCallback, useState } from "react";
import { Form, Button, Card, Col, Modal, Row, Accordion, AccordionButton} from 'react-bootstrap';
import { useNavigate, Link} from "react-router-dom";
import moment from "moment/moment";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew } from 'react-icons/md';
import { ExactDay, FormatHour } from "../utils/time";
import styled from "styled-components";
import Navlog from "../navlog";




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
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [data, setData] = React.useState([]);
    const [isFetching, setIsFetching] = React.useState(false);

    
    const [days, setDays] = useState([]);
    const [nextWeek, setNextWeek] = useState(0);
    

    React.useEffect(() => {
        let filler=[]
        for (let i = 0; i < 7; i++) {
            filler.push(moment().add(i+nextWeek*7, 'days').format('YYYY/MM/DD hh:mm'));
        }
        setDays(filler)
    },[nextWeek]);

    React.useEffect(() => {
        fetch("/mod/agenda")
          .then(res => res.json())
          .then(data => {
            setData(data)
            // console.log(data)
            setIsFetching(true)
          })
          .catch(err => console.error(err))
      }, []);
    const today = moment().format('DD MM YYYY hh:mm:ss');
    const dayhour = ["1100", "1200", "1300", "1400", "1500", "1600", "1700", "1800", "1900"];
    
    const check = (hour)=>{
        const data2=[]
        data.map((e)=>{data2.push(e.fecha)})
        if(data2.includes(hour)){
            return false
            // console.log(hour)
        }
        else{ return true}
    }

    const [dataAgenda, setDataAgenda] = useState([]);

    const ListServicios = (fecha)=>{ //2022/11/29 1030
        
        sessionStorage.setItem("fecha", fecha);
        let request = fecha.split(" ")[0].split("/").join("f") +"h"+ fecha.split(" ")[1]
        fetch("/mod/agenda/findate/"+request,{
            method:"GET",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
            }
        })
          .then(res => res.json())
          .then(data => {
            // console.log(data)
            setDataAgenda(data)
            let temp=[]
            data.map((e)=>{temp.push(e.usuario)})
            sessionStorage.setItem("peluqueros", temp.join("/"))
          })
          .catch(err => console.error(err))
          handleShow()
    }

    const Delete = (id) => {
        // console.log(id)
        fetch("/mod/agenda/"+id,{
            method:"DELETE",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
            },
        })
            .then(res => {console.log(res); navigate("/gestionaragenda")})
            .catch(err => console.error(err))
        
        e.preventDefault();
    }

    const NoRealizada = (citaid) => {
        // console.log(citaid)
        let message={
            realizado:"No"
        }
        fetch("/mod/agenda/moddone/"+citaid,{ //agregar cita
            method:"PUT",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body: JSON.stringify(message)
        })
        .then(res => {console.log(res)})
            // .then(res => {console.log(res)})
            .catch(err => console.error(err))

    }

    const Modify = (id) => {
        sessionStorage.setItem("id", id._id);
        sessionStorage.setItem("peluquero", id.usuario);
        sessionStorage.setItem("modaservicio", id.servicio);
        sessionStorage.setItem("modacliente", id.cliente);

        // navigate("/modificaragenda")

        


    }


    // const Thisthis= (asd) =>{
        // let pelAsig=[]
        // asd.map(e=>{pelAsig.push(e.usuario)})
        // sessionStorage.setItem("peluquero2", pelAsig.join(" "));
        // navigate("/geapel");

    // }


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
            <table>
                <thead>
                    <tr>
                        <th className="col-width-5 th-prox-semana cp" data-fecha=" 2022/11/26 "><i
                                className="fa fa-chevron-left" aria-hidden="true"><Button size="sm" onClick={()=>setNextWeek(nextWeek-1)} disabled={nextWeek <-111}>{MdOutlineArrowBackIosNew()}</Button> </i></th>
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
                                    
                                    {check(day.split(" ")[0]+" "+hour)? (
                                    <div className="btn-nueva-persona"><Link onClick={()=>ListServicios(day.split(" ")[0]+" "+hour)} >Disponible</Link></div>
                                    ):(
                                    <span className="label label-default" ><Link onClick={()=>ListServicios(day.split(" ")[0]+" "+hour)} style={{ color: '#FF0000' }} >Asignado</Link></span>)}
                                </td>)
                                )}
                            <td className="col-width-5 border-rigth-calendario"></td>
                        </tr>
                    ))}
                </thead>
            </table>
            <Modal size={"lg"} show={show} onHide={handleClose} centered >
                <Modal.Header closeButton>
                    <Modal.Title>Asignado a:</Modal.Title>    
                </Modal.Header>
                    <Modal.Body>
                            <Accordion>
                            {dataAgenda[0]?  
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>{dataAgenda[0].usuario}</Accordion.Header>
                                {/* <Accordion.Body>Peluquero: {dataAgenda[0].usuario} </Accordion.Body> */}
                                <Accordion.Body>Cliente: {dataAgenda[0].cliente} </Accordion.Body>
                                <Accordion.Body>Servicios: {dataAgenda[0].servicio}  </Accordion.Body>
                                <Accordion.Body>
                                    <Row>
                                        <Col> <Link onClick={() => Modify(dataAgenda[0])}>Marcar como realizada</Link> </Col>
                                        <Col> <Link onClick={() => NoRealizada(dataAgenda[0]._id)}>Marcar como no realizada </Link> </Col>
                                        <Col> <Link to="/modificaragenda" onClick={() => Modify(dataAgenda[0])}>Modificar</Link> </Col>
                                        <Col> <Link onClick={()=>Delete(dataAgenda[0]._id)}>Eliminar</Link> </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>: 
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Horario Disponible</Accordion.Header>
                                <Accordion.Body><Link to="/asignaragenda">Asignar hora</Link></Accordion.Body>
                                {/* <Accordion.Body><Link to="/geapel">Asignar</Link></Accordion.Body> */}
                            </Accordion.Item>}

                            {dataAgenda[1]? 
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>{dataAgenda[1].usuario}</Accordion.Header>
                                {/* <Accordion.Body>Peluquero: {dataAgenda[1].usuario} </Accordion.Body> */}
                                <Accordion.Body>Cliente: {dataAgenda[1].cliente} </Accordion.Body>
                                <Accordion.Body>Servicios: {dataAgenda[1].servicio}  </Accordion.Body>
                                <Accordion.Body>
                                    <Row>
                                        <Col> <Link onClick={() => Modify(dataAgenda[1])}>Marcar como realizada</Link> </Col>
                                        <Col> <Link onClick={() => Modify(dataAgenda[1])}>Marcar como no realizada </Link> </Col>
                                        <Col> <Link to="/modificaragenda" onClick={() => Modify(dataAgenda[1])}>Modificar</Link> </Col>
                                        <Col> <Link onClick={()=>Delete(dataAgenda[1]._id)}>Eliminar</Link> </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>: dataAgenda[0]? 
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Horario Disponible</Accordion.Header>
                                <Accordion.Body><Link to="/asignaragenda">Asignar</Link></Accordion.Body>
                            </Accordion.Item> : null
                            }

                            {dataAgenda[2]? 
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>{dataAgenda[2].usuario}</Accordion.Header>
                                {/* <Accordion.Body>Peluquero: {dataAgenda[2].usuario} </Accordion.Body> */}
                                <Accordion.Body>Cliente: {dataAgenda[2].cliente} </Accordion.Body>
                                <Accordion.Body>Servicios: {dataAgenda[2].servicio}  </Accordion.Body>
                                <Accordion.Body>
                                    <Row>
                                        <Col> <Link onClick={() => Modify(dataAgenda[2])}>Marcar como realizada</Link> </Col>
                                        <Col> <Link onClick={() => Modify(dataAgenda[2])}>Marcar como no realizada </Link> </Col>
                                        <Col> <Link to="/modificaragenda" onClick={() => Modify(dataAgenda[2])}>Modificar</Link> </Col>
                                        <Col> <Link onClick={()=>Delete(dataAgenda[2]._id)}>Eliminar</Link> </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>: dataAgenda[1]? 
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Horario Disponible</Accordion.Header>
                                <Accordion.Body><Link to="/asignaragenda">Asignar</Link></Accordion.Body>
                            </Accordion.Item> : null
                            }

                            {dataAgenda[3]? 
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>{dataAgenda[3].usuario}</Accordion.Header>
                                {/* <Accordion.Body>Peluquero: {dataAgenda[3].usuario} </Accordion.Body> */}
                                <Accordion.Body>Cliente: {dataAgenda[3].cliente} </Accordion.Body>
                                <Accordion.Body>Servicios: {dataAgenda[3].servicio}  </Accordion.Body>
                                <Accordion.Body>
                                    <Row>
                                        <Col> <Link onClick={() => Modify(dataAgenda[3])}>Marcar como realizada</Link> </Col>
                                        <Col> <Link onClick={() => Modify(dataAgenda[3])}>Marcar como no realizada </Link> </Col>
                                        <Col> <Link to="/modificaragenda" onClick={() => Modify(dataAgenda[3])}>Modificar</Link> </Col>
                                        <Col> <Link onClick={()=>Delete(dataAgenda[3]._id)}>Eliminar</Link> </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>: dataAgenda[2]?
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Horario Disponible</Accordion.Header>
                                <Accordion.Body><Link to="/asignaragenda">Asignar</Link></Accordion.Body>
                            </Accordion.Item>: null
                            }
                        </Accordion>
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    {/* <Button variant="primary" onClick={handleClose}>
                        sample
                    </Button> */}
                </Modal.Footer>
            </Modal>
            {/* <Button onClick={()=> console.log(sessionStorage.getItem("id"),sessionStorage.getItem("modauser"), sessionStorage.getItem("modaservicio"), sessionStorage.getItem("modacliente"))}>thiss</Button> */}
        </div>
    )}
}


function Calendario(){
    const navigation = useNavigate();
    // console.log(moment().format('L'))
    return(
        <div>
        

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

export default Calendario;