import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom"
import { Form, Button} from 'react-bootstrap';
import Select from "react-select";
import CrearUsuario from "./ruta/CrearUsuario";
import CrearProducto from "./ruta/CrearProducto";
import CrearServicio from "./ruta/CrearServicio";
import Dashboard from "./ruta/Dashboard";

function App (){


  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="user" element={<CrearUsuario/>} />
        <Route path="prod" element={<CrearProducto/>} />
        <Route path="serv" element={<CrearServicio/>} />
      </Routes>
    </BrowserRouter>
  )
    
}

export default App;