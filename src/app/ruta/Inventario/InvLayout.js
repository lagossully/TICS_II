import React, { Component, useCallback } from "react";
import { Form, Button, Card, Col, Row, ListGroup, Nav, Container, Stack} from 'react-bootstrap';
import { useNavigate, Link} from "react-router-dom";
import TablaInventario from "./TablaInventario";
import TablaProductos from "./TablaProductos";
import Navlog from "../navlog";
import Auth from "../utils/auth";


function InventoryLayout(){
    const navigation = useNavigate();

    const [activeItem, setActiveItem] = React.useState("inventario");
    const ToggleActiveItem = (item) => {
        setActiveItem(item.target.name);
    }

    return(
        <div>
            <Auth/>
            <Navlog/>
            <br/>

<Container>

<Row>

<Col xs lg="2"></Col>

<Col >
<Nav variant="tabs">
    <Nav.Item>
        <Nav.Link name="inventario" onClick={ToggleActiveItem} active={activeItem === "inventario"}>Inventario</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link name="productos" onClick={ToggleActiveItem} active={activeItem === "productos"}>Productos</Nav.Link>
    </Nav.Item>

</Nav>
<Card>
        {activeItem === "inventario" && 
        <>
            <TablaInventario/> 
            <center>
                <Stack direction="horizontal" gap={3}>
                    <br/>
                    <br/>
                    <Link to="/crearlote"><button type="button" className="btn btn-primary">Crear lote</button></Link>
                    {/* <Link to="/modificarlote"><button type="button" className="btn btn-primary">Modificar lote</button></Link> */}
                </Stack>
            </center> 
        </>} 
        {activeItem === "productos" && <>
        <TablaProductos />
        <center>
            <Stack direction="horizontal" gap={3}>
                <br/>
                <br/>
                <Link to="/agregarproducto"><button type="button" className="btn btn-primary">Crear producto</button></Link>
                {/* <Link to="/modificarproducto"><button type="button" class="btn btn-primary">Modificar producto</button></Link> */}
            </Stack>
        </center>
        </>}

     </Card>
</Col>
<Col xs lg="2"></Col>
</Row>

</Container>
    
     



</div>
    )
}
export default InventoryLayout;