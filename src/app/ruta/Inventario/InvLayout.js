import React, { Component, useCallback } from "react";
import { Form, Button, Card, Col, Row, ListGroup} from 'react-bootstrap';
import { useNavigate, Link} from "react-router-dom";
import TablaInventario from "./TablaInventario";
import TablaProductos from "./TablaProductos";

function InventoryLayout(){
    const navigation = useNavigate();

    const [activeItem, setActiveItem] = React.useState("inventario");
    const ToggleActiveItem = (item) => {
        setActiveItem(item.target.name);
    }

    return(
        <div>
            <nav className="light-blue darken-4">
                <div className="container">
                    <a className="brand-logo" href="" onClick={() => navigation("/")}>HM Salon</a>
                </div>
            </nav>
            <Card>
                <Row>
                    <Col md={2} className="pe-0" >
                        <ListGroup>
                            <ListGroup.Item
                                action
                                name="inventario"
                                active={activeItem === "inventario"}
                                onClick={ToggleActiveItem}
                            >
                                Inventario
                            </ListGroup.Item>
                            <ListGroup.Item
                                action
                                name="productos"
                                active={activeItem === "productos"}
                                onClick={ToggleActiveItem}
                            >
                                Productos
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                     <Card.Body>
                        {activeItem === "inventario" && <TablaInventario />}
                        {activeItem === "productos" && <TablaProductos />}
                     </Card.Body>
                    </Col>
                </Row>
            </Card>

            {/* <div className="container">
                <div className="row">
                    <div className="col s12 m6">
                        <TablaProductos></TablaProductos>
                        <TablaInventario></TablaInventario>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
export default InventoryLayout;