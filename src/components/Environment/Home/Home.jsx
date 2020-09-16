import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../navBar/NavBar';
import './Home.css';
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import JobsListPageJobSeeker from '../../../pages/JobSeeker/JobsList/JobsListPageForJobSeeker';
import JobDetailPageForJobSeeker from '../../../pages/JobSeeker/JobDetail/JobDetailPageForJobSeeker';
import EditJobOfferPage from '../../../pages/Recruiter/EditJobOfferPage';
import CreateJobOfferPage from '../../../pages/Recruiter/CreateJobOfferPage';
import postData from '../../../repositories/common/postData';

import { loggedInSuccessfully, loginFailed, loggedOutSuccessfully } from '../../../redux/Account/LoginActions'

export default function Home() {

    const dispatch = useDispatch();

    const userIsLogged = useSelector(state => state.LoginState.loggedInSuccessfully);

    useEffect(() => {

        if (!userIsLogged) {

            const token = sessionStorage.getItem("token");

            if (token !== 'undefined' && token !== null && token !== '') {

                const validateToken = async () => {

                    const data = await postData('/account/validatetoken',null, ()=> dispatch(loginFailed), token);

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
                    <Route path="/recruiter/edit/joboffer/:id" exact>
                        <EditJobOfferPage></EditJobOfferPage>
                    </Route>
                    <Route path="/recruiter/create/joboffer" exact>
                        <CreateJobOfferPage></CreateJobOfferPage>
                    </Route>
                </Switch>
            </Row>
        </Container>
    )
}