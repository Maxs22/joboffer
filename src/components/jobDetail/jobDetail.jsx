import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';

export default function JobDetail(props) {

    const dispatch = useDispatch();

    const [jobToDisplay] = useState(props.jobToDisplay);

    return (
        <div>
            <h5>
            {jobToDisplay.title}
            </h5>
        </div>
    );

}
