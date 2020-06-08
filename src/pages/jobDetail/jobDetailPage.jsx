import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import JobDetail from '../../components/jobDetail/jobDetail';
import { useDispatch, useSelector } from 'react-redux';
import { useParams} from "react-router";
import { jobDetailLoadingError, jobDetailLoaded, jobDetailLoading } from '../../redux/jobDetailState/jobDetailActions';

export default function JobDetailPage() {

    const job = useSelector(state => state.jobDetailState.jobDetailObject);

    const dispatch = useDispatch();

    let param = useParams();

    let detailToShow = 'No se encontró información';

    useEffect(()=>{

        const fetchJob = async () =>{

            const data = await fetch('http://localhost:61256/api/jobsoffer/'+param.id,{
                mode: 'cors'
            })
            .catch(function(error) {
                dispatch(jobDetailLoadingError);
              });

            const json = await data.json();

            dispatch(jobDetailLoaded(json));
        }

        if (Object.keys(job).length === 0) {

            dispatch(jobDetailLoading);

            fetchJob();
        }

    }, [job, dispatch, param.id]);


    if (Object.keys(job).length !== 0) {

        detailToShow = <JobDetail jobToDisplay = {job}></JobDetail>;
    }

    return (
        <Container>
            <Row>
                <Col>
                    { detailToShow }
                </Col>
            </Row>
         </Container>
    )
}