import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Card } from 'react-bootstrap';

export default function JobListItem() {

    const dispatch = useDispatch();

    const [job, setJobs] = useState();

    return (<Container>
        <Card>
            <Card.Body>
                <Card.Title>{job.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{job.company.name}</Card.Subtitle>
                <Card.Text>
                    {job.description}
                </Card.Text>
                <Card.Link href="#">Ver aviso</Card.Link>
            </Card.Body>
        </Card>
    </Container>);
}