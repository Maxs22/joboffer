import React, {useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import EditCreateJobDetail  from '../../components/job/editCreateJobOffer/editCreateJobOffer';
import { useSelector, useDispatch } from 'react-redux';
import getData from '../../repositories/common/getData';
import { skillsLoaded } from '../../redux/skillManager/skillManagerActions';

import 'react-autocomplete-input/dist/bundle.css';
import 'rc-datepicker/lib/style.css'

export default function CreateJobOfferPage() {

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
                    <h3>Crear Aviso</h3>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col lg="10">
                    <EditCreateJobDetail SkillsAvailable={skillsAvailable}></EditCreateJobDetail>
                </Col>
            </Row>
        </Container>
    )
}