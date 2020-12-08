// import React, { useState } from "react";
import { Component } from 'react';
import '../style.css';
import { Link } from 'react-router-dom';
import { HashRouter as Router} from "react-router-dom";
//test

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // making sure the form isnt empty 
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // check if  the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      formErrors: {
        username: "",
        password: ""
      }
    };
  }
  handleSubmit = event => {
    event.preventDefault();

    if (formValid(this.state)) {
      console.log(`
      username:${this.state.username}
      password:${this.state.password}
      `);

    } else {
      console.error("error form is invalid");
    }
  };
  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "username":
        formErrors.username = value.length < 3
          ? "username must be 3 characters or more"
          : "";
        break;
      case "password":
        formErrors.password = value.length < 6
          ? "password must be 6 characters or more"
          : "";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value },
      () => console.log(this.state));

  }
  render() {
    const { formErrors } = this.state;


    return (
      <Router className="Login">
        <div className="wrapper">
          <h1 style={{ color: "#F4CA16" }}>Welcome to Watchat</h1>
          <div className="form-wrapper">
            <h1>Login to your  Account</h1>
            <form onSubmit={this.handleSubmit} noValidate>
              <div className="username">
                <label htmlFor="username">Username</label>
                <input type="text" className="" placeholder=" Enter username" name="username" noValidate
                  onChange={this.handleChange} />
              </div>
              <div className="password">
                <label htmlFor="password">Password</label>
                <input type="password" className="" placeholder=" Enter Password" name="password" onChange={this.handleChange} />

              </div>
              <div className="createAccount">
                <button type="submit">Login</button>
                <p><Link to="/signup">Create an Account?</Link></p>
              </div>
            </form>
          </div>
        </div>
      </Router>
    );
  }
}

export default Login;