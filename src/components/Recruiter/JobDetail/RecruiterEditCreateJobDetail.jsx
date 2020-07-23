import React, { useState, useEffect } from 'react';
import { Container, Col, Form, Button, Card } from 'react-bootstrap';
import { DatePickerInput } from 'rc-datepicker';
import { useSelector, useDispatch } from 'react-redux';
import TextInput from 'react-autocomplete-input';
import { skillsLoaded } from '../../../redux/Recruiter/Common/RecruiterCommonActions';
import getData from '../../../common/getData';

import 'react-autocomplete-input/dist/bundle.css';
import 'rc-datepicker/lib/style.css'

export default function RecruiterEditCreateJobDetail(props) {

    const [date, setDate] = useState(props.JobOffer.date);
    const [title, setTitle] = useState(props.JobOffer.title);
    const [description, setDescription] = useState(props.JobOffer.description);
    const [companyName, setCompanyName] = useState(props.JobOffer.company.name);
    const [activity, setActivity] = useState(props.JobOffer.company.activity);
    const [startingFrom, setStartingFrom] = useState(props.JobOffer.contractInformation.startingFrom);
    const [workingDays, setWorkingDays] = useState(props.JobOffer.contractInformation.workingDays);
    const [contractInformation, setContractInformation] = useState(props.JobOffer.contractInformation.kindOfContract);
    const [zone, setZone] = useState(props.JobOffer.zone);
    const [language, setLanguage] = useState(props.JobOffer.language);
    const [isLanguageMandatory, setIsLanguageMandatory] = useState(props.JobOffer.isLanguageMandatory);
    const [languageLevel, setLanguageLevel] = useState(props.JobOffer.languageLevel);

    const requiredSkills = useState(props.JobOffer.skillsRequired.map(s => s.skill.name));
    const skillsOption = useSelector(state => state.RecruiterCommonState.skills);


    let skillsToShow = requiredSkills[0].join(', ');

    const dispatch = useDispatch();

    const token = sessionStorage.getItem("token");

    const onChange = (jsDate, dateString) => {
        setDate(dateString);
    }

    const languageLevenControls = isLanguageMandatory ? <div>
        <Form.Check inline label="Basico" type='radio' id='basic' checked={languageLevel === 1} />
        <Form.Check inline label="Intermedio" type='radio' id='medium' checked={languageLevel === 2} />
        <Form.Check inline label="Avanzado" type='radio' id='advance' checked={languageLevel === 3} />
    </div> : <div>
            <Form.Check inline label="Basico" type='radio' id='basic' disabled />
            <Form.Check inline label="Intermedio" type='radio' id='medium' disabled />
            <Form.Check inline label="Avanzado" type='radio' id='advance' disabled />
        </div>

    useEffect(() => {

        if (token !== null && skillsOption.length === 0) {

            const fetchSkills = async () => {

                const data = await getData('/jobsoffer/getskills', null, token);

                if (typeof data !== "undefined" && data.status !== 401) {

                    const json = await data.json();

                    dispatch(skillsLoaded(json));
                }
            }
            fetchSkills();
        }

    }, [dispatch, token, skillsOption]);

    return (
        <Container style={{ textAlign: "left" }}>
            <Form>
                <Form.Group >
                    <h5>Título</h5>
                    <Form.Control type="text" value={title} />
                    <h5>Descripción</h5>
                    <Form.Control as="textarea" rows="6" value={description} />
                    <h5>Fecha de Publicacion</h5>
                    <Col lg="2" style={{ paddingLeft: 0 }}>
                        <DatePickerInput
                            onChange={onChange}
                            value={date}
                            className='my-custom-datepicker-component'
                        />
                    </Col>
                    <Card>
                        <Col>
                            <br />
                            <h5>Empresa empleadora</h5>
                            <Form.Label>Nombre</Form.Label><br />
                            <TextInput options={["apple", "apricot", "banana", "carrot"]} trigger='' Component='input' className='form-control' value={companyName} />
                            <br />
                            <Form.Label>Rubro</Form.Label>
                            <Form.Control type="text" disabled value={activity} />
                            <br />
                        </Col>
                    </Card>
                    <Card>
                        <Col>
                            <br />
                            <h5>Información contractual</h5>
                            <Form.Label>Para iniciar en</Form.Label><br />
                            <Form.Control type="text" value={startingFrom} />
                            <Form.Label>Días laborales</Form.Label>
                            <Form.Control type="text" value={workingDays} />
                            <Form.Label>Tipo de contratación</Form.Label>
                            <Form.Control type="text" value={contractInformation} />
                            <Form.Label>Zona de trabajo</Form.Label>
                            <Form.Control type="text" value={zone} />
                            <br />
                        </Col>
                    </Card>
                    <br />
                    <Card>
                        <Col>
                            <br />
                            <Form.Group controlId="skills">
                                <h5>Conocimientos</h5>
                                <TextInput matchAny="true" options={skillsOption.map(s => s.name)} trigger='' Component='input' className='form-control' spacer=',' defaultValue={skillsToShow} />
                                <br />
                                <Button variant="warning" type="submit">
                                    Añadir tiempo de experiencia requerida a los conocimientos
                                </Button>
                                <Button variant="link">Ver ejemplos</Button>
                                <br />
                            </Form.Group>
                        </Col>
                    </Card>
                    <br />
                    <Card>
                        <Col>
                            <br />
                            <Form.Group controlId="language">
                                <h5>Idioma</h5>
                                <Form.Control type="text" value={language} />
                                <br />
                                <Form.Check type="checkbox" label="Requerido" checked={isLanguageMandatory} />
                                <br />
                                {languageLevenControls}
                            </Form.Group>
                        </Col>
                    </Card>

                </Form.Group>

                <Button variant="primary" type="submit">
                    Grabar
                </Button>
                <br />
            </Form>
        </Container>
    );
}