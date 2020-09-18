import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import JobsListOptions from '../../../components/job/jobsListOptions/jobsListOption';
import JobsList from '../../../components/job/jobsList/jobsList';
import JobListHeader from '../../../components/job/jobListHeader/jobListHeader'
import './jobsListPageForJobSeeker.css';
import { useFetchJobOffers } from '../../../services/useFetchJobOffers';

import Loader from 'react-loader-spinner'

export default function JobsListPageForJobSeeker() {

    useFetchJobOffers();

    const showLoadingSpinner = useSelector(state => state.JobListState.jobListLoading);
    const isRecruiter = useSelector(state => state.LoginState.isRecruiter);

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
                    <JobsListOptions isRecruiter={isRecruiter} ></JobsListOptions>
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr className="headerLineSeparator" />
                    {spinner}
                    <JobsList isRecruiter={isRecruiter}></JobsList>
                </Col>
            </Row>
        </Container>
    )
}