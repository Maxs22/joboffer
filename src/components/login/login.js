import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import logo from './job.jpg';
import { loginRequired, loggedSuccessfully } from '../../redux/mainApp/mainAppActions';
import './login.css';

export default function Login(props) {

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
            dispatch(loginRequired);
        }
        else {
            setloginStatus('success');
            setLoginMessage('Login Success');
            dispatch(loggedSuccessfully);
        }
    }

    const loginMessageTitle = loginStatus === "initial" ? "" :
        (<div className={loginStatus === "error" ? "alert alert-danger" : "alert alert-success"} role="alert">
            {loginMessage}
        </div>)

    return (
        <div className="row login-form">
            <div className="offset-1 col-10 offset-1 offset-sm-3 col-sm-6 offset-sm-3 offset-md-4 col-md-4 offset-md-4 offset-xl-5 col-xl-2 offset-xl-5">
                <form className="form-signing">
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
                </form>
            </div>
        </div>
    )
}