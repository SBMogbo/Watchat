import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import API from "../../utils/API";
import "./style.css";



function Navbar() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const movieSearchFunc = (event) => {
    event.preventDefault();
    // setResponse([])
    // setMovies([]);
    if (!query?.trim()) return;
    API.omdbSearch(query)
        .then((res) => {
          setResponse(res.Search);
          let results = res.Search;
          // map through the array
          results = results.map((result) => {
          // store each movie information in a new object
            result = {
              key: result.imdbID,
              id: result.imdbID,
              poster: result.Poster,              
              // title: result.Title,
              // year: result.Year,
              // type: result.Type,
            };
            return result;
          });
          // reset the sate of the empty movies array to the new arrays of objects with properties geting back from the response
          setMovies(results);
          console.log("response", response)
          console.log("movies", movies)
        })
        .catch((err) => {
          console.log('ERROR ' + err);
        });
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <div className={'container-fluid header'}>
        <div className={'row p-3'}>


          {/*Header Left*/}

          <div className="col-12 col-md-3 d-flex justify-content-center p-1">
            WatchAT


          </div>
          {/* Header Center */}
          <div className={'col-12 col-md-6 d-flex p-1 '}>
            <div className="col-4 d-flex justify-content-center header-option" title="Home">
              < Link to="/home" className="nav-link"> 
              <HomeIcon fontSize="large"/>
              </Link>
              
            </div>
            <div className="col-4 d-flex justify-content-center header-option" title="Watched">
             <Link to="/watched" className="nav-link" >
             <PlaylistAddCheckIcon fontSize="large"/>
             </Link>
            </div>
            <div className="col-4 d-flex justify-content-center header-option" title="Watchlist">
              <Link to="/watchlist" className="nav-link">
              <SubscriptionsIcon fontSize="large"/>
              </Link>
            </div>
          </div>

          {/* Start of Header Right*/}

          <div className="col-12 col-md-3 d-flex justify-content-center p-1">

            <SearchIcon fontSize="large"/>
            <form onSubmit={movieSearchFunc}><input className={'header_input'} placeholder="Search Movies" type="text" onChange={(e) => setQuery(e.target.value)}/>
</form>

            {/* This is for the Drop Down Far Right. */}


            <Button className="expand-button" aria-controls="simple-menu" aria-haspopup="true"
                    onClick={handleClick}>
              <ExpandMoreIcon/>
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
              <MenuItem onClick={handleClose}><Link to="/profile" className="nav-link">Profile</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link to="reviews" className="nav-link">Reviews</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link to="/movieDetails" className="nav-link">Details</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link to ="/login" className="nav-link">Logout</Link></MenuItem>
            </Menu>


          </div>
        </div>

      </div>
  )

}

export default Navbar

