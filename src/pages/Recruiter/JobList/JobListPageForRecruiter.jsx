import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import RecruiterJobList from '../../../components/Recruiter/JobList/RecruiterJobList';
import { loadingJobOffers, failureLoadingJobOffer, jobOffersSuccessfullyLoaded, removeJobsLoaded } from '../../../redux/Recruiter/Common/RecruiterCommonActions';
import { loginRequired } from '../../../redux/Account/Login/LoginActions';
import RecruiterJobsListOption from '../../../components/Recruiter/JobListOptions/RecruiterJobsListOption';
import Loader from 'react-loader-spinner'

export default function RecruiterHomePage() {

    const showLoadingSpinner = useSelector(state => state.RecruiterCommonState.loadingJobOffers);
    const jobOffersLoadingError = useSelector(state => state.JobListState.jobOffersSuccessfullyLoaded);
    const isLoggedInSuccessfully = useSelector(state => state.LoginState.loggedInSuccessfully);
    const token = sessionStorage.getItem("token");
    let jobs = useSelector(state => state.RecruiterCommonState.jobList);

    const dispatch = useDispatch();

    useEffect(() => {

        if (!isLoggedInSuccessfully) {

            if (jobs.length > 0) {
                dispatch(removeJobsLoaded);
            }

            dispatch(loginRequired);
        }
        else {
            const fetchJobs = async () => {

                if ((jobs.length === 0) && !jobOffersLoadingError) {

                    dispatch(loadingJobOffers);

                    const data = await fetch('http://localhost:61256/api/recruiter/getjoboffers', {
                        mode: 'cors',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization': ' Bearer ' + token
                        }
                    })
                        .catch(function (error) {
                            dispatch(failureLoadingJobOffer);
                        });

                    if (typeof data !== "undefined" && data.status !== 401) {

                        const json = await data.json();

                        dispatch(jobOffersSuccessfullyLoaded(json));
                    }
                    else {
                        dispatch(failureLoadingJobOffer);
                        dispatch(loginRequired);
                    }
                }
                else {
                    dispatch(jobOffersSuccessfullyLoaded(jobs));
                }
            }

            fetchJobs();
        }

    }, [isLoggedInSuccessfully, dispatch, jobOffersLoadingError, jobs, token]);



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
                    <h3>Mis avisos creados</h3>
                    <hr/>
                    <RecruiterJobsListOption></RecruiterJobsListOption>
                    <hr/>
                </Col>
            </Row>
            {spinner}
            <RecruiterJobList></RecruiterJobList>
        </Container>
    );

}