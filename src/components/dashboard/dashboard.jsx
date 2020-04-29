import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Login from '../login/login';
import { loginRequired } from '../../redux/mainApp/mainAppActions';


export default function Dashboard(props) {

    const dispatch = useDispatch();

    return (
        <Container fluid>
            <Row>
                <Col xs="auto">Side bar<Login></Login></Col>
                <Col>
                </Col>
            </Row>
            <Row>
                <Col xs="auto"></Col>
                <Col md={{offset: 4 }}>
                    <Button variant="info" onClick={()=>dispatch(loginRequired)}>Login</Button>
                </Col>
            </Row>
        </Container>
    )
}