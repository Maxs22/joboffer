import React from 'react';
import { Container } from 'react-bootstrap';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import JobsListItem from '../jobsListItem/jobsListItem';
import { useSelector } from 'react-redux';


export default function JobsList() {

    let jobs = useSelector(state => state.jobListState.jobListObjects);

    let jobItems = jobs.length === 0 ? <p>No hay ofertas de trabajo</p> : jobs.map(item => <JobsListItem key={item.id}  job={ item }></JobsListItem>);

    return (
        <Container>
            { jobItems }
        </Container>
    );
}