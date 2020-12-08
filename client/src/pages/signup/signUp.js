import { Component } from 'react';
import '../style.css';
import API from "../../utils/API";
import { Link } from 'react-router-dom';
import { HashRouter as Router} from "react-router-dom";

const emailRegex= RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

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

class SignUp extends Component{
  constructor(props){
    super(props);
    this.state={
      username:null,
      email:null,
      password:null,
      formErrors:{
        username:"",
        email:"",
        password:""
      }
    };
  }
  handleSubmit = event=>{
    event.preventDefault();

    if(formValid(this.state)){
      console.log(`
      username:${this.state.username}
      email:${this.state.email}
      password:${this.state.password}
      `);
      API.saveUser(this.state.username, this.state.email, this.state.password)
      .then(res => {
        console.log('signup successful')
        this.props.history.push("/login")
      })
      .catch(err => console.log(err));
    }else{
     console.error("error form is invalid");
    }
  };
  handleChange = event =>{
    event.preventDefault();
    const {name, value}= event.target;
    let formErrors = { ...this.state.formErrors };

    switch(name){
      case"username":
      formErrors.username= value.length < 3 
      ? "username must be 3 characters or more"
      :"";
      break;
      case"password":
      formErrors.password= value.length < 6 
      ? "password must be 6 characters or more"
      :"";
      break;
      case"email":
      formErrors.email= emailRegex.test(value)
      ? ""
      :"invalid email!";
      break;
      default:
        break;
    }
     this.setState({ formErrors, [name]: value }, 
      () => console.log(this.state));

  }
  render(){
    const {formErrors}=this.state;

    return (
      <Router>
      <div className="wrapper">
         <h1 style={{color: "#F4CA16"}}>Welcome to Watchat</h1>
        <div className="form-wrapper">
          <h1>Create Account</h1>
          <form onSubmit={this.handleSubmit} noValidate>
          <div className="username">
            <label htmlFor="username">Username</label>
            <input type="text" className={formErrors.username.length > 0 ? "error" : null} placeholder=" Enter username" name="username" noValidate
            onChange={this.handleChange}/>  
            {formErrors.username.length >0 && (
              <span className="errorMessage">{formErrors.username}</span>
            )}   
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="password" className={formErrors.password.length > 0 ? "error" : null} placeholder=" Enter Password" name="password" onChange={this.handleChange} />   
            {formErrors.password.length > 0 && (
              <span className="errorMessage">{formErrors.password}</span>
            )}   
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="email" className={formErrors.email.length > 0 ? "error" : null} placeholder=" Enter Email" name="email" onChange={this.handleChange} />  
            {formErrors.email.length >0 && (
              <span className="errorMessage">{formErrors.email}</span>
            )}    
          </div>
          <div className="createAccount">
            <button type="submit">Create Your Account</button>
            <p><Link to="/login">Have an Account?</Link></p>
          </div>
          </form>
        </div>
      </div>
      </Router>
    )
  }
}

export default SignUp;
