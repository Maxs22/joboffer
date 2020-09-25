import React, {useEffect}from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch  } from 'react-redux';
import EditCreateJobOffer  from '../../components/job/editCreateJobOffer/editCreateJobOffer';
import { useFetchJobOffersForRecruiter } from '../../hooks/useFetchJobOffersForRecruiter';
import { useParams} from "react-router";
import getData from '../../repositories/common/getData';
import { skillsLoaded } from '../../redux/skillManager/skillManagerActions';

export default function EditJobOfferPage() {

    let param = useParams();

    useFetchJobOffersForRecruiter();

    let selectedJobOfferToEdit = useSelector(state => state.JobListState.editingJobOfferId);

    if(selectedJobOfferToEdit ===""){
        selectedJobOfferToEdit = param.id;
    }

    const jobs = useSelector(state => state.JobListState.jobListObjects);

    const jobToEdit = jobs.find(item => item.jobOffer.id === selectedJobOfferToEdit);

    const skillsAvailable = useSelector(state => state.SkillManagerState.skills);

    const dispatch = useDispatch();

    const token = sessionStorage.getItem("token");

    useEffect(() => {

        if (token !== null && skillsAvailable.length === 0) {

            const fetchSkills = async () => {

                const data = await getData('/skill/getall', null, token);

                if (typeof data !== "undefined" && data.status !== 401) {

                    const json = await data.json();

                    dispatch(skillsLoaded(json));
                }
            }
            fetchSkills();
        }

    }, [dispatch, token, skillsAvailable]);

    return (
        <Container>
            <Row>
                <Col>
                    <h3>Editar Aviso</h3>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col lg="10">
                    <EditCreateJobOffer JobOffer = {jobToEdit.jobOffer} SkillsAvailable = {skillsAvailable}></EditCreateJobOffer>
                </Col>
            </Row>
        </Container>
    )
}