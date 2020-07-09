import React from 'react';
import { Container } from 'react-bootstrap';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import RecruiterJobsListItem from '../JobListItem/RecruiterJobListItem';
import { useSelector } from 'react-redux';


export default function JobsList() {

    let jobs = useSelector(state => state.JobListState.jobListObjects);

    let jobItems = jobs.length === 0 ? <p>No hay ofertas de trabajo</p> : jobs.map(item => <RecruiterJobsListItem key={item.id}  job={ item }></RecruiterJobsListItem>);

    return (
        <Container>
            { jobItems }
        </Container>
    );
}