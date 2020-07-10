import React, { useState } from 'react';
import { Container, Col, Form, Button, Card } from 'react-bootstrap';
import { DatePickerInput } from 'rc-datepicker';
import TextInput from 'react-autocomplete-input';

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
    const [skills, setSkills] = useState(props.JobOffer.skillsRequired.map(s => s.skill.name));

    const onChange = (jsDate, dateString) => {
        setDate(dateString);
    }

    return (
        <Container style={{ textAlign: "left" }}>
            <Form>
                <Form.Group >
                    <Form.Label>Título</Form.Label>
                    <Form.Control type="text" value={title} />
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control as="textarea" rows="6" value={description} />
                    <Form.Label>Fecha de Publicacion</Form.Label>
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
                    <Form.Label>Conocimientos</Form.Label><br />
                    <TextInput options={["Net", "C#", "javascript", "java"]} trigger='' Component='input' className='form-control' value={skills} />
                    <br />
                    <Form.Check type="checkbox" label="Ingles Requerido" />
                    <Form.Check inline label="Basico" type='radio' id='basic' disabled />
                    <Form.Check inline label="Intermedio" type='radio' id='medium' disabled />
                    <Form.Check inline label="Avanzado" type='radio' id='advance' disabled />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Grabar
                </Button>
                <br />
            </Form>
        </Container>
    );
}