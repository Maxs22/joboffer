import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MainNavBar from '../navBar/mainNavBar';
import './dashboard.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <JobsListPage></JobsListPage>
                    </Route>
                    <Route path="/jobdetail/">
                        <JobDetailPage></JobDetailPage>
                    </Route>
                </Switch>
            </Router>
        </Container>
    )
}