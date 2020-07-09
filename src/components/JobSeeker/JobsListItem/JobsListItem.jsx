import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, Card } from 'react-bootstrap';
import { jobSelected } from '../../../redux/JobSeeker/JobList/JobListActions';
import { jobDetailLoaded } from '../../../redux/JobSeeker/JobDetail/JobDetailActions';
import Moment from 'moment';
import 'moment/locale/es';
import './JobsListItem.css';
import { useHistory } from "react-router-dom";

export default function JobsListItem(props) {

    const dispatch = useDispatch();

    const history = useHistory();

    const setJobIdSelected = (event)=>{

        dispatch(jobSelected(props.job.jobOffer.id));
        dispatch(jobDetailLoaded(props.job.jobOffer))

        history.push('jobdetail/' + props.job.jobOffer.id);

        event.preventDefault()
    }

    Moment.locale('es');

    const card = props !== undefined && (
        <Card>
            <Card.Body>
                <Card.Title>{props.job.jobOffer.title} - {props.job.jobOffer.zone} </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.job.jobOffer.company.name} - Publicado { Moment(props.job.jobOffer.date).format('L') }</Card.Subtitle>
                <Card.Text>
                    {props.job.jobOffer.description}
                </Card.Text>
                <Card.Link href= {'jobdetail/' + props.job.jobOffer.id} onClick = {setJobIdSelected} >Ver aviso</Card.Link>
            </Card.Body>
        </Card>
    );

    return (<Container>
        { card }
    </Container>);
}