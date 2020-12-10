import React, { useState } from 'react';
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
import Reviewed from "../pages/Reviewed/index";

const PrivateRoutes = () => {

    
    const [movieId, setMovieId] = useState({});

    const onMovieClick = function (id) {
        setMovieId(id);
        
    } 

    return <Router>
        <Navbar/>
        <Switch>
            <Route exact path="/" ><Login/></Route>
            <Route exact path="/signup" ><SignUp/></Route>
            <Route exact path="/login" ><Login/></Route>
            <Route exact path="/home" >
                <Home onMovieClick={onMovieClick}/>
            </Route>
            <Route exact path="/movieDetails" >
                <MovieDetails movieId={movieId}/>
            </Route>
            <Route exact path="/profile" ><Profile/></Route>
            <Route exact path="/reviews" ><Reviews/></Route>
            <Route exact path="/reviewed" ><Reviewed/></Route>
            <Route exact path="/watched" ><Watched/></Route>
            <Route exact path="/watchlist" ><Watchlist/></Route>
            <Redirect to="/" />
        </Switch>
    </Router>
}
export default PrivateRoutes;