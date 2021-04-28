import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import EditCreateJobOffer from '../../../components/job/editCreateJobOffer/editCreateJobOffer'
import useFetchJobOffers from '../../../hooks/useFetchJobOffers';
import { useParams } from "react-router";
import useFetchSkills from '../../../hooks/useFetchSkills';

export default function EditJobOfferPage() {

    let param = useParams();

    useFetchJobOffers(true);

    const selectedJobOfferToEdit = param.id;

    const jobs = useSelector(state => state.JobListState.jobListObjects);

    const jobToEdit = jobs?.find(item => item.jobOffer.id === selectedJobOfferToEdit);

    const skillsAvailable = useFetchSkills();

    const content = jobs.length === 0 ? <label>Cargando aviso</label> : <EditCreateJobOffer jobOffer={jobToEdit.jobOffer} skillsAvailable={skillsAvailable}></EditCreateJobOffer>

    return (
        <Container>
            <Row>
                <Col>
                    <h3>Editar Aviso</h3>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col lg="10">
                    {content}
                </Col>
            </Row>
        </Container>
    )
}