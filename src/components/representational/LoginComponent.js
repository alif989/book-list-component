import React, { Component } from 'react'
import '../../css/login/style.css';

export default class LoginComponent extends Component {
    render() {

        const renderForm = (
            <div className="form">
                <form >
                    <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                  
                    </div>
                    <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                    
                    </div>
                    <div className="button-container">
                    <input type="submit" />
                    </div>
                </form>
            </div>
        );

        return (
            <div className="app">
            <div className="login-form">
              <div className="title">Sign In</div>
              {renderForm}
            </div>
          </div>
        )
    }
}