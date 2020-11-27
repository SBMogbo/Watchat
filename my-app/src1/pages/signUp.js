import React, { useState } from "react";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    console.log("username is " + username);
    console.log("password is " + password);
  };

  return (
    <Router>
      <div className="mt-4">
        <h2>Welcome to Watchat</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Container className="mt-3 px-5">
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="text"
                placeholder="Username"
                name="username"
                onChange={e => setUsername(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                onChange={e => setPassword(e.target.value)}
              />
            </Col>
          </Row>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </Container>
      </form>
      <p>Login</p>
                <ul>
                    <li><Link to="../login/login">login</Link></li>
                </ul>
    </Router>
  );
};

export default Signup;
