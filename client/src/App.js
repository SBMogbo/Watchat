import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./pages/signup/signUp"
import Login from "./pages/login/login"
import Home from "./pages/home/index"
import MovieDetails from "./pages/MovieDetails/index"
import Profile from "./pages/profile/index"
import Reviews from "./pages/reviews/index"
import Watched from "./pages/watched/index"
import Watchlist from "./pages/watchlist/index"
// import logo from './logo.svg';
import Navbar from "./components/Navbar/Navbar"
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/movieDetails" component={MovieDetails} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/reviews" component={Reviews} />
      <Route exact path="/watched" component={Watched} />
      <Route exact path="/watchlist" component={Watchlist} />
    </Router>

  );
}

export default App;
