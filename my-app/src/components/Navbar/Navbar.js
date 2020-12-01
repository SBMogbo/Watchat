import React from "react";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import FeaturedVideoRoundedIcon from '@material-ui/icons/FeaturedVideo';
import QueueRoundedIcon from '@material-ui/icons/Queue';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { IconButton } from "@material-ui/core";
import "./style.css";


function Navbar() {
    return (
        <div className="header">

            <div className="header-left">
                <div className="header-info">
                    Logo
                </div>
                </div> 

                <div className="header-center">
                    <div className="header-option">
                    <HomeIcon fontSize="Large"/>
                    </div>
                    <div className="header-option">
                    <FeaturedVideoRoundedIcon fontSize="Large"/>
                    </div>
                    <div className="header-option">
                    <QueueRoundedIcon fontSize="Large"/>
                    </div>
                </div>

                <div className="header-right">
                    <div className="header-input">
                        <SearchIcon />
                        <input placeholder="Search Movie" type="text" />
                    </div>
                    <IconButton>
                    <ExpandMoreIcon fontSize="large"/>
                    </IconButton>
                   
                </div>
        </div> 

    )
}

export default Navbar;