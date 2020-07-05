import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MainNavBar from '../navBar/mainNavBar';
import './defaultHome.css';
import { Route, Switch } from "react-router-dom";
import JobsListPage from '../../pages/jobsList/jobsListPage';
import JobDetailPage from '../../pages/jobDetail/jobDetailPage';
import RecruiterHomePage from '../../pages/recruiter/recruiterHomePage';
import EditJobOfferPage from '../../pages/recruiter/editJobOfferPage';

export default function DefaultHome(props) {

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
                        <Route path="/recruiter/" exact>
                            <RecruiterHomePage></RecruiterHomePage>
                        </Route>
                        <Route path="/recruiter/editjoboffer/:id">
                            <EditJobOfferPage></EditJobOfferPage>
                        </Route>
                    </Switch>
            </Row>
        </Container>
    )
}