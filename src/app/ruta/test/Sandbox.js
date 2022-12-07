import React, { Component } from "react";
import { Form, Button} from 'react-bootstrap';
import Select from "react-select";
import { useNavigate, Link} from "react-router-dom";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import Auth from "../utils/auth";


function Sandbox(){
    return(
        <>
            <Auth/>
            <h1>hola</h1>
            {console.log(localStorage.getItem("AuthidHM"))}
        </>
    )
}

export default Sandbox;






// // import React, { Component } from "react";
// // import { Form, Button} from 'react-bootstrap';
// // import Select from "react-select";
// // import { useNavigate, Link} from "react-router-dom";
// // import { MdOutlineLocalLaundryService } from "react-icons/md";




//         import React, { useState } from 'react';
// import { Card } from 'react-bootstrap';
//         import Button from 'react-bootstrap/Button';
//         import Col from 'react-bootstrap/Col';
//         import Form from 'react-bootstrap/Form';
//         import InputGroup from 'react-bootstrap/InputGroup';
//         import Row from 'react-bootstrap/Row';
//         import { useNavigate } from 'react-router-dom';
        
       
        









// function Sandbox (){
//     const navigation = useNavigate();



//     const [validated, setValidated] = useState(false);
        
//     const handleSubmit = (event) => {
//       const form = event.currentTarget;
//       if (form.checkValidity() === false) {
//         event.preventDefault();
//         event.stopPropagation();
//       }
  
//       setValidated(true);

//     };







//     // const Handler = (e)=> {
//     //     let text = "2022/11/27 1000"
//     //     text= text.split(" ")[0].split("/").join("f") +"h"+ text.split(" ")[1]
//     //     fetch("/mod/agenda/findate/"+text,{
//     //         method:"GET",
//     //         headers:{
//     //             "Accept":"application/json",
//     //             "Content-Type":"application/json",
//     //         }
//     //     })
//     //       .then(res => res.json())
//     //       .then(data => {
//     //         console.log(data)
//     //       })
//     //       .catch(err => console.error(err))
//     // }



//     // const Handler = (e)=> {
//     //     let text = "19430918k"
//     //     fetch("/mod/client/getcliente/"+text,{
//     //         method:"GET",
//     //         headers:{
//     //             "Accept":"application/json",
//     //             "Content-Type":"application/json",
//     //         }
//     //     })
//     //       .then(res => res.json())
//     //       .then(data => {
//     //         console.log(data)
//     //       })
//     //       .catch(err => console.error(err))
//     // }

//     // const Handler = (e)=> {
//     //     let text = "19430918k"
//     //     fetch("/mod/client/putcliente/"+text,{
//     //         method:"PUT",
//     //         headers:{
//     //             "Accept":"application/json",
//     //             "Content-Type":"application/json",
//     //         }
//     //     })
//     //       .then(res => res.json())
//     //       .then(data => {
//     //         console.log(data)
//     //       })
//     //       .catch(err => console.error(err))
//     // }

//     return(
        
//      <div className='container'>
//       <form>
//       <div class="mb-3">
//         <label for="exampleInputEmail1" class="form-label">Email address</label>
//         <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
//         <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
//       </div>
//       <div class="mb-3">
//         <label for="exampleInputPassword1" class="form-label">Password</label>
//         <input type="password" class="form-control" id="exampleInputPassword1"></input>
//       </div>
//       <div class="mb-3 form-check">
//         <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
//         <label class="form-check-label" for="exampleCheck1">Check me out</label>
//       </div>
//       <button type="submit" class="btn btn-primary">Submit</button>
//     </form>
//      </div> 
        
//     )
        

// }

// export default Sandbox;