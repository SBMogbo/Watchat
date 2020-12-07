import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./pages/signup/signUp"
import Login from "./pages/login/login"
// import logo from './logo.svg';
import Navbar from "./components/Navbar/Navbar"
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={SignUp} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={Login} />
    </Router>

  );
}

export default App;
