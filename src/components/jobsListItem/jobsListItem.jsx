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

        dispatch(jobSelected(props.job.id));
        dispatch(jobDetailLoaded(props.job))

        history.push('jobdetail/' + props.job.id);

        event.preventDefault()
    }

    Moment.locale('es');

    const card = props !== undefined && (
        <Card>
            <Card.Body>
                <Card.Title>{props.job.title} - {props.job.zone} </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.job.company.name} - Publicado { Moment(props.job.date).format('d MMM') }</Card.Subtitle>
                <Card.Text>
                    {props.job.description}
                </Card.Text>
                <Card.Link href= {'jobdetail/' + props.job.id} onClick = {setJobIdSelected} >Ver aviso</Card.Link>
            </Card.Body>
        </Card>
    );

    return (<Container>
        { card }
    </Container>);
}