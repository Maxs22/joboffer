import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import logo from './job.jpg';
import { loginRequired, loggedInSuccessfully } from '../../redux/loginSate/loginActions';
import { Container, Row, Col } from 'react-bootstrap';
import './login.css';

export default function Login() {

    const [user, setUser] = useState();
    const [password, setPassword] = useState();
    const [loginMessage, setLoginMessage] = useState();
    const [loginStatus, setloginStatus] = useState("initial");

    const dispatch = useDispatch();

    const handleUserChange = (event) => {
        setUser(event.target.value);
        setloginStatus("initial");
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setloginStatus("initial");
    }

    const signIn = (event) => {

        event.preventDefault();

        if (user !== 'a@b.com') {
            setLoginMessage('User or password invalid');
            setloginStatus('error');
        }
        else {
            setloginStatus('success');
            setLoginMessage('Login Success');
            dispatch(loggedInSuccessfully);
        }
    }

    const loginMessageTitle = loginStatus === "initial" ? "" :
        (<div className={loginStatus === "error" ? "alert alert-danger" : "alert alert-success"} role="alert">
            {loginMessage}
        </div>)

    return (
        <div className="row login-form">
            <Container>
                <Row>
                    <Col><form className="form-signing">
                        <img className="mb-5" src={logo} alt="Job Offers logo" />
                        {loginMessageTitle}
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" onChange={handleUserChange} required="" autoFocus="" />
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control mt-3" placeholder="Password" onChange={handlePasswordChange} required=""></input>
                        <div className="checkbox mb-3 mt-3">
                            <label>Remember me
                                <input type="checkbox" className="ml-3" value="remember-me" />
                            </label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" onClick={signIn}>Sign in</button>
                    </form></Col>
                </Row>
            </Container>
        </div>
    )
}