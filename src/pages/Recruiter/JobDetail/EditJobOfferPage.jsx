import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import RecruiterEditCreateJobDetail  from '../../../components/Recruiter/JobDetail/RecruiterEditCreateJobDetail';
import { useFetchJobOffersForRecruiter } from '../../../services/useFetchJobOffersForRecruiter';
import { useParams} from "react-router";

export default function EditJobOfferPage() {

    let param = useParams();

    useFetchJobOffersForRecruiter();

    let selectedJobOfferToEdit = useSelector(state => state.RecruiterCommonState.editingJobOfferId);

    if(selectedJobOfferToEdit ===""){
        selectedJobOfferToEdit = param.id;
    }

    const jobs = useSelector(state => state.RecruiterCommonState.jobList);

    const jobToEdit = jobs.find(j => j.id === selectedJobOfferToEdit);

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
                    <RecruiterEditCreateJobDetail JobOffer = {jobToEdit}></RecruiterEditCreateJobDetail>
                </Col>
            </Row>
        </Container>
    )
}