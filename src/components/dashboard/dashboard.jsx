import React from 'react';
import { Container, Row, Col, DropdownButton, Dropdown } from 'react-bootstrap';
import MainNavBar from '../navBar/mainNavBar'
import './dashboard.css'


export default function Dashboard(props) {

    return (
        <Container fluid>
            <Row>
                <Col>
                    <MainNavBar></MainNavBar>
                </Col>
            </Row>
            <Row className="mainContainer">
                <Col >
                    <DropdownButton key='Primary' id="dropdown-basic-button" title="Ordenar">
                        <Dropdown.Item href="#/action-1">Fecha de Publicación</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Lugar de trabajo</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Salario</Dropdown.Item>
                    </DropdownButton>
                </Col>
                <Col>
                    <DropdownButton key='Secondary' id="dropdown-basic-button" title="Filtrar">
                        <Dropdown.Item href="#/action-1">Nombre del puesto</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Habilidad</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Rubro</Dropdown.Item>
                    </DropdownButton>|
                </Col>
            </Row>
        </Container>
    )
}