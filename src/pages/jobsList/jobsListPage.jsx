import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import JobsListOption from '../../components/jobsListOptions/jobsListOpton';
import JobsList from '../../components/jobsList/jobsList';
import './jobsListPage.css';

export default function JobsListPage() {

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
                    <JobsList></JobsList>
                </Col>
            </Row>
        </Container>
    )
}