import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, Card } from 'react-bootstrap';
import { jobSelected } from '../../redux/jobListState/jobListActions';
import { jobDetailLoaded } from '../../redux/jobDetailState/jobDetailActions';
import Moment from 'moment';
import './jobsListItem.css';
import { useHistory } from "react-router-dom";

export default function JobsListItem(item) {

    const dispatch = useDispatch();

    const history = useHistory();

    const setJobIdSelected = (event)=>{
        dispatch(jobSelected(item.job.id));
        dispatch(jobDetailLoaded(item.job))
        history.push('jobdetail/' + item.job.id);
        event.preventDefault()
    }


    Moment.locale('es');

    const card = item !== undefined && (
        <Card>
            <Card.Body>
                <Card.Title>{item.job.title} - {item.job.zone} </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{item.job.company.name} - Publicado { Moment(item.job.date).format('d MMM') }</Card.Subtitle>
                <Card.Text>
                    {item.job.description}
                </Card.Text>
                <Card.Link href= {'jobdetail/' + item.job.id} onClick = {setJobIdSelected} >Ver aviso</Card.Link>
            </Card.Body>
        </Card>
    );

    return (<Container>
        { card }
    </Container>);
}