import React from "react";
import Grid from "@material-ui/core/Grid"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div class="header">
      <div className="header_left">
        <img src="https://static.xx.fbcdn.net/rsrc.php/yD/r/d4ZIVX-5C-b.ico"></img>


      </div>

      <div className="header_center">
        <div
          className="header_options
        header_option--active"
        >
          <HomeIcon fontSize="large" />
        </div>
        <div className="header_options">
          <PlaylistAddCheckIcon fontSize="large" />
        </div>
        <div className="header_options">
          <SubscriptionsIcon fontSize="large" />
        </div>
      </div>

      <div className="header_right">
        <div className="header_input">
          <SearchIcon />
          <input placeholder="Search Movies" type="text" />
        </div>

        <div>
          <Button className="expand-button" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <ExpandMoreIcon />
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