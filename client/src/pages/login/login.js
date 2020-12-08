// import React, { useState } from "react";
import { Component, useState } from 'react';
import '../style.css';
import { Link } from 'react-router-dom';
import { HashRouter as Router } from "react-router-dom";
import API from "../../utils/API"
import {useStoreContext} from '../../utils/GlobalState';
import {LOG_IN} from '../../utils/actions';
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

function Login(props) {
  const [globalState,dispatch]=useStoreContext();
  const [state, setState] = useState({
    username: null,
    password: null,
    formErrors: {
      username: "",
      password: ""
    }
  })
  // constructor(props) {
  //   super(props);
  //   state = {
  //     username: null,
  //     password: null,
  //     formErrors: {
  //       username: "",
  //       password: ""
  //     }
  //   };
  // }
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formValid(state)) {
      // console.log(`
      // username:${state.username}
      // password:${state.password}
      // `);
      try {
        const response=await API.logIn(state.username,state.password);
        localStorage.setItem("authorization-token",response.data.token);
                dispatch({
                    type:LOG_IN,
                    payload:response.data
                })
    } catch(error) {
        console.log(error)
        alert("Invalid credentials!");
    }
    props.history.push("/home")

    } else {
      console.error("error form is invalid");
    }
  };

  const handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let formErrors = { ...state.formErrors };

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
    setState({ ...state, formErrors, [name]: value });

  }



  return (
    <Router className="Login">
      <div className="wrapper">
        <h1 style={{ color: "#F4CA16" }}>Welcome to Watchat</h1>
        <div className="form-wrapper">
          <h1>Login to your  Account</h1>
          <form onSubmit={handleSubmit} noValidate>
            <div className="username">
              <label htmlFor="username">Username</label>
              <input type="text" className="" placeholder=" Enter username" name="username" noValidate
                onChange={handleChange} />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input type="password" className="" placeholder=" Enter Password" name="password" onChange={handleChange} />

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


export default Login;