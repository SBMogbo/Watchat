import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom"; 
import SignUp from "../pages/signup/signUp"
import Login from "../pages/login/login"

const PublicRoutes = () => {
    return <Router>
        <Navbar />
        <Switch>
            <Route exact={true} path="/login" component={Login} />
            <Route exact={true} path="/signup" component={SignUp} />
            <Redirect to="/login" />
        </Switch>
    </Router>
}
export default PublicRoutes;