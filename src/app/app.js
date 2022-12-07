import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom"
import { Form, Button} from 'react-bootstrap';
import Select from "react-select";

import CrearUsuario from "./ruta/Usuario/CrearUsuario";
import UserLayout from "./ruta/Usuario/UserLayout";
import ModificarUsuario from "./ruta/Usuario/ModificarUsuario";

import CrearProducto from "./ruta/Inventario/CrearProducto";



import CrearServicio from "./ruta/CrearServicio";
import Dashboard from "./ruta/Dashboard";

import Test from "./ruta/Agenda/agendatest";
import Agenda from "./ruta/Agenda/agenda";
import AsignarPeluquero from "./ruta/Agenda/Peluquero";

import InventoryLayout from "./ruta/Inventario/InvLayout";
import CrearLote from "./ruta/Inventario/CrearLote";


import GestionarAgenda from "./ruta/GestionarAgenda/GesAgenLayout";
import AsignarAgenda from "./ruta/GestionarAgenda/Agendar";

import Sandbox from "./ruta/test/Sandbox";
import Portada from "./ruta/Portada";
import ModificarAgenda from "./ruta/GestionarAgenda/ModificarAgenda";
import ModificarLote from "./ruta/Inventario/ModificarLote";
import Login from "./login";
import RealDashboard from "./ruta/Dashboard/RealDashboard";



function App (){


  return(
    <BrowserRouter>
      <Routes>
        
      <Route path="/" element={<Portada/>} />
        <Route path="menuprincipal" element={<Dashboard/>} />

        <Route path="usuario" element={<UserLayout/>} />
        <Route path="modificarusuario" element={<ModificarUsuario/>} />
        <Route path="crearusuario" element={<CrearUsuario/>} />

        <Route path="inventario" element={<InventoryLayout/>} />
        <Route path="agregarproducto" element={<CrearProducto/>} />
        <Route path="crearlote" element={<CrearLote/>} />
        <Route path="modificarlote" element={<ModificarLote/>} />


        <Route path="gestionaragenda" element={<GestionarAgenda/>} />
        <Route path="asignaragenda" element={<AsignarAgenda/>} />
        <Route path="modificaragenda" element={<ModificarAgenda/>} />


        {/* <Route path="crearservicio" element={<CrearServicio/>} /> */}

        <Route path="pedirhora" element={<Agenda/>} />
        <Route path="asignarhora" element={<AsignarPeluquero/>} />

        <Route path="login" element={<Login/>} />


        {/* <Route path="dashboard" element={<RealDashboard/>} /> */}

        {/* <Route path="test" element={<Test/>} /> vista de prueba */}

        <Route path="/sandbox" element={<Sandbox/>} />
      </Routes>
    </BrowserRouter>
  )
    
}

export default App;