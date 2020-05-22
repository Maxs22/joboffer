import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MainNavBar from '../navBar/mainNavBar';
import JobListOption from '../jobListOptions/jobListOpton';
import './dashboard.css';


export default function Dashboard(props) {

    return (
        <Container fluid>
            <Row>
                <Col>
                    <MainNavBar></MainNavBar>
                </Col>
            </Row>
            <JobListOption></JobListOption>
            <hr/>
        </Container>
    )
}