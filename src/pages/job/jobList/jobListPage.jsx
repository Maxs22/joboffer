import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import JobListOptions from '../../../components/job/jobListOptions/jobListOption';
import JobList from '../../../components/job/jobList/jobList';
import JobListHeader from '../../../components/job/jobListHeader/jobListHeader'
import './jobListPage.css';
import useFetchJobOffers from '../../../hooks/useFetchJobOffers';

import Loader from 'react-loader-spinner'

export default function JobListPage() {

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
                    <JobListOptions isRecruiter={isRecruiter} ></JobListOptions>
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr className="headerLineSeparator" />
                    {spinner}
                    <JobList isRecruiter={isRecruiter} jobs={jobs}></JobList>
                </Col>
            </Row>
        </Container>
    )
}