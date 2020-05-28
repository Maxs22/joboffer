import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Card } from 'react-bootstrap';
import Moment from 'moment';

export default function JobListItem(item) {

    const dispatch = useDispatch();

    Moment.locale('es');

    const card = item !== undefined && (
        <Card>
            <Card.Body>
                <Card.Title>{item.job.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{item.job.company.name} - Publicado { Moment(item.job.date).format('d MMM') }</Card.Subtitle>
                <Card.Text>
                    {item.job.description}
                </Card.Text>
                <Card.Link href="#">Ver aviso</Card.Link>
            </Card.Body>
        </Card>
    );


    return (<Container>
        { card }
    </Container>);
}