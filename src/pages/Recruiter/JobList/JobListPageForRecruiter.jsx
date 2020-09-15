import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import RecruiterJobList from '../../../components/Recruiter/JobList/RecruiterJobList';
import RecruiterJobsListOption from '../../../components/Recruiter/JobListOptions/RecruiterJobsListOption';
import Loader from 'react-loader-spinner'
import { useFetchJobOffersForRecruiter  } from '../../../services/useFetchJobOffersForRecruiter'

export default function RecruiterHomePage() {

    const showLoadingSpinner = useSelector(state => state.RecruiterCommonState.loadingJobOffers);

    useFetchJobOffersForRecruiter();

    const spinner = showLoadingSpinner && (
        <span>
            <Loader
                type="TailSpin"
                color="black"
                height={100}
                width={100} //3 secs
            />
            <p>Cargando...</p>
        </span>
    );

    return (
        <Container>
            <Row>
                <Col>
                    <h3>Mis avisos creados</h3>
                    <hr/>
                    <RecruiterJobsListOption></RecruiterJobsListOption>
                    <hr/>
                </Col>
            </Row>
            {spinner}
            <RecruiterJobList></RecruiterJobList>
        </Container>
    );

}