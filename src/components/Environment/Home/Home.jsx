import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import './Home.css';
import { Route, Switch } from "react-router-dom";
import JobsListPageJobSeeker from '../../../pages/JobSeeker/JobsList/JobsListPageForJobSeeker';
import JobDetailPageForJobSeeker from '../../../pages/JobSeeker/JobDetail/JobDetailPageForJobSeeker';
import RecruiterHomePage from '../../../pages/Recruiter/JobList/JobListPageForRecruiter';
import EditOrCreateJobOfferPage from '../../../pages/Recruiter/JobDetail/EditOrCreateJobOfferPage';
import ViewJobOfferDetailPage from '../../../pages/Recruiter/JobDetail/ViewJobOfferDetailPage';

export default function DefaultHome(props) {

    return (
        <Container fluid>
            <Row>
                <Col>
                    <NavBar></NavBar>
                </Col>
            </Row>
            <Row className="mainContainer">
                    <Switch>
                        <Route path="/" exact>
                            <JobsListPageJobSeeker></JobsListPageJobSeeker>
                        </Route>
                        <Route path="/jobdetail/:id">
                            <JobDetailPageForJobSeeker></JobDetailPageForJobSeeker>
                        </Route>
                        <Route path="/recruiter/" exact>
                            <RecruiterHomePage></RecruiterHomePage>
                        </Route>
                        <Route path="/recruiter/view/joboffer/:id" exact>
                            <ViewJobOfferDetailPage></ViewJobOfferDetailPage>
                        </Route>
                        <Route path="/recruiter/edit/joboffer/:id" exact>
                            <EditOrCreateJobOfferPage></EditOrCreateJobOfferPage>
                        </Route>
                    </Switch>
            </Row>
        </Container>
    )
}