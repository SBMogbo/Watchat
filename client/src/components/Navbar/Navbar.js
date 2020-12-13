import React, { useState } from "react";
import "./style.css";
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
import {useDispatch} from "react-redux";
import {setSearch} from "../../utils/AppSlice";
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
      <div className={'container-fluid header'}>
        <div className={'row p-3'}>
          {/*Header Left*/}
          <div className="col-12 col-md-3 d-flex justify-content-center p-1">
               <MovieFilterSharpIcon  style={{marginTop:"14px", color:"#f4ca16"}}fontSize="large"/>
               <h3 style={{marginTop:"15px", marginLeft:"10px", color:"white"}}>WatchAt</h3>
          </div>
        {/* Header Center */}
        <div className={'col-12 col-md-6 d-flex p-1 '}>
          <div className="col-4 d-flex justify-content-center header-option" title="Home">
            < Link to="/home" className="nav-link">
             <dfn title="Home"><HomeIcon fontSize="large" /></dfn> 
            </Link>
          </div>
          <div className="col-4 d-flex justify-content-center header-option" title="Watched">
            <Link to="/watched" className="nav-link" >
              <dfn title="Watched"> <PlaylistAddCheckIcon fontSize="large" /> </dfn>
            </Link>
          </div>
          <div className="col-4 d-flex justify-content-center header-option" title="Watchlist">
            <Link to="/watchlist" className="nav-link">
             <dfn title="Watchlist"> <SubscriptionsIcon fontSize="large" /> </dfn> 
            </Link>
          </div>
        </div>
          {/* Start of Header Right*/}
          <div className="col-12 col-md-3 d-flex justify-content-center p-1">
          <SearchIcon style={{color:"white", marginTop:"10px"}} fontSize="large" />
          <form onSubmit={movieSearchFunc}>
            <input className={'header_input'} placeholder="Search Movies" value={query} type="text" onChange={(e) => setQuery(e.target.value)} />
          </form>
          {/* This is for the Drop Down Far Right. */}
            <Button className="expand-button" aria-controls="simple-menu" aria-haspopup="true"
                    onClick={handleClick}>
              <ExpandMoreIcon style={{color:"white"}}/>
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
              <MenuItem onClick={handleClose}><Link to="/profile" className="nav-link">Profile</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link to="/reviewed" className="nav-link">Reviewed</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link to="/movieDetails" className="nav-link">Details</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link to ="/login" className="nav-link">Logout</Link></MenuItem>
            </Menu>
        </div>
      </div>
    </div>
  )
}
export default Navbar
