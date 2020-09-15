import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import JobsListOption from '../../../components//JobSeeker/JobsListOptions/JobsListOpton';
import JobsList from '../../../components//JobSeeker/JobsList/JobsList';
import './JobsListPageForJobSeeker.css';
import { useFetchJobOffers } from '../../../services/useFetchJobOffers';

import Loader from 'react-loader-spinner'

export default function JobsListPageForJobSeeker() {

    useFetchJobOffers();

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
                    <JobsListOption></JobsListOption>
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr className="headerLineSeparator" />
                    { spinner }
                    <JobsList></JobsList>
                </Col>
            </Row>
        </Container>
    )
}