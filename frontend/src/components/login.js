import React from 'react'
export function Login() {
    return (
        <div className="login-container">
            <div className="login-panel">
                <div className="login-title">
                    <img className="login-logo" width="30%" margin="auto" src={require('../assets/xenloop-logo.png')}/>
                    <h2>X E N L O O P - 5 T</h2>
                </div>
                <div className="track-header">
                    <div className="track-number"><h3>LOGIN</h3></div>
                    <div className="login-user" contenteditable="true">
                        <p>Username</p>
                    </div>
                    <div className="login-user" contenteditable="true">
                        <p>Password</p>
                    </div>
                </div>
                <hr></hr>
                <div className="login-btns">
                    <div className="login-btn"><a href="/" className="login-link">LOGIN</a></div>
                    <div className="signup-btn">SIGN UP</div>
                </div>
                <div className="forgot-pass">
                    <a href="#">Forgot Password</a>
                </div>
            </div>
        </div>
    )
}