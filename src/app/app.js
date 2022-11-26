import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom"
import { Form, Button} from 'react-bootstrap';
import Select from "react-select";

import CrearUsuario from "./ruta/Usuario/CrearUsuario";
import UserLayout from "./ruta/Usuario/UserLayout";
import ModificarUsuario from "./ruta/Usuario/ModificarUsuario";

import CrearProducto from "./ruta/CrearProducto";
import CrearServicio from "./ruta/CrearServicio";
import Dashboard from "./ruta/Dashboard";

import Test from "./ruta/Agenda/agendatest";
import Agenda from "./ruta/Agenda/agenda";

function App (){


  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="usuario" element={<UserLayout/>} />
        <Route path="mod" element={<ModificarUsuario/>} />
        <Route path="user" element={<CrearUsuario/>} />
        <Route path="prod" element={<CrearProducto/>} />
        <Route path="serv" element={<CrearServicio/>} />
        <Route path="agen" element={<Agenda/>} />
        <Route path="test" element={<Test/>} /> {/*vista de prueba*/}
      </Routes>
    </BrowserRouter>
  )
    
}

export default App;