import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import JobsListOptions from '../../../components/job/jobsListOptions/jobsListOption';
import JobsList from '../../../components/job/jobsList/jobsList';
import JobListHeader from '../../../components/job/jobListHeader/jobListHeader'
import './jobsListPage.css';
import useFetchJobOffers from '../../../hooks/useFetchJobOffers';

import Loader from 'react-loader-spinner'

export default function JobsListPage() {

    const isRecruiter = useSelector(state => state.LoginState.isRecruiter);

    useFetchJobOffers(isRecruiter);

    let jobs = useSelector(state => state.JobListState.jobListObjects);

    const showLoadingSpinner = useSelector(state => state.JobListState.jobListLoading);


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
                    <JobsList isRecruiter={isRecruiter} jobs={jobs}></JobsList>
                </Col>
            </Row>
        </Container>
    )
}