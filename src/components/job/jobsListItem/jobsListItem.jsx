import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, Card, Badge } from 'react-bootstrap';
import { jobSelected, editingJobOffer } from '../../../redux/job/jobListActions';
import { jobDetailLoaded } from '../../../redux/job/jobDetailActions';
import Moment from 'moment';
import 'moment/locale/es';
import './jobsListItem.css';
import { useHistory } from "react-router-dom";

export default function JobsListItem(props) {

    const dispatch = useDispatch();

    const history = useHistory();

    const setJobIdSelected = (event) => {

        dispatch(jobSelected(props.jobOffer.id));
        dispatch(jobDetailLoaded(props.jobOffer))

        history.push('jobdetail/' + props.jobOffer.id);

        event.preventDefault();
    }

    const setEditingJobOffer = (event) => {

        dispatch(editingJobOffer(props.jobOffer.id));

        history.push('/recruiter/edit/joboffer/' + props.jobOffer.id);

        event.preventDefault()
    }

    const editJobItemButtom = props.isRecruiter ? (
        <Card.Link href={'/recruiter/edit/joboffer/' + props.jobOffer.id} onClick={setEditingJobOffer} >Editar</Card.Link>
    ) : ""

    let jobOfferState;

    switch(props.jobOffer.state){
        case 0: jobOfferState = <Badge variant="info">Creado el {Moment(props.jobOffer.date).format('LL')}</Badge>;break;
        case 1: jobOfferState = <Badge variant="success">Publicado {Moment(props.jobOffer.date).format('LL')}</Badge>;break;
        case 2: jobOfferState = <Badge variant="warning">Finalizado el {Moment(props.jobOffer.date).format('LL')}</Badge>;break;
        default: jobOfferState = "";break;
    }

    const cardHeader = props.isRecruiter ? (
        <>
            <Card.Title>{props.jobOffer.title} - {props.jobOffer.zone} </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Cliente: {props.jobOffer.company.name}</Card.Subtitle>
            {jobOfferState}
        </>
    ) : (
            <>
                <Card.Title>{props.jobOffer.title} - {props.jobOffer.zone} </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.jobOffer.company.name} - Publicado {Moment(props.jobOffer.date).format('L')}</Card.Subtitle>
            </>
        );


    Moment.locale('es');

    const card = props !== undefined && (
        <Card>
            <Card.Body>
                {cardHeader}
                <Card.Text>
                    {props.jobOffer.description}
                </Card.Text>
                <Card.Link href={'jobdetail/' + props.jobOffer.id} onClick={setJobIdSelected} >Ver aviso</Card.Link>
                {editJobItemButtom}
            </Card.Body>
        </Card>
    );

    return (<Container>
        { card }
    </Container>);
}