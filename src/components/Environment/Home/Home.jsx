import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import './Home.css';
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import JobsListPageJobSeeker from '../../../pages/JobSeeker/JobsList/JobsListPageForJobSeeker';
import JobDetailPageForJobSeeker from '../../../pages/JobSeeker/JobDetail/JobDetailPageForJobSeeker';
import RecruiterHomePage from '../../../pages/Recruiter/JobList/JobListPageForRecruiter';
import EditOrCreateJobOfferPage from '../../../pages/Recruiter/JobDetail/EditOrCreateJobOfferPage';
import ViewJobOfferDetailPage from '../../../pages/Recruiter/JobDetail/ViewJobOfferDetailPage';

import { loggedInSuccessfully, loginFailed, loggedOutSuccessfully } from '../../../redux/Account/Login/LoginActions'

export default function DefaultHome(props) {

    const dispatch = useDispatch();

    const userIsLogged = useSelector(state => state.LoginState.loggedInSuccessfully);

    useEffect(() => {

        if (!userIsLogged) {

            const token = sessionStorage.getItem("token");

            if (token !== 'undefined' && token !== null && token !== '') {

                const validateToken = async () => {

                    const data = await fetch('http://localhost:61256/api/account/validatetoken', {
                        method: 'POST',
                        mode: 'cors',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization': ' Bearer ' + token
                        }
                    })
                        .catch(function (error) {
                            dispatch(loginFailed);
                        });

                    if (typeof data !== "undefined") {

                        if (data.status === 200) {
                            dispatch(loggedInSuccessfully(token));
                        }
                        else {
                            dispatch(loggedOutSuccessfully);
                        }
                    }
                }
                validateToken();
            }
        }
    }, [userIsLogged, dispatch]);


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