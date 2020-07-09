import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import RecruiterJobList from '../../../components/Recruiter/JobList/RecruiterJobList';
import { loadingJobOffers, failureLoadingJobOffer, jobOffersSuccessfullyLoaded } from '../../../redux/Recruiter/RecruiterActions';
import { loginRequired } from '../../../redux/Account/Login/LoginActions';
import Loader from 'react-loader-spinner'

export default function RecruiterHomePage() {

    const showLoadingSpinner = useSelector(state => state.RecruiterState.loadingJobOffers);
    const jobOffersLoadingError = useSelector(state => state.JobListState.jobOffersSuccessfullyLoaded);
    const isLoggedInSuccessfully = useSelector(state => state.LoginState.loggedInSuccessfully);
    const email = useSelector(state => state.LoginState.user);
    const token = useSelector(state => state.LoginState.token);
    let jobs = useSelector(state => state.RecruiterState.jobList);

    const dispatch = useDispatch();

    useEffect(() => {

        if (!isLoggedInSuccessfully) {

            dispatch(loginRequired);
        }
        else {
            const fetchJobs = async () => {

                if ((jobs.length === 0) && !jobOffersLoadingError) {

                    dispatch(loadingJobOffers);

                    const data = await fetch('http://localhost:61256/api/recruiter/getjoboffers/' + email, {
                        mode: 'cors',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization': ' Bearer ' + token.token
                        }
                    })
                        .catch(function (error) {
                            dispatch(failureLoadingJobOffer);
                        });

                    if (typeof data !== "undefined") {

                        const json = await data.json();

                        dispatch(jobOffersSuccessfullyLoaded(json));
                    }
                }
                else {
                    dispatch(jobOffersSuccessfullyLoaded(jobs));
                }
            }

            fetchJobs();
        }

    }, [isLoggedInSuccessfully]);


    const spinner = showLoadingSpinner && (
        <span>
            <Loader
                type="TailSpin"
                color="black"
                height={100}
                width={100} //3 secs
            />
            <p>Cargando...</p>
        </span>
    );

    return (
        <Container>
            <Row>
                <Col>
                    <h3>Aviso generados</h3>
                </Col>
            </Row>
            {spinner}
            <RecruiterJobList></RecruiterJobList>
        </Container>
    );

}