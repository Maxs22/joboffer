import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import EditCreateJobOffer  from '../../components/job/editCreateJobOffer/editCreateJobOffer';
import { useFetchJobOffersForRecruiter } from '../../hooks/useFetchJobOffersForRecruiter';
import { useParams} from "react-router";
import useFetchSkills from '../../hooks/useFetchSkills';

export default function EditJobOfferPage() {

    let param = useParams();

    useFetchJobOffersForRecruiter();

    let selectedJobOfferToEdit = useSelector(state => state.JobListState.editingJobOfferId);

    if(selectedJobOfferToEdit ===""){
        selectedJobOfferToEdit = param.id;
    }

    const jobs = useSelector(state => state.JobListState.jobListObjects);

    const jobToEdit = jobs.find(item => item.jobOffer.id === selectedJobOfferToEdit);

    const skillsAvailable = useFetchSkills();

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
                    <EditCreateJobOffer JobOffer = {jobToEdit.jobOffer} SkillsAvailable = {skillsAvailable}></EditCreateJobOffer>
                </Col>
            </Row>
        </Container>
    )
}