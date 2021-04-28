import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import EditCreateJobDetail  from '../../../components/job/editCreateJobOffer/editCreateJobOffer';
import useFetchSkills from '../../../hooks/useFetchSkills';

import 'react-autocomplete-input/dist/bundle.css';
import 'rc-datepicker/lib/style.css'

export default function CreateJobOfferPage() {

    const skillsAvailable = useFetchSkills();

    return (
        <Container>
            <Row>
                <Col>
                    <h3>Crear Aviso</h3>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col lg="10">
                    <EditCreateJobDetail skillsAvailable={skillsAvailable}></EditCreateJobDetail>
                </Col>
            </Row>
        </Container>
    )
}