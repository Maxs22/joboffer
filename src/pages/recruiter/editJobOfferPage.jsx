import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function EditJobOfferPage() {


    return (
        <Container>
            <Row>
                <Col>
                    <h3>Editar Aviso</h3>
                    <hr/>
                </Col>
            </Row>
            <Row>
                <Col>
                <Container style={{textAlign: "left"}}>
                    <Form>
                        <Form.Group >
                            <Form.Label>Título</Form.Label>
                            <Form.Control type="text" />
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control as="textarea" rows="6" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
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