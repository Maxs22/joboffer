import React, { useEffect } from 'react';
import { Container, Col, Form, Button, Card } from 'react-bootstrap';
import { DatePickerInput } from 'rc-datepicker';
import { useSelector, useDispatch } from 'react-redux';
import TextInput from 'react-autocomplete-input';
import { skillsLoaded } from '../../redux/SkillManager/SkillManagerActions';
import getData from '../../repositories/common/getData';
import { useForm, Controller } from "react-hook-form";


import '../../../node_modules/react-autocomplete-input/dist/bundle.css';
import '../../../node_modules/rc-datepicker/lib/style.css'

export default function RecruiterEditCreateJobDetail(props) {

    const { register, handleSubmit, control, watch } = useForm();

    const languageLevel = watch("languageLevelControl", props.JobOffer.languageLevel);
    const isLanguageMandatory = watch("isLanguageMandatoryControl", props.JobOffer.isLanguageMandatory);

    const requiredSkills = props.JobOffer.skillsRequired.map(s => s.skill.name);
    const skillsAvailable = useSelector(state => state.SkillManagerState.skills);

    const onSubmit = data => console.log(data);

    let skillsToShow = requiredSkills.join(', ');

    const dispatch = useDispatch();

    const token = sessionStorage.getItem("token");

    const languageLevenControls = isLanguageMandatory ? <div>
        <Form.Check inline label="Basico" type='radio' id='basic' name="languageLevelControl" ref={register} value={1} defaultChecked={ languageLevel === 1} />
        <Form.Check inline label="Intermedio" type='radio' id='medium' name="languageLevelControl" ref={register} value={2} defaultChecked={languageLevel === 2}/>
        <Form.Check inline label="Avanzado" type='radio' id='advance' name="languageLevelControl" ref={register} value={3} defaultChecked={languageLevel === 3}/>
    </div> : <div>
            <Form.Check inline label="Basico" type='radio' id='basic' disabled />
            <Form.Check inline label="Intermedio" type='radio' id='medium' disabled />
            <Form.Check inline label="Avanzado" type='radio' id='advance' disabled />
        </div>

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
        <Container style={{ textAlign: "left" }}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group >
                    <h5>Título</h5>
                    <Form.Control type="text" name="title" ref={register} defaultValue={props.JobOffer.title} />
                    <h5>Descripción</h5>
                    <Form.Control as="textarea" name="description" rows="6" ref={register} defaultValue={props.JobOffer.description} />
                    <h5>Fecha de Publicacion</h5>
                    <Col lg="2" style={{ paddingLeft: 0 }}>
                        <Controller as={DatePickerInput} name="date" control={control} defaultValue={props.JobOffer.date} className='my-custom-datepicker-component' />
                    </Col>
                    <Card>
                        <Col>
                            <br />
                            <h5>Empresa empleadora</h5>
                            <Form.Label>Nombre</Form.Label><br />
                            <Controller as={TextInput} name="companyName" options={["apple", "apricot", "banana", "carrot"]} trigger='' Component='input' control={control} className='form-control' defaultValue={props.JobOffer.company.name} />
                            <br />
                            <Form.Label>Rubro</Form.Label>
                            <Form.Control type="text" disabled defaultValue={props.JobOffer.company.activity} name="companyActivity" ref={register} />
                            <br />
                        </Col>
                    </Card>
                    <Card>
                        <Col>
                            <br />
                            <h5>Información contractual</h5>
                            <Form.Label>Para iniciar en</Form.Label><br />
                            <Form.Control type="text" ref={register} name="startingFrom" defaultValue={props.JobOffer.contractInformation.startingFrom} />
                            <Form.Label>Días laborales</Form.Label>
                            <Form.Control type="text" ref={register} name="workingDays" defaultValue={props.JobOffer.contractInformation.workingDays} />
                            <Form.Label>Tipo de contratación</Form.Label>
                            <Form.Control type="text" ref={register} name="kindOfContract" defaultValue={props.JobOffer.contractInformation.kindOfContract} />
                            <Form.Label>Zona de trabajo</Form.Label>
                            <Form.Control type="text" ref={register} name="zone" defaultValue={props.JobOffer.zone} />
                            <br />
                        </Col>
                    </Card>
                    <br />
                    <Card>
                        <Col>
                            <br />
                            <Form.Group controlId="skills">
                                <h5>Conocimientos</h5>
                                <Controller as={TextInput} control={control} matchAny="true" name="skills" options={skillsAvailable.map(s => s.name)} trigger='' Component='input' className='form-control' spacer=',' defaultValue={skillsToShow} />                                <br />
                                <Button variant="warning" type="submit">
                                    Añadir tiempo de experiencia a los conocimientos
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
                                <Form.Control type="text" ref={register} name="language" defaultValue={props.JobOffer.language} />
                                <br />
                                <Form.Check type="checkbox" label="Requerido" ref={register} name="isLanguageMandatoryControl" defaultChecked={isLanguageMandatory} />
                                <br />
                                {languageLevenControls}
                            </Form.Group>
                        </Col>
                    </Card>
                </Form.Group>
                <input variant="primary" type="submit" value="Grabar" />
                <br />
            </Form>
        </Container>
    );
}