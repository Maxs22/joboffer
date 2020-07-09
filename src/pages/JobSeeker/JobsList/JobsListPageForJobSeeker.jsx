import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import JobsListOption from '../../../components//JobSeeker/JobsListOptions/JobsListOpton';
import JobsList from '../../../components//JobSeeker/JobsList/JobsList';
import './JobsListPageForJobSeeker.css';
import { jobListLoading, jobListLoaded, jobListLoadingError } from '../../../redux/JobSeeker/JobList/JobListActions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner'

export default function JobsListPageForJobSeeker() {

    const dispatch = useDispatch();

    const showLoadingSpinner = useSelector(state => state.JobListState.jobListLoading);
    const jobOfferLoadingError = useSelector(state => state.JobListState.jobListLoadingError);
    let jobs = useSelector(state => state.JobListState.jobListObjects);

    useEffect(()=>{

        const fetchJobs = async () =>{

            if ((jobs.length === 0) && !jobOfferLoadingError){

                dispatch(jobListLoading);

                const data = await fetch('http://localhost:61256/api/jobsoffer',{
                mode: 'cors'
                })
                .catch(function(error) {
                    dispatch(jobListLoadingError);
                });

                if(typeof data !== "undefined" ){

                    const json = await data.json();

                    dispatch(jobListLoaded(json));
                }
            }
            else{
                dispatch(jobListLoaded(jobs));
            }
        }

        fetchJobs();

    }, []);


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
                    <JobsListOption></JobsListOption>
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr className="headerLineSeparator" />
                    { spinner }
                    <JobsList></JobsList>
                </Col>
            </Row>
        </Container>
    )
}