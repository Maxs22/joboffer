import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { DatePickerInput } from 'rc-datepicker';
import TextInput from 'react-autocomplete-input';

import 'react-autocomplete-input/dist/bundle.css';
import 'rc-datepicker/lib/style.css'

export default function EditJobOfferPage() {


    const date = '2015-06-26' // or Date or Moment.js

    const onChange = (jsDate, dateString) => {

    }

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
                    <Container style={{ textAlign: "left" }}>
                        <Form>
                            <Form.Group >
                                <Form.Label>Título</Form.Label>
                                <Form.Control type="text" />
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control as="textarea" rows="6" />
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
                                        <TextInput options={["apple", "apricot", "banana", "carrot"]} trigger='' Component='input' className='form-control' />
                                        <br />
                                        <Form.Label>Rubro</Form.Label>
                                        <Form.Control type="text" disabled />
                                        <br />
                                    </Col>
                                </Card>
                                <Card>
                                    <Col>
                                        <br />
                                        <h5>Información contractual</h5>
                                        <Form.Label>Para iniciar en</Form.Label><br />
                                        <Form.Control type="text" />
                                        <Form.Label>Días laborales</Form.Label>
                                        <Form.Control type="text" />
                                        <Form.Label>Tipo de contratación</Form.Label>
                                        <Form.Control type="text" />
                                        <Form.Label>Zona de trabajo</Form.Label>
                                        <Form.Control type="text" />
                                        <br />
                                    </Col>
                                </Card>
                                <br />
                                <Form.Label>Conocimientos</Form.Label><br />
                                <TextInput options={["Net", "C#", "javascript", "java"]} trigger='' Component='input' className='form-control' />
                                <br />
                                <Form.Check type="checkbox" label="Ingles Requerido" />
                                <Form.Check inline label="Basico" type='radio' id='basic' disabled />
                                <Form.Check inline label="Intermedio" type='radio' id='medium' disabled />
                                <Form.Check inline label="Avanzado" type='radio' id='advance' disabled />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}