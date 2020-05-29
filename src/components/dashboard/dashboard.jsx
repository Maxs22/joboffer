import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MainNavBar from '../navBar/mainNavBar';
import JobsListOption from '../jobsListOptions/jobsListOpton';
import JobsList from '../jobsList/jobsList'
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
                    <JobsListOption></JobsListOption>
                </Col>
            </Row>
            <hr className="headerLineSeparator"/>
            <Row>
                <Col>
                    <JobsList></JobsList>
                </Col>
            </Row>
        </Container>
    )
}