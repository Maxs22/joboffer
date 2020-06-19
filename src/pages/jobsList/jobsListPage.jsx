import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import JobsListOption from '../../components/jobsListOptions/jobsListOpton';
import JobsList from '../../components/jobsList/jobsList';
import './jobsListPage.css';
import { jobListLoading, jobListLoaded, jobListLoadingError } from '../../redux/jobListState/jobListActions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner'

export default function JobsListPage() {

    const dispatch = useDispatch();

    const showLoadingSpinner = useSelector(state => state.jobListState.jobListLoading);
    const jobOfferLoadingError = useSelector(state => state.jobListState.jobListLoadingError);
    let jobs = useSelector(state => state.jobListState.jobListObjects);

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