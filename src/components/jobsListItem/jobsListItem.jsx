import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, Card } from 'react-bootstrap';
import { jobSelected } from '../../redux/jobListState/jobListActions';
import { jobDetailLoaded } from '../../redux/jobDetailState/jobDetailActions';
import Moment from 'moment';
import './jobsListItem.css';
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
                <Card.Subtitle className="mb-2 text-muted">{props.job.jobOffer.company.name} - Publicado { Moment(props.job.jobOffer.date).format('d MMM') }</Card.Subtitle>
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