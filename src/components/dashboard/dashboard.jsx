import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MainNavBar from '../navBar/mainNavBar';
import JobListOption from '../jobListOptions/jobListOpton';
import JobList from '../jobList/joblist'
import './dashboard.css';


export default function Dashboard(props) {

    return (
        <Container fluid>
            <Row>
                <Col>
                    <MainNavBar></MainNavBar>
                </Col>
            </Row>
            <Row>
                <Col>
                    <JobListOption></JobListOption>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col>
                    <JobList></JobList>
                </Col>
            </Row>
        </Container>
    )
}