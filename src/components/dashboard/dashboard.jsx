import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import MainNavBar from '../navBar/mainNavBar'
import './dashboard.css'


export default function Dashboard(props) {

    return (
        <Container fluid>
            <Row>
                <Col>
                    <MainNavBar></MainNavBar>
                </Col>
            </Row>
            <Row>
                <Col className="side-panel" xs="auto">Side bar</Col>
            </Row>
        </Container>
    )
}