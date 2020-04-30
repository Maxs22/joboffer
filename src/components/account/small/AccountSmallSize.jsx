import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Button, Modal , Image} from 'react-bootstrap';
import Login from '../../login/login';
import './AccountSmallSize.css'
import { loginRequired, loginCanceled } from '../../../redux/mainApp/mainAppActions';


export default function AccountSmallSize() {

    const dispatch = useDispatch();
    
    let showContent = useSelector(state => state.mainApp.loginRequired);
    let userIsLogged = useSelector(state => state.mainApp.loggedSuccessfully);

    const modal = showContent && (

        <Modal show={showContent} onHide={()=>dispatch(loginCanceled)}>
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Login></Login>
            </Modal.Body>
        </Modal>
    )


    return (
        <Container>
            <Row>
                <Col>
                    <Button variant="link" onClick={() => dispatch(loginRequired)}>{ userIsLogged ? "Logout" : "Login"}</Button>
                    { modal }
                </Col>
            </Row>
        </Container>
    );
}