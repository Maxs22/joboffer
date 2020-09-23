import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import Login from '../../login/login';
import './AccountSmallSize.css'
import { loginRequired, loginCanceled, logoutRequired, logoutCanceled, loggedOutSuccessfully } from '../../../../redux/Account/Login/LoginActions';


export default function AccountSmallSize() {

    const dispatch = useDispatch();

    const showLoginModal = useSelector(state => state.LoginState.loginRequired);
    const userIsLogged = useSelector(state => state.LoginState.loggedInSuccessfully);
    const showLogoutModal = useSelector(state => state.LoginState.logoutRequired)

    const loginModal = showLoginModal && (

        <Modal show={showLoginModal} onHide={() => dispatch(loginCanceled)}>
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Login></Login>
            </Modal.Body>
        </Modal>
    )

    const logoutConfirmModal = showLogoutModal && (

        <Modal show={showLogoutModal} onHide={() => dispatch(logoutCanceled)}>
            <Modal.Header closeButton>
                <Modal.Title>Log Out</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Please confirm you want to log out</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => dispatch(logoutCanceled)}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={() => dispatch(loggedOutSuccessfully)}>
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    )

    const handleClick = (event) => {
        userIsLogged ? dispatch(logoutRequired) : dispatch(loginRequired);
    }

    return (
        <span>
            <Button variant="link" onClick={() => handleClick()}>{userIsLogged ? "Logout" : "Login"}</Button>
            {loginModal}
            {logoutConfirmModal}
        </span>
    );
}