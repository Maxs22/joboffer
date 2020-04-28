import React from 'react';
import logo from './job.jpg';

export default class Login2 extends React.Component {
    constructor() {
        super();
        this.state = {
            loginStatus: 'initial',
            loginMessage: '',
            user: '',
            password: ''
        };
    }

    style = {
        form: {
            marginTop: '50px'
        }
    }

    //Methods
    SignIn(event) {

        event.preventDefault();

        if (this.state.user.toLowerCase() !== 'a@b.com') {
            this.setState({ loginStatus: 'error', loginMessage: 'User or password invalid' });
        }
        else {
            this.setState({ loginStatus: 'ok', loginMessage: 'Login success!' });
        }
    }

    //Handlers
    handleUserChange(event) {
        this.setState({ user: event.target.value, loginStatus: 'initial' });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value, loginStatus: 'initial' });
    }


    render() {

        const loginMessageTitle = this.state.loginStatus === "initial" ? "" :
            (<div className={this.state.loginStatus === "error" ? "alert alert-danger" : "alert alert-success"} role="alert">
                {this.state.loginMessage}
            </div>)

        return (

            <div className="row" style={this.style.form}>
                <div className="offset-1 col-10 offset-1 offset-sm-3 col-sm-6 offset-sm-3 offset-md-4 col-md-4 offset-md-4 offset-xl-5 col-xl-2 offset-xl-5">
                    <form className="form-signing">
                        <img className="mb-5" src={logo} alt="Job Offers logo" />
                        {loginMessageTitle}
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" onChange={(event) => this.handleUserChange(event)} required="" autoFocus="" />
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control mt-3" placeholder="Password" onChange={(event) => this.handlePasswordChange(event)} required=""></input>
                        <div className="checkbox mb-3 mt-3">
                            <label>Remember me
                                <input type="checkbox" className="ml-3" value="remember-me" />
                            </label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" onClick={(e) => this.SignIn(e)}>Sign in</button>
                    </form>
                </div>
            </div>
        )
    }
}