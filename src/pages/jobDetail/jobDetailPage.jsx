import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import JobDetail from '../../components/jobDetail/jobDetail';
import { useDispatch, useSelector } from 'react-redux';
import { useParams} from "react-router";
import { jobDetailLoadingError, jobDetailLoaded, jobDetailLoading } from '../../redux/jobDetailState/jobDetailActions';
import Loader from 'react-loader-spinner'

export default function JobDetailPage() {

    const job = useSelector(state => state.jobDetailState.jobDetailObject);
    const showLoadingSpinner = useSelector(state => state.jobDetailState.jobDetailLoading);

    const dispatch = useDispatch();

    let param = useParams();

    const spinner = showLoadingSpinner && (
        <span>
            <Loader
                type="TailSpin"
                color="black"
                height={100}
                width={100} //3 secs
            />
            <p>Cargando...</p>
        </span>
       );


    useEffect(()=>{

        const fetchJob = async () =>{

            const data = await fetch('http://localhost:61256/api/jobsoffer/'+param.id,{
                mode: 'cors'
            })
            .catch(function(error) {
                dispatch(jobDetailLoadingError);
              });

            if(typeof data !== "undefined" ){

                const json = await data.json();

                dispatch(jobDetailLoaded(json));

            }
        }

        if (Object.keys(job).length === 0) {

            dispatch(jobDetailLoading);

            fetchJob();
        }

    }, [job, dispatch, param.id]);

    let detailToShow = Object.keys(job).length === 0 && !showLoadingSpinner ? 'No se encontró información' : '';

    if (Object.keys(job).length !== 0) {

        detailToShow = <JobDetail></JobDetail>;
    }

    return (
        <Container>
            { spinner }
            <Row>
                <Col>
                    { detailToShow }
                </Col>
            </Row>
         </Container>
    )
}