import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RecruiterEditCreateJobDetail  from '../../components/Recruiter/EditCreateJobOffer';

import 'react-autocomplete-input/dist/bundle.css';
import 'rc-datepicker/lib/style.css'

export default function CreateJobOfferPage() {


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
                    <RecruiterEditCreateJobDetail></RecruiterEditCreateJobDetail>
                </Col>
            </Row>
        </Container>
    )
}