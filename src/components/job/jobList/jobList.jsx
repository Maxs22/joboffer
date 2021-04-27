import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import "../../../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import JobListItem from '../jobListItem/jobListItem';
export default function JobList(props) {

    const isJobListLoading = useSelector(state => state.JobListState.jobListLoading);

    let jobItems = props.jobs.length === 0 && !isJobListLoading ? <p>No hay ofertas de trabajo</p> : props.jobs.map(item => <JobListItem key={item.jobOffer.id}  jobOffer={ item.jobOffer } isRecruiter={props.isRecruiter}></JobListItem>);

    return (
        <Container>
            { jobItems }
        </Container>
    );
}