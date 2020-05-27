import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { jobListLoading, jobListLoaded } from '../../redux/jobListState/jobListActions';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

export default function JobList() {

    const dispatch = useDispatch();

    const showLoadingSpinner = useSelector(state => state.jobListState.jobListLoading);

    let jobs = useSelector(state => state.jobListState.jobListObjects);


    useEffect(()=>{

        if (typeof jobs === 'undefined' || jobs.length === 0) {
            dispatch(jobListLoading);
    
            fetch('http://jsonplaceholder.typicode.com/posts/1/comments')
            .then(response => response.json())
            .then(json => {
                dispatch(jobListLoaded(json));
            });
    
        }
    }, [jobs]);
    

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
            Container List
        </Container>
    );
}