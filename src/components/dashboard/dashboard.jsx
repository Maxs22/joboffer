import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MainNavBar from '../navBar/mainNavBar';
import './dashboard.css';
import { Route, Switch } from "react-router-dom";
import JobsListPage from '../../pages/jobsList/jobsListPage';
import JobDetailPage from '../../pages/jobDetail/jobDetailPage';

export default function Dashboard(props) {

    return (
        <Container fluid>
            <Row>
                <Col>
                    <MainNavBar></MainNavBar>
                </Col>
            </Row>
            <Row className="mainContainer">
                    <Switch>
                        <Route path="/" exact>
                            <JobsListPage></JobsListPage>
                        </Route>
                        <Route path="/jobdetail/:id">
                            <JobDetailPage></JobDetailPage>
                        </Route>
                    </Switch>
            </Row>
        </Container>
    )
}