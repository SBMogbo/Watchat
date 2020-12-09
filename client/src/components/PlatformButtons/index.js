import {Button} from "react-bootstrap";
import {Icon, IconButton} from '@material-ui/core';


function PlatformButtons() {
    return (
        <>
            <IconButton>
                <Button variant="danger">Netflix</Button>
                {' '} </IconButton>

            <IconButton>
                <Button variant="success">Hulu</Button>
                {' '} </IconButton>
            <IconButton>
                <Button variant="primary">Amazon Prime</Button>
                {' '} </IconButton>
            <IconButton>
                <Button variant="warning">CrunchyRoll</Button>
                {' '} </IconButton>

        </>
    )

}

export default PlatformButtons;
