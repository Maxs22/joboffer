import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

export default function RecruiterHomePage() {


    return (
        <Container>
            <Row>
                <Col>
                    <h3>Aviso publicados</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Analista programador - Palermo</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Cliente: KPMG</Card.Subtitle>
                            <Badge variant="success">Publicado 2 Enero</Badge>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Card.Link href="#">Editar</Card.Link>
                            <Card.Link href="#">Finalizar</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>JAVA Full Stack Developer - Las Cañitas</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Cliente: Accenture</Card.Subtitle>
                            <Badge variant="warning">Sin Publicar</Badge>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Card.Link href="#">Editar</Card.Link>
                            <Card.Link href="#">Publicar</Card.Link>
                            <Card.Link href="#">Finalizar</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );

}