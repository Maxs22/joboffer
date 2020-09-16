import React, { useState }from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, Container } from 'react-bootstrap';
import Login from '../login/Login';
import { loginRequired, loginCanceled, logoutRequired, logoutCanceled, loggedOutSuccessfully } from '../../../redux/Account/LoginActions';
import { useHistory } from "react-router-dom";
import './NavBar.css';

export default function NavBar() {

  const dispatch = useDispatch();
  const history = useHistory();

  const showLoginModal = useSelector(state => state.LoginState.loginRequired);
  const userIsLogged = useSelector(state => state.LoginState.loggedInSuccessfully);
  const showLogoutModal = useSelector(state => state.LoginState.logoutRequired)

  const [expanded, setExpanded] = useState(false);

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

  const goToHomePageHandleClick = (event) => {

    history.push('/');
    event.preventDefault();
  }

  const loginLogouthandleClick = () => {

    setExpanded(false);

    userIsLogged ? dispatch(logoutRequired) : dispatch(loginRequired);
  }


  return (
    <Container>
      <Navbar fixed="top" bg="dark" variant="dark" expand="lg" collapseOnSelect="true" expanded = { expanded }>
        <Navbar.Brand href="/" onClick={goToHomePageHandleClick}>Ofertas de trabajo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick = {()=> setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#link" onClick = {()=> setExpanded(false) }>Link</Nav.Link>
            <NavDropdown.Divider />
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" onClick = {()=> setExpanded(false) }>Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2" onClick = {()=> setExpanded(false) }>Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3" onClick = {()=> setExpanded(false) }>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" onClick = {()=> setExpanded(false) }>Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link onClick={() => loginLogouthandleClick() }>{userIsLogged ? "Logout" : "Login"}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {loginModal}
      {logoutConfirmModal}
    </Container>
  );

}