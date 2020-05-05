import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import Login from '../login/login'
import { loginRequired, loginCanceled, logoutRequired, logoutCanceled, loggedOutSuccessfully } from '../../redux/mainApp/mainAppActions';

export default function MainNavBar() {

  const dispatch = useDispatch();

  const showLoginModal = useSelector(state => state.mainApp.loginRequired);
  const userIsLogged = useSelector(state => state.mainApp.loggedInSuccessfully);
  const showLogoutModal = useSelector(state => state.mainApp.logoutRequired)

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

  const anyOpenModalRequired = showLoginModal || showLogoutModal ;

  const handleClick = (event) => {
    userIsLogged ? dispatch(logoutRequired) : dispatch(loginRequired);
  }


  return (
    <span>
      <Navbar fixed="top" bg="light" expand="lg" collapseOnSelect="true">
        <Navbar.Brand href="#home">Jobs Offers</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown.Divider />
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown.Divider />
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link onClick={() => handleClick()}>{userIsLogged ? "Logout" : "Login"}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {loginModal}
      {logoutConfirmModal}
    </span>


  );

}