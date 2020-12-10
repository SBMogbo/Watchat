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
import MovieFilterSharpIcon from '@material-ui/icons/MovieFilterSharp';
import "./style.css";
import { useDispatch } from "react-redux";
import { setSearch } from "../../utils/AppSlice";

function Navbar(props) {
  const [query, setQuery] = useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const movieSearchFunc = (event) => {
    event.preventDefault();
    if (!query?.trim()) return;
    // props?.onSearch(query);
    const search = {
      location: window.location.hash,
      query,
    };
    dispatch(setSearch(search));
    setQuery('')
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="col-12 col-md-3 d-flex justify-content-center p-1">
      <MovieFilterSharpIcon style={{ marginTop: "14px", color: "#f4ca16" }} fontSize="large" />
      <h3 style={{ marginTop: "15px", marginLeft: "10px", color: "white" }}>WatchAt</h3>
      {/* Header Center */}
      <div className={'col-12 col-md-6 d-flex p-1 '}>
        <div className="col-4 d-flex justify-content-center header-option" title="Home">
          < Link to="/home" className="nav-link">
            <HomeIcon fontSize="large" />
          </Link>
        </div>
        <div className="col-4 d-flex justify-content-center header-option" title="Watched">
          <Link to="/watched" className="nav-link" >
            <PlaylistAddCheckIcon fontSize="large" />
          </Link>
        </div>
        <div className="col-4 d-flex justify-content-center header-option" title="Watchlist">
          <Link to="/watchlist" className="nav-link">
            <SubscriptionsIcon fontSize="large" />
          </Link>
        </div>
      </div>

      {/* Start of Header Right*/}

      <div className="col-12 col-md-3 d-flex justify-content-center p-1">

        <div style={{ justifyContent: "space-between" }} className="col-12 col-md-3 d-flex justify-content-center p-1">

          <SearchIcon style={{ color: "white" }} fontSize="large" />
          <form onSubmit={movieSearchFunc}>
            <input className={'header_input'} placeholder="Search Movies" value={query} type="text" onChange={(e) => setQuery(e.target.value)} />
          </form>

          {/* This is for the Drop Down Far Right. */}


          <Button className="expand-button" aria-controls="simple-menu" aria-haspopup="true"
            onClick={handleClick}>
            <ExpandMoreIcon style={{ color: "white" }} />
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
            <MenuItem onClick={handleClose}><Link to="/login" className="nav-link">Logout</Link></MenuItem>
          </Menu>


        </div>
      </div>

    </div>
  )

}

export default Navbar

