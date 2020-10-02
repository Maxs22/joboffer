import React from 'react';
import { Container } from 'react-bootstrap';
import "../../../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import JobsListItem from '../../../components/job/jobsListItem/jobsListItem';
export default function JobsList(props) {

    

    let jobItems = props.jobs.length === 0 ? <p>No hay ofertas de trabajo</p> : props.jobs.map(item => <JobsListItem key={item.jobOffer.id}  jobOffer={ item.jobOffer } isRecruiter={props.isRecruiter}></JobsListItem>);

    return (
        <Container>
            { jobItems }
        </Container>
    );
}