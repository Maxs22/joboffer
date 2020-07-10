import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, Card, Badge } from 'react-bootstrap';
import { viewingJobOfferDetails, editingJobOffer  } from '../../../redux/Recruiter/RecruiterActions';
import Moment from 'moment';
import 'moment/locale/es';
import { useHistory } from "react-router-dom";

export default function RecruiterJobsListItem(props) {

    const dispatch = useDispatch();

    const history = useHistory();

    const setViewingJobOfferDetail = (event)=>{

        dispatch(viewingJobOfferDetails(props.job.id));

        history.push('view/joboffer/' + props.job.id);

        event.preventDefault()
    }

    const setEditingJobOffer = (event)=>{

        dispatch(editingJobOffer(props.job.id));

        history.push('edit/joboffer/' + props.job.id);

        event.preventDefault()
    }

    Moment.locale('es');

    const card = props !== undefined && (
        <Card>
            <Card.Body>
                <Card.Title>{props.job.title} - {props.job.zone} </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Cliente: {props.job.company.name}</Card.Subtitle>
                <Badge variant="success">Publicado { Moment(props.job.date).format('LL') }</Badge>
                <Card.Text>
                    {props.job.description}
                </Card.Text>
                <Card.Link href= {'view/joboffer/' + props.job.id} onClick = {setViewingJobOfferDetail} >Ver detalle</Card.Link>
                <Card.Link href= {'edit/joboffer/' + props.job.id} onClick = {setEditingJobOffer} >Editar</Card.Link>
            </Card.Body>
        </Card>
    );

    return (<Container>
        { card }
    </Container>);
}