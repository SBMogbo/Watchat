import {Button} from "react-bootstrap";
import {Icon, IconButton} from '@material-ui/core';


function PlatformButtons() {
    return (
        <>
            <IconButton>
                <Button href="https://www.netflix.com" target="_blank" variant="danger">Netflix</Button>
                {' '} </IconButton>

            <IconButton>
                <Button href="https://www.hulu.com/welcome?orig_referrer=https%3A%2F%2Fwww.google.com%2F" target="_blank" variant="success">Hulu</Button>
                {' '} </IconButton>
            <IconButton>
                <Button href="https://www.primevideo.com/" target="_blank" variant="primary">Amazon Prime</Button>
                {' '} </IconButton>
            

        </>
    )

}

export default PlatformButtons;
