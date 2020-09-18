import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import JobDetail from '../../../components/job/jobDetail/jobDetail';
import { useDispatch, useSelector } from 'react-redux';
import { useParams} from "react-router";
import { jobDetailLoadingError, jobDetailLoaded, jobDetailLoading } from '../../../redux/job/jobDetailActions';
import Loader from 'react-loader-spinner'
import getData from '../../../repositories/common/getData';

export default function JobDetailPageJobSeeker() {

    const job = useSelector(state => state.JobDetailState.jobDetailObject);
    const showLoadingSpinner = useSelector(state => state.JobDetailState.jobDetailLoading);

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

            const data = await getData('/joboffers/'+param.id, ()=> dispatch(jobDetailLoadingError) );
            
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