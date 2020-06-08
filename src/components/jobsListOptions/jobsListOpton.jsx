import React from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, DropdownButton, Dropdown } from 'react-bootstrap';
import { filterByPositionName, filterBySkills, filterByLocation, filterByTypeOfCompany, sortByPublicationDate, sortByLocation} from '../../redux/jobListState/jobListActions';

export default function JobsListOption() {

    const dispatch = useDispatch();

    const handleOnSelect = (eventKey) => {

        switch(eventKey)
        {
            case 'sortByPublicationDate': dispatch(sortByPublicationDate);break;
            case 'sortByLocation': dispatch(sortByLocation);break;
            case 'filterByPositionName': dispatch(filterByPositionName);break;
            case 'filterBySkills': dispatch(filterBySkills);break;
            case 'filterByLocation': dispatch(filterByLocation);break;
            case 'filterByTypeOfCompany': dispatch(filterByTypeOfCompany);break;
            default: break;
        }
    }

    return (
        <div>
            <Row>
                <Col xs={{ span: 3, offset: 2 }} >
                    <DropdownButton variant='info' id="dropdown-basic-button" title="Ordenar">
                        <Dropdown.Item eventKey = "sortByPublicationDate" onSelect= { handleOnSelect }>Fecha de Publicación</Dropdown.Item>
                        <Dropdown.Item eventKey = "sortByLocation" onSelect= { handleOnSelect }>Lugar de trabajo</Dropdown.Item>
                    </DropdownButton>
                </Col>
                <Col xs={{span: 3, offset: 1}}>
                    <DropdownButton variant='info' id="dropdown-basic-button" title="Filtrar">
                        <Dropdown.Item eventKey = "filterByPositionName" onSelect= { handleOnSelect }>Nombre del puesto</Dropdown.Item>
                        <Dropdown.Item eventKey = "filterBySkills" onSelect= { handleOnSelect }>Habilidades</Dropdown.Item>
                        <Dropdown.Item eventKey = "filterByLocation" onSelect= { handleOnSelect }>Ubicacion</Dropdown.Item>
                        <Dropdown.Item eventKey = "filterByTypeOfCompany" onSelect= { handleOnSelect }>Tipo de Empresa</Dropdown.Item>
                    </DropdownButton>
                </Col>
            </Row>
        </div>
    );


}