import { Card } from "react-bootstrap";
import { useHistory } from "react-router";


function MovieCard(props) {
    const history = useHistory();

    function onClick() {
        props.onMovieClick(props.id)
        history.push("/movieDetails")
    }
    return (
        <Card id={props.id} onClick={onClick}>
            <Card.Img variant="top" src={props.poster} />
            <Card.Text>
                <span>{props.title}</span>
            </Card.Text>
        </Card>
    )
}

export default MovieCard;