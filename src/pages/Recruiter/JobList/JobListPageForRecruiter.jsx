import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import RecruiterJobList from '../../../components/Recruiter/JobList/RecruiterJobList';
import JobsListOption from '../../../components/JobSeeker/JobsListOptions/JobsListOption'
import JobListHeader from '../../../components/JobSeeker/JobListHeader/JobListHeader'
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
                    <JobListHeader/>
                    <JobsListOption IsRecruiter={true}></JobsListOption>
                    <hr/>
                </Col>
            </Row>
            {spinner}
            <RecruiterJobList></RecruiterJobList>
        </Container>
    );

}