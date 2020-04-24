import React, { useState, useEffect } from 'react';
import logo from './job.jpg';

export default function Login(props){

    const [user, setUser] = useState();
    const [password, setPassword] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const [loginStatus, setloginStatus] = useState();

    const style = {
        form:{
            marginTop: '50px'
        }
    }

    const handleUserChange = (event) => {
        setUser(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const signIn = (event) =>{
        event.preventDefault();
        if(user !== 'a@b.com'){
            setErrorMessage('Usuario no permitido para ingresar');
            setloginStatus('error');
        }
        else
        {
            setloginStatus('ok');
        }
    }

    const errorMessageTitle = loginStatus === 'error' &&
                                    ( <div className="alert alert-danger" role="alert">
                                            {errorMessage}
                                    </div>)

    return (
        <div className="row" style={style.form}>
                <div className="offset-1 col-10 offset-1 offset-sm-3 col-sm-6 offset-sm-3 offset-md-4 col-md-4 offset-md-4 offset-xl-5 col-xl-2 offset-xl-5">
                    <form className="form-signing">
                        <img  className="mb-5" src={logo} alt="Job Offers logo"/>
                        {errorMessageTitle}
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" onChange={handleUserChange} required="" autoFocus=""/>
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control mt-3" placeholder="Password" onChange={handlePasswordChange} required=""></input>
                        <div className="checkbox mb-3 mt-3">
                            <label>Remember me
                                <input type="checkbox" className="ml-3" value="remember-me"/>
                            </label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" onClick={signIn}>Sign in</button>
                    </form>
                </div>
            </div>
    )
}