import React from 'react';
import { Button } from 'react-bootstrap';
import BarChart from 'react-bar-chart';
import styled from "styled-components";
import moment from 'moment';
import { ExactDay } from '../utils/time';




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


function RealDashboard(){

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
                <h1>Dashboard</h1>
                <h2>Loading...</h2>
            </div>
        )
    }

    return (
        <div>
            <h1>Dashboard</h1>
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
        </div>
    )
}
export default RealDashboard;