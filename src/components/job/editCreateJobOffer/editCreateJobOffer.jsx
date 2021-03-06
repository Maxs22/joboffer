import React from 'react';
import { Container, Col, Form, Button, Card } from 'react-bootstrap';
import { DatePickerInput } from 'rc-datepicker';
import TextInput from 'react-autocomplete-input';
import { useForm, Controller } from "react-hook-form";


import '../../../../node_modules/react-autocomplete-input/dist/bundle.css';
import '../../../../node_modules/rc-datepicker/lib/style.css'

export default function EditCreateJobDetail(props) {


    const { register, handleSubmit, control, watch } = useForm();

    const languageLevel = watch("languageLevelControl", props.jobOffer?.languageLevel);
    const isLanguageMandatory = watch("isLanguageMandatoryControl", props.jobOffer?.isLanguageMandatory);
    const publicationDate = props.jobOffer ? props.jobOffer.date : new Date();

    const requiredSkills = props.JobOffer?.skillsRequired.map(s => s.skill.name);

    const onSubmit = data => console.log(data);

    let skillsToShow = requiredSkills?.join(', ');

    const languageLevenControls = isLanguageMandatory ? <div>
        <Form.Check inline label="Basico" type='radio' id='basic' name="languageLevelControl" ref={register} value={1} defaultChecked={ languageLevel === 1} />
        <Form.Check inline label="Intermedio" type='radio' id='medium' name="languageLevelControl" ref={register} value={2} defaultChecked={languageLevel === 2}/>
        <Form.Check inline label="Avanzado" type='radio' id='advance' name="languageLevelControl" ref={register} value={3} defaultChecked={languageLevel === 3}/>
    </div> : <div>
            <Form.Check inline label="Basico" type='radio' id='basic' disabled />
            <Form.Check inline label="Intermedio" type='radio' id='medium' disabled />
            <Form.Check inline label="Avanzado" type='radio' id='advance' disabled />
        </div>

    return (
        <Container style={{ textAlign: "left" }}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group >
                    <h5>Título</h5>
                    <Form.Control type="text" name="title" ref={register} defaultValue={props.jobOffer?.title} />
                    <h5>Descripción</h5>
                    <Form.Control as="textarea" name="description" rows="6" ref={register} defaultValue={props.jobOffer?.description} />
                    <h5>Fecha de Publicacion</h5>
                    <Col lg="2" style={{ paddingLeft: 0 }}>
                        <Controller as={DatePickerInput} name="date" control={control} defaultValue={publicationDate} className='my-custom-datepicker-component' />
                    </Col>
                    <Card>
                        <Col>
                            <br />
                            <h5>Empresa empleadora</h5>
                            <Form.Label>Nombre</Form.Label><br />
                            <Controller as={TextInput} name="companyName" autoComplete="off" options={["apple", "apricot", "banana", "carrot"]} trigger='' Component='input' control={control} className='form-control' defaultValue={props.jobOffer?.company.name} />
                            <br />
                            <Form.Label>Rubro</Form.Label>
                            <Form.Control type="text" disabled defaultValue={props.jobOffer?.company.activity} name="companyActivity" ref={register} />
                            <br />
                        </Col>
                    </Card>
                    <Card>
                        <Col>
                            <br />
                            <h5>Información contractual</h5>
                            <Form.Label>Para iniciar en</Form.Label><br />
                            <Form.Control type="text" ref={register} name="startingFrom" defaultValue={props.jobOffer?.contractInformation.startingFrom} />
                            <Form.Label>Días laborales</Form.Label>
                            <Form.Control type="text" ref={register} name="workingDays" defaultValue={props.jobOffer?.contractInformation.workingDays} />
                            <Form.Label>Tipo de contratación</Form.Label>
                            <Form.Control type="text" ref={register} name="kindOfContract" defaultValue={props.jobOffer?.contractInformation.kindOfContract} />
                            <Form.Label>Zona de trabajo</Form.Label>
                            <Form.Control type="text" ref={register} name="zone" defaultValue={props.jobOffer?.zone} />
                            <br />
                        </Col>
                    </Card>
                    <br />
                    <Card>
                        <Col>
                            <br />
                            <Form.Group controlId="skills">
                                <h5>Conocimientos</h5>
                                <Controller as={TextInput} control={control} matchAny={true} name="skills" autoComplete="off" options={props.skillsAvailable.map(s => s.name)} trigger='' Component='input' className='form-control' spacer=',' defaultValue={skillsToShow}/><br />
                                <Button variant="warning" type="submit">
                                    Añadir tiempo mínimo requerido
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
                                <Form.Control type="text" ref={register} name="language" defaultValue={props.jobOffer?.language} />
                                <br />
                                <Form.Check type="checkbox" label="Requerido" ref={register} name="isLanguageMandatoryControl" defaultChecked={isLanguageMandatory} />
                                <br />
                                {languageLevenControls}
                            </Form.Group>
                        </Col>
                    </Card>
                </Form.Group>
                <Button variant="primary" type="submit">Guardar</Button><br/>
                <br />
            </Form>
        </Container>
    );
}