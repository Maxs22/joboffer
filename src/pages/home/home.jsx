import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../../components/environment/navBar/navBar';
import './home.css';
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import JobsListPage from '../job/jobsList/jobsListPage';
import JobDetailPage from '../job/jobDetail/jobDetailPage';
import EditJobOfferPage from '../job/jobDetail/editJobOfferPage';
import CreateJobOfferPage from '../job/jobDetail/createJobOfferPage';
import postData from '../../repositories/common/postData';

import { loggedInSuccessfully, loginFailed, loggedOutSuccessfully } from '../../redux/account/loginActions'

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
                            dispatch(loggedInSuccessfully({isRecruiter: data.ok, token: token}));
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
                        <JobsListPage></JobsListPage>
                    </Route>
                    <Route path="/jobdetail/:id">
                        <JobDetailPage></JobDetailPage>
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