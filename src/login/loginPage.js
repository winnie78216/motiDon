import React, { Component } from 'react';
import './login.css';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setUserType, setActiveRoutes } from '../appState/appStateActionCreator';

class LoginPage extends Component {

    constructor(props) {
        super(props)
    }

    loginMock = () => {
        console.log("logged in")
        const email = document.getElementsByClassName('login-input')[0].value
        const password = document.getElementsByClassName('login-input')[1].value
        console.log(email, password)
        if (email === "user@user.com") {
        this.props.setUserType('user')
        this.props.setActiveRoutes('user')
    }
    else if (email === "orginization@orginization.org") {
        this.props.setUserType('orginization')
        this.props.setActiveRoutes('orginization')
        this.props.history.push('/dashboard')
    }
    else if (email === "service@service.com") {
        this.props.setUserType('service')
        this.props.setActiveRoutes('service')
        this.props.history.push('/dashboard')
    }
    else {
        this.props.history.push('/campaigns')
        this.props.setUserType('user')
        this.props.setActiveRoutes('user')
    }
        //this.props.history.push('/dashboard')
    }
    
    
    render() {
        return (
            <div>
                <div id="login-div" className="login-panel">
                    <div className="login-panel_wrapper">
                        <img className="login-panel_logo" src="/img/logo.png" />
                    </div>

                    <div className="login-form">
                        <input id="email123" className="login-input" type="text" placeholder="Email" name='email' />
                        <input id="password" className="login-input" type="password" placeholder="Password" name='password' />
                        <button id="login-btn" className="login-btn bold" onClick={this.loginMock}>LOGIN</button>
                        <div id="error-message" className="error-message"></div>
                    </div>
                </div>
                <script type="application/javascript" src="/js/login.js"></script>
            </div>
        );
    }
}

LoginPage = connect(
    state => ({
    }), {setUserType, setActiveRoutes }
  )(LoginPage)

export default LoginPage;
