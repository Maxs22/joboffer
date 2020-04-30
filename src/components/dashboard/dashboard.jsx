import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import  AccountSmallSize  from '../account/small/AccountSmallSize'
import './dashboard.css'


export default function Dashboard(props) {

    return (
        <Container fluid>
            <Row>
                <Col className="side-panel" xs="auto">Side bar</Col>
                <Col>
                    <AccountSmallSize></AccountSmallSize>
                </Col>
            </Row>
            <Row>
            </Row>
        </Container>
    )
}