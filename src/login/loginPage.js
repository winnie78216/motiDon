import React, { Component } from 'react';
import './Login.css';
import { login } from './login';

class LoginPage extends Component {

    constructor(props) {
        super(props)
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
                        <button id="login-btn" className="login-btn bold" onClick={() => login()}>LOGIN</button>
                        <div id="error-message" className="error-message"></div>
                    </div>
                </div>
                <script type="application/javascript" src="/js/login.js"></script>
            </div>
        );
    }
}

export default LoginPage;
