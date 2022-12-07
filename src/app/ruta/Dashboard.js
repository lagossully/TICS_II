import React, { Component, useCallback } from "react";
import { Form, Button, Card, Col, Navbar, Nav, Container,Stack} from 'react-bootstrap';
import Select from "react-select";
import { useNavigate, Link} from "react-router-dom";
import Navlog from "./navlog";
import BarChart from 'react-bar-chart';
import styled from "styled-components";
import moment from 'moment';
import { ExactDay } from "./utils/time";
import Auth from "./utils/auth";






const Styles2 = styled.div`
/*===========================
  card-01 css
===========================*/
.single-card {
  box-shadow: var(--shadow-1);
  border-radius: 8px;
  overflow: hidden;
  margin-top: 30px;
  -webkit-transition: all 0.3s ease-out 0s;
  -moz-transition: all 0.3s ease-out 0s;
  -ms-transition: all 0.3s ease-out 0s;
  -o-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
}
.single-card:hover {
  box-shadow: var(--shadow-4);
}
.single-card .card-image img {
  width: 100%;
  height: 100%;
}
.single-card .card-content {
  padding: 16px;
}
.single-card .card-content .card-title {
  margin-bottom: 0;
}
.single-card .card-content .card-title a {
  color: var(--black);
  -webkit-transition: all 0.3s ease-out 0s;
  -moz-transition: all 0.3s ease-out 0s;
  -ms-transition: all 0.3s ease-out 0s;
  -o-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
}
.single-card .card-content .card-title a:hover {
  color: var(--primary);
}
.single-card .card-content .text {
  color: var(--dark-3);
  margin-top: 8px;
}

`

const Styles = styled.div`
.bar {
    fill: steelblue;
  }
  
  .bar:hover {
    fill: brown;
  }
  
  .axis {
    font: 10px sans-serif;
  }
  
  .axis path,
  .axis line {
    fill: none;
    stroke: #000;
    shape-rendering: crispEdges;
  }
  
  .x.axis path {
    display: none;
  }
`

