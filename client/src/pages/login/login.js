// import React, { useState } from "react";
import { useState } from 'react';
import '../style.css';
import { Link } from 'react-router-dom';
import { HashRouter as Router } from "react-router-dom";
import API from "../../utils/API"
import { useStoreContext } from '../../utils/GlobalState';
import { LOG_IN } from '../../utils/actions';
import { useDispatch } from 'react-redux';
import { setUser } from '../../utils/AppSlice';
import swal from 'sweetalert';
import { Route , withRouter} from 'react-router-dom';
//test

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // making sure the form isnt empty 
  Object.values(formErrors).forEach(val => {
    // console.log(val)
    val.length > 0 && (valid = false);
  });

  // check if  the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });
// console.log(valid)
  return valid;
};

function Login(props) {
  const dispatch = useStoreContext()[1];
  const reduxDispatch = useDispatch();
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
        const response = await API.logIn(state.username, state.password);
        localStorage.setItem("authorization-token", response.data.token);
        // console.log(`response:${response}`)
        reduxDispatch(setUser({
          id: response.data.token,
          username: response.data.username,
        }))
        dispatch({
          type: LOG_IN,
          payload: response.data
        })
       
      } catch (error) {
        console.log(error)
        swal("Invalid credentials!");
      }
      props.history.push("/home")

    } else {
      // console.log(state)
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
  
  const { formErrors } = state;

  return (
    <Router className="Login">
      <div className="wrapper">
        <h1 style={{ color: "#F4CA16" }}>Welcome to Watchat</h1>
        <div className="form-wrapper">
          <h1>Login to your  Account</h1>
          <form onSubmit={handleSubmit} noValidate>
            <div className="username">
              <label htmlFor="username">Username</label>
              <input type="text" className= {formErrors.username.length > 0 ? "error" : null} placeholder=" Enter username" name="username" noValidate
                onChange={handleChange} />
                 {formErrors.username.length > 0 && (
                <span className="errorMessage">{formErrors.username}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input type="password" className={formErrors.password.length > 0 ? "error" : null}  placeholder=" Enter Password" name="password" onChange={handleChange} />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}

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


export default withRouter (Login);