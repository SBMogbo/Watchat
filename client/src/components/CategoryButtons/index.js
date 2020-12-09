import "./style.css";
import {Button} from "react-bootstrap";
import {IconButton} from '@material-ui/core';


function CategoryButtons() {
    return (
        <>
            <IconButton>
                <Button variant="outline-light">All</Button>
                {' '} </IconButton>
            <IconButton>
                <Button variant="outline-light">Movies</Button>
                {' '} </IconButton>
            <IconButton>
                <Button variant="outline-light">TV Shows</Button>
                {' '} </IconButton>

                <IconButton>
                <Button variant="outline-light">Documentaries</Button>
                {' '} </IconButton>

                <IconButton>
                <Button variant="outline-light">Genre</Button>
                {' '} </IconButton>

                <IconButton>
                <Button variant="outline-light">Anime</Button>
                {' '} </IconButton>

                <IconButton>
                <Button variant="outline-light">Year</Button>
                {' '} </IconButton>

                <IconButton>
                <Button variant="outline-light">Rating</Button>
                {' '} </IconButton>

        </>
    )

}

export default CategoryButtons;