function Dashboard (){
    const navigation = useNavigate();
    const [data, setData] = React.useState([]);
    const [data2, setData2] = React.useState([]);
    const [data3, setData3] = React.useState([]);
    const [isFetching, setIsFetching] = React.useState(false);
    const [isFetching2, setIsFetching2] = React.useState(false);
    const [isFetching3, setIsFetching3] = React.useState(false);
    const [isFetching4, setIsFetching4] = React.useState(false);

    const [chart1, setChart1] = React.useState([]);
    const [chart2, setChart2] = React.useState([]);
    const [chart3, setChart3] = React.useState([]);


    // const QPel =  [];


    React.useEffect(() => {

        fetch("/mod/user")
          .then(res => res.json())
          .then(data => {
            let opcionesPel=[]
            data.map((e)=>{ if (e.perfil === "0"){
                opcionesPel.push(e)}
            })
            setIsFetching(true)
            setData2(opcionesPel)
          })
          .catch(err => console.error(err))
          
         
      }, []);


     React.useEffect(() => {
      fetch("/mod/agenda")
      .then(res => res.json())
      .then(data => {
        let opcionesPel=[]
        data.map((e)=>{opcionesPel.push(e)})
        setIsFetching2(true)
        setData(opcionesPel)
      })
      .catch(err => console.error(err))
    }, []);

    React.useEffect(() => {
        fetch("/mod/servicio")
          .then(res => res.json())
          .then(data => {
            let opcionesSer=[]
            data.map((e)=>{opcionesSer.push(e)})
            setIsFetching4(true)
            setData3(opcionesSer)

          })
          .catch(err => console.error(err))
      },[]);

    React.useEffect(() => {
        let QPel = [];
        data2.map((e)=>{QPel.push({text: e.particular})})
        for (let i = 0; i < data2.length; i++) {
            let count = 0
            for (let j = 0; j < data.length; j++) {
                if (data2[i].nombre === data[j].usuario){
                    count = count + 1
                }
            }
            QPel[i].value = count
        }
        setChart1(QPel)

        let QsSer = [];
        data3.map((e)=>{QsSer.push({text: e.nombre})})
        for (let i = 0; i < data3.length; i++) {
            let count = 0
            for (let j = 0; j < data.length; j++) {
                if (data3[i].nombre === data[j].servicio){
                    count = count + 1
                }
            }
            QsSer[i].value = count
        }
        setChart2(QsSer)

        let Qday=[{text: "Lunes"},{text: "Martes"},{text: "Miercoles"},{text: "Jueves"},{text: "Viernes"},{text: "Sabado"},{text: "Domingo"}]
        for (let i = 0; i < 7; i++) {
            let count = 0
            for (let j = 0; j < data.length; j++) {
                if (ExactDay(moment(data[j].fecha.split(" ")[0]).day()) === Qday[i].text){
                    count = count + 1
                }
            }
            Qday[i].value = count
        }

        setChart3(Qday)
        

        setIsFetching3(true)



    }, [data,data2,data3]);




    if (isFetching === false || isFetching2 === false|| isFetching4 === false) {
        return (
            <div>
                <Auth></Auth>
                <h1>Dashboard</h1>
                <h2>Loading...</h2>
            </div>
        )
    }
    else{

    return(
        <div>
            
            {(localStorage.getItem("AuthprofHM")==="1")? <><Stack gap={3}>
            <Navlog/>
            
            <section class="card-area pb-5">
   <div class="container">
      <div class="row justify-content-center">
         <div class="col-lg-4 col-md-7 col-sm-9">
            <div class="single-card card-style-one">
               <div class="card-image">
                  <img src="https://cdn-icons-png.flaticon.com/512/6073/6073873.png" />
               </div>
               <div class="card-content">
                  <h4 class="card-title">
                     <a href="javascript:void(0)">Item title is here</a>
                  </h4>
                  <p class="text">
                     Short description for the ones who look for something new
                  </p>
               </div>
            </div>
           
         </div>
         
         <div class="col-lg-4 col-md-7 col-sm-9">
            <div class="single-card card-style-one">
               <div class="card-image">
                  <img src="https://cdn.ayroui.com/1.0/images/card/card-2.jpg" alt="Image" />
               </div>
               <div class="card-content">
                  <h4 class="card-title">
                     <a href="javascript:void(0)">Item title is here</a>
                  </h4>
                  <p class="text">
                     Short description for the ones who look for something new
                  </p>
               </div>
            </div>
           
         </div>
         
         <div class="col-lg-4 col-md-7 col-sm-9">
            <div class="single-card card-style-one">
               <div class="card-image">
                  <img src="https://cdn.ayroui.com/1.0/images/card/card-3.jpg" alt="Image" />
               </div>
               <div class="card-content">
                  <h4 class="card-title">
                     <a href="javascript:void(0)">Item title is here</a>
                  </h4>
                  <p class="text">
                     Short description for the ones who look for something new
                  </p>
               </div>
            </div>
            
         </div>
     
      </div>
 
   </div>
 
</section>
             
            <div className="container">
                <div className="row">
                    <div className="col s12 m6">
                        <Card>
                            <Card.Body>
                                <Card.Title>Usuario</Card.Title>
                                <Card.Text>
                                    <Link to="/usuario">Gestionar Usuarios</Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                </div>
                    <div className="col s12 m6">
                        <Card>
                            <Card.Body>
                                <Card.Title>Inventario</Card.Title>
                                <Card.Text>
                                    <Link to="/inventario">Acceso a al inventario</Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    
                    <div className="col s12 m6">
                        <Card>
                            <Card.Body>
                                <Card.Title>Gestionar Agenda</Card.Title>
                                <Card.Text>
                                    <Link to="/gestionaragenda">Gestionar Agenda</Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            </Stack>
            
            { (chart1[1])? <Styles ><BarChart ylabel='Cantidad'
                  width={700}
                  height={700}
                  margin={{top: 150, right: 150, bottom: 150, left: 150}}
                  data={chart1}
                  /> </Styles> :null}
            
            { (chart2[2])? <Styles ><BarChart ylabel='Cantidad'
                  width={700}
                  height={700}
                  margin={{top: 150, right: 150, bottom: 150, left: 150}}
                  data={chart2}
                  /> </Styles> :null}

            { (chart3[2])? <Styles ><BarChart ylabel='Cantidad'
                  width={700}
                  height={700}
                  margin={{top: 150, right: 150, bottom: 150, left: 150}}
                  data={chart3}
                  /> </Styles> :null}
                  </>: <>
                  {/* ACA PARTE LA VISTA D */}
                  <><Stack gap={3}>
            <Navlog/>
            
             
            <div className="container">
                <div className="row">
                    <div className="col s12 m6">
                        <Card>
                            <Card.Body>
                                <Card.Title>Inventario</Card.Title>
                                <Card.Text>
                                    <Link to="/inventario">Acceso a al inventario</Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    
                    <div className="col s12 m6">
                        <Card>
                            <Card.Body>
                                <Card.Title>Gestionar Agenda</Card.Title>
                                <Card.Text>
                                    <Link to="/gestionaragenda">Gestionar Agenda</Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            </Stack>
                  </></>
                    }
        </div>
        
    )}

}

export default Dashboard;