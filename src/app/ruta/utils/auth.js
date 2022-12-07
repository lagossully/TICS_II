import React from "react";
import { useNavigate } from "react-router-dom";

function Auth(){
    const navigation = useNavigate();
    const Abort = ()=>{
        console.log(localStorage.getItem("AuthidHM"))
        navigation("/")
    }
    const [id] = React.useState(localStorage.getItem("AuthidHM"));
    const [nom] = React.useState(localStorage.getItem("AuthnomHM"));
    const [mail] = React.useState(localStorage.getItem("AuthmailHM"));
    const [time] = React.useState(localStorage.getItem("AuthtimeHM"));

    // const id = localStorage.getItem("AuthidHM");
    // const nom = localStorage.getItem("AuthnomHM");
    // const mail = localStorage.getItem("AuthmailHM");
    // const time = localStorage.getItem("AuthtimeHM");

    
    if (id === null || nom === null || mail === null || time === null){
        return (<>{Abort}</>);
    }
    else{
    return(<></>)}
}
export default Auth;