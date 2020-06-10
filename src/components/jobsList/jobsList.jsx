import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { jobListLoading, jobListLoaded, jobListLoadingError } from '../../redux/jobListState/jobListActions';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import JobsListItem from '../jobsListItem/jobsListItem';
import Loader from 'react-loader-spinner'

export default function JobsList() {

    const dispatch = useDispatch();

    const showLoadingSpinner = useSelector(state => state.jobListState.jobListLoading);
    const jobOfferLoadingError = useSelector(state => state.jobListState.jobListLoadingError);

    let jobs = useSelector(state => state.jobListState.jobListObjects);

    useEffect(()=>{

        const fetchJobs = async () =>{

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

        if ((typeof jobs === 'undefined' || jobs.length === 0) && !jobOfferLoadingError){

            dispatch(jobListLoading);

            fetchJobs();
        }

    }, [jobs, dispatch, jobOfferLoadingError]);

    let jobItems = jobs.length === 0 && !showLoadingSpinner ? <p>No hay ofertas de trabajo</p> : "";

    if(jobs.length > 0)
    {
        jobItems = jobs.map(item => <JobsListItem key={item.id}  job={ item }></JobsListItem>);
    }

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
            { spinner }
            { jobItems }
        </Container>
    );
}