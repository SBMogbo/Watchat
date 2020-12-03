import React from "react";
import Grid from "@material-ui/core/Grid"
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {IconButton} from "@material-ui/core";
import "./style.css";


function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

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
            <img src="https://static.xx.fbcdn.net/rsrc.php/yD/r/d4ZIVX-5C-b.ico"></img>


          </div>
          {/* Header Center */}
          <div className={'col-12 col-md-6 d-flex p-1 '}>
            <div className="col-4 d-flex justify-content-center header_options">
              <HomeIcon fontSize="large"/>
            </div>
            <div className="col-4 d-flex justify-content-center header_options">
              <PlaylistAddCheckIcon fontSize="large"/>
            </div>
            <div className="col-4 d-flex justify-content-center header_options">
              <SubscriptionsIcon fontSize="large"/>
            </div>
          </div>

          {/* Start of Header Right*/}

          <div className="col-12 col-md-3 d-flex justify-content-center p-1">

            <SearchIcon fontSize="large"/>
            <input className={'header_input'} placeholder="Search Movies" type="text"/>


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
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Support</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>


          </div>
        </div>

      </div>
  )

}

export default Navbar

