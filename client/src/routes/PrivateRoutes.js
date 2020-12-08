import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import SignUp from "../pages/signup/signUp"
import Login from "../pages/login/login"
import Home from "../pages/home/index"
import MovieDetails from "../pages/MovieDetails/index"
import Profile from "../pages/profile/index"
import Reviews from "../pages/reviews/index"
import Watched from "../pages/watched/index"
import Watchlist from "../pages/watchlist/index"
import Navbar from "../components/Navbar/Navbar"

const PrivateRoutes = () => {
    return <Router>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/movieDetails" component={MovieDetails} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/reviews" component={Reviews} />
            <Route exact path="/watched" component={Watched} />
            <Route exact path="/watchlist" component={Watchlist} />
            <Redirect to="/" />
        </Switch>
    </Router>
}
export default PrivateRoutes;