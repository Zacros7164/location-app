import React, { Component } from 'react';
import axios from 'axios';
import '../css/styles.css';


class Login extends Component {

    constructor() {
        super()
        this.submitCreds = this.submitCreds.bind(this)
    }

    submitCreds(event) {
        event.preventDefault(); // stop default form behavior
        const formData = {
            userId: document.getElementById('userId').value,
            password: document.getElementById('password').value
        } // pull relevant data
        axios({
            method: 'POST',
            data: formData,
            url: `${window.apiHost}/login`
        }).then((response) => {
            // console.log(response)
            if (response.data === "success") {
                this.props.history.push('/weather')
            } else {
                this.props.history.push('/error')
            };
        })// ajax request and promise chaining waiting for validation and authorization from the back end

    }

    render() {
        return (
            <div className="container">
                <fieldset className="formBox">
                    {/* <legend>Login</legend> */}
                    <form id="loginForm" className="inputBox" onSubmit={this.submitCreds}>
                        <input type="text" id="userId" className="inputField" aria-label="user Id field" placeholder="Please enter your user id" />
                        <input type="password" id="password" className="inputField" aria-label="password field" placeholder="Please enter your password" />
                        <button type="submit" className="btn" id="submitButton">Submit!</button>
                    </form>
                </fieldset>

            </div>
        )
    }
};

export default Login;