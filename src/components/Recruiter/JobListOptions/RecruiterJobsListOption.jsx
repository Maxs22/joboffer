import React from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import { filterByPositionName, filterBySkills, filterByLocation, filterByCompanyName, filterByState, sortByPublicationDate, sortByLocation } from '../../../redux/Recruiter/JobList/RecruiterJobListActions';
import { useHistory } from "react-router-dom";


export default function RecruiterJobsListOption() {

    const dispatch = useDispatch();

    const history = useHistory();

    const createNewJobOffer = (event) => {

        history.push('/recruiter/create/joboffer');
        event.preventDefault();
    }

    const handleOnSelect = (eventKey) => {

        switch (eventKey) {
            case 'sortByPublicationDate': dispatch(sortByPublicationDate); break;
            case 'sortByLocation': dispatch(sortByLocation); break;
            case 'filterByPositionName': dispatch(filterByPositionName); break;
            case 'filterBySkills': dispatch(filterBySkills); break;
            case 'filterByLocation': dispatch(filterByLocation); break;
            case 'filterByCompanyName': dispatch(filterByCompanyName); break;
            case 'filterByState': dispatch(filterByState); break;
            default: break;
        }
    }

    return (
        <div>
            <Row>
                <Col xs={{ span: 3, offset: 1 }} >
                    <DropdownButton variant='info' id="dropdown-basic-button" title="Ordenar">
                        <Dropdown.Item eventKey="sortByPublicationDate" onSelect={handleOnSelect}>Fecha de Publicación</Dropdown.Item>
                        <Dropdown.Item eventKey="sortByLocation" onSelect={handleOnSelect}>Lugar de trabajo</Dropdown.Item>
                    </DropdownButton>
                </Col>
                <Col xs={{ span: 3 }}>
                    <DropdownButton variant='info' id="dropdown-basic-button" title="Filtrar">
                        <Dropdown.Item eventKey="filterByState" onSelect={handleOnSelect}>Estado del aviso</Dropdown.Item>
                        <Dropdown.Item eventKey="filterByPositionName" onSelect={handleOnSelect}>Nombre del puesto</Dropdown.Item>
                        <Dropdown.Item eventKey="filterBySkills" onSelect={handleOnSelect}>Habilidades</Dropdown.Item>
                        <Dropdown.Item eventKey="filterByLocation" onSelect={handleOnSelect}>Ubicacion</Dropdown.Item>
                        <Dropdown.Item eventKey="filterByCompanyName" onSelect={handleOnSelect}>Nombre de Empresa</Dropdown.Item>
                    </DropdownButton>
                </Col>
                <Col xs={{ span: 5 }}>
                    <Button variant="primary" onClick={createNewJobOffer} >Nuevo Aviso</Button>
                </Col>
            </Row>
        </div>
    );
}