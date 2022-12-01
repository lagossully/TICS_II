import React, { Component } from "react";
import { Form, Button} from 'react-bootstrap';
import Select from "react-select";
import { useNavigate, Link} from "react-router-dom";
import { MdOutlineLocalLaundryService } from "react-icons/md";

function Sandbox (){
    const navigation = useNavigate();

    // const Handler = (e)=> {
    //     let text = "2022/11/27 1000"
    //     text= text.split(" ")[0].split("/").join("f") +"h"+ text.split(" ")[1]
    //     fetch("/mod/agenda/findate/"+text,{
    //         method:"GET",
    //         headers:{
    //             "Accept":"application/json",
    //             "Content-Type":"application/json",
    //         }
    //     })
    //       .then(res => res.json())
    //       .then(data => {
    //         console.log(data)
    //       })
    //       .catch(err => console.error(err))
    // }



    // const Handler = (e)=> {
    //     let text = "19430918k"
    //     fetch("/mod/client/getcliente/"+text,{
    //         method:"GET",
    //         headers:{
    //             "Accept":"application/json",
    //             "Content-Type":"application/json",
    //         }
    //     })
    //       .then(res => res.json())
    //       .then(data => {
    //         console.log(data)
    //       })
    //       .catch(err => console.error(err))
    // }

    // const Handler = (e)=> {
    //     let text = "19430918k"
    //     fetch("/mod/client/putcliente/"+text,{
    //         method:"PUT",
    //         headers:{
    //             "Accept":"application/json",
    //             "Content-Type":"application/json",
    //         }
    //     })
    //       .then(res => res.json())
    //       .then(data => {
    //         console.log(data)
    //       })
    //       .catch(err => console.error(err))
    // }

    return(
        <Button onClick={() => Handler()}>SandBox</Button>
    )
        

}

export default Sandbox;