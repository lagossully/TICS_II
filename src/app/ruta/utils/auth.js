import React from "react";
import { Navigate } from "react-router-dom";
import moment from "moment";

function Auth(){
    // const navigation = useNavigate();
    // const Abort = ()=>{
    //     console.log(localStorage.getItem("AuthidHM"))
    //     navigation("/")
    // }
    const [id] = React.useState(localStorage.getItem("AuthidHM"));
    const [nom] = React.useState(localStorage.getItem("AuthnomHM"));
    const [mail] = React.useState(localStorage.getItem("AuthmailHM"));
    const [time] = React.useState(localStorage.getItem("AuthtimeHM"));

    // console.log(localStorage.getItem("AuthidHM"), localStorage.getItem("AuthnomHM"), localStorage.getItem("AuthmailHM"), localStorage.getItem("AuthtimeHM"))

    // const id = localStorage.getItem("AuthidHM");
    // const nom = localStorage.getItem("AuthnomHM");
    // const mail = localStorage.getItem("AuthmailHM");
    // const time = localStorage.getItem("AuthtimeHM");

    // console.log(time.split(" ")[3])
    // if (id === null || nom === null || mail === null || time === null || time.split(" ")[0] === moment().format('YYYY MM DD') ){
        if (id === null || nom === null || mail === null || time === null || time.split(" ")[0] !== moment().format('YYYY') || time.split(" ")[1] !== moment().format('MM') || time.split(" ")[2] !== moment().format('DD')  ||  time.split(" ")[3] !== moment().format('hh')){
        localStorage.clear();
        return (<Navigate to={"/"}/>);
    }
    else{
    return(<></>)}
}
export default Auth;